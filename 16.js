// dato l'array multidimensionale fatto cosi :

cose = [
            [
                [1,2,3],
                [4,5,6]
            ],
            [
                [7,8,9],
                [10,11,12]
            
            ],
            [
                cose2 = [17,18,19,[77, 88]],
                [110,111,112]
            ]

        ];

// fai in modo che nella console appaia il numero ?
// selezionandolo opportunamento dall'array

console.log(cose[][][]);

// fai in modo che nel posto indicato dall'asterisco
// venga inserito un nuovo sottoarray contenente i numeri 77 e 88
let cose2 = [77,88];
cose[2][0].push(cose2);

console.log(cose);
