import { createRoot } from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HeroesApp } from "./HeroesApp";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <HeroesApp></HeroesApp>
    </BrowserRouter>
);
