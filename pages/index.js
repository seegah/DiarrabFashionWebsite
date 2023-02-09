import Head from "next/head";
import React from "react";
import BestSeller from "../components/BestSeller";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

function Home() {
  return (
    <div>
      <Head>
        <title>DIARRA'B FASHION SHOP</title>
      </Head>
      <div>
        <div className=" mt-4 grid grid-cols-[780px_1fr] gap-4 h-[600px] max-w-screen-lg mr-auto ml-auto ">
          <div className="">
            <Swiper
              style={{
                "--swiper-navigation-color": "black",
                "--swiper-navigation-size": "1rem",
              }}
              className="w-full"
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <SwiperSlide>
                <img
                  src="images/carousel/chic.jpg"
                  alt="banner2"
                  className="h-[600px] w-full"
                />
                <div className="absolute top-[45%] left-[15rem] text-white text-center w-[250px]">
                  <h3 className="italic font-nova text-sm">
                    Hello la famille !
                  </h3>
                  <h2 className="text-4xl font-bebas mt-3">
                    <strong>Bienvenue sur le site DIARRA'b FASHION SHOP</strong>
                  </h2>
                  <a href="/about">
                    <button className="text-black font-bebas font-bold px-6 mt-6 p-[6px] bg-gold">
                      Nous découvrir
                    </button>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="images/carousel/clau.jpg"
                    alt="banner1"
                    className="h-[600px] w-full "
                  />
                </div>
                <div className="absolute top-[45%] left-[15rem] text-white text-center w-[250px]">
                  <h3 className="italic text-nova text-xs">
                    Tout ce dont vous avez besoin pour
                  </h3>
                  <h2 className="text-4xl font-bebas mt-3">
                    <strong>Créer un lokk parfait à bas prix.</strong>
                  </h2>
                  <a href="/boutique">
                    <button className="text-black font-bebas font-bold px-6 mt-6 p-[6px] bg-gold">
                      commander
                    </button>
                  </a>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="images/carousel/fatima.jpg"
                  alt="banner3"
                  className="h-[600px] w-full"
                />
                <div className="absolute top-[38%] left-[15rem] text-white text-center w-[250px]">
                  <h3 className="italic text-xs font-nova">
                    Facilité votre style avec notre
                  </h3>
                  <h2 className="text-4xl font-bebas mt-3">
                    <strong>Changement de garde robe.</strong>
                  </h2>
                  <a href="/about">
                    <button className="text-black font-bebas font-bold px-5 mt-6 p-1 bg-gold">
                      découvrir
                    </button>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="h-[600px] relative">
            <div className="relative h-[280px]">
              <img
                className="w-full h-[280px]"
                src="images/carousel/tunique.jpg"
                alt="ima2"
              />
              <div className="top-[-160px] relative left-[2.3rem] text-white text-center w-[150px]">
                <h2 className="text-2xl font-bebas mt-1">
                  <strong>Nos ensembles</strong>
                </h2>

                <a href="/product/ensemble">
                  <button className="text-black font-bebas font-bold px-4 mt-2 p-[0.05rem] text-sm bg-gold">
                    découvrir
                  </button>
                </a>
              </div>
            </div>
            <div className="relative mt-4 h-[304px]">
              <img
                className="w-full h-[304px]"
                src="images/carousel/koko.jpg"
                alt="mima"
              />
            </div>
            <div className=" relative top-[-165px] left-[2.3rem] text-white text-center w-[150px]">
              <h3 className="italic text-xs">Découvrez nos</h3>
              <h2 className="text-2xl font-bebas mt-1">
                <strong>tenues kokodunda</strong>
              </h2>
              <h3 className="italic font-nova text-xs">
                Disponible à moindre cout
              </h3>
              <a href="/a-propos">
                <button className="text-black font-bebas font-bold px-4 mt-2 p-[0.05rem] text-sm bg-gold">
                  découvrir
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg mb-6 mt-3 px-4 ml-auto mr-auto relative ">
          <h3 className="flex items-center justify-start ">
            <span className="font-bebas text-2xl">Nos meilleures ventes</span>
            <b className="h-2 bg-fonce"></b>
            <a className="ml-auto font-nova text-sm" href="/boutique">
              Voir tout
            </a>

            <svg
              className="h-2 ml-2 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </h3>
        </div>
        <div className="max-w-screen-lg mr-auto ml-auto mb-6">
          <BestSeller />
        </div>
      </div>
    </div>
  );
}

export default Home;
