export default function Card(props) {
    let elementi = props.cards.map(card => 
        <div>
            <img src={card.immagine}/>
            <div class="card-body">
                <h5>{ card.titolo }</h5>
                <p>{ card.testo }</p>
                <a href={ card.url } class="btn btn-primary">{card.prezzi}</a>
            </div>
        </div>
)
    return(
        <div class="card" style="width: 18rem;">
            {elementi}
      </div>
    )
}