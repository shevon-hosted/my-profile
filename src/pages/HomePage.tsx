import { profile } from '../data/portfolio'

export function HomePage() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-intro">
            <img
              className="hero-photo"
              src={profile.photo}
              alt={`${profile.name} profile photo`}
            />
            <div className="hero-name-content">
              <div className="eyebrow">Software Engineer · IFS Cloud · Manufacturing</div>
              <h1>
                {profile.name.split(' ')[0]}
                <br />
                <span className="hero-title-accent">{profile.name.split(' ')[1]}</span>
              </h1>
            </div>
          </div>
          <p className="hero-lead">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.cvPath} download={profile.cvFileName}>
              Download CV
            </a>
            <a className="btn btn-secondary" href="#experience">
              View experience
            </a>
            <a className="btn btn-ghost" href="#projects">
              See projects
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="stat-row">
            <div className="stat">
              <strong>SE</strong>
              <span>Software Engineer at IFS</span>
            </div>
            <div className="stat">
              <strong>BSc</strong>
              <span>Software Engineering · SLIIT</span>
            </div>
            <div className="stat">
              <strong>INT</strong>
              <span>Internship at Wenthura</span>
            </div>
          </div>
          <p className="panel-copy">{profile.summary}</p>
        </aside>
      </div>
    </section>
  )
}
