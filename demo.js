'use strict'; 
(function() {

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }

  let alani = new Person('Alani', 'Odare', 29);

  display(alani);
})();