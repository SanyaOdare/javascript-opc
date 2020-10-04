// 'use strict'; 
// (function() {

//   function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     Object.defineProperty(this, 'fullName', {
//       get: function() {
//         return this.firstName + ' ' + this.lastName
//       },
//       enumerable: true
//     });
//   }

//   function Student(firstName, lastName, age) {
//     Person.call(this, firstName, lastName, age);
//     this._enrolledCourses = [];

//     this.enroll = function(courseId) {
//       this._enrolledCourses.push(courseId);
//     };

//     this.getCourses = function() {
//       return this.fullName + "'s enrolled course are: " +
//         this._enrolledCourses.join(', ');
//     };
//   }
//   Student.prototype = Object.create(Person.prototype);
//   Student.prototype.constructor = Student;

//   let alani = new Student('Alani', 'Odare', 29);

//   alani.enroll('CS205');
//   alani.enroll('MA1010');
//   alani.enroll('PS101');

//   display(alani.getCourses());

// })();