import React from "react";
import Fade from "react-reveal/Fade";
import Waterloo from "../Project/Waterloo";
import Highschool from "../Project/Highschool";

const Education = () => {
   return (
      <div>
         <h1 className='heading'>
            <Fade bottom cascade>
               Education.
            </Fade>
         </h1>
         <Fade bottom>
            <Waterloo
               title='BASc Biomedical Engineering, Honours, Co-Op'
               subtitle='University of Waterloo'
               bgPhoto='img/education/qnc.jpg'
               secondTitle='Biomedical Engineering is a multidisciplinary field that combines biology & engineering, to create solutions too problems in medicine and healthcare. Biomedical Engineering is one of, if not the most broad engineering fields. I take 6-7 courses per semester, some of which include data structures & algorithms, anatomy, numerical & applied calculus, the physics of medical imaging and many more. I will have 6 Co-Op opportunities throughout my undergrad. I intend on working jobs in software development, product design, and medicine to make my portfolio as diverse as possible.'
            />
         </Fade>
         {/* <Highschool
            title='BASc Biomedical Engineering Honours, Co-Op'
            subtitle='University of Waterloo'
            iconName='fas fa-heart'
            btnIcon='fas fa-arrow-right'
            bgPhoto='img/education/e7.jpg'
            totalReviews={30}
            ratingAverage={4.5}
         /> */}
      </div>
   );
};
export default Education;
