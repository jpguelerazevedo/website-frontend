import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <header className="header">
            <a href="/" className='logo'>logo</a>

            <nav className='navbar'>
                <a href="../pages/home.jsx">Início</a>
                <a href="/">Sobre</a>
                <a href="/">Serviços</a>
                <a href="/">Contato</a>
            </nav>
        </header>
    )
}
export default Navbar;
