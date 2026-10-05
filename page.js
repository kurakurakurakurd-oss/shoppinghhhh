import Link from 'next/link';

const services = [
  ['Business Systems','CRM, inventory, POS and workflow systems shaped around the way your business works.','SYS'],
  ['Web Applications','Fast, responsive portals, dashboards and customer-facing web applications.','WEB'],
  ['Mobile Experience','App-like experiences that feel natural on iPhone, Android and desktop.','APP'],
  ['UI / UX Design','Clean interfaces, prototypes and design systems focused on real business use.','UX'],
  ['ERP Solutions','Connected operations, reporting, automations and custom modules for growth.','ERP'],
  ['Support & Growth','Ongoing improvements, maintenance, analytics and feature development.','24/7'],
];

export default function Home() {
  return (
    <main className="site">
      <nav className="site-nav shell">
        <Link href="/" className="brand">
          <img src="/pedros-logo.svg" alt="Pedros Systems" />
          <span><b>PEDROS</b><small>SYSTEMS</small></span>
        </Link>
        <div className="site-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#contact">Contact</a></div>
        <Link href="/login" className="btn secondary">Client Login</Link>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="kicker"><i/> PEDROS SYSTEMS</div>
          <h1>Digital systems that<br/><em>move business forward.</em></h1>
          <p>We build polished websites, business dashboards and app experiences that make daily work faster, clearer and easier to manage.</p>
          <div className="hero-actions"><Link href="/login" className="btn primary">Open Demo App</Link><a href="#services" className="btn secondary">Explore Services</a></div>
          <div className="metrics"><div><b>24/7</b><span>Support ready</span></div><div><b>100%</b><span>Responsive</span></div><div><b>Fast</b><span>Modern stack</span></div></div>
        </div>
        <div className="hero-stage">
          <div className="orb"/>
          <div className="device">
            <div className="device-top"><span>9:41</span><i/><b>●●●</b></div>
            <div className="device-logo"><img src="/pedros-logo.svg" alt=""/><span>PEDROS<small>SYSTEMS</small></span></div>
            <p className="hello">Good morning</p><h3>Your business at a glance.</h3>
            <div className="mini-cards"><div><span>Active projects</span><b>08</b></div><div><span>Open tasks</span><b>14</b></div></div>
            <div className="chart"><div><span>Performance</span><b>+18.4%</b></div><section>{[42,68,51,76,63,88,72,96].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</section></div>
            <div className="phone-nav"><b>⌂</b><span>▦</span><span>＋</span><span>◉</span></div>
          </div>
        </div>
      </section>

      <section id="services" className="section shell">
        <div className="section-head"><div><div className="kicker"><i/> WHAT WE BUILD</div><h2>Professional systems for real work.</h2></div><p>From the first idea to launch and support, every screen is designed to feel simple, fast and trustworthy.</p></div>
        <div className="service-grid">{services.map(([title,desc,tag])=><article className="service-card" key={title}><span className="tag">{tag}</span><h3>{title}</h3><p>{desc}</p><b>↗</b></article>)}</div>
      </section>

      <section id="work" className="section shell">
        <div className="section-head"><div><div className="kicker"><i/> DEMO WORK</div><h2>One design language. Every device.</h2></div></div>
        <div className="work-grid">
          {['Retail Control','Service Hub','Executive View'].map((name,i)=><article className="work-card" key={name}><div className={`mock mock-${i+1}`}><div className="mock-window"><div className="dots">● ● ●</div><div className="mock-body"><aside/><main><b/><b/><b/><section/></main></div></div></div><div className="work-meta"><span>{['POS + Inventory','CRM + Tickets','Analytics Dashboard'][i]}</span><h3>{name}</h3></div></article>)}
        </div>
      </section>

      <section id="contact" className="cta shell"><div><div className="kicker"><i/> READY TO START?</div><h2>Your next system can start here.</h2><p>Open the app demo to explore projects, tasks, clients, invoices, files, support and settings.</p></div><Link href="/login" className="btn primary">Try Pedros Workspace</Link></section>
      <footer className="footer shell"><div className="brand"><img src="/pedros-logo.svg" alt=""/><span><b>PEDROS</b><small>SYSTEMS</small></span></div><p>© 2026 Pedros Systems. Demo workspace.</p></footer>
    </main>
  );
}
