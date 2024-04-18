import React from "react";
import './css/carousel.css';

function Carousel(){
    return(
        <div className="carousel">
            <div className="card_hamburguer">
                <h1>Hamburger</h1>
            </div>
            <div className="card_sushi">
                <h1>Sushi</h1>
            </div>
            <div className="card_massas">
                <h1>Massas</h1>
            </div>
            <div className="card_pizza">
                <h1>Pizza</h1>
            </div>
        </div>
    )
}

export default Carousel;