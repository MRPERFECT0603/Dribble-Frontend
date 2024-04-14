import logo2 from '../assets/logo2.png';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'





function Navbar() {

    const [Menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!Menu);
    }
    return (
        <div className='w-full'>
            <div className='flex flex-col lg:flex-row lg:h-20 border-b-2 px-5 justify-between  w-full'>
                <div className='flex md:gap-4 md:items-center'>
                    <div className='flex items-center justify-center w-full md:w-auto py-5 md:py-0'>
                        <img className="h-8" src={logo2} alt="" />
                    </div>
                    <div className=' hidden lg:flex'>
                        <ul className='flex'>
                            <li className='px-4 text-gray-500'>Inspiration</li>
                            <li className='px-4 text-gray-500'>Find Work</li>
                            <li className='px-4 text-gray-500'>Learn Design</li>
                            <li className='px-4 text-gray-500'>Go Pro</li>
                            <li className='px-4 text-gray-500'>Hire Designers</li>
                        </ul>
                    </div>
                </div>
                <div className='flex h-20 border-b-2  gap-2 justify-between ' >
                    <div className='flex  items-center bg-gray-300 rounded-xl my-4 md:mr-4 w-1/2 '>
                        <FontAwesomeIcon icon={faSearch} size="lg" color='grey' className='ml-4' />
                        <input className='bg-gray-300 pt-2 pb-2 pl-2 rounded-xl w-1/2 md:w-full' type="text" name="" id="" placeholder='search' />
                    </div>
                    <div className='flex gap-2 pr-4'>
                        <div onClick={handleMenu} className='flex items-center justify-center lg:hidden'>
                            {Menu ? (
                                <FontAwesomeIcon icon={faTimes} size="xl" color='grey' />
                            ) : (
                                <FontAwesomeIcon icon={faBars} size="lg" color='grey' />
                            )}
                        </div>
                        <div className='flex items-center justify-center'>
                            <FontAwesomeIcon icon={faBriefcase} size="lg" color='grey' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <FontAwesomeIcon icon={faUserCircle} size="lg" color='grey' />
                        </div>
                        <div className='hidden lg:flex items-center justify-center'>
                            <button className=" bg-pink-500 hover:bg-pink-700 text-white p-3 px-2 rounded-xl" type="submit">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
            {Menu && <div className='flex-col lg:hidden justify-center w-full items-center text-center py-2'>
                <ul className='flex-col '>
                    <li className='px-4 py-1 text-gray-500 border-b-2'>Inspiration</li>
                    <li className='px-4 py-1 text-gray-500 border-b-2'>Find Work</li>
                    <li className='px-4 py-1 text-gray-500 border-b-2'>Learn Design</li>
                    <li className='px-4 py-1 text-gray-500 border-b-2'>Go Pro</li>
                    <li className='px-4 py-1 text-gray-500 border-b-2'>Hire Designers</li>
                </ul>
                <div className='border-b-2 pb-1'>
                    <button className=" bg-pink-500 hover:bg-pink-700 text-white p-3 px-2 rounded-xl py-1  mt-3" type="submit">Upload</button>
                </div>
            </div>}

        </div>
    )
}

export default Navbar;