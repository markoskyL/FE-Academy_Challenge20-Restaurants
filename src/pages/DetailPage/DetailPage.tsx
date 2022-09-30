import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import restaurantDataContext from "../../contexts/restaurantContext";
import getRating from "../../helpers/getRating";
import "./DetailPage.scss";
import { ReviewForm } from "./ReviewForm/ReviewForm";
import { ReviewPost } from "./ReviewPost/ReviewPost";

export const DetailPage = () => {
  const { id } = useParams();
  const { restaurants } = useContext(restaurantDataContext);
  const [restaurantData, setRestaurantData] = useState(
    restaurants.find((res) => res.id === id)
  );
  useEffect(() => {
    setRestaurantData(restaurants.find((res) => res.id === id));
  }, [restaurants]);

  if (restaurantData && id) {
    return (
      <div className="details-page">
        <h2>{restaurantData.businessname.toUpperCase()}</h2>
        <div className="detail-restaurant">
          <img
            src={restaurantData.image}
            alt="restaurant"
            className="detail-img"
          />
          <div className="details-wrapper">
            <p className="detail-rating">rating: {getRating(restaurantData)}</p>
            <p className="detail-reviews">
              <em>based on {restaurantData.reviews} reviews</em>
            </p>
            <p className="detail-phone">{restaurantData.phone}</p>
            <p className="detail-email">{restaurantData.email}</p>
            <p className="detail-address">{restaurantData.address}</p>
            {restaurantData.parkinglot && (
              <p className="parking">We have a parking lot waiting for you.</p>
            )}
          </div>
        </div>
        {restaurantData.reviewsList.length !== 0 && (
          <>
            <h2>REVIEWS</h2>
            {restaurantData.reviewsList.map((review) => (
              <ReviewPost {...review} key={(restaurantData.id, review.id)} />
            ))}
          </>
        )}
        <ReviewForm id={id} restaurant={restaurantData} />
      </div>
    );
  } else {
    return <Navigate to={"/"} />;
  }
};
