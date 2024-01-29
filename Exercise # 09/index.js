// First Method to Solve:-

// let random = Math.random();
// console.log(random);
// let a = prompt("Enter first number");
// let b = prompt("Enter operator");
// let c = prompt("Enter second number");

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**"
// }

// if (random > 0.1) {
//     console.log(`The result is ${eval(`${a} ${b} ${c}`)}`)
// } else {
//     b = obj[b]
//     console.log(`The result is ${eval(`${a} ${b} ${c}`)}`)
// }


// Second Method to Solve:-

let random = Math.random();
console.log(random);
let a = Number.parseInt(prompt("Enter first number"));
let b = prompt("Enter operator");
let c = Number.parseInt(prompt("Enter second number"));

if (random > 0.1) {
    if (b == "+") {
        console.log("The result is " + (a + c));
    } else if (b == "-") {
        console.log("The result is " + (a - c));
    } else if (b == "*") {
        console.log("The result is " + (a * c));
    } else if (b == "/") {
        console.log("The result is " + (a / c));
    } else {
        console.log("Invalid operator");
    }
} else {
    if (b == "+") {
        console.log("The result is " + (a - c));
    } else if (b == "-") {
        console.log("The result is " + (a / c));
    } else if (b == "*") {
        console.log("The result is " + (a + c));
    } else if (b == "/") {
        console.log("The result is " + (a ** c));
    } else {
        console.log("Invalid operator");
    }
}