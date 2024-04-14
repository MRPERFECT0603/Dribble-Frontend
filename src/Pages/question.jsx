import React, { useState } from 'react';
import logo2 from '../assets/logo2.png';
import $ from 'jquery';
import dribble1 from "../assets/dribble-icon-1.png"
import dribble2 from "../assets/dribble-icon-2.png"
import dribble3 from "../assets/dribble-icon-3.png"
import axios from 'axios';
import { useLocation, useNavigate, Link, Navigate } from "react-router-dom";
import { makeRequest } from '../axios';


function QuestionPage() {

    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state.username;
    const email = location.state.email;
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [formData, setFormData] = useState({
        desc1: { value: "I'm a designer looking to share my work", checked: false },
        desc2: { value: "I'm looking to hire a designer", checked: false },
        desc3: { value: "I'm looking for design inspiration", checked: false }
    });

    const handleChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: { ...formData[name], checked: checked }
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        const selectedDesc = Object.values(formData).filter(desc => desc.checked).map(desc => desc.value).shift();
        const desc = {
            username: username,
            description: selectedDesc
        };
        try {
            const response = await makeRequest.post('user/desc', desc);
            console.log('Response:', response.data);
            navigate('/home', { state: { email: email } });
        } catch (error) {
            console.error('Error:', error);
        }

    }

    $(document).on('change', 'input[type="checkbox"]', function () {
        const $parent = $(this).closest('.fixed-container');
        const $image = $parent.find('img');
        const $description = $parent.find('.description');
        const $borderContainer = $parent.find('.borderContainer');
        const $btn = $('.btn');


        if (this.checked) {
            $image.animate({ marginTop: '-150px' });
            $description.fadeIn();
            if ($parent.hasClass('container-1')) {
                $borderContainer.css({
                    "border-left": "4px solid #FF00B3",
                    "border-right": "4px solid #FF00B3",
                    "border-bottom": "4px solid #FF00B3"
                });
                setShowText1(true);
                $btn.css("background-color", "#FF00B3");
            }
            else if ($parent.hasClass('container-2')) {
                $borderContainer.css({
                    "border-left": "4px solid #FF00B3",
                    "border-right": "4px solid #FF00B3",
                    "border-bottom": "4px solid #FF00B3"
                });
                setShowText2(true);
                $btn.css("background-color", "#FF00B3");

            }
            else if ($parent.hasClass('container-3')) {
                $borderContainer.css({
                    "border-left": "4px solid #FF00B3",
                    "border-right": "4px solid #FF00B3",
                    "border-bottom": "4px solid #FF00B3"
                });
                setShowText3(true);
                // $btn.before("<p>Anything else? You can select multiple</p>");
                $btn.css("background-color", "#FF00B3");
                // $btn.after("<p>or Press Return</p>");

            }
        } else {
            $image.animate({ marginTop: '0' });
            $description.fadeIn();
            if ($parent.hasClass('container-1')) {
                $borderContainer.css("border", "1px solid rgb(156, 163, 175)");
                setShowText1(false);
                $btn.css("background-color", "rgb(249, 168, 212)");
            }
            else if ($parent.hasClass('container-2')) {
                $borderContainer.css("border", "1px solid rgb(156, 163, 175)");
                setShowText2(false);
                $btn.css("background-color", "rgb(249, 168, 212)");
            }
            else if ($parent.hasClass('container-3')) {
                $borderContainer.css("border", "1px solid rgb(156, 163, 175)");
                setShowText3(false);
                $btn.css("background-color", "rgb(249, 168, 212)");
            }
        }
    });

    return (
        <div className="mt-10 mx-w-fit">
            <div className="flex gap-1">
                <img className="h-10 mx-10" src={logo2} alt="" />
                <span className="flex justify-center items-center bg-slate-100 p-2 px-4 rounded-lg">&lt;</span>
            </div>
            <div className="mx-auto text-center font-bold my-10">
                <h1 className="text-3xl">What brings you to Dribbble?</h1>
                <p className="text-base py-5 text-gray-500 font-light">
                    Select the options that best describe you. Don't worry, you can explore other options later.
                </p>
            </div>
            <div className="flex  flex-col lg:flex-row  px-10  h-auto  gap-20 justify-center items-center">
                <div className="fixed-container w-80 h-80 overflow-visible container-1">
                    <div className="flex flex-col border-gray-400 border basis-1/4 rounded-xl borderContainer ">
                        <div className="flex h-3/4">
                            <img className="w-fit object-contain mb-20" src={dribble1} alt="" />
                        </div>
                        <div className="flex justify-center -mt-10 px-8">
                            <p className="text-lg text-wrap font-bold text-center description">I'm a designer looking to share my work</p>
                        </div>
                        <p className="flex justify-center px-8 text-base py-3 text-gray-500 font-light text-center">
                            {showText1 && "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration."}
                        </p>
                        <div className="flex justify-center pb-2 "><input type="checkbox" name="desc1" checked={formData.desc1.checked} onChange={handleChange} /></div>
                    </div>
                </div>
                <div className="fixed-container w-80 h-80 overflow-visible container-2">
                    <div className="flex flex-col border-gray-400 border basis-1/4 rounded-xl borderContainer ">
                        <div className="flex h-3/4">
                            <img className="w-fit object-contain mb-20" src={dribble2} alt="" />
                        </div>
                        <div className="flex justify-center -mt-10 px-8">
                            <p className="text-lg text-wrap font-bold text-center description">I'm looking to hire a designer</p>
                        </div>
                        <p className="flex justify-center px-8 text-base py-3 text-gray-500 font-light text-center">
                            {showText2 && "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration."}
                        </p>
                        <div className="flex justify-center pb-2"><input type="checkbox" name="desc2" checked={formData.desc2.checked} onChange={handleChange} /></div>
                    </div>
                </div>
                <div className="fixed-container w-80 h-80 overflow-visible container-3">
                    <div className="flex flex-col border-gray-400 border basis-1/4 rounded-xl borderContainer ">
                        <div className="flex h-3/4">
                            <img className="w-fit object-contain mb-20" src={dribble3} alt="" />
                        </div>
                        <div className="flex justify-center -mt-10 px-8">
                            <p className="text-lg text-wrap font-bold text-center description">I'm looking for design inspiration</p>
                        </div>
                        <p className=" flex justify-center px-8 text-base py-3 text-gray-500 font-light text-center">
                            {showText3 && "With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration."}
                        </p>
                        <div className="flex justify-center pb-2"><input type="checkbox" name="desc3" checked={formData.desc3.checked} onChange={handleChange} /></div>
                    </div>
                </div>
            </div>


            <div className='flex mt-20 mx-auto'>

                <button onClick={handleSubmit} className=" btn bg-pink-300 text-white p-3 px-12 my-10 rounded-xl mx-auto" type="submit">Create Account</button>

            </div>

        </div>
    );
}

export default QuestionPage;
