import React from 'react';
import '../pages/styles/servicos.css';
import Card from '../components/Card';
import CardCarousel from '../components/CardCarousel';
import pedestalImg from '../assets/pedestal.png';

function ServicoCardContent({ description, items }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <p style={{ marginBottom: '2rem' }}>{description}</p>
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4rem' }}>
        <ul>
          {items.map((item, idx) => (
            <h4 key={idx}>{item}</h4>
          ))}
        </ul>
      </div>
    </div>
  );
}

const cardsData = [
  {
    title: "Consultoria Especializada",
    description: "Orientação estratégica para sua empresa crescer com segurança, economia e conformidade fiscal.",
    items: [
      "Planejamento tributário",
      "Análise financeira",
      "Conformidade fiscal",
      "Estratégias personalizadas",
      "Redução de riscos",
      "Diagnóstico contábil",
      "..."
    ]
  },
  {
    title: "Abertura e Legalização",
    description: "Formalizamos sua empresa com rapidez, segurança e total conformidade legal.",
    items: [
      "Registro empresarial",
      "Obtenção de CNPJ",
      "Licenciamento",
      "Contratos sociais",
      "..."
    ]
  },
  {
    title: "Departamento Pessoal",
    description: "Cuidamos da folha, admissões e encargos com agilidade e precisão.",
    items: [
      "Folha de pagamento",
      "Admissões e rescisões",
      "Férias e encargos",
      "eSocial",
      "13º salário"
    ]
  },
  {
    title: "Gestão Fiscal",
    description: "Organização fiscal completa para manter sua empresa em dia com o Fisco.",
    items: [
      "Emissão de guias",
      "SPED Fiscal",
      "DCTF e DEFIS",
      "Retenções"
    ]
  },
  {
    title: "Planejamento Tributário",
    description: "Economia legal por meio de análises e estratégias fiscais inteligentes.",
    items: [
      "Simulação de regimes",
      "Revisão de impostos",
      "Redução de carga fiscal"
    ]
  },
  {
    title: "Contabilidade Gerencial",
    description: "Dados contábeis transformados em decisões estratégicas para sua empresa.",
    items: [
      "DRE e balanço",
      "Balancetes",
      "Indicadores",
      "Gestão por resultados",
      "..."
    ]
  },
  {
    title: "Regularização Empresarial",
    description: "Colocamos sua empresa em dia com todos os órgãos e obrigações legais.",
    items: [
      "Parcelamento de débitos",
      "Reativações",
      "Baixa de empresa"
    ]
  },
  {
    title: "Atendimento Personalizado",
    description: "Suporte direto e humanizado para resolver o que sua empresa precisa.",
    items: [
      "Contato direto com contador",
      "Respostas rápidas",
      "Consultoria sob demanda"
    ]
  },
  {
    title: "BPO Financeiro",
    description: "Cuidamos do financeiro da sua empresa com controle, clareza e eficiência.",
    items: [
      "Contas a pagar e receber",
      "Conciliação bancária",
      "Fluxo de caixa",
      "Emissão de boletos",
      "Relatórios de gestão",
      "..."
    ]
  }
];

function PedestalImage() {
  return (
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
  );
}

function Servicos() {
  return (
    <div className="servicos-container" style={{ position: 'relative' }}>
      <div style={{ borderBlockStart: '1px solid #ccc', width: '50vw' }}></div>
      <h2>SERVIÇOS</h2>
      <div style={{ marginTop: '2rem', maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
        <CardCarousel
          cards={cardsData.map((card, idx) => (
            <Card title={card.title} key={idx}>
              <ServicoCardContent description={card.description} items={card.items} />
            </Card>
          ))}
        />
      </div>
      <PedestalImage />
    </div>
  );
}

export default Servicos;