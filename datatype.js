//5.
console.log(typeof name, typeof number, typeof dead, typeof height, money)


//6. 
let time
let age
let job
let car

//7.
let itsRaining = true
let bestTm = "Julius"
let plants = 4
let win = null

//8. 
var firstName = "Michelle"
var lastName = "Njeri"
var maritalStatus = false
var country = "Kenya"
var years = 22

//9.
var firstName = "Michelle"; lastName = "Njeri"; maritalStatus = false; country = "Kenya", years = "22"

//10.
let myAge = 22
let yourAge = 33

console.log(`My age is ${myAge}`)
console.log(`Your age is ${yourAge}`)

/*
data types come in two 
 ~primitive - non modifiable, can be compared by their values
    numbers, strings, bool, null, undefined 
 ~unprimitve - modifiable, cant be compare by value, can only be compared by reference
    objects, functions and arrays


Math object provide various methods to work with numbers 
    Math.PI, Math.round,  Math.floor, Math.ceil, Math.min, Math.max, Math.random
    Math.abs, Math.pow, Math.sqrt, Math.E, Math.log, Math.sin, 
*/


let random = Math.random()
let randomNumZeroAndTen = random * 11
console.log(randomNumZeroAndTen)
let randomRoundToFloor = Math.floor(randomNumZeroAndTen)
console.log(randomRoundToFloor)


/*
string methods are length, toUpperCase, toLowerCase, 
substr(starting index, number of characters remove)
substring(starting index, ending index)
split() => changes jthe whole string an array
split(" ") => separates the words in the sentence in array elements
trim(" ") => removes spaces 
includes() =>  checks if  a string includes the param that was passed => returns a bool
replace (original string, new string)
charAt() => takes index and returned value at that index 
charCodeAt() => takes index and returns ASCII value of character at that index 
indexOf(string) =>  returns the index where that value starts
*/

/*
convert string to number parseInt(), Number()
conver float to int use pasrseInt()
*/

