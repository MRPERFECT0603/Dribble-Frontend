import logo2 from '../assets/logo2.png';
import React from 'react'

function Navbar() {
    return (
        <div className='flex h-20 border-b-2 px-5 justify-between'>
            <div className='flex gap-4 items-center'>
                <div className='flex items-center justify-center'>
                    <img className="h-8" src={logo2} alt="" />
                </div>
                <div className='flex'>
                    <ul className='flex'>
                        <li className='px-4 text-gray-500'>Inspiration</li>
                        <li className='px-4 text-gray-500'>Find Work</li>
                        <li className='px-4 text-gray-500'>Learn Design</li>
                        <li className='px-4 text-gray-500'>Go Pro</li>
                        <li className='px-4 text-gray-500'>Hire Designers</li>
                    </ul>
                </div>
            </div>
            <div className='flex h-20 border-b-2 pl-5 gap-2' >
                <div className='flex  items-center'>
                    <input className='bg-gray-300 pt-2 pb-2 pl-2 rounded-xl' type="text" name="" id="" placeholder='search' />
                </div>
                <div className='flex items-center justify-center'>icon</div>
                <div className='flex items-center justify-center'>avatar</div>
                <div className='flex items-center justify-center'>
                    <button className=" bg-pink-500 hover:bg-pink-700 text-white p-3 px-2 rounded-xl" type="submit">Upload</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;