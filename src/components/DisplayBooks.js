import React from "react";
import { useBooks } from "../hooks/useBooks";
import Loader from "./Loader";
import Error from "./Error";
import Books from "./Books";

function DisplayBooks({ query }) {
  const { data, isLoading, error } = useBooks(query);
  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={"something went wrong"} />
      ) : !data.totalItems ? (
        <Error message={"No books to display"} />
      ) : (
        <Books data={data.items} />
      )}
    </div>
  );
}

export default DisplayBooks;
