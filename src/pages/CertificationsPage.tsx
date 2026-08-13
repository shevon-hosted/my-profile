import { PageHeader } from '../components/PageHeader'
import { certifications, profile, references } from '../data/portfolio'

export function CertificationsPage() {
  return (
    <section className="page" id="certifications">
      <div className="container">
        <PageHeader
          eyebrow="Recognition"
          title="Certifications & achievements"
          description="IFS practitioner and learning achievements across Cloud Web Development, Lifecycle Experience, and PSO."
        >
          <a
            className="btn btn-secondary"
            style={{ marginTop: '1rem' }}
            href={profile.credly}
            target="_blank"
            rel="noreferrer"
          >
            View all badges on Credly
          </a>
        </PageHeader>

        <div className="grid-3">
          {certifications.map((cert) => (
            <article className="card cert-card" key={cert.id}>
              <img src={cert.image} alt={`${cert.title} badge`} />
              <div className="meta">{cert.type}</div>
              <h3>{cert.title}</h3>
              <p className="muted">{cert.detail}</p>
              <div className="chips" style={{ justifyContent: 'center' }}>
                <span className="chip copper">{cert.issuer}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="section-head" style={{ marginTop: '3rem' }}>
          <h2>Professional references</h2>
          <p>Available on request for hiring conversations.</p>
        </div>

        <div className="grid-2">
          {references.map((ref) => (
            <article className="card" key={ref.name}>
              <h3>{ref.name}</h3>
              <p className="muted">{ref.role}</p>
              <div className="info-list" style={{ marginTop: '1rem' }}>
                <div className="info-item">
                  <span>Email</span>
                  <a href={`mailto:${ref.email}`}>{ref.email}</a>
                </div>
                <div className="info-item">
                  <span>Phone</span>
                  <a href={`tel:${ref.phone.replace(/\s/g, '')}`}>{ref.phone}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
