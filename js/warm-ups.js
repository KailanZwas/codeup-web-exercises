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
assesment start with an empty array
function returnPetsWithNoFish(pets) {

}







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