import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import { Star, Users, Trophy, CheckCircle, Download, Phone, FileText } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const IndianAirForce = () => {
  const highlights = [
    "Air Force X & Y Group Training",
    "Technical & Non-Technical Coaching",
    "Aptitude Test Preparation", 
    "SSB Interview Training",
    "Physical Fitness Programs",
    "Aircraft Knowledge Training"
  ];

  const trainingPrograms = [
    {
      title: "Air Force X Group",
      description: "Technical training for Air Force X Group positions and technical trades.",
      icon: "✈️"
    },
    {
      title: "Air Force Y Group",
      description: "Non-technical training for Air Force Y Group administrative positions.",
      icon: "🛩️"
    },
    {
      title: "Aptitude Training",
      description: "Comprehensive aptitude test preparation for air force recruitment.",
      icon: "🧠"
    },
    {
      title: "Technical Knowledge",
      description: "Aircraft systems, maintenance, and technical knowledge training.",
      icon: "⚙️"
    }
  ];
const airforceImages = [
  "/images/airforce.jpg",  // ✅ Put these in public/images/
  "/images/airforce3.jpg"
];
const [airforceBgIndex, setAirforceBgIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setAirforceBgIndex((prev) => (prev + 1) % airforceImages.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
    <section className="relative py-20 overflow-hidden text-white">
  {/* Background Image Slider */}
  <div className="absolute inset-0 z-0 transition-all duration-1000">
    <img
      src={airforceImages[airforceBgIndex]}
      alt="Air Force Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-sky-600/70 to-sky-800/80"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="text-6xl mb-6">✈️</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Indian Air Force Training
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Air Force X & Y Group preparation with technical and non-technical training
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
        <Link 
          to="/contact" 
          className="inline-block bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Apply Now
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Indian Air Force Recruitment Training</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Indian Air Force training program provides comprehensive preparation for both X Group (Technical) 
                and Y Group (Non-Technical) positions. With expert coaching in aptitude, technical knowledge, 
                and interview preparation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Join our specialized air force training program and soar high in your career with the 
                Indian Air Force. Our proven methodology ensures success in all recruitment phases.
              </p>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-sky-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-sky-600 mb-2">92%</div>
                  <p className="text-gray-700 font-semibold">Success Rate</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                  <p className="text-gray-700 font-semibold">Selected Candidates</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/images/airforce.jpg"
                alt="Air Force Jets"
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&crop=center"
                alt="Air Force Training"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Air Force Training Introduction</h2>
            <p className="text-xl text-gray-600">Discover our air force training methodology and success stories</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/WUCetso-Ah0"
                title="Indian Air Force Training Program"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Air Force Training Program Overview</h3>
              <p className="text-gray-600">Complete guide to our air force recruitment preparation and training methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Air Force Training Programs</h2>
            <p className="text-xl text-gray-600">Specialized preparation for air force recruitment</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Air Force Training Highlights</h2>
            <p className="text-xl text-sky-100">Excellence in aviation training and preparation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center bg-sky-700 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-sky-300 mr-3 flex-shrink-0" />
                <span className="font-semibold">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Indian Air Force?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Take flight in your career. Join our comprehensive air force training program today.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              to="/contact" 
              className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Apply Now
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <Users className="h-5 w-5 mr-2" />
              Contact Us
            </Link>
            
            {/* <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center">
              <Download className="h-5 w-5 mr-2" />
              Download Brochure
            </button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndianAirForce;
