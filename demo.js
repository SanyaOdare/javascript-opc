'use strict'; 
(function() {

  let person = {
    firstName: 'Sanya',
    lastName: 'Odare',
    age: 10,
    isAdult() { return this.age >= 18; }
  };

  for (let propertyName in person) {
    display(propertyName);
  }


})();