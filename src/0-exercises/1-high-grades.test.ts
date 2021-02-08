import { hasHighGrades, getHighAchievers } from "./1-high-grades";

test("hasHighGrades - checks if a pupil has high grades (grades A or A*)", () => {
  expect(hasHighGrades({name: "Beatrice Potter", grade: "A"})).toBe(true);
  expect(hasHighGrades({name: "Winnie The Pooh", grade: "A*"})).toBe(true);
  expect(hasHighGrades({name: "Arthur Aardvark", grade: "B"})).toBe(false);
  expect(hasHighGrades({name: "Minnie Mouse", grade: "D"})).toBe(false);
});

test("getHighAchievers - takes an array of pupils and returns only those with high grades", () => {
  expect(getHighAchievers([{name: "Beatrice Potter", grade: "A"},{name: "Winnie The Pooh", grade: "A*"}])).toStrictEqual([{name: "Beatrice Potter", grade: "A"},{name: "Winnie The Pooh", grade: "A*"}]);
  expect(getHighAchievers([{name: "Arthur Aardvark", grade: "B"}])).toStrictEqual([]);
  expect(getHighAchievers([{name: "Arthur Aardvark", grade: "B"},{name: "Winnie The Pooh", grade: "A*"}])).toStrictEqual([{name: "Winnie The Pooh", grade: "A*"}]);
});
