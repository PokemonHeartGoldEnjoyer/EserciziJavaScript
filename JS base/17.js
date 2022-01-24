// Definisci un array ortaggio contenente i nomi di 5 ortaggi.
// Scrivi un ciclo for che stampi solo i nomi degli ortaggi diversi da "insalata".

let ortaggi = ['insalata', 'pomodori', 'cipolla', 'patata', 'barbabietola'];

for(let i=0; i < ortaggi.length; i++) {
    // se l'ortaggio i-esimo è diverso da insalata:
    if (ortaggi[i] != 'insalarta') {
    console.log(ortaggi[i]);
    }
}
