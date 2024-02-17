// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let originalString = "GhulamMustafa";

let reversedString = originalString.split('').reverse().join('');

let resultString = originalString + reversedString;

// Step 4: Print or use the result as needed
console.log(resultString);
