function Card(props) {
    console.log(props)
    return (
        <div className="my-card">
            <img src={ "images/" + props.immagine } className="my-image" />
            <h1>{ props.titolo }</h1>
            <p>{ props.testo }</p>
            <button>Premi qui...</button>
        </div>
    )
}