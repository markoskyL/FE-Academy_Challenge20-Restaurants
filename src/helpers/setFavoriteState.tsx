export const setFavoriteState = (
  arr: string[] | undefined,
  setState: (arr: string[]) => void,
  id: string
) => {
  const favorites = arr;
  favorites ? setState([...favorites, id]) : setState([id]);
};
