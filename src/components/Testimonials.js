import React from 'react'

import TestimonialSlider from './TestimonialSlider'

const Testimonials = () => {
  return (
    <section
        id='testimonials'
        className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center
                    text-center'>
                    <h2 className='section-title
                    before:absolute
                    before:opacity-40
                    before:-top-[2rem]
                    before:-left-64
                    before:hidden
                    before:lg:block'>
                        Expériences Professionnelles
                    </h2>
                    <p className='subtitle'>
                        Voici les entreprises où j'ai pu apprendre le métier de Développeur.
                    </p>
                </div>
                <TestimonialSlider />
            </div>
        </section>
  )
}

export default Testimonials