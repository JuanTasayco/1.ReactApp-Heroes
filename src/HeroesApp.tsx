import { Route, Routes } from "react-router";
import Navbar from "./heroes/components/Navbar";
import { HeroeList } from "./heroes/pages/HeroeList";
import { HeroeCollage } from "./heroes/pages/HeroeCollage";
import { SearchHeroe } from "./heroes/pages/SearchHeroe";

export const HeroesApp = () => {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="collage" element={<HeroeList></HeroeList>}></Route>
        <Route path="/" element={<HeroeCollage />}></Route>
        <Route path="search" element={<SearchHeroe />}></Route>
      </Routes>
    </>
  );
};
