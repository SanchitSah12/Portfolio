
import Swal from 'sweetalert2';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_dnqo4tp";
const TEMPLATE_ID = "template_yhzl5a9";
const USER_ID = "user_mYSixpJjWbz9jyZ9iqwYr";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
    };

    return (
        <section className="reveal mt-10" id="contact">
            
            <h1 className="font-bold text-center text-3xl">Contact Me</h1>
            <p className="text-center">Connect with me, send an email.</p>

            <form ref={form} onSubmit={sendEmail}>
                <div>

                </div>
                
                <div className=" mx-40 lg:mx-80 flex flex-col" >
                    <div className="flex flex-col">
                        <label className="text-gray-600">Name:</label>
                        <input className="inputForm" type="text" name="from_name" />
                        <label className="text-gray-600">Email:</label>
                        <input className="inputForm" type="email" name="user_email" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-600">Message:</label>
                        <textarea className="inputForm " name="message" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-gray-600">Suggestions:</label>
                        <textarea className="inputForm mb-4" name="suggestions" />
                    </div>
                    <input className="text-white bg-black hover: p-4 hover:bg-gray-800" type="submit" value="Send" />
                    {/* <div className="w-full py-7 -translate-y-14 hover:bg-gray-500 hover:bg-opacity-60 "></div> */}

                </div>

            </form>
        </section>
    );
};

export default Contact;