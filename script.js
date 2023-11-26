// value is a piece of data , a value can be stored in a variable. So this way we can use them over and over again
var value = 22;

// here 22 is a value

// ? declaring a variable

var firstName = "hari";

// this will create a real variable in computer memory and will store value in the variable

// ? variable

//  varible is used to store information and use it later

// ! variable naming conventions

// A-Z,a-z,_,$,0-9
// names cannot start with a number
// use camelcase
// they are case sensitive
// use meaningful names
// names cannot be reserved key words
// should not contain whitespace between them

// ? data types

// values can have different datatypes
// object or primitive

// 1. Number

// floating point number, used for decimals and integers

var age = 23;

// 2.strings

// sequence of characters

var firstName = "hari";

// boolean

// logical type that can only be true or false, used for taking decisions

var isOpen = true;

// undefined
// undefined is a value taken by a variable which is not yet defined

var x;

// Null
// null means empty value

// symbol
// bigint

// javascript has dynamic typing : we do not have to manually define the data type of a value while declaring a variable, instead javascript does this automatically,
// we can use same variable to store different datatype later in the code

// ! comments
// single line
/* multi 
line */

// typeof is an operator just like + or - to show us the data type of a value

console.log(typeof 22); //number
console.log(typeof "eren"); //string
console.log(typeof []); //object
console.log(typeof {}); //object
console.log(typeof null); //object

// this is regarded as a bug or error, this bug is never corrected for legacy reasons

console.log(typeof NaN); //number
console.log(typeof -"eren"); //number
console.log(typeof function () {}); //function
console.log(typeof undefined); //undefined

// !let, const, var
// let and const are introduced in es6 var is old way of declaring a varibale
// value declared in const can never be changed

// ? value declared with const cannot be a empty value like; const x;

// we do not need to declare variable like let lastName="babu", but lastName ="hari", this doesnt create a varible in the current scope, instead javascript will create a property on global object

// var can be reassigned, redeclared, hoisted,function scope
// const cannot be reassigned, redeclared, hoisted and block scope
// let can be reassigned, but not redeclared, hoisted and block scope

// !hoisting
// hoisiting is a javascript mechanism where function and variable declarations are moved to the top of their scope before code execution

// !operators

//operators are symbols used to perform logical and arithmetic manipulations

// !types of operators
// arithmetic

var x = 22 + 2;
var x = 22 - 2;
var x = 22 * 2;
var x = 22 % 2;
var x = 2 ** 2;
var x = 22 / 2;

// assignment

var y = 22;

// combined assignment

x += 2;

// logical
// logical && || !

// comparison
// comparison operator produces a boolean value

console.log(2 > 3);
// increment and decrement
// post
x++;
console.log(x);
x--;
console.log(x);
// pre
++x;
console.log(x);
--x;
console.log(x);

// operator precedence

// the order in which operators are executed

// for assignment operator it executes from right to left

var x = (y = 12);
console.log(x, y);

// strings

var x = "eren " + " yeager";
var x = "eren \nyeager";
console.log(x);

// template literals

var x = `${y} is my name
lajsfl`;
console.log(x);

// !conditionals

// executes different block of code based on different conditions

if (x === "one") {
  console.log(2);
} else if (x === "22") {
  console.log("dfasdfasd");
} else {
  console.log("sdflasdf");
}

// !type conversion

Number("22");
String(22);

// !type coercion

// the process of implicit or automatic conversion of value from one datatype to another data type, like from string to number, number to string, boolean to number

console.log(1 + "2");
console.log(1 + 2 + "3");
console.log(1 + "2" + 3);
console.log(1 + "2" + (1 + 2));

// !truthy and falsy
// when converted to boolean either implicitly or explicitly returns true or false

// ! falsy values

// false, NaN, "",0,undefined, null

// all the other values are true

// strict equality doesnt perform type coercion

console.log(x === 2);

// loose equality performs type coercion

console.log(x == "2");

console.log(true == 1);
console.log(true == "1");
console.log(true == "true"); //false
console.log(null == undefined); //true
console.log(null == "null"); //false
console.log(undefined == "undefined"); //false
console.log(false == 0); //true
console.log(false == "0"); //true
console.log(false == ""); //true
console.log(false == "false"); //false

// !switch case

switch (x) {
  case "22":
  case "23":
    console.log("eren");
    break;
  default:
    console.log("nitthamunena");
    break;
}

// !statment
// statement dont produce a value, they cannot be passed as a function arguments

