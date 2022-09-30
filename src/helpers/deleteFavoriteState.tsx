export const deleteFavoriteState = (arr: string[], setState: (arr: string[]) => void, id: string) => {
  const favorites = arr;
  if (favorites) {
    const newFavorites = arr.filter((FavId) => FavId !== id);
    setState(newFavorites);
  }
}
