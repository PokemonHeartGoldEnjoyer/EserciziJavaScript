// Definisci gli oggetti che servono per creare un'applicazione che faccia l'inventyario informatico del CFP.

// JSON JavaScript Object Notation

let Lab20 = {
    tipo: 'aula',
    oggetti: 17,
    utilizzo: 'informatica',
}

let PcDidonna = {
    tipo: 'computer',
    componenti: 7,
    utilizzatore: 'Didonna',
}

let Processore = {
    tipo: 'Intel',
    velocitaclock: 2.90 + "Ghz",
    core: 6,
    processorilogici: 6,
}

let Inventario = {
    Aula: Lab20,
    Computer: PcDidonna,
    Pezzo: Processore,
}

console.log(Inventario)