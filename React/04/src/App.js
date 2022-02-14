import './App.css'
import Spesa from'./components/Spesa'
import Navbar from'./components/Navbar'

function App() {
  let links = [
    'http://localhost:3000/#'
  ]

  let listaMamma = [
    'Salmone',
    'Insalata',
    'Birra',
    'Zucchero a velo  '
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Navbar 
          logo=""
          nome="PeppeFetiscPiedi"
          link={listaMamma}
        />

        <Spesa
        dove="ALìPer" 
        lista={listaMamma} 
        />

      </header>
    </div>
  );
}

export default App;
