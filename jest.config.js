/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resetMocks: true,
  clearMocks: true,
  testPathIgnorePatterns: ["<rootDir>/__tests__/lib/"],
};