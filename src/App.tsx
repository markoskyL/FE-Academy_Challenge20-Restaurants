import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { DetailPage } from "./pages/DetailPage/DetailPage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { CuisinesPage } from "./pages/CuisinesPage/CuisinesPage";
import { RestaurantDataProvider } from "./contexts/restaurantContext";
import useFetch from "./hooks/useFetch";
import { FavoritesDataProvider } from "./contexts/favoritesContext";
import useLocalStorageGet from "./hooks/useLocalStorageGet";

const App = () => {
  const { data, status } = useFetch("http://localhost:5001/restaurants");
  const favorites = useLocalStorageGet("favorites");
  return (
    <>
      {status === "pending" && <h1>Loading...</h1>}

      {data && (
        <RestaurantDataProvider initialRestaurants={data}>
          <FavoritesDataProvider initialFavorites={favorites}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<SharedLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="detail/:id" element={<DetailPage />} />
                  <Route path="favorites" element={<FavoritesPage />} />
                  <Route path="cuisines/:type" element={<CuisinesPage />} />
                  <Route path="*" element={<h1>Nothing found</h1>} />
                </Route>
              </Routes>
            </BrowserRouter>
          </FavoritesDataProvider>
        </RestaurantDataProvider>
      )}

      {status === "error" && <h1>Error loading page.</h1>}
    </>
  );
};

export default App;
