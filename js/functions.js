"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name){
    return "Hello " + name;
}

// arrow function have to be declared before you can call it
//const sayHello = (name) => {...}




/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello("Kailan");
console.log(helloMessage);

// back ticks ` template literal
// let message =`Hello, ${name}!`
// ${(1 + 1)}!`


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
var myName = "Kailan";
let helloMessage2 = sayHello(myName);
console.log(helloMessage2);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(num){
    return (num == 2);
}

console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// function calculateTip(total, percentage){
//     return total * percentage;
//
// }
//
// console.log(total);

 let tipAnswer = calculateTip(100, 20)
 console.log(tipAnswer)
 function calculateTip(total, tip){
   console.log("Running calculateTip()");
    console.log(`The total is $${total}`);
    console.log("The tip entered is " + tip);
    let tipFormatted = `0.${tip}`;
     console.log("The concatenated tip " + tipFormatted);
    tipFormatted = parseFloat(tipFormatted);

    let answer = total * tipFormatted;
        return answer;
 }





//console.log(calculateTip(100, 0.25));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// var total = prompt("enter bill total");
// var percentage = prompt("enter tip");
// alert(calculateTip(total, percentage));

let billTotal = prompt("What is the total of the bill?")
let tipPercentage = prompt("What percentage would you like to tip? (Don't be cheap)")
let tipUserAnswer = calculateTip(billTotal, tipPercentage);
alert("The calculated tip is: " + tipUserAnswer.toFixed(2));


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount() {
    return ()
}
// function applyDiscount(num1, num2){
//    let originalPrice = num1;
//    let discountPercent = num2;
//     return originalPrice -(discountPercent * originalPrice);
// }

// console.log(applyDiscount(50, .05));
var originalPrice = 100;
var discountPercent = 20; // 20%
let appliedDiscount = applyDiscount(originalPrice, discountPercent)
console.log("we are about to apply a " + discountPercent + "% discount to an original price of " + originalPrice);
console.log(appliedDiscount)
function applyDiscount(price, discount) {
    let discountFormatted = discount / 100;
    let result = ( 1 - discountFormatted) * price;

    return result.toFixed(2);

}