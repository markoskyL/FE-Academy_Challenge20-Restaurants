import { RestaurantReviewProps } from "../interfaces/restaurantProps";
interface getRatingProps {
  reviews: number;
  reviewsList: RestaurantReviewProps[];
}
const getRating: (props: getRatingProps) => string = (props) => {
  if (props.reviews !== 0 && props.reviews) {
    const starsArray: number[] = props.reviewsList.map(
      (review: { stars: number }) => review.stars
    );
    const starsSum: number = starsArray.reduce(
      (acc: number, val: number) => acc + val
    );
    const rating: string = (starsSum / starsArray.length).toFixed(1);
    return rating;
  } else {
    return "no rating";
  }
};

export default getRating;
