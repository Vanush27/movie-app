import React from 'react';
import { Route, Routes  } from 'react-router-dom';

import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Home from "../pages/Home";


const Rout = () => {
    return (

        <Routes>

            <Route
                path='/:category/search/:keyword'
                element={<Catalog/>}
            />
            <Route
                path='/:category/:id'
                element={<Detail/>}
            />
            <Route
                path='/:category'
                element={<Catalog/>}
            />
            <Route
                path='/'
                component={<Home/>}
            />
        </Routes>

    );
};

export default Rout;