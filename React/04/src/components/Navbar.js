export default function Navbar(props) {
    let links = props.link.map(link => <lo>{link}</lo>)

    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">{ props.nome }</a>
            <ul>
                {links}
            </ul>
            </div>
        </nav>
    )
}