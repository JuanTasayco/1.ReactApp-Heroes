import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HeroesApp } from "./HeroesApp";

createRoot(document.getElementById("root")!).render(<HeroesApp></HeroesApp>);
