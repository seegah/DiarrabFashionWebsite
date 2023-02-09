import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DataContext } from "../store/GlobalState";
import Cookies from "js-cookie";

function Header() {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active ";
    } else {
      return "";
    }
  };
  const handleLogout = () => {
    Cookies.remove("refreshToken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Déconnecté" } });
  };
  const loggedRouter = () => {
    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
      setShowOptions(!showOptions);
    };

    return (
      <li className="flex py-2 px-3 font-bold text-black rounded md:hover:bg-transparent -mt-3 dark:text-black  dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
        <div className="relative inline-block text-left">
          <div>
            <button
              onClick={handleClick}
              id="dropdownAvatarNameButton"
              data-dropdown-toggle="dropdownAvatarName"
              className="flex items-center text-sm font-medium text-black rounded-full border border:bg-beige dark:text-black"
              type="button"
            >
              <img
                className="w-6 h-6 mr-1 rounded-full"
                src={auth.user.avatar}
                alt={auth.user.avatar}
              />
              <svg
                className="w-5 h-5 mr-2 mt-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {showOptions && (
            <div
              className="absolute -right-10 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <Link href="#" legacyBehavior>
                  <a
                    className=" flex text-black px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    <img
                      src={auth.user.avatar}
                      alt={auth.user.avatar}
                      className="h-5 w-5 mr-3"
                    />
                    {auth.user.name}
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a
                    className=" flex text-black px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    Profile
                  </a>
                </Link>
                <Link>
                  <a
                    href="#"
                    className=" flex text-black px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-5 h-5 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Paramètres
                  </a>
                </Link>

                <button
                  onClick={handleLogout}
                  href="#"
                  className=" flex text-black px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  <svg
                    className="h-5 w-5 mr-3"
                    focusable="false"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="PowerSettingsNewIcon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 3h-2v10h2V3zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
                    ></path>
                  </svg>
                  Déconnexion
                </button>
              </div>
            </div>
          )}
        </div>
      </li>
    );
  };

  return (
    <>
      <nav className="sticky top-0 bg-gold px-2 sm:px-4 py-2 z-10  dark:bg-gold">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <img
                src="images/logo.png"
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
            </a>
          </Link>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col  font-nova p-3 mt-4 bg-gray-50 md:flex-row md:space-x-10 md:mt-0 md:text-base md:font-medium md:bg-white dark:bg-gold md:dark:bg-gold ">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="block py-2 px-3 font-bold text-black rounded hover:bg-beige md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700  md:dark:hover:bg-transparent">
                    Accueil
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/boutique" legacyBehavior>
                  <a className="block py-2 px-3 font-bold text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black md: dark:hover:bg-gray-700  md:dark:hover:bg-transparent">
                    Boutique
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="block py-2 px-3 font-bold text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700  md:dark:hover:bg-transparent">
                    A propos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="block py-2 px-3 font-bold text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700  md:dark:hover:bg-transparent">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/boutique" legacyBehavior>
                  <a className="block py-1 px-3 font-bold text-black rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700  md:dark:hover:bg-transparent">
                    <form method="GET">
                      <div className="relative -top-1 text-black focus-within:text-black">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
                          <button
                            type="submit"
                            className="p-1 focus:outline-none "
                          >
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                              className="w-4 h-4"
                            >
                              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                          </button>
                        </span>
                        <input
                          type="search"
                          name="q"
                          className="py-1 pl-10 placeholder-black text-xs border rounded-md focus:outline-none bg-gold"
                          placeholder="Rechercher..."
                        />
                      </div>
                    </form>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/cart" legacyBehavior>
                  <a
                    className={
                      "flex py-2 px-3 font-bold text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700  md:dark:hover:bg-transparent" +
                      isActive("/cart")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    {""}
                    <span className="ml-1">Panier</span>
                  </a>
                </Link>
              </li>
              {Object.keys(auth).length === 0 ? (
                <li>
                  <Link href="/connexion" legacyBehavior>
                    <a
                      className={
                        "flex py-2 px-3 font-bold text-black rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700 md:dark:hover:bg-transparent" +
                        isActive("/connexion")
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                      {""}
                      <span className="ml-1">Connexion</span>
                    </a>
                  </Link>
                </li>
              ) : (
                loggedRouter()
              )}
            </ul>
          </div>
        </div>
      </nav>

      <nav className="sticky flex items-center text-white shadow-md bg-beige top-16 py-0 z-[2]">
        <div className="text-base font-bold mx-auto">
          <ul className="flex items-center">
            <li className="p-1.5 duration-200 border-b-2 border-black border-opacity-0 cursor-pointer hover:text-black">
              <Link href="/categorie-produit/new" legacyBehavior>
                <a>New</a>
              </Link>
            </li>
            <li className="p-1.5 ml-6 duration-200 border-b-2 border-black border-opacity-0 cursor-pointer hover:text-black">
              <Link href="/categorie-produit/abaya" legacyBehavior>
                <a>Abaya</a>
              </Link>
            </li>
            <li className="p-1.5 ml-6 duration-200 border-b-2 border-black border-opacity-0 cursor-pointer hover:text-black">
              <Link href="/categorie-produit/boubou" legacyBehavior>
                <a>Boubou</a>
              </Link>
            </li>
            <li className="p-1.5 ml-6 duration-200 border-b-2 border-black border-opacity-0 cursor-pointer hover:text-black">
              <Link href="/categorie-produit/tunique" legacyBehavior>
                <a>Tunique</a>
              </Link>
            </li>
            <li className="p-1.5 ml-6 duration-200 border-b-2 border-black border-opacity-0 cursor-pointer hover:text-black">
              <Link href="/categorie-produit/ensemble" legacyBehavior>
                <a>Ensemble</a>
              </Link>
            </li>
            <li className="p-1.5 ml-6 duration-200 border-b-2 border-black border-opacity-0 cursor-pointer hover:text-black">
              <a href="categorie-produit/kimono">Kimono</a>
            </li>
            <li className="p-1.5 ml-6 duration-200 border-b-2 border-black border-opacity-0 cursor-pointer hover:text-black">
              <Link href="/categorie-produit/vente-flash" legacyBehavior>
                <a>Vente Flash</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
