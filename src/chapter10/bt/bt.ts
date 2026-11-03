export {};

console.log("Bai tap Lab 06");

// Type Student object
type TStudent = {
  id?: number;
  name?: string;
  email?: string;
  isPremium?: boolean;
  contact?: string | number;
};

// Type Course object
type TCourse = {
  courseId?: number;
  title?: string;
  price?: number;
  students: TStudent[];
};

const sv1: TStudent = {
  id: 1,
  name: "an",
  email: "hinhsunhi@gmail.com",
  isPremium: true,
  contact: 3239131,
};

const sv2: TStudent = {
  id: 2,
  name: "truong",
  email: "truongsondong@gmail.com",
  isPremium: false,
  contact: "truong@facebook.com",
};

const student = [sv1, sv2];
const course: TCourse = {
  courseId: 4545,
  title: "Khoa hoc TypeScript",
  price: 340000,
  students: [],
};

const registerStudentToCourse = (student: TStudent, course: TCourse) => {
  if (student) {
    course.students.push(student);
  }
};

registerStudentToCourse(sv1, course);
registerStudentToCourse(sv2, course);

console.log(course);
