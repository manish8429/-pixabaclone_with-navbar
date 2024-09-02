import React, { useEffect, useState } from "react";
import MainFuction from "./MainFuction";

const UseState = (props) => {
  const [imageData, setImageData] = useState([]);
  const [quary, setquary] = useState("flower");

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=45702043-be926abff24b3f3b34186324a&q=${quary}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      // console.log(data.hits);
      setImageData(data.hits);
    };
    fetchData();
  }, [quary]);

  const fetchData = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=45702043-be926abff24b3f3b34186324a&q=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json();
    // console.log(data.hits);
    setImageData(data.hits);
  };

  return (
    <MainFuction.Provider
      value={{
        imageData ,fetchData , setquary
      }}
    >
      {props.children}
    </MainFuction.Provider>
  );
};
export default UseState;
