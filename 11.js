// definire un array contenente 8 nomi di fiori
// quindi scrivili tutti saltandone uno ogni due+

let fiori =  ['margherita', 'rosa',
              'mughetto', 'primula',
              'viola', 'giglio',
              'lillà', 'bucaneve',

            ];

for(let i=0; i < fiori.length; i+=2) {
    console.log(fiori[i]);
}