import { useTranslation } from "react-i18next";

function About() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="dark:bg-slate-800 dark:text-slate-200">
      <section
        id="about"
        className="justify-center max-w-2xl mx-auto text-center pb-24"
      >
        <h2 className="mb-8 text-4xl font-semibold">
          {t("about.title_woColor")}
          <span className="text-lime-600">{t("about.title_wColor")}</span>
        </h2>
        <p className="mb-5 text-xl font-semibold">{t("about.paragraph")}</p>
        <div className="mt-12">
          <a
            href="/assets/cv/Curriculum-Vitae-CV.pdf"
            download="Curriculum-vitae"
            className="group rounded-2xl px-6 py-3 bg-green-500 font-bold text-lg text-white relative overflow-hidden cursor-pointer"
          >
            {t("about.cvBtn")}
            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