// ! expression
// expression is a piece of code that produces a value , they can be passed as a function arguments

// expressions can be assigned while statements can only be declared

// ! ternary operator

// evaluates a condition and executes block of code based on a condition

var x = 1 > 2 ? "yes" : "no";
console.log(x);

// javascript is backwards compatibility
// old features are never removed
// websites keep working forever

// use babel to transpile and polyfill your code to ensure browser compatibility for all users

// ! functions
// functions are reusable block of code that executes only when invoked

// ?calling a function
// functions can be called elsewhere in the code

// ?function arguments
// function arguments are values passed while calling a function

// ?function parameters are values passed when declaring a function
// these act as a input inside the function body

// ?return

// return keyword is used to return the value where the function is called

// ?function declarations

// function declaration used to create named functions with function keyword, function name, optional params,function body
// they can be hoisted
// need function name

let z = 3;
console.log(add(z, 3));

// it initially checks in the params and checks in the outer scope

function add(z, y) {
  return z + y;
}

// !function expressions
// function expressions are anonymous functions that are assigned to a variable
// doesnt require function name
// cannot be hoisted

var funcExp = function (x) {
  return x;
};
console.log(funcExp(2));

// !Array

// array is an ordered, integer indexed, collection of data

var arr = [1, "2", true, null];
arr[0];

// ! object

// object is used to create named values known as properties

var obj = {
  firstName: "hari",
  lastName: "babu",
};
console.log(obj.firstName, obj["firstName"]);

delete obj.firstName;

console.log(obj);

// !loops
// to execute block of code several times

var a = 1;

while (a < 3) {
  console.log(a);
  a++;
}

// while loop executes only when the condition is true

for (let i = 0; i <= 22; i++) {
  console.log(i);
}

// ! Javascript engine

// javascript engine is a program that executes javascript code

// ! callstack

// callstack is the place where our code is executed using something called execution context

// ! heap
// heap is used to store objects and functions, heap is an unstructured memory pool used to store objects that our app needs

// !compilation
// entire code is converted to machine code at once and then executed

// ! intrepretation

// code is executed line by line

// ! dom events

// whenever a dom event is fired, the callback function is put into the callback queue and when the call stack is empty the callback function is passed to the callstack so that it can be executed

// !execution context

// execution context is an arbitrary environment created by javascript for executing javascript code, it stores all the necessary information for the code to be executed

// when ever a function is called this will create a execution context and puts it on the top of the call stack so that it can be executed, when it completes execution or when it returns, it will be popped off from the call stack and execution will move to previous execution context

// ? whats inside execution context ?

// scope chain

// variable environment
// -- let const var declarations
// --functions
// --arguments object
// this keyword

// ! scope of variable

// scope of a variable determines the accessibility of variables else where in the code

// !lexical scoping

// the ability of function or block scope to access variables from its parent scopes

// !scope
// scope is the place where our variables are declared

// ! global scope
// variables can be accessed everywhere
// outside the function or block

// !local scope
// inside a block or function

// ! function scope
// inside a function

// !block scope
// inside a block
// this applies to const,let

let someValue = 26;
console.log(someValue);

{
  console.log(someValue);
}

function some() {
  return someValue;
}
console.log(some());

let anotherValue = 22;
{
  anotherValue = 23;
  console.log(anotherValue);
}
console.log(anotherValue);

var another = 12;
{
  var another = 13;
  console.log(another);
}
console.log(another);

// !temperal dead zone

// TDZ values are not accessible from top of their scope till they are declared

// makes it easier to avoid and catch errors

// var creates a property on widow
var x = 1;
console.log(x, window.x); // 1 1

// ! this keyword

// special keyword that is created for every execution context

// method ... object that is calling the method

var obj = {
  firstName: "hari",
  lastName: "babu",
  fullName: function () {
    return this.firstName;
  },
};

console.log(obj.fullName());

// function ... undefined in strict mode else global object

// arrow function ... lexical this

// event listener ...dom element that the handler is attached to

// arguments keyword is present in normal function, not in arrow function

function sum() {
  console.log(arguments.length);
}

sum(1, 2, 3);

// primitives number, string , boolean, null, undefined, bigint , symbol

// objects- object literal, arrays, functions

// ? All our objects are stored in heap
// ? all our primitives are stored in call stack , they are stored in execution context where they are declared

// ! primitives

// 1. javascript will create a unique identifier with variable name
// 2. then memory will be allocated to a certain address
// 3. value will be stored in the memory at certain address

