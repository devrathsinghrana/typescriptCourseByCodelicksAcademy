//  Record type can be very useful for creating object types whose properties are not known in advance but we know what type of values they will hold.
//  Record<Keys, Type> is a utility type that allows you to create an object type with specific keys and a specific value type.
//  For example, if you want to create an object type where all properties are strings,
type StringRecord = {
  [key: string]: string;
};

// or

// another way to define it using Record type
type StringRecordUsingRecord = Record<string, string>;
//  This is equivalent to the above StringRecord type.

let exampleRecord: StringRecord = {
  name: "John",
  age: "30",
  city: "New York",
};

let settingConfig: StringRecordUsingRecord = {
  theme: "dark",
};
// here total or possible properties is not fixed but their type is fixed
let exampleRecordTwo: StringRecord = {
  name: "Kohli",
  city: "Delhi",
  // score:23,//Type 'number' is not assignable to type 'string'.
};

console.log(exampleRecord, exampleRecordTwo, settingConfig);

// Object type is used when we are completely aware about our object properties and their types
type EmployeeObjectType = {
  empName: string;
  empCode: number;
};

let empDetails: EmployeeObjectType = {
  empName: "Hanuman",
  empCode: 7,
};

console.log(empDetails);

//  tuples
//  Tuples are a special type of array in TypeScript that allow you to define an array with a fixed number of elements, where each element can have a different type.
//  They are useful when you want to represent a collection of values with different types in a specific order.
//  For example, if you want to create a tuple that contains a string and a number
type StringNumberTuple = [string, number];
let exampleTuple: StringNumberTuple = ["Alice", 25];

console.log(exampleTuple);

// array type is used when we want to give type to a unknown length of list with similar types of data
type StringArray = string[];
let exampleArray: StringArray = ["apple", "banana", "cherry"];
console.log(exampleArray);
