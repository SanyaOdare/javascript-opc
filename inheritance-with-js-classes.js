// 'use strict'; 
// (function() {

//   class Person {
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age = age;
//     }

//     get fullName() {
//       return this.firstName + ' ' + this.lastName;
//     }
//     set fullName(fullName) {
//       var nameParts = fullName.split(' ');
//       this.firstName = nameParts[0];
//       this.lastName = nameParts[1];
//     }

//     isAdult() {
//       return this.age >= 18;
//     }
//   }

//   class Student extends Person {
//     constructor(firstName, lastName, age) {
//       super(firstName, lastName, age);
//       this._enrolledCourses = [];
//     }

//     enroll(courseId) {
//       this._enrolledCourses.push(courseId);
//     }

//     getCourses() {
//       return this.fullName + "'s enrolled courses are: ";
//         this._enrolledCourses.join(', ');
//     }
//   }

//   let alani = new Student('Alani', 'Odare', 29);

//   alani.enroll('CS101');

//   display(alani.getCourses());

// })();