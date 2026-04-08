import PageHero from "../components/PageHero";

function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy information for 624851 NB Inc."
        intro="This page describes how 624851 NB Inc. handles website inquiries, direct email contact, basic business communications, and data practices across its software products."
      />

      <section className="section">
        <div className="container legal-stack">
          <article className="content-card">
            <h2>Website inquiries</h2>
            <p>
              If you contact 624851 NB Inc. through the website or by email,
              the information you provide may include your name, email address,
              company details, and the contents of your message.
            </p>
            <p>
              This information is used only for responding to inquiries,
              discussing software projects, and maintaining normal business
              communication records.
            </p>
          </article>

          <article className="content-card">
            <h2>Use of information</h2>
            <p>
              624851 NB Inc. does not sell personal information collected
              through this website. Information submitted through direct contact
              is used for communication, project evaluation, client service, or
              related business operations.
            </p>
            <p>
              This commitment extends to all software products operated by
              624851 NB Inc. User data collected by any 624851 NB Inc. product
              is used solely to operate that product and is never sold to third
              parties.
            </p>
          </article>

          <article className="content-card">
            <h2>Software products</h2>
            <p>
              624851 NB Inc. operates multiple software products, including
              GloveBoxGPS, GetSteady.today, GoChorez, TradeCheckr, and
              DivvyTrackr. Each product that collects user data maintains its
              own privacy policy, linked from within that product or its
              supporting website.
            </p>
            <p>
              Where a product handles personal information such as account
              details, health or wellness data, financial data, or location
              data, that product's individual privacy policy describes the
              specific data collected, how it is used, and how users can request
              access or deletion.
            </p>
          </article>

          <article className="content-card">
            <h2>Applicable law and compliance</h2>
            <p>
              624851 NB Inc. is a Canadian corporation based in Moncton, New
              Brunswick. The company's privacy practices are governed by the
              Personal Information Protection and Electronic Documents Act
              (PIPEDA) and applicable provincial privacy legislation. The
              company collects only the personal information necessary for the
              stated purpose and takes reasonable steps to protect it from
              unauthorized access, disclosure, or misuse.
            </p>
          </article>

          <article className="content-card">
            <h2>Retention and access</h2>
            <p>
              Business correspondence may be retained for operational,
              contractual, security, or record-keeping purposes. Requests about
              privacy-related business communications, or requests to access or
              correct personal information held by the company, can be sent to
              info@624851.com.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default PrivacyPage;
