ReactDOM.render(
    <div>
        <Navbar 
            logo="logo.jpg"
            nome="Sushi-Bar&Ristorante"
        />
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card 
                        immagine="tartare.jpg"
                        nome="Tartare"
                        ingredienti="Pesce crudo servite con riso"
                        pezzi={4}
                        prezzi={18.00}
                    />
                </div>
                <div className="col">
                    <Card 
                        immagine="uramaki1.jpg"
                        nome="Uramaki Special"
                        ingredienti="Esterno avocado, interno salmone, philadelphia e tabasco"
                        pezzi={3}
                        prezzi={14.50} 
                    />
                </div>
                <div className="col">
                    <Card
                        immagine="uramaki2.jpg"
                        nome="Uramaki Diamo 1"
                        ingredienti="Mango e tonno"
                        pezzi={6}
                        prezzi={14.00}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Card 
                        immagine="uramaki3.jpg"
                        nome="Uramaki Classici"
                        ingredienti="Pesce misto esterno, avocado interno"
                        pezzi={5}
                        prezzi={13.00}
                        
                    />
                </div>
                <div className="col">
                    <Card 
                        immagine="hosomaki.jpg"
                        nome="Hosomaki"
                        ingredienti="Piccoli arrotolati con alga nori esterna"
                        pezzi={4}
                        prezzi={9.00} 
                    />
                </div>
                <div className="col">
                    <Card
                        immagine="temaki.jpg"
                        nome="Temaki"
                        ingredienti="Salsa di tonno e mayonese giapponese, avocado, gambero cotto"
                        pezzi={1}
                        prezzi={7.00}
                    />
                </div>
                <div className="col">
                    <Card
                        immagine="gunkan.jpg"
                        nome="Gunkan"
                        ingredienti="Riso con condimento avvolto con alga nori"
                        pezzi={2}
                        prezzi={7.00}
                    />
                </div>
            </div>
        </div>
    </div>,
    document.getElementById('root')
)