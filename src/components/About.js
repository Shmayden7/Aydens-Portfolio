import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

const About = () => {
   return (
      <div className='about'>
         <div className='about-content'>
            <h1>
               <Fade bottom cascade>
                  About Me.
               </Fade>
            </h1>
            <Fade bottom>
               <p>{data.abouttext}</p>
            </Fade>
            <img className='football' src={data.footballImage} alt='football iamge' />
         </div>
         <img className='me' src={data.aboutImage} alt='about iamge' />
      </div>
   );
};

export default About;
