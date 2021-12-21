// PROBLEMA
// Dato un array contenente una lista di 15 numeri,
// creare un altro array contenente solo i numeri di questa lista
// che sono minori di 10

numeri = [
    1, 4, 5, 8, 82,
    10, 64, 5, 6, 98,
    11, 4, 9, 10, 13
];

numeri2 = [];


for(let i=0; i < numeri.length; i++) {

    if (numeri[i] < 10) {

        numeri2.push(numeri[i]);
    }

}


console.log(numeri2);