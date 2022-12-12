console.log('JS OK');

/* ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato.
*/

/* 
1 - Prendo gli elementi dal DOM;
2 - Creo due array, uno per il giocatore e l'altro per il computer.
3 - Genero due numeri randomici, da 1 a 6, uno per il giocatore e l'altro per il computer.
4 - Inserisco i due numeri all'interno dell'array attraverso la proprietà push.
5 - Genero un condizionale if, in cui il vincitore è colui che ha ottenuto il punteggio più alto.
6 - Stampo in pagina i due numeri e il risultato.
*/

// 1 - Prendo gli elementi dal DOM;
const playerNumber = document.getElementById('player-number');
const cpuNumber = document.getElementById('cpu-number');
const resultElement = document.getElementById('result');

// 2 - Creo due array, uno per il giocatore e l'altro per il computer.
const player = [];
const cpu = [];

// 3 - Genero due numeri randomici, da 1 a 6, uno per il giocatore e l'altro per il computer.
let content = '';
for (let i = 0; i < 1; i++) {
    let randomNumbers = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    // 4 - Inserisco i due numeri all'interno dell'array attraverso la proprietà push.
    player.push(randomNumbers);
    console.log(player);
}

for (let i = 0; i < 1; i++) {
    let randomNumbers = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    // 4 - Inserisco i due numeri all'interno dell'array attraverso la proprietà push.
    cpu.push(randomNumbers);
    console.log(cpu);
}

// 5 - Genero un condizionale if, in cui il vincitore è colui che ha ottenuto il punteggio più alto.
if (player > cpu) {
    content += ("Il giocatore vince!");
  } else if (player < cpu) {
    content += ("Il computer vince!");
  } else {
    content += ("Pareggio!");
  }
  console.log(content);

// 6 - Stampo in pagina i due numeri e il risultato.
  playerNumber.innerHTML = player;
  cpuNumber.innerHTML = cpu;
  resultElement.innerHTML = content;


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
  3d - Genero un condizionale if riguardo il confronto tra le mail.
4 - Stampo un messaggio sull'esito del controllo;
*/

// 1 - Prendo gli elementi dal DOM;
const inputEmail = document.getElementById('email');
const button = document.getElementById('button');

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
    // 3a2 - Validazione degli input raccolti;
    if(!userEmail) {
        alert('Devi inserire un indirizzo email');
        return;
    }
});






  













