import PageHero from "../components/PageHero";
import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Active products and ongoing projects."
        intro="A mix of our own products at various stages, plus the kinds of client work we take on."
      />

      <section className="section">
        <div className="container cards-grid">
          {projects.map((project) => (
            <article className="project-card project-card-detailed" key={project.name}>
              <p className="card-kicker">{project.type}</p>
              <p className="status-pill">{project.status}</p>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              {project.url ? (
                <a
                  className="text-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name} live site`}
                >
                  Visit live site
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container text-grid">
          <article className="content-card">
            <p className="section-label">How we work</p>
            <h2>Small scope, direct implementation.</h2>
            <p>
              We prefer stacks we can maintain and interfaces that don't need
              explaining. Delivery matches the scale of the problem — no
              overengineering, no unnecessary process.
            </p>
          </article>
          <article className="content-card">
            <p className="section-label">Typical client work</p>
            <h2>Internal tools, admin systems, small web apps.</h2>
            <p>
              If it fits in a sprint or two, we're probably a good fit. We do
              focused work — dashboards, internal utilities, small
              customer-facing apps, and sites that need to be built right and
              stay maintained.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
