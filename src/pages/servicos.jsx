import React from 'react';
import '../pages/styles/servicos.css';
import Card from '../components/Card';
import CardCarousel from '../components/CardCarousel';

const Servicos = () => {
  return (
    <div className=" servicos-container">
      <div style={{ borderBlockStart: '1px solid #ccc', width: '50vw' }}></div>
      <h2>SERVIÇOS</h2>
      <div style={{ marginTop: '2rem', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
        <CardCarousel
          cards={[
            <Card title="Consultoria Especializada" key="1">
              <ul>
                <li>Planejamento Tributário</li>
                <li>Gestão Financeira</li>
                <li>Orientação Empresarial</li>
              </ul>
            </Card>,
            <Card title="Desenvolvimento de Projetos" key="2">
              <ul>
                <li>Implantação de Sistemas</li>
                <li>Automação de Processos</li>
                <li>Projetos Personalizados</li>
              </ul>
            </Card>,
            <Card title="Gestão Contábil" key="3">
              <ul>
                <li>Escrituração Fiscal</li>
                <li>Relatórios Gerenciais</li>
                <li>Regularização de Empresas</li>
              </ul>
            </Card>,
            <Card title="Gestão Contábil" key="4">
              <ul>
                <li>Escrituração Fiscal</li>
                <li>Relatórios Gerenciais</li>
                <li>Regularização de Empresas</li>
              </ul>
            </Card>,
            <Card title="Gestão Contábil" key="5">
              <ul>
                <li>Escrituração Fiscal</li>
                <li>Relatórios Gerenciais</li>
                <li>Regularização de Empresas</li>
              </ul>
            </Card>,
            <Card title="Gestão Contábil" key="6">
              <ul>
                <li>Escrituração Fiscal</li>
                <li>Relatórios Gerenciais</li>
                <li>Regularização de Empresas</li>
              </ul>
            </Card>,
            <Card title="Gestão Contábil" key="7">
              <ul>
                <li>Escrituração Fiscal</li>
                <li>Relatórios Gerenciais</li>
                <li>Regularização de Empresas</li>
              </ul>
            </Card>,
            <Card title="Gestão Contábil" key="8">
              <ul>
                <li>Escrituração Fiscal</li>
                <li>Relatórios Gerenciais</li>
                <li>Regularização de Empresas</li>
              </ul>
            </Card>,
            <Card title="Gestão Contábil" key="9">
              <ul>
                <li>Escrituração Fiscal</li>
                <li>Relatórios Gerenciais</li>
                <li>Regularização de Empresas</li>
              </ul>
            </Card>,
          ]}
        />
      </div>
    </div>
  );
};

export default Servicos;