import React from 'react'

const Project = ({title, url, git}) => {
  return (
    
    <div className="w-full rounded-lg grid place-content-center text-center invert">
        <div className="  bg-cover bg-no-repeat place-self-center">
            {/* <img className="xs:h-10 sm:h-12 drop-shadow-[0px_-2px_0px_var(--tw-shadow-color)] shadow-white rounded-t-lg transition-all" src={src} alt={title} /> */}
        </div>
        <div className="p-2 text-center">
            <p className="text-center xs:text-[8px]  sm:text-sm uppercase font-bold">
            {title}
            </p>
            <a className="text-center xs:text-[8px]  sm:text-sm uppercase font-bold"
            href={url}>
            Link
            </a><br/>
            <a className="text-center hover:text-green-500 xs:text-[8px]  sm:text-sm uppercase font-bold"
            href={git}>
            Github Link
            </a>
        </div>
    </div>

 
  )
}

export default Project