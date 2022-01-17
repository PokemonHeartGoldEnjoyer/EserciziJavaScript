/*
Dato un array cognomi e un array con la stessa cardinalità (stesso numero di elementi)
contenente dei titoli, restituire un array dipendenti in cui ogni elemento
è costituio da un sottoarray del tipo [titolo, cognome].
Ad esempio se 
cognomi = ['Ros', 'Barbato', 'Piazzon']
titoli = [‘ing.’,’dott.’,’avv.’]
dipendenti = [[‘ing.’,’Ros’], [‘dott.’,’Barbato’],[‘avv.’,’Piazzon’]]
*/


cognomi = ['Ros', 'Barbato', 'Piazzon'];
titoli = ['ing.','dott.','avv.'];
dipendenti = [];


// faccio un ciclo for che passa tutti i cognomi
for(let i=0; i<cognomi.length; i++) {
    // metto nella variabile cognome il cognome indicato da i
    let cognome = cognomi[i];
    // metto nella variabile titoli il titolo indicato da i
    let titolo = titolo[i];
    // faccio un push nell'array dipendenti di un nuovo array del tipo [titolo, cognome]
    dipendenti.push([titolo, cognome]);
}

console.log(dipendenti);