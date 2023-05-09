function Footer() {
  return (
    <div className="dark:bg-slate-800 dark:text-slate-200 bg-zinc-100">
      <footer className="flex justify-center min-w-3xl gap-3 pt-14 pb-4 mx-auto ml-5">
        <a
          href="https://github.com/maximoaparicio?tab=repositories"
          target="_BLANK"
          className="transition hover:text-lime-600"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/maximodipaparicio/"
          target="_BLANK"
          className="transition hover:text-lime-600"
        >
          Linkedin
        </a>
        <a
          href="https://wa.me/+543814057449"
          target="_BLANK"
          className="transition hover:text-lime-600"
        >
          Whatsapp
        </a>
      </footer>
    </div>
  )
}

export default Footer
