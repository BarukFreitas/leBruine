import React from "react";
import ReactDOM from "react-dom/client";
import "./footer.css";

import logoInstagram from './assets/instagram-ico.svg';
import logoFacebook from './assets/facebook-ico.svg';

ReactDOM.createRoot(document.getElementById('footer')).render(
    <div className="rodape">
        <p className="footer">Acompanhe as redes sociais do Le Bruine: <img src={logoInstagram} alt="logo instagram" className="rede-social"/><img src={logoFacebook} alt="logo facebook" className="rede-social"/></p>
        <p className="footer">Rua Francisco Carraca de Freitas, 270, Boa Vista, Garanhuns-PE</p>
        <p className="footer">Le Bruine © 2024 - Todos os direitos reservados / Desenvolvido por: F.A Soluções Tecnológicas - Yuri Baruk Freitas | Thiago Anízio Miranda</p>
    </div>
)