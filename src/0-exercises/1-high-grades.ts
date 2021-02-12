"use strict"

interface Grades {
    name: string;
    grade: string;
}

// const hasHighGrades = (student: Grades): boolean => student.grade == "A" || student.grade == "A*";

// const getHighAchievers = (students: Grades[]): Grades[] => students.filter(hasHighGrades);

// const getHighAchievers = (students: Grades[]): Grades[] => students.filter((student: Grades): boolean =>
//     student.grade == "A" || student.grade == "A*");

const getHighAchievers = (students: Grades[]): Grades[] => students.filter((student) =>
    student.grade == "A" || student.grade == "A*");

// export { hasHighGrades, getHighAchievers};

export { getHighAchievers };