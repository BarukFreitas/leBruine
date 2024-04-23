import React from "react";
import ReactDOM from "react-dom/client";
import login from './assets/login-ico.svg';
import '../login.css';
import leBruineLogo from  './assets/le-bruine-logo.svg';

ReactDOM.createRoot(document.getElementById("login")).render(
    <header className="">
        <img src={leBruineLogo} alt="" />
        <img src={login} alt="" />
    </header>
)