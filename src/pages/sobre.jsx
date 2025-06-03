import React from 'react';
import '../pages/styles/sobre.css';

const Sobre = () => {
  return (
    <div className="sobre-container">
      <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <h2>SOBRE.</h2>
        <h3 style={{ marginTop: '6rem' }}>Da Contabilidade ao Crescimento Estratégico</h3>
        <p style={{ marginLeft: '10px' }}>
          Na Contac, transformamos a contabilidade em um motor de crescimento.
          Usamos dados precisos para oferecer insights valiosos,
          ajudando sua empresa a tomar decisões assertivas e planejar um futuro próspero com total confiança.

        </p>
        <h3 style={{ marginTop: '7rem' }}>Sua Tranquilidade Fiscal</h3>
        <p style={{ marginLeft: '10px' }}>
          O cenário fiscal é complexo, mas com a Contac, sua empresa tem um guia confiável.
          Garantimos 100% de conformidade com as obrigações
          fiscais e tributárias, minimizando riscos. Tenha a tranquilidade de focar no seu negócio.

        </p>
      </div>


      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src="src/assets/cacedeu.png" alt="cacedeu" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
      </div>
      <div style={{ flex: 1, textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
        <h3 style={{ marginTop: '17rem' }}>Mais Produtividade com Eficiência</h3>
        <p style={{ marginRight: '10px' }}>
          Contabilidade deve ser ágil. Na Contac, otimizamos cada processo com tecnologia e expertise.
          Simplificamos sua rotina, liberando tempo para que você e sua equipe foquem no core business e
          impulsionem a produtividade.

        </p>
      </div>
    </div>
  );
};

export default Sobre;
