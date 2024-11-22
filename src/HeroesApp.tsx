import Navbar from "./heroes/components/Navbar";
import { HeroeList } from "./heroes/pages/HeroeList";

export const HeroesApp = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroeList></HeroeList>
    </>
  );
};
