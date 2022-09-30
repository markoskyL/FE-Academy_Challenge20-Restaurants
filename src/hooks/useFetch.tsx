import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState();
  const [status, setStatus] = useState<"pending" | "done" | "error">("pending");

  useEffect(() => {
    axios(url)
      .then((resData) => {
        setData(resData.data);
        setStatus("done");
      })
      .catch(() => {
        console.log("error fetching");
        setStatus("error");
      });
  }, [url]);

  return {
    data,
    status,
  };
};

export default useFetch;
