// Exercises 
// 1.
let challenge = "30 Days Of Javascript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 2))
console.log(challenge.substring(0))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(" "))

let faang = "Facebook, Google, Apple, IBM, Oracle, Amazon"
console.log(faang.split(","))

console.log(challenge.replace("Javascript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf("a"))

// Exercise 2
console.log("The quote \'There is no exercise better for the\
heart than reach reaching down and lifting people up.\
\' By John Holmes teches us to help one another")

// 3
let num1 = "10"
let num2 = 10

if (typeof num1 === typeof num2){
    console.log("they are same")
}
else {
    parseInt(num1)
    console.log("changed")
}

let num3 = "9.8"
let num4 = 10
console.log(parseFloat(num3) === num4)
console.log(Math.ceil(num3) === num4)


// 5
console.log("Python".includes("on") && "Jargon".includes("on"))

// 6
 console.log(Math.round(Math.random() * 101))

// 8
 console.log(Math.round(Math.random()* 50) +  50)
// (Math.random() * range ) + Min Number

// 9
console.log(Math.round(Math.random()* 255)+ 0)

// 10
console.log("Javascript".charAt(Math.random() * 25))

// 11
console.log("1,1,1,1\n2,1,2,4,8\n3,1,3,9,27\n")

let sentence = "You cannot end a sentence with \
because because because is a conjunction"

console.log(sentence.substring(31, 55))

let sent = "Love is the best thing in this world. Some found their \
love and some are still looking for their love"



//exercise 3 => Regex


let sal = 'He earns 5000 euro from \
salary per month,10000 euro annual bonus,\
15000 euro online courses per month.'.substring(9, 13)
let bonus = 'He earns 5000 euro from \
salary per month,10000 euro annual bonus,\
15000 euro online courses per month.'.substring(41, 45)

let courses = 'He earns 5000 euro from \
salary per month,10000 euro annual bonus,\
15000 euro online courses per month.'.substring(65, 70)

console.log((parseInt(sal) * 12) + parseInt(bonus) + (parseInt(courses)) *12)