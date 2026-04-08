import { useState } from "react";
import PageHero from "../components/PageHero";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Website inquiry from ${form.name || "624851.com visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:info@624851.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch about software projects, small business tools, and AI-assisted solutions."
        intro="624851 NB Inc. is available for selected software development work involving practical web applications, internal tools, and lightweight digital products."
      />

      <section className="section">
        <div className="container contact-grid">
          <article className="contact-card">
            <p className="section-label">Email</p>
            <h2>
              <a href="mailto:info@624851.com">info@624851.com</a>
            </h2>
            <p>
              Reach out regarding software products, client projects, internal
              tools, AI-assisted workflows, or lightweight web applications.
            </p>
          </article>
          <article className="contact-card">
            <p className="section-label">Location</p>
            <h2>Moncton, New Brunswick, Canada</h2>
            <p>
              Independent Canadian software company serving practical digital
              product and small-tool development needs.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="form-shell">
            <div className="form-intro">
              <p className="section-label">Contact form</p>
              <h2>Send a project inquiry.</h2>
              <p>
                This form prepares an email to info@624851.com using your
                device’s default mail app. It is intended for software project
                inquiries, business tool requests, and AI-assisted workflow
                discussions.
              </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <p className="form-notice">
                Note: Submitting this form opens your device's default mail app
                with a pre-filled message to info@624851.com. No data is sent to
                a server.
              </p>
              <label className="field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <button className="button button-primary" type="submit">
                Compose Email
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
