import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

export default function TheHalfFeast() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Header />
            <div className="text-center" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold">The Half Feast</div>
            </div>

            <div className="flex justify-content-center mb-4">
                <img
                    src="/images/image16.png"
                    alt="Breakfast"
                    className="w-full md:w-full"
                />
            </div>

            <div className="w-full md:w-full p-6">
                <div className="text-xl mx-auto mb-4 line-height-3">
                    Experience the perfect balance of comfort and convenience with our Half Board package at Helios Beach
                    Resort. Enjoy a delightful start to your day with a lavish buffet breakfast featuring a variety of fresh, locally
                    sourced dishes. In the evening, savor a sumptuous dinner with an array of international and local cuisines
                    crafted by our talented chefs.
                </div>

                <div className="text-xl mx-auto mb-4 line-height-3">
                    This package allows you the flexibility to explore the resort and surrounding attractions during the day, while 
                    ensuring you return to satisfying meals in a serene beachfront setting. Perfect for travelers seeking relaxation 
                    and culinary indulgence without the hassle of planning.
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