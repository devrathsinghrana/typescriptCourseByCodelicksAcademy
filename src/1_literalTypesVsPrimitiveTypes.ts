// Typescript at its core takes types as input and return types as output.
//here we get the cumulative type (PrimitiveType as output) of all primitive types(primitive types as input) in typescript
type PrimitiveType =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | undefined
  | null;
// Primitive types are corresponding to the basic data types in JavaScript, such as `string`, `number`, and `boolean`. so they are exception in ts where types are in PascalCase.

let sampleValue: PrimitiveType;

sampleValue = "hello"; // string
sampleValue = 42; // number
sampleValue = true; // boolean
sampleValue = BigInt(100); // bigint

// sampleValue = {}; // Type '{}' is not assignable to type 'PrimitiveType'.

let stringVal: string = "hello"; // string primitive type

// stringVal=23; // Type 'number' is not assignable to type 'string'.

// Literal types are specific values that can be assigned to a variable, while primitive types are the basic building blocks of types in TypeScript.

// Literal types can be used to create more specific types, such as a type that only allows a specific string value or a specific number value like `'hello'`, `42`, or `true`.
// Literal types can also be used to create union types, which allow a variable to be one of several specific values.

type Env = "dev" | "prod" | "stg"; // Literal type for environment which only takes one of three defined values not any other string or value. This helps to constraint the values that can be assigned to a variable of type `Env` so acts as a type guard.
// This is useful for ensuring that only valid values are used in the code, and it can help prevent bugs by catching errors at compile time rather than runtime.
// Literal types are often used in conjunction with union types(|) to create more complex types that can represent a range of specific values.

let currentEnv: Env;
currentEnv = "dev"; // valid
// currentEnv = "test"; // Type '"test"' is not assignable to type 'Env'.

type LuckyNumberSeven = 7; // Literal type for the number 7
let myLuckyNumber: LuckyNumberSeven;
myLuckyNumber = 7; // valid
// myLuckyNumber = 8; // Type '8' is not assignable to type '7'.
