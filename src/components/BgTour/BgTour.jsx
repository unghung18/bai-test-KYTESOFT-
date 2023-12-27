import React from "react";
import tourBackground from "../../assets/tour-bg.jpg";
import Image from "next/image";

const BgTour = () => {

  return (
    <div>
      <Image src={tourBackground} alt="background tour" height={550} />
    </div>
  );
};
export default BgTour;