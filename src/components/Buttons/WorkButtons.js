import React from "react";

const WorkButtons = ({ data, displayNumber, seeMore, seeLess }) => {
   if (displayNumber === 2) {
      console.log(displayNumber);
      return (
         <button className='black-button' onClick={() => seeMore()}>
            See More.
         </button>
      );
   } else if (displayNumber >= data.swProjects.length) {
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
export default WorkButtons;
