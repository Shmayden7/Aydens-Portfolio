import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
   const scrollToTop = () => {
      scroll.scrollToTop();
   };
   return (
      <div className='nav-bar'>
         <nav>
            <ul>
               <li>
                  <Link
                     className='link'
                     activeClass='active'
                     to='homw'
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                     onClick={scrollToTop}
                  >
                     Home.
                  </Link>
               </li>
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
                     Work Experience.
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
      </div>
   );
};

export default Navbar;
