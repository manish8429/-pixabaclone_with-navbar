import React, { useContext } from "react";
import MainFuction from "../Usecontantet/MainFuction";
import '../index.css'

const Image = () => {
  const { imageData } = useContext(MainFuction);

  // console.log(imageData)

  return <div className="my-5 cardfirstqq">
    <div className="cardfirst">
        {imageData.map((Data) => (
                <div className="cad" style={{width: "20rem"}} key={Data.id}>
                <img src={Data.largeImageURL} className="card-img-top" alt="..." style={{
                    borderRadius: "15px",
                    border: "2px solid yellow"
                }}/>
                <div className="card-body">
                </div>
              </div>
        ))}
        



    </div>
  </div>;
};

export default Image;
