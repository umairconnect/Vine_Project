import React from "react";
import { Routes, Route } from 'react-router-dom'
import Signup from "../../pages/signup/Signup";
function Routing () {
    return (
        <Routes>
            <Route path="/home" element={<h1> Home Page </h1>}></Route>
            <Route path="/add" element={<h1> Update products </h1>}></Route>
            <Route path="/signup" element={<Signup />}> </Route>
        </Routes>
    )
} 
export default Routing;