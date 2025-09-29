import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

export default function SunrisetoSunsetDining() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Header />
            <div className="text-center" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold">Sunrise to Sunset Dining</div>
            </div>

            <div className="flex justify-content-center mb-4">
                <img
                    src="/images/image17.png"
                    alt="Breakfast"
                    className="w-full md:w-full"
                />
            </div>

            <div className="w-full md:w-full p-6">
                <div className="text-xl mx-auto mb-4 line-height-3">
                    Indulge in the ultimate convenience and culinary delight with our Full Board package at Helios Beach Resort.
                    Begin your day with a hearty buffet breakfast featuring an assortment of fresh, locally inspired dishes.
                    For lunch, enjoy a variety of light and satisfying options, perfect for recharging after a morning by the beach
                    End your day with a delectable dinner showcasing a mix of international flavors and local specialties, all
                    crafted with care by our expert chefs.
                </div>

                <div className="text-xl mx-auto mb-4 line-height-3">
                    With this package, your meals are taken care of from morning to evening, allowing you to fully relax and 
                    enjoy the serene beachfront atmosphere and resort amenities.
                </div>

                <div className="text-left mx-auto mt-5 px-3 py-3">
                    <div className="text-2xl font-bold mb-3">Note:</div>
                    <ul className="list-disc pl-4 line-height-3 text-lg">
                        <li>
                            <div>Beverages are not included in the package and are charged separatel</div>
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
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