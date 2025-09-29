import { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Galleria } from 'primereact/galleria';

import Header from '../components/header';
import Footer from '../components/footer';

interface Place {
    name: string;
    desc: string;
    placeImageSrc: string;
    images: {
        itemImageSrc: string;
        alt: string;
    }[];
}

interface DestinationCategory {
    title: string;
    desc: string;
    subPlaces: Place[];
}

export default function Destinations() {
    const [visible, setVisible] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const destinations: DestinationCategory[] = [
        {
            title: "Cultural & Historical",
            desc: "Sri Lanka’s ancient capitals and sacred cities full of temples, ruins, and history.",
            subPlaces: [
                {
                    name: "Anuradhapura",
                    desc: "Ancient city & sacred temples",
                    placeImageSrc: "/images/anuradhapura1.jpg",
                    images: [
                        { itemImageSrc: "/images/anuradhapura1.jpg", alt: "Anuradhapura" },
                        { itemImageSrc: "/images/anuradhapura2.jpg", alt: "Anuradhapura" },
                        { itemImageSrc: "/images/anuradhapura3.jpg", alt: "Anuradhapura" },
                        { itemImageSrc: "/images/anuradhapura4.jpg", alt: "Anuradhapura" }
                    ]
                },
                {
                    name: "Polonnaruwa",
                    desc: "UNESCO World Heritage site",
                    placeImageSrc: "/images/polonnaruwa1.jpg",
                    images: [
                        { itemImageSrc: "/images/polonnaruwa1.jpg", alt: "Polonnaruwa" },
                        { itemImageSrc: "/images/polonnaruwa2.jpg", alt: "Polonnaruwa" },
                        { itemImageSrc: "/images/polonnaruwa3.jpg", alt: "Polonnaruwa" },
                        { itemImageSrc: "/images/polonnaruwa4.jpg", alt: "Polonnaruwa" }
                    ]
                },
                {
                    name: "Dambulla",
                    desc: "Cave temples & rock art",
                    placeImageSrc: "/images/dambulla1.jpg",
                    images: [
                        { itemImageSrc: "/images/dambulla1.jpg", alt: "Dambulla" },
                        { itemImageSrc: "/images/dambulla2.jpg", alt: "Dambulla" },
                        { itemImageSrc: "/images/dambulla3.jpg", alt: "Dambulla" },
                        { itemImageSrc: "/images/dambulla4.jpg", alt: "Dambulla" }
                    ]
                },
                {
                    name: "Sigiriya",
                    desc: "Rock Fortress & Lion’s Rock",
                    placeImageSrc: "/images/sigiriya1.jpg",
                    images: [
                        { itemImageSrc: "/images/sigiriya1.jpg", alt: "Sigiriya" },
                        { itemImageSrc: "/images/sigiriya2.jpg", alt: "Sigiriya" },
                        { itemImageSrc: "/images/sigiriya3.jpg", alt: "Sigiriya" },
                        { itemImageSrc: "/images/sigiriya4.jpg", alt: "Sigiriya" }
                    ]
                },
                {
                    name: "Habarana",
                    desc: "Cultural village & safari base",
                    placeImageSrc: "/images/habarana1.jpg",
                    images: [
                        { itemImageSrc: "/images/habarana1.jpg", alt: "Habarana" },
                        { itemImageSrc: "/images/habarana2.jpg", alt: "Habarana" },
                        { itemImageSrc: "/images/habarana3.jpg", alt: "Habarana" },
                        { itemImageSrc: "/images/habarana4.jpg", alt: "Habarana" }
                    ]
                },
                {
                    name: "Kandy",
                    desc: "Temple of the Tooth, cultural shows",
                    placeImageSrc: "/images/kandy1.jpg",
                    images: [
                        { itemImageSrc: "/images/kandy1.jpg", alt: "Kandy" },
                        { itemImageSrc: "/images/kandy2.jpg", alt: "Kandy" },
                        { itemImageSrc: "/images/kandy3.jpg", alt: "Kandy" },
                        { itemImageSrc: "/images/kandy4.jpg", alt: "Kandy" }
                    ]
                }
            ]
        },
        {
            title: "Hill Country & Nature",
            desc: "Sri Lanka’s lush tea country, waterfalls, and scenic mountains.",
            subPlaces: [
                {
                    name: "Ella",
                    desc: "Scenic train journey, waterfalls & Nine Arches Bridge",
                    placeImageSrc: "/images/ella1.jpg",
                    images: [
                        { itemImageSrc: "/images/ella1.jpg", alt: "Ella" },
                        { itemImageSrc: "/images/ella2.jpg", alt: "Ella" },
                        { itemImageSrc: "/images/ella3.jpg", alt: "Ella" },
                        { itemImageSrc: "/images/ella4.jpg", alt: "Ella" }
                    ]
                },
                {
                    name: "Nuwara Eliya",
                    desc: "Tea plantations, Gregory Lake",
                    placeImageSrc: "/images/nuwara_eliya1.jpg",
                    images: [
                        { itemImageSrc: "/images/nuwara_eliya1.jpg", alt: "Nuwara Eliya" },
                        { itemImageSrc: "/images/nuwara_eliya2.jpg", alt: "Nuwara Eliya" },
                        { itemImageSrc: "/images/nuwara_eliya3.jpg", alt: "Nuwara Eliya" },
                        { itemImageSrc: "/images/nuwara_eliya4.jpg", alt: "Nuwara Eliya" }
                    ]
                },
                {
                    name: "Hatton",
                    desc: "Gateway to Adam’s Peak",
                    placeImageSrc: "/images/hatton1.jpg",
                    images: [
                        { itemImageSrc: "/images/hatton1.jpg", alt: "Hatton" },
                        { itemImageSrc: "/images/hatton2.jpg", alt: "Hatton" },
                        { itemImageSrc: "/images/hatton3.jpg", alt: "Hatton" },
                        { itemImageSrc: "/images/hatton4.jpg", alt: "Hatton" }
                    ]
                },
                {
                    name: "Sinharaja",
                    desc: "Rainforest & biodiversity hotspot",
                    placeImageSrc: "/images/sinharaja1.jpg",
                    images: [
                        { itemImageSrc: "/images/sinharaja1.jpg", alt: "Sinharaja" },
                        { itemImageSrc: "/images/sinharaja2.jpg", alt: "Sinharaja" },
                        { itemImageSrc: "/images/sinharaja3.jpg", alt: "Sinharaja" },
                        { itemImageSrc: "/images/sinharaja4.jpg", alt: "Sinharaja" }
                    ]
                },
                {
                    name: "Kitulgala",
                    desc: "White-water rafting & jungle adventures",
                    placeImageSrc: "/images/kitulgala1.jpg",
                    images: [
                        { itemImageSrc: "/images/kitulgala1.jpg", alt: "Kitulgala" },
                        { itemImageSrc: "/images/kitulgala2.jpg", alt: "Kitulgala" },
                        { itemImageSrc: "/images/kitulgala3.jpg", alt: "Kitulgala" },
                        { itemImageSrc: "/images/kitulgala4.jpg", alt: "Kitulgala" }
                    ]
                },
                {
                    name: "Wellawaya",
                    desc: "Natural landscapes & rural culture",
                    placeImageSrc: "/images/wellawaya1.jpg",
                    images: [
                        { itemImageSrc: "/images/wellawaya1.jpg", alt: "Wellawaya" },
                        { itemImageSrc: "/images/wellawaya2.jpg", alt: "Wellawaya" },
                        { itemImageSrc: "/images/wellawaya3.jpg", alt: "Wellawaya" },
                        { itemImageSrc: "/images/wellawaya4.jpg", alt: "Wellawaya" }
                    ]
                }
            ]
        },
        {
            title: "Beaches & Coastal",
            desc: "Golden beaches, surfing spots, and coastal adventures.",
            subPlaces: [
                {
                    name: "Arugam Bay",
                    desc: "Surfing & laid-back beaches",
                    placeImageSrc: "/images/arugam_bay1.jpg",
                    images: [
                        { itemImageSrc: "/images/arugam_bay1.jpg", alt: "Arugam Bay" },
                        { itemImageSrc: "/images/arugam_bay2.jpg", alt: "Arugam Bay" },
                        { itemImageSrc: "/images/arugam_bay3.jpg", alt: "Arugam Bay" },
                        { itemImageSrc: "/images/arugam_bay4.jpg", alt: "Arugam Bay" }
                    ]
                },
                {
                    name: "Bentota",
                    desc: "Luxury beach resorts & water sports",
                    placeImageSrc: "/images/bentota1.jpg",
                    images: [
                        { itemImageSrc: "/images/bentota1.jpg", alt: "Bentota" },
                        { itemImageSrc: "/images/bentota2.jpg", alt: "Bentota" },
                        { itemImageSrc: "/images/bentota3.jpg", alt: "Bentota" },
                        { itemImageSrc: "/images/bentota4.jpg", alt: "Bentota" }
                    ]
                },
                {
                    name: "Hikkaduwa",
                    desc: "Coral reefs & snorkeling",
                    placeImageSrc: "/images/hikkaduwa1.jpg",
                    images: [
                        { itemImageSrc: "/images/hikkaduwa1.jpg", alt: "Hikkaduwa" },
                        { itemImageSrc: "/images/hikkaduwa2.jpg", alt: "Hikkaduwa" },
                        { itemImageSrc: "/images/hikkaduwa3.jpg", alt: "Hikkaduwa" },
                        { itemImageSrc: "/images/hikkaduwa4.jpg", alt: "Hikkaduwa" }
                    ]
                },
                {
                    name: "Mirissa",
                    desc: "Whale watching & relaxing beaches",
                    placeImageSrc: "/images/mirissa1.jpg",
                    images: [
                        { itemImageSrc: "/images/mirissa1.jpg", alt: "Mirissa" },
                        { itemImageSrc: "/images/mirissa2.jpg", alt: "Mirissa" },
                        { itemImageSrc: "/images/mirissa3.jpg", alt: "Mirissa" },
                        { itemImageSrc: "/images/mirissa4.jpg", alt: "Mirissa" }
                    ]
                },
                {
                    name: "Unawatuna",
                    desc: "Popular beach & diving spot",
                    placeImageSrc: "/images/unawatuna1.jpg",
                    images: [
                        { itemImageSrc: "/images/unawatuna1.jpg", alt: "Unawatuna" },
                        { itemImageSrc: "/images/unawatuna2.jpg", alt: "Unawatuna" },
                        { itemImageSrc: "/images/unawatuna3.jpg", alt: "Unawatuna" },
                        { itemImageSrc: "/images/unawatuna4.jpg", alt: "Unawatuna" }
                    ]
                },
                {
                    name: "Weligama",
                    desc: "Surfing & traditional stilt fishing",
                    placeImageSrc: "/images/weligama1.jpg",
                    images: [
                        { itemImageSrc: "/images/weligama1.jpg", alt: "Weligama" },
                        { itemImageSrc: "/images/weligama2.jpg", alt: "Weligama" },
                        { itemImageSrc: "/images/weligama3.jpg", alt: "Weligama" },
                        { itemImageSrc: "/images/weligama4.jpg", alt: "Weligama" }
                    ]
                },
                {
                    name: "Tangalle",
                    desc: "Golden beaches & quiet luxury",
                    placeImageSrc: "/images/tangalle1.jpg",
                    images: [
                        { itemImageSrc: "/images/tangalle1.jpg", alt: "Tangalle" },
                        { itemImageSrc: "/images/tangalle2.jpg", alt: "Tangalle" },
                        { itemImageSrc: "/images/tangalle3.jpg", alt: "Tangalle" },
                        { itemImageSrc: "/images/tangalle4.jpg", alt: "Tangalle" }
                    ]
                },
                {
                    name: "Passikudah",
                    desc: "Calm beaches & water activities",
                    placeImageSrc: "/images/passikudah1.jpg",
                    images: [
                        { itemImageSrc: "/images/passikudah1.jpg", alt: "Passikudah" },
                        { itemImageSrc: "/images/passikudah2.jpg", alt: "Passikudah" },
                        { itemImageSrc: "/images/passikudah3.jpg", alt: "Passikudah" },
                        { itemImageSrc: "/images/passikudah4.jpg", alt: "Passikudah" }
                    ]
                }
            ]
        },
        {
            title: "Wildlife & Safaris",
            desc: "Unforgettable safaris to see elephants, leopards, and exotic birds.",
            subPlaces: [
                {
                    name: "Udawalawe",
                    desc: "Elephant safaris",
                    placeImageSrc: "/images/udawalawe1.jpg",
                    images: [
                        { itemImageSrc: "/images/udawalawe1.jpg", alt: "Udawalawe" },
                        { itemImageSrc: "/images/udawalawe2.jpg", alt: "Udawalawe" },
                        { itemImageSrc: "/images/udawalawe3.jpg", alt: "Udawalawe" },
                        { itemImageSrc: "/images/udawalawe4.jpg", alt: "Udawalawe" }
                    ]
                },
                {
                    name: "Yala",
                    desc: "Leopard & wildlife safari",
                    placeImageSrc: "/images/yala1.jpg",
                    images: [
                        { itemImageSrc: "/images/yala1.jpg", alt: "Yala" },
                        { itemImageSrc: "/images/yala2.jpg", alt: "Yala" },
                        { itemImageSrc: "/images/yala3.jpg", alt: "Yala" },
                        { itemImageSrc: "/images/yala4.jpg", alt: "Yala" }
                    ]
                }
            ]
        },
        {
            title: "Other Highlights",
            desc: "Urban life, colonial heritage, and off-the-beaten-path experiences.",
            subPlaces: [
                {
                    name: "Colombo",
                    desc: "Modern city, shopping, and nightlife",
                    placeImageSrc: "/images/colombo1.jpg",
                    images: [
                        { itemImageSrc: "/images/colombo1.jpg", alt: "Colombo" },
                        { itemImageSrc: "/images/colombo2.jpg", alt: "Colombo" },
                        { itemImageSrc: "/images/colombo3.jpg", alt: "Colombo" },
                        { itemImageSrc: "/images/colombo4.jpg", alt: "Colombo" }
                    ]
                },
                {
                    name: "Negombo",
                    desc: "Lagoon, beach, and Dutch heritage",
                    placeImageSrc: "/images/negombo1.jpg",
                    images: [
                        { itemImageSrc: "/images/negombo1.jpg", alt: "Negombo" },
                        { itemImageSrc: "/images/negombo2.jpg", alt: "Negombo" },
                        { itemImageSrc: "/images/negombo3.jpg", alt: "Negombo" },
                        { itemImageSrc: "/images/negombo4.jpg", alt: "Negombo" }
                    ]
                },
                {
                    name: "Kalpitiya",
                    desc: "Dolphin watching & kite surfing",
                    placeImageSrc: "/images/kalpitiya1.jpg",
                    images: [
                        { itemImageSrc: "/images/kalpitiya1.jpg", alt: "Kalpitiya" },
                        { itemImageSrc: "/images/kalpitiya2.jpg", alt: "Kalpitiya" },
                        { itemImageSrc: "/images/kalpitiya3.jpg", alt: "Kalpitiya" },
                        { itemImageSrc: "/images/kalpitiya4.jpg", alt: "Kalpitiya" }
                    ]
                },
                {
                    name: "Trincomalee",
                    desc: "Hot springs, temples & beaches",
                    placeImageSrc: "/images/trincomalee1.jpg",
                    images: [
                        { itemImageSrc: "/images/trincomalee1.jpg", alt: "Trincomalee" },
                        { itemImageSrc: "/images/trincomalee2.jpg", alt: "Trincomalee" },
                        { itemImageSrc: "/images/trincomalee3.jpg", alt: "Trincomalee" },
                        { itemImageSrc: "/images/trincomalee4.jpg", alt: "Trincomalee" }
                    ]
                },
                {
                    name: "Galle",
                    desc: "Colonial fort, lighthouse & historic streets",
                    placeImageSrc: "/images/galle1.jpg",
                    images: [
                        { itemImageSrc: "/images/galle1.jpg", alt: "Galle" },
                        { itemImageSrc: "/images/galle2.jpg", alt: "Galle" },
                        { itemImageSrc: "/images/galle3.jpg", alt: "Galle" },
                        { itemImageSrc: "/images/galle4.jpg", alt: "Galle" }
                    ]
                }
            ]
        }
    ];

    const onPlaceClick = (place: Place) => {
        setSelectedPlace(place);
        setVisible(true);
    };

    const handleImageDoubleClick = (item: any) => {
        const newTab = window.open("", "_blank");

        if (newTab) {
            newTab.document.write(`
            <html>
                <head>
                    <title>${item.alt || "Image"}</title>
                    <link rel="icon" href="images//logo1.png" type="image/x-icon" />
                    <style>
                        body {
                            margin: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            background-color: #000;
                        }
                        img {
                            max-width: 100%;
                            max-height: 100%;
                            border-radius: 1rem;
                        }
                    </style>
                </head>
                <body>
                    <img src="${item.itemImageSrc}" alt="${item.alt || "Image"}" />
                </body>
            </html>
        `);
            newTab.document.close();
        }
    };


    return (
        <>
            <Header />
            <div className="flex justify-content-center text-center" style={{ margin: '6rem 0rem 3rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl font-bold">
                    Sri Lanka Destinations
                </div>
            </div>

            {destinations.map((category, catIndex) => (
                <div key={catIndex} className=" p-4 md:p-6">
                    <div className="text-center">
                        <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-3">{category.title}</h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto">{category.desc}</p>
                    </div>

                    <div className="grid">
                        {category.subPlaces.map((place, idx) => (
                            <div key={idx} className="col-12 md:col-4 p-3">
                                <Card
                                    className="cursor-pointer hover:shadow-4 transition-duration-200 h-full"
                                    onClick={() => onPlaceClick(place)}
                                    style={{ borderRadius: '1.5rem' }}
                                >
                                    <div className="flex flex-column h-full">
                                        <div className="flex align-items-center justify-content-center" style={{ height: '180px', backgroundColor: '#f0f0f0' }}>
                                            <img
                                                src={place.placeImageSrc}
                                                alt={"Destination"}
                                                className='h-full'
                                                style={{ width: '100%', height: '32rem', objectFit: 'cover', display: 'block', borderRadius: '1rem' }}
                                            />
                                        </div>
                                        <div className="p-3 flex flex-column justify-content-between flex-1">
                                            <div className="font-playfair text-2xl font-semibold mb-2">{place.name}</div>
                                            <div className="text-lg text-gray-700">{place.desc}</div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <Dialog
                header={<span style={{ fontFamily: "'Playfair Display', serif" }}>{selectedPlace?.name}</span>}
                visible={visible}
                draggable={false}
                style={{ width: '35rem', maxWidth: '100%' }}
                onHide={() => setVisible(false)}
                dismissableMask
            >
                {selectedPlace && selectedPlace.images.length > 0 ? (
                    <Galleria
                        value={selectedPlace.images}
                        responsiveOptions={[{ breakpoint: '61rem', numVisible: 1 }]}
                        numVisible={3}
                        style={{ width: '100%', height: '32rem' }}
                        showThumbnails={false}
                        circular
                        autoPlay
                        transitionInterval={2000}
                        showItemNavigators={false}
                        showThumbnailNavigators={false}
                        item={(item) => (
                            <img
                                src={item.itemImageSrc}
                                alt={item.alt}
                                style={{
                                    width: '100%',
                                    height: '32rem',
                                    objectFit: 'cover',
                                    display: 'block',
                                    borderRadius: '1rem'
                                }}
                                onDoubleClick={() => handleImageDoubleClick(item)}
                            />
                        )}
                    />
                ) : (
                    <p>No images available</p>
                )}
            </Dialog>
            <Footer />
        </>
    );
}