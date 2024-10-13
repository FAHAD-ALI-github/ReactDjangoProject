import React from "react";
import "./hero.css";
import 'animate.css';
import Header from "./Header/Header";
import Hero_image from '../../assets/hero_image.png';
import Hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
import JoinButton from "./Join_button/Join_button";
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; 

const Hero = () => {
  const transition = {type : 'spring', duration:3}
  return (
    <div className="hero" id="home">

{/* blur patches */}
<div className="blur hero-blur"></div>


      {/* left side of hero section */}
      <div className="leftside">
        <Header />
        {/* tagline */}
        <div className="tagline">
          <motion.div
          initial= {{left:'238px'}}
          whileInView = {{left:'8px'}}
          transition={{...transition, type:'tween'}}
          >
          </motion.div>
          <span> the best Fitness app on the internet</span>
        </div>
        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className="animate__animated animate__bounceIn stroke-text" >Stronger </span>
            <span className="animate__animated animate__bounceIn">every</span>
          </div>
          <div>
            <span className="animate__animated animate__bounceIn">single day</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix="+" /></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} delay='4' preFix="+" /></span>
            <span>Members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={10} delay='4' preFix="+" /></span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
        <RouterLink to="/login"><button className="button_ btn1st">Get started</button></RouterLink>
          <Link to="programs" span={true} smooth={true} ><button className="button_ btn2nd">Learn More</button></Link>
          </div>
      </div>

      {/* right side of hero section */}
      <div className="rightside">


        {/* join now button */}
        <JoinButton />
        

      {/* heart rate box */}
      <motion.div 
      initial={{right:'-1rem'}}
      transition={transition}
      whileInView={{right:'4rem'}}
      className="heart-rate">
        <img src={Heart} alt="" />
     <span>Heart Rate
      </span>
      <span>
      116 bpm
      </span>
      </motion.div>



      {/* hero images */}
      <img src={Hero_image} alt="hero-img" className="hero-image" />
      <motion.img
      initial={{right:'11rem'}}
      whileInView={{right:'20rem'}}
transition={transition}
src={Hero_image_back} alt="hero-img-back" className="hero-image-back" />



      {/* calories burned box */}
      <motion.div 
      initial={{right:'37rem'}}
      whileInView={{right:'28rem'}}
      transition={transition}
      className="calories">
<img src={Calories} alt="" />
<div>
  <span>Calories Burned</span><span>220 kcal</span>
  </div>

      </motion.div>

      </div>

    </div>
  );
};

export default Hero;
