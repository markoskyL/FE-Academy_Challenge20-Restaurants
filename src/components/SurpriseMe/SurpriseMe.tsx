import React, { useContext } from "react";
import restaurantDataContext from "../../contexts/restaurantContext";
import getRandomInt from "../../helpers/getRandomInt";
import { useNavigate } from "react-router-dom";
import { GreenButton } from "../GreenButton/GreenButton";

export const SurpriseMe: React.FC = () => {
  const { restaurants } = useContext(restaurantDataContext);
  const restaurantsIDs = restaurants.map((res) => res.id);
  const navigate = useNavigate();

  const handleClick = () => {
    const randomIndex = getRandomInt(0, restaurantsIDs.length) - 1;
    const randomRestaurant = restaurants[randomIndex];
    const randomId = randomRestaurant.id;
    navigate(`/detail/${randomId}`, { replace: true });
  };
  return (
    <GreenButton
      text={"Surprise Me"}
      handleClick={handleClick}
      type={"button"}
      disabled={false}
    />
  );
};
