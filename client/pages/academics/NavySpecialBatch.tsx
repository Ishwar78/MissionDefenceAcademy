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

const NavySpecialBatch = () => {
  const [batchData, setBatchData] = useState<BatchData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const curriculumHighlights = [
    {
      title: "Aptitude Classes",
      description: "Naval aptitude training covering mathematics, physics, and technical reasoning.",
      icon: "🧠",
      schedule: "2 hours daily"
    },
    {
      title: "Physical Training",
      description: "Swimming, physical fitness, and endurance training as per Navy standards.",
      icon: "🏊‍♂️",
      schedule: "2 hours daily"
    },
    {
      title: "Weekly Mock Tests",
      description: "Regular mock tests for AA/SSR positions with detailed performance analysis.",
      icon: "📝",
      schedule: "Every Saturday"
    },
    {
      title: "SSB/GD/Interview Prep",
      description: "Services Selection Board preparation and group discussion training.",
      icon: "🗣️",
      schedule: "3 times/week"
    }
  ];

  const testimonials = [
    {
      name: "Arjun Patel",
      text: "Navy Special Batch gave me the perfect preparation for AA selection. The swimming training was exceptional.",
      position: "Selected in Navy AA",
      image: "👨‍⚓"
    },
    {
      name: "Priyanka Sharma",
      text: "The technical training and mock tests helped me clear Navy SSR in first attempt. Excellent coaching!",
      position: "Navy SSR Selected",
      image: "👩‍⚓"
    },
    {
      name: "Vikram Singh",
      text: "Best navy coaching in Haryana. The faculty's guidance and training methodology is outstanding.",
      position: "Navy Technical Selected",
      image: "👨‍⚓"
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
          // Find Navy Special Batch data
          const navyBatch = result.data.find((batch: BatchData) =>
            batch.id === 'navy-special-batch' ||
            batch.title.toLowerCase().includes('navy')
          );
          if (navyBatch) {
            setBatchData(navyBatch);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching batch data:', error);
    } finally {
      setIsLoading(false);
    }
  };
const navySpecialImages = [
  "/images/navy3.webp",  // ✅ Put correct image names inside public/images/
  "/images/navy4.jpeg"
];
const [navySpecialIndex, setNavySpecialIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setNavySpecialIndex((prev) => (prev + 1) % navySpecialImages.length);
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
      src={navySpecialImages[navySpecialIndex]}
      alt="Navy Special Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-blue-800/80"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="text-6xl mb-6">⚓</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Navy Special Batch
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        {batchData?.description || 'Specialized coaching for Indian Navy AA/SSR recruitment with technical and swimming training'}
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


      {/* Batch Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Navy Special Batch Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Navy Special Batch provides comprehensive training for Artificer Apprentice (AA) and 
              Senior Secondary Recruit (SSR) positions with specialized focus on technical skills and naval traditions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">{batchData?.schedule || '6 Months Intensive Training'}</p>
            </div>
            
            <div className="bg-teal-50 p-8 rounded-lg text-center">
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Batch Size</h3>
              <p className="text-gray-600">{batchData?.batchSize || 'Maximum 25 Students'}</p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Success Rate</h3>
              <p className="text-gray-600">{batchData?.successRate || '95% Selection Rate'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Batch Curriculum Highlights</h2>
            <p className="text-xl text-gray-600">Comprehensive training modules for Navy AA/SSR preparation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center mb-4">{item.description}</p>
                <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full text-center">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Navy Special Batch Training</h2>
            <p className="text-xl text-gray-600">Watch our comprehensive Navy training and swimming sessions</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={batchData?.videoLink || 'https://www.youtube.com/embed/MbxhRScv0P4'}
                title="Navy Special Batch Training"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Navy Special Batch - Naval Training Session</h3>
              <p className="text-gray-600">Complete overview of our Navy special batch training methodology and naval discipline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Navy Training Features */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Navy Training Specializations</h2>
            <p className="text-xl text-gray-600">Specialized training for naval excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🏊‍♂️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Swimming Training</h3>
              <p className="text-gray-600">Professional swimming training with water survival techniques</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Training</h3>
              <p className="text-gray-600">Advanced technical knowledge for AA and technical positions</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎖️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Naval Discipline</h3>
              <p className="text-gray-600">Naval traditions, discipline, and leadership development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">What our Navy Special Batch students say</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <div className="text-4xl mb-4 text-center">{testimonial.image}</div>
                <div className="flex mb-4 justify-center">
                  {[1,2,3,4,5].map((star) => (
                    <CheckCircle key={star} className="h-5 w-5 text-blue-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-center">"{testimonial.text}"</p>
                <div className="text-center">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-600">{testimonial.position}</p>
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
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          title="Apply Now"
        >
          <Phone className="h-6 w-6" />
        </Link>
        
        <button 
          className="bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Navy Special Batch Today!</h2>
          <p className="text-xl text-blue-100 mb-8">
            Limited seats available. Start your naval career journey with expert guidance and technical excellence.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
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

export default NavySpecialBatch;
