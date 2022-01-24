//  scrivere un programma che, dato il nome di una persona
// il suo sesso e un numero intero
// scriva una frase tante volte quanto
// è specificato dal numero
// la frasde dev'essere "Benvenuto NOME" per i maschi
// e "Benvenuta NOME" per le femmine

// SOLUZIONE
// definisco e assegno una variabile nome 
let nome = "Laura";

// definisco e assegno una variabile numero
let numero = 3;

// definisco e assegno una variabile sesso
let sesso = 'f';

//scrivo con un ciclo for che conti da 1 a numero
for(i=1; i<=numero; i++) {
    // se il sesso è maschile
    if(sesso == 'm') {
    //      preparo una frase
        frase = "Benvenuto " + nome;
    }
    // altrimenti
    else {
    //      preparo l'altra
        frase = "Benvenuta " + nome;
    }

    // scrivo la frase  
    console.log(frase);
}