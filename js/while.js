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
// for (let i = 0, num = 2; i < 16; i++) {
//     console.log(num);
//     num *= 2;
// }
//
//
// num += 2; /// num + 2
// num -= 2; /// num - 2
// num *= 2; /// num * 2
// num /= 2; /// num / 2
// num ++;



// var j = 2
//
// for (let i = 1; i <= 16; i++){
//
//
//     console.log( j ** i);
// }

// it works!!!
// let j = 2
// let i = 1;
// while(i <= 16)
//
// {
//     //console.log(j ** i);
//     i++;
//
// }


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



/// set allCone never changes
///random user cone changes per interaction
///subtracts from original all cone until all gone with appropriate messages logged




// // This is how you get a random number between 50 and 100
// let allCones = Math.floor(Math.random() * 50) + 50;
// console.log(allCones);
// // This expression will generate a random number between 1 and 5
// let N = Math.floor(Math.random() * 5) + 1;
// console.log(n);
//
//
//
// function getRandomNum(min, max){
//     return Math.floor(Math.random() * (max - min +1) + min);
// }
//
//
//
//
//
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
//
//








//
// // let n = 0;
// // let x = 0;
// let whatThe;
// while (n < 6) {
//     n++;
//     allCones += n;
//     console.log(whatThe);
// }
//
//




// for (let i = y; i <x; i -= x) {
//     console.log(i);
// }

// while(x <= y)
//
// {
//     console.log(j ** y);
//     y++;
//
// }
//














// function divide (x,y) {
//
//     dived = x / y
//     console.log(dived);
// }
//









// let result = allCones;
// let i = ;
// let l = m;
// do {
//     i = i + 1;
//     result = result + i;
// } while (i < 5);
//
// console.log(result);


// function divide(k,allCones){
//    // var count = 1;
//     for(var i = 1; i <= k; i=i+allCones){
//         i++;
//         //count++;
//         //console.log(i);
//     }
//     //console.log(count);
//     //return count;
// }

//divide(k,allCones);


//
//     function divide(k, allCones){
//         var result = l;
//         while(k <= allCones){
//            k -= allCones;
//             result++;
//         }
//
//         return result;
//         console.log(divide(allCones,k));
//     }
//
// console.log(divide(allCones,k));



// console.log(allCones);
//
//
//
// while (k <= 5)
//     console.log(k);
// {
//     console.log(allCones / k);
//     k++
// }