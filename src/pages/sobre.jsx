import React from 'react';
import '../pages/styles/sobre.css';
import sexoImg from '../assets/sexo.png';

const Sobre = () => {
  return (
    <div className="sobre-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
      <div style={{
        flex: 1,
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxWidth: '50vw',
        minWidth: '320px',
        borderBlockStart: '1px solid #ccc',
      }}>
        <h2>SOBRE.</h2>
        <div className='hover-div' style={{ marginRight: '20%' }}>
          <h3 style={{ marginTop: '4rem' }}>Da Contabilidade ao Crescimento Estratégico</h3>
          <p style={{ marginLeft: '10px', textAlign: 'justify' }}>
            Na Contac, transformamos a contabilidade em um motor de crescimento.
            Usamos dados precisos para oferecer insights valiosos,
            ajudando sua empresa a tomar decisões assertivas e planejar um futuro próspero com total confiança.

          </p>
        </div>

        <div style={{ marginLeft: '8%', marginRight: '10%' }}>
          <h3 style={{ marginTop: '5rem' }}>Sua Tranquilidade Fiscal</h3>
          <p style={{ textAlign: 'justify', marginLeft: '10px' }}>
            O cenário fiscal é complexo, mas com a Contac, sua empresa tem um guia confiável.
            Garantimos 100% de conformidade com as obrigações fiscais e tributárias, minimizando riscos. Tenha a tranquilidade de focar no seu negócio.
          </p>
        </div>

        <div style={{ marginLeft: '18%' }}>
          <h3 style={{ marginTop: '5rem' }}>Mais Produtividade com Eficiência</h3>
          <p style={{ marginLeft: '10px', textAlign: 'justify' }}>
            Contabilidade deve ser ágil. Na Contac, otimizamos cada processo com tecnologia e expertise.
            Simplificamos sua rotina, liberando tempo para que você e sua equipe foquem no core business e
            impulsionem a produtividade.

          </p>
        </div>
      </div>
      <div style={{
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'flex-start',
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100vh',
        zIndex: 1
      }}>
        <img
          src={sexoImg}
          alt="Sobre"
          style={{
            height: '100vh',
            width: 'auto',
            minWidth: 'unset',
            marginRight: '4rem',
            marginTop: '5rem',
            marginLeft: 0,
            borderRadius: 0,
            maxHeight: '100vh',
            objectFit: 'contain',
            boxShadow: 'none',
            pointerEvents: 'none',
            userSelect: 'none',
            animation: 'fadeInRightToLeftServico 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            animationDelay: '0.4s',
            opacity: 0,
          }}
        />
      </div>
    </div>
  );
};

export default Sobre;
