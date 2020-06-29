import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import data from "../../yourdata";
import JobStack from "./JobStack";
import Card from "../Project/Card";
import JobCard from "../Project/JobCard";

const WorkExperience = () => {
   return (
      <>
         <h1 className='heading'>
            <Fade bottom cascade>
               Experience.
            </Fade>
         </h1>
         <div className='work-stack'>
            <JobStack
               height={500}
               width={500}
               background='white'
               hoverOffset={20}
            >
               {data.jobs1.map((job, i) => (
                  <Card key={i} background={job.background}>
                     <JobCard {...job} />
                  </Card>
               ))}
            </JobStack>
         </div>
         <div className='work-stack'>
            <JobStack
               height={500}
               width={500}
               background='white'
               hoverOffset={20}
            >
               {data.jobs2.map((job, i) => (
                  <Card key={i} background={job.background}>
                     <JobCard {...job} />
                  </Card>
               ))}
            </JobStack>
         </div>
         {/* <div className='work-stack'>
            <JobStack
               height={500}
               width={500}
               background='white'
               hoverOffset={20}
            >
               {data.jobs3.map((job, i) => (
                  <Card key={i} background={job.background}>
                     <JobCard {...job} />
                  </Card>
               ))}
            </JobStack>
         </div> */}
      </>
   );
};

export default WorkExperience;
