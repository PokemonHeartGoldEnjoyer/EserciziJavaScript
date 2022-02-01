/*
Definire un oggetto "ordine"
che contenga una serie di panini ordinati dal cliente:
oogni oggetto "panino" deve essere identificato da un codice numerico (inventato)
e contenere queste informazioni sotto forma di proprietà:
- nome del panino
- quantità
- prezzo unitario
- ingredienti sotto forma di array

L'esercizio è completo con 3 panini
*/

let ordine = {
    panino1: {
        nome: 'Cheesy 2.0',
        quantità: 3,
        prezzo: 9.00 + "€",
        ingredienti: ["burger di manzo", " cheddar", " lattuga"," pomodoro", " bacon", " ketchup"]
    },
    panino2: {
        nome: 'American',
        quantità: 6,
        prezzo: 12.00 + "€",
        ingredienti: ["doppio burger di manzo", " cipolla", " uovo", " pomodoro", " doppio bacon", " salsa BBQ"]
    },
    panino3: {
        nome: 'Italo',
        quantità: 9,
        prezzo: 12.50 + "€",
        ingredienti: ["burger di manzo", " burrata", " pomodorini caramellati"," spinacino", " crema al tartufo e champingnon"]
    },
}

console.log(ordine)

