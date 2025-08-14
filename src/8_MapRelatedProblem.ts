type BookInMapType = {
  title: string;
  author: string;
  price: number;
};
const booksMap: Map<number, BookInMapType> = new Map();

booksMap.set(1, { title: "#book1", author: "Superman", price: 99.99 });
booksMap.set(2, { title: "#book1", author: "Superman", price: 99.99 });
//booksMap.set("3", { title: "#book1", author: "Superman", price: 99.99 });
//booksMap.set(3, { title: "#book1", author: "Superman", price: "77" });
//booksMap.set(3, true);

console.log(booksMap);
