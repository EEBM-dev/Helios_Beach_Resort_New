import { useState } from "react";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useNavigate } from "react-router-dom";
import BeSearchForm from "./beForms/beSearchForm";

export default function Header() {
    const navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/94702676876", "_blank");
    };

    const NavLinks = () => (
        <nav className="flex flex-column md:flex-row flex-wrap gap-3 md:gap-4 text-center cursor-pointer">
            <span onClick={() => navigate("/")}>Home</span>
            <span onClick={() => navigate("/aboutus")}>About</span>
            <span onClick={() => navigate("/accommodations")}>Rooms</span>
            <span onClick={() => navigate("/packages")}>Packages</span>
            <span onClick={() => navigate("/destinations")}>Travels</span>
            <span onClick={() => navigate("/services")}>Services</span>
            <span onClick={() => navigate("/gallery")}>Gallery</span>
            <span onClick={() => navigate("/contactus")}>Contact</span>
        </nav>
    );

    return (
        <>
          <header className="font-lato">
            <div className="flex flex-wrap align-items-center">
              <div
                  className="col-12 md:col-1 flex justify-content-between md:justify-content-start align-items-center px-3 md:border-none"
                  style={{ borderBottom: "0.5rem solid #0077B6" }}
              >
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="cursor-pointer"
                    style={{ height: "auto", maxHeight: "7rem", width: "auto" }}
                    onClick={() => navigate("/")}
                />
                <i
                    className="pi pi-bars md:hidden cursor-pointer text-4xl"
                    style={{ color: "#0077B6" }}
                    onClick={() => setMenuVisible(true)}
                ></i>
              </div>

              <div className="col-12 md:col-11">
                <div
                    className="hidden md:flex flex-wrap justify-content-start gap-4 align-items-center text-md p-2"
                    style={{ color: '#0077B6' }}
                >
                        <span className="flex align-items-center gap-1 white-space-nowrap">
                            <i className="pi pi-map-marker"></i>
                            Southern Province, Tangalle.
                        </span>
                  <Button
                      label="+94 70 267 6876"
                      className="bg-white border-none p-0 text-2"
                      icon="pi pi-whatsapp"
                      onClick={handleWhatsAppClick}
                  />
                </div>
                <div
                    className="px-3 py-2 hidden md:flex md:flex-row md:align-items-center md:justify-content-between gap-3"
                    style={{ backgroundColor: '#0077B6', color: '#ffffff', height: '4rem' }}
                >
                  <NavLinks />
                </div>
              </div>
            </div>

            <Sidebar
                visible={menuVisible}
                position="right"
                onHide={() => setMenuVisible(false)}
                className="w-15rem"
            >
              <div className="flex flex-column gap-3 text-lg font-medium cursor-pointer p-3">
                <NavLinks />
              </div>

              <div className="flex flex-column gap-3 p-3">
                    <span className="flex align-items-center gap-2 text-md" style={{ color: '#0077B6' }}>
                        <i className="pi pi-map-marker"></i>
                        Southern Province, Tangalle.
                    </span>
                <Button
                    label="+94 70 267 6876"
                    className="bg-white border-none p-0 text-2"
                    icon="pi pi-whatsapp"
                    onClick={handleWhatsAppClick}
                />
              </div>
            </Sidebar>
          </header>
          <BeSearchForm />
        </>
    );
}