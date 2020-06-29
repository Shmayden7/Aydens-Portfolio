import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

const Header = () => {
   return (
      <div>
         <h1 className='heading-background'>CREATE</h1>
         <header>
            <h1>
               <Fade bottom cascade>
                  No, this site is not mobile friendly, Working on that right
                  now.
               </Fade>
            </h1>
         </header>
         <Fade bottom>
            <p className='header-title'>
               {data.headerTagline[0]}
               <br></br>
               <span className='amazing-color'>{data.headerTagline[1]}</span>
               <br></br>
               {data.headerTagline[2]}
               <br></br>
               <a
                  href={`mailto:${data.contactEmail}`}
                  rel='noopener noreferrer'
               >
                  <button className='black-button'>Contact.</button>
               </a>
               <a
                  href='https://drive.google.com/file/d/1j0h2ew7xdCby3S8CsESPnDXeGBQRf1GS/view?usp=sharing'
                  rel='noopener noreferrer'
               >
                  <button className='black-button'>Resume.</button>
               </a>
               <img className='mouse-icon' src='img/icons/mouse.png' />
            </p>
         </Fade>
      </div>
   );
};

export default Header;
