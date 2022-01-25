// scrivere una funzione siri che, in base alla parola che riceve
// risponde con una frase opportuna

function siri(parola) {
    // ciao
    // Buongiorno, sono Siri e sono feliced di conoscerti.

    // fanciullo
    // Non mi sembra il caso di essere volgare

    // sbronza
    // A questo punto mi ritiro nel mio cloud.

    // scusa 
    // Scuse accettate è un piacere parlare con te

    // se dice altro
    // Non ho capito, puoi spiegarrti meglio?

    let risposta
    switch(parola) {
        case 'ciao':
            risposta = "Buongiorno, sono Siri e sono feliced di conoscerti.";
            break;
        case 'fanciullo':
            risposta = "Non mi sembra il caso di essere volgare.";
            break;
        case 'sbronza':
            risposta = "A questo punto mi ritiro nel mio cloud.";
            break;
        case 'scusa':
            risposta = "Scuse accettate è un piacere parlare con te";
            break;
        default:
            risposta = "Non ho capito, puoi spiegarrti meglio?";

    }
    console.log(risposta)
}

siri("fanciullo")
siri("ciao")
siri("sconosciuta")
siri("sbronza")
siri("scusa")

