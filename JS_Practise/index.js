//1. Variables Let,Const,Var


//let variable//
//Variables declared with let have Block Scope
//Variables declared with let must be Declared before use
//Variables declared with let cannot be Redeclared in the same scope and Reassignment is allowed
{
  let a = 10;
  a = 20;
} 


//Const Variable//
//Variables declared with Const have Block Scope
//Variables declared with const must be Declared and assign value before use elase it will throw error
//Variables declared with const cannot be Redeclared and Reassigned

{
  const b = 20;
  // b = 10; ❌ Error: Assignment to constant variable 
}


//Var Varibale
//Variables declared with Var have function Scope
//Variables declared with var must be Declared before use
//Variables declared with let can be Redeclared within same scope and and Reassignment is allowed
function xyz(){

  var c = 30;
  var c = 40;
  console.log(c);

}

//2. Functions

//A JavaScript function is a block of code designed to perform a particular task.

function xyz(a,b)//function declared with parameter
{
  console.log(a,b);
}

xyz(6,1) // Function call with arguments passed.

//Arrow Function

/*const xyz = () =>{
  console.log(a,b);
}

xyz(8,1) */

//Object creation

//1 method create a variable name car and directly assign properties aka key value within {}

const car = {
  name:"suzuki", 
  type:"baleno", 
  engine:1200
}

// 2-Method create an empty variable and push the properties to objects

const person = {};

person.firstName = "Nanda";
person.lastName = "Kishore";
person.age = 27;

// 3-Method using new keyword.

const animal = new Object();

animal.name = "tiger";
animal.color = "Yellow";

// Accessing Object Properties

console.log(animal.name);
console.log(person["firstName"]);

//Object Methods
//Methods are actions that can be performed on objects. Methods are function definitions stored as property values.

const car2 = {
  name:"Hyundai",
  model: "i20",
  engine: 1200,
  start: function start(){
    console.log(`${this.name} car is started`);//this keyword refers to car2 object, so this.name means the name property of car2 object
  }
}

car2.start();

/* JavaScript defines 7 types of primitive data types:

string
number
boolean
null
undefined
symbol
bigint

*/

//JS Objects are Mutable, They are addressed by reference, not by value.

// Z is not a copy of X, both X and Z are same memory address. So any changes to Z will also affect X object.

const x = {name:"dummy", age:12};

const z = x;

z.name = "vibe"

console.log(x.name);

console.log(z.name)

//Adding new properties to object

z.role = "Sofware Engineer";

//Deleting property from an object

delete z.age;

console.log(z);


//Nested Objects

//Property values in an object can be other objects

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(myObj.myCars.car2); //Accessing nested objects

//JS Object Display

//Using Object.Values()

console.log(Object.values(car2)); //return values of properties in the object in array format

//Using Object.entries() 

const person2 = {name:"nk", age:25};

for (let[key, value] of Object.entries(person2)){
  //Oject.entries It converts an object into an array of key-value pairs ["name","nk"], ["age", "25"]
  console.log(`${key} -> ${value}`);
}

//Using JSON.stringify()

const person3 = {
  name: "john",
  age: 30,
  city: "New york"
};

//Stringify Object

let myString = JSON.stringify(person3);

console.log(myString);

//JS Object Constructors

//Below example is constructor Function

function Human (name, age){
  this.name = name;
  this.age = age;
}

const Men = new Human ("john", 30);
console.log(Men);

//Adding Method to an object

Men.walk = function walk(){
  console.log("I can Walk");
}

console.log(Men);


//Adding method to constructor function

Human.prototype.run = function run () {
  console.log("I'm running");
}

Men.run();

//Event Handling in JS see in html file




