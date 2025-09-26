// Make use of tuples to make reusable parameter types for multiple functions. Makes code more consistent

// Make a userInfo tuple having username as string age as number of optional type and addresses as array of string
type UserInfoTupleForFunctionParamsType = [
  username: string,
  age?: number,
  //   count:number,//A required element cannot follow an optional element.
  ...addresses: string[]
];
/**
 * 
 * @param args The ...addresses: string[] is a rest parameter (using the spread operator ...), not an optional parameter. This means:

addresses is always present as an array, but the array can be empty ([])
It captures all remaining string arguments after username and age
You can pass zero or more addresses
So when you call:

registerUserFun("devrath") → addresses becomes [] (empty array)
registerUserFun("devrath", 25, "123 Main St", "456 Oak Ave") → addresses becomes ["123 Main St", "456 Oak Ave"]
The confusion might be because:

age? is truly optional (can be undefined)
...addresses is a rest parameter that's always an array but can contain zero elements
If you wanted addresses to be truly optional (could be undefined), you'd write it as:

But with the rest parameter syntax (...addresses), it's always present as an array.
 */

// set it as parameter type for registerUser function and update user function

function registerUserFun(...args: UserInfoTupleForFunctionParamsType) {
  console.log(args);
  const [username, age, addresses] = args;
  console.log("username, age, addresses", username, age, addresses);
}

function updateUserFun(
  userId: number,
  ...args: UserInfoTupleForFunctionParamsType
) {
  console.log(userId, args);
  const [username, age, addresses] = args;
  console.log(
    "username, age, addresses, userId",
    username,
    age,
    addresses,
    userId
  );
}

registerUserFun("devrath");
updateUserFun(1222, "devrath");

// create a fullname tuple which takes union of tuples with one have first and last name and other having first, middle and last name as string members and set it as parameter type for createAccount function and try to invoke that function with different set of arguments.

type FullNameTuple =
  | [firstname: string, lastname: string]
  | [firstname: string, middlename: string, lastname: string];

function createAccountFun(...args: FullNameTuple) {
  console.log(args);
}

createAccountFun("dev", "rana");
createAccountFun("dev", "rana", "ji");
// createAccountFun("dev", "rana", "ji", "lo"); //Error: Source has 4 element(s) but target allows only 3.
// createAccountFun("dev"); //Error: Source has 1 element(s) but target requires 3.
// createAccountFun("dev", 123); // Error: Type 'number' is not assignable to type 'string'
