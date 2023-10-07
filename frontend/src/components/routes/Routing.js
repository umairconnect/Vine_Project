import React from "react";
import { Routes, Route } from 'react-router-dom'
import Signup from "../../pages/signup/Signup";
import Login from "../../pages/login/Login";
import HomePage from "../../pages/home/HomePage";

function Routing () {
    return (
        <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/add" element={<h1> Update products </h1>}></Route>
            <Route path="/signup" element={<Signup />}> </Route>
            <Route path="/login" element={<Login />}> </Route>
        </Routes>
    )
} 
export default Routing;