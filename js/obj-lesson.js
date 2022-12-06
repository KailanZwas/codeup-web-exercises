/*
      JS Objects

      - like a named index array
      - used to store related state and behavior
      - where arrays are good for storing lists of data, objects store related aspects of a greater structure
      - we have already used objects: String, Array, Math, Number
   */


// ========== Creating Objects (dog, user, forecast, dictionaryEntry, movie, post, etc.)

// New Object Instance

// const dog = new Object();
// console.log(typeof dog);


// Object Literal Notation

// const cat = {}; ///new way of doing it
// console.log(typeof cat);

// const cat = {
//     name: 'Garfield',
//     age: 7
// }
//
// //console.log(cat;)
// console.log(cat);
// console.log(cat.age); //console.log(cat['age']);
//
// cat.color = prompt('what color is the cat?');

// -- Mini Exercise 1
// Create a few beverage objects and assign values to each object for the following properties:
//     - brandName
//     - type
//     - volumeInLiters
//     - priceInCents
//     - expirationDate
//     - datesOfPreviousSips (use an array of strings)
// - isOpen
// Define your objects using both literal syntax to create all properties and values at once and also
// try defining empty objects and assign property values in separate statements using the dot notation.

// const beverage = {
//     brandName: 'Zap',
//     type: 'energy',
//     volumeInLiters: "1",
//     priceInCents: '25cents',
//     expirationDate: 'NA',
//     datesOfPreviousSips: ['12/22/2022', '12/23/2022', '12/24/2022'],
//     isOpen: '12/22/2022',
// }
//
// console.log(beverage);


// ========== Accessing Properties on an Object

// console.log(pet.givenName);
// console.log(pet2.givenName);
// console.log(pet2['givenName']);
//
// pet.givenName = "Sabrina";

// console.log(pet.givenName);






// ========== Setting Properties on an Object

// const pet = {};

// pet.givenName = 'Sparkles';
// pet.age = 12;
// pet.species = 'turtle';
// pet.hasOffspring = true;
// pet['value-in-dollars'] = 400; // alternative syntax for assigning properties

// ========== Peeking into an Object (can result in inaccurate property values if your script mutates an array/object)

// console.log(pet);




// !! MINI-EXERCISE 1 !!



// Nested Values

// const pet = {
//     name: 'Bowser',
//     age: 6,
//     species: 'Pug',
//     hasOffspring: false,
//     valueInDollars: 'priceless',
//     altNames: [
//         'Bowser Boy',
//         'Bowser Man',
//         'Bowser Buddy',
//         'Puggle Wuggle Boy'
//     ],
//     vitals: {
//         averageTempDegF: 101,
//         averageRestingHeartRate: 80,
//         isHungry: true
//     }
// };

// log and change various property values on the pet object




// ========== Working with Arrays of Objects

// const pets = [
//     {
//         givenName: 'Spot',
//         isDog: true
//     },
//     {
//         givenName: 'Max',
//         isDog: false
//     },
//     {
//         givenName: 'Goldy',
//         isDog: false
//     }
// ];

// change every pet's name to 'Bowser' (manually, forEach, for loops)

// for (let i = 0; i < pets.length; i +=) {
//     console.log(pets[i].givenName);
// }
//
// pets.forEach(function (pet){
//     console.log(pet.givenName)
// })

// ========== Additional Example Working with Arrays of Objects

// create a pet object that has the following properties...
// givenName
// ageInYears
// species

// const pet1 = {
//     givenName: 'Freckles',
//     ageInYears: 4,
//     species: 'Dog'
// };
//
// const pet2 = {
//     givenName: 'Spot',
//     ageInYears: 2,
//     species: 'Fish'
// };
//
// const pet3 = {
//     givenName: 'Dog',
//     ageInYears: 10,
//     species: 'Cat'
// }
// const pets = [pet1, pet2, pet3];



// !! MINI EXERCISE 2 !!
// const users = [
//     {
//         givenName: 'Sam',
//         age: 21
//     },
//     {
//         givenName: 'Cathy',
//         age: 34
//     },
//     {
//         givenName: 'Karen',
//         age: 43
//     }
// ];

// 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"

// 2. Change the names of all users to "John Doe"

// 3. Increase the current age of all users by 1

// Can you accomplish each step using iteration?


// Extras...
// log the total of all the ages
// log the average age of all users
// log all the user information in the following format...

/*
    user: Sam | age: 21
    user: Cathy | age: 34
    user: Karen | age: 43
 */

// log the name of the longest given name of a user









// ========== Getting a List of Object Keys as an Array

// const pet1 = {
//     givenName: 'Freckles',
//     ageInYears: 4,
//     species: 'Dog'
// };

// console.log(Object.keys(pet1));


