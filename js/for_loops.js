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

