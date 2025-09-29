import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

export default function Accommodations() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const accommodations = [
        {
            image: "/images/image31.png",
            title: "Bungalow with garden (Non AC)",
            description: "Private bungalow surrounded by tropical gardens with ultimate privacy.",
            amenities: ["Free Wifi", "Fan", "Private Bathroom", "Mini Fridge"],
            features: ["Queen Size Bed", "Living Area", "Private Entrance", "24/7 Room Service"],
            category: "Bungalow with garden (Non AC)",
        },
        {
            image: "/images/image32.png",
            title: "Deluxe Sea view bungalow",
            description: "Spacious deluxe room with premium furnishings and stunning ocean views.",
            amenities: ["Free Wifi", "Air Conditioning", "Private Bathroom", "Mini Fridge"],
            features: ["King Size Bed", "Seating Area", "Ocean-view Balcony", "24/7 Room Service"],
            category: "Deluxe Sea view bungalow",
        },
    ];

    return (
        <>
            <Header />
            <div className="text-center" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-5xl md:text-8xl lg:text-8xl font-bold p-2">Our Accommodations</div>
                <div className="font-playfair text-md md:text-xl lg:text-xl p-2">
                    Choose from our carefully designed rooms and bungalows, each offering comfort,<br className="hidden sm:block" />
                    luxury, and stunning views of the ocean or tropical gardens.
                </div>
            </div>
            <div className="flex flex-wrap p-4">
                {accommodations.map((item, index) => (
                    <div key={index} className="col-12 md:col-12">
                        <Card
                            className="shadow-2 overflow-hidden flex flex-column h-full"
                            style={{ borderRadius: '3rem' }}
                        >
                            <div className="grid">
                                <div className="col-12 md:col-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full border-round-left-lg"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                <div className="col-12 md:col-6 p-2 md:p-4">
                                    <h2 className="font-playfair text-6xl text-1 font-bold">{item.title}</h2>
                                    <p className="mb-6 text-2xl">{item.description}</p>

                                    <div className="mb-3 mt-6">
                                        <h4 className="text-xl font-semibold mb-2">Amenities</h4>
                                        <div className="grid mt-2">
                                            {item.amenities.map((a, i) => (
                                                <div key={i} className="col-6 text-lg">
                                                    <span>• {a}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6 mt-6">
                                        <h4 className="text-xl font-semibold mb-2">Features</h4>
                                        <div className="grid mt-2">
                                            {item.features.map((f, i) => (
                                                <div key={i} className="col-6 text-lg">
                                                    <span>★ {f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <Button
                                            label="Book Now"
                                            className="btn-blue-light-r w-full text-lg"
                                            style={{ height: '4rem' }}
                                            onClick={() => navigate('/booking', { state: { category: item.category } })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}