console.log('JS DICE OK');

// ? ******************************* EVEN ODD *******************************
// * PHASE 1
// Link to DOM element
const evenOddButton = document.getElementById('even-odd-btn');
const numberInput = document.getElementById('user-number');
// const userNumber = 3;

// *PHASE 2

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

// Get user input on click
evenOddButton.addEventListener('click', function () {

    // Create var
    const cpuNumber = random();
    const userNumber = numberInput.value;
    const selectInput = document.querySelector('select');
    let evenOddResult = selectInput.value;

    let sumNumber = parseInt(userNumber) + cpuNumber;
    console.log(userNumber, evenOddResult);

    // Even control
    if (isEven(sumNumber)) {
        result = 'even';
        console.log(`Il numero ${sumNumber} è pari!`);
    } else {
        result = 'odd';
        console.log(`Il numero ${sumNumber} è dipari!`);
    };

    // Print result on console
    (evenOddResult === result) ? console.log('Hai vinto!') : console.log('Hai perso!');
})

