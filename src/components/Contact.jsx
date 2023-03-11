import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [t, i18n] = useTranslation("global");

  const [state, handleSubmit] = useForm("moqrgjdr");

  return (
    <div className="dark:bg-slate-800 dark:text-slate-200">
      <section
        className="w-full max-w-2xl px-6 py-4 mx-auto pb-10"
        id="contact"
      >
        <h2 className="text-3xl font-semibold text-center">
          {t("contact.title_woColor")}
          <span className="text-lime-600">{t("contact.title_wColor")}</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-2">
          <a className="flex flex-col items-center px-4 py-3 transition-colors duration-300 transform rounded-md hover:bg-slate-200 hover:text-lime-600 dark:hover:bg-slate-600">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="mt-2">(+54)381-4057449</span>
          </a>
          <a className="flex flex-col items-center px-3 py-3 transition-colors duration-300 transform rounded-md hover:bg-slate-200 hover:text-lime-600 dark:hover:bg-slate-600">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="mt-2">maximodipaparicio@gmail.com</span>
          </a>
        </div>
        <div className="mt-6 ">
          <form onSubmit={handleSubmit}>
            <Toaster />

            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-slate-200"
                  htmlFor="name"
                >
                  {t("contact.name")}
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-lime-400 focus:ring-lime-500 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="text"
                  id="name"
                ></input>
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="w-full mx-2 mt-4 md:mt-0">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-slate-200"
                  htmlFor="email"
                >
                  {t("contact.email")}
                </label>
                <input
                  name="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-lime-400 focus:ring-lime-500 focus:outline-none focus:ring focus:ring-opacity-40"
                  type="email"
                  id="email"
                ></input>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="w-full mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-slate-200"
                htmlFor="message"
              >
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-lime-400 focus:outline-none focus:ring-lime-500  focus:ring-opacity-40"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                disabled={state.submitting}
                className="group rounded-2xl h-12 w-24 bg-green-500 font-bold text-lg text-white relative overflow-hidden"
              >
                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                {t("contact.msgBtn")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
