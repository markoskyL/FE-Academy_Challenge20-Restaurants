import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import restaurantDataContext from "../../contexts/restaurantContext";
import { RestaurantProps } from "../../interfaces/restaurantProps";
import "./CuisinesLinks.scss";
export const CuisinesLinks = () => {
  const { restaurants } = useContext(restaurantDataContext);
  const types = getRestaurantTypes(restaurants);

  return (
    <div className="cuisines-types-wrapper">
      {types.map((type, i) => (
        <Link to={`cuisines/${type}`} className="r-type" key={type + i}>
          {type}
        </Link>
      ))}
    </div>
  );
};

export function getRestaurantTypes(arr: RestaurantProps[]) {
  const allTypes = arr.map((res) => res.restauranttype);
  const uniqueTypes = Array.from(new Set(allTypes));
  return uniqueTypes;
}
