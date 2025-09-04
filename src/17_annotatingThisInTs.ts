function record(this:{lat:number; long:number}, lat:number, long:number) {
    this.lat = lat;
    this.long = long;
}

const coords = {lat: 0, long: 0,record};
coords.record(39.76, -104.87);
console.log(coords); // { lat: 39.76, long: -104.87, record: [Function: record] }
// record(39.76, -104.87); // Error: The 'this' context of type 'void' is not assignable to method's 'this' of type '{ lat: number; long: number; }'.

const coords2 = {lat: 0, long: 0, record};
coords2.record(39.76, -104.87);
console.log(coords2); // { lat: 39.76, long: -104.87, record: [Function: record] }

const coords3= {lat: 0, long: 0, record(lat:number, long:number) {//no need to annotate this, as it automatically infers the object as it is defined inside the object
    this.lat = lat; this.long = long
}};

coords3.record(39.76, -104.87);
console.log(coords3); // { lat: 39.76, long: -104.87, record: [Function: record] }

// record(39.76, -104.87); // Error: The 'this' context of type 'void' is not assignable to method's 'this' of type '{ lat: number; long: number; }'.

// Arrow functions capture the 'this' value of the enclosing context, so they don't need a 'this' parameter.
//by default arrow function auto-binds to class or object it is defined in
// However, if an arrow function is defined in the global scope or as a standalone function, 'this' will be undefined (or the global object in non-strict mode).
const arrowRecord = (lat:number, long:number) => {
    // this.lat = lat; this.long = long // Error: 'this' implicitly has type 'any' because it does not have a type annotation.
    console.log(lat, long);
}

const arrowObj = {lat: 0, long: 0, arrowRecord};
arrowObj.arrowRecord(39.76, -104.87); // 39.76 -104.87
// arrowRecord(39.76, -104.87); // Error: The 'this' context of type 'void' is not assignable to method's 'this' of type '{ lat: number; long: number; }'.