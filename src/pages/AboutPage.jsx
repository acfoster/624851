import PageHero from "../components/PageHero";

function AboutPage() {
  return (
    <>
      <PageHero
        title="A small software company in Moncton, NB."
        intro="624851 NB Inc. builds software products and takes on selected client work. One developer, hands-on execution."
      />

      <section className="section">
        <div className="container text-grid">
          <article className="content-card">
            <p className="section-label">Who we are</p>
            <h2>One developer. Direct work, no agency overhead.</h2>
            <p>
              624851 NB Inc. is operated by Andrew Foster out of Moncton, New
              Brunswick. Product development, client projects, and technical
              delivery are all handled directly — no contractors, no outsourcing.
            </p>
            <p>
              That makes us a good fit for projects that benefit from a
              smaller, focused process rather than a large team with layers of
              coordination.
            </p>
          </article>

          <article className="content-card">
            <p className="section-label">What we build</p>
            <h2>Rails apps, native iOS apps, and web tools.</h2>
            <p>
              Most work is built on Ruby on Rails. We also do native iOS
              development — GloveBoxGPS is a Swift and SwiftUI iPhone app
              targeting the Apple App Store. Client work ranges from internal
              dashboards to small public-facing sites.
            </p>
            <p>
              Current products include GloveBoxGPS, GetSteady.today, GoChorez,
              TradeCheckr, and Local Flow.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container text-grid">
          <article className="content-card">
            <p className="section-label">How we work</p>
            <h2>Clear scope, direct delivery.</h2>
            <p>
              We take on projects where a smaller, hands-on approach makes
              sense. No large retainers or agency process — scoped work
              delivered cleanly.
            </p>
            <p>
              We favour stacks we can maintain, interfaces that don't need
              explaining, and software that works correctly in production from
              day one.
            </p>
          </article>
          <article className="content-card">
            <p className="section-label">Apple platform development</p>
            <h2>Building for iOS alongside the web.</h2>
            <p>
              GloveBoxGPS is actively developed as a native iOS application
              using Swift and SwiftUI, with a Ruby on Rails backend and a web
              dashboard. It is being prepared for distribution via the Apple
              App Store under the 624851 NB Inc. developer account.
            </p>
            <p>
              The company is applying for an Apple Developer Program
              organization account to support this and future iOS work.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container values-grid">
          <article className="value-card">
            <h3>Small scope</h3>
            <p>Focused projects with clear outcomes. No unnecessary features.</p>
          </article>
          <article className="value-card">
            <h3>Ships and runs</h3>
            <p>Software that works in production and stays maintainable.</p>
          </article>
          <article className="value-card">
            <h3>Automation where useful</h3>
            <p>Scripts and AI tools that cut real work, not just demos.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
