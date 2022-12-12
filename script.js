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



