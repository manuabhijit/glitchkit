/** @type {import('jest').Config} */
module.exports = {
  roots: ['<rootDir>/lib/'], // ✅ Point to source TypeScript files
  testMatch: ['**/?(*.)+(test).[tj]s?(x)'], // Match *.test.ts, *.test.js
  testPathIgnorePatterns: ['\\.d\\.ts$'], // Ignore .d.ts
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest', // ✅ Compile .ts files with ts-jest
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  verbose: true,
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    '<rootDir>/lib/**/*.{ts,tsx}', // ✅ Include TS/TSX files
    '!<rootDir>/lib/**/index.ts', // ❌ Exclude index.ts
    '!<rootDir>/lib/glitchkit.ts', // ❌ Exclude glitchkit.ts
    '!<rootDir>/lib/**/*.test.{ts,tsx}', // ❌ Exclude test files
    '!<rootDir>/lib/**/__mocks__/**', // ❌ Exclude mock files
  ],
};
