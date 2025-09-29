import { useEffect } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Package2() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Header />
            <div className="text-center" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold mb-4">
                    Helios 6-Day Sri Lanka Adventure Package
                </div>
                <div className="font-playfair text-md md:text-xl lg:text-xl">
                    Discover the best of southern Sri Lanka with a perfect balance of relaxation, wildlife, and
                    cultural experiences.
                </div>
            </div>

            <div className="flex justify-content-center mb-4">
                <img
                    src="/images/adventure_package.png"
                    alt="adventure"
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
                            Early morning departure to Udawalawe National Park.
                        </li>
                        <li className="mb-2">
                            Guided safari to spot elephants, water buffalo, and exotic wildlife.
                        </li>
                        <li className="mb-2">
                            Enjoy a picnic lunch surrounded by nature.
                        </li>
                        <li className="mb-2">
                            Return to Helios Beach Resort in the evening.
                        </li>
                    </ul>
                </div>

                <div className="text-xl mx-auto mb-6 line-height-3">
                    <div className="font-playfair font-bold text-md md:text-3xl lg:text-3xl text-1">
                        Day 3: Turtle Watching at Rekawa
                    </div>
                    <ul>
                        <li className="mb-2">
                            Free morning at the resort to relax or enjoy beach activities.
                        </li>
                        <li className="mb-2">
                            Evening transfer to Rekawa Turtle Conservation site.
                        </li>
                        <li className="mb-2">
                            Observe endangered sea turtles and learn about conservation efforts.
                        </li>
                        <li className="mb-2">
                            Return to Helios Beach Resort for overnight stay.
                        </li>
                    </ul>
                </div>

                <div className="text-xl mx-auto mb-6 line-height-3">
                    <div className="font-playfair font-bold text-md md:text-3xl lg:text-3xl text-1">
                        Day 4: Lagoon Safari
                    </div>
                    <ul>
                        <li className="mb-2">
                            Depart for the Wellaodaya Lagoon, located right in front of Helios Beach Resort.
                        </li>
                        <li className="mb-2">
                            Enjoy a scenic boat safari through mangroves, islands, and natural beauty.
                        </li>
                        <li className="mb-2">
                            Explore local flora and fauna, small temples, and peaceful waterways.
                        </li>
                        <li className="mb-2">
                            Afternoon return to Helios Beach Resort.
                        </li>
                        <li className="mb-2">
                            Evening: Farewell dinner and cultural performance at the resort.
                        </li>
                    </ul>
                </div>

                <div className="text-xl mx-auto mb-6 line-height-3">
                    <div className="font-playfair font-bold text-md md:text-3xl lg:text-3xl text-1">
                        Day 5: Whale Watching & Galle City Tour
                    </div>
                    <ul>
                        <li className="mb-2">
                            Early morning whale watching excursion (Mirissa).
                        </li>
                        <li className="mb-2">
                            Afternoon visit to Galle Fort – a UNESCO World Heritage Site.
                        </li>
                        <li className="mb-2">
                            Explore local flora and fauna, small temples, and peaceful waterways.
                        </li>
                        <li className="mb-2">
                            Return to Helios Beach Resort in the evening.
                        </li>
                    </ul>
                </div>

                <div className="text-xl mx-auto mb-6 line-height-3">
                    <div className="font-playfair font-bold text-md md:text-3xl lg:text-3xl text-1">
                        Day 6: Departure
                    </div>
                    <ul>
                        <li className="mb-2">
                            Breakfast at the resort.
                        </li>
                        <li className="mb-2">
                            Check-out.
                        </li>
                    </ul>
                </div>

                <div className="text-xl mx-auto mb-6 line-height-3">
                    <div className="font-playfair font-bold text-md md:text-3xl lg:text-3xl text-1">
                        Package Includes:
                    </div>
                    <ul>
                        <li className="mb-2">
                            5 nights’ accommodation at Helios Beach Resort – Deluxe Sea View Bungalow with
                            breakfast
                        </li>
                        <li className="mb-2">
                            All transfers in comfortable air-conditioned vehicles
                        </li>
                        <li className="mb-2">
                            Guided Udawalawe Safari, Turtle Watching, Whale Watching, Wellaodaya Lagoon Safari
                        </li>
                        <li className="mb-2">
                            Entrance fees for parks and conservation sites
                        </li>
                        <li className="mb-2">
                            Professional English-speaking guide
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