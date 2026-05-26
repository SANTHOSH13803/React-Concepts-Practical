import { useEffect, useState } from "react";

const useDebounce = (intialValue, delay) => {
  const [value, setValue] = useState(intialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(intialValue);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [delay, intialValue]);

  return value;
};

export default useDebounce;
