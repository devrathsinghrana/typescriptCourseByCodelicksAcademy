/*
The GetFirstElement type extracts the first element type from a tuple.
If the tuple is empty it returns undefined
*/

type GetFirstElement<Tuple extends any[]> = Tuple[0];

type undefinedExtractedType = GetFirstElement<[]>;
type stringExtractedType = GetFirstElement<[string, number]>;
type numberExtractedType = GetFirstElement<[number, string]>;
type numberLiteralExtractedType = GetFirstElement<[2, 3, 4]>;
type alphabetLiteralExtractedType = GetFirstElement<["a", "w", 1, "2"]>;
