import Navbar from './Navbar'
import Button from './Button'

export default function Hero() {
  return (
    <div className="pb-20 bg-hero md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[712px]">
      <div className="container mx-auto px-10 2xl:px-10">
        <Navbar />
        <div className="text-center md:mt-6 lg:mt-10 xl:mt-20">
          <h1 className="mx-auto font-mono text-3xl font-semibold leading-relaxed text-white lg:w-10/12 xl:w-8/12 2xl:w-6/12">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="mx-auto mt-6 text-lg leading-relaxed text-white text-opacity-60 lg:w-6/12 xl:w-4/12 2xl:w-3/12">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button href="#profile" className="mt-14" variant="yellow" pill>
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  )
}
