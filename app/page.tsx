const heroHighlights = ['Provedores de Internet', 'Crescimento previsível', 'Estratégia + execução', 'Performance comercial'];

const pillars = [
  {
    title: 'Marketing Estratégico',
    items: ['Branding', 'Conteúdo', 'Tráfego', 'SEO', 'Campanhas'],
  },
  {
    title: 'Comercial',
    items: ['CRM', 'Scripts', 'Pipeline', 'Conversão', 'Processos'],
  },
  {
    title: 'Pessoas',
    items: ['RH', 'Treinamentos', 'Liderança', 'Cultura', 'Alta Performance'],
  },
  {
    title: 'Gestão',
    items: ['KPIs', 'Dashboards', 'Consultoria', 'Performance', 'Indicadores'],
  },
];

const plans = [
  {
    name: 'Growth Start',
    desc: 'Ideal para empresas que desejam estruturar posicionamento, comunicação e iniciar um processo consistente de crescimento.',
  },
  {
    name: 'Growth Performance',
    desc: 'Para operações que já possuem base comercial e querem acelerar geração de demanda, conversão e previsibilidade.',
  },
  {
    name: 'Growth 360°',
    desc: 'A solução completa da Clack, integrando estratégia, marketing, comercial, pessoas e indicadores para escalar com método.',
  },
];

export default function Page() {
  return (
    <main className="page">
      <section className="section hero">
        <div className="container hero-wrap">
          <div>
            <div className="logo">
              <div className="logo-mark"><span>G</span></div>
              <div>
                <div style={{ fontSize: 34, fontWeight: 900, letterSpacing: 2 }}>CLACK</div>
                <div style={{ color: '#d8cfff', letterSpacing: 5 }}>GROWTH COMPANY</div>
              </div>
            </div>
            <h1 className="title">Crescimento para provedores de internet e empresas que querem escalar com método.</h1>
            <p className="lead">A Clack conecta posicionamento, marketing, comercial, pessoas e indicadores para transformar operação em crescimento previsível.</p>
            <div className="btns">
              <a className="btn primary" href="#metodo">Conhecer o Método</a>
              <a className="btn secondary" href="#contato">Solicitar Diagnóstico Estratégico</a>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', marginTop: 28 }}>
              {heroHighlights.map((item) => (
                <div className="card" key={item} style={{ padding: '16px 18px' }}>{item}</div>
              ))}
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="particles" />
            <div className="ring" />
            <div className="ring" />
            <div className="ring" />
            <div className="pulse" />
            <div className="line l1" />
            <div className="line l2" />
            <div className="line l3" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">02. O NOVO CENÁRIO</span>
          <h2>O mercado mudou. Hoje não vence quem investe mais. Vence quem possui um sistema inteligente de crescimento.</h2>
          <p className="lead">Marketing, comercial, pessoas, dados e tecnologia precisam operar de forma conectada. É exatamente isso que a Clack constrói para provedores de internet e empresas em expansão.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">03. QUEM SOMOS</span>
          <h2>Somos uma Growth Company.</h2>
          <p className="lead">Não somos apenas uma agência. Não vendemos apenas tráfego. Não fazemos apenas redes sociais. Construímos sistemas de crescimento para negócios que querem escalar com inteligência.</p>
        </div>
      </section>

      <section className="section" id="metodo">
        <div className="container">
          <span className="eyebrow">04. O MÉTODO GROWTH 360°</span>
          <h2>Diagnóstico, posicionamento, atração, conversão, pessoas e indicadores em um único ciclo.</h2>
          <div className="card" style={{ marginTop: 28 }}>
            <p className="lead">No centro da operação está a visão integrada: compreender, planejar, executar e medir. O ciclo reinicia para sustentar evolução contínua.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">05. COMO O MÉTODO FUNCIONA</span>
          <div className="timeline" style={{ marginTop: 28 }}>
            {['Diagnóstico', 'Estratégia', 'Posicionamento', 'Marketing', 'Comercial', 'Performance', 'Escala'].map((item) => <div className="step" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid subgrid">
          {pillars.map((pillar) => (
            <div className="card pillar" key={pillar.title}>
              <h3 style={{ fontSize: 24, marginTop: 0 }}>{pillar.title}</h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, color: '#ddd0ff' }}>{pillar.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Planos de Crescimento</span>
          <h2>Escolha como acelerar sua empresa</h2>
          <div className="grid pricing" style={{ marginTop: 28 }}>
            {plans.map((plan) => (
              <div className="card" key={plan.name}>
                <h3 style={{ fontSize: 28, marginTop: 0 }}>{plan.name}</h3>
                <p className="lead" style={{ fontSize: 18 }}>{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">11. EXPERIÊNCIA</span>
            <div className="metric">11+</div>
            <p className="lead">anos de atuação em crescimento, posicionamento e performance, com foco em provedores de internet, varejo, saúde, educação e negócios regionais.</p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>A JORNADA</h3>
            <p className="lead">Seu negócio hoje → Diagnóstico → Planejamento → Execução → Monitoramento → Escala.</p>
          </div>
        </div>
      </section>

      <section className="section" id="contato">
        <div className="container card">
          <span className="eyebrow">13. MANIFESTO</span>
          <h2>Não fazemos marketing. Construímos crescimento.</h2>
          <p className="lead">Não entregamos campanhas. Criamos sistemas. Não vendemos serviços. Criamos vantagem competitiva. Não buscamos curtidas. Buscamos resultados. Esse é o propósito da Clack Growth Company.</p>
        </div>
      </section>

      <footer className="footer">Clack Growth Company · Especialistas em provedores de internet e crescimento empresarial</footer>
    </main>
  );
}