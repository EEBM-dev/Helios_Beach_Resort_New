import React, { useEffect } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';

import Header from '../components/header';
import Footer from '../components/footer';

export default function SpecialOffers() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const offers = [
        {
            title: "Sun-Kissed Breakfast",
            tag: "Popular",
            image: "/images/image15.png",
            description: "Start your day with a delicious breakfast featuring fresh tropical fruits, local specialties, and international favorites served with stunning ocean views.",
            includes: ["Tropical Fruits", "Fresh Juices", "Sri Lankan Breakfast"],
            nav: '/sunkissedbreakfast'
        },
        {
            title: "The Half Feast",
            tag: "Traditional",
            image: "/images/image16.png",
            description: "Experience authentic Sri Lankan cuisine with a curated selection of traditional dishes that showcase the rich flavors and spices of the island.",
            includes: ["Rice & Curry", "Fried Lake Fish Curry", "Vegetable Dishes"],
            nav: '/thehalffeast'
        },
        {
            title: "Sunrise to Sunset Dining",
            tag: "Best Value",
            image: "/images/image17.png",
            description: "A complete culinary journey from dawn to dusk featuring breakfast, lunch, and dinner with the finest selection of local and international dishes.",
            includes: ["Breakfast", "Lunch", "Beverages"],
            nav: '/sunrisetosunsetdining'
        },
        {
            title: "Base Rate Plan",
            tag: "Essential",
            image: "/images/image18.png",
            description: "Our essential accommodation package with comfortable rooms and basic amenities perfect for budget-conscious travelers who don’t want to compromise quality.",
            includes: ["Accommodation", "Wi-Fi", "Breakfast Included"],
            nav: '/baserateplan'
        }
    ];

    return (
        <>
            <Header />
            <div className="text-center p-3 md:p-0" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold">Special Offers</div>
                <div className="font-playfair text-md md:text-xl lg:text-xl">
                    Discover our carefully crafted packages designed to enhance your stay with <br className="hidden sm:block" />
                    exceptional dining experiences and unbeatable value.
                </div>
            </div>

            <div className="grid p-4">
                {offers.map((offer, index) => (
                    <div key={index} className="col-12 md:col-6 p-3">
                        <Card 
                        className="shadow-2 overflow-hidden flex flex-column h-full"
                        style={{ borderRadius: '1rem' }}
                        >
                            <div className="relative w-full" style={{ height: '250px' }}>
                                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="p-3 flex flex-column justify-content-between flex-1">
                                <div className="font-playfair text-3xl font-semibold text-1 mt-3">{offer.title}</div>

                                {offer.tag && (
                                    <div
                                        style={{
                                            backgroundColor: '#FFD60A',
                                            borderRadius: '1.3rem',
                                            padding: '0.3rem 1rem',
                                            display: 'inline-block',
                                            fontSize: '0.8rem',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            color: '#000',
                                            width: '8rem'
                                        }}
                                        className="mt-3 mb-2 text-center"
                                    >
                                        {offer.tag}
                                    </div>
                                )}

                                <div className="mt-4 text-lg p-2">{offer.description}</div>


                                <div className="mt-4">
                                    <div className="text-xl font-semibold">What's Included</div>
                                    <ul className="pl-3 text-lg">
                                        {offer.includes.map((item, i) => (
                                            <li className='mb-2' key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="grid mt-4">
                                    <div className="col-12 md:col-8">
                                        <Button label="Contact Now" icon="pi pi-arrow-right" iconPos="right" className="btn btn-blue-light-r w-full" style={{ height: '3rem' }} onClick={() => navigate("/contactus")} />
                                    </div>
                                    <div className="col-12 md:col-4">
                                        <Button label="Details" className="btn-white w-full" style={{ height: '3rem' }} onClick={() => navigate(offer.nav)} />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="text-center mt-6 mb-6 p-4">
                <p className="mb-3 text-lg">
                    Looking for something special? Contact us to create a custom package
                </p>
                <Button label="Contact Our Team" className="btn btn-blue-light-r" icon="pi pi-arrow-right" iconPos="right" style={{ height: '3rem' }} onClick={() => navigate('/contactus')} />
            </div>
            <Footer />
        </>
    );
}