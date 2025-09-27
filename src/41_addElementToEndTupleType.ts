/**
 * The AddToEnd type adds an element to the end of a tuple.
 */
type AddToEnd<Tuple extends any[], Element> = [...Tuple, Element];

type AddFourToEndType = AddToEnd<[1, 2, 3], 4>;
type AddOneToEndType = AddToEnd<[], 1>;
