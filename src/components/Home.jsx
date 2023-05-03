import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import Github from '../Icons/Github.jsx'
import Linkedin from '../Icons/Linkedin'
import maxilindo from '../assets/img/maxilindo.png'

function Home() {
  const [t, i18n] = useTranslation('global')

  return (
    <main
      className="flex flex-col items-center justify-center min-w-3xl mx-auto md:flex-row md:py-10 dark:bg-slate-800 dark:text-slate-200"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={maxilindo}
          alt="maximodipaparicio"
          className="rounded-full shadow-xl mt-3"
          width={300}
          height={300}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:pl-4 text-center md:text-left text-slate-800 dark:text-slate-200"
      >
        <p className="font-light pl-1">{t('home.presentation')}</p>
        <h1 className="text-6xl">
          <span className="text-lime-600">M</span>
          aximo Dip Aparicio
        </h1>
        <h3 className="text-3xl pl-1">{t('home.subtitle')}</h3>
        <div className="flex gap-1 pl-1 py-2 md:justify-start justify-center">
          <a
            className="md:hover:border-lime-600 rounded-md p-2 flex items-center gap-2 transition-all duration-100 ease-in-out border-2 border-transparent md:hover:scale-110"
            href="https://www.linkedin.com/in/maximodipaparicio/"
            target="_blank"
          >
            <Linkedin />
            <span>Linkedin</span>
          </a>
          <a
            className="md:hover:border-lime-600 rounded-md p-2 flex items-center gap-2 transition-all duration-100 ease-in-out border-2 border-transparent md:hover:scale-110"
            href="https://github.com/maximoaparicio?tab=repositories"
            target="_blank"
          >
            <Github />
            <span>Github</span>
          </a>
        </div>
      </motion.div>
    </main>
  )
}

export default Home
