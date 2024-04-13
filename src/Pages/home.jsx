import { React, useEffect } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import FooterTable from '../components/footerTable'
import Footer from '../components/footer'
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { makeRequest } from '../axios'



function Home() {
    const location = useLocation();
    const email = location.state.email;
    console.log("Home");
    console.log(email);
    const emailData = {
        email: email
    };
    useEffect(() => {
        const sendMail = async () => {
            try {
                const submitResponse = await makeRequest.post('user/sendmail', emailData);
                console.log('Response:', submitResponse.data);
            } catch (error) {
                console.error('Error sending mail:', error);
            }
        };

        sendMail();
    }, [email]);

    return (
        <div>

            <Navbar />
            <Hero />
            <FooterTable />
            <Footer />
        </div>
    )
}

export default Home