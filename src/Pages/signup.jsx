import React from 'react'
import SignupLeftPanel from "../components/signupLeftPanel"
import SignupRightPanel from '../components/signupRightPanel';
function Signup() {
    return (
        <div className='flex flex-col md:flex-row'>
            {/* left side of the signup */}
            <div className=" bg-home h-screen flex basis-1/3 flex-col ">
                <SignupLeftPanel />
            </div>
            {/* right side of the signup */}
            <div className='bg-white-400 h-screen flex basis-2/3'>
                <SignupRightPanel />
            </div>
        </div>
    )
}

export default Signup;