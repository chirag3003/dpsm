import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Index({ images = [] }) {
    return (
        <div className={"w-full p-3"}>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {images.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div
                                className="image w-full h-52 lg:h-80  rounded-lg bg-red-50 bg-cover bg-center"
                                style={{ backgroundImage: `url("${image.src}")` }}
                            ></div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Index;
