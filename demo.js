'use strict'; 
(function() {

  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.age = 29;

  var alani = new Person('Alani', 'Odare');
  var asake = new Person('Asake', 'Odare');

  Person.prototype = { age: 18 };

  let james = new Person('James', 'Odare');

  display(Person.prototype);
  display(alani.age);
  display(asake.age);
  display(james.age);

})();