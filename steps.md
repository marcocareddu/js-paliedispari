<!-- Esercizio di oggi: Pali e dispari
nome repo: js-paliedispari  (si, c'è una 'L' in 'pali' perchè siamo molto cringe)

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
 -->

 # Palindroma

 ## Fase preliminare
 - Collegare gli elementi del DOM.
 - Prendere l'input dell'utente e salvarlo nella variabile `userInput`. 

 ## Svolgimento
 - Creare una funzione `isPalindrome` con 1 paramentro `word`.
    - Dichiarare la variabile d'appoggio `reverseWord`.
    - **CICLARE** tante volte quante sono le lettere di `word` fino a 0.
        - **PER OGNI CICLO** appendere la lettera indice nella variabile `reverseWord`.
    - *Ritorno* il booleano di `word` è uguale a `reverseWord`.

- **SE** `isPalindrome` è true:
    - Stampa: *"La parola è palindroma"*.
- **ALTRIMENTI** 
    - Stampa: *"La parola NON è palindroma"*.

<br>

# Pari e Dispari
## Fase Preliminare
- Collegare gli elementi del DOM.
- Prendere l'input della select e salvarlo nella variabile `selectInput`. 
- Prendere l'input number e salvarlo nella variabile `numberInput`.
- Creare la variabile `cpuNumber`.
- Creare la varibile `sumNumber`.
- Creare la variabile `result`.

## Svolgimento
- Creare una funzione `random` che *ritorna* un numero random da 1 a 5.
- Assegnare a `cpuNumber` il valore della funzione `random`.
- Assegnare a `sumNumber` la somma di `numberInput` e `cpuNumber`.
- Creare una funzione `isEven` con 1 paramentro `number`:
    - Creo una variabile `numberRest` a cui assegno il valore di `number % 2`.
    - *Ritorno* il booleano di `numberRest` === 0.
- **SE** `isEven` di `sumNumber` è `true`:
    - `result` = 'even'.
    - Stampa: *"Il numero è pari!"*.
- **ALTRIMENTI**:
    - `result` = 'odd'.
    - Stampa: *"Il numero è dispari!"*.
- **SE** `selectInput` === `result`:
    - Stampa: *"Hai Vinto!*
- **ALTRIMENTI**:
    - Stampa: *"Ha vinto la CPU!*
