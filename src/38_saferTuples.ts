// make a nameparts tuple which take three strings
type NameParts = readonly [
  firstname: string,
  middlename: string,
  lastName: string
];

// now assign value to variable to this type
const namearrayReq: NameParts = ["devr", "fff", "ghjg"];

// now make unsafe function which takes array as parameter and pops from it three times
function unsafeFunction(fullname: string[]) {
  for (let i = 0; i < 3; i++) {
    fullname.pop();
  }
}

// now invoke this function with nameparts tuple type array as argument and make tuple safer by throwing error at compile time during this invocation which directly mutates the array.
unsafeFunction(namearrayReq);
