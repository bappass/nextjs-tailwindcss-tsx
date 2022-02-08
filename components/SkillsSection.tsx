import ParagraphSection from './ParagraphSection'
import TitleSection from './TitleSection'
import SkillsCard from './SkillsCard'

export default function SkillsSection() {
  return (
    <section className="bg-newgray py-28" id="skills">
      <div className="container mx-auto px-10 2xl:px-10">
        <TitleSection left={false}>Skills</TitleSection>
        <ParagraphSection left={false}>
          Beberapa kemampuan saya.
        </ParagraphSection>
        <div className="-mx-4 mt-20 flex flex-wrap">
          <div className="w-full px-4 pb-8 md:w-4/12">
            <SkillsCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 w-16 rounded-full"
            />
          </div>
          <div className="w-full px-4 pb-8 md:w-4/12">
            <SkillsCard
              name="React"
              level="Menengah"
              image="/react.svg"
              imageClassName="h-16 w-16"
            />
          </div>
          <div className="w-full px-4 pb-8 md:w-4/12">
            <SkillsCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs.svg"
              imageClassName="h-16 w-16"
            />
          </div>
          <div className="w-full px-4 pb-8 md:w-4/12">
            <SkillsCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs.svg"
              imageClassName="h-16 w-16"
            />
          </div>
          <div className="w-full px-4 pb-8 md:w-4/12">
            <SkillsCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 w-16 rounded-full"
            />
          </div>
          <div className="w-full px-4 pb-8 md:w-4/12">
            <SkillsCard
              name="React"
              level="Menengah"
              image="/react.svg"
              imageClassName="h-16 w-16"
            />
          </div>
          <div className="w-full px-4 pb-8 md:w-4/12">
            <SkillsCard
              name="React"
              level="Menengah"
              image="/react.svg"
              imageClassName="h-16 w-16"
            />
          </div>
          <div className="w-full px-4 pb-8 md:w-4/12">
            <SkillsCard
              name="Node JS"
              level="Lanjutan"
              image="/nodejs.svg"
              imageClassName="h-16 w-16"
            />
          </div>
          <div className="w-full px-4 pb-8 md:w-4/12">
            <SkillsCard
              name="Javascript"
              level="Lanjutan"
              image="/javascript.svg"
              imageClassName="h-16 w-16 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
