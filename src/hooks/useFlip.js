import { useState } from "react";

function useFlip() {
  /*A custom hook that defines a new function "useFlip".*/
  const [isFacingUp, setIsFacingUp] = useState(true);
  /*Initialize a state variable called isFacingUp to true.*/
  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  /*Update the isFacingUp state by flipping the current value to the opposite.*/
  };
  return [isFacingUp, flipCard];
}

export default useFlip;
