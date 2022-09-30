export const getFavoriteState = (arr: string[], id: string): boolean => {
    const LCFavorites = arr;
    const favID = LCFavorites?.find((favID: string) => favID === id);
    if (favID) {
      return true;
    }
    return false;
  }