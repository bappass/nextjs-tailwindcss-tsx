import classnames from 'classnames'

interface CardProps {
  name: string
  level: string
  image: string
  imageClassName: string
}

export default function SkillsCard({
  name,
  level,
  image,
  imageClassName,
}: CardProps) {
  const addImageClassName = imageClassName && `${imageClassName}`
  return (
    <div className="transtion flex cursor-pointer items-center rounded-md bg-white p-6 ease-in-out newshadow hover:-translate-y-1 hover:scale-110">
      <img
        src={image}
        alt={name}
        className={classnames('mr-6', addImageClassName)}
      />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="mt-1 text-sm font-semibold text-gray-400">{level}</p>
      </div>
    </div>
  )
}
