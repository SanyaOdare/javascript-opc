// 'use strict'; 
// (function() {

//   let person = {
//     name: {
//       first: 'Sanya',
//     last: 'Odare',
//     },    
//     age: 29
//   };

//   Object.defineProperty(person, 'fullName',
//   {
//     get: function() {
//       return this.name.first + ' ' + this.name.last;
//     },
//     set: function(value) {
//       var nameParts = value.split(' ');
//       this.name.first = nameParts[0];
//       this.name.last = nameParts[1];
//     }
//   });

//   person.fullName = 'Alani James';

//   display(person.fullName);

// })();