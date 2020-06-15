import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const SocialIcons = ({ links: { github, instagram, linkedin } }) => {
   return (
      <div className='social-icon'>
         <a className='social-icon' href={github}>
            <GitHubIcon fontSize='large'/>
         </a>
         <a className='social-icon' href={instagram}>
            <InstagramIcon fontSize='large'/>
         </a>
         <a className='social-icon' href={linkedin}>
            <LinkedInIcon fontSize='large'/>
         </a>
      </div>
   );
};
export default SocialIcons;
