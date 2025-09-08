class MapPin {
  readonly lat: number = 0;
  readonly lng: number = 0;
}

const pin = new MapPin();
// pin.lng = 10; // Error: Cannot assign to 'lng' because it is a read-only property.
console.log(pin); // MapPin { lng: 0, long: 0 }
