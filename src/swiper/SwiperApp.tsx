/* eslint-disable @typescript-eslint/no-explicit-any */

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles/swiper.styles.css";
import 'swiper/css/effect-fade';


import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import { useState } from "react";

const SwiperApp = ({ dataArray, emitCurrentDataSlider }: { dataArray: any[], emitCurrentDataSlider: any }) => {
    const [initialized, setInitialized] = useState(false);

    const isLoopEnable = dataArray.length > 1;
    const handleInit = () => {
        /* onInit permite saber cuando terminó de iniciar el slider sus conf, esto con el fin de evitar usar el handleSlideChange multiples veces por defecto al inicio */
        setInitialized(true);
    }

    const handleSlideChange = (swiper: any) => {
        if (!initialized) return;
        const activeIndex = swiper.realIndex;
        const currentHero = dataArray[activeIndex]
        emitCurrentDataSlider(currentHero);
    }

    return (
        <>
            <Swiper
                slidesPerView={1}
                effect={'fade'}
                spaceBetween={30}
                loop={isLoopEnable}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[EffectFade, Pagination, Navigation]}
                className="mySwiper rounded text-dark w-100"
                onInit={handleInit}
                onSlideChange={handleSlideChange}
            >
                {dataArray.map((hero, index) => <SwiperSlide key={hero.id + index}>
                    <img className="bg-dark" style={{ objectFit: "contain" }} src={`src/assets/heroesImg/${hero.id}.jpg`} />
                </SwiperSlide>)}
            </Swiper>
        </>
    )
}

export default SwiperApp;