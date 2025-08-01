import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import { Wifi, Car, Utensils, CheckCircle, Download, Phone, Home, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';

const Hostel = () => {
  const highlights = [
    "24x7 Electricity & Water Supply",
    "AC Rooms with Modern Amenities",
    "High-Speed WiFi Internet", 
    "24/7 Security & CCTV Surveillance",
    "Hot Water Supply",
    "Indoor Games & Recreation",
    "Reading Room & Study Area",
    "Laundry Facilities"
  ];

  const hostelFeatures = [
    {
      title: "AC Accommodation",
      description: "Comfortable air-conditioned rooms with modern furnishing and amenities.",
      icon: "❄️"
    },
    {
      title: "WiFi Connectivity",
      description: "High-speed internet connectivity for online studies and communication.",
      icon: "📶"
    },
    {
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance for student safety.",
      icon: "🛡️"
    },
    {
      title: "Recreation Facilities",
      description: "Indoor games, recreation room, and entertainment facilities for relaxation.",
      icon: "🎮"
    }
  ];
const hostelImages = [
  "/images/hostel3.jpeg",  // ✅ Put these inside public/images/
  "/images/hostel4.jpg"
];
const [hostelBgIndex, setHostelBgIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setHostelBgIndex((prev) => (prev + 1) % hostelImages.length);
  }, 5000); // change every 5 sec
  return () => clearInterval(interval);
}, []);



  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
     

      {/* Service Hero Section */}
     <section className="relative py-20 overflow-hidden text-white">
  {/* Background Image Slider */}
  <div className="absolute inset-0 z-0 transition-all duration-1000">
    <img
      src={hostelImages[hostelBgIndex]}
      alt="Hostel Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/70 to-purple-800/80"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="text-6xl mb-6">🏠</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Hostel Facilities
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Comfortable accommodation with modern amenities for outstation students
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
        <Link 
          to="/contact" 
          className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Premium Hostel Accommodation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our hostel facilities provide a home away from home for students coming from different cities. 
                With modern amenities, comfortable accommodation, and a safe environment, we ensure students 
                can focus entirely on their defence preparation without any worries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Located near Rajiv Gandhi Sports Stadium, our hostel offers easy access to training facilities 
                while providing a conducive environment for study and rest.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We maintain high standards of cleanliness, security, and discipline to create an ideal 
                atmosphere for defence aspirants preparing for their dream careers.
              </p>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                  <p className="text-gray-700 font-semibold">Hostel Capacity</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <p className="text-gray-700 font-semibold">Security & Support</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/images/hostel.jpg"
                alt="Hostel Room Interior"
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="/images/hostel1.jpeg"
                alt="Common Study Area"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hostel Tour</h2>
            <p className="text-xl text-gray-600">Take a virtual tour of our modern hostel facilities</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/Q2Ms0RBwKng"
                title="Hostel Facilities Tour"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mission Defence Academy Hostel Tour</h3>
              <p className="text-gray-600">Complete overview of our hostel facilities, rooms, and amenities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hostel Features</h2>
            <p className="text-xl text-gray-600">Modern amenities for comfortable living</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostelFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Hostel Highlights</h2>
            <p className="text-xl text-purple-100">Everything you need for comfortable accommodation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center bg-purple-700 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-purple-300 mr-3 flex-shrink-0" />
                <span className="font-semibold text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hostel Accommodation Plans</h2>
            <p className="text-xl text-gray-600">Choose the plan that suits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shared Room</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">₹8,000 <span className="text-lg text-gray-500 font-normal">/ month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Shared AC Room (2-3 Students)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>WiFi & Study Table</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Common Bathroom</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>All Basic Amenities</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
              >
                Book Now
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-purple-500">
              <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Single Room</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">₹12,000 <span className="text-lg text-gray-500 font-normal">/ month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Private AC Room</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Attached Bathroom</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Study Table & WiFi</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Premium Amenities</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Accommodation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Secure your hostel accommodation today and focus on your defence preparation with peace of mind.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              to="/contact" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Book Now
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <Home className="h-5 w-5 mr-2" />
              Visit Hostel
            </Link>
            
           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hostel;
