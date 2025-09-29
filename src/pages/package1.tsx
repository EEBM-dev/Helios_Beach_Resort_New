import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Package1() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Header />
            <div className="text-center" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold mb-4">Helios 2-Day Wildlife Escape</div>
                <div className="font-playfair text-md md:text-xl lg:text-xl">
                    Experience the perfect mix of relaxation and adventure with Helios Beach <br className="hidden sm:block" />
                    Resort & Travels.
                </div>
            </div>

            <div className="flex justify-content-center mb-4">
                <img
                    src="/images/wildlife_escape.png"
                    alt="wildlife"
                    className="w-full md:w-full"
                />
            </div>

            <div className="w-full md:w-full p-6">
                <div className="text-xl mx-auto mb-6 line-height-3">
                    <div className="font-playfair font-bold text-md md:text-3xl lg:text-3xl text-1">
                        Day 1: Welcome to Helios Beach Resort
                    </div>
                    <ul>
                        <li className="mb-2">
                            Arrive at Helios Beach Resort in Tangalle.
                        </li>
                        <li className="mb-2">
                            Warm welcome with refreshments and check-in.
                        </li>
                        <li className="mb-2">
                            Spend the day relaxing on the golden beach or enjoying resort amenities (pool, spa, beach
                            lounge).
                        </li>
                        <li className="mb-2">
                            Evening: Sunset stroll and dinner at the resort.
                        </li>
                    </ul>
                </div>

                <div className="text-xl mx-auto mb-6 line-height-3">
                    <div className="font-playfair font-bold text-md md:text-3xl lg:text-3xl text-1">
                        Day 2: Udawalawe Safari
                    </div>
                    <ul>
                        <li className="mb-2">
                            Departure to Udawalawe National Park (40 min)
                        </li>
                        <li className="mb-2">
                            Guided safari to spot elephants, water buffalo, exotic birds, and other wildlife.
                        </li>
                        <li className="mb-2">
                            Return to Helios Beach Resort in the evening.
                        </li>
                        <li className="mb-2">
                            Evening free to relax and enjoy resort facilities.
                        </li>
                    </ul>
                </div>

                <div className="text-xl mx-auto mb-6 line-height-3">
                    <div className="font-playfair font-bold text-md md:text-3xl lg:text-3xl text-1">
                        Package Includes:
                    </div>
                    <ul>
                        <li className="mb-2">
                            2 nights accommodation at Helios Beach Resort with breakfast
                        </li>
                        <li className="mb-2">
                            Udawalawe Safari with professional guide and park entry fees
                        </li>
                        <li className="mb-2">
                            Breakfast Included
                        </li>
                    </ul>
                </div>

                <div className="mt-6">
                    <Button
                        label="Contact Us"
                        className="btn btn-yellow text-lg"
                        style={{ height: '3rem', width: '15rem' }}
                        onClick={() => navigate("/contactus")}
                    />
                </div>
            </div >
            <Footer />
        </>
    );
}