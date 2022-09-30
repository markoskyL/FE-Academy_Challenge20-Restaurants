import React, { useContext, useEffect, useState } from "react";
import "./FavoritesPage.scss";
import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";
import { favoritesDataContext } from "../../contexts/favoritesContext";
import restaurantDataContext from "../../contexts/restaurantContext";
import "./FavoritesPage.scss";

export const FavoritesPage = () => {
  const { favorites } = useContext(favoritesDataContext);
  const { restaurants } = useContext(restaurantDataContext);
  const [favRestaurants, setFavRestaurants] = useState(getFavRestaurants);

  function getFavRestaurants() {
    if (favorites) {
      const favoriteRestaurants = restaurants.filter(
        (res) => res.id === favorites.find((id) => id === res.id)
      );
      return favoriteRestaurants;
    }
  }
  useEffect(() => {
    setFavRestaurants(getFavRestaurants);
  }, [favorites]);

  return (
    <div className="favorite-page">
      <h2>YOUR FAVORITE RESTAURANTS</h2>
      <div className="favorite-restaurants">
        {favRestaurants?.map((res) => (
          <RestaurantCard className={"fav-card"} {...res} key={res.id} />
        ))}
      </div>
    </div>
  );
};
