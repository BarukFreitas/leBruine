import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./header";
import MyPlace from "./myPlace";
import Carousel from "./carousel";
import Restaurantes from "./restaurantes";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from "react-router-dom";

import Erro404 from "./Erro404";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    },
    {
        path: '/contact',
        element: <Contact />,
        children: [
            {
                path: '/contact',
                element: <Home />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('index')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)