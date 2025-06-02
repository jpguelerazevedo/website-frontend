
import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/home.css';

function Home() {
  return (
    <div className=" home-container" >
      <h1>CONTAC</h1>
      <h2>ACESSORIA CONTÁBIL</h2>
      <button >
        <Link to="/sobre">
          Saiba mais
        </Link>
      </button>
    </div>
  )
}

export default Home;
