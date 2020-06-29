import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";

const Navbar = () => {
   const scrollToTop = () => {
      scroll.scrollToTop();
   };
   return (
      <div className='nav-bar'>
         <Fade bottom cascade>
            <nav>
               <ul>
                  <li>
                     <Link
                        className='link'
                        activeClass='active'
                        to='About'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        About.
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='link'
                        activeClass='active'
                        to='SD'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        Software Dev.
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='link'
                        activeClass='active'
                        to='CAD'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        CAD.
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='link'
                        activeClass='active'
                        to='WorkExperience'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        Experience.
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='link'
                        activeClass='active'
                        to='Education'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        Education.
                     </Link>
                  </li>
                  <li>
                     <Link
                        className='link'
                        activeClass='active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                     >
                        Contact.
                     </Link>
                  </li>
               </ul>
            </nav>
         </Fade>
      </div>
   );
};

export default Navbar;
