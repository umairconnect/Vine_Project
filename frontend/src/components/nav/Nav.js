import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user')

    const logout = () => {
        localStorage.clear();
    }

    return (
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/add">Add Product</Link></li>
            {auth ?
                <li>
                    <Link onClick={() => logout()} to="/">Logout</Link>
                </li>
                : <>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>

                </>
            }



        </ul >
    )
}
export default Nav;