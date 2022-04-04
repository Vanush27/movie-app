import React from "react";

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import {BrowserRouter} from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Rout from "./config/Rout";
import Home from "./pages/Home";
import HeroSlide from "./components/hero-slide/HeroSlide";
import 'swiper/scss'

// import Footer from "./components/footer/Footer";


function App(props) {
    return (
        <BrowserRouter>

            <Header {...props}/>
            <Home />
            <Rout {...props}/>
            <Footer/>

        </BrowserRouter>
    );
}

export default App;
