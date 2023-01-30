const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//toDo: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let result = users.filter((users) => users.languages.length >= 3);
console.log(result);

//todo: Use .map to create an array of strings where each element is a user's email address
let userEmail = users.map((users) => users.email );
console.log(userEmail)

//todo: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYears = users.reduce((accumulation, years) => {
    return accumulation += years.yearsOfExperience;
}, 0);
console.log(totalYears)
let averageYears = totalYears / users.length;
console.log(averageYears)

//todo: Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((accumulation, emails) => {
    return accumulation.length  > emails.email.length ? accumulation : emails.email;
},"");
console.log(longestEmail);


//todo: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userNames = users.reduce((str, user) => {
str += users.name;
return str;
}, 'Your insturctors are: ').slice(0, -2) + ',');
//Bonus
//todo: Use .reduce to get the unique list of languages from the list of users.