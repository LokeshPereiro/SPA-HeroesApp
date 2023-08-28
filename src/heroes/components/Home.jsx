import React from "react";
import wallpaper from "../../../public/assets/imgs/marveldc_wallpaper.jpg";

export const Home = () => {
  return (
    <div className="home_wallpaper">
      <img src={wallpaper} alt="marvel dc heros wallpaper" />
      <h3>Welcome to home page</h3>
    </div>
  );
};
