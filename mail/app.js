/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
(non usare includes() o indexOf)


- chieder all'utente l'email
- creare array con email random
- SE l'email inserito è diverso dall'arrey
    - stampare in html alert di email non attiva
    ALTRIMENTI
    - stampare in html alert di email attiva
*/

// chiedere all'utente l'email
// const emailUser = prompt("Inserisci la tua email");

// //creare array con emails random
// const emailAttive = [
//     "giocoliere@gmail.com", 
//     "laura@outlook.com", 
//     "mister@live.it", 
//     "jedi@oscuro.com", 
//     "helpme@live.it",
// ];


// // statement se email attiva o meno
// if (emailUser == emailAttive) {
//     alert("email attiva");
// } else if (emailUser !== emailAttive) {
//     alert("email non attiva");
// }


// console.log(emailUser, emailAttive)

const emailInput = document.getElementById('emailInput');
const btnSubmit = document.getElementById('btnSubmit');
const alertResult = document.getElementById('alertResult');

const emailList = [     
    "giocoliere@gmail.com", 
    "laura@outlook.com", 
    "mister@live.it", 
    "jedi@oscuro.com", 
    "helpme@live.it",
];

btnSubmit.addEventListener('click', function() {
    const userEmail = emailInput.value;
    let foundEmailIndex;

    for (let i = 0; i < emailList.length; i++) {
        const currentEmail = emailList[i];

        if(currentEmail === userEmail) {
            console.log("Accesso consentito");
            foundEmailIndex = i;
        }
    }

    if (foundEmailIndex != undefined) {
        console.log("Accesso non consentito");
        alertResult.innerHTML = "Accesso Consentito!";
        alertResult.classList.remove("alert-danger");
        alertResult.classList.add("alert-success");
    } else {
        alertResult.innerHTML = "Accesso non consentito!";
        alertResult.classList.remove("alert-success");
        alertResult.classList.add("alert-danger");
    }

    alertResult.classList.remove("d-none");
})