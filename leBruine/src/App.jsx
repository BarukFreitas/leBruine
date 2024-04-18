import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./header";
import MyPlace from "./myPlace";
import Carousel from "./carousel";
import Restaurantes from "./restaurantes";
import Footer from "./footer";
// import './css/index.css';

ReactDOM.createRoot(document.getElementById('index')).render(
    <React.StrictMode>
        <Header />
        <MyPlace />
        <Carousel />
        <Restaurantes />
        <Footer />
    </React.StrictMode>
)