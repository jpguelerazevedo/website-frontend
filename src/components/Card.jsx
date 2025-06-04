import React from 'react';
import './card.css';

const Card = ({ title, children }) => {
    return (
        <div className="card">
            {title && <h3>{title}</h3>}
            {children}
        </div>
    );
};

export default Card;
