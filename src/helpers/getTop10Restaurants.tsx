import { RestaurantProps } from "../interfaces/restaurantProps";

export const getTop10Restaurants = (arr: RestaurantProps[]) => {
    //Sorting restaurants based on rating from highest to lowest of top 10
    const ratingsArr = arr.map((re) => {
      if (re.reviews) {
        const starsArray = re.reviewsList.map(
          (review: { stars: number }) => review.stars
        );
        const starsSum = starsArray.reduce(
          (acc: number, val: number) => acc + val
        );
        const rating = starsSum / starsArray.length;
        return {
          id: re.id,
          rating: rating,
        };
      } else {
        return {
          id: re.id,
          rating: 0,
        };
      }
    });

    const top10RatingValues = ratingsArr
      .map(({ rating }) => rating)
      .sort((a, b) => b - a)
      .slice(0, 10);

    const top10 = ratingsArr
      .filter(({ rating }) => top10RatingValues.includes(rating))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10);

    const top10Ids = top10.map((obj) => obj.id);

    const top10Restaurants: RestaurantProps[] = [];

    top10Ids.forEach((id) => {
      const restaurant = arr.find((r) => r.id === id);
      if (restaurant) top10Restaurants.push(restaurant);
    });

    return top10Restaurants;
  }
