// voglio crerae una funzione che fabbrica oggetti

function fabbricaGatto(nome, razza) {
    return {
        nome: nome,
        razza: razza,
        coda: 1,
        zampe: 4
    }
}

// vediamo se funziona
let ciro = fabbricaGatto('Ciro', 'Siamese')
console.log(ciro)

// ok, funziona, adesso la uso per fare una mandri di gatti
let gatti = []

gatti.push(fabbricaGatto('Lello', 'Soriano'))
gatti.push(fabbricaGatto('Cira', 'Parsiano'))
gatti.push(fabbricaGatto('Diego', 'Siamese'))

console.log(gatti)

