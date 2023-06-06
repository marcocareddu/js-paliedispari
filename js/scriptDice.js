console.log('JS DICE OK');

// ? ******************************* EVEN ODD *******************************
// * Phase 1
// Link to DOM element
const evenOddButton = document.getElementById('even-odd-btn');
const selectInput = document.querySelector('select');
const numberInput = document.getElementById('user-number');
// const userNumber = numberInput.value;
const userNumber = 3;

// Create var
const cpuNumber = random();
let sumNumber = parseInt(userNumber) + cpuNumber;
let evenOddResult;

// Create random function
function random() {
    const random = Math.floor(Math.random() * 5) + 1;
    return random;
}

// Create isEven function
function isEven(number) {
    const numberRest = number % 2;
    return numberRest === 0;
}

// Even control
if (isEven(sumNumber)) {
    result = 'even';
    console.log(`Il numero ${sumNumber} è pari!`);
} else {
    result = 'odd';
    console.log(`Il numero ${sumNumber} è dipari!`);
};