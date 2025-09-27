type NonEmptyArray<T> = [T, ...T[]];
/**
 * 
  The NonEmptyArray<T> type is a tuple type that represents an array that is guaranteed to have at least one element of type T.

Let's break down the syntax:

NonEmptyArray<T> - This is a generic type where T represents the type of elements in the array
[T, ...T[]] - This is a tuple type with:
T - The first element (required), ensuring the array has at least one item
...T[] - A rest element that represents zero or more additional elements of type T
Key Benefits:
Type Safety: Prevents operations on potentially empty arrays
Compile-time Guarantees: TypeScript knows the array will always have elements
Better IntelliSense: Access to array methods without null checks
Examples:
This type is particularly useful when you need to ensure an array has content before performing operations that require at least one element, like finding the maximum value or getting the first item.
 *  
 */

// Type Guard is a function which return true or false and narrows the type of passed parameters.
// Like below function ensures array is of non empty type
// It generally uses is keyword
function isNonEmpty<A>(arr: A[]): arr is NonEmptyArray<A> {
  return arr.length > 0;
}

function myFunc(arr: string[]) {
  return arr;
}

const myArray = ["1"];

if (isNonEmpty(myArray)) {
  myFunc(myArray);
}
