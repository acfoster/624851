import PageHero from "../components/PageHero";
import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects and work"
        title="Software products, internal tools, and active builds from 624851 NB Inc."
        intro="The company’s project work includes public alpha products, active internal builds, automation systems, and selected client-facing software and website projects."
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
            <p className="section-label">How the work is approached</p>
            <h2>Small teams, direct implementation, practical outcomes.</h2>
            <p>
              Projects are approached with an emphasis on simplicity, clarity,
              and tools that can be maintained over time. The work typically
              favors lightweight stacks, sensible interfaces, and delivery that
              matches the scale of the problem.
            </p>
          </article>
          <article className="content-card">
            <p className="section-label">Typical engagements</p>
            <h2>Internal business tools, custom utilities, and product development.</h2>
            <p>
              Typical work includes admin systems, internal dashboards, small
              customer-facing apps, AI-assisted workflow tools, business process
              automation, mobile-connected web products, and focused websites or
              web utilities for clients.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
