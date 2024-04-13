import React, { useState } from 'react';
import logo2 from '../assets/logo2.png';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import { makeRequest } from '../axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

function CreateAcc() {

    const navigate = useNavigate();
    const location = useLocation();
    const [Data, setData] = useState({
        email: '',
        username: '',
        location: '',
        avatar: ''
    });
    const username = location.state.username;
    const email = location.state.email;
    console.log(username);
    const [imageUpload, setImageUpload] = useState("");
    const [locationData, setLocationData] = useState("");
    const [imagePreview, setImagePreview] = useState(null); // State to hold the image preview

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImageUpload(selectedImage);

        // Preview the selected image
        if (selectedImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selectedImage);
        } else {
            setImagePreview(null);
        }
    };

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("file", imageUpload);
        formData.append("upload_preset", "Dribble");

        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dsbqi78at/image/upload",
                formData
            );
            console.log(response);
            return response; // Return the response after successful upload
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error; // Throw the error to handle it in the calling function
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const imageResponse = await uploadImage();
            console.log('Image uploaded:', imageResponse);
            const imageUrl = imageResponse.data.url;
            console.log(imageUrl);
            // const form = new FormData();
            // form.append(["email"], email);
            // form.append(["username"], username);
            // form.append(["location"], locationData);
            // form.append(["avatar"], imageUrl);
            const Data = {
                email: email,
                username: username,
                location: locationData,
                avatar: imageUrl,
            };

            console.log(Data);
            // console.log("FormData contents:");
            // for (let pair of data.entries()) {
            //     console.log(pair[0] + ": " + pair[1]);
            // }
            const submitResponse = await makeRequest.post('user/create', Data);
            console.log('Response:', submitResponse.data);


            navigate('/ques', { state: { username: Data.username, email: Data.email } });

        }
        catch (error) {
            console.error('Error:', error);
        }

    }
    return (
        <div className='mt-10'>
            <div>
                <img className="h-10 mx-10" src={logo2} alt="" />
            </div>
            <div className='mx-auto max-w-fit pl-4'>
                <div className='mt-10'>
                    <h1 className='text-4xl font-bold pb-4 text-black'>Welcome! Let's create your profile</h1>
                    <p className='text-base font-light pb-4 text-gray-600'>Let others get to know you better! You can do these later</p>
                </div>
                <div className='pl-4'>
                    <form action="">
                        <label htmlFor="image" className='block  text-xl md:text-2xl font-bold my-1 pb-5'>Add an avatar</label>
                        <div className='flex flex-col md:flex-row gap-8'>
                            <div className='h-44 w-44 border-dashed border-gray-400 border-4 rounded-full flex justify-center items-center'>
                                {imagePreview ? (
                                    <img className="w-full h-full rounded-full object-cover" src={imagePreview} alt="Preview" />
                                ) : (
                                    <FontAwesomeIcon icon={faCamera} size="2x" color='grey' />
                                )}
                            </div>
                            <div className='flex flex-col justify-center gap-4'>
                                <input className="border-dashed" type="file" name="image" id="image" placeholder='Choose Image'
                                   onChange={handleImageChange}  />
                                <p className=' text-gray-400'>&gt; Or choose one of our defaults</p>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="location" className='block my-10 pt-10 text-black font-bold text-2xl'>Add your location</label>
                            <input className=" border-b-2 w-full py-2 px-2 text-xl" type="text" name="location" id="location" placeholder='Enter a location'
                                onChange={(e) => { setLocationData(e.target.value); }} />
                        </div>
                        <button onClick={handleSubmit} className=" bg-pink-500 hover:bg-pink-700 text-white p-3 px-24 my-10 rounded-xl " type="submit">Next</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateAcc;
