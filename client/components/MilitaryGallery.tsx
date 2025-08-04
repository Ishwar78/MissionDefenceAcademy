import React from "react";
import { Link } from "react-router-dom";

const MilitaryGallery = () => {
  const militaryImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fe3e174ee138d4caabff1d626ff0cd20f?format=webp&width=800",
      alt: "Army Formation",
      title: "Army Excellence",
      description:
        "Elite army personnel in formation, showcasing discipline and precision",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Ff21d218e040d46c7840211752e0bd266?format=webp&width=800",
      alt: "Navy Personnel",
      title: "Naval Pride",
      description:
        "Indian Navy officers displaying maritime excellence and honor",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F0d049290581e4af69b2cfd3db4e1dd43?format=webp&width=800",
      alt: "Army Operations",
      title: "Combat Readiness",
      description:
        "Military operations showcasing tactical expertise and bravery",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fdd13b770fbd247e5980314555045b3d0?format=webp&width=800",
      alt: "Soldier Training",
      title: "Elite Training",
      description: "Professional soldier training demonstrating combat skills",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F36e4fdd0037d44b1bf1a5d4a63c4167b?format=webp&width=800",
      alt: "Air Force Team",
      title: "Air Force Excellence",
      description: "Elite Air Force pilots showcasing aviation excellence",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fb2834ced93b444a59b54a962eeb1fd95?format=webp&width=800",
      alt: "Military Parade",
      title: "National Pride",
      description: "Military parade displaying strength and patriotism",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Excellence in <span className="text-red-600">Defence Training</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Witness the strength, discipline, and honor of our nation's finest.
            These images represent the pinnacle of military excellence that we
            strive to instill in every cadet.
          </p>
        </div>

        {/* Military Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {militaryImages.map((image, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Serve the Nation?
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join Mission Defence Academy and transform yourself into a
            disciplined, capable defence officer. Your journey to excellence
            starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Journey
            </Link>
            <Link
              to="/gallery"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors"
            >
              View Complete Gallery
            </Link>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <p className="text-gray-700 font-semibold">Success Rate</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-700 font-semibold">Selected Candidates</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
            <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
            <p className="text-gray-700 font-semibold">Years Experience</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <p className="text-gray-700 font-semibold">Training Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilitaryGallery;
