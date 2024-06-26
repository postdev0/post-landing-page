import React, { useState, useEffect } from 'react';
import "./style.css";
// import MeduimGirl from ".././assets/Images/mediumGirl.png";
import MediumGirl from "./Images/mediumGirl.png";
import firstLeft from "./Images/firstLeft.png";
import secondTop from "./Images/secondTop.png";
import thirdLeft from "./Images/thirdSide.png";
import  GirlIcon  from './Images/girlImage.png';

function FirstPageCard() {
  const [buttonText, setButtonText] = useState("Get the App");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1441px)");
    function handleMediaQueryChange(event) {
      if (event.matches) {
        setButtonText("Download Now");
      } else {
        setButtonText("Get the App");
      }
    }
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery); // Initial check
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  return (
   
      <div className="firstContainer">
      <div className="content">
        <h1>
          A social hub where every thought triggers meaningful discussions in real-time
        </h1>
        <h2 className="heading-md"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmodSed do eiusmod tempor incididunt ut labore</h2>
        <button type="button" className="button-sm" >
        {buttonText}
        </button>
      </div>

      

      <div className="visible-lg">
        <img alt="GirlImage" src={GirlIcon} style={{ marginTop: '90px' }} />
      </div>
      <div className= "hidden-md">
        <img alt="GirlImage" src={MediumGirl} style={{ position: 'relative' }} />
        <img alt="GirlImage" src={firstLeft}   style={{
            position: 'absolute',
            width: '167px',
            height: '108px',
            bottom: "-8%",
            left: '63%',
            transform: 'translateX(-50%)'
          }} />
        <img alt="GirlImage" src={secondTop} style={{ position: 'absolute', width: '163px', height: '173px', right: '11%', top: '40%', transform: 'translate(50%)' }} />
        <img alt="GirlImage" src={thirdLeft} 
        style={{ position: 'absolute', width: '195px', height: '100px', bottom: '-25%', right: '12%', transform: 'translate(50%, 50%)' }} />
      </div>
    </div>
   
  );
}

export default FirstPageCard;
