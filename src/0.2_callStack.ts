function first() {
  console.log("first");
  second();
}

function second() {
  console.log("second");
  third();
}

function third() {
  console.log("third");
}

first();


setTimeout(() => {
  console.log("timeout");
}, 0);//we use callbacks to make our code asynchronous or non-blocking

let a = 2;
let b = 3; //in memory creation phase they are in temporal dead zone
let res = getSum(a, b); //getSum(2,3) can be accessed in call stack due to hoisting
function getSum(x: number, y: number): number {
  return x + y;
}

console.log(res);
//where primitives and non-primitives are stored in memory
// ...existing code...

// What happens when we reassign boolean to object:
let boolVar:any = true;        // Initially: primitive boolean in CALL STACK
boolVar = { name: "John" }; // Reassigned: object reference in CALL STACK, object in HEAP

/*
=== MEMORY ALLOCATION WHEN REASSIGNING BOOLEAN TO OBJECT ===

INITIAL STATE:
┌─── CALL STACK ────┐    ┌─── HEAP ────┐
│ boolVar: true     │    │             │
└───────────────────┘    └─────────────┘

AFTER REASSIGNMENT:
┌─── CALL STACK ────┐    ┌─── HEAP ────────────┐
│ boolVar: 0x1234 ──────→ { name: "John" }    │
└───────────────────┘    └─────────────────────┘

WHAT HAPPENS:
1. Original boolean value 'true' is discarded (garbage collected)
2. boolVar now holds a REFERENCE to heap location
3. The object { name: "John" } is created in HEAP
4. The string "John" (property value) is also stored in HEAP

DETAILED BREAKDOWN:

Before reassignment:
- boolVar contains actual boolean value (true) in call stack
- Memory footprint: 1 byte for boolean

After reassignment:
- boolVar contains memory address/pointer (e.g., 0x1234) in call stack  
- Object { name: "John" } created in heap at that address
- String "John" stored in heap as part of object
- Memory footprint: 8 bytes for pointer + object size in heap

TYPESCRIPT IMPLICATIONS:
This would cause a TypeScript error unless:
1. Variable is declared as 'any' type
2. Variable is declared as union type: boolean | object
3. Type assertion is used
*/

// Examples of different scenarios:

// ❌ TypeScript Error:
let strictBoolean: boolean = true;
// strictBoolean = { name: "John" }; // Error: Type '{ name: string; }' is not assignable to type 'boolean'

// ✅ Valid with 'any':
let anyVar: any = true;          // boolean in CALL STACK
anyVar = { name: "John" };       // object reference in CALL STACK, object in HEAP

// ✅ Valid with union type:
let unionVar: boolean | object = true;    // boolean in CALL STACK
unionVar = { name: "John" };              // object reference in CALL STACK, object in HEAP

// ✅ Valid with type assertion:
let flexibleVar = true as any;   // boolean in CALL STACK
flexibleVar = { name: "John" };  // object reference in CALL STACK, object in HEAP

/*
MEMORY TRANSITION VISUALIZATION:

STEP 1 - Initial boolean:
Call Stack: [boolVar: true]
Heap: []

STEP 2 - Reassignment to object:
Call Stack: [boolVar: 0x1234] ──┐
Heap: [0x1234: { name: "John" }] ←┘

KEY INSIGHTS:
1. Variable storage location changes from value storage to reference storage
2. The variable itself always stays in call stack (either holding value or reference)
3. Primitive → Object reassignment changes memory allocation pattern
4. Original primitive value becomes eligible for garbage collection
5. TypeScript's type system prevents this unless explicitly allowed
*/

// Real-world example showing the transition:
function demonstrateReassignment() {
  console.log("=== Boolean to Object Reassignment Demo ===");
  
  let dynamicVar: any = true;
  console.log("Initial:", dynamicVar, "Type:", typeof dynamicVar);
  // Memory: boolean value in call stack
  
  dynamicVar = { 
    name: "John", 
    age: 30,
    isActive: true  // This boolean IS in heap (object property)
  };
  console.log("After reassignment:", dynamicVar, "Type:", typeof dynamicVar);
  // Memory: object reference in call stack, object in heap
  
  // Now the boolean 'true' inside the object is in HEAP
  // But the original boolean 'true' was in CALL STACK before reassignment
}

demonstrateReassignment();

