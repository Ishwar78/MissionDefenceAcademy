import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ 
  title, 
  description = "This page is under construction. Please check back soon for updates." 
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Construction className="h-24 w-24 text-gray-400 mx-auto mb-8" />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            
            <Link 
              to="/contact" 
              className="inline-block bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              If you're looking for specific information about our courses, admissions, or facilities, 
              please don't hesitate to contact us. Our team is ready to assist you.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <p className="text-gray-500">Call us at</p>
                <p className="font-semibold text-gray-900">+91 7700008052</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Email us at</p>
                <p className="font-semibold text-gray-900">Missiondefenceacademy22@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlaceholderPage;
