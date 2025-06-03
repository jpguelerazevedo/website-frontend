
import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/home.css';

function Home() {
  return (
    <div className=" home-container" >
      <h1>CONTAC</h1>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-100px', marginLeft: '40px' }}>
        <h2 style={{}}>ACESSORIA CONTÁBIL</h2>
        <button style={{ marginTop: '1rem' }}>
          <Link to="/sobre">
            Saiba mais
          </Link>
        </button>
      </div>
      <p style={{ marginTop: '7rem', marginLeft: '40px' }}>Desde 2005, a Contac transforma desafios <br />em prosperidade.</p>

    </div>
  )
}

export default Home;
