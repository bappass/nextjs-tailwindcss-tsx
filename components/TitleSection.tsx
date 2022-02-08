import classnames from 'classnames'

interface ChildrenProps {
  children: string
  left: boolean
}

export default function TitleSection({ children, left }: ChildrenProps) {
  return (
    <h2
      className={classnames(
        'font-mono text-2xl font-semibold',
        !left && 'text-center'
      )}
    >
      {children}
    </h2>
  )
}
