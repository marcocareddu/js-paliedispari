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
    - **CICLARE** tante volte quante sono le lettere di `userInput` fino a 0.
        - **PER OGNI CICLO** appendere la lettera indice nella variabile `reverseWord`.
    - *Ritorno* il booleano di `word` è uguale a `reverseWord`.

- **SE** `isPalindrome` è true:
    - Stampa: *"La parola è palindroma"*.
- **ALTRIMENTI** 
    - Stampa: *"La parola NON è palindroma"*.

