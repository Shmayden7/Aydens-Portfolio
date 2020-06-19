import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import data from "../../yourdata";
import Job from '../Project/Job';
import WorkButtons from '../Buttons/WorkButtons';

const WorkExperience = () => {
   const [displayNumber, setDisplayNumber] = useState(4);

   const seeMore = () => {
      if (data.swProjects.length > displayNumber) {
         setDisplayNumber(displayNumber + 2);
      }
   };

   const seeLess = () => {
      if (displayNumber > 2) {
         setDisplayNumber(displayNumber - 2);
      }
   };

   return (
      <div>
         <h1 className='heading'>
            <Fade bottom cascade>
               Work Experience.
            </Fade>
         </h1>
         <div className='work-content'>
            {data.swProjects.slice(0, displayNumber).map((project) => (
               <Job />
            ))}
         </div>
         <WorkButtons
            displayNumber={displayNumber}
            data={data}
            seeMore={seeMore}
            seeLess={seeLess}
         />
      </div>
   );
};

export default WorkExperience;
