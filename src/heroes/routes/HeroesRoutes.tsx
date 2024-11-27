import { Navigate, Route, Routes } from "react-router";
import Navbar from "../components/Navbar";
import { HeroeList } from "../pages/HeroeList";
import { HeroeCollage } from "../pages/HeroeCollage";
import { SearchHeroe } from "../pages/SearchHeroe";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/collage" element={<HeroeList></HeroeList>}></Route>
        <Route path="/" element={<HeroeCollage />}></Route>
        <Route path="/search" element={<SearchHeroe />}></Route>
        <Route path="*" element={<Navigate to="/search" />}></Route>
      </Routes>
    </>
  );
};
