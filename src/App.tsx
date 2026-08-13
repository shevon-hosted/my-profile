import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { AboutPage } from './pages/AboutPage'
import { CertificationsPage } from './pages/CertificationsPage'
import { EducationPage } from './pages/EducationPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <HomePage />
        <AboutPage />
        <EducationPage />
        <ExperiencePage />
        <ProjectsPage />
        <CertificationsPage />
      </main>
      <Footer />
    </div>
  )
}
