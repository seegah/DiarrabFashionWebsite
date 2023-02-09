import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import valid from "../utils/valid";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import { useRouter } from "next/router";

const Register = () => {
  const initialState = { name: "", email: "", password: "", cf_password: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register", userData);

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);

  return (
    <div>
      <Head>
        <title>Page d'inscription</title>
      </Head>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-2 mb-8">
        <div className="w-full bg-gris rounded-none shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-none">
          <div className="p-6 space-y-3 md:space-y-3 sm:p-6">
            <h1 className="text-2xl text-center font-bold font-bebas leading-tight tracking-tight text-black md:text-2xl dark:text-black">
              Créer un compte
            </h1>
            <form
              className="space-y-3 md:space-y-3"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gris text-black sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-white dark:border-gris dark:placeholder-gray-400 dark:text-black dark:focus:ring-fonce dark:focus:border-fonce"
                  placeholder=""
                  value={name}
                  onChange={handleChangeInput}
                />
              </div>
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
              <div>
                <label
                  htmlFor="cf_password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Confirmer mot de passe
                </label>
                <input
                  type="password"
                  name="cf_password"
                  id="cf_password"
                  placeholder=""
                  className="bg-gray-50 border border-gris text-black sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5 dark:bg-white dark:border-gris dark:placeholder-gray-400 dark:text-black dark:focus:ring-fonce dark:focus:border-fonce"
                  value={cf_password}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />{" "}
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-black"
                  >
                    J'accepte les{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline hover:text-gold dark:text-primary-500"
                      href="#"
                    >
                      Conditions Générales d'utilisation
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full font-bebas text-black bg-gris hover:bg-fonce focus:ring-2 focus:outline-none  font-bold rounded-md text-md px-2 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-black"
              >
                S'inscrire
              </button>
              <p className="text-sm font-light text-black dark:text-black">
                Vous avez déjà un compte?{" "}
                <Link href="/connexion" legacyBehavior>
                  <a className="font-semibold text-black hover:underline dark:text-black hover:text-gold">
                    Se connecter
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
export default Register;
