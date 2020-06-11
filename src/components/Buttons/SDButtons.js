import React from "react";

const SDButtons = ({ data, displayNumber, seeMore, seeLess }) => {
   if ((displayNumber === 2)) {
      return (
         <button className='black-button' onClick={() => seeMore()}>
            See More.
         </button>
      );
   } else if (displayNumber >= data.devProjects.length) {
      return (
         <button className='black-button' onClick={() => seeLess()}>
            See Less.
         </button>
      );
   } else {
      return (
         <>
            <button className='black-button' onClick={() => seeMore()}>
               See More.
            </button>
            <button className='black-button' onClick={() => seeLess()}>
               See Less.
            </button>
         </>
      );
   }
};
export default SDButtons;
