'use strict'; 
(function() {

  let person1 = {
    firstName: 'Sanya',
    lastName: 'Odare',
    age: 29
  };

  let person2 = Object.create(
    Object.prototype,
    {
      firstName: {value: 'Sanya', enumerable:true, writable:true, configurable:true},
      lastName: {value: 'Odare', enumerable:true, writable:true, configurable:true},
      age: {value:29, enumerable:true, writable:true, configurable:true},
    }
  );

  display(person1);
  display(person2);


})();