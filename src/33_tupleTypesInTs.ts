// Tuples are basically fixed size array

// We can create tuple of various lengths even empty one

// An empty tuple
type EmptyTuple = [];
// const emptyTuple:EmptyTuple=[1];//Give ERROR: Type '[number]' is not assignable to type '[]'.  Source has 1 element(s) but target allows only 0.
const emptyTuple: EmptyTuple = [];

// A tuple with single number
type SingleNumberTuple = [1];
// const singleNumberTuple: SingleNumberTuple = [2]; //ERROR: Type '2' is not assignable to type '1'
const singleNumberTuple: SingleNumberTuple = [1];

// first string and second number tuple
type StringAndNumberTuple = [string, number];
const stringAndNumberTuple: StringAndNumberTuple = ["stringy", 213];

// three elements of different types
type StringNumberBooleanTuple = [string, number, boolean];
const stringNumberBooleanTuple: StringNumberBooleanTuple = [
  "stringy",
  23,
  true,
];

// duplicate types of tuple elements
type DuplicateBooleanType = [boolean, string, boolean];
const duplicateBooleanType: DuplicateBooleanType = [false, "stringy", true];

// like arrays we can access tuple type using number literal index. Use index of tuple type to give distinct types.
type MultipleTypesInTuple = [number, string];
type NumberTupleUsingIndex = MultipleTypesInTuple[0];
type StringTupleUsingIndex = MultipleTypesInTuple[1];
const numberTupleUsingIndex: NumberTupleUsingIndex = 23453;
const stringTupleUsingIndex: StringTupleUsingIndex = "stringy";

// Use union of numeric literal indexes of tuple to create union types
type NumberAndStringUsingUnionOfIndex = MultipleTypesInTuple[0 | 1];
type NumberAndStringUsingUnionOfIndexOtherWay =
  | MultipleTypesInTuple[0]
  | MultipleTypesInTuple[1];
const numberAndStringUsingUnionOfIndex: NumberAndStringUsingUnionOfIndex = 23;
const numberAndStringUsingUnionOfIndexOtherWay: NumberAndStringUsingUnionOfIndexOtherWay =
  "stringy";
// why not use keyof in tuples and instead use T[number] pattern to extract union of tuple value types
// type NewTupleTypeByUsingTupleTypeValueInsteadOfIndex =MultipleTypesInTuple[string];//ERROR: Type 'MultipleTypesInTuple' has no matching index signature for type 'string'.
type NewTupleTypeByUsingTupleTypeValueInsteadOfIndex =
  MultipleTypesInTuple[number]; //string | number following T[number] pattern

type NewTupleTypeByUsingTupleTypeValueInsteadOfIndexKeyof = keyof [
  string,
  boolean
]; //converts to 0|1|number
const newTupleTypeByUsingTupleTypeValueInsteadOfIndexKeyof: NewTupleTypeByUsingTupleTypeValueInsteadOfIndexKeyof =
  "0";
// const newTupleTypeByUsingTupleTypeValueInsteadOfIndexKeyofTwo: NewTupleTypeByUsingTupleTypeValueInsteadOfIndexKeyof =false;//ERROR: Type 'false' is not assignable to type 'keyof [string, boolean]'.

// Combine tuples using spread operator
type Tuple1 = [1, 2];
type Tuple2 = [3, 4];
type Tuple12 = [...Tuple1, ...Tuple2];
const tuple12: Tuple12 = [1, 2, 3, 4];

// Give names to tuple types to make it more clear
type NamedPropertyTuples = [firstName: string, age: number];
const namedPropertyTuples: NamedPropertyTuples = ["stringy", 23];

// Make optional elements type in tuples. And how naming tuple types makes it easier.
// type NamedPropertyOptionalTuples = [firstName?: string, age: number];//ERROR: A required element cannot follow an optional element.
type NamedPropertyOptionalTuples = [firstName: string, age?: number];
const namedPropertyOptionalTuples1: NamedPropertyOptionalTuples = [
  "stringy",
  1,
];
const namedPropertyOptionalTuples2: NamedPropertyOptionalTuples = ["stringy"];
const namedPropertyOptionalTuples3: NamedPropertyOptionalTuples = [
  "stringy",
  undefined,
];
