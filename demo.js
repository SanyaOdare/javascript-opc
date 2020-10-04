'use strict'; 
(function() {

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  Person.prototype.age = 4;

  let alani = new Person('Alani', 'Odare');

  display(alani.__proto__);
  display(alani.__proto__.__proto__);
  display(alani.__proto__.__proto__.__proto__);

})();