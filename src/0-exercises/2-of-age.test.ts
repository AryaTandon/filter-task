import { isOfAge, getPeopleOfAge } from "./2-of-age";

test("isOfAge - checks if a person is older than 18", () => {
  expect(isOfAge({name: "Super Mario", age: 18})).toBe(true);
  expect(isOfAge({name: "Little Kiddo", age: 5})).toBe(false);
  expect(isOfAge({name: "Old grandma", age: 99})).toBe(true);
});

test("getPeopleOfAge - takes an array of people and returns only those who are over 18", () => {
  expect(getPeopleOfAge([{name: "Super Mario", age: 18}])).toStrictEqual([{name: "Super Mario", age: 18}]);
  expect(getPeopleOfAge([{name: "Little Kiddo", age: 5}])).toStrictEqual([]);
  expect(getPeopleOfAge([{name: "Little Kiddo", age: 5},{name: "Old grandma", age: 99}])).toStrictEqual([{name: "Old grandma", age: 99}]);
});
