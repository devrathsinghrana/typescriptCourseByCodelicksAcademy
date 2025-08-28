type OrderDetails = {
  orderId: string;
  price: number;
  quantity: number;
};

// as we can see here price is coming as string from backend but our type is number
// so we need to convert it into number
// i.e. there is no type safety with JSON.parse as it will always accept string and return any type
// so we need to validate it manually or use some library like zod, yup etc for validation on run time. There is no specific compile time solution for this problem
const orderDetails: OrderDetails = JSON.parse(
  `{"orderId": "ORD342E", "price": "23", "quantity": 2}`
);

const orderDetails2: OrderDetails = JSON.parse(``);

console.log("orderDetails>>>", orderDetails);
