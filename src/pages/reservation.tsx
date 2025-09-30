import React, { useState, useEffect, useRef } from "react";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import emailjs from '@emailjs/browser';

import Footer from "../components/footer";
import Header from "../components/header";
import { useLocation } from "react-router-dom";
import BeBookingForm from "../components/beForms/beBookingForm";

export default function ReservationForm() {
    const [checkIn, setCheckIn] = useState<Date | null | undefined>(null);
    const [checkOut, setCheckOut] = useState<Date | null | undefined>(null);
    const [adults, setAdults] = useState<number | null>(0);
    const [children, setChildren] = useState<number | null>(0);
    const [rooms, setRooms] = useState<number | null>(0);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const location = useLocation();
    const category = location.state?.category || "Not selected";
    const toast = useRef<any>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const sendEmail = () => {
        // Format dates for display
        const checkInStr = checkIn ? checkIn.toLocaleDateString() : "Not selected";
        const checkOutStr = checkOut ? checkOut.toLocaleDateString() : "Not selected";
        
        // Prepare email template parameters
        const templateParams = {
            to_name: "Hotel Management",
            from_name: name,
            from_email: email,
            phone: phone,
            address: address,
            category: category,
            check_in: checkInStr,
            check_out: checkOutStr,
            adults: adults,
            children: children,
            rooms: rooms,
            message: `New reservation request from ${name}. 
                     Category: ${category}
                     Check-in: ${checkInStr}
                     Check-out: ${checkOutStr}
                     Adults: ${adults}
                     Children: ${children}
                     Rooms: ${rooms}
                     Contact: ${phone}
                     Email: ${email}
                     Address: ${address}`
        };

        // Replace these with your actual EmailJS credentials
        const serviceID = 'service_qov0v8e';
        const templateID = 'template_etuc782';
        const publicKey = 'zXl1hTvqerQzC0sFz';

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                toast.current.show({ 
                    severity: "success", 
                    summary: "Email Sent", 
                    detail: "Reservation details sent successfully!", 
                    life: 3000 
                });
            }, (error) => {
                toast.current.show({ 
                    severity: "error", 
                    summary: "Error", 
                    detail: "Failed to send email. Please try again.", 
                    life: 3000 
                });
                console.error('EmailJS error:', error);
            });
    };

    const handleCheckAvailability = () => {
        if (!name.trim()) {
            toast.current.show({ severity: "warn", summary: "Validation", detail: "Please enter your name.", life: 3000 });
            return;
        }
        if (!phone.trim()) {
            toast.current.show({ severity: "warn", summary: "Validation", detail: "Please enter your phone number.", life: 3000 });
            return;
        }
        if (!email.trim()) {
            toast.current.show({ severity: "warn", summary: "Validation", detail: "Please enter your email address.", life: 3000 });
            return;
        }
        if (!checkIn) {
            toast.current.show({ severity: "warn", summary: "Validation", detail: "Please select check-in date.", life: 3000 });
            return;
        }
        if (!checkOut) {
            toast.current.show({ severity: "warn", summary: "Validation", detail: "Please select check-out date.", life: 3000 });
            return;
        }
        if (checkOut <= checkIn) {
            toast.current.show({ severity: "error", summary: "Validation", detail: "Check-out must be after check-in.", life: 3000 });
            return;
        }
        if (!adults || adults < 1) {
            toast.current.show({ severity: "warn", summary: "Validation", detail: "At least 1 adult is required.", life: 3000 });
            return;
        }
        if (!rooms || rooms < 1) {
            toast.current.show({ severity: "warn", summary: "Validation", detail: "At least 1 room is required.", life: 3000 });
            return;
        }

        // First send the email
        sendEmail();
        
        // Then proceed with the booking URL redirection
        const checkInStr = checkIn.toISOString().split("T")[0];
        const checkOutStr = checkOut.toISOString().split("T")[0];

        let bookingUrl = "";

        // if (category === "Deluxe Sea view bungalow") {
        //     bookingUrl = `https://heliosbeachresort.com/en/booking/?&be-room=5013010&checkin=${checkInStr}&checkout=${checkOutStr}&adults=${adults}&children=${children}&rooms=${rooms}&name=${encodeURIComponent(
        //         name
        //     )}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&address=${encodeURIComponent(address)}`;
        // } else if (category === "Bungalow with garden (Non AC)") {
        //     bookingUrl = `https://heliosbeachresort.com/en/booking/?&be-room=5048143&checkin=${checkInStr}&checkout=${checkOutStr}&adults=${adults}&children=${children}&rooms=${rooms}&name=${encodeURIComponent(
        //         name
        //     )}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&address=${encodeURIComponent(address)}`;
        // } else if (category === "Standard Sea view bungalow") {
        //     bookingUrl = `https://heliosbeachresort.com/en/booking/?&be-room=5012017&checkin=${checkInStr}&checkout=${checkOutStr}&adults=${adults}&children=${children}&rooms=${rooms}&name=${encodeURIComponent(
        //         name
        //     )}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&address=${encodeURIComponent(address)}`;
        // } else {
        //     toast.current.show({ severity: "error", summary: "Validation", detail: "Invalid room category selected.", life: 3000 });
        //     return;
        // }

        toast.current.show({ severity: "success", summary: "Redirecting", detail: "Checking availability...", life: 2000 });

        setTimeout(() => {
            window.location.href = bookingUrl;
        }, 2000);
    };

    return (
        <>
            <Header />
            <Toast ref={toast} />

            <div className="text-center" style={{ margin: "6rem 0rem 3rem 0rem" }}>
                <div className="font-playfair text-6xl md:text-8xl lg:text-8xl font-bold">Reservation</div>
            </div>
            <BeBookingForm />
            <div className="p-3 md:p-6 lg:p-8 hidden">
                <Card className="p-4 md:p-5 lg:p-6" style={{ backgroundColor: "#f4faff", borderRadius: "0.75rem" }}>
                    <div className="grid formgrid">
                        {/* Name */}
                        <div className="col-12 md:col-6 mb-6">
                            <label className="block mb-4 font-bold text-lg ml-1">Name</label>
                            <InputText
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                className="w-full shadow-2 border-round-lg p-inputtext overflow-hidden"
                                style={{ border: "none", boxShadow: "none", height: '4.2rem' }}
                            />
                        </div>

                        {/* Phone */}
                        <div className="col-12 md:col-6 mb-6">
                            <label className="block mb-4 font-bold text-lg ml-1">Phone</label>
                            <InputText
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your phone number"
                                keyfilter="int"
                                className="w-full shadow-2 border-round-lg p-inputtext overflow-hidden"
                                style={{ border: "none", boxShadow: "none", height: '4.2rem' }}
                            />
                        </div>

                        {/* Email */}
                        <div className="col-12 md:col-6 mb-6">
                            <label className="block mb-4 font-bold text-lg ml-1">Email</label>
                            <InputText
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                keyfilter="email"
                                className="w-full shadow-2 border-round-lg p-inputtext overflow-hidden"
                                style={{ border: "none", boxShadow: "none", height: '4.2rem' }}
                            />
                        </div>

                        {/* Address */}
                        <div className="col-12 md:col-6 mb-6">
                            <label className="block mb-4 font-bold text-lg ml-1">Address</label>
                            <InputText
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter your address"
                                className="w-full shadow-2 border-round-lg p-inputtext overflow-hidden"
                                style={{ border: "none", boxShadow: "none", height: '4.2rem' }}
                            />
                        </div>

                        {/* Check-in */}
                        <div className="col-12 md:col-6 mb-6 mt-4">
                            <Calendar
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.value)}
                                placeholder="Check in date"
                                className="w-full shadow-2 border-round-lg p-inputtext overflow-hidden"
                                inputStyle={{ border: "none", boxShadow: "none" }}
                                showIcon
                            />
                        </div>

                        {/* Check-out */}
                        <div className="col-12 md:col-6 mb-3 mt-4">
                            <Calendar
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.value)}
                                placeholder="Check out date"
                                className="w-full shadow-2 border-round-lg p-inputtext overflow-hidden"
                                inputStyle={{ border: "none", boxShadow: "none" }}
                                showIcon
                            />
                        </div>

                        {/* Adults */}
                        <div className="col-12 md:col-4 lg:col-6 mb-6">
                            <label className="block mb-4 font-bold text-lg ml-1">Adults</label>
                            <InputNumber
                                value={adults}
                                onValueChange={(e) => setAdults(e.value ?? 1)}
                                min={0}
                                showButtons
                                buttonLayout="horizontal"
                                decrementButtonClassName="border-round-lg"
                                incrementButtonClassName="border-round-lg"
                                decrementButtonIcon="pi pi-minus"
                                incrementButtonIcon="pi pi-plus"
                                className="w-full shadow-2 border-round-lg p-inputtext overflow-hidden"
                                inputStyle={{ textAlign: "center", width: "100%", border: "none", boxShadow: "none" }}
                            />
                            <small className="block mt-2 text-500">Guests aged 12 or above. Children under 5 years old are not accepted.</small>
                        </div>

                        {/* Children */}
                        <div className="col-12 sm:col-4 lg:col-6 mb-6">
                            <label className="block mb-4 font-bold text-lg ml-1">Children</label>
                            <InputNumber
                                value={children}
                                onValueChange={(e) => setChildren(e.value ?? 0)}
                                min={0}
                                showButtons
                                buttonLayout="horizontal"
                                decrementButtonClassName="border-round-lg"
                                incrementButtonClassName="border-round-lg"
                                decrementButtonIcon="pi pi-minus"
                                incrementButtonIcon="pi pi-plus"
                                className="w-full shadow-2 border-round-lg p-inputtext overflow-hidden"
                                inputStyle={{ textAlign: "center", width: "100%", border: "none", boxShadow: "none" }}
                            />
                        </div>

                        {/* Rooms */}
                        <div className="col-12 sm:col-4 lg:col-6 mb-6">
                            <label className="block mb-4 font-bold text-lg ml-1">Rooms</label>
                            <InputNumber
                                value={rooms}
                                onValueChange={(e) => setRooms(e.value ?? 1)}
                                min={0}
                                showButtons
                                buttonLayout="horizontal"
                                decrementButtonClassName="border-round-lg"
                                incrementButtonClassName="border-round-lg"
                                decrementButtonIcon="pi pi-minus"
                                incrementButtonIcon="pi pi-plus"
                                className="w-full shadow-2 border-round-lg p-inputtext overflow-hidden"
                                inputStyle={{ textAlign: "center", width: "100%", border: "none", boxShadow: "none" }}
                            />
                        </div>

                        <div className="col-12">
                            <Button
                                label="Check Availability"
                                className="w-full btn btn-blue-light-r"
                                style={{ height: "4rem" }}
                                onClick={handleCheckAvailability}
                            />
                        </div>
                    </div>
                </Card>
            </div>
            <Footer />
        </>
    );
}
