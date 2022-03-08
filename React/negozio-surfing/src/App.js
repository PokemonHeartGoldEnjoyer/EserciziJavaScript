import './App.css'
import Navbar from './components/Navbar'
import NavbarJack from './components/NavbarJack'
import Carousel from './components/Carousel'
import Card from './components/Card'
import Footer from './components/Footer'

export default function App() {
  // array che contiene una serie di oggetti con le caratteristiche dei link della navbar
  let links = [
    {
      // ogni oggetto ha 2 proprietà : il titolo e l'url da inserire nei link
      titolo: 'Home',
      url: '/'
    },
    {
      // ogni oggetto ha 2 proprietà : il titolo e l'url da inserire nei link
      titolo: 'Tavole',
      url: 'https://tavole.negozio-di-moda.com'
    },
    {
      titolo: 'Abbigliamento',
      url: 'https://abbigliamento.negozio-di-moda.com'
    },
    {
      titolo: 'Vele',
      url: 'https://Vele.negozio-di-moda.com'
    },
    {
      titolo: 'Sport',
      url: 'https://sport.negozio-di-moda.com'
    }
  ]

  let slides = [
    {
      immagine: 'Carousel.img/Surf1.jpg',
      titolo: 'Abbigliamenti per surfing e altro!',
      testo: 'Nuove uscite!',
      prezzi: 'carousel-item active'
    },
    {
      immagine: 'Carousel.img/Surf2.jpg',
      titolo: 'Tavole da surf nuove solo per te!',
      testo: ' Anche usate... ',
      prezzi: 'carousel-item'
    },
    {
      immagine: 'Carousel.img/Surf3.jpg',
      titolo: 'Vele di tutti i colori!!',
      testo: 'Di prezzi variabili anche economiche.',
      prezzi: 'carousel-item'
    }
  ]
  
  let tavole = [
    {
      titolo:"Tavola1",
      testo:"Questa è una tavola",
      immagine:"Cards.img/Tavola1.jpg",
      link:"https://tavole.negozio-surfing.it" 
    },
    {
      titolo:"Tavola2",
      testo:"Questa è una tavola",
      immagine:"Cards.img/Tavola2.jpg",
      link:"https://tavole.negozio-surfing.it" 
    },
    {
      titolo:"Tavola3",
      testo:"Questa è una tavola",
      immagine:"Cards.img/Tavola3.jpg",
      link:"https://tavole.negozio-surfing.it" 
    }
  ]
  let elementi_tavole = tavole.map(prodotto => <Card 
                                                  titolo = { prodotto.titolo } 
                                                  testo = { prodotto.testo } 
                                                  immagine = { prodotto.immagine } 
                                                  link = { prodotto.link } 
                                                />
  )

  let vele = [
    {
      titolo:"Vela1",
      testo:"Questa è una tavola",
      immagine:"Cards.img/Vela1.jpg",
      link:"https://vele.negozio-surfing.it" 
    },
    {
      titolo:"Tavola2",
      testo:"Questa è una tavola",
      immagine:"Cards.img/Vela2.jpg",
      link:"https://vele.negozio-surfing.it" 
    },
    {
      titolo:"Tavola3",
      testo:"Questa è una tavola",
      immagine:"Cards.img/Vela3.jpg",
      link:"https://vele.negozio-surfing.it" 
    }
  ]
  let elementi_vele = vele.map(prodotto => <Card 
                                                  titolo = { prodotto.titolo } 
                                                  testo = { prodotto.testo } 
                                                  immagine = { prodotto.immagine } 
                                                  link = { prodotto.link } 
                                                />
  )

  let abbigliamento = [
    {
      titolo:"Tavola1",
      testo:"Questa è una tavola",
      immagine:"Cards.img/Abb1.jpg",
      link:"https://vele.negozio-surfing.it" 
    },
    {
      titolo:"Tavola2",
      testo:"Questa è una tavola",
      immagine:"Cards.img/Abb2.jpg",
      link:"https://vele.negozio-surfing.it" 
    },
    {
      titolo:"Tavola3",
      testo:"Questa è una tavola",
      immagine:"Cards.img/Abb3.jpg",
      link:"https://vele.negozio-surfing.it" 
    }
  ]
  let elementi_abbigliamento = abbigliamento.map(prodotto => <Card 
                                                  titolo = { prodotto.titolo } 
                                                  testo = { prodotto.testo } 
                                                  immagine = { prodotto.immagine } 
                                                  link = { prodotto.link } 
                                                />
  )
  
  return (
    <div>
      <NavbarJack logo = 'Cards.img/logo.jpg' nome="Negozio Surfing!" links={ links } />
      <Carousel slides = {slides} />

      <div className="container">
        <div className="row">
         {elementi_tavole}
        </div>
        <div className="row">
         {elementi_vele}
        </div>
        <div className="row">
         {elementi_abbigliamento}
        </div>
      </div>

      <Footer />
    </div>
  );
}