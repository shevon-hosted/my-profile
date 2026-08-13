import { PageHeader } from '../components/PageHeader'
import { experiences } from '../data/portfolio'

export function ExperiencePage() {
  return (
    <section className="page" id="experience">
      <div className="container">
        <PageHeader
          eyebrow="Work history"
          title="Experience"
          description="Enterprise product engineering at IFS, plus internship delivery work at Wenthura."
        />

        <div className="timeline">
          {experiences.map((job) => (
            <article className="card experience-card" key={job.id}>
              <img
                className={`card-logo${job.id === 'ifs' || job.id === 'wenthura' ? ' dark-safe' : ''}`}
                src={job.logo}
                alt={`${job.company} logo`}
              />
              <div className="meta">
                {job.period} · {job.location}
              </div>
              <h3>{job.role}</h3>
              <p>
                <strong>{job.company}</strong>
              </p>
              <p className="muted" style={{ marginTop: '0.7rem' }}>
                {job.summary}
              </p>

              <ul className="list">
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {job.focusAreas.map((area) => (
                <div key={area.title}>
                  <h4>{area.title}</h4>
                  <ul className="list">
                    {area.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="chips">
                {job.domains.map((domain) => (
                  <span className="chip" key={domain}>
                    {domain}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
