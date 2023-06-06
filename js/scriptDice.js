console.log('JS DICE OK');

// ? ******************************* EVEN ODD *******************************
// * Phase 1
// Link to DOM element
const evenOddButton = document.getElementById('even-odd-btn');
const selectInput = document.querySelector('select');
const numberInput = document.getElementById('user-number');

// Create var
let cpuNumber;
let sumNumber;
let evenOddResult;

// Create random function
function random() {
    const random = Math.floor(Math.random() * 5) + 1;
    return random;
}
