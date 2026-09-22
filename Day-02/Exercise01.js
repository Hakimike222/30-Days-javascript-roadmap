// Project: Grade Calculator
// it is all about Operators and conditionals

const score = 74;

if (score >= 90){
    console.log("your Grade is : A");
} else if (score >= 80){
    console.log("your Grade is : B");
} else if (score >= 70){
    console.log("your Grade is: C");
} else if (score >= 60){
    console.log("your Grade is: D");
} else if (score >= 50){
    console.log("your Grade is: E");
} else {
    console.log("your Grade is : F")
}

// let's try with switch operator.

const bracket = Math.floor(score /10);

switch (bracket){
  case 9:
  case 10:
    console.log("Your Grade is: A");
    break; 
  case 8:
    console.log("Your Grade is: B");
    break;
  case 7:
    console.log("Your Grade is: C");
    break;
  case 6:
    console.log("Your Grade is: D");
    break;
  default:
    console.log("Your Grade is: F")
}