export default function Carousel(props) {
    let elementi = props.slides.map(slide =>
        <div class={slide.classi}>
                <img src={ slide.immagine } class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h5>{ slide.titolo }</h5>
                <p>{ slide.testo }</p>
            </div>
      </div>
        )
    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                {elementi}
                {elementi}
                {elementi}
            </div>
            </div>
    )
}