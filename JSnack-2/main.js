// JSnack 2
// Creare un array di oggetti: ogni oggetto descriverà una bici
// da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
  {
    nome : 'giant',
    peso : 5
  },
  {
    nome : 'cannondale',
    peso : 6
  },
  {
    nome : 'merida',
    peso : 4
  }
];

let lightBike = bikes[0].peso;

for (let i = 0; i < bikes.length; i++) {
  if (bikes[i].peso < lightBike) {
    lightBike = bikes[i];
  }
}

console.log(lightBike);
