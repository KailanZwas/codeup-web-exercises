(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
const person = {
        firstName: `Rick`,
        lastName: `Sánchez`,

        // sayHello(greeting) {
        //     return `Hello from Rich Sanchez!`;
        // }
    }

    console.log(person.firstName); // `Rick`
    console.log(person.lastName); // `Sánchez`
        /**
    console.log(person
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // function sayHello(input){
    //         return `Hello from ` + `${person.fullName}`;
    //     }
 //log(person.sayHello(person));// "Hello from Rick Sanchez!"
person.sayHello = function (){
    return `Hello from ${this.firstName} ${this.lastName}`;
}
    console.log(person.sayHello());

person.middleName = 'Ricardo';

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    // creat a for loop

    // shoppers.forEach(function (shopper) {
    //     if (shopper.amount > 200) {
    //     ///shopper that get the discount
    //         let savings = parseFloat(shopper.amount) *.12;
    //         let total = shopper.amount - (shopper.amount * .12);
    //         console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}, and recieved a 12% discount.\n ${shopper.name}'s discounted total is ${total.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}, with a savings of ${savings.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}.`);
    //     } else{
    //         //shoppers that don't get the discount
    //        let remaining = (200 - parseFloat(shopper.amount)).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
    //         console.log(`${shopper.name} has a bill of ${shopper.amount.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}, and did not receive a discount. ${shopper.name} will have to spend ${remaining} more to receive a 12% discount.);
    //
    //     }
    //
    // });






    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // let book = [
    //     {
    //         title: "The Hobbit",
    //         author: {
    //             firstName: "J.R.R.",
    //             lastName: "Tolkien"
    //         }
    //     }
    //     console.log(book.title);
    // console.log(book.author.firstName);

       let books = [

        {
            title: "The Fellowship of the Ring",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien"
            }
        },
            {
                title: "Jurassic Park",
                author: {
                    firstName: "Micheal",
                    lastName: "Crichton"
                }
            },
            {
                title: "Black Hawk Down",
                author: {
                    firstName: "Mark",
                    lastName: "Bowden"
                }
            }
    ];

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.firstName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    ///// Number

    books.forEach(function (book,index) {
        //book number
        // let oneConsoleLogToRuleThemAll = '';
        let bookNumber = index + 1;
        console.log(bookNumber);
        let fullName = `${book.author.firstName} ${book.author.lastName}`                 //    or //book.author.firstName + ' book.author.lastName;
        console.log(fullName);
        let message = `Book # ${bookNumber}\nTitle: ${books.title}\n Author: ${fullName}\n ---`;
        console.log(message);
        console.log(`Book # ${bookNumber}\nTitle: ${books.title}\n Author: ${fullName}\n ---\n`)
        ///concatenate into the origianl string and log it after the loop
        // oneConsoleLogToRuleThemAll += message;



    })

    // console.log(oneConsoleLogToRuleThemAll);


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
///function
    ///return object
    let myAuthor = "Kailan Zwaschka";
    let kailansBook = createBook("Coding for Awesome People", "Kailan Merell");
/// //this is a "dry" way to make an array faster then manually make it
    function createBook(title, author) {
        let authorArray = author.split('');  //['Kailan', 'Zwaschka'];

            //create let to fix syntax (black at first if need to be)
            let bookObject = {
        title: title,
        author: {
            firstName: authorArray[0],
            lastName: authorArray[1]
               }
            };
            //return book object
        return bookObject;
    }

    let books2 = [
        createBook("The Hobbit", "J.R.R. Tolkien"),
        createBook("The Fellowship of the Ring", "J.R.R. Tolkien"),
        createBook("Jurrasic Park", "Micheal Crichton")
    ];
   //console.log(books2);
    function showBookInfo(book){
        books.forEach(function (book,index) {
            //book number
            let bookNumber = index + 1;

            let fullName = `${book.author.firstName} ${book.author.lastName}`                 //    or //book.author.firstName + ' book.author.lastName;

            let message = `Book # ${bookNumber}\nTitle: ${books.title}\n Author: ${fullName}\n ---`;
            console.log(message);
            console.log(`Book # ${bookNumber}\nTitle: ${books.title}\n Author: ${fullName}\n ---\n`)
            books2.foreach(function(book, index)) {
                showBookInfo(book, index);
            });
    };
})();