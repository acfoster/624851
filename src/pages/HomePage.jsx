import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { projects } from "../data/projects";

const serviceItems = [
  {
    title: "Rails development",
    description:
      "Web apps, dashboards, and account systems built with Ruby on Rails.",
  },
  {
    title: "Internal tools",
    description:
      "Admin interfaces and operational software that reduce manual work.",
  },
  {
    title: "iOS development",
    description:
      "Native iPhone apps built with Swift and SwiftUI for the App Store.",
  },
  {
    title: "Client sites and utilities",
    description:
      "Small public-facing sites and focused tools built to last.",
  },
];

function HomePage() {
  return (
    <>
      <PageHero
        title="Software products and development work."
        intro="624851 NB Inc. is a small software company based in Moncton, New Brunswick. We build our own products and take on selected client work."
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

      <section className="section">
        <div className="container split-grid">
          <div className="content-block">
            <p className="section-label">What we do</p>
            <h2>We build our own products and work with clients.</h2>
            <p>
              The work is hands-on and direct — no large team, no drawn-out
              process. We favour simple stacks, clear interfaces, and software
              that stays maintainable. Current products include GloveBoxGPS,
              GetSteady.today, GoChorez, and TradeCheckr.
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
              <h2>Products and active projects</h2>
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
            <p className="section-label">About the company</p>
            <h2>Based in Moncton, New Brunswick.</h2>
            <p>
              624851 NB Inc. is an incorporated Canadian software company. One
              developer, direct execution — products and client work done
              without the overhead of a larger shop.
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
