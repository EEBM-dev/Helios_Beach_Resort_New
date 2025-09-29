import React, { /*useState, useRef*/ } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

//import { Calendar } from "primereact/calendar";
//import { OverlayPanel } from "primereact/overlaypanel";
//import { Divider } from "primereact/divider";
//import { InputSwitch } from "primereact/inputswitch";
//import { Checkbox } from "primereact/checkbox";

import Footer from '../components/footer';
import Header from '../components/header';
import { Carousel } from "primereact/carousel";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    //const [checkIn, setCheckIn] = useState<Date[] | null | undefined>(null);
    //const [checkOut, setCheckOut] = useState<Date[] | null | undefined>(null);
    //const [checked, setChecked] = useState(false);
    //const [adults, setAdults] = useState(2);
    //const [children, setChildren] = useState(0);
    //const [rooms, setRooms] = useState(1);
    //const [pets, setPets] = useState(false);
    // eslint-disable-next-line no-lone-blocks
    {/*const [guestLabel, setGuestLabel] = useState(
        `${adults} adult${adults !== 1 ? "s" : ""} · ${children} child${children !== 1 ? "ren" : ""} · ${rooms} room${rooms !== 1 ? "s" : ""}`
    );*/}
    //const op = useRef<OverlayPanel>(null);

    const accommodations = [
        {
            title: "Bungalow with garden (Non AC)",
            features: ["Garden View", "Queen Bed", "Private Terrace", " "],
            img: "/images/image2.png",
            btn: "Check availability",
            category: "Bungalow with garden (Non AC)",
        },
        {
            title: "Deluxe Sea view bungalow",
            features: ["Beach Access", "King Bed", "Private Beach", "Butler Service"],
            img: "/images/image3.png",
            btn: "Check availability",
            category: "Deluxe Sea view bungalow",
        },
    ];

    // eslint-disable-next-line no-lone-blocks
    {/*const offers = [
        {
            title: "SUN-KISSED BREAKFAST BY HELIOS",
            desc: "Start your day in paradise with the perfect blend of comfort and flavor! Our Bed and Breakfast package is designed for those who want to wake up to breathtaking ocean views while enjoying a delicious breakfast.",
            icon: "/icons/tea_cup.png",
        },
        {
            title: "THE HALF FEAST",
            desc: "Experience the perfect balance of comfort and convenience with our Half Board package at Helios Beach Resort. Enjoy a delicious breakfast and dinner while having the freedom to explore local dining for lunch.",
            icon: "/icons/fluent_food.png",
        },
        {
            title: "SUNRISE TO SUNSET DINING",
            desc: "Indulge in the ultimate convenience and culinary delight with our Full Board package at Helios Beach Resort. Begin your day with breakfast, savor lunch, and end with a magnificent dinner.",
            icon: "/icons/mingcute_time.png",
        },
    ];*/}

    const services = [
        {
            category: "Transportation",
            title: "Airport Transfer Service",
            desc: "Comfortable and reliable one-way transfer service from Colombo Airport to the resort.",
            icon: "pi pi-car"
        },
        {
            category: "Transportation",
            title: "Ayurveda Spa",
            desc: "Rejuvenate your body and mind with traditional Sri Lankan Ayurvedic treatments.",
            icon: "pi pi-sparkles"
        },
        {
            category: "Transportation",
            title: "Dining Services",
            desc: "Enjoy breakfast, lunch, and buffet dinner featuring local and international cuisine.",
            icon: "pi pi-bullseye"
        },
        {
            category: "Transportation",
            title: "Kalametiya Bird Sanctuary",
            desc: "Discover diverse bird species in one of Sri Lanka’s premier bird watching destinations.",
            icon: "pi pi-sun"
        }
    ];

    const highlights = [
        { icon: "pi pi-shield", title: 'SAFETY FIRST', desc: 'Fully licensed and insured with certified professional guides for all activities.' },
        { icon: "pi pi-trophy", title: 'EXCELLENCE AWARD', desc: 'Recognized as the leading resort in Sri Lanka for luxury accommodation and tours.' },
        { icon: "pi pi-star", title: 'PERSONAL SERVICE', desc: 'Dedicated concierge team ensuring every moment of your stay is perfectly tailored.' },
        { icon: "pi pi-sync", title: '24/7 SUPPORT', desc: 'Round-the-clock assistance and emergency support for your peace of mind.' },
        { icon: "pi pi-map-marker", title: 'PRIME LOCATION', desc: 'Perfectly positioned on pristine beaches with easy access to major attractions.' },
        { icon: "pi pi-home", title: 'GOURMET DINING', desc: 'Dedicated concierge team ensuring every moment of your stay is perfectly tailored.' }
    ];

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

    // eslint-disable-next-line no-lone-blocks
    {/*const counter = (label: string, value: number, setter: (v: number) => void) => (
        <div className="flex align-items-center justify-content-between w-full mb-3">
            <span>{label}</span>
            <div className="flex align-items-center gap-2">
                <Button icon="pi pi-minus" rounded text onClick={() => setter(Math.max(0, value - 1))} />
                <span style={{ minWidth: "1.5rem", textAlign: "center" }}>{value}</span>
                <Button icon="pi pi-plus" rounded text onClick={() => setter(value + 1)} />
            </div>
        </div>
    );*/}

    // eslint-disable-next-line no-lone-blocks
    {/*const handleDone = () => {
        setGuestLabel(
            `${adults} adult${adults !== 1 ? "s" : ""} · ${children} child${children !== 1 ? "ren" : ""} · ${rooms} room${rooms !== 1 ? "s" : ""}`
        );
        op.current?.hide();
    };*/}

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

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/94702676876", "_blank");
    };

    return (
        <>
            <Header />
            <div >
                <div
                    className="flex flex-column align-items-center justify-content-center text-center p-4"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('/images/hero.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundColor: '#ffffff',
                        color: "#ffffff",
                        minHeight: "450px",
                    }}
                >
                    <div className="font-playfair mb-2 text-xl" style={{ color: "#FFD60A" }}>
                        <i className="pi pi-map-marker mr-2" style={{ color: "#FFD60A" }} /> Sri Lanka
                    </div>

                    <h1 className="font-playfair m-0 font-bold text-8xl" style={{ lineHeight: 1.1 }}>
                        Stay & Explore
                    </h1>

                    <p className="font-playfair mt-4 mb-6 text-2xl" style={{ maxWidth: "900px" }}>
                        Book Your Perfect Getaway at Helios Beach Resort - Where Luxury Meets Adventure
                    </p>

                    {/*<div
                        className="w-full mt-5 border-round-lg overflow-hidden"
                        style={{
                            maxWidth: "1100px",
                            background: "#fff",
                            border: "3px solid #FFD60A",
                        }}
                    >
                        <div className="flex flex-wrap w-full m-0 p-0">
                            <div className="col-12 md:col flex align-items-center px-3 border-bottom md:border-bottom-none md:border-right-1" style={{ borderColor: "#FFD60A" }}>
                                <i className="pi pi-calendar mr-2 text-lg" style={{ color: "#000" }} />
                                <Calendar
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.value as Date[])}
                                    selectionMode="range"
                                    readOnlyInput
                                    placeholder="Check in date"
                                    className="w-full"
                                    style={{ border: "none", background: "transparent", boxShadow: "none" }}
                                />
                            </div>

                            <div className="col-12 md:col flex align-items-center px-3 mb-2 border-bottom md:border-bottom-none md:border-right-1" style={{ borderColor: "#FFD60A" }}>
                                <i className="pi pi-calendar mr-2 text-lg" style={{ color: "#000" }} />
                                <Calendar
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.value as Date[])}
                                    selectionMode="range"
                                    readOnlyInput
                                    placeholder="Check out date"
                                    className="w-full"
                                    style={{ border: "none", background: "transparent", boxShadow: "none" }}
                                />
                            </div>

                            <div className="col-12 md:col flex align-items-center px-3 mb-2 border-bottom md:border-bottom-none md:border-right-1" style={{ borderColor: "#FFD60A" }}>
                                <i className="pi pi-user mr-2 text-lg" style={{ color: "#000" }} />
                                <div
                                    className="w-full text-3"
                                    onClick={(e) => op.current?.toggle(e)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {guestLabel}
                                </div>

                                <OverlayPanel ref={op}>
                                    <div style={{ width: "250px" }}>
                                        {counter("Adults", adults, setAdults)}
                                        {counter("Children", children, setChildren)}
                                        {counter("Rooms", rooms, setRooms)}

                                        <Divider />
                                        <Button label="Done" className="w-full btn-blue-light-r" onClick={handleDone} />
                                    </div>
                                </OverlayPanel>
                            </div>

                            <div className="col-12 md:col" style={{ minWidth: "160px" }}>
                                <Button
                                    label="Search"
                                    className="w-full h-full text-lg btn-blue-light-r border-round-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex flex-wrap align-items-center mt-3 opacity-90"
                        style={{ maxWidth: "1100px", width: "100%" }}
                    >
                        <Checkbox
                            inputId="entirePlace"
                            checked={checked}
                            onChange={(e) => setChecked(e.checked ?? false)}
                        />
                        <label htmlFor="entirePlace" className="ml-2 text-base">
                            I'm looking for an entire home or apartment
                        </label>
                    </div>*/}
                </div>

                <div
                    className="flex flex-wrap justify-content-center p-4"
                    style={{ backgroundColor: "#007baf" }}
                >
                    {[
                        {
                            title: "Luxury Accommodation",
                            desc: "Beachfront rooms with stunning ocean views",
                            icon: "pi pi-home",
                        },
                        {
                            title: "Adventure Tours",
                            desc: "Whale watching, safaris, and cultural experiences",
                            icon: "pi pi-compass",
                        },
                        {
                            title: "Premium Service",
                            desc: "Personalized hospitality and 24/7 support",
                            icon: "pi pi-star",
                        },
                    ].map((item, i) => (
                        <div key={i} className="col-12 md:col-4 p-3">
                            <div
                                className="shadow-2 p-4 border-round-xl text-center"
                                style={{
                                    background: "#FFFFFFE5",
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 8px 20px rgba(0,0,0,0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow =
                                        "0 4px 15px rgba(0,0,0,0.1)";
                                }}
                            >
                                <i
                                    className={item.icon}
                                    style={{
                                        fontSize: "2rem",
                                        color: "#007baf",
                                        marginBottom: "0.5rem",
                                    }}
                                />
                                <h3 className="m-0 font-playfair" style={{ fontWeight: "600" }}>
                                    {item.title}
                                </h3>
                                <p className="mt-2" style={{ fontWeight: 300 }}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <div style={{ backgroundColor: '#EDF6FB99' }}>
                        <div className="text-center mb-4" style={{ marginTop: '5rem' }}>
                            <div className="font-playfair text-1 font-bold text-4xl md:text-5xl mb-4">LUXURY ACCOMMODATION</div>
                            <div className="text-lg mb-6 p-1">
                                Experience unparalleled comfort in our beautifully designed rooms and suites,<br>
                                </br>each offering breathtaking views and premium amenities.
                            </div>
                        </div>

                        <div className="grid grid-nogutter justify-content-center">
                            {accommodations.map((item, i) => (
                                <div key={i} className="col-12 md:col-4 p-3 flex">
                                    <Card
                                        className="flex flex-column h-full w-full"
                                        style={{ borderRadius: "1.5rem", display: "flex", flexDirection: "column" }}
                                        title={item.title}
                                        header={
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                style={{
                                                    width: "100%",
                                                    borderTopLeftRadius: "1rem",
                                                    borderTopRightRadius: "1rem",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        }
                                        footer={
                                            <Button
                                                label={item.btn}
                                                className="btn btn-yellow w-full"
                                                style={{ height: "3rem" }}
                                                onClick={() => navigate("/booking", { state: { category: item.category } })}
                                            />
                                        }
                                    >
                                        <div className="flex flex-column flex-grow-1">
                                            <ul className="m-0 p-0 list-none flex-grow-1">
                                                {item.features.map((f, idx) =>
                                                    f ? <li className="mb-1" key={idx} style={{ color: "#FFFFFF" }}>• <span style={{ color: "#000000" }}>{f}</span></li> : null
                                                )}
                                            </ul>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>

                        <div className="text-center my-4 p-4">
                            <Button
                                label="View All Accommodation"
                                className="btn btn-white"
                                style={{ height: '3rem' }}
                                onClick={() => navigate('/accommodations')}
                            />
                        </div>
                    </div>

                    {/*<div className="text-center mb-4 p-3">
                        <div className="font-playfair text-1 font-bold text-4xl md:text-5xl mb-4" style={{ marginTop: '5rem' }}>SPECIAL OFFERS</div>
                        <div className="text-lg mb-6">
                            Discover our exclusive packages designed to make your stay at Helios Beach<br>
                            </br> Resort even more memorable and convenient.
                        </div>
                    </div>

                    <div className="grid p-4">
                        {offers.map((offer, i) => (
                            <div key={i} className="col-12 md:col-4 p-1">
                                <Card
                                    title={<img alt="dropdown icon" src={offer.icon} />}
                                    subTitle={<span className="font-playfair text-1 text-xl font-bold">{offer.title}</span>}
                                    footer={<Button label="Book Now" className="btn btn-blue-dark w-full" style={{ height: '3rem' }} onClick={() => navigate('/booking')} />}
                                    className="h-full text-center"
                                    style={{ borderRadius: '0.7rem' }}
                                >
                                    <p className="text-center">{offer.desc}</p>
                                </Card>
                            </div>
                        ))}
                    </div>*/}
                </div>

                <div>
                    {/*<div className="flex justify-content-center mb-6 p-6" style={{ background: "#f7fbfe" }}>
                        <Card className="text-center w-full md:w-8" style={{ borderRadius: '0.7rem' }}>
                            <div className="font-playfair font-bold text-2xl mb-3">BASE RATE PLAN</div>
                            <div className="text-lg mb-4" style={{ lineHeight: "1.5" }}>
                                Discover the ultimate flexibility and freedom to design your perfect getaway with our Base Rate Plan
                                at Helios Beach Resort. Perfect for independent travelers who prefer to customize their dining
                                experience.
                            </div>
                            <Button
                                label="View Base Rates"
                                icon="pi pi-arrow-right"
                                iconPos="right"
                                className="btn btn-white"
                                style={{ height: '3rem' }}
                                onClick={() => navigate('/accommodations')}
                            />
                        </Card>
                    </div>*/}

                    <div className="text-center mb-4 p-3">
                        <div className="font-playfair text-1 font-bold text-4xl md:text-5xl mb-4" style={{ marginTop: '5rem' }}>SERVICES & EXPERIENCES</div>
                        <div className="text-lg mb-6">
                            From wildlife adventures to cultural experiences and wellness treatments, discover the wide range of
                            services we offer to make your stay unforgettable.
                        </div>
                    </div>

                    <div className="flex flex-wrap p-4">
                        {services.map((service, idx) => (
                            <div key={idx} className="col-12 md:col-6 lg:col-3">
                                <Card
                                    className="h-full"
                                    header={
                                        <div className="flex align-items-center justify-content-end p-2">
                                            <span
                                                style={{
                                                    background: "#facc15",
                                                    color: "#000",
                                                    padding: "0.2rem 0.5rem",
                                                    fontSize: "0.75rem",
                                                    borderRadius: "10px",
                                                    display: "inline-block",
                                                }}
                                            >
                                                {service.category}
                                            </span>
                                        </div>
                                    }
                                >
                                    <div className="flex flex-wrap">
                                        <div
                                            className="col-12 md:col-3 my-4"
                                            style={{
                                                width: "5rem",
                                                height: "5rem",
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #ffffffff, #b3b3b3ff)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <i className={`${service.icon} text-1 text-4xl`} />
                                        </div>
                                        <div className="col-12 md:col-9">
                                            <div className="font-playfair text-1 font-bold text-lg">{service.title}</div>
                                            <p>{service.desc}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-content-center mt-4 p-3">
                        <Button
                            label="View All"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            className="btn btn-white"
                            style={{ height: '3rem' }}
                            onClick={() => navigate('/services')}
                        />
                    </div>
                </div>

                <div className="p-3">
                    <Card className="p-2 text-center"
                        style={{ background: 'linear-gradient(90deg, #0077B64D, #A4B6004D)', border: '1px solid #d1e7e2', borderRadius: '1rem' }}>
                        <div className="font-playfair m-0 mb-6 font-bold text-2xl text-3">NEED SOMETHING SPECIAL?</div>
                        <p className="m-0 mb-6 text-lg">
                            Our experienced team can arrange custom tours and experiences tailored to<br>
                            </br> your interests.Contact us to create your perfect Sri Lankan adventure.
                        </p>
                        <div className="flex flex-wrap align-items-center justify-content-center gap-2">
                            <Button label="+94 76 192 2620" className="p-button-text p-0 text-1" icon="pi pi-phone" onClick={() => window.location.href = "tel:+94761922620"} />
                            <span className="font-bold">OR</span>
                            <Button
                                label="+94 70 267 6876"
                                className="p-button-text p-0 text-2"
                                icon="pi pi-whatsapp"
                                onClick={handleWhatsAppClick}
                            />
                        </div>
                    </Card>
                </div>

                <div className="p-3" style={{ background: "#f7fbfe" }}>
                    <div className="text-center my-6">
                        <div className="font-playfair text-1 font-bold text-4xl md:text-5xl mb-4">WHY CHOOSE HELIOS BEACH RESORT?</div>
                        <div className="text-lg mb-6">
                            Experience the perfect blend of luxury, adventure, and authentic Sri Lankan hospitality that sets us apart from the rest.
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        {highlights.map((item, index) => (
                            <div key={index} className="col-12 md:col-4 p-3">
                                <Card
                                    className="h-full text-start"
                                    style={{ border: '0.1rem solid', borderColor: 'linear-gradient(0deg, #0077B6, #FFD60A' }}
                                >
                                    <div className="mb-3 flex justify-content-start">
                                        <div
                                            style={{
                                                width: "5rem",
                                                height: "5rem",
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #0077B6, #FFD60A)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <i className={`${item.icon} text-white text-4xl`} />
                                        </div>
                                    </div>
                                    <div className="font-playfair text-1 text-xl font-bold mb-2">{item.title}</div>
                                    <div className="m-0">{item.desc}</div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="text-center mt-6 p-3">
                        <div className="font-playfair text-1 font-bold text-4xl md:text-5xl mb-4" style={{ marginTop: '5rem' }}>GUEST REVIEWS</div>
                        <div className="text-lg mb-6">Discover what our guests say about their unforgettable experiences at Helios Beach Resort.</div>
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

                    {/*<div className="flex flex-wrap text-center p-4" style={{ backgroundColor: '#0077B6' }}>
                        <div className="col-6 md:col-3">
                            <div className="text-4 text-6xl font-bold">4.9</div>
                            <div className="text-5 text-xl font-bold">Completed Projects</div>
                        </div>
                        <div className="col-6 md:col-3">
                            <div className="text-4 text-6xl font-bold">2,500+</div>
                            <div className="text-5 text-xl font-bold">Projects in Development</div>
                        </div>
                        <div className="col-6 md:col-3">
                            <div className="text-4 text-6xl font-bold">98%</div>
                            <div className="text-5 text-xl font-bold">Total Project Cost</div>
                        </div>
                        <div className="col-6 md:col-3">
                            <div className="text-4 text-6xl font-bold">24/7</div>
                            <div className="text-5 text-xl font-bold">Service</div>
                        </div>
                    </div>*/}

                    <div className="text-center p-3 mb-6">
                        <div className="font-playfair text-1 font-bold text-4xl md:text-5xl mb-4" style={{ marginTop: '5rem' }}>PLAN YOUR PERFECT HOLIDAY</div>
                        <p className="text-lg mb-6">
                            Ready to experience the ultimate Sri Lankan getaway? Let us create unforgettable memories that will last a lifetime.
                            Book now and save up to 20% on your stay.
                        </p>
                        <div className="flex justify-content-center gap-3 mt-3 flex-wrap">
                            <Button label="Book Your Stay" className="btn btn-yellow" icon="pi pi-arrow-right" iconPos="right" style={{ height: '3rem' }} onClick={() => navigate('/accommodations')} />
                            <Button label="Explore Packages" className="btn btn-white" style={{ height: '3rem' }} onClick={() => navigate('/packages')} />
                        </div>
                    </div>

                    <div className="flex flex-wrap p-3 mb-6 justify-content-center alingn-items-center">
                        <div className="col-12 md:col-4">
                            <Card className="text-center shadow-4 h-full">
                                <i className="pi pi-phone text-4xl text-1 mb-4"></i>
                                <div className="font-playfair font-bold text-xl mb-2">CALL US</div>
                                <div className="text-3 mb-4">Speak directly with our reservation team</div>
                                <a href="tel:+94761922620" className="text-1 font-bold no-underline">+94 76 192 2620 |</a>
                                <a href="tel:+94702676876" className="text-1 font-bold no-underline"> +94 70 267 6876</a>
                            </Card>
                        </div>
                        <div className="col-12 md:col-4">
                            <Card className="text-center shadow-4 h-full">
                                <i className="pi pi-envelope text-4xl text-1 mb-4"></i>
                                <div className="font-playfair font-bold text-xl mb-2">EMAIL US</div>
                                <p className="text-600">Get detailed information and custom quotes</p>
                                <a href="mailto:heliosbeachresort@gmail.com" className="text-1 font-bold no-underline">heliosbeachresort@gmail.com</a>
                            </Card>
                        </div>
                        <div className="col-12 md:col-4">
                            <Card className="text-center shadow-4 h-full">
                                <i className="pi pi-file-check text-4xl text-1 mb-4"></i>
                                <div className="font-playfair font-bold text-xl mb-2">BOOKING PLATFORMS</div>
                                <div className="flex justify-content-center gap-3 mt-3">
                                        <img
                                            src="/icons/booking.png"
                                            alt="Booking.com"
                                            style={{ height: "3.5rem", objectFit: "contain" }}

                                        />
                                        <img
                                            src="/icons/tripadvisor.png"
                                            alt="Tripadvisor"
                                            style={{ height: "3.5rem", objectFit: "contain" }}
                                        />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}