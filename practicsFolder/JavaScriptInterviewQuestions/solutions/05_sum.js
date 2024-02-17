// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            break; // Stop summing when a negative number is encountered
        }
        sum += arr[i];
    }

    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, -2, 6, 7];
const result = sumUntilNegative(numbers);
console.log(result); // Output: 15 (1 + 2 + 3 + 4 + 5)
