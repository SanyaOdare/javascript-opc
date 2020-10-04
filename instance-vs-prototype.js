'use strict'; 
(function() {

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 29;

  let alani = new Person('Alani', 'Odare');
  let asake = new Person('Asake', 'Odare');
  alani.age = 18;
  display(alani.hasOwnProperty('age'));
  display(alani.age);
})();