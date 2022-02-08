import classnames from 'classnames'

interface ButtonProps {
  children: any
  className: string
  variant: string
  pill: boolean
  href: string
}

export default function Button({
  children,
  className,
  variant,
  pill,
  href,
}: ButtonProps) {
  const variants: Record<string, string> = {
    'outline-yellow': `border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500`,
    yellow: 'text-black bg-yellow-500 hover:bg-yellow-600',
    black: 'bg-black text-white hover:bg-opacity-60',
  }

  const pickedVariant = variants[variant]

  return (
    <a
      href={href}
      className={classnames(
        'inline-block cursor-pointer py-3 px-10 text-lg font-semibold transition',
        pill && 'rounded-full',
        pickedVariant,
        className
      )}
    >
      {children}
    </a>
  )
}
