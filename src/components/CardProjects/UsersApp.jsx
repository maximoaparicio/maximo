import { useTranslation } from 'react-i18next'
import Bootstrap from '../Svg/Bootstrap'
import Nextjs from '../Svg/Nextjs'

export default function UsersApp() {
  const [t, i18n] = useTranslation('global')

  return (
    <div className="bg-[url('./assets/img/usersapppreview.webp')] flex items-end overflow-hidden bg-cover rounded-lg h-96 md:hover:scale-105 duration-300">
      <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-gray-800/60">
        <h2 className="mt-4 text-2xl font-semibold text-white">
          {t('projects.card_users_title')}
        </h2>
        <p className="py-1 text-white ">{t('projects.card_users_subtitle')}</p>
        <div className="flex items-center gap-4">
          <Nextjs />
          <Bootstrap />
        </div>
        <a
          target="_blank"
          href="https://nextjs-usersapp.vercel.app/"
          value="users-app"
          className="text-gray-300 transition hover:text-gray-100"
        >
          {t('projects.useCard')}
        </a>
      </div>
    </div>
  )
}
