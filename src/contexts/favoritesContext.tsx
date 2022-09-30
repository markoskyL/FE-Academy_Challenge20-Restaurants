import { createContext, useState } from "react";
interface contextFavoritesProps {
  favorites: string[] | [];
  handleSetFavorites: ([]: string[]) => void;
}

export const favoritesDataContext = createContext({} as contextFavoritesProps);

interface favoritesProviderProps {
  children: React.ReactNode;
  initialFavorites: string[] | [];
}

export const FavoritesDataProvider: React.FC<favoritesProviderProps> = ({
  children,
  initialFavorites,
}) => {
  const [favorites, setFavorites] = useState<string[] | []>(initialFavorites);

  const handleSetFavorites = (arr: string[]) => {
    setFavorites(arr);
  };

  const contextObj: contextFavoritesProps = {
    favorites,
    handleSetFavorites,
  };

  return (
    <favoritesDataContext.Provider value={contextObj}>
      {children}
    </favoritesDataContext.Provider>
  );
};
