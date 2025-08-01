import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom';
import { Utensils, Clock, CheckCircle, Download, Phone, Heart, Leaf } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';

const MessFacility = () => {
  const highlights = [
    "Nutritious & Balanced Meals",
    "Hygienic Food Preparation",
    "Vegetarian & Non-Vegetarian Options", 
    "Fresh Ingredients Daily",
    "Special Diet Plans Available",
    "Clean Dining Environment",
    "Affordable Meal Plans",
    "24/7 Drinking Water"
  ];

  const messFeatures = [
    {
      title: "Nutritious Meals",
      description: "Specially designed meal plans to support physical training and mental development.",
      icon: "🥗"
    },
    {
      title: "Hygienic Kitchen",
      description: "State-of-the-art kitchen with strict hygiene standards and quality control.",
      icon: "🍳"
    },
    {
      title: "Variety Menu",
      description: "Daily changing menu with variety of North Indian, South Indian dishes.",
      icon: "🍽️"
    },
    {
      title: "Special Diets",
      description: "Customized diet plans for students with specific nutritional requirements.",
      icon: "🥙"
    }
  ];

  const mealPlans = [
    {
      time: "Breakfast",
      items: ["Paratha/Poha/Upma", "Milk/Coffee", "Seasonal Fruits", "Milk"],
      timing: "7:00 AM - 9:00 AM"
    },
    {
      time: "Lunch", 
      items: ["Rice/Roti", "Dal", "Sabzi", "Curd/Raita", "Pickle"],
      timing: "12:00 PM - 2:00 PM"
    },
    {
      time: "Evening Snacks",
      items: ["Samosa/Pakoda", "Tea/Coffee", "Biscuits"],
      timing: "5:00 PM - 6:00 PM"
    },
    {
      time: "Dinner",
      items: ["Roti/Rice", "Dal/Curry", "Sabzi", "Curd", "Sweet"],
      timing: "7:30 PM - 9:30 PM"
    }
  ];
const messImages = [
  "/images/mess.jpeg",  // ✅ Replace with actual image filenames in public/images/
  "/images/mess.jpeg"
];
const [messBgIndex, setMessBgIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setMessBgIndex((prev) => (prev + 1) % messImages.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
     
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-white">
  {/* Background Slider */}
  <div className="absolute inset-0 z-0 transition-all duration-1000">
    <img
      src={messImages[messBgIndex]}
      alt="Mess Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/70 to-orange-800/80"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="text-6xl mb-6">🍽️</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Mess Facility
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Nutritious and hygienic mess facility providing balanced meals for students
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
        <Link 
          to="/contact" 
          className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Join Mess
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Premium Mess Facility</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mess facility is designed to provide nutritious, hygienic, and delicious meals to support 
                students during their intensive defence training. We understand the importance of proper nutrition 
                for physical training and mental development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With experienced chefs, quality ingredients, and strict hygiene standards, we ensure every meal 
                contributes to students' health and energy levels required for defence preparation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our menu is carefully planned by nutritionists to provide balanced meals that cater to the 
                dietary needs of defence aspirants, with special focus on protein, vitamins, and energy requirements.
              </p>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                  <p className="text-gray-700 font-semibold">Meals Per Day</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-gray-700 font-semibold">Hygienic</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="/images/mess.jpeg"
                alt="Mess Dining Hall"
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center"
                alt="Kitchen Facility"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mess Facility Tour</h2>
            <p className="text-xl text-gray-600">Take a look at our hygienic kitchen and dining facilities</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/kxafCr2c8Ko"
                title="Mess Facility Tour"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mission Defence Academy Mess Facility</h3>
              <p className="text-gray-600">Complete overview of our mess facility, kitchen, and meal preparation process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Daily Meal Schedule</h2>
            <p className="text-xl text-gray-600">Nutritious meals served at the right time</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mealPlans.map((meal, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-gray-900">{meal.time}</h3>
                  <p className="text-sm text-orange-600 font-semibold">{meal.timing}</p>
                </div>
                <ul className="space-y-2">
                  {meal.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mess Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mess Features</h2>
            <p className="text-xl text-gray-600">Quality food service with modern facilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {messFeatures.map((feature, index) => (
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
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Mess Highlights</h2>
            <p className="text-xl text-orange-100">Quality nutrition for defence aspirants</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center bg-orange-700 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-orange-300 mr-3 flex-shrink-0" />
                <span className="font-semibold text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mess Plans</h2>
            <p className="text-xl text-gray-600">Affordable meal plans for students</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Plan</h3>
              <div className="text-3xl font-bold text-orange-600 mb-4">₹3,500 <span className="text-lg text-gray-500 font-normal">/ month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>4 Meals Per Day</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Vegetarian & Non-Veg Options</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Daily Menu Variety</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Unlimited Drinking Water</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center block"
              >
                Join Plan
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-orange-500">
              <div className="bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Recommended
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Plan</h3>
              <div className="text-3xl font-bold text-orange-600 mb-4">₹4,500 <span className="text-lg text-gray-500 font-normal">/ month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>4 Meals + Evening Snacks</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Special Diet Plans Available</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Premium Quality Ingredients</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Nutritionist Consultation</span>
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center block"
              >
                Join Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mess Facility?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience nutritious and delicious meals that fuel your defence preparation journey.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              to="/contact" 
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Join Mess
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <Utensils className="h-5 w-5 mr-2" />
              Visit Facility
            </Link>
            
           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MessFacility;
