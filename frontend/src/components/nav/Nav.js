import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            <li><Link to="/signup">Sign up</Link></li>

        </ul>
    )
}
export default Nav;