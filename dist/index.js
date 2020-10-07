"use strict";

console.log('test');

var golden = function goldenFunction() {
  console.log('this is golden!!');
};

golden();

var newFunction = function literal(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function fullName() {
      alert(firstName + ' ' + lastName);
      return;
    }
  };
};

newFunction('William', 'Imoh').fullName();
var newObject = {
  firstName: 'Harry',
  lastName: 'Potter Holt',
  destination: 'Hogwarts React Conf',
  occupation: 'Deve-wizard Avocado',
  spell: 'Vimulus Renderus!!!'
};
var firstName = newObject.firstName;
var lastName = newObject.lastName;
var destination = newObject.destination;
var occupation = newObject.occupation;
console.log(firstName, lastName, destination, occupation);
var west = ['Will', 'Chris', 'Sam', 'Holly'];
var east = ['Gill', 'Brian', 'Noel', 'Maggie'];
var combined = west.concat(east);
console.log(combined);
var planet = 'earth';
var view = 'glass';
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet + 'do eiusmod tempor ' + 'incididunt ut labore et dolore magna aliqua. Ut enim' + ' ad minim veniam';
console.log(before);