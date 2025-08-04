import React, { useState, useEffect } from "react";

import { Send, Target, Heart, Phone, Mail, MapPin, Camera, Play, Award, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Query from ${formData.name} - ${formData.phone}`,
          message: formData.message
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your query! We will get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to send query. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const visionImages = [
  "/images/about.webp",  // ✅ images should be placed in public/images/
  "/images/army.jpg"
];
const [visionIndex, setVisionIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setVisionIndex((prev) => (prev + 1) % visionImages.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
    <section className="relative py-20 overflow-hidden">
  {/* Background Image Slider */}
  <div className="absolute inset-0 z-0 transition-all duration-1000">
    <img
      src={visionImages[visionIndex]}
      alt="Vision Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-white/0 backdrop-blur-sm"></div> {/* light overlay for dark text */}
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Our Vision & Mission
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
        Building future warriors with discipline and integrity
      </p>
    </div>
  </div>
</section>


      {/* Our Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <Target className="h-12 w-12 text-red-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-lg leading-relaxed text-gray-700 font-serif">
                The strategic method of teaching and training imparted to students, virtually developing their potentialities and intellect sagacity in a constructive manner of planned schedule, is our <strong>VISION</strong> to achieve a successful career competitively in all respects.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">500+</div>
                  <div className="text-sm text-gray-600">Success Stories</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Selection Rate</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-red-100 to-blue-100 p-8 rounded-lg">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence in Training</h3>
                  <p className="text-gray-600">Shaping future officers with strategic methods and disciplined approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center">
              <Heart className="h-12 w-12 text-red-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">⚔️</div>
              <h3 className="font-bold text-gray-900 mb-2">Character Building</h3>
              <p className="text-gray-600 text-sm">Developing intellectual character and moral values in every student</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Endurance Training</h3>
              <p className="text-gray-600 text-sm">Building constant endurance and perseverance for challenging situations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-900 mb-2">Success Achievement</h3>
              <p className="text-gray-600 text-sm">Strong determination for achieving goals with fidelity and planning</p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
              <p className="text-lg leading-relaxed text-gray-700 font-serif text-center italic">
                "The intellectual character and moral value of students are always kept high in this academy. Our <strong>Mission</strong> helps the students to meet the challenged ambience with constant endurance and perseverance to lay an incredible landmark on our concrete planning of fidelity. We would proceed forward with strong determination for achieving the goal of success and shall leave no stone behind at any turning of crucial confrontations."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Camera className="h-12 w-12 text-red-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Our Academy</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Glimpses of our state-of-the-art facilities, training programs, and proud moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Training Ground */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🏃‍♂️</div>
                  <p className="text-green-800 font-semibold">Physical Training Ground</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Training Facility</h3>
                <p className="text-gray-600 text-sm">Modern physical training ground equipped with all necessary equipment for army, navy, and air force preparation.</p>
              </div>
            </div>

            {/* Classroom */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📚</div>
                  <p className="text-blue-800 font-semibold">Smart Classrooms</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Academic Excellence</h3>
                <p className="text-gray-600 text-sm">Air-conditioned smart classrooms with modern teaching aids and technology for effective learning.</p>
              </div>
            </div>

            {/* Computer Lab */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">💻</div>
                  <p className="text-purple-800 font-semibold">Computer Laboratory</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Technical Training</h3>
                <p className="text-gray-600 text-sm">Advanced computer lab for technical training and online mock tests preparation.</p>
              </div>
            </div>

            {/* Library */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📖</div>
                  <p className="text-yellow-800 font-semibold">Reference Library</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Study Resources</h3>
                <p className="text-gray-600 text-sm">Comprehensive library with latest books, magazines, and study materials for defence exams.</p>
              </div>
            </div>

            {/* Hostel */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🏠</div>
                  <p className="text-orange-800 font-semibold">Hostel Facilities</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Accommodation</h3>
                <p className="text-gray-600 text-sm">Comfortable hostel accommodation with mess facility and 24/7 security for outstation students.</p>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🏆</div>
                  <p className="text-red-800 font-semibold">Achievement Wall</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">Success Stories</h3>
                <p className="text-gray-600 text-sm">Wall of fame showcasing our successful students who have joined Indian Armed Forces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Videos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Play className="h-12 w-12 text-red-600 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Training Videos</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our comprehensive training programs and success stories
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Video 1 - Army Training */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/bm9ohYLJG-I"
                  title="Army Special Batch Training"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Army Special Batch Training</h3>
                <p className="text-gray-600 mb-4">Complete overview of our army special batch training methodology and physical preparation.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Award className="h-4 w-4 mr-1" />
                  <span>Army Recruitment Training</span>
                </div>
              </div>
            </div>

            {/* Video 2 - Navy Training */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/MbxhRScv0P4"
                  title="Navy Special Batch Training"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Navy Special Batch Training</h3>
                <p className="text-gray-600 mb-4">Specialized naval training including swimming, technical skills, and discipline development.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Award className="h-4 w-4 mr-1" />
                  <span>Navy AA/SSR Training</span>
                </div>
              </div>
            </div>

            {/* Video 3 - Academy Introduction */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/QgxRilkKsS4"
                  title="Navy Special Batch Training"
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Test</h3>
                <p className="text-gray-600 mb-4">Virtual test of Mission Defence Academy showcasing our world-class facilities and training environment.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>Academy Overview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join Mission Defence Academy and transform your dreams into reality
          </p>
          <a 
            href="#query-form"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Join Now
          </a>
        </div>
      </section>

      {/* Query Form Section */}
      <section id="query-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Have any Query?</h2>
            <p className="text-xl text-gray-600">We're here to help you with any questions about our academy</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            {/* Status Message */}
            {submitStatus && (
              <div className={`p-4 rounded-lg mb-6 ${
                submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Query *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                  placeholder="Please describe your query in detail..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300">Visit us or contact us directly for immediate assistance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-lg">
              <Phone className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91 7700008052</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <Mail className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">Mdaclasses22@gmail.com</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <MapPin className="h-8 w-8 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">Tiranga Building, near Rajiv Gandhi Sports Stadium, Rohtak Haryana</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
