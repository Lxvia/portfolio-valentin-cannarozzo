import React from 'react'
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-links">
                <Link to="/">Parcours</Link>
                <Link to="/">Galerie</Link>
                <Link to="/">Liennnn</Link>
            </div>
            <h1 className="navbar-title">Valentin C.</h1>
            <div className="navbar-icons">
                <FaInstagram size={24} />
                <FaEnvelope size={24} />
            </div>
        </div>
    )
}

export default Navbar
