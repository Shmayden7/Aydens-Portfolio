import React from "react";
import data from "../../yourdata";
import Fade from "react-reveal/Fade";
import Waterloo from "../Project/Waterloo";

const Education = () => {
   return (
      <div>
         <h1 className='heading'>
            <Fade bottom cascade>
               Education.
            </Fade>
         </h1>
            <Waterloo />
      </div>
   );
};
export default Education;
