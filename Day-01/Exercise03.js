// Project: Trip Cost Splitter

//You and some friends went on a trip and need to split the costs evenly.

//Store in variables:

//tripName (string)
//numPeople (number)
//hotelCost (number)
//foodCost (number)
//transportCost (number)
//tripPercent (number, e.g. 0.10 for 10%)

//Then calculate:

//totalCost = hotel + food + transport
//tipAmount = totalCost × tipPercent
//grandTotal = totalCost + tipAmount
//costPerPerson = grandTotal ÷ numPeople

let tripName = "USA Trip";
let numbPeople = 6;
let hotelCost = 2000;
let foodCost = 500;
let transportCost = 200;
let tripPercent = 0.10;

console.log("----USA Trip----");

console.log("people: {numbPeople}");

console.log("Hotel: {hotelCost}");
console.log("Food: {foodCost}");
console.log("Transport: {transportCost}");

console.log("-------------------");

//calculate the total costs
totalCost = hotelCost + foodCost + transportCost;



console.log("Subtotal: {totalCost}");

//calculate the tripAmount
tipAmount = totalCost * tripPercent;

console.log("Tip (10%):",{tipAmount})

//calculate the grandTotal
grandTotal = totalCost + tipAmount;

console.log("Grand Total:",{grandTotal})
console.log("---------------------")

//calculate costPerPerson
costPerPerson = grandTotal / numbPeople;

console.log("Cost per person: ",{costPerPerson});
