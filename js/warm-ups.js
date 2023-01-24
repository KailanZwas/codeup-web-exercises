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
//
// ================================= WARM UP
//
// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with
//     only the username and password properties. Assume at least an array of one user object.
//
//
//     const users = [
//     {
//         firstName: 'Justin',
//         lastName: 'Reich',
//         dob: '1923-01-01',
//         username: 'jreich',
//         password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         dob: '1935-03-11',
//         username: 'ssmith',
//         password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         dob: '1999-01-21',
//         username: 'fsmith',
//         password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//     },
// ]
//
// function getUserCredentials(users) {
//     const credentials = [];
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         credentials.push({ username: user.username, password: user.password });
//     }
//     return credentials;
// }
//
//
// getUserCredentials(users) // returns...

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



// ================================= WARM UP

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable
// if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.


// example data...
//
// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 6},
//         {name: "High School", rating: 8}
//     ]
// };
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }
//
// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 8},
//         {name: "Middle School", rating: 8},
//         {name: "High School", rating: 8}
//     ]
// }
//
// const neighborhood3 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: [
//         {name: "Elementary School", rating: 9},
//         {name: "Middle School", rating: 9},
//         {name: "High School", rating: 9}
//     ]
// }
//
// fn(neighborhood1) // returns false due to school rating
// fn(neighborhood2) // returns false due to crime rate
// fn(neighborhood3) // returns true
// fn(neighborhood4) // returns false due to median home price
//
//

// write fthat takes in the object
// sum the total of the school rating
// chain conditional logic to account for the three criteria
// function affordableSafeSmartHome(neighborhood) {
// let totalSchoolRating = 0;
//
// for (let i = 0; i < neighborhood.schools.length; i += 1){
//     totalSchoolRating += neighborhood.schools[i].rating;
// }
// return neighborhood.medianHomePrice < 3000000 && crimeRate === 'low' && totalSchoolRating >= 24;
// }return true

// function hasVowels (input) {
//     let vowels = "aeiou";
//     for(let i = 0 ; i < input.length ; i += 1){
//         if(vowels.indexOf(input[i].toLowerCase()) !== -1){
//             return true;
//         }
//     }   return false;
//
// }
//
// console.log(hasVowels("banana"))
// console.log(hasVowels("ubuntu"))
// console.log(hasVowels("QQQQ"))
// console.log(hasVowels("wyrd"))
//
// function countVowels(input){
//     let vowels = 'aeiou';
//     let count = 0;
//     for (let i = 0; i < input.length; i += 1){
//         if(vowels.indexOf(input[i].toLowerCase()) !== -1){
//             // take input and add it for vowel, how to record each time
//             count += 1;
//         }
//     }return count;
// }
//
//
// console.log(countVowels("banana"));
// console.log(countVowels("ubuntu"));
// console.log(countVowels("mango"));
// console.log(countVowels("QQQQ"));
// console.log(countVowels("wyrd"));


// / Create a function, encodeStr, that takes in a string and returns the string of characters with the
// following substitutions:
//
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’
//
// encodeStr(‘apple’) // returns ‘@pple’
// encodeStr(‘codeup’) // returns ‘codeup’
// encodeStr(‘SASS’) // returns ‘$@$$’
// encodeStr(‘bike’) // returns ‘b1ke’

// function encodeStr(input) {
//     // let lowerC = input.toLowerCase();
//     // let lowerC = str.replaceAll{'a': '@',
// return input.replace(/a/gi, '@').replace
//
// console.log(encodeStr('apple'));
// console.log(mapString(str));
// console.log(mapString(‘apple’));
// console.log(mapString(‘codeup’));
// console.log(mapString(‘SASS’)) ;
// console.log(mapString(‘bike’)) ;



//  function removeVowels(input){
//     let vowels = 'aeiou';
//     let remove = '';
//     // let remove = 'aeiou';
//     for (let i = 0; i < input.length; i += 1){
//         if(vowels.indexOf(input[i].toLowerCase()) === -1 ){
//             // take input and add it for vowel, how to record each time
//                                     remove += input[i];
//             // console.log(input[i]);
//         }
//     }return remove;
// }
//



//
// function removeVowels(input) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let remove = '';
//     for (let i = 0; i < input.length; i += 1){
//        if( !vowels.includes(input[i])){
//            remove += input[i];
//        }
//
//     } return remove;
// }console.log(removeVowels("banana"));
// console.log(removeVowels("ubuntu"));
// console.log(removeVowels("mango"));
// console.log(removeVowels("QQQQ"));


// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the
// string starts with a vowel
// function startsWithVowel(input) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     // let firstVowel = [];
// //     if (input.indexOf([0]) === vowels.indexOf){
// //     }
// //     return
// // }
// if(idx === vowels)
// let firstVowel = [];
// var idx = input.indexOf(0);
// while (idx != -1) {
//     results.push(idx);
//     idx = haystack.indexOf(needle, idx + 1);
// }
// return results;
// }



//     for (let i = 0; i < input.length; i += 1) {
//         if (i >= 0 && i < input.length) {
//             vowelFirstLetter += input[i];
//             console.log(input[1]);
//         }
//
//     } return vowelFirstLetter;
//
// }

    function startsWithVowel(input) {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
for(let i = 0; i < vowels.length; i += 1){
    console.log(vowels[i] === input[0]);

}
        console.log(input[0]);


// if(input.indexOf(0) === vowels){
//     return true;
// }
// else {
//     return false;
// }
    }















console.log(startsWithVowel("ubuntu"));
console.log(startsWithVowel("banana"));
console.log(startsWithVowel("mango"));
