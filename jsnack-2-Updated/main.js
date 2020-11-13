// Jsnack 2 - Updated
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikes = [
  {
    nome : 'giant',
    peso : 8
  },
  {
    nome : 'cannondale',
    peso : 2
  },
  {
    nome : 'merida',
    peso : 3
  }
];

let lightBike = bikes[0].peso;

for (let i = 0; i < bikes.length; i++) {
  if (bikes[i].peso < lightBike) {
    lightBike = bikes[i];
  }
}

// ho 3 variabili di oggetti bici
const [giant, cannondale, merida] = bikes;
console.log(giant, cannondale, merida);


const biciLeggera = `La bici più leggera è: ${lightBike.nome}`;
console.log(biciLeggera);

document.getElementById('bici').innerHTML = `
<li>Nome: ${lightBike.nome}</li>
<li>Peso: ${lightBike.peso}</li>
`
