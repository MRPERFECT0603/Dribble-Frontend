import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Hero(props) {
    return (
        <div className="flex flex-col justify-center items-center my-20 mx-5 lg:mx-20">
            <div>
                <h1 className="text-3xl lg:text-5xl font-bold text-center mb-4">Please verify your email...</h1>
            </div>
            <div>
                <FontAwesomeIcon icon={faEnvelope} size="8x" color='grey' />
            </div>
            <div className="text-lg font-base text-gray-400 mt-4 text-center">
                <p>Please verify your email address. We've sent a confirmation email to:</p>
                <p className="font-bold text-black">{props.email}</p>
                <p>Click the confirmation link in that email to begin using Dribbble.</p>
            </div>
            <div className="mx-5 lg:mx-64 text-lg font-base text-gray-400 mt-4 text-center">
                <p>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className='text-pink-600'>resend the confirmation email.</span></p>
                <p>Wrong email address? <span className='text-pink-600'>Change it.</span></p>
            </div>
        </div>
    );
}

export default Hero;
