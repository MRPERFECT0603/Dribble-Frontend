import React from 'react'

function Footer() {
    return (
        <div className='h-30 border-t border-gray-300 flex justify-between px-10 py-10 bg-gray-100'>
            <div className='flex text-gray-500 text-sm'>
                <p>&#169; 2023 Dribbble. All rights reserved.</p>
            </div>
            <div className='flex text-gray-500 text-sm'>
                <p><span className="font-bold text-black">20,501,853</span > shots dribbbled</p>
            </div>
        </div>
    )
}

export default Footer;