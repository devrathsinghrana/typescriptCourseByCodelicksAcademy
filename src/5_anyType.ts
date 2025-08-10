// never use any type in production code, it is only for demonstration purposes
type AnyType = any; // Variable of any type
let anyTypeVariable: AnyType; // Another variable of any type
anyTypeVariable = 42; // valid, as it's a number
anyTypeVariable = "hello"; // valid, as it's a string
anyTypeVariable = true; // valid, as it's a boolean

console.log(anyTypeVariable); // Output: true

