// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: The push method returns the legnth of the resulting array.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain:The .length method counts the number of characters in the string, including spaces and punctuation.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain:This is the syntax to access a specific index of a string or an array. The 4th index of the string in question is the letter "o"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:Ruby
// b) Verify and explain: This is the syntax to access a specific indesx of an array. The value at the index in question is Ruby.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:["saturday", "sunday"]
// b) Verify and explain:So it is actually outputs a runtime error. I knew that the .toUpperCase method was only applicable to strings but I wasn't sure how js would react(lol a react pun).

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
 console.log(typeof dataTypes.length)

// a) Your answer:Num
// b) Verify and explain:The .length method returns a number representing the number of characters in the string, or in this case, elements in the array.
