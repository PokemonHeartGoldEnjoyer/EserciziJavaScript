// definisco due array con rgazzi e ragazze:

let ragazzi = ['Mirco', 'Mirko', 'Ciro'];
let ragazze = ['Ada', 'Eva', 'Ana'];

// definisco un array persone vuoto:
let persone = [];

// inserisco nell'array persone l'array dei ragazzi
persone.push(ragazzi);

// ottengo un array dentro l'array (parentesi quadre doppie)
console.log(persone);

// inserisco nell'array persone l'array dei ragazzi
persone.push(ragazze);

// ottengo due array dentro l'array
console.log(persone);

// questo è un array multidimensionale:
// per leggere ad esempio il nome della seconda ragazza scrivo
console.log(persone[0][2]);

// il primonumero indica quale sottoarray prendere
// il secondo numeroindica quale elemento del sottoarray voglio
// (ricorda che gli indici degliarray partono da zero)

// esercizio : prova a far scrivere il nome di Ciro