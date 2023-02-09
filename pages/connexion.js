import Head from "next/head";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Connexion = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUseData] = useState(initialState);
  const { email, password } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUseData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/login", userData);

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    dispatch({ type: "NOTIFY", payload: { success: res.msg } });

    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookies.set("refreshToken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    });
    localStorage.setItem("firstLogin", true);
  };
  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);

  return (
    <div className="font-nova">
      <Head>
        <title>Page de Connexion</title>
      </Head>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-8 mb-8">
        <div className="w-full bg-gris rounded-none shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-none">
          <div className="p-6 space-y-3 md:space-y-3 sm:p-6">
            <h1 className="text-2xl text-center font-bold font-bebas leading-tight tracking-tight text-black md:text-2xl dark:text-black">
              Se connecter à votre compte🔐
            </h1>
            <form
              className="space-y-3 md:space-y-3"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gris text-black sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-white dark:border-gris dark:placeholder-gray-400 dark:text-black dark:focus:ring-fonce dark:focus:border-fonce"
                  placeholder=""
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  className="bg-gray-50 border border-gris text-black sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-white dark:border-gris dark:placeholder-gray-400 dark:text-black dark:focus:ring-fonce dark:focus:border-fonce"
                  value={password}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="font-light text-black dark:text-black"
                    >
                      Se souvenir de moi
                    </label>
                  </div>
                </div>
                <Link href="#" legacyBehavior>
                  <a className="font-medium text-sm font-nova hover:underline hover:text-gold dark:text-primary-500">
                    Mot de passe oublié?
                  </a>
                </Link>
              </div>
              <button
                type="submit"
                className="w-full font-bebas text-black bg-gris hover:bg-fonce focus:ring-2 focus:outline-none  font-bold rounded-md text-md px-2 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-black"
              >
                Se connecter
              </button>
              <p className="text-sm font-light text-black dark:text-black">
                Pas de compte?{" "}
                <Link href="/inscription" legacyBehavior>
                  <a className="font-semibold font-nova text-black hover:underline dark:text-black hover:text-gold">
                    S'inscrire
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Connexion;
