import React from 'react'

const Landing = () => {
  return (
    <section id='landing' className='col-span-3 transition-all md:col-span-1  h-dvh snap-start snap-always grid min-h-[600px]  items-center text-center '>

        <div className='bg-black -700 h-full  text-center  dark:bg-black bg-blend-overlay dark:bg-blend-multiply bg-cover  grid place-content-center p-10'>
            <img src='fire.png' className='  invert place-self-center pb-3 max-w-80 xs:w-3/6 sm:w-3/4' />
            <h1 className='font-nectarine text-white  drop-shadow-[0px_-2px_0px_var(--tw-shadow-color)] shadow-black tracking-widest text-4xl  text-center font-bold pb-3'>
              Miguel Pineda
            </h1>
            <p className='font- xs:px-1 sm:px-32 text-white xs:text-lg sm:text-xl -shadow-[0px_-2px_0px_var(--tw-shadow-color)] shadow-black'> 
            Versatile software developer with expertise in Python/Django backend development and a strong understanding of front-end technologies. Crafting robust and scalable solutions. Also extensive experience in IT support, ensuring smooth operations and troubleshooting technical issues.
            </p>
        </div>
    </section>
  )
}

export default Landing