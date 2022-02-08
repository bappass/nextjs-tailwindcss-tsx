import { useState } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import Button from './Button'
import classname from 'classnames'

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false)
  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="hidden w-6/12 w-6/12 md:block">
          <Nav dir="horizontal" scheme="light" />
        </div>
        <div className="hidden w-3/12 text-right md:block">
          <Button href="#contact" className="" variant="outline-yellow" pill>
            Contact
          </Button>
        </div>
        <div className="w-9/12 text-right md:hidden">
          <img
            src="/menu.svg"
            className="inline-block"
            onClick={() => setOffCanvas(true)}
          />
        </div>
      </div>

      <div
        className={classname(
          'fixed top-0 z-10 h-full w-6/12 p-10 text-right transition-all duration-700 bg-blurring md:hidden',
          offCanvas ? 'right-0' : '-right-full'
        )}
      >
        <img
          src="/x.svg"
          alt=""
          className="mb-6 mt-1 inline-block"
          onClick={() => setOffCanvas(false)}
        />
        <Nav dir="vertical" scheme="dark" />
      </div>
    </>
  )
}
