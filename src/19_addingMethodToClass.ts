class MapPinMet {
  lat: number = 0;
  lng: number = 0;
  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
  relocate(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}

const piny = new MapPinMet(2, 3);
console.log(piny);

piny.relocate(10, 20);
console.log(piny);
