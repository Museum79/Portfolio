import React from 'react'

import  { social } from '../data'


const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row
                space-y-6 lg:space-y-0 items-center
                justify-between'>
                <div className='flex space-x-6 items-center
                justify-center'>
                    {social.map((item, index) => {
                        const { href, icon } = item;
                        return (
                            <a href={href} key={index}>
                                {icon}
                            </a>
                        );
                    })}
                </div>
                <div>
                <h1 className='text-2xl'><i>Sylvain Caparros</i></h1>
                </div>
                <p>&copy; 2024 Sylvain Caparros</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer