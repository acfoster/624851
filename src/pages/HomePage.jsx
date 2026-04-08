import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { projects } from "../data/projects";

const serviceItems = [
  {
    title: "Ruby on Rails application development",
    description:
      "Rails-first product work for small web apps, dashboards, account systems, and practical business software.",
  },
  {
    title: "Internal tools and admin workflows",
    description:
      "Operational tools that reduce manual work, improve visibility, and support day-to-day team processes.",
  },
  {
    title: "AI-assisted software and automation",
    description:
      "Focused AI workflows, agent-style tools, and automation systems that help teams handle repetitive tasks more efficiently.",
  },
  {
    title: "Client tools, product dashboards, and lightweight sites",
    description:
      "Small public-facing sites and client-specific utilities built to be clear, maintainable, and useful from launch.",
  },
];

const liveProjects = projects.filter((project) => project.url);

function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Independent software studio"
        title="624851 NB Inc. builds practical software products, small business tools, and AI-assisted workflows."
        intro="624851 NB Inc. is a Moncton, New Brunswick software company focused on Ruby on Rails development, internal tools, client tools, automations, and lightweight digital products built for real-world use."
        actions={
          <>
            <Link className="button button-primary" to="/projects">
              View Projects
            </Link>
            <Link className="button button-secondary" to="/contact">
              Contact
            </Link>
          </>
        }
      />

      <section className="section section-tight">
        <div className="container proof-grid">
          {liveProjects.map((project) => (
            <article className="proof-card" key={project.name}>
              <p className="proof-label">{project.status}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a
                className="text-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.name} site`}
              >
                Visit site
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div className="content-block">
            <p className="section-label">What the company does</p>
            <h2>Small, focused software work with a clear business purpose.</h2>
            <p>
              The company develops its own products and also builds small tools
              and sites for clients. Work is centered on practical delivery:
              clear interfaces, maintainable code, lightweight architecture, and
              software that solves a specific operational need. Current product
              work includes projects such as GetSteady.today, GoChorez,
              TradeCheckr, Local Flow, and GloveBoxGPS.
            </p>
          </div>
          <div className="panel-list">
            {serviceItems.map((item) => (
              <article className="panel-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">Selected work</p>
              <h2>Products and active project areas</h2>
            </div>
            <Link className="text-link" to="/projects">
              See all projects
            </Link>
          </div>
          <div className="cards-grid">
            {projects.slice(0, 6).map((project) => (
              <article className="project-card" key={project.name}>
                <p className="card-kicker">{project.type}</p>
                <p className="status-pill">{project.status}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.url ? (
                  <a
                    className="text-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} project`}
                  >
                    Open project
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container callout">
          <div>
            <p className="section-label">Company profile</p>
            <h2>Canadian software company based in Moncton, New Brunswick.</h2>
            <p>
              624851 NB Inc. operates as an independent development shop focused
              on small apps, internal tools, AI-enhanced workflows, and
              lightweight digital products for practical use cases, including
              SaaS-style tools, dashboards, and product platforms built in Rails
              and React.
            </p>
          </div>
          <Link className="button button-primary" to="/about">
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomePage;
