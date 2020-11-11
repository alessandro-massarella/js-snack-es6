// JSnack 4A
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre
// saranno tutte settate a 0.

// JSnack 4B
// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti


let teams = [];


// uso un ciclo per chiedere all'utente il nome squadra e inserirlo nell'array. In questo caso faccio effetuare la richiesta per 4 volte (4 squadre)

for (let i = 0; i < 4; i++) {
  let squadra = {
    nome : prompt('inserisci squadra'),
    puntiFatti : Math.floor(Math.random() * 101),
    falliSubiti : Math.floor(Math.random() * 11)
  }

  teams.push(squadra);

  console.log(squadra.puntiFatti);
  console.log(squadra.falliSubiti);

}

console.log(teams);
