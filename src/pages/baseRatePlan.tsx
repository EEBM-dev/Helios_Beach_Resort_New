import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

export default function BaseRatePlan() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Header />
            <div className="text-center" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold">Base Rate Plan</div>
            </div>

            <div className="flex justify-content-center mb-4">
                <img
                    src="/images/image18.png"
                    alt="Breakfast"
                    className="w-full md:w-full"
                />
            </div>

            <div className="w-full md:w-full p-6">
                <div className="text-xl mx-auto mb-4 line-height-3">
                    Discover the ultimate flexibility and freedom to design your perfect getaway with our Base Rate Plan at Helios
                    Beach Resort. Tailored for travelers who love to explore at their own pace, this package offers
                    accommodations paired with the opportunity to customize your stay.
                </div>

                <div className="text-xl mx-auto mb-4 line-height-3">
                    Whether you’re here for a romantic escape, a family adventure, or a solo retreat, our Base Rate Plan provides
                    the ideal starting point. Unwind in our elegantly designed rooms, all featuring modern amenities, plush
                    bedding, and private terraces offering breathtaking views of the beach or lush tropical gardens.
                </div>

                <div className="text-left mx-auto mt-5 px-3 py-3">
                    <div className="text-2xl font-bold mb-3">Package Highlights:</div>
                    <ul className="list-disc pl-4 line-height-3 text-lg">
                        <li>
                            <div>Accommodation Only: Perfect for guests who prefer dining flexibility and enjoy exploring local cuisine or resort dining at their leisure.</div>
                        </li>
                        <li>
                            <div>Prime Location: Stay just steps away from our pristine private beach, sparkling pools, and resort amenities.</div>
                        </li>
                        <li>
                            <div>Complimentary Amenities: Includes free high-speed Wi-Fi, in-room tea and coffee facilities, and access to the resort’s recreational activities.</div>
                        </li>
                        <li>
                            <div>Customizable Add-Ons: Enhance your stay with optional upgrades, including breakfast, spa treatments or guided excursions.</div>
                        </li>
                    </ul>
                </div>

                <div className="text-left mx-auto mt-5 px-3">
                    <h2 className="text-2xl font-bold mb-3">Booking Terms:</h2>
                    <ul className="list-disc pl-4 line-height-3 text-lg">
                        <li>
                            Free cancellation up to 72 hours before check-in. Cancellations made within 72 hours of arrival will incur a charge for the first night.
                        </li>
                        <li>Check-in time: 1:00 PM | Check-out time: 11:00 AM.</li>
                        <li>
                            Children under 12 years stay free when sharing a room with parents (max occupancy rules apply).
                        </li>
                        <li>
                            Early check-in or late check-out is available upon request.
                        </li>
                    </ul>
                </div>

                <div className="text-xl mx-auto mt-7 line-height-3">
                    This package is ideal for travelers seeking the freedom to plan their own meals, adventures, and experiences.
                    Enjoy the flexibility of exploring local restaurants, indulging in à la carte dining at the resort, or discovering
                    nearby attractions all while relaxing in the luxurious comfort of Helios Beach Resort.
                </div>

                <div className="text-xl mx-auto mt-5 line-height-3">
                    Book now and start crafting your dream vacation,
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