import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/home.css';

function HomeTitle() {
  return <h1>CONTAC</h1>;
}

function HomeSubtitle() {
  return <h2>ACESSORIA CONTÁBIL</h2>;
}

function HomeButton() {
  return (
    <button style={{ marginTop: '1rem' }}>
      <Link to="/sobre">
        Saiba mais
      </Link>
    </button>
  );
}

function HomeDescription() {
  return (
    <p style={{ marginTop: '7rem', marginLeft: '40px' }}>
      Desde 2005, a Contac transforma desafios <br />em prosperidade.
    </p>
  );
}

function Home() {
  return (
    <div className="home-container">
      <HomeTitle />
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-100px', marginLeft: '40px' }}>
        <HomeSubtitle />
        <HomeButton />
      </div>
      <HomeDescription />
    </div>
  );
}

export default Home;
