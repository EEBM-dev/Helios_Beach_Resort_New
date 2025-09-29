import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

export default function SunKissedBreakfast() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Header />
            <div className="text-center" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold">Sun Kissed Breakfast</div>
            </div>

            <div className="flex justify-content-center mb-4">
                <img
                    src="/images/image15.png"
                    alt="Breakfast"
                    className="w-full md:w-full"
                />
            </div>

            <div className="w-full md:w-full p-6">
                <div className="text-xl mx-auto mb-4 line-height-3">
                    Start your day in paradise with the perfect blend of comfort and flavor!
                    Our Bed and Breakfast package is designed to offer a relaxing and stress-free
                    experience while letting you explore everything Helios Beach Resort has to offer.
                </div>

                <div className="text-xl mx-auto mb-4 line-height-3">
                    Wake up to the soothing sounds of the ocean and enjoy a luxurious breakfast
                    served daily at our beachfront restaurant. From freshly baked pastries and
                    seasonal tropical fruits to hearty options like eggs, sausages, and made-to-order
                    pancakes, our breakfast buffet caters to every taste. Complement your meal with
                    coffee, herbal teas, and the energy you need for a day of adventure or relaxation.
                </div>

                <div className="text-left mx-auto mt-5 px-3 py-3">
                    <div className="text-2xl font-bold mb-3">Package Highlights:</div>
                    <ul className="list-disc pl-4 line-height-3 text-lg">
                        <li>
                            <div>Daily Breakfast Buffet: Served from 7:00 AM to 10:30 AM
                            in our ocean-view dining area. </div> 
                        </li>
                        <li>
                            <div>Flexible Dining Options: Accommodates various dietary
                            preferences including vegetarian, vegan, and gluten-free options
                            (advance notice required).</div>
                        </li>
                        <li>
                            <div>Prime Location: Enjoy breakfast in a serene, beachfront
                            setting with stunning sunrise views.</div>
                        </li>
                        <li>
                            <div>Exclusive Perks: Complimentary high-speed Wi-Fi and
                            access to resort amenities such as the pool and private beach area.</div>
                        </li>
                    </ul>
                </div>

                <div className="text-left mx-auto mt-5 px-3">
                    <h2 className="text-2xl font-bold mb-3">Booking Terms:</h2>
                    <ul className="list-disc pl-4 line-height-3 text-lg">
                        <li>
                            Free cancellation up to 48 hours before check-in. Cancellations made
                            within 48 hours of arrival will incur a charge for the first night.
                        </li>
                        <li>Check-in time: 1:00 PM | Check-out time: 11:00 AM.</li>
                        <li>
                            Children under 5 years stay and eat breakfast for free when sharing a
                            room with parents.
                        </li>
                    </ul>
                </div>

                <div className="text-xl mx-auto mt-7 line-height-3">
                    Book now to enjoy an idyllic escape where your mornings are as delightful
                    as the beachfront views. With our Bed and Breakfast package, you’ll have the
                    flexibility to plan your days while savoring the best start to every morning.
                </div>

                <div className="mt-6">
                    <Button
                        label="Book Now"
                        className="btn btn-yellow text-lg"
                        style={{ height: '3rem', width: '15rem' }}
                        onClick={() => navigate("/booking")}
                    />
                </div>
            </div >
            <Footer />
        </>
    );
}