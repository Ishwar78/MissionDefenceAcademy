import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;

  primaryButtonLink?: string;
  backgroundClass?: string;
  icon?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Mission Defence Academy",
  subtitle = "Making Future Officers",
  primaryButtonText = "Contact Us for Admission",

  primaryButtonLink = "/contact",
  backgroundClass = "bg-gradient-to-r from-red-50 to-blue-50",
  icon
}) => {
  return (
    <section className={`${backgroundClass} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {icon && (
          <div className="text-6xl mb-6">{icon}</div>
        )}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link 
            to={primaryButtonLink} 
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            {primaryButtonText}
          </Link>
          {/* <button className="inline-block bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
            {secondaryButtonText}
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
