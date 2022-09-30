import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GreenButton } from "../../../components/GreenButton/GreenButton";
import restaurantDataContext from "../../../contexts/restaurantContext";
import { RestaurantProps } from "../../../interfaces/restaurantProps";
import "./ReviewForm.scss";

interface ReviewFormProps {
  id: string;
  restaurant: RestaurantProps;
}
export const ReviewForm: React.FC<ReviewFormProps> = (props) => {
  const [author, setAuthor] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [stars, setStars] = useState<number>(0);
  const [disabledState, setDisabledState] = useState<boolean>(false);
  const { handleSetRestaurants } = useContext(restaurantDataContext);

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setDisabledState(true);
    const reviewsList = props.restaurant.reviewsList;
    const reviewsCount = props.restaurant.reviewsList.length;
    const newReviewId = reviewsCount + 1;
    const newReviewsCount = reviewsCount + 1;
    const newRestaurantData = {
      reviews: newReviewsCount,
      reviewsList: [
        ...reviewsList,
        { id: newReviewId, author: author, comment: comment, stars: stars },
      ],
    };

    axios
      .patch(`http://localhost:5001/restaurants/${props.id}`, newRestaurantData)
      .then(() => {
        axios.get("http://localhost:5001/restaurants").then((res) => {
          handleSetRestaurants(res.data);
          setDisabledState(false);
        });
      });

    setAuthor("");
    setComment("");
    setStars(0);
  };

  return (
    <div className="review-form-wrapper">
      <h2>REVIEW FORM</h2>
      <form action="">
        <label htmlFor="name-input">Name</label>
        <input
          type="text"
          id="name-input"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <label htmlFor="comment-input">Comment</label>
        <input
          type="text"
          id="comment-input"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <label htmlFor="stars-input">Stars: {stars}</label>
        <input
          id="stars-input"
          type={"range"}
          min={0}
          max={5}
          step={1}
          onChange={(e) => setStars(+e.target.value)}
          value={stars}
        />
        <GreenButton
          text={"Leave a review"}
          handleClick={handleClick}
          type={"submit"}
          disabled={disabledState}
        />
      </form>
    </div>
  );
};
