// prepara un array contenente il prezzo di dieci prodotti (usa numeri con la virgola, tipo 8.20)

let prezzi = 
[
2.50, 6.72, 3.69,
8.52, 2.34, 12,32,
17.89, 162.34, 453.34,
99.99
];

// prepara un secondo array e inserisci dentro a questo solo i prezzi minori di 5 euro
// (fallo usando un ciclo for)

let prezzi2 = [];

for(let i=0; i<prezzi.length; i++) {
    if(prezzi[i] < 5) {
        prezzi2.push(prezzi[i]);
    }
}

console.log(prezzi2);