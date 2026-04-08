import PageHero from "../components/PageHero";

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the company"
        title="624851 NB Inc. is an independent Canadian software company."
        intro="The company is based in Moncton, New Brunswick and focuses on building practical web applications, internal tools, lightweight digital products, and AI-assisted workflows."
      />

      <section className="section">
        <div className="container text-grid">
          <article className="content-card">
            <p className="section-label">Who we are</p>
            <h2>A small development shop built around focused software work.</h2>
            <p>
              624851 NB Inc. develops software with a pragmatic approach:
              smaller scope, clearer outcomes, and technology choices that fit
              the job. The company works on both internal products and selected
              client projects.
            </p>
            <p>
              The business is intentionally small and hands-on. That makes it a
              good fit for product ideas, internal tools, business process
              software, and projects that benefit from direct technical work
              rather than a large agency process.
            </p>
          </article>

          <article className="content-card">
            <p className="section-label">Principal</p>
            <h2>Andrew Foster leads the company’s product and development work.</h2>
            <p>
              624851 NB Inc. is operated from Moncton, New Brunswick by Andrew
              Foster, who handles product development, software delivery, and
              day-to-day technical execution across the company’s products and
              client work.
            </p>
            <p>
              The company is structured as an independent Canadian software
              business with a focus on practical implementation rather than
              large-team process or outsourced production.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container text-grid">
          <article className="content-card">
            <p className="section-label">What we build</p>
            <h2>Rails applications, native iOS apps, and AI-enhanced tools.</h2>
            <p>
              The company’s work is centered on Ruby on Rails development,
              native iOS application development, modern web applications, small
              business tools, workflow automations, and practical software
              products that are designed to be useful from the start.
            </p>
            <p>
              Current work includes GloveBoxGPS — a native iOS application
              built with Swift and SwiftUI for distribution via the Apple App
              Store — as well as GetSteady.today, GoChorez, TradeCheckr, Local
              Flow, client websites, internal utilities, and AI-assisted systems
              that help reduce repetitive work and improve day-to-day
              operations.
            </p>
          </article>
          <article className="content-card">
            <p className="section-label">Working style</p>
            <h2>Independent product development with selective client work.</h2>
            <p>
              624851 NB Inc. develops its own software products while also
              taking on selected client projects where a smaller, direct build
              process is a good fit.
            </p>
            <p>
              The company’s approach favors clear scope, maintainable systems,
              and software that is credible in operation rather than padded with
              unnecessary complexity.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container values-grid">
          <article className="value-card">
            <h3>Practical scope</h3>
            <p>
              Focused projects with clear use cases, maintainable code, and
              straightforward delivery.
            </p>
          </article>
          <article className="value-card">
            <h3>Useful software</h3>
            <p>
              Internal tools, client tools, and digital products built to solve
              real operational problems.
            </p>
          </article>
          <article className="value-card">
            <h3>Modern workflow</h3>
            <p>
              AI-assisted implementation and automation where it improves speed,
              accuracy, or operational efficiency.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
