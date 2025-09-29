import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';

import Header from '../components/header';
import Footer from '../components/footer';

type Offer = {
  details: any;
  title: string;
  tag: string;
  image: string;
  description: string;
  includes: string[];
  nav: string;
};

export default function Packages() {
    const navigate = useNavigate();
    const [selectedOffer] = useState<Offer | null>(null);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const offers = [
        {
            title: "Helios 2-Day Wildlife Escape",
            tag: "Adventure",
            image: "/images/wildlife_escape.png",
            description: "A perfect mix of relaxation and adventure with a beach stay and a guided Udawalawe safari.",
            link: "/package1"
        },
        {
            title: "Helios 6-Day Sri Lanka Adventure Package",
            tag: "Exclusive",
            image: "/images/adventure_package.png",
            description: "Discover southern Sri Lanka with safaris, turtle watching, whale watching, lagoon safari, and cultural experiences.",
            link: "/package2"
        },
    ];

    return (
        <>
            <Header />
            <div className="text-center p-3 md:p-0" style={{ margin: '6rem 0rem 6rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold">Packages</div>
                <div className="font-playfair text-md md:text-xl lg:text-xl">
                    Discover our carefully crafted packages designed to enhance your stay with <br className="hidden sm:block" />
                    exceptional dining experiences and unforgettable adventures.
                </div>
            </div>

            <div className="flex flex-wrap p-4">
                {offers.map((offer, index) => (
                    <div key={index} className="col-12 md:col-6 p-3">
                        <Card
                            className="shadow-2 overflow-hidden flex flex-column h-full"
                            style={{ borderRadius: '1rem' }}
                            onClick={() => navigate(offer.link)}
                            draggable={false}
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

                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            <Dialog
                header={selectedOffer?.title}
                visible={visible}
                style={{ width: '90%', maxWidth: '700px' }}
                modal
                onHide={() => setVisible(false)}
            >
                {selectedOffer && (
                    <div>
                        <img src={selectedOffer.image} alt={selectedOffer.title} className="w-full h-15rem object-cover mb-3 border-round" />
                        <p className="text-lg mb-3">{selectedOffer.description}</p>

                        {selectedOffer.details && (
                            <>
                                <h3 className="text-xl font-semibold mt-3 mb-2">Itinerary</h3>
                                <ul className="pl-3">
                                    {selectedOffer.details.map((d: any, i:any) => (
                                        <li key={i} className="mb-2">{d}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <h3 className="text-xl font-semibold mt-3 mb-2">What's Included</h3>
                        <ul className="pl-3">
                            {selectedOffer.includes.map((inc, i) => (
                                <li key={i} className="mb-2">{inc}</li>
                            ))}
                        </ul>

                        <div className="text-center mt-4">
                            <Button
                                label="Contact Now"
                                icon="pi pi-arrow-right"
                                iconPos="right"
                                className="btn btn-blue-light-r"
                                style={{ height: '3rem' }}
                                onClick={() => navigate('/contactus')}
                            />
                        </div>
                    </div>
                )}
            </Dialog>

            <div className="text-center mt-6 mb-6 p-4">
                <p className="mb-3 text-lg">
                    Looking for something special? Contact us to create a custom package
                </p>
                <Button
                    label="Contact Our Team"
                    className="btn btn-blue-light-r"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    style={{ height: '3rem' }}
                    onClick={() => navigate('/contactus')}
                />
            </div>
            <Footer />
        </>
    );
}