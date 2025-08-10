// Unknown type basically comes at top of the type hierarchy in TypeScript.
// It is a type that can represent any value.
// It is used when you want to allow any type of value but still want to ensure type safety i.e. if you want to perform operations on the value, you need to perform type checking or type assertion first in case of unknown but any does not require such type check so it is less safe.
// It is generally used in cases where type of data is not known such as receiving form data submitted or json data coming from API or when you want to allow any type of value but still want to ensure type safety.

let numberValue: unknown; // Variable of unknown type
numberValue = 42; // valid, as it's a number
numberValue = "hello"; // valid, as it's a string
numberValue = true; // valid, as it's a boolean
numberValue = {}; // valid, as it's an object
numberValue = []; // valid, as it's an array

// HOW it behaves in case of UNION(|) and INTERSECTION(&) types
// Union type with unknown
// In case of UNION the type with unknown is treated as the most general type, meaning it can accept any value that is assignable to the other types in the union.
// Eg :

type UnionWithUnknown = string | unknown; // Union type that can be either string or unknown
let unionValue: UnionWithUnknown; // Variable of union type
// as we can see in case of union type with most general type ultimately the type of variable i.e. unknown.
unionValue = "hello"; // valid, as it's a string
unionValue = 42; // valid, as it's a number
console.log(unionValue); // Output: 42

// Intersection type with unknown
// In case of intersection the type which is most specific is considered the type of variable
// Eg :
type IntersectionWithUnknown = "hello" & string & unknown; // Intersection type that can be both string and unknown

// So in below example hello string literal becomes the type of the variable as it is the most specific type in the intersection.
// If we try to assign any other value to this variable, it will throw an error.
let intersectionValue: IntersectionWithUnknown; // Variable of intersection type
intersectionValue = "hello"; // valid, as it's a string and also satisfies the intersection type
console.log(intersectionValue); // Output: hello
// intersectionValue = 42; // Error: Type 'number' is not assignable to type '"hello" & string & unknown'.
// intersectionValue = "world"; // Error: Type '"world"' is not assignable to type '"hello" & string & unknown'.
