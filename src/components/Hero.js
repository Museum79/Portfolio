import React from 'react'

import photo from '../assets/img/photo.png';
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex
    items-center bg-primary lg:bg-cover lg:bg-center
    lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>

      <div className='flex items-center h-full pt-8'>
  <div className='flex-1 flex flex-col items-center lg:items-start'>
    <p className='text-lg text-accent mb-[22px] text-center lg:text-left w-full'>
      Salut, je suis Sylvain</p>
    <h1 className='text-4xl leading-[44px] text-center
       md:text-5xl md:leading-tight lg:text-7xl
       lg:leading-[1.2] font-bold md:tracking-[-2px] lg:text-left w-full'>
      Concepteur Développeur <br/> d'applications.
    </h1>

    <p className='pt-4 pb-8 md:pt-6 md:pb-12
    max-w-[480px] text-lg text-center lg:text-left w-full'>
      Développeur en reconversion professionnelle motivé et
      passionné par l'apprentissage de nouvelles technologies.
    </p>
    <Link to='contact'
    smooth={true}
    duration={700}
    offset={-70}
    style={{ cursor: 'pointer'}}
    className='btn btn-md bg-accent
    hover:bg-accent-hover md:btn-lg
    transition-all rounded-md'>
      Contactez-moi
    </Link>
  </div>

  <div className='hidden lg:flex flex-1
    justify-end items-end -h-full'>
    <img
      src={photo}
      alt=''
      className='5'
      />
  </div>
</div>

      </div>
    </section>
  )
}

export default Hero