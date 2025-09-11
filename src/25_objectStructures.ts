// Object type: Fixed property names.
type SampleObj = {
  id: number;
}; //this is an example of object type

type SampleMap = { [label: string]: string }; //this is an example of record type

// Record type: Dynamic property names, all with the same value type.
type SampleRecord = Record<string, string>; //this is an example of record type

// Extra properties in object types
const USER_DETAILS: SampleObj = {
  id: 1,
  // name: "John",
}; //Error: Object literal may only specify known properties, and 'name' does not exist in type 'SampleObj'.

// Extra properties in record types
const USER_MAP: SampleMap = {
  name: "John",
  age: "30",
};

// Making type alias by accessing properties of object types

const myCourse = {
  title: "TypeScript",
  lessons: 100,
  isFree: true,
  tags: ["typescript", "programming", "js"],
};

type Course = typeof myCourse;

// EXTRACTING PRIMITIVE TYPES FROM OBJECT TYPE USING TYPEOF AND INDEXING
// below is equivalent to type CourseTitleOrLessons = string | number
type CourseStringNumber = typeof myCourse.title | typeof myCourse.lessons;

// Below is equivalent to type CourseStringArray = string | string[]
type CourseStringArray = Course["title" | "tags"]; //we need to use square brackets to access the properties of object type ALIAS or use typeof as above

type CourseBooleanNumber = Course["isFree"] | Course["lessons"];

const courseBasicDetailOne: Course = {
  title: "JavaScript",
  lessons: 50,
  isFree: false,
  tags: ["js", "programming"],
};

const courseBasicDetailsTitle: CourseStringNumber = "JAVA";
const courseBasicDetailsLessons: CourseStringNumber = 20;
const courseBasicDetailsTitleTwo: CourseStringArray = "PYTHON";
const courseBasicDetailsTagTwo: CourseStringArray = [
  "PYTHON",
  // 123,//Type 'number' is not assignable to type 'string'
  "JAVA",
  "TS",
  "JS",
  "REACT",
  "NODE",
];

// keyof operator
type Personnel = {
  username: string;
  age: number;
  isAdmin: boolean;
};

//below keyof operator creates a union of string literal types representing all the property names of the Personnel type
type PersonnelKeys = keyof Personnel; // 'username' | 'age' | 'isAdmin'

const userNameKey: PersonnelKeys = "username";
const ageKey: PersonnelKeys = "age";
const isAdminKey: PersonnelKeys = "isAdmin";
// const invalidKey: PersonnelKeys = "email"; // Error: Type '"email"' is not assignable to type 'PersonnelKeys'.

// below type PersonnelValues creates a union of the value types of all properties in the Personnel type
type PersonnelValues = Personnel[PersonnelKeys]; // string | number | boolean

//Below is Generic type to extract value types from any object type
type PersonnelValueGeneric<T> = T[keyof T];

type Accounts = {
  id: number;
  isEmployee: boolean;
  name: string;
};

type Management = {
  id: number;
  username: string;
};

type AccountsValues = PersonnelValueGeneric<Accounts>; // number | boolean | string

type ManagementValues = PersonnelValueGeneric<Management>; // number | string

const accountIdValue: AccountsValues = 123;
const accountIsEmployeeValue: AccountsValues = true;
const accountNameValue: AccountsValues = "Alice";
const managementIdValue: ManagementValues = 456;
const managementUsernameValue: ManagementValues = "Bob";
// const invalidAccountValue: AccountsValues = [12.34];//Type 'number[]' is not assignable to type 'AccountsValues'.

// Optional properties in object types
type OptionalPersonnel = {
  username: string;
  age?: number; //optional property. Why NOT USE UNDEFINED TYPE?
  // age: number | undefined; //this means age property must be present but can be undefined i.e. why not much of use so use optional instead
  isAdmin?: boolean; //optional property
};

const userOne: OptionalPersonnel = {
  username: "user1",
  age: 25,
  isAdmin: true,
};
const userTwo: OptionalPersonnel = {
  username: "user2",
  age: 30,
};
const userThree: OptionalPersonnel = {
  username: "user3",
  isAdmin: false,
};
const userFour: OptionalPersonnel = {
  username: "user4",
};

// using intersection to merge object type and make reusable types
type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};
type Post = {
  id: number;
  title: string;
  content: string;
} & Timestamps; // Post type now includes properties from Timestamps type

type Comments = {
  id: number;
  postId: number;
  content: string;
} & Timestamps; // Comment type now includes properties from Timestamps type

// Combining object types using interfaces and extends keyword

interface IDType {
  id: number;
}

interface Timestamp {
  unixCode: number;
}

interface student extends IDType, Timestamp, Comments {
  //we can also extend type alias using extends
  hasWork: boolean;
}

const STUDENT_PROFILE: student = {
  id: 12,
  postId: 12,
  content: "string",
  createdAt: new Date(),
  updatedAt: new Date(),
  hasWork: false,
  unixCode: 12,
};

// How object keys are impacted due to intersection and union of objects
type SomeTypeOne = {
  common: string;
  id: number;
};

type SomeTypeTwo = {
  common: string;
  isTrue: boolean;
};

type SomeTypeUnion = SomeTypeOne | SomeTypeTwo;
type SomeTypeIntersection = SomeTypeOne & SomeTypeTwo;

const someTypeUnionObj: SomeTypeUnion = {
  common: "string",
  id: 12,
  isTrue: false,
};

const someTypeIntersectionObj: SomeTypeIntersection = {
  common: "string",
  id: 12,
  isTrue: false,
};

type SomeTypeUnionKeys = keyof SomeTypeUnion;
type SomeTypeIntersectionKeys = keyof SomeTypeIntersection;

// const someTypeUnionKeysOne: SomeTypeUnionKeys = "isTrue";//Type '"isTrue"' is not assignable to type '"common"'. Gives error
const someTypeUnionKeysOne: SomeTypeUnionKeys = "common";
const someTypeIntersectionKeysOne: SomeTypeIntersectionKeys = "isTrue";

// So in conclusion union type objects can get only union of common keys between them and intersection type object can get union of all properties in intersecting objects
