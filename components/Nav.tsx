import NavItem from './NavItem'
import classname from 'classnames'

interface NavProps {
  dir: string
  scheme: string
}

export default function Nav({ dir, scheme }: NavProps) {
  const dirs: Record<string, string> = {
    horizontal: 'justify-center space-x-10',
    vertical: 'flex-col space-y-6',
  }

  const pickedDirection = dirs[dir]

  return (
    <ul className={classname('flex ', pickedDirection)}>
      <NavItem scheme={scheme} href="#profile">
        Profile
      </NavItem>
      <NavItem scheme={scheme} href="#skills">
        Skills
      </NavItem>
      <NavItem scheme={scheme} href="#projects">
        Projects
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        Contact
      </NavItem>
    </ul>
  )
}
