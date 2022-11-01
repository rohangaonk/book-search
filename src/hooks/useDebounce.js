import React, { useRef } from "react";

export const useDebounce = (fun) => {
  let timeout = useRef();
  console.log("usedebounce hook loaded");
  const debounced = () => {
    console.log(timeout.current);
    if (!timeout.current) {
      fun();
      timeout.current = true;
    } else {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => fun(), 500);
    }
  };

  return { debounced };
};
