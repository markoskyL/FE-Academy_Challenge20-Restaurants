import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { RestaurantProps } from "../interfaces/restaurantProps";

interface contextDataProps {
  restaurants: RestaurantProps[];
  handleSetRestaurants: ([]: RestaurantProps[]) => void;
}

export const restaurantDataContext = createContext({} as contextDataProps);

interface dataProviderProps {
  children: React.ReactNode;
  initialRestaurants: RestaurantProps[];
}
export const RestaurantDataProvider: React.FC<dataProviderProps> = ({
  children,
  initialRestaurants,
}) => {
  const [restaurants, setRestaurants] =
    useState<RestaurantProps[]>(initialRestaurants);

  const handleSetRestaurants = (arr: RestaurantProps[]) => {
    setRestaurants(arr);
  };

  const contextObj: contextDataProps = {
    restaurants,
    handleSetRestaurants,
  };

  return (
    <restaurantDataContext.Provider value={contextObj}>
      {children}
    </restaurantDataContext.Provider>
  );
};

export default restaurantDataContext;
