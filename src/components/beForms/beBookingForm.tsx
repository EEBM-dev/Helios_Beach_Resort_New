'use client';
import React from "react";
import {useEffect} from "react";
import "./be-style.css";

export default function BeBookingForm() {
  const bookingForm = (w: any) => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !function(e,n){
      // @ts-ignore
      var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
      // @ts-ignore
      if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){a[c]=!0;var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        !function n(i){if(0!==i.length){var a=l.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://"+i[0]+"/integration/loader.js",
            a.onerror=a.onload=function(n,i){return function()
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                {e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())}}(a,(function(){n(i.slice(1,i.length))})),g.appendChild(a)}}(
            ["lk-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"])}
    }(window, [
      ["setContext", "BE-INT-heliosbeachresort-com_2025-09-30", "en"],
      ["embed", "booking-form", {
        container: "be-booking-form"
      }]
    ]);
  };

  useEffect(() => {
    bookingForm(window);
    const previousTitle = document.title;
    document.title = "Online reservation Helios Beach Resort, Tangalle - Official Site";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
      <div id="be-booking-form" />
  )
}