import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import { Star, Users, Trophy, CheckCircle, Download, Phone, FileText } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NDA = () => {
  const highlights = [
    "NDA Written Exam Preparation",
    "SSB Interview Training",
    "Physical Fitness Training", 
    "Leadership Development",
    "Personality Development",
    "Mock Tests & Practice"
  ];

  const trainingPrograms = [
    {
      title: "NDA Written Exam",
      description: "Comprehensive preparation for NDA written examination covering all subjects.",
      icon: "📚"
    },
    {
      title: "SSB Interview",
      description: "Services Selection Board interview preparation with mock interviews.",
      icon: "🗣️"
    },
    {
      title: "Physical Training",
      description: "Physical fitness training to meet NDA physical standards.",
      icon: "💪"
    },
    {
      title: "Leadership Skills",
      description: "Leadership development and personality enhancement programs.",
      icon: "🎖️"
    }
  ];
const ndaImages = [
  "/images/NDA1.jpeg", // ✅ Put in public/images/
  "/images/NDA3.jpg"
];
const [ndaBgIndex, setNdaBgIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setNdaBgIndex((prev) => (prev + 1) % ndaImages.length);
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
      src={ndaImages[ndaBgIndex]}
      alt="NDA Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-red-600/70 to-red-800/80"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="text-6xl mb-6">🎖️</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        NDA Training
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        National Defence Academy preparation with comprehensive training for future officers
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
        <Link 
          to="/contact" 
          className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">National Defence Academy Training</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our NDA training program is designed to prepare future officers for the prestigious National Defence Academy. 
                With comprehensive coaching for written exams, SSB interviews, and personality development, 
                we ensure holistic preparation for NDA selection.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Join the elite ranks of defence officers through our specialized NDA training program 
                at Mission Defence Academy, where we shape future leaders of the Indian Armed Forces.
              </p>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-red-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">88%</div>
                  <p className="text-gray-700 font-semibold">Success Rate</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
                  <p className="text-gray-700 font-semibold">Selected Cadets</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/images/NDA1.jpeg"
                alt="NDA Training"
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="/images/NDA3.jpg"
                alt="NDA Academy"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NDA Training Introduction</h2>
            <p className="text-xl text-gray-600">Learn about our comprehensive NDA preparation methodology</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/Xw9QCDhTczM"
                title="NDA Training Program"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">NDA Training Program Overview</h3>
              <p className="text-gray-600">Complete introduction to our NDA preparation program and success strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NDA Training Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive preparation for NDA selection process</p>
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
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">NDA Training Highlights</h2>
            <p className="text-xl text-red-100">Excellence in officer training and development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center bg-red-700 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-red-300 mr-3 flex-shrink-0" />
                <span className="font-semibold">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join NDA?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Become a future officer of the Indian Armed Forces. Start your NDA journey today.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              to="/contact" 
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
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
            
           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NDA;
