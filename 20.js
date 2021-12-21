

parole = ['io', 'cane', 'ciao', 'come', 'pusho', 'delizia', 'bella', 'antico', 'animale', 'coding'];

parole2 = [];


for(let i=0; i < parole.length; i++) {

   if (parole[i].length < 6) {

    parole2.push(parole[i]);

   }

    

}


console.log(parole2);