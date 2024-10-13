import React from "react";
import { Link as RouterLink } from "react-router-dom";
import LogoImg from "../../../assets/logo.png";
const BrandLogo = () => {

  return (
    <div>
      <RouterLink to="/">
        <img src={LogoImg} alt="" style={{margin: "25px -17px -70px", width:"230px"}}/>
      </RouterLink>
    </div>
  );
};

export default BrandLogo;
