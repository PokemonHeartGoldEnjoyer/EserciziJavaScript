ReactDOM.render(
    <div>
        <Navbar 
            logo="logo.jpg"
            nome=""
        />
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card 
                        immagine="pizza.jpg"
                        nome="Panini"
                        ingredienti="Alghe, escrementi di pantegana"
                        pezzi={4}
                        prezzi={5.45}
                        
                    />
                </div>
                <div className="col">
                    <Card 
                        immagine="pizza.jpg"
                        nome="Panini"
                        ingredienti="Alghe, escrementi di pantegana"
                        pezzi={4}
                        prezzi={5.45} 
                    />
                </div>
                <div className="col">
                    <Card
                        immagine="pizza.jpg"
                        nome="Panini"
                        ingredienti="Alghe, escrementi di pantegana"
                        pezzi={4}
                        prezzi={5.45}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Card 
                        immagine="pizza.jpg"
                        nome="Panini"
                        ingredienti="Alghe, escrementi di pantegana"
                        pezzi={4}
                        prezzi={5.45}
                        
                    />
                </div>
                <div className="col">
                    <Card 
                        immagine="pizza.jpg"
                        nome="Panini"
                        ingredienti="Alghe, escrementi di pantegana"
                        pezzi={4}
                        prezzi={5.45} 
                    />
                </div>
                <div className="col">
                    <Card
                        immagine="pizza.jpg"
                        nome="Panini"
                        ingredienti="Alghe, escrementi di pantegana"
                        pezzi={4}
                        prezzi={5.45}
                    />
                </div>
                <div className="col">
                    <Card
                        immagine="pizza.jpg"
                        nome="Panini"
                        ingredienti="Alghe, escrementi di pantegana"
                        pezzi={4}
                        prezzi={5.45}
                    />
                </div>
            </div>
        </div>
    </div>,
    document.getElementById('root')
)