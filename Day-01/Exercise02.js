// Project: Receipt Generator
//Create a script that stores the details of a small purchase and prints a formatted receipt to the console.
//Store in variables:
//storeName (string)
//itemName (string)
//pricePerItem (number)
//quantity (number)
//taxRate (number, e.g. 0.08)
//isMember (boolean)

const StoreName = "Ebenezer Shop";
const item01 = "maize";
const pricePerItem = 2;
const quantity = 3;
const taxRate = 0.08;

const subtotal = pricePerItem * quantity;

const tax = subtotal * taxRate;
const total = subtotal + tax;
const isMember = true;                                  

console.log(`====== ${StoreName} ======`);

console.log(`Item: ${item01}`);

console.log(`Qty: 3 * 2 Euros`);
console.log(`---------------`);

console.log(`Subtotal: ${subtotal} Euros`);
console.log(`Tax (8%): ${tax}`);
console.log(`TOTAL:  ${total}`);
console.log(`Member: ${isMember}`);
console.log("===================")