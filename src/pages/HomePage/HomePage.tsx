import "./HomePage.scss";
import { AllRestaurants } from "../../components/AllRestaurants/AllRestaurants";
import { TopRestaurants } from "../../components/TopRestaurants/TopRestaurants";
import { CuisinesLinks } from "../../components/CuisinesLinks/CuisinesLinks";
import { SurpriseMe } from "../../components/SurpriseMe/SurpriseMe";
import { favoritesDataContext } from "../../contexts/favoritesContext";
import { useContext } from "react";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h2>DON'T KNOW WHAT TO EAT?</h2>
      <SurpriseMe />
      <hr />
      <h2>OUR MOST POPULAR RESTAURANTS</h2>
      <TopRestaurants />
      <hr />
      <h2>CUISINES</h2>
      <CuisinesLinks />
      <hr />
      <h2>ALL RESTAURANTS</h2>
      <AllRestaurants />
    </div>
  );
};
