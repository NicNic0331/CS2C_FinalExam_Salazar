const readline = require('readline');

// Initialize the readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Check if a string is a palindrome
function isPalindrome(str) {
    return str === reverseString(str);
}

// Prompt the user for two words
rl.question("Enter the first word: ", (word1) => {
    rl.question("Enter the second word: ", (word2) => {
        console.log(`Original Word 1: ${word1}`);
        console.log(`Reversed Word 1: ${reverseString(word1)}`);
        console.log(`Is "${word1}" a palindrome? ${isPalindrome(word1)}`);

        console.log(`Original Word 2: ${word2}`);
        console.log(`Reversed Word 2: ${reverseString(word2)}`);
        console.log(`Is "${word2}" a palindrome? ${isPalindrome(word2)}`);

        rl.close();
    });
});

