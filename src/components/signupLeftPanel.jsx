import React from 'react'
import logo from '../assets/logo.png'

function SignupLeftPanel() {
    return (
        <div>
            <div className='flex flex-col mt-10'>
                <div className='flex'>
                    {/* <h1>dribble</h1> */}
                    <img className="h-12 px-8" src={logo} alt="" />
                </div>
                <div className='flex m-4 text-wrap text-2xl font-bold pr-8 pl-6 text-homeText'>
                    <p>Discover the world's top Designers & Creatives.</p>
                </div>
            </div>
            <div className='flex basis-1/2 my-6 py-8'>
                <img className=" bg-blend-saturation backdrop-blur-3xl" src="https://rrgraphdesign.com/blog/wp-content/uploads/2023/03/graphic-design-for-seo.jpg" alt="" />
            </div>
            <div className='flex  pt-20 mx-8 mt-10 sm:my-4 text-homeText font-light'>
                <p>Art By <span className='underline'>Vivek Shaurya</span></p>
            </div>
        </div>
    )
}

export default SignupLeftPanel