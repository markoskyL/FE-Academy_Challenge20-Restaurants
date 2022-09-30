import React, { useContext, useEffect, useState } from "react";
import restaurantDataContext from "../../contexts/restaurantContext";
import { getTop10Restaurants } from "../../helpers/getTop10Restaurants";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";

export const TopRestaurants = () => {
  const { restaurants } = useContext(restaurantDataContext);
  const [topRestaurants, setTopRestaurants] = useState(
    getTop10Restaurants(restaurants)
  );

  useEffect(() => {
    setTopRestaurants(getTop10Restaurants(restaurants));
  }, [restaurants]);

  return (
    <div className="most-popular-restaurants restaurants-wrapper">
      {topRestaurants.map((res) => (
        <RestaurantCard className={""} {...res} key={res.id} />
      ))}
    </div>
  );
};

