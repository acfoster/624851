function PageHero({ eyebrow, title, intro, actions }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="intro">{intro}</p>
        {actions ? <div className="hero-actions">{actions}</div> : null}
        <div className="hero-scroll-indicator" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
