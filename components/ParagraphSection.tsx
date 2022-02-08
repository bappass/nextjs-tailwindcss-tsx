import classnames from 'classnames'

interface ChildrenProps {
  children: string
  left: boolean
}

export default function ParagraphSection({ children, left }: ChildrenProps) {
  return (
    <p
      className={classnames(
        'mt-2 text-lg text-gray-600',
        !left && 'text-center'
      )}
    >
      {children}
    </p>
  )
}
