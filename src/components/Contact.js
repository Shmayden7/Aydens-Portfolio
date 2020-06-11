import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

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
               <ul>
                  {data.social.map((link, index) => (
                     <li key={index}>
                        <a
                           target='_blank'
                           rel='noopener noreferrer'
                           href={link.url}
                        >
                           {link.name}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </Fade>

         <span className='footer'>
            Made With ❤ by Ayden Cauchi, Design Inspired By Nike
         </span>
      </div>
   );
};

export default Contact;
