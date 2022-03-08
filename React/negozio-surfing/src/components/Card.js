export default function Card(props) {
    return (
        <div className="col" m-5>
            <div class="card">
                <img src={props.immagine} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{ props.titolo }</h5>
                    <p class="card-text">{ props.testo }</p>
                    <a href={ props.link } class="btn btn-primary">Mostra altro</a>
                </div>
            </div>
        </div>
    )
}