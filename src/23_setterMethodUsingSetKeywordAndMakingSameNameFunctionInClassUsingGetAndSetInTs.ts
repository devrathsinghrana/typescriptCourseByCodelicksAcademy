class MapLocAndCoordinates {
  private lat = 0;
  private lng = 0;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  get coordinates() {
    return { lat: this.lat, lng: this.lng };
  }

  set coordinates(location) {
    //no need to annotate type here for parameter as it is automatically set by the return type of getter method above
    // This is the power of ts
    this.lat = location.lat;
    this.lng = location.lng;
  }
}

const mapLocAndCoordinates = new MapLocAndCoordinates(10, 20);
console.log(mapLocAndCoordinates.coordinates); //{ lat: 10, lng: 20 } - automatically accessing getter method made using get keyword
mapLocAndCoordinates.coordinates = { lat: 100, lng: 200 }; // automatically accessing setter method made using set keyword
console.log(mapLocAndCoordinates.coordinates); //{ lat: 100, lng: 200 } - automatically accessing getter method made using get keyword
// mapLocAndCoordinates.coordinates = { lat: 100 }; //Error: Property 'lng' is missing in type '{ lat: number; }' but required in type '{ lat: number; lng: number; }'. - ts error
