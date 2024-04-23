import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/le-Bruine-logo.png'
import lupa from './assets/lupa.svg';
import loginIcon from './assets/login-ico.svg'
import '../src/header.css'

ReactDOM.createRoot(document.getElementById('header')).render(
    <div className='raiz'>
        <a href="#"><div className='logo'><img src={logo} alt="logo" /></div></a>
        <div className='search_area'><input type="text" placeholder='Busque por restaurante, comida, cidade...' className='search_bar' id='searchBar'/><button className='button_search'><img src={lupa} alt="lupa" /></button></div>
        <div className='options'>
            <a href="#"><div className='menu'>Fazer Reserva</div></a>
            <a href="#"><div className='menu'>Minhas Reservas</div></a>
            <a href="#"><div className='menu'>Restaurantes</div></a>
        </div>
        <a href='login.html'><div className='login'>
            <img src={loginIcon} alt="icone de login" />
            <p className='font_login'>Login</p>
            </div></a>
    </div>
)
