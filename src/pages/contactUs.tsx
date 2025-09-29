import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Message } from 'primereact/message';
import emailjs from '@emailjs/browser';

import Header from '../components/header';
import Footer from '../components/footer';

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        emailjs.init("dhGmVpAlLONpEZzF2");
    }, []);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        emailjs.send(
            'service_syixo09',
            'template_abmb1me',
            {
                from_name: formData.firstName,
                from_email: formData.email,
                phone: formData.phone,
                message: formData.message
            }
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({
                    firstName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setErrorMessage('Failed to send message. Please try again later.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/94702676876", "_blank");
    };

    return (
        <div>
            <Header />
            <div className="text-center" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold">Contact us</div>
            </div>

            <div className="p-4" style={{ backgroundColor: '#f4faff' }}>
                {successMessage && (
                    <div className="flex justify-content-center mb-4">
                        <Message severity="success" text={successMessage} />
                    </div>
                )}
                {errorMessage && (
                    <div className="flex justify-content-center mb-4">
                        <Message severity="error" text={errorMessage} />
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap justify-content-center" style={{ margin: '1rem 0rem 1rem 0rem' }}>
                        <div className="col-12 md:col-10 lg:col-8">
                            <div className="field mb-3">
                                <InputText
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="First Name"
                                    className="w-full p-3 border-round-lg mb-2"
                                    style={{ backgroundColor: '#ECECEC' }}
                                    required
                                />
                            </div>
                            <div className="field mb-3">
                                <InputText
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email Address"
                                    className="w-full p-3 border-round-lg mb-2"
                                    style={{ backgroundColor: '#ECECEC' }}
                                    required
                                />
                            </div>
                            <div className="field mb-3">
                                <InputText
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number"
                                    className="w-full p-3 border-round-lg mb-2"
                                    style={{ backgroundColor: '#ECECEC' }}
                                />
                            </div>
                            <div className="field mb-4">
                                <InputTextarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Your Message"
                                    rows={5}
                                    className="w-full p-3 border-round-lg mb-2"
                                    autoResize
                                    style={{ backgroundColor: '#ECECEC' }}
                                    required
                                />
                            </div>
                            <Button
                                label={loading ? "Sending..." : "Contact Now"}
                                className="w-full p-3 border-round-lg btn btn-blue-light-r"
                                type="submit"
                                disabled={loading}
                            />
                        </div>
                    </div>
                </form>
            </div>

            <div className="flex flex-wrap p-4 flex justify-content-center">
                <div className="col-12 md:col-2">
                    <Card className="h-full w-full shadow-2 border-round-lg flex justify-content-left p-2">
                        <div className="font-playfair mb-4 text-2xl font-bold"><i className="pi pi-phone text-2xl mb-3 mx-2" /> CALL US</div>
                        <div className="m-2">
                            <a href="tel:+94761922620" className='font-bold no-underline' style={{ color: '#0077B680' }}>+94 76 192 2620</a>
                            <div className='mb-4 font-bold' style={{ color: '#0077B680' }}>(Reservations)</div>
                            <Button
                                label="+94 70 267 6876 (Whatsapp)"
                                className="bg-white border-none p-0 text-2 text-left"
                                style={{ color: '#0077B680' }}
                                onClick={handleWhatsAppClick}
                            />
                        </div>
                    </Card>
                </div>

                <div className="col-12 md:col-3">
                    <Card className="h-full w-full shadow-2 border-round-lg flex justify-content-left p-2">
                        <div className="font-playfair mb-2 text-2xl font-bold"><i className="pi pi-envelope text-2xl mb-3 mx-2" />EMAIL US</div>
                        <div className='m-3 mb-5 text-xl'>
                            <a href="mailto:heliosbeachresort@gmail.com" className='font-semibold no-underline' style={{ color: '#0077B680' }}>heliosbeachresort@gmail.com</a>
                        </div>
                        <div className="font-playfair mb-2 text-2xl font-bold"><i className="pi pi-map-marker text-2xl mb-3 mx-2" />LOCATION</div>
                        <div className="m-3 font-semibold text-xl" style={{ color: '#0077B680' }}>
                            Wellaodaya, Ranna, Tangalle, Sri Lanka
                        </div>
                    </Card>
                </div>

                <div className="col-12 md:col-2">
                    <Card className="h-full w-full shadow-2 border-round-lg flex justify-content-left p-4">
                        <i className="pi pi-file-check text-5xl text-1 mb-4"></i>
                        <div className="font-playfair font-bold text-xl mb-2">BOOKING PLATFORMS</div>
                        <div className='mt-5 mb-3'>
                            <img
                                src="/icons/booking.png"
                                alt="Booking.com"
                                style={{ height: "3.5rem", objectFit: "contain" }}

                            />
                            <img
                                src="/icons/tripadvisor.png"
                                alt="Tripadvisor"
                                style={{ height: "3.5rem", objectFit: "contain" }}
                            />
                        </div>
                    </Card>
                </div>
            </div>

            <div className="p-4" style={{ backgroundColor: '#f4faff' }}>
                <div className="flex justify-content-center mb-4">
                    <span className="font-playfair text-3xl font-bold">Find Us Here</span>
                </div>

                <div className="relative flex justify-content-center">
                    <iframe
                        title="Helios Beach Resort Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.3530592652337!2d80.88500719999999!3d6.063719600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6b3f88ed44bb9%3A0x3979121ae03fd2b5!2sHelios%20Beach%20resort!5e1!3m2!1sen!2slk!4v1755168067603!5m2!1sen!2slk"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: '1rem' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="text-center mt-3">
                    <a
                        href="https://maps.app.goo.gl/E95ftxBXDUmjFo479"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        View on Google Maps
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}
