import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/contato.css';
import 'font-awesome/css/font-awesome.min.css';

function ContatoForm() {
    return (
        <div className="contato-form-wrapper">
            <form className="contato-form">
                <h3>Entre em contato e<br />venha fazer parte da familia Contac.</h3>
                <div className="contato-form-row" style={{
                    animation: 'fadeInText 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                    animationDelay: '0.3s',
                    opacity: 0
                }}>

                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="contato-input"
                    />
                    <input
                        type="tel"
                        name="telefone"
                        placeholder="Telefone"
                        className="contato-input"
                    />
                </div>
                <textarea
                    style={{
                        animation: 'fadeInText 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                        animationDelay: '0.3s',
                        opacity: 0
                    }}
                    name="descricao"
                    rows={4}
                    required
                    placeholder="Descrição"
                    className="contato-textarea"
                />
                <button type="submit" className="contato-btn">
                    Enviar
                </button>
            </form>
        </div>
    );
}

function ContatoSocial() {
    return (
        <ul className="contato-ul" style={{ animation: 'fadeInRightToLeft 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards', animationDelay: '0.4s' }}>
            <li>
                <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                    <span> - Facebook</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <span> - Twitter</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                    <span> - Google</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <span> - Instagram</span>
                </a>
            </li>
        </ul>
    );
}

function Contato() {
    return (
        <div className='contato-container'>

            <div style={{ borderBlockStart: '1px solid #ccc', width: '50vw' }}></div>
            <h2>CONTATO</h2>
            <ContatoForm />
            <div>
                <ContatoSocial />
            </div>
        </div>
    )
}

export default Contato;