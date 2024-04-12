import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function SignupRightPanel() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await axios.post('http://localhost:8000/api/user/register', formData);
            console.log('Response:', response.data);
            navigate('/acc', { state: { username: formData.username  , email : formData.email} });
        } catch (error) {
            console.error('Error:', error);
        }


    };

    return (
        <div className='w-full'>
            <div className='flex justify-end w-full px-10 py-8'>
                <p className=' font-light text-base'>Already a member? <span className='text-blue'>Sign In</span></p>
            </div>
            <div className='mx-4 md:mx-48 justify-center'>
                <div className='text-xl'>
                    <h1 className='text-3xl font-bold'>Sign up to Dribbble</h1>
                </div>
                <div >
                    <h3 className='text-s font-light text-red my-5'>Username has already been taken</h3>
                </div>
                <div className='pr-4 md:pr-20 mx-auto '>
                    <form className='mr-4 md:mr-10' onSubmit={handleSubmit}>
                        <div className='flex-col md:flex md:flex-row md:justify-between py-5'>
                            <div className='w-full md:w-1/2 md:pr-2'>
                                <label htmlFor="name" className='block my-1'>Name</label>
                                <input className="bg-silver p-2 rounded-md w-full" type="text" name="name" id="name" placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange} />
                            </div>
                            <div className='w-full py-5 md:py-0 md:w-1/2 md:pl-2'>
                                <label htmlFor="username" className='block my-1'>Username</label>
                                <input className="bg-silver p-2 rounded-md w-full" type="text" name="username" id="username" placeholder="Choose a username"
                                    value={formData.username}
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className='py-5'>
                            <label htmlFor="email" className='block my-1'>Email</label>
                            <input className="bg-silver p-2 rounded-md w-full" type="text" name="email" id="email" placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange} />
                        </div>
                        <div className='py-5'>
                            <label htmlFor="password" className='block my-1'>Password</label>
                            <input className="bg-silver p-2 rounded-md w-full" type="password" name="password" id="password" placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange} />
                        </div>
                        <div className='flex gap-3'>
                            <input className='flex mb-12' type="checkbox" />
                            <p className='text-wrap  text-gray-600 font-light text-base '>
                                Creating an account means you're okay with our <span className='text-blue'>Terms of Service, Privacy Policy,</span> and our default<span className='text-blue'> Notification Settings.</span>
                            </p>
                        </div>
                        <button className=" bg-pink-500 hover:bg-pink-700 text-white p-3 px-12 my-10 rounded-xl" type="submit">Create Account</button>
                    </form>
                    <div>
                        <p className='text-wrap  text-gray-600 font-light text-xs'>This site is protected by reCAPTCHA and the Google <span className='text-blue'>Privacy Policy</span> and <span className='text-blue'>Terms of Service</span> apply.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupRightPanel;
