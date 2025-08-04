import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Star, Users, Trophy, CheckCircle, Phone, Mail, MapPin, PlayCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MilitaryGallery from '../components/MilitaryGallery';

const Index = () => {
  const courses = [
    {
      title: "Army Physical Test",
      description: "Comprehensive physical training for Army recruitment with expert guidance and proven methods.",
      image: "🏃‍♂️"
    },
    {
      title: "Army Medical Test", 
      description: "Medical examination preparation with detailed guidance on fitness standards and requirements.",
      image: "🏥"
    },
    {
      title: "Army Written Test",
      description: "Complete written test preparation covering all subjects with practice tests and study materials.",
      image: "📝"
    },
    {
      title: "NDA",
      description: "National Defence Academy preparation with comprehensive training for future officers.",
      image: "🎖️"
    },
    {
      title: "Navy AA/SSR",
      description: "Indian Navy Artificer Apprentice and Senior Secondary Recruit training programs.",
      image: "⚓"
    },
    {
      title: "Air Force X & Y Group",
      description: "Air Force technical and non-technical group preparation with specialized coaching.",
      image: "✈️"
    },
    {
      title: "Soldier/General Duty (GD)",
      description: "General Duty soldier recruitment preparation with physical and written test training.",
      image: "👮‍♂️"
    },
    {
      title: "Army Clerk",
      description: "Army clerk position preparation with typing, computer skills, and written test training.",
      image: "💻"
    },
    {
      title: "Army Soldier Technical",
      description: "Technical soldier positions preparation with specialized technical knowledge and skills.",
      image: "🔧"
    }
  ];

  const facilities = [
    "24x7 Electricity & Water Supply",
    "AC Rooms with WiFi",
    "Mess Facility",
    "Rajiv Gandhi Sports Complex Training",
    "Medical Tests",
    "Document Verification by Ex-Army Clerk",
    "Reading Room",
    "In-house Mentor",
    "Hot Water Supply",
    "Indoor Games"
  ];

  const coreStrengths = [
    "10+ Years of Expert Faculty",
    "Physical & Written Test Preparation",
    "Personalized Guidance",
    "100% Pass Rate Track Record",
    "Ex-Army Trainers",
    "Modern Training Facilities"
  ];

  const selectedCandidates = [
    "Jatin Kumar", "Sudheer Singh", "Parteek Sharma", "Rohit Mehra", 
    "Aman Gupta", "Vikash Kumar", "Sanjay Yadav", "Ravi Prakash",
    "Deepak Singh", "Ajay Kumar", "Mohit Sharma", "Rahul Verma"
  ];

  const testimonials = [
    {
      name: "Jatin Kumar",
      text: "Mission Defence Academy changed my life. The training was exceptional and I cleared my Army physical test on the first attempt.",
      position: "Selected in Indian Army"
    },
    {
      name: "Sudheer Singh", 
      text: "The faculty here is amazing. Coach Sandeep sir's guidance helped me achieve my dream of joining the Navy.",
      position: "Selected in Indian Navy"
    },
    {
      name: "Parteek Sharma",
      text: "Best academy in Haryana. The facilities and training methods are world-class. Highly recommended!",
      position: "Selected in Air Force"
    }
  ];

  const popularCourses = [
    { title: "NDA", icon: "🎖️" },
    { title: "Navy SSR/AA", icon: "⚓" },
    { title: "Army GD", icon: "👮‍♂️" },
    { title: "Airforce X/Y", icon: "✈️" },
    { title: "Clerk", icon: "💻" },
    { title: "Technical", icon: "🔧" }
  ];

  const activities = [
    { title: "Athletics", icon: "🏃‍♂️" },
    { title: "In-house Publications", icon: "📚" },
    { title: "Performing Arts & Music", icon: "🎭" }
  ];
const images = ["/images/nda-motto.jpg", "/images/img1.webp", "images/img2.webp"];
const [currentImage, setCurrentImage] = useState(0);


useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
 <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <img
      src={images[currentImage]}
      alt="Hero Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40"></div> {/* overlay */}
  </div>

  {/* Foreground content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      Mission Defence Academy
    </h1>
    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
      Making Future Officers
    </p>
    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
      <Link
        to="/contact"
        className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
      >
        Contact Us for Admission
      </Link>
    </div>
  </div>
</section>



      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Vision & Mission</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Strategic teaching approach for competitive success, building future officers with excellence and dedication to serve the nation with honor and integrity.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Character building, endurance development, and fostering the spirit of national service among our students to create disciplined and capable defence personnel.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/contact" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg">
                <img
                  src="/images/coachimage.jpg"
                  alt="Coach Sandeep Pannu"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-6">Coach Sandeep Pannu</h3>
              <p className="text-red-600 font-semibold">Ex-Army, APTC - PTI</p>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Director's Message</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Welcome to Mission Defence Academy, where we transform dreams into reality. With over a decade of experience in training defence aspirants, our academy stands as a beacon of excellence in military training.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our dedicated faculty, state-of-the-art facilities, and proven training methodologies ensure that every student receives personalized attention and guidance. We take pride in our 100% success rate and the achievements of our students who are now serving the nation with pride.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Mission Defence Academy, we don't just prepare you for tests; we prepare you for life as a defence officer. Join us and be part of our legacy of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600">Comprehensive training programs for all defence services</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              // Map course titles to service routes
              const getServiceRoute = (title: string) => {
                if (title.includes('Army')) return '/services/indian-army';
                if (title.includes('Navy')) return '/services/indian-navy';
                if (title.includes('Air Force')) return '/services/indian-air-force';
                if (title.includes('NDA')) return '/services/nda';
                return '/contact'; // Default fallback
              };

              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{course.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                  <Link
                    to={getServiceRoute(course.title)}
                    className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Know More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hostel & Facility Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hostel & Facilities</h2>
            <p className="text-xl text-gray-600">World-class facilities for comprehensive training</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg border border-gray-200">
                <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                <span className="text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strength Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Strengths</h2>
            <p className="text-xl text-red-100">What makes us the best choice for defence preparation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreStrengths.map((strength, index) => (
              <div key={index} className="flex items-center bg-red-700 p-4 rounded-lg">
                <Star className="h-6 w-6 text-yellow-400 mr-3" />
                <span className="font-semibold">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Track Record</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Army Physical Test Pass Rate</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Army Written Test Pass Rate</p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <p className="text-gray-700 font-semibold">Total Selected Candidates</p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
              <p className="text-gray-700 font-semibold">Passout Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Candidates Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Selected Candidates</h2>
            <p className="text-xl text-gray-600">Our proud achievers serving the nation</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedCandidates.map((candidate, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center border border-gray-200">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  👨‍💼
                </div>
                <h3 className="font-bold text-gray-900">{candidate}</h3>
                <p className="text-sm text-green-600 font-semibold">Selected</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stadium Activity Videos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stadium Activity Videos</h2>
            <p className="text-xl text-gray-600">Watch our training sessions and activities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/bm9ohYLJG-I"
                  title="Stadium Training Session 1"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Army Physical Training</h3>
                <p className="text-sm text-gray-600 mt-1">Mission Defence Academy Training</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/hloVTiUZUYA"
                  title="Stadium Training Session 2"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Running Practice Session</h3>
                <p className="text-sm text-gray-600 mt-1">Stadium Training Activities</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/WUCetso-Ah0"
                  title="Stadium Training Session 3"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Group Training Drill</h3>
                <p className="text-sm text-gray-600 mt-1">Team Coordination Training</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/Xw9QCDhTczM"
                  title="Stadium Training Session 4"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Physical Endurance Test</h3>
                <p className="text-sm text-gray-600 mt-1">Fitness Assessment</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/kxafCr2c8Ko"
                  title="Stadium Training Session 5"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Combat Training Practice</h3>
                <p className="text-sm text-gray-600 mt-1">Advanced Training Techniques</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/Q2Ms0RBwKng"
                  title="Stadium Training Session 6"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Academy Highlights</h3>
                <p className="text-sm text-gray-600 mt-1">Mission Defence Academy Overview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Image Gallery</h2>
            <p className="text-xl text-gray-600">Glimpses of our academy and training facilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F2e4a4fea79d940f0bc8884f11f436ce0?format=webp&width=800"
                alt="Rajiv Gandhi Stadium"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-gray-900">Rajiv Gandhi Stadium - Main Training Ground</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F15184fad31134682ab078bb05a13e831?format=webp&width=800"
                alt="Group Training"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-gray-900">Group Training Session - Physical Fitness</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fc95d9d218c0746c09edf996926a649d7?format=webp&width=800"
                alt="Hostel Facilities"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-gray-900">Modern Hostel Facilities - Comfortable Living</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F5e488191bb8849de8c4297dc29f969dc?format=webp&width=800"
                alt="Classroom Training"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-gray-900">Classroom Training - Expert Faculty</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F1c0639ce3851477884952105b2ed7bd3?format=webp&width=800"
                alt="Navy Training"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-gray-900">Navy Training - Parade Formation</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fe0f01af6a39743faa8c9359f7f2bed7e?format=webp&width=800"
                alt="Students Group"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <p className="text-sm font-medium text-gray-900">Training Group - Future Officers</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View Complete Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-green-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Courses</h2>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularCourses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-3">{course.icon}</div>
                <h3 className="font-bold text-gray-900">{course.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Co-curricular Activities</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="text-6xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Wish to know more about admissions and updates?</h2>
          <p className="text-xl text-red-100 mb-8">Subscribe to our newsletter for latest updates and information</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Index;
