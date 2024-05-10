module.exports = {
    preset: 'ts-jest', // Use the ts-jest preset for TypeScript support
    testEnvironment: 'node', // Run tests in a Node.js environment
    testMatch: ['**/*.test.ts'], // Look for test files ending in .test.ts
    moduleFileExtensions: ['ts', 'js', 'json', 'node'], // Specify the file extensions Jest should handle
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files using ts-jest
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Map imports starting with @/ to the src directory
    },
    watchPlugins: [ // Optional: Plugins for watch mode (e.g., for code coverage reports)
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ],
  };
  
