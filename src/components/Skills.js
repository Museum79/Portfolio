import React from 'react';

import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
                {skills.map((skill, index) => {
                    return ( 
                    <div className='flex flex-col items-center w-full justify-center' key={index}>
                        <p className="text-center text-white text-md mb-2">{skill.title}</p>
                        <img src={skill.image} alt={skill.title} className="w-16 sm:w-24">
                        </img>
                        
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills;
