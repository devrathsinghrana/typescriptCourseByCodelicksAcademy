// crete a tuple type
type BaicsTuple = ["dev"];

// create a type which has length of above tuple as it's value
type TupleLengthType = BaicsTuple["length"];//1

// create a type next index which has tuple length + 1 as it's value and try to use generic. As simply + 1 to length is invalid syntax
type NextIndexOfTuple<T extends unknown[]> = [...T, unknown]["length"];

// call above generic with above tuple
type NewIndexLength = NextIndexOfTuple<BaicsTuple>;//2
