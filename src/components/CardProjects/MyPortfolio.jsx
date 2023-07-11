import { useTranslation } from 'react-i18next'
import Tailwind from '../Svg/Tailwind'
import Vite from '../Svg/Vite'

export default function MyPortfolio() {
  const [t, i18n] = useTranslation('global')

  return (
    <div className="bg-[url('./assets/img/portfoliopreview.webp')] flex items-end overflow-hidden bg-cover rounded-lg h-96 md:hover:scale-105 duration-300 dark:border-2">
      <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-gray-800/60">
        <h2 className="mt-4 text-2xl font-semibold text-white">
          {t('projects.card_portfolio_title')}
        </h2>
        <p className="py-1 text-white">
          {t('projects.card_portfolio_subtitle')}
        </p>
        <div className="flex gap-2">
          <Vite />
          <Tailwind />
        </div>
        <a
          target="_blank"
          href="https://maximo.vercel.app/"
          value="portfolioweb"
          className="text-gray-300 transition hover:text-gray-100"
        >
          {t('projects.useCard')}
        </a>
      </div>
    </div>
  )
}
