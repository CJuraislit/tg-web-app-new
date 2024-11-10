import React from 'react';

const DonutImage = () => {
   const imageSrc = "../../assets/images/Donut Icon.png"

  return (
      <div className={"image_container"}>
          <img src={imageSrc} alt="Donut" className={"donut_image"}/>
          <div/>
);
};

export default DonutImage;
