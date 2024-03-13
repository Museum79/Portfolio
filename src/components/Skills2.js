import React from 'react';
import { skills2 } from '../data';

const Skills2 = () => {
    return (
        <section className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {skills2.map((skill, index) => {
                        return (
                            <div className='flex flex-col items-center justify-center' key={index}>
                                <p className="text-center text-white text-sm mb-2">{skill.title}</p>
                                <img src={skill.image} alt={skill.title} className="w-16 sm:w-24" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills2;
