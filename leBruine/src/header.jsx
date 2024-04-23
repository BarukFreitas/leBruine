import React from 'react';
import logo from './assets/le-Bruine-logo.png'
import lupa from './assets/lupa.svg';
import loginIcon from './assets/login-ico.svg'
import './css/header.css'
import { Link } from 'react-router-dom';


function Header(){
    return(
        <div className='raiz'>
            <Link to='/
            '><div className='logo'><img src={logo} alt="logo" /></div></Link>
          <div className='search_area'><input type="text" placeholder='Busque por restaurante, comida, cidade...' className='search_bar' id='searchBar'/><button className='button_search'><img src={lupa} alt="lupa" /></button></div>
          <div className='options'>
              <a href="#"><div className='menu'>Fazer Reserva</div></a>
              <a href="#"><div className='menu'>Minhas Reservas</div></a>
              <a href="#"><div className='menu'>Restaurantes</div></a>
           </div>
           <Link to='/Contact'><div className='login'>
                <img src={loginIcon} alt="icone de login" />
                <p className='font_login'>Login</p>
                </div></Link>
        </div>
    )
}

export default Header;