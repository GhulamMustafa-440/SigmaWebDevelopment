// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

const vowelCounter = (str) => {
    let vowel = "aeiouAEIOU";
    let countVowel = 0

    
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            countVowel++;
        }
    }

    return countVowel;
}

// Example usage:
let string = "GhulamMustafa"
let result = vowelCounter(string)
console.log(`The number of vowels in '${string}' is: ${result}`);
