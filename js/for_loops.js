
// 1. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

showMultiplicationTabl(7);

function showMultiplicationTabl(input) {
   for (let i = 1; i <= 10; i++)
        console.log(`${input} x ${i} = ${input * i}`);
//let answer, log answer
}


// 2. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even. For example:

// Class example
//for (let i = 0; i < 10; i++){
// let randomNum = getRandomNum(20, 200);
// let isEven = randomNum % 2 ===0;
// let answer = ${randomNum} is ${isEven / 'even':'odd'};
// console.log(answer);
// function randomGeneratorOddOrEven(min, max) {
//return randomNum = Math.floor(Math.random() * (max - min + 1) + 1);

function showMultiplicationTable(input) {
   for (var i = 0; i <= 10; i++)
        console.log(`${input} x ${i} = ${input * i}`);
    }

    //Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even. For example:

//

// function randomGeneratorOddOrEven() {

    for (var i = 0; i <= 10; i++) {
        let randomNum = Math.floor(Math.random() * (200 - 20 + 1));
        if (randomNum % 2 === 0) {
            console.log(randomNum + " is Even");
        } else {
            console.log(randomNum + " is Odd");
        }
    }

//// 3. Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

//class walkthrough

// for (let i = 0; i < 9; i++){
//     let number = i + 1;  //this is the actual number being printed
//     let result = number.toString()/*`${number}`*/; //Making it a string, so any add opperators concatenate in the result
//     for (let j = 1; j <= i; j++){  //times it is repeated in a row
//         result += number; //concatenating the number at the end of the result
//     }
//     console.log(result);
// }

// for (let i = 0; i < 9; i++){
//     let answer = String(i+1).repeat(i+1);
// console.log(answer);


    //My answer
for (var i = 1; i < 10; i++) {
    let strg = '';
for (var x = 0;  x < i; x++) {
     strg = i + strg;
    }
    console.log(strg);
}

// 5. Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for (let i = 100; i >=5; i -= 5) {
    console.log(i);
}
