import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <header className="header">
            <Link to="/" className='logo' style={{ display: 'flex', alignItems: 'center' }}>
                <img src="src/assets/contaclogo.png" alt="" style={{ width: '40px', padding: '0' }} />
                <span style={{ marginLeft: '-4px', marginTop: '4px' }}>ontac</span>
            </Link>

            <nav className='navbar'>
                <Link to="/">Início</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/servicos">Serviços</Link>
                <Link to="/contato">Contato</Link>
            </nav>
        </header>
    )
}
export default Navbar;
