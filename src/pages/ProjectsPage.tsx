import { PageHeader } from '../components/PageHeader'
import { projects } from '../data/portfolio'

export function ProjectsPage() {
  return (
    <section className="page" id="projects">
      <div className="container">
        <PageHeader
          eyebrow="Selected work"
          title="Projects"
          description="Academic research and product builds spanning IoT, MERN, mobile, and enterprise integration."
        />

        <div className="grid-2">
          {projects.map((project) => (
            <article
              className={`card project-card${project.featured ? ' featured' : ''}`}
              key={project.id}
            >
              <div>
                <div className="meta">{project.subtitle}</div>
                <h3>{project.title}</h3>
                <p className="muted" style={{ marginTop: '0.7rem' }}>
                  {project.description}
                </p>
                <div className="chips">
                  {project.technologies.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    className="btn btn-secondary"
                    style={{ marginTop: '1.2rem' }}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkLabel ?? 'Open link'}
                  </a>
                ) : null}
              </div>
              {project.featured ? (
                <div className="card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <h4>Research highlight</h4>
                  <p className="muted">
                    Published on IEEE Xplore — autonomous hydroponic monitoring with live remote
                    consulting for strawberry farming.
                  </p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
