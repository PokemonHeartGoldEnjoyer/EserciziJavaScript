// definiamo un oggetto:

let gatto = {
    nome: "Geltrude",
    sesso: "f",
    zampre: 4,
    code: 1,
    nemici: ["Acqua", "Cani"]
}

// possiamo leggere le proprietà di un oggetto in due modi:

// primo modo
console.log(gatto.nome)
console.log(gatto.nome)

// secondo modo (come per gli array):
console.log(gatto['nome'])

// posso modificare una proprietà
gatto.sesso = "m"
gatto.nome = "Geltrudo"
console.log(gatto)

// posso anche aggiungere una proprietà
gatto.razza = "Soriano"
console.log(gatto)

gatto.nemici.push("Pescespada")
console.log(gatto)

// posso cancellare una proprietà
delete gatto.sesso
console.log(gatto)