/*
Dato un array contenente una serie di sottoarray del tipo ['nome',numero],
fare in modo che il programma ripeta i vari nomi prt il numeri di volte indicato dal numnero.
Ad esempio [['Paolo',2]['Marzia',3]] produrrà:
Paolo
Paolo
Marzia
Marzia
Marzia
*/

// definisco l'array nomeri (nomi e numeri)
    nomeri = [['Edoardo',6]['Martina',9]];

// ciclo for che si passa tutti i nomeri
for(let i=0; i<nomeri.length; i++) {
// metto in una variabile il nomero corrente
    let nomero = nomeri[i];
// metto in una variabile nome il nome prendendolo dal nomero
    let nome = nomero[0];
// metto in una variabile nome il numero prendendolo dal nomero
    let numero = nomero[1];
// ciclo for che conta da 1 a numero
    for(let i=0; i == numero; i++) {
        console.log(nome);
    }
// scrivo il nome
}