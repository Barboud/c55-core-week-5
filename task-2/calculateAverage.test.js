import { test, expect } from "vitest";
import { calculateAverage } from "./calculateAverage.js";

test("Find the average from an array in a normal case with valid numbers", () => {
  // Arrange
  const numbers = [1, 5, 3];

  // Act
  const result = calculateAverage(numbers);

  // Assert
  expect(result).toBe(3);
});

test("Find the average from an array with a single number", () => {
  // Arrange
  const numbers = [5];

  // Act
  const result = calculateAverage(numbers);

  // Assert
  expect(result).toBe(5);
});

test("Find the average from an empty array", () => {
  // Arrange
  const numbers = [5];

  // Act
  const result = calculateAverage(numbers);

  // Assert
  expect(result).toBe(5);
});

test("Find the average from an array when a non-array input", () => {
  // Arrange
  const numbers = "123";

  // Act
  const result = calculateAverage(numbers);

  // Assert
  expect(result).toBe(null);
});

test("Find the average from an array when an array containing a non-number value", () => {
  // Arrange
  const numbers = [1, 2, "3"];

  // Act
  const result = calculateAverage(numbers);

  // Assert
  expect(result).toBe(null);
});
