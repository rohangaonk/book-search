import { useEffect, useState } from "react";

export const useBooks = (query = "") => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const resourceURL = "https://www.googleapis.com/books/v1/volumes";

  useEffect(() => {
    const fetchBooks = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const response = await fetch(`${resourceURL}?q="${query}"`);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError("Something went wrong");
      }
      setIsLoading(false);
    };

    fetchBooks();
  }, [query]);

  return { data, isLoading, error };
};
