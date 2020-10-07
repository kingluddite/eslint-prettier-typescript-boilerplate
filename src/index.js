
const golden = function goldenFunction() {
  alert("this is golden!!");
};

golden();

const newFunction = function literal(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      alert(firstName + " " + lastName);
      return;
    },
  };
};

newFunction("William", "Imoh").fullName();

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};
const firstName = newObject.firstName;
const lastName = newObject.lastName;
const destination = newObject.destination;
const occupation = newObject.occupation;

console.log(firstName, lastName, destination, occupation);

const west = ["Will", "Chris", "Sam", "Holly"];

const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined = west.concat(east);

console.log(combined);

const planet = "earth";
const view = "glass";
var before =
  "Lorem " +
  view +
  "dolor sit amet, " +
  "consectetur adipiscing elit," +
  planet +
  "do eiusmod tempor " +
  "incididunt ut labore et dolore magna aliqua. Ut enim" +
  " ad minim veniam";

console.log(before);
