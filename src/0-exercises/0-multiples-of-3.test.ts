import { isMultipleOfThree, getMultiplesOfThree } from "./0-multiples-of-3";

test("isMultipleOfThree - checks if a person is older than 18", () => {
  expect(isMultipleOfThree(3)).toBe(true);
  expect(isMultipleOfThree(1)).toBe(false);
  expect(isMultipleOfThree(45)).toBe(false);
  expect(isMultipleOfThree(-30)).toBe(true);
});

test("getMultiplesOfThree - takes an array of people and returns only those who are over 18", () => {
  expect(getMultiplesOfThree([1,2,3,4,5])).toStrictEqual([3]);
  expect(getMultiplesOfThree([3,6,9,12])).toStrictEqual([3,6,9,12]);
  expect(getMultiplesOfThree([-1,-2])).toStrictEqual([]);
});
