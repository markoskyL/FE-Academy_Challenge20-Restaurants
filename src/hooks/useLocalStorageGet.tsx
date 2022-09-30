const useLocalStorageGet = (key: string) => {
  const data = localStorage.getItem(key);
  if (data && data !== "undefined") {
    return JSON.parse(data);
  }
};

export default useLocalStorageGet;