// identifier points to the address not the value

// the value at certain address will not be changed, the value at certain address is immutable, when we change the value a new piece of memor is allocated and it points to the new address

// !objects
// when new object is created, it is stored in the heap
// when we declare a variable as an object an unique identifier is created which points to the memory in the stack which inturn points to the memory in the heap
// when we change the value it will change the value in the heap

var x = {
  firstName: "hari",
};

var y = x;

y.firstName = "eren";

console.log(x.firstName);

var x = [1, 2, 3];
var y = x;
y[3] = 22;
console.log(x);

// ! destructuring

// destructuring is a javascript expression that allows us to extract data from arrays, objects and set them into new distinct variables

// ! array destructuring

var arr = [1, 2, 3];

var [a, b, c] = arr;
console.log(a, b, c);

var [a, , b] = arr;
console.log(a, b);
var [a, b, c, d = 22] = arr;
console.log(a, d);

var arr = [1, [2, 3]];

var [a, [b, c]] = arr;
console.log(a, b, c);

// ! object destructuring

var obj = {
  first: "hari",
  last: "babu",
  nested: {
    first: "eren",
  },
};

var { first: eren } = obj;
console.log(eren);

console.log(obj);

var {
  nested: { first: nitth },
} = obj;

console.log(nitth);

var { last = "nitthamunena" } = obj;

console.log(last);

//! spread operator
// used to unpack an iterable into its individual elements

// ?copy

var x = [1, 2, 3];

var y = [...x];

var A = [1, 2, 3, ...x, 4];

console.log(A);
// ! rest operator

//  used to pack an iterable into an array
var x = [1, 2, 3, 4];

var [a, ...rest] = x;
console.log(rest);

// ? rest operator is the last element it cannot be used like the below

// var [a,...rest,c]=x

console.log(true || false);
console.log(true && false);
console.log(true ?? false);

console.log(x.eren?.mg);

// ! for of loop

var x = [1, 2, 3];
var x = "hari";
for (let y of x) {
  console.log(y);
}

var x = {
  firsrt: "hari",
  last: "babu",
};

for (let y in x) {
  console.log(y);
  console.log(x[y]);
}

// ! enchanced object literals

obj = { x };
// its like object ={x:x}

obj = {
  add(x, y) {
    return 2 + 3;
  },
};
console.log(obj.add(2, 3));

var obj = {
  ["eren"]: "grish",
};

// ! sets

var x = new Set([1, 1, 1, 1, 1, 2]);
console.log(x);
console.log(x.size);
console.log(x.has(2));
console.log(x.delete(2));
console.log(x);
console.log(x.clear());
console.log(x);

var x = new Set("haribabu");
console.log(x);
console.log(x.size);

var y = [...x];
console.log(y.length);

// !closure look at functions

// default params

function hari(x, y = 2, z = 22) {
  console.log(x, y, z);
}

hari(1, 2);

// to skip an argument
hari(1, undefined, 3);

// functions returning functions

var x = (c) => (a) => (b) => a + b + c;
console.log(x(1)(2)(3));

var obj1 = {
  first: "hari",
  last: "babu",
  full(x) {
    return this.first + this.last + x;
  },
};
var obj2 = {
  first: "hari",
  last: "prabha",
};

console.log(obj1.full.bind(obj2, "xyz")());
console.log(obj1.full.call(obj2, "x"));
console.log(obj1.full.apply(obj2, ["eren"]));

// ! functions as first class functions

//  javascript treats functions as first class citizens
// this means functions are simply values
//  pass functions as an arguments to other functions
// return functions from functions
// methods on functions

// ! higher order functions

// function that accepts function as an argument or returns a function

// ! call back functions

// function that can be passed as an argument to another function

// ! closures

// closure means that the inner function always has access to the variables and parameters of its outer function, even after the outer function is returned. it makes it possible for function to have private variables,
//  a closure is a function having access to the parent scope even after the parent is removed from the execution context

// ! constructor functions

function Add(a, b) {
  this.first = a;
  this.last = b;
  this.full = function () {
    return this.first + this.last;
  };
}

let hariBabu = new Add("hari", "babu");

console.log(hariBabu.full());

class Addy {
  constructor(a, b) {
    this.first = a;
    this.last = b;
  }
  full() {
    return this.first + this.last;
  }
}

var hariPrabha = new Addy("hari", "prabha");

console.log(hariPrabha.full());
console.log(hariPrabha);
