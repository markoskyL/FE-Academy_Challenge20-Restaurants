import React, { useContext, useEffect, useState } from "react";
import "./RestaurantCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { RestaurantCardProps } from "../../interfaces/restaurantCardProps";
import { useNavigate } from "react-router-dom";
import getRating from "../../helpers/getRating";
import { favoritesDataContext } from "../../contexts/favoritesContext";
import { setFavoriteState } from "../../helpers/setFavoriteState";
import { deleteFavoriteState } from "../../helpers/deleteFavoriteState";
import { getFavoriteState } from "../../helpers/getFavoriteState";

export const RestaurantCard: React.FC<RestaurantCardProps> = (props) => {
  const { favorites, handleSetFavorites } = useContext(favoritesDataContext);
  const [favorite, setFavorite] = useState<Boolean>(
    getFavoriteState(favorites, props.id)
  );

  useEffect(() => {
    setFavorite(getFavoriteState(favorites, props.id));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const navigate = useNavigate();

  const handleClick = (e: any) => {
    const element = e.target as HTMLElement;
    if (element.tagName === "svg" || element.tagName === "path") {
      if (!favorite) {
        setFavoriteState(favorites, handleSetFavorites, props.id);
      } else {
        deleteFavoriteState(favorites, handleSetFavorites, props.id);
      }
    } else {
      navigate(`/detail/${props.id}`, { replace: true });
    }
  };

  return (
    <div
      className={`restaurant-card ${props.className}`}
      onClick={(e) => handleClick(e)}
    >
      <FontAwesomeIcon
        icon={!favorite ? faHeartRegular : faHeart}
        className="r_heart"
      />
      <div className="image-wrapper">
        <img src={props.image} alt="restaurant" />
      </div>
      <div className="restaurant-details">
        <h3 className="r_title">{props.businessname}</h3>
        <h4 className="r_type">{props.restauranttype}</h4>
        {props.reviews !== 0 && (
          <>
            <p className="r_rating">rating: - {getRating(props)} </p>
            <p className="r_reviews">based of {props.reviews} reviews</p>
          </>
        )}
      </div>
    </div>
  );
};