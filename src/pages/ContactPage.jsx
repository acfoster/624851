import { useState } from "react";
import PageHero from "../components/PageHero";

const STATUS = { IDLE: "idle", SENDING: "sending", SUCCESS: "success", ERROR: "error" };

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(STATUS.SENDING);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus(STATUS.SUCCESS);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setErrorMessage(err.message);
      setStatus(STATUS.ERROR);
    }
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
                Fill out the form and your message will be sent directly to
                info@624851.com. You can also reach out by email any time.
              </p>
            </div>

            {status === STATUS.SUCCESS ? (
              <div className="form-success">
                <p className="form-success-title">Message sent</p>
                <p>
                  Thanks for reaching out. You'll hear back at the email address
                  you provided.
                </p>
                <button
                  className="button button-secondary"
                  style={{ marginTop: "1.25rem" }}
                  onClick={() => setStatus(STATUS.IDLE)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {status === STATUS.ERROR && (
                  <p className="form-error">
                    {errorMessage}{" "}
                    <a className="text-link" href="mailto:info@624851.com">
                      Email us directly.
                    </a>
                  </p>
                )}
                <label className="field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={status === STATUS.SENDING}
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
                    disabled={status === STATUS.SENDING}
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
                    disabled={status === STATUS.SENDING}
                  />
                </label>
                <button
                  className="button button-primary"
                  type="submit"
                  disabled={status === STATUS.SENDING}
                >
                  {status === STATUS.SENDING ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
