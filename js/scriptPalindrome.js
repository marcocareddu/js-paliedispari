console.log('JS PALINDROME OK');

// ? ****************************** PALINDROME ******************************

// * PHASE 1
// Link to DOM Elements
const userInput = document.getElementById('user-input');
const button = document.querySelector('button');

// Create Function isPalindrome
function isPalindrome(word) {
    let reverseWord = '';
    for (let i = word.length; i >= 0; i--) {
        reverseWord += word.charAt(i);
        console.log(reverseWord);
    }
    return reverseWord === word;
}

console.log(isPalindrome('anna'));
