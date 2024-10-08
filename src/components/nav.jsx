import React from 'react'

const nav = () => {
  return (
    <nav className="    fixed w-full top-0 left-0 py-2">
    {/* <img src='pc.png' className='w-10'/> */}
    <div className='grid xs:gap-3 xs:px-4 gap-10 grid-cols-7 font-madami uppercase text-white text-center items-center justify-center content-place-center place-self-center place-content-center px-24'>
        <p className='drop-shadow-[0px_-1px_0px_var(--tw-shadow-color)] shadow-black'>MIXEL</p>
        <p><a className='drop-shadow-[0px_-1px_0px_var(--tw-shadow-color)] shadow-black' href='#banner'>Home</a></p>

        <p><a className='drop-shadow-[0px_-1px_0px_var(--tw-shadow-color)] shadow-black' href='#landing'>Miguel</a></p>
        <p><a className='drop-shadow-[0px_-1px_0px_var(--tw-shadow-color)] shadow-black' href='#skills'>Skills</a></p>
        <p><a className='drop-shadow-[0px_-1px_0px_var(--tw-shadow-color)] shadow-black' href='#experience'>Exp</a></p>
        <p><a className='drop-shadow-[0px_-1px_0px_var(--tw-shadow-color)] shadow-black' href='#contact'>Contact</a></p>
        <a 
            className='drop-shadow-[0px_-1px_0px_var(--tw-shadow-color)] shadow-black'
            onClick={handleChangeTheme}
        >
            Change  
        </a>
    </div>  
</nav>
  )
}

export default nav