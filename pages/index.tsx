import ContactSection from '../components/ContactSection'
import Hero from '../components/Hero'
import ProfileSection from '../components/ProfileSection'
import ProjectsSection from '../components/ProjectSection'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
