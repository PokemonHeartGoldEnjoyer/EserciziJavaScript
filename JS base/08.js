// scrivere un programma che dati
// il prezzo del biglietto
// l'età delle persone
// e il numero di persone
// calcoli il totale da pagate
// e lo scriva in una frase

// nota: bisognerà definire due prezzi, uno per i minorenni
// e uno per i maggiorenni


// definisco il prezzo del biglietto intero
let prezzoMaggiorenni = 8.50;

// definisco il prezzo del biglietto intero
let prezzoMinorenni = 5.45;

// definisco il numero di persone
let persone = 6;

// definisco l'età
let anni = 16;

// definisco una variabile di totale
    // se il sesso è maschile
 if(anni <= 12) {
    //      preparo una frase
        frase = "Il prezzo da pagare è di " + prezzoMinorenni * persone + " €." ;
    }
    // altrimenti
    else {
    //      preparo l'altra
        frase = "Il prezzo da pagare è di " + prezzoMaggiorenni * persone + " €." ;
    }

    // scrivo la frase  
    console.log(frase);
