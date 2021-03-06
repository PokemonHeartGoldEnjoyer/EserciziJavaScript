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
      titolo: 'Look',
      url: 'https://look.negozio-di-moda.com'
    },
    {
      titolo: 'Abbigliamento',
      url: 'https://abbigliamento.negozio-di-moda.com'
    },
    {
      titolo: 'Scarpe',
      url: 'https://scarpe.negozio-di-moda.com'
    },
    {
      titolo: 'Sport',
      url: 'https://sport.negozio-di-moda.com'
    }
  ]

  let slides = [
    {
      immagine: 'images/carou1.jpg',
      titolo: 'Dying Light 2 Stay Human',
      testo: 'Nuove uscite!',
      prezzo: 'carousel-item active'
    },
    {
      immagine: 'images/carou2.jpg',
      titolo: 'Grand Theft Auto Original and Remakes',
      testo: 'Giochi popolari!',
      prezzo: 'carousel-item'
    },
    {
      immagine: 'images/carou3.jpg',
      titolo: 'Need For Speed Most Wanted 2005',
      testo: ' Vecchio ma oro!( Old but gold !)',
      prezzo: 'carousel-item'
    },
    {
      immagine: 'images/carou4.jpg',
      titolo: 'Need For Speed Most Wanted 2005',
      testo: ' Vecchio ma oro!( Old but gold !)',
      prezzo: 'carousel-item'
    }
  ]
  
  let cards = [
    {
      immagine: 'images/card1.jpg',
      titolo: 'Pullover in maglia',
      testo: 'Esclusivo web',
      prezzo: ' ̶1̶3̶.̶0̶0̶€̶  9.00€',
      link: 'https://magliapullover.negozio-di-moda.com'
    },
    {
      immagine: 'images/card2.jpg',
      titolo: 'Pantaloni in voile di cotone',
      testo: 'Eco-design',
      prezzo: '10,00€',
      link: 'https://pantalonicotone.negozio-di-moda.com'
    },
    {
      immagine: 'images/card3.jpg',
      titolo: 'T-shirt in maglia morbida stretch',
      testo: 'Scopri le migliori vendite !',
      prezzo: '8.00€',
      link: 'https://t-shirt.negozio-di-moda.com'
    },
    {
      immagine: 'images/card4.jpg',
      titolo: 'T-shirt Disney stampa Hollywood',
      testo: 'Eco-design',
      prezzo: 'carousel-item',
      link: 'https://t-shirt.negozio-di-moda.com'
    },
    {
      immagine: 'images/card5.jpg',
      titolo: 'Blusa in garza di cotone',
      testo: 'Scopri le migliori vendite !',
      prezzo: '20,00€',
      link: 'https://garzacotone.negozio-di-moda.com'
    },
    {
      immagine: 'images/card6.jpg',
      titolo: 'Jeans taglio slim L32',
      testo: 'Scopri le migliori vendite !',
      prezzo: ' ̶2̶0̶.̶0̶0̶€̶ 12,00€',
      link: 'https://jeans.negozio-di-moda.com'
    }
  ]

  return (
    <div>
      <Carousel slides = {slides} />
      <Navbar logo = 'images/logo.jpeg' nome="Negozio di moda!" links={ links } />

      <div className="container">
        <div className="row">
          <div className="col">
            <Card cards={cards[0]} />
          </div>
          <div className="col">
            <Card cards={cards[1]} />
          </div>
          <div className="col">
            <Card cards={cards[2]} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card cards={cards[3]} />
          </div>
          <div className="col">
            <Card cards={cards[4]} />
          </div>
          <div className="col">
            <Card cards={cards[5]} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}