import { useState } from "react";
import axios from "axios";

function useAxios(baseURL) {
    /*My custom hook that defines a new function called useAxios, it accepts a baseURL parameter.*/
  const [data, setData] = useState([]);
    /*A useState hook to initialize a state variable "data" to an empty array. Also destructure a setData function to update this state.*/
  const addData = async (restOfURL) => {
    /*Defines async function "addData" that accepts a restOfURL parameter.*/
  const response = await axios.get(`${baseURL}${restOfURL}`);
    /*Use axios to make a GET request to the baseURL + restOfURL. Await the response.*/
     setData((prevData) => [...prevData, response.data]);
     /*Updates data state variable using the previous data and adds the new response data.*/
  };

  return [data, addData];
}

export default useAxios;
