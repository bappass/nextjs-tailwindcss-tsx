interface ProjectItemProps {
  image: string
  name: string
  description: string
}

export default function ProjectItem({
  image,
  name,
  description,
}: ProjectItemProps) {
  return (
    <article className="text-center">
      <img src={image} alt="hasten" className="w-full rounded-lg" />
      <h3 className="mt-4 mb-2 text-xl font-semibold">{name}</h3>
      <p className="text-lg text-gray-400">{description}</p>
    </article>
  )
}
