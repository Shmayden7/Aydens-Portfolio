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
                  This Site Was Made With React and Node JS
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
               <button>
                  <a
                     href={`mailto:${data.contactEmail}`}
                     rel='noopener noreferrer'
                  >
                     Contact.
                  </a>
               </button>
               <button>
                  <a
                     href={`mailto:${data.contactEmail}`}
                     rel='noopener noreferrer'
                  >
                     Resume.
                  </a>
               </button>
            </p>
         </Fade>
      </div>
   );
};

export default Header;
