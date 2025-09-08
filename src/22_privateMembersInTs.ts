class MapPinsLocPrivate {
  // We can use the private keyword to restrict access to class members
  // so that they cannot be accessed from outside the class.
  // We can use # as well to make a member private.
  // but it is more common to use private keyword in TypeScript.
  // as it is more readable.
  // and also it is more consistent with other access modifiers like public and protected.
  // and follows the same syntax as other access modifiers from other languages like Java, C#, etc.
  private lat = 0;
  private lng = 0;
  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
  get location() {
    return { lat: this.lat, lng: this.lng };
  }
}

const myMappyLocPrivate = new MapPinsLocPrivate(10, 20);
// console.log(myMappyLocPrivate.lat);//Property 'lat' is private and only accessible within class 'MapPinsLocPrivate'.
//console.log(myMappyLocPrivate.lng);//Property 'lng' is private and only accessible within class 'MapPinsLocPrivate'.
console.log(myMappyLocPrivate);
console.log(myMappyLocPrivate.location.lat); //THis works fine due to get keyword and we can acess private members inside the class using get keyword
