import classnames from 'classnames'

interface ItemProps {
  label: string
  icon: string
  value: string
  className: string
}

export default function ContactItem({
  label,
  icon,
  value,
  className,
}: ItemProps) {
  const addClassName = className && `${className}`
  return (
    <div className={classnames('flex items-start ', addClassName)}>
      <img src={icon} alt={label} className="w-6" />
      <div className="ml-4">
        <div className="mb-1 text-sm font-semibold">{label}</div>
        <div className="font-semibold md:text-lg">{value}</div>
      </div>
    </div>
  )
}
