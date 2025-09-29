import React, { useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

export default function OurServices() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const services = [
        {
            title: "Yala National Park Safari",
            duration: "Full Day",
            people: "2-6 People",
            description:
                "Embark on an unforgettable wildlife adventure in one of Sri Lanka’s most famous national parks. Spot leopards, elephants, and exotic birds in their natural habitat.",
            includes: [
                "Professional Guide",
                "Transportation",
                "Park Entry Fees",
                "Refreshments",
            ],
            image: "/images/image4.png",
        },
        {
            title: "Turtle Watching Experience",
            duration: "3 Hours",
            people: "2-8 People",
            description:
                "Witness the magical moment of sea turtles nesting on the pristine beaches. A conservation-focused experience that supports local wildlife protection.",
            includes: [
                "Expert Naturalist",
                "Beach Access",
                "Conservation Education",
                "Photography Tips",
            ],
            image: "/images/image5.png",
        },
        {
            title: "Ayurveda spa Treatment",
            duration: "1-2 Hours",
            people: "Individual",
            description:
                "Rejuvenate your body and mind with authentic Ayurvedic treatments using traditional herbs and techniques passed down through generations.",
            includes: [
                "Certified Therapists",
                "Natural Herbs",
                "Personalized Treatments",
                "Relaxation Space",
            ],
            image: "/images/image6.png",
        },
        {
            title: "Airport transfer service - One way",
            duration: "3-4 Hours",
            people: "1-7 People",
            description:
                "Comfortable and reliable transportation between Colombo Airport and our resort. Professional drivers ensure a smooth start to your vacation.",
            includes: [
                "Air-conditioned Vehicle",
                "Meet & Greet Service",
                "Luggage Assistance",
                "Bottled Water",
            ],
            image: "/images/image7.png",
        },
        {
            title: "Lagoon Boat Safari",
            duration: "3-4 Hours",
            people: "2-6 People",
            description:
                "Glide through Tangalle’s tranquil lagoons surrounded by lush mangroves. Spot exotic birds and learn fascinating facts about the local ecosystem from expert guides.",
            includes: [
                "Boat Ride",
                "Life Jackets",
                "Refreshments",
                "Local Guide",
            ],
            image: "/images/image8.png",
        },
        {
            title: "Udawalawe National Park Safari",
            duration: "Half Day",
            people: "2-6 People",
            description:
                "Explore one of Sri Lanka’s best wildlife sanctuaries, home to elephants, leopards, buffalo, and rich bird life. An exciting half-day adventure with an experienced guide.",
            includes: [
                "Safari Jeep",
                "Park Entry Fees",
                "Professional Guide",
                "Refreshments",
            ],
            image: "/images/image9.png",
        },
        {
            title: "Mulkirigala Rock Monastery",
            duration: "3 Hours",
            people: "2-10 People",
            description:
                "Climb to this ancient Buddhist monastery perched atop a rock formation, with panoramic views and intricately painted cave temples dating back over 2,000 years.",
            includes: [
                "Guided Tour",
                "Temple Entry Fees",
                "Cultural Insights",
                "Photography Opportunities",
            ],
            image: "/images/image10.png",
        },
        {
            title: "Kalametiya Bird Sanctuary",
            duration: "3 Hours",
            people: "2-8 People",
            description:
                "Enjoy a peaceful bird-watching experience in one of Sri Lanka’s oldest wetlands. Spot flamingos, pelicans, herons, and colorful kingfishers while exploring by boat or on foot.",
            includes: [
                "Expert Guide",
                "Boat Ride or Walking Tour",
                "Bird Spotting Equipment",
                "Nature Education",
            ],
            image: "/images/image11.png",
        },
        {
            title: "Buffet Dinner",
            duration: "2 Hours",
            people: "Individual / Group",
            description:
                "Savor a blend of fresh seafood, Sri Lankan flavors, and international cuisine in a romantic beachfront setting or elegant restaurant ambiance.",
            includes: [
                "Fresh Local Ingredients",
                "Variety of Cuisines",
                "Beachfront or Indoor Dining",
                "Dessert Selection",
            ],
            image: "/images/image12.png",
        },
        {
            title: "Lunch",
            duration: "1 Hours",
            people: "Individual / Group",
            description:
                "Relish a variety of local and international dishes, from light salads to hearty mains, in a relaxed and scenic setting.",
            includes: [
                "Fresh Local Ingredients",
                "Multiple Menu Options",
                "Scenic Dining Space",
                "Dessert Selection",
            ],
            image: "/images/image13.png",
        },
        {
            title: "Kalametiya Bird Sanctuary",
            duration: "1 Hours",
            people: "Individual / Group",
            description:
                "Start your day with a wholesome breakfast featuring fresh tropical fruits, baked goods, and a selection of local and international favorites.",
            includes: [
                "Fresh Fruits & Juices",
                "Local & Continental Options",
                "Hot Beverages",
                "Beachfront or Indoor Dining",
            ],
            image: "/images/image14.png",
        },
    ];

    const headerTemplate = (image: any) => (
        <img alt="service" src={image} style={{ width: "100%", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} />
    );

    return (
        <>
            <Header />
            <div className="text-center p-3 md:p-0" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold">Our Services</div>
                <div className="font-playfair text-md md:text-xl lg:text-xl text-gray-600">
                    Enhance your stay with our carefully curated experiences and services, designed <br className="hidden sm:block" />
                    to showcase the best of Sri Lanka’s natural beauty and culture.
                </div>
            </div>

            <div className="flex flex-wrap p-4">
                {services.map((service, index) => (
                    <div key={index} className="col-12 md:col-4 p-3">
                        <Card
                            header={headerTemplate(service.image)}
                            title={<div className="font-playfair text-3xl font-semibold text-1 mt-3">{service.title}</div>}
                            subTitle={
                                <div className="flex align-items-center gap-3 text-lg">
                                    <span><i className="pi pi-clock" style={{ fontSize: '1rem' }}></i> {service.duration}</span>
                                    <span><i className="pi pi-users" style={{ fontSize: '1.2rem' }}></i> {service.people}</span>
                                </div>
                            }
                            className="w-full h-full"
                            style={{ borderRadius: '1.5rem' }}
                        >
                            <div className="m-1 text-lg">{service.description}</div>
                            <div className="mt-4">
                                <div className="text-xl font-semibold">Includes</div>
                                <ul className="pl-3 text-lg">
                                    {service.includes.map((item, i) => (
                                        <li className="mb-2" key={i}> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="text-center p-3 mb-4">
                <div className="font-playfair text-1 font-bold text-5xl mb-4" style={{ marginTop: '5rem' }}>Need Something Custom?</div>
                <div className="text-lg mb-6">
                    Our concierge team is here to help you create the perfect experience. From special celebrations to <br className="hidden sm:block" />
                    unique adventures, we'll make it happen.
                </div>
                <Button label="Details" className="btn-white" style={{ height: '3rem', width: '12rem' }} onClick={() => navigate("/contactus")} />
            </div>
            <Footer />
        </>
    );
}