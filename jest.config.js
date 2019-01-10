const jestConfig = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  collectCoverageFrom: [
    "client/**/*.{js}",
    "server/**/*.{js}",
    "!**/node_modules/**"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -0
    }
  }
};

module.exports = jestConfig;
