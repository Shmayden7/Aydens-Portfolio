import React from "react";
import Fade from "react-reveal/Fade";

const CADProject = ({ title, drive, service, imageSrc, url }) => {
   return (
      <Fade bottom>
         <div className='project'>
            <a href={url}>
               <img src={imageSrc}/>
            </a>
            <h1>{title}<a href={drive}><img src='img/icons/drive.png'/></a></h1>
            <span>{service}</span>
         </div>
      </Fade>
   );
};

export default CADProject;
