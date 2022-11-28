"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//let userPrompt = prompt("what is your favorite color");
//let message = analyzeColor(userPrompt);
//console.log(message);
//
// function analyzeColor(color) {
//     if (color === "yellow") {
//         return ("Yellow is the color of the sun.");
//     } else if (color === "blue") {
//         return ("Blue is the color of the sky");
//     } else if (color === "green") {
//         return ("Green is the color of the grass.");
//     } else if (color === "violet") {
//         return ("violet is the color of Lilac's");
//     } else if (color === "orange") {
//         return ("Garfield is an Orange cat!");
//     }  else if (color === "red"){
//         return("Red is the color of a fireTruck");
//     }
//     else {
//         return ("we dont know what that color is.");
//     }
// }
//
//
// console.log();



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// var alertMessage = (analyzeColor(randomColor));     (mine
// alert(alertMessage);
// console.log(analyzeColor(randomColor));

// let result = analyzeColor(randomColor);     (class example
// console.log(result2);
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

//class example
//
// function analyzeColor(color){
//     let colorLower = color.toLowerCase();
//     switch (colorLower){
//         case "blue":
//             return "blue is the color of the sky";
//             break;
//         case "red":
//             return "Strawberries are red";
//             break;
//         default:
//             return "i dont know this color";
//
//     }
// }


            // my work
// switch (analyzeColor) {
//     case "yellow":
//         alert("Yellow is the color of the sun.");
//         break;
//         console.log(analyzeColor);
//     case "blue":
//         alert("Blue is the color of the sky");
//         break;
//     case "green":
//         alert("Green is the color of the grass.");
//         break;
//     case "violet":
//         alert ("violet is the color of Lilac's");
//         break;
//     case"orange":
//         alert ("Garfield is an Orange cat!");
//         break;
//     case "red":
//         alert ("Red is the color of a fireTruck");
//         break;
//     default:
//         alert(analyzeColor + " we dont know what that color is.");
//         break;
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var analyzeColor = prompt ("what is your favorite color?");
// alert(analyzeColor);


///class example

// let userColor = prompt("what is your favorite color?");
// let userColorResult = analyzeColor(userColor);
// console.log(userColorResult);
//


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// class example
// function calculateTotal(luckyNum, total) {
//     let discount,
//         discountedPrice;
//     switch(luckyNum) {
//         case 0:
//             discount = 0;
//             break;
//         case 1:
//             discount = .1;
//             break;
//         case 2:
//             discount = .25;
//             break;
//         case 3:
//             discount = .35;
//             break;
//         case 4:
//             discount = .5;
//         case 5:
//             discount = 1;
//             break;
//         default:
//             return "incorrect input";
//     }
//
//     if (!isNaN(total)) {
//       //  discountedPrice = total - (total*discount)   //discounted price
//     discountedPrice = (total * (1 -discount));
//     }   else {
//         return "The Total provided is not a number stuppppid";
//     }
//
//     return discountedPrice.toFixed(2);
// }


// let discountedPrice = calculateTotal(100, 35);
// function calculateTotal(totalAmount, luckyNumber) {
//
//     let discountPrice = luckyNumber / 100;
//     let result = ( 1 - discountPrice) * totalAmount;
//
// }
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 // Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

// class example

// let userNumberPrompt = prompt("what was the total of your bill?");
// let userResult2 = calculateTotal(luckyNumber, userNumberPrompt);
// alert(`Your lucky number was ${luckyNumber}.
// The price before the discount was $${userNumberPrompt}.
// The price after the discount is $${userResult2}.`);
//


















//    var userBill = prompt("Enter Total Bill");
//
//    discountPrice(luckyNumber, userBill);
//
// function discountPrice(luckyNumber) {
//     if (luckyNumber === 0) {
//         alert("Your lucky number is 0, you get a 0% Discount");
//     } else if (luckyNumber === 1) {
//         alert("Your lucky number is 1, you get a 10% Discount, your new price is $" + (.9 * userBill).toFixed(2));
//     } else if (luckyNumber === 2) {
//         alert("Your lucky number is 2, you get a 25% Discount, your new price is $" + (.75 * userBill).toFixed(2));
//     } else if (luckyNumber === 3) {
//         alert("Your lucky number is 3, you get a 35% Discount, your new price is $" + (.65 * userBill).toFixed(2));
//     } else if (luckyNumber === 4) {
//         alert("Your lucky number is 4, you get a 50% Discount, your new price is $" + (.5 * userBill).toFixed(2));
//     } else if (luckyNumber === 5) {
//         alert("Your lucky number is , you get a 100% Discount,  Everything is free!!");
//
//     }
//
// }


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


//class study need to finish later
// let userConfirm = confirm("would you like to enter a number?");
// let userNumber;
// if (userConfirm){
//     userNumber = prompt("Please enter a number");
//     if (userNumber % 2 === 0){
//     alert("the number is even");
// } else {
//     alert("the number is odd");
//
//     let plus100 = parseFloat(userNumber) + 100;
//             alert('the number plus 100 equals ' + plus100);
//     if (userNumber)
//     }













//
//     my work
// var userInput = confirm('Would you like to enter a number');
//
// // if ok log, else stop
// if (userInput === true) {
//
//     //prompt user to enter a number
//     // prompt("Enter a number");
//     // console.log(prompt);
//
//     //save prompt to use in variable
//     let numberInput = prompt("Enter a number");
//     // take var use modalus to find if even or odd
//     if (numberInput % 2 === 0) {
//         alert("number is even");
//         //} else (numberInput % 2 === 1){
//     } if (numberInput % 2 === 1) {
//         alert("number is odd");
//     }

    // take var plus 100 alert answer
    //alert(numberInput + 100);   wrong!!!!!
    //create var of numberInput plus 100
//
//     let numberPlus = (parseFloat(numberInput) + 100);
//     // console.log(numberPlus);
//     alert(numberPlus);
//
//     //
//     //create if/else with var as the input
//     if (numberInput > 0) {
//         // positive alert
//         alert(" is positive")
//         // neg alert
//     } else {
//         alert("is negative");
// }
// }









// function
// var number = prompt("What is your number?");
//
// var evenOdd = number;
// function evenOdd(number) {
//     if (number % 2 === 0){
//     alert("number is even");
// } else {
//     alert("number is odd");
//     }
// }



