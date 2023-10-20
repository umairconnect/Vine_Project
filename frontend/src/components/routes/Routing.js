import React from "react";
import { Routes, Route } from 'react-router-dom'
import Signup from "../../pages/signup/Signup";
import Login from "../../pages/login/Login";
import HomePage from "../../pages/home/HomePage";
import Products from "../../pages/products/Products";
import PrivateRoute from "./PrivateRoute";
import GetStarted from "./../../pages/getStarted/GetStarted";
import Contact from "../../pages/contact/Contact";
import Faq from "../../pages/faq/Faq";
import About from "../../pages/about/About";
import CustomerSupport from "../../pages/customerSupport/CustomerSupport";

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route element={<PrivateRoute />}>
                <Route path="/buy" element={<h1> Update products </h1>}></Route>
                <Route path="/Products" element={<Products />}></Route>
                <Route path="/CustomerSupport" element={<CustomerSupport />}></Route>
            </Route>
            <Route path="/GetStarted" element={<GetStarted />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />}> </Route>
            <Route path="/login" element={<Login />}> </Route>
        </Routes>
    )
}
export default Routing;