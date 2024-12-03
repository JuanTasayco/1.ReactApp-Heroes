/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import SwiperApp from "../../swiper/SwiperApp";
import { CardDescription } from "../components/CardDescription";
import { useHero } from "../hooks/useHero";


export const HeroeList = () => {
  const { respHeroe } = useHero();
  const { heroes } = respHeroe;

  const [dataSliderDC, setDataSliderDC] = useState(null)
  const [dataSliderMarvel, setDataSliderMarvel] = useState(null)

  const getDatSlider = (data: any) => {
    if (data.publisher === "DC Comics") {
      setDataSliderDC(data);
    } else {
      setDataSliderMarvel(data);
    }
  }

  return (
    <>
      <div className="container mt-md-5">
        <div className="row gy-5">
          <div className="col-12">
            <div className="row m-auto">
              <h1 className="fs-1">Dc Comics</h1>
              <div className="col-md-6 text-white">
                <CardDescription dataHeroe={dataSliderDC}></CardDescription>
              </div>
              <div className="col-md-6">
                <SwiperApp dataArray={heroes.filter((hero) => hero.publisher == "DC Comics")} emitCurrentDataSlider={getDatSlider}></SwiperApp>
              </div>
            </div>
          </div>

          <div className="col-12 ">
            <div className="row m-auto">
              <h1 className="fs-1">Marvel</h1>

              <div className="col-md-6">
                <SwiperApp dataArray={heroes.filter((hero) => hero.publisher == "Marvel Comics")} emitCurrentDataSlider={getDatSlider}></SwiperApp>
              </div>
              <div className="col-md-6">
                <CardDescription dataHeroe={dataSliderMarvel}></CardDescription>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

/* primero entregas el array response de heroes al swiperApp, luego este te emite el heroe actual(pos slide actual) */
/* segundo obtienes el heroe actual del slide y lo entregas al card que mostrará la data */