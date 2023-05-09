import { useTranslation } from 'react-i18next'

import { motion } from 'framer-motion'

import MovieApp from './CardProjects/MovieApp'
import MyPortfolio from './CardProjects/MyPortfolio'
import TasksApp from './CardProjects/TasksApp'
import UsersApp from './CardProjects/UsersApp'

function Projects() {
  const [t, i18n] = useTranslation('global')

  return (
    <div className="dark:bg-slate-800 dark:text-slate-200 bg-zinc-100">
      <section className="max-w-2xl mx-auto py-14" id="projects">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center">
            {t('projects.title_woColor')}
            <span className="text-lime-600">{t('projects.title_wColor')}</span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2"
          >
            <MovieApp />
            <UsersApp />
            <TasksApp />
            <MyPortfolio />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects
