// Vogliamo realizzare un robottino che segue
// le indicazuoni di una mappa del tesoro
// e arrivato al punto segnto dalla X

// realizza un oggetto robot che contenga le proprietà x e y che dicono la sua posizione
// e tre metodi:
// - vaiASud(passi) cambia posizione lungo l'asse y
// - vaiAOvest(passi)  cambia posizione lungo l'asse x
// - scava() scrive nella console "Sto scavando!"
// - scriviPosizione() scrive nella console le attuali coordinate

let robot = {
    x: 0,
    y: 0,
    vaiASud: function(passi) { this.x = this.x - passi },
    vaiAOvest: function(passi) { this.y = this.y + passi },
    scava: function() { console.log("Sto scavando") },
    scriviPosizione: function() { console.log("Le tue coordinate sono x= " + this.x + " y= "+ this.y)}
}

robot.vaiASud(7)
robot.vaiAOvest(2)
robot.scava()
robot.scriviPosizione()