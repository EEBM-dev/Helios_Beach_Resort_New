import React, { useState, useRef } from "react";
import { Divider } from "primereact/divider";
import { Galleria } from "primereact/galleria";
import Footer from "../components/footer";
import Header from "../components/header";

export default function GalleryPage() {
    const galleriaRef = useRef<Galleria>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [, setShowGallery] = useState(false);

    const images = [
        { src: "/images/image33.jpg", col: "col-12 md:col-5", height: 350, alt: "image33" },
        { src: "/images/image34.jpg", col: "col-12 md:col-5", height: 350, alt: "image34" },
        { src: "/images/image35.jpg", col: "col-12 md:col-5", height: 300, alt: "image35" },
        { src: "/images/image36.jpg", col: "col-12 md:col-5", height: 300, alt: "image36" },
        { src: "/images/image37.jpg", col: "col-12 md:col-3", height: 300, alt: "image37" },
        { src: "/images/image38.jpg", col: "col-12 md:col-4", height: 300, alt: "image38" },
        { src: "/images/image39.jpg", col: "col-12 md:col-3", height: 300, alt: "image39" },

        { src: "/images/image40.jpg", col: "col-12 md:col-3", height: 300, alt: "image40" },
        { src: "/images/image41.jpg", col: "col-12 md:col-5", height: 350, alt: "image41" },
        { src: "/images/image42.jpg", col: "col-12 md:col-5", height: 350, alt: "image42" },
        { src: "/images/image43.jpg", col: "col-12 md:col-5", height: 350, alt: "image43" },
        { src: "/images/image44.jpg", col: "col-12 md:col-5", height: 350, alt: "image44" },
        { src: "/images/image45.jpg", col: "col-12 md:col-5", height: 350, alt: "image45" },
        { src: "/images/image46.jpg", col: "col-12 md:col-5", height: 350, alt: "image46" },
        { src: "/images/image47.jpg", col: "col-12 md:col-5", height: 350, alt: "image47" },
        { src: "/images/image48.jpg", col: "col-12 md:col-5", height: 350, alt: "image48" },
        { src: "/images/image49.jpg", col: "col-12 md:col-5", height: 350, alt: "image49" },

        { src: "/images/image50.jpg", col: "col-12 md:col-5", height: 350, alt: "image50" },
        { src: "/images/image51.jpg", col: "col-12 md:col-5", height: 350, alt: "image51" },
        { src: "/images/image52.jpg", col: "col-12 md:col-5", height: 350, alt: "image52" },
        { src: "/images/image53.jpg", col: "col-12 md:col-5", height: 350, alt: "image53" },
        { src: "/images/image54.jpg", col: "col-12 md:col-5", height: 350, alt: "image54" },
        { src: "/images/image55.jpg", col: "col-12 md:col-5", height: 350, alt: "image55" },
        { src: "/images/image56.jpg", col: "col-12 md:col-5", height: 350, alt: "image56" },
        { src: "/images/image57.jpg", col: "col-12 md:col-5", height: 350, alt: "image57" },
        { src: "/images/image58.jpg", col: "col-12 md:col-5", height: 350, alt: "image58" },
        { src: "/images/image59.jpg", col: "col-12 md:col-5", height: 350, alt: "image59" },

        { src: "/images/image60.jpg", col: "col-12 md:col-5", height: 350, alt: "image60" },
        { src: "/images/image61.jpg", col: "col-12 md:col-5", height: 350, alt: "image61" },
        { src: "/images/image62.jpg", col: "col-12 md:col-5", height: 350, alt: "image62" },
        { src: "/images/image63.jpg", col: "col-12 md:col-5", height: 350, alt: "image63" },
        { src: "/images/image64.jpg", col: "col-12 md:col-5", height: 350, alt: "image64" },
        { src: "/images/image65.jpg", col: "col-12 md:col-5", height: 350, alt: "image65" },
        { src: "/images/image66.jpg", col: "col-12 md:col-5", height: 350, alt: "image66" },
        { src: "/images/image67.jpg", col: "col-12 md:col-5", height: 350, alt: "image67" },
        { src: "/images/image68.jpg", col: "col-12 md:col-5", height: 350, alt: "image68" },
        { src: "/images/image69.jpg", col: "col-12 md:col-5", height: 350, alt: "image69" },

        { src: "/images/image70.jpg", col: "col-12 md:col-5", height: 350, alt: "image70" },
        { src: "/images/image71.jpg", col: "col-12 md:col-5", height: 350, alt: "image71" },
        { src: "/images/image72.jpg", col: "col-12 md:col-5", height: 350, alt: "image72" },
        { src: "/images/image73.jpg", col: "col-12 md:col-5", height: 350, alt: "image73" },
        { src: "/images/image74.jpg", col: "col-12 md:col-5", height: 350, alt: "image74" },
        { src: "/images/image75.jpg", col: "col-12 md:col-5", height: 350, alt: "image75" },
        { src: "/images/image76.jpg", col: "col-12 md:col-5", height: 350, alt: "image76" },
        { src: "/images/image77.jpg", col: "col-12 md:col-5", height: 350, alt: "image77" },
        { src: "/images/image78.jpg", col: "col-12 md:col-5", height: 350, alt: "image78" },
        { src: "/images/image79.jpg", col: "col-12 md:col-5", height: 350, alt: "image79" },

        { src: "/images/image80.jpg", col: "col-12 md:col-5", height: 350, alt: "image80" },
        { src: "/images/image81.jpg", col: "col-12 md:col-5", height: 350, alt: "image81" },
    ];

    const itemTemplate = (item: any) => {
        return (
            <img
                src={item.src}
                alt={item.alt}
                style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
            />
        );
    };

    return (
        <>
            <Header />
            <div className="flex justify-content-center text-center" style={{ margin: '6rem 0rem 3rem 0rem' }}>
                <div className="font-playfair text-6xl md:text-8xl font-bold">
                    Our Gallery
                </div>
            </div>

            <div className="p-4 md:p-6 lg:p-8">
                <Divider />
                <div className="grid justify-content-center">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="col-12 md:col-6 p-2 cursor-pointer"
                            onClick={() => {
                                setActiveIndex(index);
                                setShowGallery(true);
                                galleriaRef.current?.show();
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                title={img.alt}
                                className="w-full shadow-2 transition-transform transform hover:scale-105"
                                style={{
                                    height: "350px",
                                    objectFit: "cover",
                                    borderRadius: "0.7rem",
                                }}
                            />
                        </div>
                    ))}
                </div>

                <Galleria
                    ref={galleriaRef}
                    value={images}
                    activeIndex={activeIndex}
                    onItemChange={(e) => setActiveIndex(e.index)}
                    responsiveOptions={[
                        { breakpoint: "1024px", numVisible: 5 },
                        { breakpoint: "768px", numVisible: 3 },
                        { breakpoint: "560px", numVisible: 1 },
                    ]}
                    numVisible={5}
                    circular
                    showThumbnails={false}
                    showItemNavigators
                    item={itemTemplate}
                    fullScreen
                />
            </div>
            <Footer />
        </>
    );
}