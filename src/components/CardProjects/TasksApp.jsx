import { useTranslation } from 'react-i18next'

import Nextjs from '../Svg/Nextjs'
import Tailwind from '../Svg/Tailwind'

export default function TasksApp() {
  const [t, i18n] = useTranslation('global')

  return (
    <div className="bg-[url('./assets/img/taskspreview.webp')] flex items-end overflow-hidden bg-cover rounded-lg h-96 md:hover:scale-105 duration-300 dark:border-2">
      <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-gray-800/60">
        <h2 className="mt-4 text-2xl font-semibold text-white">
          {t('projects.card_tasks_title')}
        </h2>
        <p className="py-1 text-white">{t('projects.card_tasks_subtitle')}</p>
        <div className="flex items-center gap-4">
          <Nextjs />
          <Tailwind />
        </div>
        <a
          target="_blank"
          href="https://tasksapp-nextjs.vercel.app/"
          value="newtask"
          type="button"
          className="text-gray-300 transition hover:text-gray-100"
        >
          {t('projects.useCard')}
        </a>
      </div>
    </div>
  )
}
