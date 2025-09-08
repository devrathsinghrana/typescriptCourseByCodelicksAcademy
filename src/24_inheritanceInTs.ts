type MarkerStatus = "active" | "inactive" | "disabled";

// They basically deal with map part coordinates logic or internals
class Coordinates {
  private lat: number;
  private lng: number;
  constructor(location?: { lat: number; lng: number }) {
    this.lat = location?.lat ?? 0;
    this.lng = location?.lng ?? 0;
  }

  get coordinates() {
    return { lat: this.lat, lng: this.lng };
  }

  set coordinates(location) {
    this.lat = location.lat;
    this.lng = location.lng;
  }

  relocate(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}

// the markerStatus is more of a ui thing so we keep it separate from coordinates logic
class MapToPins extends Coordinates {
  private markerStatus: MarkerStatus;
  constructor(location?: {
    lat: number;
    lng: number;
    markerStatus?: MarkerStatus;
  }) {
    super(location); // call the parent class constructor and pass the location object
    this.markerStatus = location?.markerStatus ?? "active";
  }

  setInactive() {
    this.markerStatus = "inactive";
  }

  isDisabled() {
    return this.markerStatus === "disabled";
  }

  isActive() {
    return this.markerStatus === "active";
  }

  isInactive() {
    return this.markerStatus === "inactive";
  }
}

const mappingPin = new MapToPins({ lat: 10, lng: 20, markerStatus: "active" });

console.log(mappingPin.coordinates); // { lat: 10, lng: 20 }
console.log(mappingPin.isActive()); // true 
mappingPin.setInactive();
console.log(mappingPin.isInactive()); // true
console.log(mappingPin.isActive()); // false
mappingPin.relocate(15, 25);
console.log(mappingPin.coordinates); // { lat: 15, lng: 25 }
mappingPin.coordinates = { lat: 30, lng: 40 }; // Using the setter method to update coordinates
console.log(mappingPin.coordinates); // { lat: 30, lng: 40 }
