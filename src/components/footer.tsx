import React from "react";
import { Divider } from "primereact/divider";
import { To, useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    const links = [
        { label: "Home", path: "/" },
        { label: "About", path: "/aboutus" },
        { label: "Rooms", path: "/accommodations" },
        { label: "Travels", path: "/destinations" },
        { label: "Services", path: "/services" },
        { label: "Gallery", path: "/gallery" },
        /*{ label: "Booking", path: "/booking" },*/
        { label: "Contact", path: "/contactus" }
    ];

    const handleNavigation = (path: To) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer style={{ backgroundColor: '#0077B6', color: '#ffffff' }}>
            <div className="p-3 md:p-5">
                <div className="grid">
                    <div className="col-12 md:col-6 align-items-center text-left md:text-left gap-3">
                        <img
                            src="/images/logo.png"
                            alt="Helios Beach Resort"
                            style={{ maxHeight: "10rem" }}
                        />
                        <div>
                            <div className="mb-3 m-0">
                                Helios Beach Resort, born on Tangalle’s golden shores, began as <br className="hidden sm:block" />
                                a boutique haven of comfort and Sri Lankan warmth. Now expanded <br className="hidden sm:block" />
                                as Helios Travels, we offer world-class stays and unforgettable <br className="hidden sm:block" />
                                journeys through Sri Lanka’s landscapes, culture, and heritage.

                                <div className="mt-3 font-semibold">BR. Number: PV 00239733</div>
                            </div>
                            <label className="font-playfair font-bold block mb-2">FOLLOW US:</label>
                            <div className="flex gap-3 text-xl">
                                <a href="https://www.facebook.com/heliosbeachranna?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                    <i className="pi pi-facebook"></i>
                                </a>
                                <a
                                    href="tel:+94761922620"
                                    className="text-green-500 hover:text-green-700"
                                >
                                    <i className="pi pi-whatsapp"></i>
                                </a>
                                <a href="https://www.instagram.com/heliosbeachresort/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                                    <i className="pi pi-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 md:col-3 text-left md:text-left mt-4 md:mt-0">
                        <div className="font-playfair font-bold mb-3">QUICK LINKS</div>
                        <ul className="list-none p-0 m-0">
                            {links.map((link, i) => (
                                <li
                                    key={i}
                                    className="mb-2 cursor-pointer hover:underline"
                                    onClick={() => handleNavigation(link.path)}
                                >
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-12 md:col-3 text-left md:text-left mt-4 md:mt-0">
                        <div className="font-playfair font-bold mb-3">OUR CONTACTS</div>
                        <div className="m-0">Address:</div>
                        <div className="mb-3">Wellaodaya, Ranna, Tangalle, Sri Lanka.</div>

                        <div className="m-0">Phone No:</div>
                        <div className="mb-1">+94 761922620 (Reservations)</div>
                        <div className="mb-3">+94 702676876 (WhatsApp)</div>

                        <div className="m-0">Email:</div>
                        <div>heliosbeachresort@gmail.com</div>
                    </div>
                </div>
            </div>

            <Divider className="m-0" />

            <div className="text-center text-sm p-3">
                2025 © All Rights Reserved | Helios Beach Resort (Pvt) Ltd | Designed & Developed by {" "}
                <a
                    href="https://everefficient.lk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                    style={{ color: '#ffffff' }}
                >
                    EVER EFFICIENT Business Management (Pvt) Ltd
                </a>
            </div>
        </footer>
    );
}