import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import {
  Star,
  Users,
  Trophy,
  CheckCircle,
  Download,
  Phone,
  FileText,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const IndianNavy = () => {
  const highlights = [
    "Navy AA/SSR Training",
    "Swimming & Water Survival",
    "Technical Training Programs",
    "SSB Interview Preparation",
    "Written Test Coaching",
    "Physical Fitness Training",
  ];

  const trainingPrograms = [
    {
      title: "Navy AA (Artificer Apprentice)",
      description:
        "Technical training for artificer apprentice positions in Indian Navy.",
      icon: "⚓",
    },
    {
      title: "Navy SSR (Senior Secondary)",
      description:
        "Comprehensive preparation for Senior Secondary Recruit positions.",
      icon: "🚢",
    },
    {
      title: "Navy Physical Test",
      description:
        "Swimming and physical fitness training for navy recruitment.",
      icon: "🏊‍♂️",
    },
    {
      title: "Navy Technical Training",
      description:
        "Advanced technical knowledge and practical training for navy positions.",
      icon: "⚙️",
    },
  ];
  const navyImages = [
    "/images/navy3.webp", // ✅ replace with your actual images
    "/images/navy4.jpeg",
  ];
  const [navyBgIndex, setNavyBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNavyBgIndex((prev) => (prev + 1) % navyImages.length);
    }, 5000); // 5 sec slide

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
            src={navyImages[navyBgIndex]}
            alt="Navy Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-blue-800/80"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">⚓</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Indian Navy Training
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Specialized training for Indian Navy AA/SSR and technical
              positions
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Indian Navy Recruitment Training
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our Indian Navy training program offers comprehensive
                preparation for all navy recruitment positions including AA
                (Artificer Apprentice), SSR (Senior Secondary Recruit), and
                technical roles. With specialized coaching in swimming,
                technical knowledge, and interview skills.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Join our expert-led training programs designed by ex-navy
                personnel to ensure your success in joining the prestigious
                Indian Navy and serving the nation with honor.
              </p>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    95%
                  </div>
                  <p className="text-gray-700 font-semibold">Success Rate</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    300+
                  </div>
                  <p className="text-gray-700 font-semibold">
                    Selected Candidates
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Ff21d218e040d46c7840211752e0bd266?format=webp&width=800"
                alt="Elite Navy Formation"
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F1b346c3363614516a67586c4047be3ef?format=webp&width=800"
                alt="Navy Officers and Helicopter Training"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Navy Training Introduction
            </h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive navy training methodology
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/MbxhRScv0P4"
                title="Indian Navy Training Program"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Indian Navy Training Program
              </h3>
              <p className="text-gray-600">
                Complete overview of our navy recruitment training and
                preparation methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Navy Training Programs
            </h2>
            <p className="text-xl text-gray-600">
              Specialized preparation for navy recruitment positions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Navy Training Highlights
            </h2>
            <p className="text-xl text-blue-100">
              Excellence in naval training and preparation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center bg-blue-700 p-4 rounded-lg"
              >
                <CheckCircle className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0" />
                <span className="font-semibold">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Indian Navy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Embark on your naval career journey. Join our comprehensive navy
            training program today.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
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

export default IndianNavy;
