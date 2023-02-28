import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPage, DCPage, SearchPage, ErrorPage } from "../pages";
import { Home, HeroInfo } from "../components";
import { NavBar } from "../../ui";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:heroId" element={<HeroInfo />} />

          <Route path="/" element={<Home />} />
          <Route path="/err" element={<ErrorPage />} />
          <Route path="/*" element={<Navigate to="/err" />} />
        </Routes>
      </div>
    </>
  );
};
