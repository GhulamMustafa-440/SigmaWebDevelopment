let a = prompt("Enter first number");
let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Invalid number");
}

let sum = parseInt(a) + parseInt(b);

function main() {
    let x = 1;
    try {
        console.log("The sum is", sum * x);
        return true;

    } catch (error) {
        console.log("error a gaya bhai");
        return false;

    } finally {
        console.log("All files are closed and db also closed");
    }
}

let c = main();