import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import SocialIcons from "./Icons/SocialIcons";

const Contact = () => {
   return (
      <div>
         <h1>
            <Fade bottom cascade>
               {" "}
               Contact.
            </Fade>
         </h1>
         <Fade bottom>
            <div className='contact-content'>
               <h1>
                  Let’s Make Something<br></br>
                  <span className='amazing-color'>Truly Awesome!</span>
               </h1>
               <a href={`mailto:${data.contactEmail}`} className='email'>
                  {data.contactEmail}
               </a>
               <SocialIcons links={data.social} />
            </div>
         </Fade>

         <span className='footer'>
            Made With ❤ by Ayden Cauchi, Design Inspired By Nike
         </span>
      </div>
   );
};

export default Contact;
