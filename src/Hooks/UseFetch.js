import React, { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        setLoading(true);
        if (!res.ok) {
          throw Error("response not ok on useFetch hook");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.Error(err);
        setLoading(false);
      });
  }, [URL]);
  return { data, setData, loading };
};

export default UseFetch;
