/*
Dato il nome di un prodotto
e un array contenente dei sottoarray del tipo [quantità, prodotto],
incrementare di un’unità la quantità del prodotto corrispondente.
*/

let prodottoCercato = 'budino';

let carrello = [
['budino', 3],
['detersivo', 1],
['sturacessi', 1]
];

// SOLUZIONE
// faccio un ciclo for che si passa tutti i prodotti del carrello
for(let i=0; i<=carrello.length; i++) {
// estraggo il nomero indicato da i
    let nomero = carrello[i];
// se il nome del prodotto è uguale (==) a quello cercato
    if(nomero[0]==prodottoCercato) {
    // aumento il contatore di quel prodotto di 1
    nomero[1]++;
    }
}

console.log(carrello);