import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import restaurantDataContext from "../../contexts/restaurantContext";
import "./CuisinesPage.scss";
import { getRestaurantTypes } from "../../components/CuisinesLinks/CuisinesLinks";
import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";

export const CuisinesPage: React.FC = () => {
  const { restaurants } = useContext(restaurantDataContext);
  const { type } = useParams();
  const [types, setTypes] = useState(getRestaurantTypes(restaurants));
  const [currentType, setCurrentType] = useState(
    types.find((rType) => rType === type)
  );
  useEffect(() => {
    setTypes(getRestaurantTypes(restaurants));
    setCurrentType(types.find((rType) => rType === type));
  }, [restaurants]);

  if (currentType) {
    const filteredRestaurants = restaurants.filter(
      (res) => res.restauranttype === currentType
    );

    return (
      <>
        <h2>{currentType.toUpperCase()} RESTAURANTS</h2>
        <div className="restaurants-wrapper">
          {filteredRestaurants.map((res) => (
            <RestaurantCard className={""} {...res} key={res.id} />
          ))}
        </div>
      </>
    );
  } else {
    return <Navigate to={"/"} />;
  }
};
