import React from 'react'

import Projects from '../components/Projects'

const Portfolio = () => {
  return (
    <section
    id='portfolio'
    className='section
    bg-primary min-h-[1000px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center
            text-center'>
                <h2 className='section-title
                before:absolute
                before:opacity-40
                before:-top-[2rem]
                before:-left-3/4
                before:hidden
                before:lg:block'>
                    Mes travaux
                </h2>
                <p className='subtitle'>
                J'ai créé une section dédiée aux projets sur mon
                portfolio pour présenter mes réalisations en développement
                informatique. Vous y trouverez des exemples de projets
                que j'ai réalisés ainsi que les résultats obtenus
                pour mes envies du moment ou encore pour des clients.
                </p>
            </div>
            <Projects/>
        </div>
    </section>
  )
}

export default Portfolio