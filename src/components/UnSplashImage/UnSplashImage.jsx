import React from "react";
import './UnSplashImage.css'


const UnSplashImage = ({key , url}) => {

  return <img className="splachImage" src = {url} key = {key} alt =""/>;
};

export default UnSplashImage;