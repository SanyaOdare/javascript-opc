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

//   Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});

//   let alani = new Person('Alani', 'Odare', 29);
//   // alani.fullName = 'James Odare';

//   display(alani);
// })();