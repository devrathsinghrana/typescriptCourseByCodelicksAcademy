// Create an array of number type which always start with 5
type ArrayStartWithFive = [5, ...number[]];
const arrayStartWithFive: ArrayStartWithFive = [5];
const arrayStartWithFive2: ArrayStartWithFive = [5, 1];

// Create an array of string type which always ends with period
type StringArrayEndingWithPeriod = [...string[], "."];
const stringArrayEndingWithPeriod: StringArrayEndingWithPeriod = ["hey", "."];
const stringArrayEndingWithPeriodTwo: StringArrayEndingWithPeriod = ["."];

// Create an array of boolean type which is never empty
type BooleanNonEmptyArray = [boolean, ...boolean[]];
const booleanNonEmptyArrayOne: BooleanNonEmptyArray = [false];
const booleanNonEmptyArrayTwo: BooleanNonEmptyArray = [false, true];

// Create an array of number type which starts and ends with -1
type ArrayStartingAndEndingWithNegativeOne = [-1, ...number[], -1];
const arrayStartingAndEndingWithNegativeOne: ArrayStartingAndEndingWithNegativeOne =
  [-1, 2, -1];
const arrayStartingAndEndingWithNegativeTwo: ArrayStartingAndEndingWithNegativeOne =
  [-1, -1];

// Create an array of type numbers which starts with first member A or B
type ArrayStartingWithAorB = ["A" | "B", ...number[]];
const arrayStartingWithAorBone: ArrayStartingWithAorB = ["A"];
const arrayStartingWithAorBtwo: ArrayStartingWithAorB = ["B"];
const arrayStartingWithAorBthree: ArrayStartingWithAorB = ["B", 1];
