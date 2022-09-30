import React from "react";
import "./ReviewPost.scss";
interface ReviewPostProps {
  id: number;
  author: string;
  comment: string;
  stars: number;
}
export const ReviewPost: React.FC<ReviewPostProps> = (props) => {
  return (
    <div className="detail_review-post">
      <p>
        <strong>Author: </strong>
        {props.author}
      </p>
      <p>
        <strong>Message: </strong>
        {props.comment}
      </p>
      <p>
        <strong>Stars: </strong>
        {props.stars}
      </p>
    </div>
  );
};
