// Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

///////class example
                ///while loop
// let numMultiplyBy = 2;
// let counter = 0;
// while(counter < 16) {
//     console.log(numMultiplyBy);
//     numMultiplyBy *= 2;
//     counter ++;
// }
//
//                 ////for loop based on the while loop
for (let i = 0, num = 2; i < 16; i++) {
    console.log(num);
    num *= 2;
}


// var j = 2
//
// for (let i = 1; i <= 16; i++){
//
//
//     console.log( j ** i);
// }

// it works!!!
let j = 2
let i = 1;
while(i <= 16)

{
    console.log(j ** i);
    i++;

}


// Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a ' +
// 'random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of ' +
// 'the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought ' +
// 'by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. ' +
// 'The below code shows how' + ' ' + 'to get the random numbers for this exercise.
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones




        ///// use math.random for  all cones

        //// assign let to # of cones being bought

        /// need to create a loop that reduces the  # of cones by the all cones till no more

        /// log //5 cones sold...  // if there are enough cones

        /// log //Cannot sell you 6 cones I only have 3...  // If there are not enough cones

        /// log //Yay! I sold them all! // If there are no more cones

 function getRandomNum(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
}

// let conesToSell = getRandomNum(50, 100);
// do {
//     let conesToBuy = getRandomNum(1, 5);
//     if (conesToBuy <= conesToSell) {
//         console.log(`${conesToBuy} cones sold`);
//         conesToSell -+ conesToBuy; //conesToSell = conesToSell - coneToBuy;
//     } else {
//         console.log(`Cannot sell you ${conesToBuy} cones, I have only ${conesToSell}...`)
//         console.log(`${conesToSell} cones sold...`);
//         conesToSell -= conesToBuy;
//     }
//      if (conesToSell === 0) {
//          console.log(`Yay! I have sold them all!`)
//          break;
//      }
// } while (conesToSell > 0)



     // let conesToSell = getRandomNum(50, 100);
     // console.log(conesToSell);
     // for (let i = conesToSell; i > 0; i-- ) {
     //     let conesToBuy = getRandomNum(1, 5);
     //     let result = i - conesToBuy;
     //     console.log(`${conesToBuy} sold ${result} cones left`);
     // }
