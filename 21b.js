/* preparare un array contenente gli ordini delle pizze 
per ogni ordine memorizzare il nome e cognome del cliente,
il nome della pizza e il numero di pizze di quel tipo da ordinare
Scivere poi l'elenco degli ordini in questo formato:

Peruzzi Michele, 2 x diavola
Ros Andrea, 5 x quattro formaggi
*/

libri = [
    ['Lil Nasx','Diavola', 2],
    ['Joe Biden','Hawaiana',6],
    ['Ciro Esposito','Napoletana',4]
];

for(let i=0; i < libri.length; i++) {

    console.log(libri[i][0]);
}
