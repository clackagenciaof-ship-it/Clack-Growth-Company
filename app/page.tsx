const sections = [
  {
    id: '01',
    title: 'HERO',
    body: 'Crescimento não acontece por acaso. Ele acontece por método.',
  },
  {
    id: '02',
    title: 'O NOVO CENÁRIO',
    body: 'O mercado mudou. Hoje não vence quem investe mais. Vence quem possui um sistema inteligente de crescimento.',
  },
  {
    id: '03',
    title: 'QUEM SOMOS',
    body: 'Somos uma Growth Company. Construímos sistemas de crescimento para empresas que desejam escalar de forma inteligente.',
  },
];

const pillars = [
  ['Marketing Estratégico', ['Branding', 'Conteúdo', 'Tráfego', 'SEO', 'Campanhas']],
  ['Comercial', ['CRM', 'Scripts', 'Pipeline', 'Conversão', 'Processos']],
  ['Pessoas', ['RH', 'Treinamentos', 'Liderança', 'Cultura', 'Alta Performance']],
  ['Gestão', ['KPIs', 'Dashboards', 'Consultoria', 'Performance', 'Indicadores']],
];

const plans = [
  ['Growth Start', 'R$ 1.599/mês', 'Estruturação de presença, posicionamento e rotina comercial.'],
  ['Growth Performance', 'R$ 2.999/mês', 'Geração de demanda, conversão e fortalecimento do time.'],
  ['Growth 360°', 'R$ 4.499/mês', 'Crescimento completo com método, diagnóstico e acompanhamento contínuo.'],
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
                <div style={{ color: '#b9a6f0', letterSpacing: 5 }}>GROWTH COMPANY</div>
              </div>
            </div>
            <h1 className="title">Crescimento não acontece por acaso.<br />Ele acontece por <span className="accent">método.</span></h1>
            <p className="lead">Conheça o Método Growth 360°, um sistema estratégico que conecta posicionamento, marketing, comercial, pessoas e indicadores para acelerar empresas de forma previsível.</p>
            <div className="btns"><a className="btn primary" href="#metodo">Conhecer o Método</a><a className="btn secondary" href="#diagnostico">Solicitar Diagnóstico Estratégico</a></div>
          </div>
          <div className="hero-art" aria-hidden="true"><div className="particles" /><div className="ring" /><div className="ring" /><div className="ring" /><div className="pulse" /><div className="line l1" /><div className="line l2" /><div className="line l3" /></div>
        </div>
      </section>

      {sections.map((s) => (
        <section className="section" key={s.id}>
          <div className="container">
            <span className="eyebrow">{s.id}. {s.title}</span>
            <h2>{s.body}</h2>
            <p className="lead">Marketing. Comercial. Pessoas. Dados. Tecnologia. Tudo conectado. É exatamente isso que construímos.</p>
          </div>
        </section>
      ))}

      <section className="section" id="metodo">
        <div className="container">
          <span className="eyebrow">04. O MÉTODO GROWTH 360°</span>
          <h2>Um ciclo que começa com diagnóstico e termina em escala.</h2>
          <div className="card" style={{ marginTop: 28 }}>
            <p className="lead">1. Diagnóstico Estratégico → 2. Posicionamento Inteligente → 3. Máquina de Atração → 4. Conversão Comercial → 5. Pessoas de Alta Performance → 6. Gestão por Indicadores.</p>
          </div>
        </div>
      </section>

      <section className="section" id="como-funciona">
        <div className="container">
          <span className="eyebrow">05. COMO O MÉTODO FUNCIONA</span>
          <h2>Diagnóstico → Estratégia → Posicionamento → Marketing → Comercial → Performance → Escala</h2>
          <div className="timeline" style={{ marginTop: 28 }}>
            {['Diagnóstico', 'Estratégia', 'Posicionamento', 'Marketing', 'Comercial', 'Performance', 'Escala'].map((item) => <div className="step" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid subgrid">
          {pillars.map(([title, items]) => (
            <div className="card pillar" key={title}>
              <h3 style={{ fontSize: 24, marginTop: 0 }}>{title}</h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, color: '#ddd0ff' }}>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">10. PLANO DE CRESCIMENTO</span>
          <div className="grid pricing" style={{ marginTop: 28 }}>
            {plans.map(([name, price, desc]) => (
              <div className="card" key={name}>
                <h3 style={{ fontSize: 28, marginTop: 0 }}>{name}</h3>
                <div className="price">{price}</div>
                <p className="lead" style={{ fontSize: 18 }}>{desc}</p>
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
            <p className="lead">anos de atuação em crescimento, posicionamento e performance, com atuação em internet providers, varejo, saúde, educação e negócios regionais.</p>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>A JORNADA</h3>
            <p className="lead">Seu negócio hoje → Diagnóstico → Planejamento → Execução → Monitoramento → Escala.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <span className="eyebrow">13. MANIFESTO</span>
          <h2>Não fazemos marketing. Construímos crescimento.</h2>
          <p className="lead">Não entregamos campanhas. Criamos sistemas. Não vendemos serviços. Criamos vantagem competitiva. Não buscamos curtidas. Buscamos resultados. Esse é o propósito da Clack Growth Company.</p>
        </div>
      </section>

      <footer className="footer">Clack Growth Company · Site institucional one-page</footer>
    </main>
  );
}