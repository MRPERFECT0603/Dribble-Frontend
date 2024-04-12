import React from 'react'
import logo2 from '../assets/logo2.png';

function FooterTable() {
    return (
        <div className=' bg-slate-100 h-fit w-full flex py-20 justify-around '>
            <div className="flex basis-1/4 flex-col p-10 pt-0 gap-4">
                <div className='flex'>
                    <img src={logo2} alt="" />
                </div>
                <div className='flex font-light text-gray-500 text-sm'>
                    <p>Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
                </div>
                <div className='flex'>
                    icons
                </div>
            </div>
            <div className="flex basis-1/6 ">
                <ul>
                    <li className='font-base leading-10'>For designers</li>
                    <li className='font-light text-gray-600 leading-10'>Go Pro!</li>
                    <li className='font-light text-gray-600 leading-10'>Explore design work</li>
                    <li className='font-light text-gray-600 leading-10'>Design blog</li>
                    <li className='font-light text-gray-600 leading-10'>Overtime podcast</li>
                    <li className='font-light text-gray-600 leading-10'>Playoffs</li>
                    <li className='font-light text-gray-600 leading-10'>Weekly Warm-Up</li>
                    <li className='font-light text-gray-600 leading-10'>Refer a Friend</li>
                    <li className='font-light text-gray-600 leading-10'>Code of conduct</li>
                </ul>
            </div>
            <div className="flex basis-1/6">
                <ul>
                    <li className='font-base  leading-10'>Hire designers</li>
                    <li className='font-light text-gray-600  leading-10'>Post a job opening</li>
                    <li className='font-light text-gray-600  leading-10'>Post a freelance project</li>
                    <li className='font-light text-gray-600  leading-10'>Search for designers</li>
                    <li className='font-base  leading-10'>Brands</li>
                    <li className='font-light text-gray-600  leading-10'>Advertise with us</li>
                </ul>
            </div>
            <div className="flex basis-1/6"><ul>
                <li className='font-base leading-10'>Company</li>
                <li className='font-light text-gray-600 leading-10'>About</li>
                <li className='font-light text-gray-600 leading-10'>Careers</li>
                <li className='font-light text-gray-600 leading-10'>Support</li>
                <li className='font-light text-gray-600 leading-10'>Media kit</li>
                <li className='font-light text-gray-600 leading-10'>Testimonials</li>
                <li className='font-light text-gray-600 leading-10'>API</li>
                <li className='font-light text-gray-600 leading-10'>Terms of service</li>
                <li className='font-light text-gray-600 leading-10'>Privacy policy</li>
                <li className='font-light text-gray-600 leading-10'>Cookie policy</li>
            </ul>
            </div>
            <div className="flex basis-1/6"><ul>
                <li className='font-base leading-10'>Directories</li>
                <li className='font-light text-gray-600 leading-10'>Design jobs</li>
                <li className='font-light text-gray-600 leading-10'>Designers for hire</li>
                <li className='font-light text-gray-600 leading-10'>Freelance designers for hire</li>
                <li className='font-light text-gray-600 leading-10'>Tags</li>
                <li className='font-light text-gray-600 leading-10'>Places</li>
                <li className='font-base leading-10'>Design assets</li>
                <li className='font-light text-gray-600 leading-10'>Dribbble Marketplace</li>
                <li className='font-light text-gray-600 leading-10'>Creative Market</li>
                <li className='font-light text-gray-600 leading-10'>Fontspring</li>
                <li className='font-light text-gray-600 leading-10'>Font Squirrel</li>
            </ul>
            </div>
            <div className="flex basis-1/6"><ul>
                <li className='font-base leading-10'>Design Resources</li>
                <li className='font-light text-gray-600 leading-10'>Freelancing</li>
                <li className='font-light text-gray-600 leading-10'>Design Hiring</li>
                <li className='font-light text-gray-600 leading-10'>Design Portfolio</li>
                <li className='font-light text-gray-600 leading-10'>Design Education</li>
                <li className='font-light text-gray-600 leading-10'>Creative Process</li>
                <li className='font-light text-gray-600 leading-10'>Design Industry Trends</li>
            </ul>
            </div>
        </div>
    )
}

export default FooterTable;