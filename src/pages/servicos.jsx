import React from 'react';
import '../pages/styles/servicos.css';
import Card from '../components/Card';

const Servicos = () => {
  return (
    <div className="servicos-container">
      <h2 style={{ borderBlockStart: '1px solid #ccc', width: '50vw' }}>SERVIÇOS</h2>
      <div className="servicos-cards-wrapper" style={{ marginTop: '4rem' }}>
        <Card title="Consultoria Especializada">
          <ul>
            <li>Planejamento Tributário</li>
            <li>Gestão Financeira</li>
            <li>Orientação Empresarial</li>
          </ul>
        </Card>
        <Card title="Desenvolvimento de Projetos">
          <ul>
            <li>Implantação de Sistemas</li>
            <li>Automação de Processos</li>
            <li>Projetos Personalizados</li>
          </ul>
        </Card>
        <Card title="Gestão Contábil">
          <ul>
            <li>Escrituração Fiscal</li>
            <li>Relatórios Gerenciais</li>
            <li>Regularização de Empresas</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Servicos;