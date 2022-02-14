function Card(props) {
    console.log(props)
    return (
        <div className="card" style="width: 18rem;">
            <img src={ "images/card/" + props.immagine } className="my-image" />
            <div className="card-body">
                <h5 className="card-title">{ props.nome }</h5>
                <p className="card-text">{ props.ingredienti }+{ props.pezzi }+{ props.prezzi }</p>
            <a href="#" className="btn btn-primary">Premi qui...</a>
            </div>
        </div>
    )
}