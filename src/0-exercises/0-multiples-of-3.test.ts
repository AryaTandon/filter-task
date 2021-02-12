import { isMultipleOfThree, getMultiplesOfThree } from "./0-multiples-of-3";

test("isMultipleOfThree - checks if a number is a multiple of 3", () => {
  expect(isMultipleOfThree(3)).toBe(true);
  expect(isMultipleOfThree(1)).toBe(false);
  expect(isMultipleOfThree(45)).toBe(true);
  expect(isMultipleOfThree(-30)).toBe(true);
});

test("getMultiplesOfThree - takes an array of numbers and returns only those which are multiples of 3", () => {
  expect(getMultiplesOfThree([1,2,3,4,5])).toStrictEqual([3]);
  expect(getMultiplesOfThree([3,6,9,12])).toStrictEqual([3,6,9,12]);
  expect(getMultiplesOfThree([-1,-2])).toStrictEqual([]);
});
