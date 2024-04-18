import React from "react";
import pin from './assets/pin_map_ico.svg';
import './css/myPlace.css';

function MyPlace(){
    return(
        <div className="myPlace">
            <h2 className="title">O que você quer reservar hoje?</h2>
            <div className="myPlace">
                <img src={pin} alt="pin mapa" className="pin_map" />
                <p className="text">Você está em: <a href="#" className="city">Garanhuns-PE</a></p>
                <p className="text_minor">Não é o seu local? Clique na cidade e escolha seu endereço</p>
            </div>
        </div>
    )
}

export default MyPlace;