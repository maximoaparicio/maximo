import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import DarkMode from './Buttons/DarkMode'
import Lenguage from './Buttons/Lenguage'
import Uppercase from './Buttons/Uppercase'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  const [t, i18n] = useTranslation('global')

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 shadow dark:bg-slate-900 dark:text-slate-200 bg-zinc-200">
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3  text-black-100 border-blue-400 dark:hover:text-white dark:hover:border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="md:hidden flex justify-between flex-end gap-5">
        <DarkMode />
        <Lenguage />
        <Uppercase />
      </div>
      <div
        className={`${
          isOpen ? '' : 'hidden'
        } w-full block flex-grow md:flex md:items-center md:w-auto`}
      >
        <div
          className="px-3 md:text-md md:flex md:flex-grow md:justify-center
        md:gap-6 text-lg font-semibold "
        >
          <a
            href="#home"
            className="block mt-4 md:inline-block md:mt-0 hover:text-lime-600 md:transition-all"
          >
            {t('navbar.home')}
          </a>
          <a
            href="#projects"
            className="block mt-4 md:inline-block md:mt-0 hover:text-lime-600 md:transition-all"
          >
            {t('navbar.projects')}
          </a>
          <a
            href="#about"
            className="block mt-4 md:inline-block md:mt-0  hover:text-lime-600 md:transition-all"
          >
            {t('navbar.about')}
          </a>
          <a
            href="#contact"
            className="block mt-4 md:inline-block md:mt-0  hover:text-lime-600 md:transition-all"
          >
            {t('navbar.contact')}
          </a>
        </div>
        <div className="md:flex md:items-center md:gap-5 md:-ml-24 hidden">
          <DarkMode />
          <Lenguage />
          <Uppercase />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
