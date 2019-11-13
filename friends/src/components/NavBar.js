import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    
    return (
        <nav>
            <Link to='/login'>Log In</Link>
            <Link to='/friendsList'>Friends</Link>
        </nav>
    )
}

export default NavBar