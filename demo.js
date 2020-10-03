'use strict'; 
(function() {

  let person = {
    firstName: 'Sanya',
    lastName: 'Odare',
    age: 29
  };

  // Object.defineProperty(person, 'firstName', {configurable: false});
  // Object.defineProperty(person, 'firstName', {writable: true});

  delete person.firstName;

  display(person);

})();