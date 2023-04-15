import { useTranslation } from 'react-i18next'

import React from '../Svg/React'
import Tailwind from '../Svg/Tailwind'
import Node from '../Svg/Node'

export default function MovieApp() {
  const [t, i18n] = useTranslation('global')

  return (
    <div className="bg-[url('./assets/img/moviepreview.webp')] flex items-end overflow-hidden bg-cover rounded-lg h-96 md:hover:scale-105 duration-300">
      <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-gray-800/60">
        <h2 className="mt-4 text-2xl font-semibold text-white">
          {t('projects.card_title')}
        </h2>
        <p className="py-1 text-white ">{t('projects.card_subtitle')}</p>
        <div className="flex">
          <React />
          <Tailwind />
          <Node />
        </div>
        <a
          target="_blank"
          href="https://waitingpage.vercel.app/"
          value="tmdb-movie-app"
          type="button"
          className="text-gray-300 transition hover:text-gray-100"
        >
          {t('projects.useCard')}
        </a>
      </div>
    </div>
  )
}
