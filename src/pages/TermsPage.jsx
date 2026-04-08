import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms for the 624851 NB Inc. website."
        intro="This website is provided as a public business presence for 624851 NB Inc. and for general information about the company's software work and contact details."
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
            <p>
              624851 NB Inc. reserves the right to update or remove any content
              on this website at any time without notice.
            </p>
          </article>

          <article className="content-card">
            <h2>Intellectual property</h2>
            <p>
              All content on this website — including text, graphics, product
              names, code, and design — is owned by or licensed to 624851 NB
              Inc. and is protected by applicable Canadian and international
              copyright law.
            </p>
            <p>
              You may not reproduce, distribute, or create derivative works from
              any content on this website without express written permission from
              624851 NB Inc.
            </p>
          </article>

          <article className="content-card">
            <h2>Acceptable use</h2>
            <p>
              You may view and use this website for legitimate business and
              informational purposes. You may not use the site in a way that
              interferes with its operation, attempts to misuse company contact
              details or website resources, or violates any applicable law or
              regulation.
            </p>
          </article>

          <article className="content-card">
            <h2>Contact and services</h2>
            <p>
              Contacting 624851 NB Inc. through this site does not create a
              client relationship by itself. Any project work, service
              engagement, or software delivery arrangement is subject to a
              separate written agreement.
            </p>
          </article>

          <article className="content-card">
            <h2>Limitation of liability</h2>
            <p>
              This website and its content are provided on an "as is" basis.
              624851 NB Inc. makes no warranties, express or implied, regarding
              the accuracy, completeness, or fitness for a particular purpose of
              any information on this site.
            </p>
            <p>
              To the maximum extent permitted by applicable law, 624851 NB Inc.
              shall not be liable for any direct, indirect, incidental, or
              consequential damages arising out of your use of or reliance on
              this website or its contents.
            </p>
          </article>

          <article className="content-card">
            <h2>Governing law</h2>
            <p>
              These terms are governed by and construed in accordance with the
              laws of the Province of New Brunswick and the federal laws of
              Canada applicable therein, without regard to conflict-of-law
              principles. Any disputes arising from use of this website are
              subject to the exclusive jurisdiction of the courts of New
              Brunswick, Canada.
            </p>
          </article>

          <article className="content-card">
            <h2>Privacy</h2>
            <p>
              Your use of this website is also subject to the{" "}
              <Link className="text-link" to="/privacy">
                624851 NB Inc. Privacy Policy
              </Link>
              , which describes how the company handles personal information
              collected through this site and its software products.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default TermsPage;
