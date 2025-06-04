import React from 'react';
import './card.css';

const Card = ({ title, children }) => {
    return (
        <div className="card" style={{ textAlign: 'center' }}>
            {title && <h3 style={{ marginTop: '1rem', marginBottom: '1rem' }}>{title}</h3>}
            {children}
        </div>
    );
};

export default Card;
