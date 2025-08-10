// Union type represents all possible types of values a variable can contain

// But Union type is uni directional and go one way not two ways i.e. you can assign a specific type variable say number type to union type variable but not the other way around.

// Eg:

type SomeUnionType = string | number; // Union type that can be either string or number
type SomeNumberType = number; // Specific type that can only be a number

let unionValueVariable: SomeUnionType; // Variable of union type
let numberValueVariable: SomeNumberType; // Variable of specific type

unionValueVariable = "hello"; // valid, as it's a string

numberValueVariable = 100; // valid, as it's a number
// numberValueVariable = unionValueVariable; // Error: Type 'string' is not assignable to type 'number'.
unionValueVariable = numberValueVariable; // valid, as union type can accept a number

console.log(unionValueVariable); // Output: 100

// Intersection type combines multiple types into one, allowing a variable to have properties of all the types involved

// Eg

type Person = {
  name: string;
};

type Recordable = {
  recordId: number;
};

type Employee = Person & Recordable; // Intersection type that combines Person and Recordable

// Type '{ name: string; }' is not assignable to type 'Employee'.
//   Property 'recordId' is missing in type '{ name: string; }' but required in type 'Recordable'.
// let employeeDetails: Employee = {
//   name: "John Doe",
// };
let employeeDetails: Employee = {
  name: "John Doe",
  recordId: 123, // valid, as it has properties of both Person and Recordable
};

console.log(employeeDetails); // Output: { name: 'John Doe', recordId: 123 }

