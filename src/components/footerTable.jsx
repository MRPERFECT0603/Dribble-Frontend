import React, { useState, useEffect } from 'react'
import logo2 from '../assets/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketball } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

function FooterTable() {
    const [menu1, setMenu1] = useState(true);
    const [menu2, setMenu2] = useState(true);
    const [menu3, setMenu3] = useState(true);
    const [menu4, setMenu4] = useState(true);
    const [menu5, setMenu5] = useState(true);

    const handleMenu1 = () => {
        if (window.innerWidth < 768) {
            setMenu1(!menu1);
        }
    }

    const handleMenu2 = () => {
        if (window.innerWidth < 768) {
            setMenu2(!menu2);
        }
    }

    const handleMenu3 = () => {
        if (window.innerWidth < 768) {
            setMenu3(!menu3);
        }
    }

    const handleMenu4 = () => {
        if (window.innerWidth < 768) {
            setMenu4(!menu4);
        }
    }

    const handleMenu5 = () => {
        if (window.innerWidth < 768) {
            setMenu5(!menu5);
        }
    }

    useEffect(() => {
        // Set the initial menu state based on screen width
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setMenu1(false);
                setMenu2(false);
                setMenu3(false);
                setMenu4(false);
                setMenu5(false);
            } else {
                setMenu1(true);
                setMenu2(true);
                setMenu3(true);
                setMenu4(true);
                setMenu5(true);
            }
        };
        window.addEventListener('resize', handleResize);
        // Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='bg-slate-100 h-fit w-full flex py-20 justify-around flex-col md:flex-row px-10 md:px-0'>
            <div className="flex basis-1/4 flex-col p-10 pt-0 gap-4">
                <div className='flex'>
                    <img src={logo2} alt="" />
                </div>
                <div className='flex font-light text-gray-500 text-sm'>
                    <p>Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
                </div>
                <div className='flex gap-4'>
                    <FontAwesomeIcon icon={faBasketball} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faPinterest} />
                </div>
            </div>
            <div className="flex basis-1/6 ">
                <ul>
                    <li onClick={handleMenu1} className='font-base leading-10'>For designers</li>
                    {menu1 && (
                        <>
                            <li className='font-light text-gray-600 leading-10'>Go Pro!</li>
                            <li className='font-light text-gray-600 leading-10'>Explore design work</li>
                            <li className='font-light text-gray-600 leading-10'>Design blog</li>
                            <li className='font-light text-gray-600 leading-10'>Overtime podcast</li>
                            <li className='font-light text-gray-600 leading-10'>Playoffs</li>
                            <li className='font-light text-gray-600 leading-10'>Weekly Warm-Up</li>
                            <li className='font-light text-gray-600 leading-10'>Refer a Friend</li>
                            <li className='font-light text-gray-600 leading-10'>Code of conduct</li>
                        </>
                    )}
                </ul>
            </div>
            <div className="flex basis-1/6">
                <ul>
                    <li onClick={handleMenu2} className='font-base  leading-10'>Hire designers</li>
                    {menu2 && (
                        <>
                            <li className='font-light text-gray-600  leading-10'>Post a job opening</li>
                            <li className='font-light text-gray-600  leading-10'>Post a freelance project</li>
                            <li className='font-light text-gray-600  leading-10'>Search for designers</li>
                            <li className='font-base  leading-10'>Brands</li>
                            <li className='font-light text-gray-600  leading-10'>Advertise with us</li>
                        </>
                    )}
                </ul>
            </div>
            <div className="flex basis-1/6"><ul>
                <li onClick={handleMenu3} className='font-base leading-10'>Company</li>
                {menu3 && (
                    <>
                        <li className='font-light text-gray-600 leading-10'>About</li>
                        <li className='font-light text-gray-600 leading-10'>Careers</li>
                        <li className='font-light text-gray-600 leading-10'>Support</li>
                        <li className='font-light text-gray-600 leading-10'>Media kit</li>
                        <li className='font-light text-gray-600 leading-10'>Testimonials</li>
                        <li className='font-light text-gray-600 leading-10'>API</li>
                        <li className='font-light text-gray-600 leading-10'>Terms of service</li>
                        <li className='font-light text-gray-600 leading-10'>Privacy policy</li>
                        <li className='font-light text-gray-600 leading-10'>Cookie policy</li>
                    </>
                )}
            </ul>
            </div>
            <div className="flex basis-1/6"><ul>
                <li onClick={handleMenu4} className='font-base leading-10'>Directories</li>
                {menu4 && (
                    <>
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
                    </>
                )}
            </ul>
            </div>
            <div className="flex basis-1/6"><ul>
                <li onClick={handleMenu5} className='font-base leading-10'>Design Resources</li>
                {menu5 && (
                    <>
                        <li className='font-light text-gray-600 leading-10'>Freelancing</li>
                        <li className='font-light text-gray-600 leading-10'>Design Hiring</li>
                        <li className='font-light text-gray-600 leading-10'>Design Portfolio</li>
                        <li className='font-light text-gray-600 leading-10'>Design Education</li>
                        <li className='font-light text-gray-600 leading-10'>Creative Process</li>
                        <li className='font-light text-gray-600 leading-10'>Design Industry Trends</li>
                    </>
                )}
            </ul>
            </div>
        </div>
    )
}

export default FooterTable;
