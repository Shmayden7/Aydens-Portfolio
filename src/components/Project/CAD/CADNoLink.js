import React from "react";
import Fade from "react-reveal/Fade";
import CADIcon from '../../Icons/CADIcon';

const CADNoLink = ({ title, drive, service, imageSrc, icons }) => {
   return (
      <Fade bottom>
         <div className='project'>
            <a>
               <img src={imageSrc}/>
            </a>
            <h1>{title}<a href={drive}><img src='img/icons/drive.png'/></a></h1>
            <span>{service}</span>
            {icons.map((icon) => (
               <CADIcon key={icon.key} link={icon.link}/>
            ))}
         </div>
      </Fade>
   );
};

export default CADNoLink;
