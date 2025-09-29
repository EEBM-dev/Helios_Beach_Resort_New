/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import { Divider } from "primereact/divider";
import { Carousel } from "primereact/carousel";

import Header from "../components/header";
import Footer from "../components/footer";

export default function AboutUs() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    {/*const images = [
        "/images/image21.png",
        "/images/image22.png",
        "/images/image23.png",
        "/images/image24.png",
        "/images/image25.png",
        "/images/image26.png",
        "/images/image27.png",
        "/images/image28.png",
        "/images/image29.png"
    ];*/}

    const reviews = [
        {
            name: "Suranga Ranathunga",
            avatar: "SR",
            ratingcount: 8,
            review:
                "It's a very beautiful beach hotel in Rekawa. Nice and friendly staff will always assist you. Overall nice place take a vacation.",
            rating: "Very good",
            date: "06/26/2025 on Google"
        },
        {
            name: "judith",
            avatar: "ju",
            ratingcount: 9,
            review:
                "Ruhiges Resort mit perfekter Strandlage, abseits vom Trubel, herrliche Strände, tolle Sonnenuntergäng",
            rating: "Excellent",
            date: "05/26/2025 on Booking.com"
        },
        {
            name: "Joe",
            avatar: "Jo",
            ratingcount: 10,
            review:
                "Advantages: Initially booked for one night but extended our stay—couldn't resist the tranquil beach and cozy bungalows. A heartfelt thanks to Dinusha for making our evenings unforgettable. Exceptional value for a peaceful retreat. ",
            rating: "Excellent",
            date: "05/25/2025 on Booking.com"
        },
        {
            name: "HUARTE MARTÍNEZ",
            avatar: "HM",
            ratingcount: 10,
            review:
                "Advantages: Recomiendo el alojamiento de Mahesh. Todo limpio y perfecto para pasar unos días de tranquilidad en una playa enorme y super tranquila. Además nos ayudó con el alquiler de motos y estuvo en todo momento atento a nuestras necesidades. Gracias !!",
            rating: "Excellent",
            date: "04/29/2025 on Booking.com"
        },
        {
            name: "Stephan No sirname",
            avatar: "SN",
            ratingcount: 10,
            review:
                "Nice clean bungalows, new AC, fan and musquito net. Very quiet place, you can see hear and smell the sea. Always a nice breeze. Friendly staff and clean pool with a deep side. (I think 2,5m) Free water from the 19L jugs.",
            rating: "Excellent",
            date: "04/21/2025 on Google"
        },
    ];

    const reasons = [
        "We combine luxury stays with curated tours across Sri Lanka.",
        "Our team of professionals knows the island deeply and shares it with pride.",
        "We provide personalized itineraries to match your interests and style.",
        "We maintain comfort, safety, and reliability in everything we do.",
        "With our boutique size, you enjoy genuine hospitality and attention to detail.",
        "We offer excellent value for money without compromising on quality."
    ];

    const reviewTemplate = (review: {
        ratingcount: number; rating: number | undefined; review: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; avatar: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; date: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined;
    }) => {
        return (
            <div className="p-2 flex flex-column align-items-center justify-content-center text-center border-round">
                <div className="mb-3">
                    <div className="mb-3">
                        <div className="flex align-items-center gap-2 mb-4">
                            <div style={{ color: '#F97300', display: 'flex' }}>
                                {Array(5).fill(0).map((_, i) => {
                                    const stars = review.ratingcount / 2;
                                    if (i < Math.floor(stars)) {
                                        return <i key={i} className="pi pi-star-fill text-xl mr-5"></i>;
                                    } else if (i < stars) {
                                        return <i key={i} className="pi pi-star-half-fill text-xl mr-5"></i>;
                                    } else {
                                        return <i key={i} className=" "></i>;
                                    }
                                })}
                            </div>
                        </div>

                        <div className="text-2 text-xl font-bold mr-5">{review.rating}</div>
                    </div>
                </div>

                <p className="mt-3 mb-3 text-xl italic">"{review.review}"</p>
                <div className="flex align-items-center gap-2 mt-4 text-xl">
                    <div
                        className="flex align-items-center justify-content-center font-bold border-circle"
                        style={{ width: "60px", height: "60px", backgroundColor: '#67B260', color: '#ffffff' }}
                    >
                        {review.avatar}
                    </div>
                    <div className="text-left">
                        <strong>{review.name}</strong>
                        <p className="text-xl m-0">{review.date}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <Header />
            <div className="text-center" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold">About Us</div>
            </div>
            <div className="p-4 md:p-6 lg:p-8">
                <div className="grid flex justify-content-center mb-6 gap-5">
                    <div className="col-12 md:col-5">
                        <div className="line-height-4">
                            <div className="font-playfair text-start text-3xl font-bold mb-4">Your Gateway to Sri Lanka’s Luxury & Adventure</div>
                            <div className="text-start text-lg mb-4">Born on the golden shores of Tangalle in Sri Lanka, Helios Beach Resort began as a boutique
                                haven of comfort and authentic Sri Lankan warmth. Today, we have expanded our horizon with
                                Helios Travels, bringing together world-class accommodation and unforgettable journeys
                                across the island. Our passion is not just to host, but to guide you through Sri Lanka’s
                                breathtaking landscapes, vibrant culture, and timeless heritage</div>

                            <div className="text-start text-lg mb-4">At Helios, our promise is simple – every stay and every journey is crafted with care, delivering
                                experiences that linger long after your holiday ends.</div>
                        </div>
                    </div>
                    <div className="col-12 md:col-5 text-center md:text-left">
                        <img
                            src="/images/image19.jpg"
                            alt="Resort View"
                            className="border-round-xl shadow-2 w-full h-full"
                        />
                    </div>
                </div>

                <div className="grid flex justify-content-center mb-6 gap-5">
                    <div className="col-12 md:col-5 order-1 md:order-2 text-center md:text-right">
                        <img
                            src="/images/image20.jpg"
                            alt="Resort Night View"
                            className="border-round-xl shadow-2 w-full h-full"
                        />
                    </div>
                    <div className="col-12 md:col-5 order-2 md:order-1">
                        <p className="line-height-4 text-2xl">
                            <div className="font-playfair text-start text-3xl font-bold mb-4">Why Choose Helios</div>
                            <ul className="list-none p-0 m-0">
                                {reasons.map((reason, index) => (
                                    <li
                                        key={index}
                                        className="flex align-items-start mb-2"
                                    >
                                        <i className="pi pi-check-circle text-2 mr-2 mt-2"></i>
                                        <div className="text-lg">{reason}</div>
                                    </li>
                                ))}
                            </ul>
                        </p>
                    </div>
                </div>

                <div className="grid flex justify-content-center mb-6 mt-6 gap-5 mx-8">
                    <div className="col-12 md:col-12 text-center md:text-left">
                        <div className="font-playfair text-start text-5xl font-bold mb-4">Vision</div>
                        <div className="text-start text-xl mb-4">To become Sri Lanka’s trusted name in boutique hospitality and travel, offering unique stays
                            and unforgettable journeys.</div>
                    </div>
                    <div className="col-12 md:col-12">
                        <div className="font-playfair text-start text-5xl font-bold mb-4">Mission</div>
                        <div className="text-start text-xl mb-4">To deliver personalized luxury and authentic travel experiences, combining the comfort of
                            Helios Beach Resort with expertly curated tours across Sri Lanka.</div>
                    </div>
                </div>

                <div className="p-4 md:p-6 lg:p-8">
                    <div className="text-3xl font-semibold mb-6">Terms of stay</div>
                    <div className="mb-4 text-lg">
                        You accept the following credit cards: Visa, Euro/Mastercard, Cash
                    </div>

                    <Divider />

                    <div className="grid m-2">
                        <div className="col-12 md:col-4 font-bold text-lg">Check-in</div>
                        <div className="col-12 md:col-8 text-lg">14:00</div>
                    </div>

                    <Divider />

                    <div className="grid m-2">
                        <div className="col-12 md:col-4 font-bold text-lg">Check-out</div>
                        <div className="col-12 md:col-8 text-lg">12:00</div>
                    </div>

                    <Divider />

                    <div className="grid m-2">
                        <div className="col-12 md:col-4 font-bold text-lg">Booking cancellation</div>
                        <div className="col-12 md:col-8">
                            <p className="m-0 font-semibold text-lg">Flexible - 18:00 on arrival day</p>
                            <ul className="mt-2 mb-0 pl-3 text-md">
                                <li>
                                    The guest can cancel free of charge until 18:00 on the day of arrival.
                                    The guest will be charged the cost of the first night if they cancel after 18:00 on the day of arrival.
                                </li>
                                <li>
                                    No prepayment is needed.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Divider />

                    <div className="text-3xl font-semibold mb-6 mt-6">Cancellation policy</div>

                    <div className="font-semibold text-xl mb-4">Flexible - 18:00 on arrival day</div>
                    <ul className="mb-4 pl-3 text-lg mx-5">
                        <li className="mb-3">The guest can cancel free of charge until 18:00 on the day of arrival. The guest will be charged the cost of the first night if they cancel after 18:00 on the day of arrival.</li>
                        <li>No prepayment is needed.</li>
                    </ul>

                    <Divider />

                    <div className="font-semibold text-xl mt-4 mb-4">Flexible - 2 days</div>
                    <ul className="mb-4 pl-3 text-lg mx-5">
                        <li className="mb-3">The guest can cancel free of charge until 2 days before arrival. The guest will be charged the total price of the reservation if they cancel in the 2 days before arrival.</li>
                        <li>The guest will be charged a prepayment of the total price of the reservation in the 2 days before arrival.</li>
                    </ul>
                </div>
                
                {/*<div className="font-playfair text-center text-6xl font-bold mb-8">Our Gallery</div>

                <div className="grid flex justify-content-center">
                    <div className="col-12 md:col-5 p-1">
                        <img src={images[0]} alt="" className="w-full shadow-1" style={{ height: "350px", objectFit: "cover", borderRadius: '0.7rem' }} />
                    </div>
                    <div className="col-12 md:col-5 p-1">
                        <img src={images[1]} alt="" className="w-full shadow-1" style={{ height: "350px", objectFit: "cover", borderRadius: '0.7rem' }} />
                    </div>

                    <div className="col-12 md:col-5 p-1">
                        <img src={images[2]} alt="" className="w-full shadow-1" style={{ height: "300px", objectFit: "cover", borderRadius: '0.7rem' }} />
                    </div>
                    <div className="col-12 md:col-5 p-1">
                        <img src={images[3]} alt="" className="w-full shadow-1" style={{ height: "300px", objectFit: "cover", borderRadius: '0.7rem' }} />
                    </div>

                    <div className="col-12 md:col-3 p-1">
                        <img src={images[4]} alt="" className="w-full shadow-1" style={{ height: "300px", objectFit: "cover", borderRadius: '0.7rem' }} />
                    </div>
                    <div className="col-12 md:col-4 p-1">
                        <img src={images[5]} alt="" className="w-full shadow-1" style={{ height: "300px", objectFit: "cover", borderRadius: '0.7rem' }} />
                    </div>
                    <div className="col-12 md:col-3 p-1">
                        <img src={images[6]} alt="" className="w-full shadow-1" style={{ height: "300px", objectFit: "cover", borderRadius: '0.7rem' }} />
                    </div>

                    <div className="col-12 md:col-5 p-1">
                        <img src={images[7]} alt="" className="w-full shadow-1" style={{ height: "350px", objectFit: "cover", borderRadius: '0.7rem' }} />
                    </div>
                    <div className="col-12 md:col-5 p-1">
                        <img src={images[8]} alt="" className="w-full shadow-1" style={{ height: "350px", objectFit: "cover", borderRadius: '0.7rem' }} />
                    </div>
                </div>*/}
            </div>
            <div className="text-center mt-3">
                <div className="font-playfair text-1 font-bold text-5xl mb-4" style={{ marginTop: '5rem' }}>REVIEWS</div>
            </div>
            <div>
                <div className="border-round-lg surface-border p-2 w-full md:w-full text-center mb-6">
                    <Carousel
                        value={reviews}
                        numVisible={1}
                        numScroll={1}
                        itemTemplate={reviewTemplate}
                        circular
                        autoplayInterval={5000}
                        showIndicators={false}
                        showNavigators
                        className="w-full md:w-8 mx-auto"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
