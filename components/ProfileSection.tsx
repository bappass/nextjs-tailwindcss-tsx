import ParagraphSection from './ParagraphSection'
import TitleSection from './TitleSection'

export default function Profile() {
  return (
    <section className="py-28" id="profile">
      <div className="container mx-auto px-10 2xl:px-10">
        <TitleSection left={false}>Profile</TitleSection>
        <ParagraphSection left={false}>
          Mengenal saya secara singkat.
        </ParagraphSection>
        <div className="mx-auto mt-10 flex flex-wrap md:items-start lg:items-center xl:w-9/12 2xl:mt-20">
          <div className="mb-10 w-full px-10 md:mb-0 md:w-5/12">
            <img src="/profile.png" alt="profile" className="w-full" />
          </div>
          <div className="w-full px-10 md:w-7/12">
            <p className="text-lg leading-relaxed">
              Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis
              condimentum ornare ante a posuere. Aliquam sem magna, sodales quis
              congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet
              ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis
              accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros.
              Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus
              ligula, id viverra mi erat at nisl. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Maecenas ac aliquet eros.
            </p>
            <p className="mt-6 text-lg leading-relaxed">
              Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis
              convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl.
              Mauris ut dolor posuere augue porta lobortis nec sed lacus.
              Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex
              malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus
              mollis, id vehicula nulla dictum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
