import { RestaurantReviewProps } from "./restaurantProps";

export interface RestaurantCardProps {
  reviews: number;
  image: string;
  restauranttype: string;
  businessname: string;
  id: string;
  reviewsList: RestaurantReviewProps[] | [];
  className: string;
}
