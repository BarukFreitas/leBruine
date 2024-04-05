import React from "react";
import ReactDOM from "react-dom/client";
import '../src/carousel.css';


ReactDOM.createRoot(document.getElementById('carousel')).render(
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