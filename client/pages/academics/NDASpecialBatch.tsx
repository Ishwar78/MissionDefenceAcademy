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

const NDASpecialBatch = () => {
  const [batchData, setBatchData] = useState<BatchData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const curriculumHighlights = [
    {
      title: "Aptitude Classes",
      description: "Comprehensive aptitude training for NDA written examination preparation.",
      icon: "🧠",
      schedule: "3 hours daily"
    },
    {
      title: "Physical Training",
      description: "Complete physical fitness training to meet NDA physical standards.",
      icon: "💪",
      schedule: "2 hours daily"
    },
    {
      title: "Weekly Mock Tests",
      description: "Regular NDA written test simulation with detailed performance analysis.",
      icon: "📝",
      schedule: "Twice a week"
    },
    {
      title: "SSB/GD/Interview Prep",
      description: "Intensive Services Selection Board and personality development training.",
      icon: "🗣️",
      schedule: "Daily sessions"
    }
  ];

  const testimonials = [
    {
      name: "Aditya Kumar",
      text: "NDA Special Batch transformed my preparation. The SSB training and personality development was exceptional.",
      position: "Selected in NDA",
      image: "👨‍🎓"
    },
    {
      name: "Sneha Patel",
      text: "The comprehensive training helped me clear NDA written exam in first attempt. Best coaching for NDA!",
      position: "NDA Selected - Air Force",
      image: "👩‍🎓"
    },
    {
      name: "Rahul Verma",
      text: "Excellent faculty and training methodology. The mock tests and interview preparation was outstanding.",
      position: "NDA Selected - Navy",
      image: "👨‍🎓"
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
          // Find NDA Special Batch data
          const ndaBatch = result.data.find((batch: BatchData) =>
            batch.id === 'nda-special-batch' ||
            batch.title.toLowerCase().includes('nda')
          );
          if (ndaBatch) {
            setBatchData(ndaBatch);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching batch data:', error);
    } finally {
      setIsLoading(false);
    }
  };
const ndaSpecialImages = [
  "/images/NDA1.jpeg",  // ✅ Place these inside public/images/
  "/images/NDA3.jpg"
];
const [ndaSpecialIndex, setNdaSpecialIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setNdaSpecialIndex((prev) => (prev + 1) % ndaSpecialImages.length);
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
      src={ndaSpecialImages[ndaSpecialIndex]}
      alt="NDA Special Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-red-600/70 to-red-800/80"></div>
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <div className="text-6xl mb-6">🎖️</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        NDA Special Batch
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Elite training program for National Defence Academy aspirants with comprehensive curriculum
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


      {/* Batch Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NDA Special Batch Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our NDA Special Batch is designed to create future officers of the Indian Armed Forces through 
              comprehensive training, personality development, and leadership skills enhancement.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-lg text-center">
              <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">8 Months Intensive Training</p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg text-center">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Batch Size</h3>
              <p className="text-gray-600">Maximum 20 Students</p>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-lg text-center">
              <Trophy className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Success Rate</h3>
              <p className="text-gray-600">88% Selection Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Batch Curriculum Highlights</h2>
            <p className="text-xl text-gray-600">Comprehensive training modules for NDA examination and SSB preparation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center mb-4">{item.description}</p>
                <div className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full text-center">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NDA Special Batch Training</h2>
            <p className="text-xl text-gray-600">Watch our comprehensive NDA training and officer development program</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/Xw9QCDhTczM"
                title="NDA Special Batch Training"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">NDA Special Batch - Officer Development Program</h3>
              <p className="text-gray-600">Complete overview of our NDA training methodology and leadership development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NDA Training Specializations */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NDA Training Specializations</h2>
            <p className="text-xl text-gray-600">Elite training for future officers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Excellence</h3>
              <p className="text-gray-600">Mathematics, English, Physics, Chemistry, and General Knowledge</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personality Development</h3>
              <p className="text-gray-600">Leadership skills, communication, and officer-like qualities</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SSB Preparation</h3>
              <p className="text-gray-600">Complete SSB training with psychological tests and interviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">What our NDA Special Batch students say</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-red-50 p-6 rounded-lg">
                <div className="text-4xl mb-4 text-center">{testimonial.image}</div>
                <div className="flex mb-4 justify-center">
                  {[1,2,3,4,5].map((star) => (
                    <CheckCircle key={star} className="h-5 w-5 text-red-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-center">"{testimonial.text}"</p>
                <div className="text-center">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-red-600">{testimonial.position}</p>
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
          className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center"
          title="Apply Now"
        >
          <Phone className="h-6 w-6" />
        </Link>
        
        <button 
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors flex items-center justify-center"
          title="Get Free Demo"
        >
          <BookOpen className="h-6 w-6" />
        </button>
        
        <button 
          className="bg-yellow-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-700 transition-colors flex items-center justify-center"
          title="Talk to Counsellor"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join NDA Special Batch Today!</h2>
          <p className="text-xl text-red-100 mb-8">
            Limited seats available. Begin your journey to become an officer in the Indian Armed Forces.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
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

export default NDASpecialBatch;