// ========== Assigning Functionality to an Object

// const dog1 = {
//     petName: 'Sparky',
//     age: 4,
//     bark: function() {
//         console.log("Woof woof!");
//     },
//     eat: function(food) {
//         console.log('Dog is eating...' + food);
//     },
//     agePet: function() {
//         this.age += 1;
//     }
// }
//
// const dog2 = {
//     petName: 'Rex',
//     age: 2,
//     bark: function() {
//         console.log("Woof woof!");
//     },
//     eat: function(food) {
//         console.log('Dog is eating...' + food);
//     },
//     agePet: function() {
//         this.age += 1;
//     }
// }
//
// const dog3 = {
//     petName: 'Dino',
//     age: 10,
//     bark: function() {
//         console.log("Woof woof!");
//     },
//     eat: function(food) {
//         console.log('Dog is eating...' + food);
//     },
//     agePet: function() {
//         this.age += 1;
//     }
// }
//
// const dogs = [dog1, dog2, dog3];
//
// console.log(dogs[0].age);
// console.log(dogs[1].age);
// console.log(dogs[2].age);
//
// dogs.forEach(function(dog) {
//     dog.agePet();
// });
//
// console.log(dogs[0].age);
// console.log(dogs[1].age);
// console.log(dogs[2].age);


// console.log(dog.age);
// dog.agePet();
// console.log(dog.age);

// dog.bark();
// dog.eat('steak');
// dog.eat('a bone');
// dog.eat();
//
// dog.sayHello = function() {
//     console.log('Wagging tail and barking lightly.');
// }
//
// dog.sayHello();




// const user = {
//     givenName: 'Justin',
//     age: 25,
//     sayHello: function(input) {
//         console.log(input);
//     },
//     logAge: function() {
//         console.log(this.age);
//     },
//     getYounger: function() {
//         this.age = this.age - 1;
//     },
//     setAge: function(age) {
//         this.age = age;
//     }
//     // addProp: function(name, value) {
//     //     this.name = value;
//     // }
// }

// console.log(user);

// user.sayHello('Hello, Go!');
// user.logAge();
// user.getYounger();
// user.logAge();
// user.setAge(100);
// user.logAge();
// user.getYounger();
// user.logAge();


// console.log(user);




// ========== The this Keyword

// const pet6 = {
//     name: "Sparky",
//     age: 3,
//     getOlder: function() {
//         console.log(this.age);
//         this.age += 1;
//     }
// };
//
// console.log(pet6.age);
// pet6.getOlder();
// console.log(pet6.age);


// -- Mini Exercise 2

const users = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age: 34
    },
    {
        givenName: 'Karen',
        age: 43
    }
];

// 0. Log each given name
// 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
// 2. Change the names of all users to "John Doe"
// 3. Increase the current age of all users by 1
//
// Can you accomplish each step using iteration?

//console.log(users.givenName);
    //0
//console.log(users[0].givenName,users[1].givenName,users[2].givenName);
<<<<<<< HEAD
// for (let i = 0; i < users.length; i += 1){
//     console.log(users[i].givenName);
// }

    //2
// users.forEach(function(users) {
//     users.givenName = 'John Doe';
// });
// console.log(users[0].age);
// console.log(users);

//3
//let ages = 0
// for (let i = 0; i < users.length; i++){
//     users[i].age += 1;
//    // ages += users[1].age;
// }
// console.log(users[0].age);


// let names = '';
// users.forEach(function (user) {
//     names += user.givenName + '';
// });
// console.log(names.trim(), "Sam Cathy Karen");


/// age one year to each person

// users.forEach(function (user){
//     user.age += 1;
// });
// console.log(users);


//average of age function
// let totalAges = 0;
// users.forEach(function (user){
//     totalAges += user.age;
// });
// console.log(totalAges / users.length);


// users.forEach(function (user){
//     console.log(`user: ${user.givenName} | age: ${user.age}`);
// });

//print each users name if they are older than 30
// users.forEach(function (user){
//     if (user.age > 30) {
//         console.log(user.givenName);
//     }
// });




//longest name
//creat longest name variable
//loop through users and reassign the name of the current if longer than the longest name, replace with the users name

let longestName = '';
users.forEach(function (user){
    if (user.givenName.length > longestName.length) {
        longestName = user.givenName;
    }
});
console.log(longestName);
=======
for (let i = 0; i < users.length; i += 1){
    console.log(users[i].givenName);
}

    //2
users.forEach(function(users) {
    users.givenName = 'John Doe';
});
console.log(users[0].age);
console.log(users);

//3
//let ages = 0
for (let i = 0; i < users.length; i++){
    users[i].age += 1;
   // ages += users[1].age;
}
console.log(users[0].age);
>>>>>>> origin/main
