import React, { useState } from "react";
import CADProject from "../Project/CADProject";
import Fade from "react-reveal/Fade";
import data from "../../yourdata";
import CADButtons from "../Buttons/CADButtons";


const CAD = () => {
   const [displayNumber, setDisplayNumber] = useState(4);

   const seeMore = () => {
      if(data.swProjects.length > displayNumber){
         setDisplayNumber(displayNumber + 2);
      }
   };

   const seeLess = () => {
      if(displayNumber > 2){
         setDisplayNumber(displayNumber - 2);
      }
   };

   return (
      <div>
         <h1 className='heading'>
            <Fade bottom cascade>
               C.A.D.
            </Fade>
         </h1>
         <div className='work-content'>
            {data.swProjects.slice(0, displayNumber).map((project) => (
               <CADProject
                  key={project.id}
                  title={project.title}
                  drive={project.drive}
                  service={project.service}
                  imageSrc={project.imageSrc}
                  url={project.url}
                  icons={project.icons}
               ></CADProject>
            ))}
         </div>
         <CADButtons
            displayNumber={displayNumber}
            data={data}
            seeMore={seeMore}
            seeLess={seeLess}
         />
      </div>
   );
};

export default CAD;
