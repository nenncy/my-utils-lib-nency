const { formateString, add, subtract, randomNumber } = require("../index.js");

// Test capitalize
test("capitalize should capitalize first letter", () => {
  expect(formateString("hello")).toBe("Hello");
});

// Test add function
test("add should return the sum of two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

// Test subtract function
test("subtract should return the difference of two numbers", () => {
  expect(subtract(5, 2)).toBe(3);
});

// Test randomNumber function
test("randomNumber should return a number in range", () => {
  const num = randomNumber(1, 10);
  expect(num).toBeGreaterThanOrEqual(1);
  expect(num).toBeLessThanOrEqual(10);
});
