console.log('JS PALINDROME OK');

// ? ****************************** PALINDROME ******************************

// * PHASE 1
// Link to DOM Elements
const userInput = document.getElementById('user-input');
const button = document.querySelector('button');

// Create Function isPalindrome
function isPalindrome(word) {
    let reverseWord;
    for (let i = word.length; i === 0; i--) {
        reverseWord += word.charAt(i);
        return reverseWord === word;
    }
}

// Get user input on click
button.addEventListener('click', function () {
    const word = userInput.value;
    console.log(word);
})