import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Question from "../components/Question";

const contact = () => {
  const initial = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [contactData, setContactData] = useState(initial);
  const { firstName, lastName, email, phone, message } = contactData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, phone, message);
    const data = { firstName, lastName, email, phone, message };

    fetch("http://localhost:3000/api/postContact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  return (
    <div>
      <Head>
        <title>Page de Contact</title>
      </Head>
      {/* <Question /> */}
      <div>
        <section className="text-black">
          <div className=" py-2 mx-36">
            <div className="flex text-center my-6">
              <h1 className="text-3xl font-bold text-left font-bebas text-black  after:bg-gold after:absolute after:-bottom-[3.1rem] after:h-[3px] after:w-12 after:-ml-32 before:bg-fonce before:w-10 before:absolute before:h-[3px] before:-mt-1.5 before:-ml-6">
                Contactez-nous
              </h1>
              <Link href="/whatsapp">
                <button type="button" className="ml-[470px] h-10 w-10">
                  <img
                    className="h-10 w-10 "
                    src="images/logo_whatsapp.png"
                    alt="whatsapp"
                  />
                </button>
              </Link>
            </div>
            <div className="p-1 mx-1 rounded-sm shadow-xs max-w-2xl">
              <form onSubmit={handleSubmit}>
                <div className="grid xl:grid-cols-2 xl:gap-4 max-w-2xl">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={handleChange}
                    className=" block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Prénom"
                    required={true}
                  />

                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={handleChange}
                    className=" block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Nom"
                    required=""
                  />
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-4 max-w-2xl">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    className=" block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email "
                    required={true}
                  />
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={handleChange}
                    className=" block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Mobile "
                    required={true}
                  />
                </div>

                <div className="flex justify-center max-w-2xl">
                  <label htmlFor="message"></label>
                  <textarea
                    className=" h-28 block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    placeholder="Message"
                    required={true}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="text-black bg-gold max-w-2xl font-bold font-bebas rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-gold dark:hover:bg-fonce mb-6"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* <div>
        <section className="text-black">
          <div className=" py-2 mx-36">
            <div className="flex text-center my-6">
              <h1 className="text-3xl font-bold text-left font-bebas text-black  after:bg-gold after:absolute after:bottom-[28rem] after:h-[3px] after:w-12 after:-ml-32 before:bg-fonce before:w-10 before:absolute before:h-[3px] before:-mt-1.5 before:-ml-6">
                Retrouvez-nous sur
              </h1>
            </div>
            <div className="flex ml-16">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-3 py-3 bg-[#1877f2] mb-10 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </button>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-3 py-3 ml-28 rounded-full bg-[#c13584] mb-10 text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </button>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-3 py-3 ml-28 rounded-full bg-[#1da1f2] mb-10 text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default contact;
