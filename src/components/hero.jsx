import React from 'react'

function Hero() {
    return (
        <div>
            <div className='flex flex-col text-center my-20 gap-4 mx-20'>
                <div>
                    <h1 className='text-3xl font-bold'>Please verify your email...</h1>
                </div>
                <div>
                    <p className='h-20 my-5'>icon</p>
                </div>
                <div>
                    <p className='text-lg font-base text-gray-400'>Please verify your email address. We've sent a confirmation email to:</p>
                </div>
                <div>
                    <p className='text-lg font-bold text-black'>account@refero.design</p>
                </div>
                <div>
                    <p className='text-lg font-base text-gray-400'>Click the confirmation link in that email to begin using Dribbble.</p>
                </div>
                <div className="mx-64">
                    <p className='text-lg font-base text-gray-400'>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className=' text-pink-600'>resend the confirmation email.</span></p>
                </div>
                <div>
                    <p className='text-lg font-base text-gray-400'>Wrong email address? <span className=' text-pink-600'>Change it.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Hero;