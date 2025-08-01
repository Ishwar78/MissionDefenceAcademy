import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Trophy, CheckCircle, BookOpen, Phone, MessageCircle } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';

interface BatchData {
  id: string;
  title: string;
  description: string;
  videoLink: string;
  schedule: string;
  successRate: string;
  batchSize: string;
  published: boolean;
}

const AirForceSpecialBatch = () => {
  const [batchData, setBatchData] = useState<BatchData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const curriculumHighlights = [
    {
      title: "Aptitude Classes",
      description: "Advanced aptitude training covering technical reasoning and logical analysis.",
      icon: "🧠",
      schedule: "2 hours daily"
    },
    {
      title: "Physical Training",
      description: "Physical fitness training as per Air Force standards and requirements.",
      icon: "💪",
      schedule: "1.5 hours daily"
    },
    {
      title: "Weekly Mock Tests",
      description: "Regular mock tests for X & Y Group with detailed performance analysis.",
      icon: "📝",
      schedule: "Every Saturday"
    },
    {
      title: "SSB/GD/Interview Prep",
      description: "Comprehensive Services Selection Board preparation for officer positions.",
      icon: "🗣️",
      schedule: "3 times/week"
    }
  ];

  const testimonials = [
    {
      name: "Ankit Sharma",
      text: "Air Force Special Batch provided excellent technical training. The faculty's guidance helped me clear X Group selection.",
      position: "Selected in Air Force X Group",
      image: "👨‍✈️"
    },
    {
      name: "Priya Singh",
      text: "The aptitude training and mock tests were perfectly aligned with Air Force requirements. Highly recommended!",
      position: "Air Force Y Group Selected",
      image: "👩‍✈️"
    },
    {
      name: "Rohit Kumar",
      text: "Best coaching for Air Force preparation. The technical knowledge classes were outstanding.",
      position: "Air Force Technical Selected",
      image: "👨‍✈️"
    }
  ];

  // Fetch batch data on component mount
  useEffect(() => {
    fetchBatchData();
  }, []);

  const fetchBatchData = async () => {
    try {
      const response = await fetch('/api/batches');
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          // Find Air Force Special Batch data
          const airForceBatch = result.data.find((batch: BatchData) =>
            batch.id === 'air-force-special-batch' ||
            batch.title.toLowerCase().includes('air force')
          );
          if (airForceBatch) {
            setBatchData(airForceBatch);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching batch data:', error);
    } finally {
      setIsLoading(false);
    }
  };
const airforceSpecialImages = [
  "/images/airforce3.jpg",  // ✅ replace with your real image names
  "/images/airforce.jpg"
];
const [airforceSpecialIndex, setAirforceSpecialIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setAirforceSpecialIndex((prev) => (prev + 1) % airforceSpecialImages.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

    

      {/* Hero Section */}
  <section className="relative py-20 overflow-hidden text-white">
  {/* Background Slider */}
  <div className="absolute inset-0 z-0 transition-all duration-1000">
    <img
      src={airforceSpecialImages[airforceSpecialIndex]}
      alt="Air Force Special Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-sky-600/70 to-sky-800/80"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="text-6xl mb-6">✈️</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Air Force Special Batch
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Specialized coaching for Indian Air Force X & Y Group recruitment with technical excellence
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


      {/* Batch Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Air Force Special Batch Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Air Force Special Batch provides comprehensive training for both X Group (Technical) and 
              Y Group (Non-Technical) positions with expert faculty and advanced training methodologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-sky-50 p-8 rounded-lg text-center">
              <Clock className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">6 Months Intensive Training</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Batch Size</h3>
              <p className="text-gray-600">Maximum 25 Students</p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg text-center">
              <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Success Rate</h3>
              <p className="text-gray-600">92% Selection Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Batch Curriculum Highlights</h2>
            <p className="text-xl text-gray-600">Advanced training modules for Air Force X & Y Group preparation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center mb-4">{item.description}</p>
                <div className="bg-sky-100 text-sky-800 text-sm font-semibold px-3 py-1 rounded-full text-center">
                  {item.schedule}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Video */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Air Force Special Batch Training</h2>
            <p className="text-xl text-gray-600">Watch our comprehensive Air Force training methodology</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/WUCetso-Ah0"
                title="Air Force Special Batch Training"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Air Force Special Batch - Technical Training</h3>
              <p className="text-gray-600">Complete overview of our Air Force technical and aptitude training programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">What our Air Force Special Batch students say</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-center">{testimonial.image}</div>
                <div className="flex mb-4 justify-center">
                  {[1,2,3,4,5].map((star) => (
                    <CheckCircle key={star} className="h-5 w-5 text-sky-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-center">"{testimonial.text}"</p>
                <div className="text-center">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-sky-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Sidebar Actions */}
      <div className="fixed right-4 bottom-4 space-y-3 z-50">
        <Link 
          to="/contact" 
          className="bg-sky-600 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 transition-colors flex items-center justify-center"
          title="Apply Now"
        >
          <Phone className="h-6 w-6" />
        </Link>
        
        <button 
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          title="Get Free Demo"
        >
          <BookOpen className="h-6 w-6" />
        </button>
        
        <button 
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors flex items-center justify-center"
          title="Talk to Counsellor"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Air Force Special Batch Today!</h2>
          <p className="text-xl text-sky-100 mb-8">
            Limited seats available. Start your Air Force career journey with technical excellence and expert guidance.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Apply Now
            </Link>
            
           <Link 
                                    to="/contact" 
                                    className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                                  >
                                    <Phone className="h-5 w-5 mr-2" />
                                   Geet Free Demo
                                  </Link>
                      
                       <Link 
                                   to="/contact" 
                                   className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                                 >
                                   <Phone className="h-5 w-5 mr-2" />
                                  Talk to Counsellor
                                 </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AirForceSpecialBatch;
