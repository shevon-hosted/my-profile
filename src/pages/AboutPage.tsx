import { PageHeader } from '../components/PageHeader'
import { languages, profile, skills } from '../data/portfolio'

export function AboutPage() {
  return (
    <section className="page" id="about">
      <div className="container">
        <PageHeader
          eyebrow="Personal details"
          title="About me"
          description="A quick snapshot of who I am, how to reach me, and the skills I work with every day."
        />

        <div className="about-layout">
          <div className="card">
            <div className="about-photo-wrap">
              <img
                className="about-photo"
                src={profile.photo}
                alt={`${profile.name} profile photo`}
              />
            </div>
            <h3>Contact & profile</h3>
            <div className="info-list" style={{ marginTop: '1rem' }}>
              <div className="info-item">
                <span>Full name</span>
                <strong>{profile.fullName}</strong>
              </div>
              <div className="info-item">
                <span>Role</span>
                <strong>{profile.title}</strong>
              </div>
              <div className="info-item">
                <span>Date of birth</span>
                <strong>{profile.dateOfBirth}</strong>
              </div>
              <div className="info-item">
                <span>NIC</span>
                <strong>{profile.nic}</strong>
              </div>
              <div className="info-item">
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="info-item">
                <span>Phone</span>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </div>
              <div className="info-item">
                <span>Address</span>
                <strong>{profile.address}</strong>
              </div>
              <div className="info-item">
                <span>LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/shevon-krishmal
                </a>
              </div>
              <div className="info-item">
                <span>GitHub</span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  github.com/shevonkrishmal
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Summary</h3>
            <p className="muted" style={{ marginTop: '0.8rem' }}>
              {profile.summary}
            </p>

            <div className="skill-block" style={{ marginTop: '1.6rem' }}>
              <h3>Programming languages</h3>
              <div className="chips">
                {skills.languages.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-block">
              <h3>Frameworks</h3>
              <div className="chips">
                {skills.frameworks.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-block">
              <h3>Databases</h3>
              <div className="chips">
                {skills.databases.map((item) => (
                  <span className="chip copper" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-block">
              <h3>Tools</h3>
              <div className="chips">
                {skills.tools.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-block">
              <h3>Languages</h3>
              <div className="chips">
                {languages.map((item) => (
                  <span className="chip copper" key={item.name}>
                    {item.name} · {item.level}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-block">
              <h3>Interests</h3>
              <div className="chips">
                {skills.interests.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cv-banner">
          <div>
            <h3>Download my CV</h3>
            <p className="muted" style={{ marginTop: '0.5rem' }}>
              The PDF is stored in this project at <code>public/cv/Shevon-Krishmal-CV.pdf</code> and
              ships with the site for one-click download.
            </p>
          </div>
          <a className="btn btn-primary" href={profile.cvPath} download={profile.cvFileName}>
            Download PDF
          </a>
        </div>
      </div>
    </section>
  )
}
