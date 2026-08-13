import { PageHeader } from '../components/PageHeader'
import { courses, education } from '../data/portfolio'

export function EducationPage() {
  return (
    <section className="page" id="education">
      <div className="container">
        <PageHeader
          eyebrow="Academic qualifications"
          title="Education"
          description="Formal studies and complementary courses that shaped my engineering foundation."
        />

        <div className="timeline">
          {education.map((item) => (
            <article className="card" key={item.id}>
              <img className="card-logo" src={item.logo} alt={`${item.school} logo`} />
              <div className="meta">{item.period}</div>
              <h3>{item.school}</h3>
              <p>
                <strong>{item.degree}</strong>
              </p>
              <p className="muted">{item.specialization}</p>
              <ul className="list">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="section-head" style={{ marginTop: '3rem' }}>
          <h2>Courses</h2>
          <p>Additional learning beyond the degree program.</p>
        </div>

        <div className="grid-2">
          {courses.map((course) => (
            <article className="card" key={course.id}>
              <h3>{course.title}</h3>
              <p className="muted">{course.issuer}</p>
              {course.period ? <div className="meta" style={{ marginTop: '0.6rem' }}>{course.period}</div> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
