// jsnack 5
// Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente


const amiciArr = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
console.log(amiciArr);

const firstNum = parseInt(prompt('inserisci un numero tra 0 e 5'));
const secondNum = parseInt(prompt('inserisci un numero tra 0 e 5'));

const newAmici = amiciArr.slice(firstNum, secondNum);
console.log(newAmici);
