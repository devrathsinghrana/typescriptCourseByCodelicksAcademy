type ProductInventory = Record<string, number>;

const productInventory: ProductInventory = {
  apple: 3,
  banana: 2,
  orange: 5,
};

type Region = "north" | "south" | "west" | "east";
type RegionValues = {
  temperature: number;
  precipitation: number;
};

type RegionForecast = Record<Region, RegionValues>;

const regionForecast: RegionForecast = {
  north: {
    temperature: 20,
    precipitation: 10,
  },
  south: {
    temperature: 20,
    precipitation: 10,
  },
  west: {
    temperature: 20,
    precipitation: 10,
  },
  east: {
    temperature: 20,
    precipitation: 10,
    // gala:23,//Error: Object literal may only specify known properties, and 'gala' does not exist in type 'RegionValues'.
  },
  //   northeast:{}//Error: Object literal may only specify known properties, and 'northeast' does not exist in type 'RegionForecast'.
};
