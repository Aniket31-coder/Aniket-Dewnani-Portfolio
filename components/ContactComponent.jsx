import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function ContactComponent() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [captchaVal, setCaptchaVal] = useState('')
    var submit = false;
    const [showModal, setShowModal] = useState(false)
    var userName = ''

    const SuccessModal = () => {
        return (
            <>
                {/* <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
                onClick={() => }>
                    Toggle modal
                </button> */}

                <div id="popup-modal" tabIndex="-1" className={!showModal ? "hidden" : "overflow-y-auto overflow-x-hidden fixed flex items-center justify-center top-0 right-0 left-0 z-50 md:inset-0 h-full my-auto"} style={{"background": "rgba(0,0,0,0.2)"}}>
                    <div className="relative p-4 w-full max-w-md h-auto z-20">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" onClick={() => setShowModal(!showModal)}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                            </button>
                            <div className="p-6 text-center">
                                <svg className="mx-auto mb-4 w-14 h-14 text-green-400 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-800">
                                    Thanks for filling out the form, {userName}! 🥳 I will be contacting you shortly! 🤟
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents Refreshing the Form
        userName = name
        // console.log(name + "  " + email +" " + body);
        submit = true;
        var templateParams = {
            name: name,
            email: email,
            message: body,
            'g-recaptcha-response': captchaVal,
        };
        if(captchaVal != null) {
            // console.log('Sending Mail : ',process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, templateParams)
           
            emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, templateParams, process.env.EMAILJS_PUBLIC_KEY)
                .then(function(response) {
                    // console.log('SUCCESS!', response.status, response.text);
                    setShowModal(!showModal);
                    setName('');
                    setBody('');
                    setEmail('');
                }, function(error) {
                // console.log('FAILED...', error);
                });
        }
        else {
            alert('Please verify that you are not a robot🤖!!')
        }
    }

    return (
        <>
            <SuccessModal />
            <div id="contact" className="pb-20 pt-12">
                <div className="border-x-2 border-gray-600 w-fit px-4 mx-auto">
                    <h4 className='font-bold titleName text-2xl text-center tracking-wider'>Contact Me 📧</h4>
                </div>
                <div className="w-10/12 mx-auto md:w-8/12 lg:w-6/12 bg-zinc-400 mt-12 p-3 md:p-4 lg:p-12 rounded-xl">
                <form className='grid grid-cols-1 gap-6 max-w-full' onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="text-white titleName font-semibold tracking-wider">Full name</span>
                        <input type="text" required className="mt-1 w-full p-2 rounded-lg outline-none" placeholder="Your Name" value={name} onChange={(e) => {setName(e.target.value)}} />
                    </label>
                    <label className="block">
                        <span className="text-white titleName font-semibold tracking-wider">Email address</span>
                        <input type="email" 
                        required className="mt-1 w-full p-2 rounded-lg outline-none valid:focus:ring-green-500 invalid:focus:ring-red-600" value={email}
                        placeholder="Your Email" onChange={(e) => {setEmail(e.target.value)}} />
                    </label>
                    <label className="block">
                        <span className="text-white titleName font-semibold tracking-wider">Message</span>
                        <textarea required className="mt-1 block w-full p-4 rounded-lg outline-none" rows={3} placeholder="Your Message" value={body} onChange={(e) => {setBody(e.target.value)}}></textarea>
                    </label>
                    <div className='hidden md:block'>
                        <ReCAPTCHA
                            sitekey={process.env.RECAPTCHA_SITE_KEY}
                            onChange={(value)=> {
                                setCaptchaVal(value)
                                console.log("Captcha value:", value);
                                // captcha = value;
                            }}
                            size="normal"
                            required
                            className = "mt-1 mx-0"
                        />
                    </div>
                    <div className='flex md:hidden'>
                        <ReCAPTCHA
                            sitekey={process.env.RECAPTCHA_SITE_KEY}
                            onChange={(value)=> {
                                setCaptchaVal(value)
                                // console.log("Captcha value:", value);
                                // captcha = value;
                            }}
                            size="compact"
                            required
                            className = "mt-1 mx-auto"
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='text-gray-700 hover:text-white w-fit font-bold tracking-wider p-3 rounded-xl mx-auto hover:bg-slate-500 border-2 border-black bg-white titleName px-6 mt-3'
                        data-modal-toggle="popup-modal"
                    >Submit</button>
                </form>
                </div>
            </div>
        </>
    )
}

export default ContactComponent