console.log('JS DICE OK');

// ? ******************************* EVEN ODD *******************************
// * PHASE 1
// Link to DOM element
const evenOddButton = document.getElementById('even-odd-btn');
const numberInput = document.getElementById('user-number');
let resultEvenElement = document.getElementById('even-odd-result');

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

    // Display result card in DOM
    resultEvenElement.classList.remove('d-none');

    // Create var
    const cpuNumber = random();
    const userNumber = numberInput.value;
    const selectInput = document.querySelector('select');
    let evenOddResult = selectInput.value;

    let sumNumber = parseInt(userNumber) + cpuNumber;
    console.log(userNumber, evenOddResult);

    // Even control
    if (isEven(sumNumber)) {
        result = 'pari';
        console.log(`Il numero ${sumNumber} è pari!`);
    } else {
        result = 'dispari';
        console.log(`Il numero ${sumNumber} è dipari!`);
    };

    // Print result on console
    if (evenOddResult === result) {
        resultEvenElement.innerHTML =
            `<p>Il numero ${sumNumber} è ${result}</p>
            <p>Hai Vinto!</p>`
        console.log('Hai vinto!')
    } else {
        resultEvenElement.innerHTML =
            `<p>Il numero ${sumNumber} è ${result}</p>
            <p>Hai Perso!</p>`
        console.log('Hai perso!');
    }
})

