//Omit with keyof removes properties from base present in overrides and then merge overrides property types
type UpdateSettings<Base, Overrides> = Omit<Base, keyof Overrides> & Overrides;

// common use case of type ovverides is to mergesettings
const mergeSettings = <Base, Overrides>(
  base: Base,
  overrides: Overrides
): UpdateSettings<Base, Overrides> => ({
  ...base,
  ...overrides,
});

type Results1 = UpdateSettings<
  { username: string; theme: "light" },
  { theme: "dark" }
>;

const results1: Results1 = {
  username: "sfsf",
  //   theme: "light",//Error: Type '"light"' is not assignable to type '"dark"'.
  theme: "dark",
};
