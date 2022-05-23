/*
Gioco dei dadi
Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
C’è forse un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?


- crea due array vuoti per box utente e box macchina
- creare bottone random nel box utente
- al click del bottone genera 6 numeri 
(come se lanciasse un dado 6 volte)
- al click del bottone da parte dell'utente
    genera altri 6 numeri in una casella a parte nel box macchina
- fare un riusltato della somma dei numeri del box utente 
- fare un riusltato della somma dei numeri del box macchina 
- SE il risultato somma box utente è > alla somma box macchina --> VITTORIA
    ALTRIMENTI SE 
        - il risultato somma box utente è = alla somma box macchina --> PAREGGIO
    ALTRIMENTI SE 
        - il risultato somma box utente è < alla somma box macchina --> SCONFITTA

*/

const numberUser = [];
const numberMachine = [];

const button = document.getElementById("buttonGenerate");

button.addEventListener("click", function() {
    n = "";

    for (i = 1; i < 7; i++) {
        number = Math.round(Math.random() * 6);
        console.log(number);
        
        if (i > 0) {
            n += ", ";
        }

        n += number;
    }
    
    let resultNumber = document.getElementById("result-number");

        resultNumber.innerHTML= `Numeri: ${n}`;
});