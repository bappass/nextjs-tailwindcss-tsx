import classnames from 'classnames';

interface FieldProps {
  label: string
  name: string
  type: string
  className: string
}

export default function Field({ label, name, type, className }: FieldProps) {
  const addClassName = className && `${className}`
  const formControlClassName = classnames(
    'w-full border border-graysand bg-transparent py-3 px-6',
    addClassName
  )
  return (
    <div className="mb-8">
      <label htmlFor={name} className="mb-1 block text-sm font-semibold">
        {label}
      </label>
      {type === 'text' && (
        <input
          type="text"
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type === 'textarea' && (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  )
}
