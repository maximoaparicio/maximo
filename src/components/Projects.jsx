import { useTranslation } from 'react-i18next'
import MovieApp from './CardProjects/MovieApp'
import MyPortfolio from './CardProjects/MyPortfolio'
import UsersApp from './CardProjects/UsersApp'

function Projects() {
  const [t, i18n] = useTranslation('global')

  return (
    <div className="dark:bg-slate-800 dark:text-slate-200">
      <section className="max-w-2xl mx-auto pb-14" id="projects">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center">
            {t('projects.title_woColor')}
            <span className="text-lime-600">{t('projects.title_wColor')}</span>
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            <MovieApp />
            <UsersApp />
            <MyPortfolio />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
