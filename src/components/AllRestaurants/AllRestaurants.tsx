import React, { useContext, useEffect, useState } from "react";
import restaurantDataContext from "../../contexts/restaurantContext";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";

export const AllRestaurants = () => {
  const { restaurants } = useContext(restaurantDataContext);
  const [allRestaurants, setAllRestaurants] = useState(restaurants);

  useEffect(() => {
    setAllRestaurants(restaurants);
  }, [restaurants]);

  return (
    <div className="restaurants-wrapper">
      {allRestaurants.map((res) => (
        <RestaurantCard className={""} {...res} key={res.id} />
      ))}
    </div>
  );
};
