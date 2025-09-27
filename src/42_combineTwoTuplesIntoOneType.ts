// extends any[] ensure that whatever generic passed is atleast a tuple
type CombineTuples<Tuple1 extends any[], Tuple2 extends any[]> = [
  ...Tuple1,
  ...Tuple2
];

type Tuple12a = CombineTuples<[1, 2, 3], [4, 5]>;
type Tuple12b = CombineTuples<[1, 2, 3], []>;
