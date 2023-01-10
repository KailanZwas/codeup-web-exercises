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

//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];

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

//     const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];
//
// pets.forEach(name, ) => {
//     console.log(array);
// });


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


// ================================= WARM UP
// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with 
//     the strings filtered out.
// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]) // returns [1,2,123]
//
// function filterList(l) {
//     return l.filter(x => typeof x === "number");
// }


// ================================= WARM UP
//
// Create a function, zipArrays, that takes two array inputs of the same length and returns an array with the
// elements of both arrays alternating in the order of first[0], second[0], first[1], second[1], etc. If both arrays
// are empty, return an empty array.
//
//
// zipArrays([], []) // returns []
// zipArrays([1], [2]) // returns [1, 2]
// zipArrays(['a', 'b'], ['c', 'd']) // returns... ['a', 'c', 'b', 'd']
// zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]) // returns...
//
//     [
//     1,
//         'bob',
//         2,
//         null,
//         'a',
//         'sally',
//         'b',
//         25
//     ]

// function zipArrays(input,input1) {
//     let outPutArray = []
//     for (let i = 0; i < length; i++) {
//         outPutArray.push(input);
//         outPutArray.push(input1)
//     }
//     return outPutArray;
//
// }

================================= WARM UP

Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with
    only the username and password properties. Assume at least an array of one user object.


    const users = [
    {
        firstName: 'Justin',
        lastName: 'Reich',
        dob: '1923-01-01',
        username: 'jreich',
        password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
    },
    {
        firstName: 'Sally',
        lastName: 'Smith',
        dob: '1935-03-11',
        username: 'ssmith',
        password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith',
        dob: '1999-01-21',
        username: 'fsmith',
        password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
    },
]

function getUserCredentials(users) {
    const credentials = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        credentials.push({ username: user.username, password: user.password });
    }
    return credentials;
}


getUserCredentials(users) // returns...

/*

[
  {
    username: 'jreich',
    password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
  },
  {
    username: 'ssmith',
    password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
  },
  {
    username: 'fsmith',
    password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
  }
]

*/