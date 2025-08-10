// never type sits at the very bottom of our type hierarchy in TypeScript.
// It is a type that represents values that never occur. It is used to indicate that a function will never return a value, or that a variable will never hold a value.
// It is often used in cases where a function always throws an error or has an infinite loop and thus never completes its execution

// In case of intersection types, never type is used to indicate that a variable can never hold a value that satisfies all the types in the intersection.
// Eg:
type NeverType = string & number; // Intersection type that can never be satisfied
// Above type equates to never type as there is no value that can be both be a string and a number at the same time.
type AnotherNeverType = never;
let neverValue: NeverType; // Variable of never type
function throwError(): never {
  console.log("This function will never return a value.");
  throw new Error("This function always throws an error."); //commenting this will give an error A function returning 'never' cannot have a reachable end point.
}
throwError(); // Calling the function will throw an error and never return a value
