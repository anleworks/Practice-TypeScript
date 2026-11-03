"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Bai tap Lab 06");
const sv1 = {
    id: 1,
    name: "an",
    email: "hinhsunhi@gmail.com",
    isPremium: true,
    contact: 3239131,
};
const sv2 = {
    id: 2,
    name: "truong",
    email: "truongsondong@gmail.com",
    isPremium: false,
    contact: "truong@facebook.com",
};
const student = [sv1, sv2];
const course = {
    courseId: 4545,
    title: "Khoa hoc TypeScript",
    price: 340000,
    students: [],
};
const registerStudentToCourse = (student, course) => {
    if (student) {
        course.students.push(student);
    }
};
registerStudentToCourse(sv1, course);
registerStudentToCourse(sv2, course);
console.log(course);
