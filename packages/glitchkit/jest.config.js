/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>/dist/'], // Only look in compiled test directory
  testMatch: ['**/?(*.)+(test).[jt]s'], // Match *.test.js or *.test.ts
  testPathIgnorePatterns: ['\\.d\\.js$'], // Ignore all .d.js files
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {}, // No transform needed if tests are already compiled
  verbose: true,
};
