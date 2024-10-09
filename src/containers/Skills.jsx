import React from 'react'
import Skill from '../components/Skill'

const Skills = () => {
  return (
    <section id='skills' className=' col-span-3 transition-all md:col-span-1  h-dvh snap-start snap-always grid min-h-[600px]  items-center text-center transition-all'>
        <div className='bg-black h-full  text-center  dark:bg-black bg-blend-overlay dark:bg-blend-multiply bg-cover  grid place-content-center p-10'>
            <img src='brain.png' className=' invert place-self-center pb-3 max-w-80 xs:w-2/6 sm:w-2/6' />
            <h1 className='font-nectarine text-white pb-5  drop-shadow-[0px_-2px_0px_var(--tw-shadow-color)] shadow-black tracking-widest text-4xl  text-center font-bold '>
              Skills
            </h1>

            <div className='grid grid-cols-5 xs:gap-10  sm:gap-8 xs:px-2 sm:px-10'>
                <Skill src="technologies/python.svg" title="Python" />
                <Skill src="technologies/django.svg" title="Django" />
                <Skill src="technologies/apis.svg" title="REST API's" />
                <Skill src="technologies/javascript.svg" title="Javascript" />
                <Skill src="technologies/html.svg" title="HTML" />
                <Skill src="technologies/css.svg" title="CSS" />
                <Skill src="technologies/tailwind.svg" title="Tailwind" />
                <Skill src="technologies/bootstrap.svg" title="Bootstrap" />
                <Skill src="technologies/sql.svg" title="SQL/NO SQL" />
                <Skill src="technologies/git.svg" title="Git" />
                <Skill src="technologies/support.svg" title="IT Support" />
                <Skill src="technologies/network.svg" title="General Networks" />
                <Skill src="technologies/hardware.svg" title="Hardware" />
                <Skill src="technologies/security.svg" title="Security" />
                <Skill src="technologies/pc.svg" title="Operating Systems" />
            </div>
        </div>

    </section>
  )
}

export default Skills