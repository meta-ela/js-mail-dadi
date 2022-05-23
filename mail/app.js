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
const emailUser = prompt("Inserisci la tua email");

//creare array con emails random
let emailAttive = ["giocoliere@gmail.com", 
"laura@outlook.com", 
"mister@live.it", 
"jedi@oscuro.com", 
"helpme@live.it"];


// statement se email attiva o meno
if (emailUser  )
