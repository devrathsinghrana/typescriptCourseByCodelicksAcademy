// square bracket way of defining array
type StringArrayType = string[];

// generic way of defining array
type StringArrayTypeGeneric = Array<string>;

// define array which accepts only binary values
type BinaryTypeArray = (0 | 1)[];
const binaryTypeArray: BinaryTypeArray = [0, 1, 0, 1, 0];

// make string record which corresponds to string[] - array are special kind of record objects with their keys being indexes of type number and values being of specific type with indefinite number of keys or entries possible similar to records of specific type values

type StringArrayRecord = { [key: number]: string };
const stringArrayRecord: StringArrayRecord = ["sdf"];

// get the type of array elements using "number" index and get union of array types follows T[number] pattern
type BooleanTypeFlag = (boolean | number)[];
type BooleanTypeArray = BooleanTypeFlag[number]; //boolean|number

const booleanTypeArray: BooleanTypeArray = false;
const booleanTypeArray2: BooleanTypeArray = 1;
