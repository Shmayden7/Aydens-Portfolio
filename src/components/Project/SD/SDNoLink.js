import React from "react";
import Fade from "react-reveal/Fade";
import GitHubIcon from '@material-ui/icons/GitHub';
import DevIcon from '../../Icons/DevIcon';

const SDNoLink = ({ title, github, service, imageSrc, icons }) => {
   return (
      <Fade bottom>
         <div className='project'>
            <a>
               <img src={imageSrc}/>
            </a>
            <h1>{title}<a href={github}><GitHubIcon/></a></h1>
            <span>{service}</span>
            {icons.map((icon) => (
               <DevIcon key={icon.key} link={icon.link}/>
            ))}
         </div>
      </Fade>
   );
};

export default SDNoLink;
