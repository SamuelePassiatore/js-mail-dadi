console.log('JS OK');

/* ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato.
*/

/* 
1 - Prendo gli elementi dal DOM;
2 - Genero due numeri randomici, da 1 a 6, uno per il giocatore e l'altro per il computer.
3 - Genero un condizionale if, in cui il vincitore è colui che ha ottenuto il punteggio più alto.
4 - Stampo in pagina i due numeri e il risultato.
*/

// 1 - Prendo gli elementi dal DOM;
const playerNumber = document.getElementById('player-number');
const cpuNumber = document.getElementById('cpu-number');
const resultElement = document.getElementById('result');


// 2 - Genero due numeri randomici, da 1 a 6, uno per il giocatore e l'altro per il computer.
const player = Math.floor(Math.random() * 6) + 1;
const cpu = Math.floor(Math.random() * 6) + 1;
console.log(player, cpu);

// 3 - Genero un condizionale if, in cui il vincitore è colui che ha ottenuto il punteggio più alto.
let content = "Pareggio!"
if (player > cpu) {
  content = ("Il giocatore vince!");
} else if (player < cpu) {
  content = ("Il computer vince!");
} 
console.log(content);

// 4 - Stampo in pagina i due numeri e il risultato.
playerNumber.innerHTML = 'Numero giocatore: ' + player;
cpuNumber.innerHTML = 'Numero cpu: ' + cpu;
resultElement.innerHTML = `<strong>${content}</strong>`;


/****************************************
*****************************************/

/* ESERCIZIO 2 - Finta login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/* 
1 - Prendo gli elementi dal DOM;
2 - Crea un array con tre email autorizzate;
3 - Aggancio l'event listener al button invia;
  3a - Recupero valore dell'input;
  3b - Validazione degli input raccolti;
  3c - Creo il ciclo for delle email autorizzate;
  3d - Genero un condizionale if riguardo il confronto tra le mail;
  3e - Genero un condizionale if sul messaggio da mostrare;
  3f - Svuoto il campo email;
  3g - Stampo un messaggio sull'esito del controllo;

*/

// 1 - Prendo gli elementi dal DOM;
const inputEmail = document.getElementById('email');
const button = document.getElementById('button');
const message = document.getElementById('message');

// 2 - Crea un array con tre email autorizzate;
const emailAuthorized = [
"einstein@gmail.com", 
"platone@gmail.com", 
"mozart@gmail.com"
];
////console.log(emailAuthorized);

// 3 - Aggancio l'event listener al button invia;
button.addEventListener('click', function () {
    
    // 3a - Recupero valore dell'input;
    const userEmail = inputEmail.value.trim();
    console.log(userEmail);

    // 3b - Validazione degli input raccolti;
    if(!userEmail) {
        alert('Devi inserire un indirizzo email');
        return;
    }

    // 3c - Creo il ciclo for delle email autorizzate;
    let isAuthorized = false;
    for(i = 0; i < emailAuthorized.length; i++) {
        // 3d - Genero un condizionale if riguardo il confronto tra le mail.
        if(emailAuthorized[i] === userEmail){
            isAuthorized = true;
        }
    }

    // 3e - Genero un condizionale if sul messaggio da mostrare;
    let content = '';
    if (isAuthorized) {
        ////console.log("Benvenuto, la tua email è autorizzata all'accesso :)");
        content += `Benvenuto, la tua email è autorizzata all'accesso :)`;
    } else {
        ////console.log("Spiacente, la tua email non è autorizzata all'accesso :(");
        content += `Spiacente, la tua email non è autorizzata all'accesso :(`;
    }

    // 3f - Svuoto il campo email;
    // const input email
    inputEmail.value = '';

    // 3g - Stampo un messaggio sull'esito del controllo;
    message.innerHTML = `<strong>${content}</strong>`;

});






  













