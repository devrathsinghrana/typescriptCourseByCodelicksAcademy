// helper method to get value by index (0 or OTHERS)
function getByIndex<T, U>(index: number, value1: T, value2: U): T | U {
  return index === 0 ? value1 : value2;
}

const value1 = getByIndex(0, true, false);
const value2 = getByIndex(1, 1, 2);
const value3 = getByIndex(0, 2, "example string");
const value4 = getByIndex(1, true, 7);
