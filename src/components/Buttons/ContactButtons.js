import React from "react";

const ContactButtons = ({ link: { url, name } }) => {
   return (
      <button className='black-button'>
         <a href={url}>
            {name}
         </a>
      </button>
   );
};
export default ContactButtons;
