import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  /*A custom hook that defines a function "useLocalStorage" that accepts a key and initialValue parameter.*/
  const [storedValue, setStoredValue] = useState(() => {
    /*Used useState hook to initialize storeValue. Passes a function to useState that will retrieve the value from localStorage.*/
    const storedItem = localStorage.getItem(key);
    /*Get the item from localStorage using the key parameter.*/
    return storedItem ? JSON.parse(storedItem) : initialValue;
    /*If there is a stored value, parse and return it. Otherwise return the passed initialValue.*/
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
    /*Use a useEffect hook to sync the storedValue to localStorage when it changes. Stringify and set the item in localStorage using the key.*/
  }, [key, storedValue]);
  /*Adds key and storedValue as dependencies so effect re-runs when they change.*/
  return [storedValue, setStoredValue];
}

export default useLocalStorage;
