// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
//Create a function named temperatureCheck that has one parameter
//Use a conditional to compare the argument to the boiling point
//Return an output based on the conditional

const temperatureCheck = (temp) => {
    if (temp>212) {
        return `${temp} is above the boiling point`;
    } else if (temp === 212) {
        return `${temp} is at boiling point`
    } else if (temp < 212) {
        return `${temp} is below boiling point`

}
}

console.log(temperatureCheck(42))//"42 is below boiling point"
const temperature1 = 42
// Expected output: "42 is below boiling point"
console.log(temperatureCheck(350))//"350 is above boiling point"
const temperature2 = 350
// Expected output: "350 is above boiling point"
console.log(temperatureCheck(212))// "212 is at boiling point"
const temperature3 = 212
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
//Create a function called twoArrayLength that has two paramters, both arrays
// Combine the two arrays and return the length of the new array

const twoArrayLength = (array1, array2) => {
    
    return array1.concat(array2).length
}
const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

console.log(twoArrayLength(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns)); //9
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
//Create a function named stringReverse that has a string as its only parameter
//Convert the string into an array with .split method
//We use the newly accessed .reverse method on the array
//We convert the array back into a string
//Return that string

const stringReverse = (string) =>{
    myArray = string.split('')
    return myArray.reverse().join('')
}

const currentCohort = "Delta 2023"
console.log(stringReverse(currentCohort));//3202 atleD
// Expected output: "3202 atleD"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
//Create a function named arrayChecker that takes in two parameters.
//Use a for loop to iterate over the array searching for the target value
//Track the occurences of the value and return the final index found

const arrayChecker = (array, tarNum) => {
    let index = null
    for (let i = 0; i<array.length; i++){
        
        if(tarNum == array[i]){
            index = i
            
        }
    }
    if (index == null){
        return "The number did not occur, or something else went wrong"
    }
    else {
        return index
    }
}
const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
console.log(arrayChecker(numberOfConnections, givenValue1));//7
// Expected output: 7
const givenValue2 = 10
console.log(arrayChecker(numberOfConnections, givenValue2));//8
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
//Create a function called arrayNumSorter that has one parameter
//Sort the array based on number value with the .sort method
//Return the result

const arrayNumSorter = (array) => {
    return array.sort((a, b) => b-a)
}
const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]//[82, 80, 79, 77, 76, 73, 72]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
console.log(arrayNumSorter(sanDiegoSummerTemperatures));
const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
console.log(arrayNumSorter(sanDiegoWinterTemperatures));//[68, 67, 66, 66, 62, 59, 59]