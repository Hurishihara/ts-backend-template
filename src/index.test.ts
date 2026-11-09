import { describe, expect, it } from "@jest/globals";

import { greet } from "./index.js";

describe("greet", () => {
  it("greets by name", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
  });
});
