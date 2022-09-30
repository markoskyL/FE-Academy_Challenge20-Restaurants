export interface RestaurantProps {
  reviews: number;
  parkinglot: Boolean;
  phone: string;
  image: string;
  restauranttype: string;
  businessname: string;
  address: string;
  slug: string;
  email: string;
  id: string;
  reviewsList: RestaurantReviewProps[];
}

export interface RestaurantReviewProps {
  id: number;
  author: string;
  comment: string;
  stars: number;
}
