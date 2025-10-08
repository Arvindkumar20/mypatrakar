import ContactInfo from "./ContactInfo";
import React, { useState } from "react";
import ContactTop from "./ContactTop";
import MissionSection from "./MissionSection ";
import RequestCallbackForm from "./RequestCallbackForm ";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [address, setAddress] = useState(
    "Building No 10/703, Ground Floor, near Arvindo Park Road, Sector 10, Indira Nagar, Lucknow, Uttar Pradesh 226016"
  );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -z-10">
      <Helmet>
        <title>Contact Us | MyPatrakar - Connect with Our Team</title>
        <meta
          name="description"
          content="Get in touch with MyPatrakar team. We're here to answer your questions and support your journalism needs. Contact us today!"
        />
        <meta
          name="keywords"
          content="contact MyPatrakar, journalism support, media contact, press inquiry, reporter assistance"
        />
        <meta name="author" content="MyPatrakar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mypatrakar.com/contact" />
      </Helmet>

      {/* Contact Top Section */}
      <div className="mb-12 md:mb-16">
        <ContactTop />
      </div>

      {/* Mission Section */}
      <div className="mb-16">
        <MissionSection />
      </div>

      {/* Contact Info + Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-20">
        <ContactInfo setAddress={setAddress} />

        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
          {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-500 inline-block">
            Request a Callback
          </h2> */}
          <RequestCallbackForm />
        </div>
      </div>

      {/* Google Map Section */}
     <div className="mb-20 rounded-xl overflow-hidden shadow-xl border border-gray-200">
        <iframe
          title="MyPatrakar Office Location"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.684153373158!2d80.94622331504416!3d26.87989798313967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957f50b05fdc9%3A0x2d6c0c8c3d8e3b0e!2s${encodeURIComponent(address)}!5e0!3m2!1sen!2sin!4v1625736789012!5m2!1sen!2sin`}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
