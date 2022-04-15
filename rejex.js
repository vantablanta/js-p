/*
i => case insensitive search
g => global search
m => multiline search


[abc] => find any character btwn brackets 
[^ abc] => any character not between brackets 
[0-9]
[^0-9]
(x|y)
*/

/*
all numbers negative and positive are truthy except for zero
all strings are rtuthy except empty string
bool true is truthy


Falsey Values are : 0, null, undefined, NAN, bool false, empty string
*/


/*
Window Methods 
1. alert()
2. prompt()
3. confirm() => returns a bool
*/

/*
Date Object  
the object we create using Date object has many methods which include:
getFullYear()
getMonth()
getDay()
getHours()
getTime() => time in milliseconds since 1970 01 Jan
*/


let day= new Date()

day.getTime() / 1000

// also done day = Date.now()

// Exercise 2

// 13. 


let by = new Date(prompt("Enter YOB")).getFullYear()
let year = new Date().getFullYear() - by

console.log(by, year)

if (year > 18){
    console.log("you can drive")
}
else{
    console.log("Underage")
}



yearsToLive = prompt("Years to live ")
console.log(yearsToLive * 365 * 24 * 60 * 60)

// toDateString will convert date to readable format

yearsB = new Date()
console.log(yearsB.toDateString())







