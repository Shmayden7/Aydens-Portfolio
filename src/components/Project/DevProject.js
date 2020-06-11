import React from "react";
import Fade from "react-reveal/Fade";
import GitHubIcon from '@material-ui/icons/GitHub';

const DevProject = ({ title, github, service, imageSrc, url }) => {
   return (
      <Fade bottom>
         <div className='project'>
            <a href={url}>
               <img src={imageSrc}/>
            </a>
            <h1>{title}<a href={github}><GitHubIcon/></a></h1>
            <span>{service}</span>
         </div>
      </Fade>
   );
};

export default DevProject;
