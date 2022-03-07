import './NavbarJack.css'

export default function Navbar(props) {
    let elementi = props.links.map(link => <li className="nav-item">
                                                <a className="nav-link" href={ link.url }>
                                                     { link.titolo }
                                                </a>
                                            </li>
                                    )

    return (
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div class="container-fluid">
      
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="fa fa-bars"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav m-auto">
            { elementi}
          </ul>
        </div>
      </div>
    </nav>
    )
} 