console.log('JS PALINDROME OK');

// ? ****************************** PALINDROME ******************************

// * PHASE 1
// Link to DOM Elements
const userInput = document.getElementById('user-input');
const button = document.querySelector('button');

// Get user input on click
button.addEventListener('click', function () {
    const word = userInput.value;
    console.log(word);
})