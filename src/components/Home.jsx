import { useTranslation } from 'react-i18next'

import yo from '../assets/img/yo.webp'
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
      <div>
        <img
          src={maxilindo}
          alt="maximodipaparicio"
          className="rounded-full shadow-xl mt-3"
          width={300}
          height={300}
        />
      </div>
      <div className="md:pl-4 text-center md:text-left">
        <p className="font-light pl-1">{t('home.presentation')}</p>
        <h1 className="text-6xl font-semibold">
          <span className="text-lime-600">M</span>
          aximo Dip Aparicio
        </h1>
        <h3 className="text-3xl pl-1">{t('home.subtitle')}</h3>
        <div className="flex gap-1 pl-1 py-2 justify-center md:justify-start">
          <button>
            <Linkedin />
          </button>
          <button>
            <Github />
          </button>
        </div>
      </div>
    </main>
  )
}

export default Home
