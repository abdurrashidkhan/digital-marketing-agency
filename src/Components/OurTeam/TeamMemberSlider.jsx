"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
// image improt
import Image from "next/image";
import image1 from "../../images/team/1.jpg";
import image2 from "../../images/team/2.jpg";
import image3 from "../../images/team/3.jpg";
import image4 from "../../images/team/4.jpg";
import image5 from "../../images/team/5.jpg";
import image6 from "../../images/team/6.jpg";
const teamMeat = [
  { name: "tonny", post: "seo expert", img: image1 },
  { name: "tonny", post: "seo expert", img: image2 },
  { name: "tonny", post: "seo expert", img: image3 },
  { name: "tonny", post: "seo expert", img: image4 },
  { name: "tonny", post: "seo expert", img: image5 },
  { name: "tonny", post: "seo expert", img: image6 },
];
// console.log(teamMeat.length);
export default function TeamMemberSlider() {
  return (
    <div>
      <div className="">
        <Swiper
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              // width: 768,
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          loop={true}
          freeMode={true}
          pagination={{
            clickable: false,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {teamMeat.map((t) => (
            <SwiperSlide key={t.img}>
              <div className="bg-[#fff] shadow-2xl">
                <div className="">
                  <Image
                    className="mx-auto rounded-t shadow-2xl"
                    loading="lazy"
                    // placeholder="blur"
                    src={t.img}
                    width={"100%"}
                    height={"auto"}
                    alt="Picture of the author"
                  />
                </div>
                <div className="py-4 text-start px-3">
                  <h1 className="capitalize">Name : {t.name}</h1>
                  <p className="text-sm font-semibold capitalize">
                    Job Title : {t.post}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
