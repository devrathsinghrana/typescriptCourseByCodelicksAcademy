class MapPinCons {
  lat;//no need to type it, ts infers it from the assignment in the constructor
  lng;
  constructor(location?: { lat: number; lng: number }) {
    this.lat = location?.lat ?? 0;
    this.lng = location?.lng ?? 0;
  }
}

const mapPin = new MapPinCons();
console.log(mapPin);

const mapPin2 = new MapPinCons({ lat: 100, lng: 20 });
console.log(mapPin2);
