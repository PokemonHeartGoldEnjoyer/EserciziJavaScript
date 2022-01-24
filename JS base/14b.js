/*una pizzeria riceve degli ordini telefonici
Scrivere un programma che inserisce in un elenco ordini
e mette in forno le pizze seguendo l'orfine in arrivo. */

let ordini = []

// una signora ordina una capricciosa
ordini.push("capricciosa");
console.log(ordini);


// una signora ordina una viennese
ordini.push("viennese");
console.log(ordini);


// un signore ordina una quattro stagioni
ordini.push("quattro stagioni");
console.log(ordini);


// il pizzaiolo prepara la prima pizza
console.log("Preparo una " + ordini.shift());
console.log(ordini);

// un signore ordina una quattro formaggiù
ordini.push("quattro formaggi");
console.log(ordini); 

// il pizzaiolo prepara un'altra pizza
console.log("Preparo una " + ordini.shift());
console.log(ordini);

// una signora ordina una diavola
ordini.push("diavola");
console.log(ordini); 

// il pizzaiolo prepara un'altra pizza
console.log("Preparo una " + ordini.shift());
console.log(ordini);

// il pizzaiolo prepara un'altra pizza
console.log("Preparo una " + ordini.shift());
console.log(ordini);

// il pizzaiolo prepara un'altra pizza
console.log("Preparo una " + ordini.shift());
console.log(ordini);

