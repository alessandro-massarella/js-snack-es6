// JSnack 3
// Creare un oggetto che rappresenti un triangolo rettangolo,
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.
let triangolo = {};


$('button').click(function(){
  let triangolo = {
    base : document.getElementById('base_input').value,
    altezza : document.getElementById('altezza_input').value
  };

  let perimetro = Math.sqrt((triangolo.base ** 2) + (triangolo.altezza ** 2)) + triangolo.base + triangolo.altezza;
  let area = (triangolo.base * triangolo.altezza) / 2;
// console.log(perimetro);
// document.getElementById('perimetro_ris').innerHTML = ('Perimetro: ' + perimetro);
document.getElementById('perimetro_ris').innerHTML = (`Perimetro: ${perimetro} cm`);
// document.getElementById('area_ris').innerHTML = ('Area: ' + area);
document.getElementById('area_ris').innerHTML = (`Area: ${area} cm2`);
});


// console.log('perimetro: ' + perimetro);
// console.log('area: ' + area);
