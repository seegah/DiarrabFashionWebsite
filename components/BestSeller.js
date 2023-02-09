import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import { Rating } from "@mui/material";
import { Stack } from "@mui/material";

function BestSeller() {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={5}
        spaceBetween={25}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-navigation-size": "1.5rem",
        }}
      >
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image1.jpg"
              alt="tof1"
            />
          </div>
          <div className="mt-1">
            <h4 className="font-nova ml-4 font-semibold">Kimono</h4>
            <p className="text-sm ml-4 font-nova">Ayce Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              25000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image2.jpg"
              alt="tof2"
            />
          </div>
          <div className="mt-1">
            <h4 className="font-nova ml-4 font-semibold">Ensemble</h4>
            <p className="text-sm ml-4 font-nova">Adama Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              25000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image3.jpg"
              alt="tof3"
            />
          </div>
          <div className="mt-1">
            <h4 className="font-nova ml-4 font-semibold">Robe</h4>
            <p className="text-sm ml-4 font-nova">Astou Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              25000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image4.jpg"
              alt="tof4"
            />
          </div>
          <div className="mt-1">
            <h4 className="font-nova ml-4 font-semibold">Boubou</h4>
            <p className="text-sm ml-4 font-nova">Adja Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              60000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image5.jpeg"
              alt="tof5"
            />
          </div>
          <div className="mt-1">
            <h4 className="font-nova ml-4 font-semibold">Robe</h4>
            <p className="text-sm ml-4 font-nova">Awa Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              25000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image6.jpg"
              alt="tof6"
            />
          </div>
          <div className="items-center">
            <h4 className="font-nova ml-4 font-semibold">Ensemble</h4>
            <p className="text-sm ml-4 font-nova">Nabila Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              30000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image7.jpeg"
              alt="tof7"
            />
          </div>
          <div className="mt-1">
            <h4 className="font-nova ml-4 font-semibold">Ensemble</h4>
            <p className="text-sm ml-4 font-nova">Nana Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              35000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image8.jpg"
              alt="tof8"
            />
          </div>
          <div className="mt-1">
            <h4 className="font-nova ml-4 font-semibold">Ensemble</h4>
            <p className="text-sm ml-4 font-nova">Yaye Diarra Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              25000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image17.jpg"
              alt="tof9"
            />
          </div>
          <div className="mt-1">
            <h4 className="font-nova ml-4 font-semibold">Kimono</h4>
            <p className="text-sm ml-4 font-nova">Oumou Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              22000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image10.jpeg"
              alt="tof10"
            />
          </div>
          <div className="mt-1">
            <h4 className="font-nova ml-4 font-semibold">Robe</h4>
            <p className="text-sm ml-4 font-nova">Rokhaya Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              25000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image18.jpg"
              alt="tof18"
            />
          </div>
          <div className="mt-1">
            <h4 className="font-nova ml-4 font-semibold">Ensemble</h4>
            <p className="text-sm ml-4 font-nova">Moona Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              20000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image16.jpg"
              alt="tof16"
            />
          </div>
          <div className="items-center">
            <h4 className="font-nova ml-4 font-semibold">Kimono</h4>
            <p className="text-sm ml-4 font-nova">Dieyna Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              25000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image13.jpeg"
              alt="tof11"
            />
          </div>
          <div className="items-center">
            <h4 className="font-nova ml-4 font-semibold">Kimono</h4>
            <p className="text-sm ml-4 font-nova">Dieyna Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              25000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image12.jpeg"
              alt="tof12"
            />
          </div>
          <div className="items-center">
            <h4 className="font-nova ml-4 font-semibold">Kimono</h4>
            <p className="text-sm ml-4 font-nova">Dieyna Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              25000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-64"
              src="images/bestSeller/image15.jpg"
              alt="tof15"
            />
          </div>
          <div className="items-center">
            <h4 className="font-nova ml-4 font-semibold">Kimono</h4>
            <p className="text-sm ml-4 font-nova">Dieyna Set</p>
          </div>
          <div className="mt-1">
            <Stack spacing={0.5}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
                className="ml-4  text-gold"
              />
            </Stack>
            <p className="text-sm font-nova ml-4 mt-1">
              25000,00
              <span>CFA</span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BestSeller;
