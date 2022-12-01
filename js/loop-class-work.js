
////// While Loop
let iteration = 0;
while (iteration < 11) {
    console.log('While loop #${iteration +1}');
    iteration++;
}


////Do - While Loop
iteration = 0;
do {
    console.log('Do-- While Loop #${iteration +1}');
    iteration++
} while (iteration < 10);

for (let i = 0/*initialization*/; i < 10/* condition*/; i++/*increment/decrement*/) {
    console.log('For Loop #${i = 1}');
}

//Loop through an array , and print the string in each item in a sentence
let array = ["oranges", "apples", "pineapples", "pears", "grapes", "tomatoes"];
for(let i = 0; i < array.length; i++){
    console.log(`${array[i]} are friggin' awesome!`)
}

for (let i = 0; i < array.length; i++){
    if (array[i] === 'tomatoes') {
        console.log(`Wait...${array[i]} are a fruit?!!!}`)
        //break;  stop once it found what it was looking for example " I found tomatoes"
        //continue; "will find what your looking but continue
    }
    else {
        console.log(array[i]);
    }
 }

function fruitMessage(input) {
    console.log(`${input} are friggin awsome`);
}