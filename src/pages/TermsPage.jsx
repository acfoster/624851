import PageHero from "../components/PageHero";

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms for the 624851 NB Inc. website."
        intro="This website is provided as a public business presence for 624851 NB Inc. and for general information about the company’s software work and contact details."
      />

      <section className="section">
        <div className="container legal-stack">
          <article className="content-card">
            <h2>Business information</h2>
            <p>
              Content on this website is provided for general informational
              purposes. Project descriptions, product references, and service
              summaries are intended to describe current business activity and
              areas of work, but they do not create a contractual commitment.
            </p>
          </article>

          <article className="content-card">
            <h2>Acceptable use</h2>
            <p>
              You may view and use this website for legitimate business and
              informational purposes. You may not use the site in a way that
              interferes with its operation or attempts to misuse company
              contact details or website resources.
            </p>
          </article>

          <article className="content-card">
            <h2>Contact and services</h2>
            <p>
              Contacting 624851 NB Inc. through this site does not create a
              client relationship by itself. Any project work, service
              engagement, or software delivery arrangement is subject to
              separate written agreement.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default TermsPage;
