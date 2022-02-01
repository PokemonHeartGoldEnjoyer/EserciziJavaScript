// utenti di un sito

let utenti = {
    Alan: {
        cognome: 'Turing',
        nome: 'Alan',
        online: false
    },
    Jeff: {
        cognome: 'Bezos',
        nome: 'Jeff',
        online: true
    },
    Sarah: {
        cognome: 'Princivalli',
        nome: 'Sarah',
        online: true
    }
}

utenti['Alan']
// Vogliamo scrivere l'elenco di tutti i nomi e cognomi degli utenti in questo formato:
// nome cognome (online)

console.log("Nome di tutti gli utenti:")
for (let utente in utenti) {
    console.log(utente)
}

console.log("Utenti online:")
for (let utente in utenti) {
    if (utenti[utente].online == true) {
        console.log(utenti[utente])
    }
}

console.log("Utenti offline:")
for (let utente in utenti) {
    if (utenti[utente].online == false) {
        console.log(utenti[utente])
    }
}