import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import { Star, Users, Trophy, CheckCircle, Download, Phone, FileText } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const IndianArmy = () => {
  const highlights = [
    "Physical Training & Fitness",
    "Written Test Preparation", 
    "SSB Interview Coaching",
    "Mock Tests & Practice",
    "Medical Test Guidance",
    "Document Verification Support"
  ];

  const trainingPrograms = [
    {
      title: "Army Physical Test",
      description: "Comprehensive physical training including running, pull-ups, and endurance exercises.",
      icon: "🏃‍♂️"
    },
    {
      title: "Army Written Test",
      description: "Complete preparation for written examination covering all subjects.",
      icon: "📝"
    },
    {
      title: "Army Medical Test",
      description: "Medical examination preparation with detailed guidance on fitness standards.",
      icon: "🏥"
    },
    {
      title: "General Duty (GD)",
      description: "Specialized training for General Duty soldier positions.",
      icon: "👮‍♂️"
    }
  ];
const armyImages = [
  "/images/army.jpg",  // ✅ public/images/army1.jpg
  "/images/army4.jpg"   // ✅ public/images/army2.jpg
];
const [armyBgIndex, setArmyBgIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setArmyBgIndex((prev) => (prev + 1) % armyImages.length);
  }, 5000); // change every 5 seconds
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
      src={armyImages[armyBgIndex]}
      alt="Army Training Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-green-600/70 to-green-800/80"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="text-6xl mb-6">🇮🇳</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Indian Army Training
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Specialized coaching for Indian Army recruitment with comprehensive training programs
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
        <Link
          to="/contact"
          className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Indian Army Recruitment Training</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Indian Army training program is designed to prepare aspiring soldiers for all aspects of army recruitment. 
                With expert trainers and proven methodologies, we ensure comprehensive preparation for physical tests, 
                written examinations, and interview processes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Join thousands of successful candidates who have achieved their dream of serving the nation through our 
                specialized training programs at Mission Defence Academy.
              </p>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-gray-700 font-semibold">Success Rate</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-700 font-semibold">Selected Candidates</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fe3e174ee138d4caabff1d626ff0cd20f?format=webp&width=800"
                alt="Elite Army Formation"
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F0d049290581e4af69b2cfd3db4e1dd43?format=webp&width=800"
                alt="Army Combat Operations"
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Army Training Introduction</h2>
            <p className="text-xl text-gray-600">Watch our comprehensive army training program overview</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dTc4Ogd6nd8"
                title="Indian Army Training Program"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Indian Army Training Program Overview</h3>
              <p className="text-gray-600">Complete introduction to our army recruitment training methodology and success stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive preparation for all army recruitment phases</p>
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
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Key Training Highlights</h2>
            <p className="text-xl text-green-100">What makes our army training program unique</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center bg-green-700 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" />
                <span className="font-semibold">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Indian Army?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step towards serving your nation. Join our comprehensive army training program today.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              to="/contact" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Apply Now
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Users className="h-5 w-5 mr-2" />
              Contact Us
            </Link>
            
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndianArmy;
