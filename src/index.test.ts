import * as pulumi from "@pulumi/pulumi";
import "mocha";

pulumi.runtime.setMocks({
    newResource: function(args: pulumi.runtime.MockResourceArgs): {id: string, state: any} {
        return {
            id: args.inputs.name + "_id",
            state: args.inputs,
        };
    },
    call: function(args: pulumi.runtime.MockCallArgs) {
        return args.inputs;
    },
},
  "project",
  "stack",
  false, // Sets the flag `dryRun`, which indicates if pulumi is running in preview mode.
);


describe("Infrastructure", function() {
    let infra: typeof import("./tryme");

    before(async function() {
        // It's important to import the program _after_ the mocks are defined.
        infra = await import("./tryme");
    })

    describe("#server", function() {
        // TODO(check 1): Instances have a Name tag.
        // TODO(check 2): Instances must not use an inline userData script.
        // check 1: Instances have a Name tag.
        it("must have a name tag", function(done) {
            pulumi.all([infra.server.urn, infra.server.tags]).apply(([urn, tags]) => {
                if (!tags || !tags["Name"]) {
                    done(new Error(`Missing a name tag on server ${urn}`));
                } else {
                    done();
                }
            });
        });
    });

    describe("#group", function() {
        // TODO(check 3): Instances must not have SSH open to the Internet.
    });
    
});