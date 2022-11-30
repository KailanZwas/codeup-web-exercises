// let city = prompt("what city do you live in?");
//
// if (city == `Boston`){
//     console.log(`The location is Boston.`);
//     console.log(`Go Red Sox!`);
// } else if (city === `San Antonio`) {
//     console.log(`The location is San Antonio`);
//     console.log("Go Spurs Go!");
// } else if (city == city){
//     console.log(`The loction is ${city}.`);
//     console.log("Go... ${city}...Go!")
// } else {
//     console.log(`We don't know where this is.`);
// }
// console.log(addNumber("Hi"));
// addNumber("5");
// function addNumber(num1) {
//     let number;
//     if (typeof num1 == "string") {
//         return"This is not a number stupid";
//         //number = parseInt(num1);
//     }
//     else {
//     return num1 + 2;
// }

 let pizzaPreference = prompt("WHat is your favorite kind of pizza?");
// //if ( pizzaPreference.toLocaleLowerCase() == "cheese") {
// if (pizzaPreference == 'cheese' || pizzaPreference == 'pepperoni') {
//     console.log("Thanks Kevin from Home Alone!")
// } else if (pizzaPreference == "Pineapples and hot sauce") {
//     console.log("What a coincidence, I like  pineapples and hot sauce too!");
// }
// else {
//     console.log("Oh, okay... that's cool... my aunt's vegan too...");
// }



// switch(pizzaPreference){
//     case "cheese":
//         console.log("Thanks Kevin from Home Alone!");
//         //break;
//     case "pineapples and hot sauce":
//         console.log("What a coincidence, I like  pineapples and hot sauce too!");
//         break;
//     default:
//         console.log("Oh, okay... that's cool... my aunt's vegan too...");
//
//
// }

// Determine if the4 variable is between 5 and 8
let number = 1;
if(number < 5) {
    console.log('the number came before 5');
}else if (number > 4 && number < 9){
    console.log("the number came between 5 and 8");
}
else {
    console.log("The number is greater then 8");
}
//
// switch (number){
//     case 1:
//         console.log(`the number is ${number}. but it will fall through case 1`);
//     case 2:
//         console.log(`the number is ${number}. but it will fall through case 2`);
//     case 3:
//         console.log(`the number is {number}. but it will fall through case 3`);
//     case 4:
//         console.log("the number came before 5, and stopped and case 4 because of break");
//         break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//         console.log("The number came between 5 and 8");
//         break;
//         console.log("the number came after 8");
// }





// let success = true;
// let message;
// if(success) {
//     message = "The operatioin was succesful";
// }
// else {
//     message = "The operation was not succesful";
// }
// let message = success ? "The operation was succesful" : "The operaiton was not succesful"
// console.log(message);



// tuesday


// JS Basic

//  How ca a number turn to a string
// let num = 7;
// console.log(String.num);  //('' + num);       (num.toString());


// How ca a string be a converted to a number

//         let str ='7';
// console.log(parseFloat(str));
// console.log(parseInt(str));
// console.log(Number(str));

// How do you determin if a value is a number or numeric string?***********

//     function isNumeric(input) {
//         return !isNaN(parseFloat(input));
//     }
//
// console.log(isNumeric(7), true);
// console.log(isNumeric('7'), true);
// console.log(isNumeric('bob'), false);
// console.log(isNumeric(true), false);



//  =========== Functions

// what is the difference between a function parameter and argument?

//param - in the definition to represent what to do with inputs
// arguments - input values when you call the function

// function sayGreeting(greeting){
//     return greeting;
// }
//
// sayGreeting('HOWDY!')   // howdy is the argument
// // console.log(message);