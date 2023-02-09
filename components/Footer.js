import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-white border border-transparent">
        <div className="top-0 absolute grid grid-cols-[300px_300px_1fr] gap-2 z-10 bg-gris w-[1050px] -translate-x-1/2 left-1/2">
          <div className="flex ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 mt-10 ml-14 fill-gold"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </div>
            <div className="pb-2 mt-2 ml-3">
              <h4 className="text-center text-gold font-bebas">Apellez-nous</h4>
              <p className="text-sm">+221 77 104 52 38</p>
              <p className="text-sm">+221 78 516 67 89</p>
            </div>
          </div>
          <div className="flex ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 mt-8 ml-14 fill-gold"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </div>
            <div className="mt-2 ml-3">
              <h4 className="text-center text-gold font-bebas">Email</h4>
              <p className="text-sm">bodiandiara@gmail.com</p>
            </div>
          </div>
          <div className="flex ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-5 h-5 mt-10 ml-14 fill-gold"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
              </svg>
            </div>
            <div className="mt-2 ml-3">
              <h4 className="text-center text-gold font-bebas">Emplacement</h4>
              <p className="text-sm">
                Hlm Grand Yoff prés de l’hopital Américain
              </p>
              <p className="text-sm">Virage Yoff prés de la banque BICIS</p>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 bg-fonce">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[350px_300px_400px]">
            <div className="w-3/4 mt-6 ml-28">
              <a href="/">
                <img className="h-16 mt-6" src="images/LOGO.PNG" alt="logo" />
              </a>

              <p className="text-sm mt-6">
                <strong>DIARRA’B</strong> est une boutique de vente en ligne
                spécialisée dans la confection et la vente de tenues chiques et
                descentes pour femmes et enfants. Nous mettons à votre
                disposition une large gamme de tenues modernes, confortables,
                colorées et stylées avec qualité mais surtout à petit prix.
              </p>
            </div>
            <div className="mt-16 ml-44">
              <h4 className="font-extrabold font-bebas">Liens Utiles</h4>
              <div className="">
                <ul className="mt-4">
                  <li className="mt-4">
                    <a href="/connexion">Mon compte</a>
                  </li>
                  <li className="mt-2">
                    <a href="/connexion">Mes commandes</a>
                  </li>
                  <li className="mt-2">
                    <a href="/cart">Mon panier</a>
                  </li>
                  <li className="mt-2">
                    <a href="/boutique">Boutique</a>
                  </li>
                  <li className="mt-2">
                    <a>Service client</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-16 ml-48 ">
              <h4 className="font-extrabold font-bebas">Retrouvez nous sur</h4>
              <div className="flex mt-2">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-5 h-5 mt-2  "
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                </a>

                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 mt-2 ml-8"
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 mt-2 ml-8"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </a>
              </div>
              <div className="md:max-w-md lg:col-span-2">
                <h4 className="w-full mt-6 font-bebas text-base font-bold tracking-wide text-dark">
                  Abonnez-vous à notre newsletter
                </h4>
                <form className="flex flex-col mt-4  md:flex-row">
                  <input
                    placeholder="Entrer votre email"
                    required=""
                    type="text"
                    className="flex-grow h-8 max-w-[250px] px-2 mb-3 transition duration-200 bg-white border border-gray-300 shadow-sm appearance-none md:mr-0 md:mb-0 "
                  />
                  <button
                    type="submit"
                    className="inline-flex font-bebas max-w-[70px] items-center justify-center h-8 px-6 font-medium tracking-wide text-white transition duration-200 bg-black shadow-md"
                  >
                    S'abonner
                  </button>
                </form>
              </div>
              <div className="md:max-w-md lg:col-span-2">
                <h4 className="w-full font-bebas mt-6 text-base font-bold tracking-wide text-dark">
                  Nous acceptons
                </h4>
                <div className="flex mt-4">
                  <a>
                    <img
                      src="images/wave.png"
                      alt="wave"
                      className="w-6 rounded-full"
                    ></img>
                  </a>
                  <a>
                    <img
                      src="images/om.png"
                      alt="OM"
                      className="w-6 ml-8"
                    ></img>
                  </a>
                  <a>
                    <img
                      src="images/MasterCard_Logo.svg.webp"
                      alt="MasterCard"
                      className="h-6 ml-8 "
                    ></img>
                  </a>
                  <a>
                    <img
                      src="images/paypal.jpg"
                      alt="paypal"
                      className="w-6 ml-8 rounded-full "
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center pt-6 mt-4 font-sans text-sm bg-peps">
            <span className="mb-2 dark:text-black">
              © Copyright 2022 Seegah.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
