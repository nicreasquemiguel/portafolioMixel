import React from 'react'
import Project from '../components/Project'

const Projects = () => {
  return (
    <section id='projects' className='col-span-3 transition-all md:col-span-1   h-dvh snap-start snap-always grid min-h-[600px]  items-center text-center transition-all'>
        <div className='bg-black h-full  text-center  dark:bg-black bg-blend-overlay dark:bg-blend-multiply bg-cover  grid place-content-center p-10'>
            <img src='brain.png' className='hover:scale-95 invert place-self-center pb-3 max-w-80 xs:w-2/6 sm:w-2/6' />
            <h1 className='font-nectarine text-white pb-5  drop-shadow-[0px_-2px_0px_var(--tw-shadow-color)] shadow-black tracking-widest text-4xl  text-center font-bold '>
              Projects
            </h1>

            <div className='grid grid-cols-1 xs:gap-10  sm:gap-8 xs:px-2 sm:px-10'>
               <Project title={"Terraza Pineda Booking"} url={"https://terrazapineda.netlify.app/"} git={"https://github.com/nicreasquemiguel/TerrazaPinedaFrontend/tree/main"} />
            </div>
        </div>

    </section>
  )
}

export default Projects