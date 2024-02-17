// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleArrayElements(arr) {
    let result = [];
    let prevElement = null;

    for (let element of arr) {
        if (element === prevElement) {
            result.push(element);
            prevElement = null;
        } else {
            result.push(2 * element);
            prevElement = element;
        }
    }

    return result;
}

// Example usage:
let originalArray = [1, 2, 2, 3, 4, 4, 5];
let doubledArray = doubleArrayElements(originalArray);

console.log("Original Array:", originalArray);
console.log("Doubled Array:", doubledArray);
