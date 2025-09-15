// Three ways to write records

// this signifies that each property in object holds boolean type hence maintaining consistency. Kind of object structure with infinite properties of same type
type BooleanRecordRawType = { [key: string]: boolean };

const meraNaamHaiKabatur: BooleanRecordRawType = {
  kyaHai: false,
  kyaNhiHai: true,
  //   kitnaHai: 2,//ERROR: Type 'number' is not assignable to type 'boolean'.
};

// Below we are using Record Type with generics to create much simpler record type
type BooleanRecordFormalType = Record<string, boolean>;
const meraNaamHaiJabba: BooleanRecordFormalType = {
  kyaHai: false,
  kyaNhiHai: true,
  //   kitnaHai: 2,//ERROR: Type 'number' is not assignable to type 'boolean'.
};

// below syntax helps us make records with limited properties with consistent types of values
type CustomRecord<K extends keyof any, V> = { [key in K]: V };

const meraNaamHaiJoker: CustomRecord<
  "isSquare" | "isRectangle" | "isCircle",
  boolean
> = {
  //   kyaHai: false,//ERROR: Object literal may only specify known properties, and 'kyaHai' does not exist in type 'CustomRecord<"isSquare" | "isRectangle" | "isCircle", boolean>'.
  isSquare: false,
  isRectangle: false,
  isCircle: false,
};

// below syntax helps us make records with unlimited properties with consistent two types of values
type CustomRecordValues<K extends keyof any, V> = { [key in K]: V };

const meraNaamHaiMuscleMan: CustomRecordValues<string, boolean | number> = {
  isSquare: false,
  isRectangle: false,
  isCircle: false,
  kitneAadmiThee: 2,
  //   KyHaiNaamBta:"Kaju",//ERROR: Type 'string' is not assignable to type 'number | boolean'.
};
