import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((data) => setData(data.data))
      .then(
        setTimeout(() => {
          setIsLoading(false);
        }, 1200)
      )
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
