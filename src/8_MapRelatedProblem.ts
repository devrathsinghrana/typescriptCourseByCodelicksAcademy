type BookInMapType = {
  title: string;
  author: string;
  price: number;
};
const booksMap: Map<number, BookInMapType> = new Map();

booksMap.set(1, { title: "#book1", author: "Superman", price: 99.99 });
booksMap.set(2, { title: "#book1", author: "Superman", price: 99.99 });
// booksMap.set("3", { title: "#book1", author: "Superman", price: 99.99 });//This will give error - Argument of type 'string' is not assignable to parameter of type 'number'.

// booksMap.set(3, { title: "#book1", author: "Superman", price: "77" });//Type 'string' is not assignable to type 'number'.ts(2322) 8_MapRelatedProblem.ts(4, 3): The expected type comes from property 'price' which is declared here on type 'BookInMapType'

// booksMap.set(3, true);//Argument of type 'boolean' is not assignable to parameter of type 'BookInMapType'.

console.log(booksMap);
