import React from "react";
import ReactDOM from "react-dom/client";


ReactDOM.createRoot(document.getElementById('restaurantes')).render(
    <div>
        <div className="info" id="katon">
            <div className="sub-info">
                <h2 className="r_titulo">Restaurante Katon Haisekisho</h2>
                <h4 className="rua">Rua Napoleão Bonaparte, 32, Boa Vista - Garanhuns-PE</h4>
            </div>
        </div>
        <div className="n_fone">
            <span className="fone">(87)99909-0001</span>
        </div>
        <div className="btn-reserva">
            <button className="reserva">Fazer Reserva</button>
        </div>
    </div>
)