import { it, expect, describe } from "vitest";

describe("test sute", () => {
  it("test case", () => {
    const result = "The requested file was not found!";
    // Loose (too general)
    expect(result).toBeDefined();

    // tight (too specific)
    expect(result).toBe("The requested file was not found.");

    //Better assertion
    expect(result).toMatch(/not found/i);
  });
});
