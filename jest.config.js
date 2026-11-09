import { createDefaultEsmPreset } from "ts-jest";

/** @type {import("jest").Config} */
export default {
  ...createDefaultEsmPreset({ tsconfig: "tsconfig.json" }),
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/*.test.ts"],
  // Map NodeNext-style "./foo.js" imports back to the .ts source.
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.test.ts"],
};
