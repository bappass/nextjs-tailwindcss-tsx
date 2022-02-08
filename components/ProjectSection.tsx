import TitleSection from './TitleSection'
import ParagraphSection from './ParagraphSection'
import ProjectItem from './ProjectItem'

export default function ProjectsSection() {
  return (
    <section className="py-28" id="projects">
      <div className="container mx-auto px-10 2xl:px-10">
        <TitleSection left={false}>Projects</TitleSection>
        <ParagraphSection left={false}>
          Beberapa proyek bikinan saya.
        </ParagraphSection>
        <div className="-mx-4 mt-20 flex flex-wrap">
          <div className="w-full px-4 pb-8 md:w-6/12">
            <ProjectItem
              name="Hasten"
              description="Eksplorasi Landing Page"
              image="/hasten.png"
            />
          </div>
          <div className="w-full px-4 pb-8 md:w-6/12">
            <ProjectItem
              name="Resources"
              description="Eksplorasi Resources Page"
              image="/resources.png"
            />
          </div>
          <div className="w-full px-4 pb-8 md:w-6/12 md:pb-0">
            <ProjectItem
              name="Resources"
              description="Eksplorasi Resources Page"
              image="/resources.png"
            />
          </div>
          <div className="w-full px-4 md:w-6/12">
            <ProjectItem
              name="Hasten"
              description="Eksplorasi Landing Page"
              image="/hasten.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
