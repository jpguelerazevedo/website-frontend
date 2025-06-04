import React from 'react';
import '../pages/styles/servicos.css';
import Card from '../components/Card';
import CardCarousel from '../components/CardCarousel';
import pedestalImg from '../assets/pedestal.png';

const Servicos = () => {
  return (
    <div className="servicos-container" style={{ position: 'relative' }}>
      <div style={{ borderBlockStart: '1px solid #ccc', width: '50vw' }}></div>
      <h2>SERVIÇOS</h2>
      <div style={{ marginTop: '2rem', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
        <CardCarousel
          cards={[
            <Card title="Consultoria Especializada" key="1">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <p style={{ marginBottom: '2rem' }}>Orientação estratégica para sua empresa crescer com segurança, economia e conformidade fiscal.</p>
                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4rem' }}>
                  <ul >
                    <h4>Planejamento tributário</h4>
                    <h4>Análise financeira</h4>
                    <h4>Conformidade fiscal</h4>
                    <h4>Estratégias personalizadas</h4>
                    <h4>Redução de riscos</h4>
                    <h4>Diagnóstico contábil</h4>
                    <h4>...</h4>
                  </ul>
                </div>
              </div>
            </Card>,

            <Card title="Abertura e Legalização" key="2">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <p style={{ marginBottom: '2rem' }}>Formalizamos sua empresa com rapidez, segurança e total conformidade legal.</p>
                <div style={{ height: '100%', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ul>
                    <h4>Registro empresarial</h4>
                    <h4>Obtenção de CNPJ</h4>
                    <h4>Licenciamento</h4>
                    <h4>Contratos sociais</h4>
                    <h4>...</h4>
                  </ul>
                </div>
              </div>
            </Card>,

            <Card title="Departamento Pessoal" key="3">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <p style={{ marginBottom: '2rem' }}>Cuidamos da folha, admissões e encargos com agilidade e precisão.</p>
                <div style={{ height: '100%', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ul style={{ marginBottom: '1rem' }}>
                    <h4>Folha de pagamento</h4>
                    <h4>Admissões e rescisões</h4>
                    <h4>Férias e encargos</h4>
                    <h4>eSocial</h4>
                    <h4>13º salário</h4>
                  </ul>
                </div>
              </div>
            </Card>,

            <Card title="Gestão Fiscal" key="4">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <p style={{ marginBottom: '2rem' }}>Organização fiscal completa para manter sua empresa em dia com o Fisco.</p>
                <div style={{ height: '100%', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ul>
                    <h4>Emissão de guias</h4>
                    <h4>SPED Fiscal</h4>
                    <h4>DCTF e DEFIS</h4>
                    <h4>Retenções</h4>
                  </ul>
                </div>
              </div>
            </Card>,

            <Card title="Planejamento Tributário" key="5">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <p style={{ marginBottom: '2rem' }}>Economia legal por meio de análises e estratégias fiscais inteligentes.</p>
                <div style={{ height: '100%', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ul>
                    <h4>Simulação de regimes</h4>
                    <h4>Revisão de impostos</h4>
                    <h4>Redução de carga fiscal</h4>
                  </ul>
                </div>
              </div>
            </Card>,

            <Card title="Contabilidade Gerencial" key="6">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <p style={{ marginBottom: '2rem' }}>Dados contábeis transformados em decisões estratégicas para sua empresa.</p>
                <div style={{ height: '100%', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ul>
                    <h4>DRE e balanço</h4>
                    <h4>Balancetes</h4>
                    <h4>Indicadores</h4>
                    <h4>Gestão por resultados</h4>
                    <h4>...</h4>
                  </ul>
                </div>
              </div>
            </Card>,

            <Card title="Regularização Empresarial" key="7">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <p style={{ marginBottom: '2rem' }}>Colocamos sua empresa em dia com todos os órgãos e obrigações legais.</p>
                <div style={{ height: '100%', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ul>
                    <h4>Parcelamento de débitos</h4>
                    <h4>Reativações</h4>
                    <h4>Baixa de empresa</h4>
                  </ul>
                </div>
              </div>
            </Card>,

            <Card title="Atendimento Personalizado" key="8">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <p style={{ marginBottom: '2rem' }}>Suporte direto e humanizado para resolver o que sua empresa precisa.</p>
                <div style={{ height: '100%', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ul>
                    <h4>Contato direto com contador</h4>
                    <h4>Respostas rápidas</h4>
                    <h4>Consultoria sob demanda</h4>
                  </ul>
                </div>
              </div>
            </Card>,

            <Card title="BPO Financeiro" key="9">
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <p style={{ marginBottom: '2rem' }}>Cuidamos do financeiro da sua empresa com controle, clareza e eficiência.</p>
                <div style={{ height: '100%', marginBottom: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ul>
                    <h4>Contas a pagar e receber</h4>
                    <h4>Conciliação bancária</h4>
                    <h4>Fluxo de caixa</h4>
                    <h4>Emissão de boletos</h4>
                    <h4>Relatórios de gestão</h4>
                    <h4>...</h4>
                  </ul>
                </div>
              </div>
            </Card>,
          ]}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          width: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <img
          src={pedestalImg}
          alt="Pedestal"
          style={{
            width: '500px',
            maxWidth: '80vw',
            height: 'auto',
            minWidth: 'unset',
            margin: 0,
            borderRadius: 0,
            maxHeight: '40vh',
            objectFit: 'contain',
            boxShadow: 'none',
            pointerEvents: 'none',
            userSelect: 'none',
            opacity: 0,
            animation: 'fadeInText 0.9s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            animationDelay: '0.1s',
          }}
        />
      </div>
    </div>
  );
};

export default Servicos;