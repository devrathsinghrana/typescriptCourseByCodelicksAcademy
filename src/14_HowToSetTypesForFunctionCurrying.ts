// helper method to create an accumulator function with reset functionality using currying

type AccumulatorReset = () => void;
type AccumulatorFunctionWithReset = ((value: number) => number) & {
  reset: AccumulatorReset;
};
// a callable function with reset method
let accumulator: AccumulatorFunctionWithReset;

// internal state for the accumulator
let total: number = 0;

function accumulatorFunction(value: number): number {
  total += value;
  return total;
}

accumulatorFunction.reset = function (): void {
  total = 0;
  console.log("Accumulator reset to 0");
};

accumulator = accumulatorFunction as AccumulatorFunctionWithReset;

// Valid usage: Add numbers and get the updated data
console.log(accumulator(5)); // Output: 5
console.log(accumulator(10));

// Valid usage: Reset the accumulator
accumulator.reset();

// Invalid usage: nonExistent method
// accumulator.nonExistent(); // Error: Property 'nonExistent' does not exist on type 'AccumulatorFunctionWithReset'.
