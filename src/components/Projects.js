import React, { useEffect, useState } from 'react'
import { projectsData } from '../data';
import { projectsNav } from '../data';
import Project from './Project';

function Projects() {

  const [item, setItem] = useState(projectsNav[0]);
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData)
    } else {
      const newProjects = projectsData.filter(
        (projects) => {
          return projects.category.toLocaleLowerCase() ===
            item.name;
        });
      setProjects(newProjects)
    }
  }, [item]);


  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLocaleLowerCase() });
    setActive(index)
  }

  return (
    <div>
      <nav className='mb-12 max-w-lg mx-auto'>
        <ul className='flex flex-col md:flex-row
        justify-evenly items-center text-white'>
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? 'active' : ''
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <section className='grid lg:grid-cols-3
        gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  )
}

export default Projects