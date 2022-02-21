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
      titolo: 'Sparatutto',
      url: 'https://sparatutto.gamestop.com'
    },
    {
      titolo: 'VR',
      url: 'https://vr.gamestop.com'
    },
    {
      titolo: 'Azione',
      url: 'https://azione.gamestop.com'
    },
    {
      titolo: 'Avventura',
      url: 'https://avventura.gamestop.com'
    }
  ]


  let slides = [
    {
      immagine: 'images/DL2.jpg',
      titolo: 'Dying Light 2 Stay Human',
      testo: 'Nuove uscite!',
      classi: 'carousel-item active'
    },
    {
      immagine: 'images/GTA.jpg',
      titolo: 'Grand Theft Auto Original and Remakes',
      testo: 'Giochi popolari!',
      classi: 'carousel-item'
    },
    {
      immagine: 'images/NFS.jpg',
      titolo: 'Need For Speed Most Wanted 2005',
      testo: ' Vecchio ma oro!( Old but gold !)',
      classi: 'carousel-item'
    }

  ]


  return (
    <div>
      <Carousel slides = {slides} />
      <NavbarJack nome="Game Stop!" links={ links } />

      <div className="container">
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}