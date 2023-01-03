// // ================================= WARM UP
//
// // Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average
// // age of a dog.
//
//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish'
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat'
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog'
//         age: 5
//     },
//     {
//         name: 'Pickles',
//         type: 'Dog'
//         age: 10
//     }
//
// ];
//
// function findAverageDogAge(pets) {
//     let ages = 0;
//     let dogCount = 0;
//     pets.forEach((pet) => {
//     if (pet.type === 'Dog') {
//         total += pet.age;
//     dogCount++;
// }
// });
//     return total /dogCount;
// }
// console.log(findAverageDogAge(pets), 7.5)
//
//
// //findAverageDogAge(pets) // returns 7.5

// DEC 15
// ================================= WARM UP
//
// Create a function, returnPetsWithNoFish, that takes in a array of pet objects and returns an array of pet objects
// with no pets of type 'Fish'.

    const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

//returnPetsWithNoFish(pets) // returns...

    // [
    // {
    //     name: 'Mr. Pig',
    //     type: 'Cat',
    //     age: 4
    // },
    //     {
    //         name: 'Bubba',
    //         type: 'Dog',
    //         age: 5
    //     },
    //     {
    //         name: 'Beans',
    //         type: 'Dog',
    //         age: 3
    //     }
    // ]'
// assesment start with an empty array
// function returnPetsWithNoFish(pets) {
//
// }







// function findAverageDogAge(pets) {
//     let ages = 0;
//     let dogCount = 0;
//     pets.forEach((pet) => {
//     if (pet.type === 'Dog') {
//         total += pet.age;
//     dogCount++;
// }
// });
//     return total /dogCount;

// ================================= WARM UP
//
// Create a function, returnLongestPetName, that takes in a array of pet objects and
// returns a string of the longest name for a pet.

    const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

pets.forEach(name, ) => {
    console.log(array);
});


// function returnLongestPetName(pets) {
//     i = 0;
//     name = [];
//     for (i = 0; i < name.length; i++) {
//         console.log(name[i]);
//     }
// }
//
//
//
// returnLongestPetName(pets) // returns 'Mr. Salmon'



// const returnLongestPetName = (animals) => {
//     let longestPetName = '' +
//         animals.forEach(animal) => {
//         if (animal.name.length > longestPetName.length) {
//             longestPetName = animal.name;
//         }
//         {);
// return longestPetName;
//         };
//         }
//     }
// }


// Create a function, returnLastCharsReversed that takes in two arguments:
//     1. a string of characters
// 2. an integer that represents how many characters should be returned
// The function should return a string of characters, equal to the number specified
// by the second argument, in reverse order. If 0 is passed as a second argument,
// return an empty string. Assume only valid inputs and that the second argument
// will NOT exceed the length of the input string.
//     Examples:
// returnLastCharsReversed(‘cat’, 0) // returns ‘’
// returnLastCharsReversed(‘cat’, 1) // returns ‘t’
// returnLastCharsReversed(‘cat’, 2) // returns ‘ta’
// returnLastCharsReversed(‘cat’, 3) // returns ‘tac’
// returnLastCharsReversed(‘codeup’, 1) // returns ‘p’
// returnLastCharsReversed(‘codeup’, 3) // returns ‘pue’
// returnLastCharsReversed(‘codeup’, 4) // returns ‘pued’

// function returnLastCharsReversed(input, input1) {
//     return input.slice(-2);
// }
//
// return str.split('').reverse().slice(0, noOFChars).join('';)




// Write a function, iBeforeE that takes in a string and returns the string with any ‘ei’
// characters replaced with ‘ie’.
// iBeforeE(‘ei’) // returns ‘ie’
// iBeforeE(‘height’) // returns ‘hieght’
// iBeforeE(‘heist’) // returns ‘hiest’
// iBeforeE(‘their’) // returns ‘thier’
// iBeforeE(‘theirtheir’) // returns ‘thierthier’

// function iBeforeE(input) {
//     return str.split('').splice
// }
//
// function countVowels(str) {

//     let count = '';
//     let arr = str.toLowerCase().split("")
//     let vowels = ["ei",]
//     console.log(arr)
//
//     for (let i = 0; i < str.length; i+=1){
//         if (str[i].str[i + 1]){
//             count++
//         } else {
//             return 0
//         }
//     }
//     return count
//
// }

// const iBeforeE = string => string.split("ei").join("ie");
//
// function iVefoeE (sting){}
// let newString = string.replace(/ei/g, "ie";
// return newString
// }