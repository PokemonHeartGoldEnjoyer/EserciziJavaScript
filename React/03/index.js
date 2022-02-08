ReactDOM.render(
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card 
                        titolo="Panini"
                        testo="I nostri paninazzi con mortadella e sushi!"
                        immagine="panino.jpg"
                    />
                </div>
                <div className="col">
                    <Card 
                        titolo="Pizza"
                        testo="La nostra pizzazza con kebab e salmone!"
                        immagine="pizza.jpg" 
                    />
                </div>
                <div className="col">
                    <Card ù
                        titolo="Gelato" 
                        testo="Gusti tonno e caviale. Per veri intenditori!"
                        immagine="gelato.jpg"
                    />
                </div>
            </div>
        </div>
    </div>,
    document.getElementById('root')
)