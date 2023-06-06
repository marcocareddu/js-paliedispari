console.log('JS PALINDROME OK');

// ? ****************************** PALINDROME ******************************

// * PHASE 1
// Link to DOM Elements
const userInput = document.getElementById('user-input');
const button = document.querySelector('button');
let resultElement = document.getElementById('palindrome-result');
let result = '';

// Create Function isPalindrome
function isPalindrome(word) {
    let reverseWord = '';
    for (let i = word.length; i >= 0; i--) {
        reverseWord += word.charAt(i);
    }
    return reverseWord === word;
}

// Get user input on click
button.addEventListener('click', function () {
    // Trim and lowercase user input
    const word = userInput.value.trim().toLowerCase();

    // Display card with result
    resultElement.classList.remove('d-none');
    if (isPalindrome(word)) {

        resultElement.innerHTML = `<p>La parola ${word} è palindroma! </p>`;
        console.log('Success')
    } else {

        resultElement.innerHTML = `<p>La parola ${word} NON è palindroma!</p>`;
        console.log('Unsuccess');
    }
})