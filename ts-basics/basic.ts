// Primitives: num, string, bool
// More complex types:  array, obj
// Function types, parameters

//* Primitives

let age: number = 30;

age = -23;

let userName: string;

userName = 'John Doe';

let isInstructor: boolean;

isInstructor = false;

//* Complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking', '78'];

let person: {
  sex: string;
  age: number;
  address: any;
};

person = {
  sex: 'male',
  age: 69,
  address: '69 John Miller House',
};

let data: {
  sex: 'male';
  age: 69;
  address: '69 John Miller House';
}[];

//* Type inference

let people = 'How many people are there?'; // TS automatically understand it that this is a string type data.

// people = 23232   //! an example of inference where we do not need to define the type of the variable

let spice: string | number | boolean = 'How many spice are there?'; // Here we are using 'union type'.

spice = 1234;

spice = true;

//* type alias
type Example = {
  sex: string;
  age: number;
  address: any;
};
//now we gonna use Alias here to make the code shorter and more refine

//! let example: {
//!   sex: string;
//!   age: number;
//!  address: any;
//! };

let example: Example;

//! let example2: {
//!   sex: string;
//!   age: number;
//!   address: any;
//! }[];

let example2: Example[];

// Functions & types

function add(a: number, b: number) {
  return a + b;
}
function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2,3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split(' '); //! error

