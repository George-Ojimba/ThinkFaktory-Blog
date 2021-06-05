import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //UseEffect Hook : Best used for fetching data on page load it also contains a dependcy (the empty array)
  useEffect(() => {
    // Abort controller ===> cleaning up the useFetch Hook 
    const abortController = new AbortController();
    // const signal = abortController.signal

    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Couldnt find this resource; please make sure your URL is correct"
          );
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log(`fetch aborted`);
        } else {
          setIsPending(false);
          setError(err.message);
          console.log(err.message);
        }
      });

    return () => abortController.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
