import classname from 'classnames'

interface ChildrenProps {
  children: any
  href: string
  scheme: string
}

export default function NavItem({ children, href, scheme }: ChildrenProps) {
  const schemes: Record<string, string> = {
    light: 'text-white text-opacity-60 hover:text-opacity-100',
    dark: 'text-black hover:text-opacity-60',
  }

  const pickedScheme = schemes[scheme]
  return (
    <li>
      <div>
        <a
          href={href}
          className={classname(
            'cursor-pointer text-lg font-semibold transition',
            pickedScheme
          )}
        >
          {children}
        </a>
      </div>
    </li>
  )
}
