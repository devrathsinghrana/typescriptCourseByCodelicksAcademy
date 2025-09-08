class MapPinGets {
  lat: number = 0;
  lng: number = 0;

  relocate(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
  get location() {
    return { lat: this.lat, lng: this.lng };
  }
  withoutGetLocation = () => {
    return { lat: this.lat, lng: this.lng };
  };
}

const mappyPin = new MapPinGets();
/*
Why below console.log(mappyPin); does not show relocate and location method in the output?

When you print console.log(mappyPin);, it only shows the instance properties of the object, not its methods (including relocate and location).
JavaScript objects printed in the console display their data properties (lat, lng, etc.), but methods (including getters and functions) are part of the object's prototype and are not shown in the default object output.

relocate is a method, not a property.
location is a getter, not a property.
Only lat, lng, and withoutGetLocation (because it's an arrow function assigned as a property) appear directly on the instance.
If you want to see methods, you can use console.dir(mappyPin) or inspect the prototype in the browser console.
*/
console.log(mappyPin);

mappyPin.relocate(10, 20);
console.log(mappyPin.location);//due to get keyword this becomes object and no need to invoke it as below
console.log(mappyPin.withoutGetLocation().lng);
console.log(mappyPin.location.lng);
