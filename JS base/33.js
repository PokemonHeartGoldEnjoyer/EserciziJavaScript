// le prorpietà degli oggetti possono anche essere altri oggetti

let cocaCola = {
    tipo: 'bevanda',
    quantità: 330,
    annacquata: true,
}

let fanta = {
    tipo: 'bevanda',
    quantità: 330,
    annacquata: true,
}

let cheeseburger = {
    tipo: 'panino',
    quantità: 100,
    scaduti: true,
}

let happyMeal = {
    bibita: fanta,
    panino: cheeseburger
}

console.log(happyMeal)