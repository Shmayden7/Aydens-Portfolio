import React, { useState } from "react";
import DevProject from '../Project/DevProject';
import Fade from "react-reveal/Fade";
import data from "../../yourdata";
import SDButtons from '../Buttons/SDButtons';

const SoftwareDev = () => {
   const [displayNumber, setDisplayNumber] = useState(4);

   const seeMore = () => {
      if (data.devProjects.length > displayNumber) {
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
               Software Development.
            </Fade>
         </h1>
         <div className='work-content'>
            {data.devProjects.slice(0, displayNumber).map((project) => (
               <DevProject
                  key={project.id}
                  title={project.title}
                  github={project.github}
                  service={project.service}
                  imageSrc={project.imageSrc}
                  url={project.url}
                  icons={project.icons}
               ></DevProject>
            ))}
         </div>
         <SDButtons
            displayNumber={displayNumber}
            data={data}
            seeMore={seeMore}
            seeLess={seeLess}
         />
      </div>
   );
};

export default SoftwareDev;
