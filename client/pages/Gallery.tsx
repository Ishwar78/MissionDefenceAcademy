import React, { useState, useEffect } from 'react';
import { X, Filter, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  caption: string;
  type: 'image' | 'video';
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Real Academy Gallery Items
  const galleryItems: GalleryItem[] = [
    // Stadium and Physical Training
  
    {
      id: 2,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F15184fad31134682ab078bb05a13e831?format=webp&width=800',
      alt: 'Group Training Session',
      category: 'Army',
      caption: 'Group Training Session - Physical Fitness',
      type: 'image'
    },
    {
      id: 3,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F2e4a4fea79d940f0bc8884f11f436ce0?format=webp&width=800',
      alt: 'Track Training',
      category: 'Army',
      caption: 'Track Training - Speed and Endurance',
      type: 'image'
    },
    {
      id: 4,
      src: 'https://cdn.builder.io/o/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F5aba4a6ac11f42e3b2bbb5069615097d?alt=media&token=608856c7-8690-4381-844a-afc32d5e1f2e&apiKey=e9a77209c0ab4c10a9cc4ef22c9de513',
      alt: 'Running Practice Video',
      category: 'Army',
      caption: 'Running Practice Session - Stadium Training',
      type: 'video'
    },
    {
      id: 5,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fd98551f2ac254a478b9bb12650f212d7?format=webp&width=800',
      alt: 'Push-up Training',
      category: 'Army',
      caption: 'Push-up Training - Strength Building Exercise',
      type: 'image'
    },
    {
      id: 6,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fe0f01af6a39743faa8c9359f7f2bed7e?format=webp&width=800',
      alt: 'Group Photo Training',
      category: 'Activities',
      caption: 'Training Group - Selected Candidates',
      type: 'image'
    },
    {
      id: 7,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Ffd013105bdd844dd82d82ff4c7589fa5?format=webp&width=800',
      alt: 'Combat Training',
      category: 'Army',
      caption: 'Combat Training - Defence Academy',
      type: 'image'
    },
    {
      id: 8,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F5e488191bb8849de8c4297dc29f969dc?format=webp&width=800',
      alt: 'Classroom Session',
      category: 'Classroom',
      caption: 'Written Test Preparation - Expert Faculty',
      type: 'image'
    },
    {
      id: 9,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F5aa27dfa2897498f8cd5572b15f0d6ba?format=webp&width=800',
      alt: 'Study Hall',
      category: 'Classroom',
      caption: 'Study Hall - Focused Learning Environment',
      type: 'image'
    },
    {
      id: 10,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fcecda4ef2d274cc0950755a800ec9551?format=webp&width=800',
      alt: 'Ground Training',
      category: 'Army',
      caption: 'Ground Training Exercise - Team Formation',
      type: 'image'
    },
    {
      id: 11,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F325b695a209c4f1e9a33948926a5da1a?format=webp&width=800',
      alt: 'Director Profile',
      category: 'Activities',
      caption: 'Coach Sandeep Pannu - Ex-Army APTC PTI',
      type: 'image'
    },
    // {
    //   id: 12,
    //   src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F511eea143e914efb87c625f9c7f5c9e8?format=webp&width=800',
    //   alt: 'Academy Building',
    //   category: 'Activities',
    //   caption: 'Mission Defence Academy - Main Building',
    //   type: 'image'
    // },
    {
      id: 13,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Faea6ac7eae724a5f8e408f26f04083c0?format=webp&width=800',
      alt: 'Outdoor Training',
      category: 'Activities',
      caption: 'Outdoor Training Session - Team Activity',
      type: 'image'
    },
    {
      id: 14,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F6d3956599f66486abcd41e2be9b767e0?format=webp&width=800',
      alt: 'Running Training',
      category: 'Army',
      caption: 'Running Training - Coach Guided Session',
      type: 'image'
    },
    {
      id: 15,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fb7eb480f5b764ea780efd1d85d26339c?format=webp&width=800',
      alt: 'Achievement Training',
      category: 'Activities',
      caption: 'Achievement Recognition - Training Completion',
      type: 'image'
    },
    // New Hostel Images
    {
      id: 16,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fc95d9d218c0746c09edf996926a649d7?format=webp&width=800',
      alt: 'Modern Hostel Room',
      category: 'Hostel',
      caption: 'Modern Hostel Room - Comfortable Living',
      type: 'image'
    },
    {
      id: 17,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F3bbe9898605f45f3ab201f4cb71452ee?format=webp&width=800',
      alt: 'Hostel Study Room',
      category: 'Hostel',
      caption: 'Student Study Area - Hostel Facilities',
      type: 'image'
    },
    {
      id: 18,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F99213aba7d8241048ee48d66734b91c9?format=webp&width=800',
      alt: 'Hostel Dormitory',
      category: 'Hostel',
      caption: 'Hostel Dormitory - Shared Accommodation',
      type: 'image'
    },
    {
      id: 19,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F057c9be3e71d47afae3ef30a60b92182?format=webp&width=800',
      alt: 'Spacious Hostel Room',
      category: 'Hostel',
      caption: 'Spacious Hostel Room - Premium Facilities',
      type: 'image'
    },
    // Navy Training Images
    {
      id: 20,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F1c0639ce3851477884952105b2ed7bd3?format=webp&width=800',
      alt: 'Navy Parade Formation',
      category: 'Navy',
      caption: 'Navy Parade Formation - Discipline Training',
      type: 'image'
    },
    {
      id: 21,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fea96d889f36c4aaab8b2c7ac00c3d326?format=webp&width=800',
      alt: 'Navy Officers Training',
      category: 'Navy',
      caption: 'Navy Officers Training - White Uniform Drill',
      type: 'image'
    },
    {
      id: 22,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F3c540e03b3e24548a3400f031c02701b?format=webp&width=800',
      alt: 'Navy SSB Interview',
      category: 'Navy',
      caption: 'Navy SSB Interview Preparation - Officer Training',
      type: 'image'
    },
    {
      id: 23,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F38a90aa4b75e4cd88c42d5dd97e75296?format=webp&width=800',
      alt: 'Navy Formation Drill',
      category: 'Navy',
      caption: 'Navy Formation Drill - Group Training',
      type: 'image'
    },
    {
      id: 24,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2Fb35dff623ef547babc252b619ab4462e?format=webp&width=800',
      alt: 'Navy Leadership Training',
      category: 'Navy',
      caption: 'Navy Leadership Training - Officer Development',
      type: 'image'
    },
    {
      id: 25,
      src: 'https://cdn.builder.io/api/v1/image/assets%2Fe9a77209c0ab4c10a9cc4ef22c9de513%2F2f2072a3788c41dfbab2783d3a6f4c1e?format=webp&width=800',
      alt: 'Navy Officer Portrait',
      category: 'Navy',
      caption: 'Navy Officer - Professional Development',
      type: 'image'
    },
    // YouTube Training Videos
    {
      id: 26,
      src: 'https://www.youtube.com/embed/bm9ohYLJG-I',
      alt: 'Army Physical Training Video',
      category: 'Army',
      caption: 'Army Physical Training Session - Live Practice',
      type: 'video'
    },
    {
      id: 27,
      src: 'https://www.youtube.com/embed/MbxhRScv0P4',
      alt: 'Running Practice Video',
      category: 'Army',
      caption: 'Running Practice Session - Stadium Training',
      type: 'video'
    },
    {
      id: 28,
      src: 'https://www.youtube.com/embed/WUCetso-Ah0',
      alt: 'Group Training Video',
      category: 'Activities',
      caption: 'Group Training Drill - Team Coordination',
      type: 'video'
    },
    {
      id: 29,
      src: 'https://www.youtube.com/embed/Xw9QCDhTczM',
      alt: 'Endurance Test Video',
      category: 'Army',
      caption: 'Physical Endurance Test - Fitness Assessment',
      type: 'video'
    },
    {
      id: 30,
      src: 'https://www.youtube.com/embed/kxafCr2c8Ko',
      alt: 'Combat Training Video',
      category: 'Army',
      caption: 'Combat Training Practice - Advanced Techniques',
      type: 'video'
    }
  ];

  const categories = ['All', 'Army', 'Navy', 'Airforce', 'Hostel', 'Classroom', 'Activities'];

  // Filter items based on selected category
  useEffect(() => {
    const filtered = selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory);
    setFilteredItems(filtered);
  }, [selectedCategory]);

  // Load images with animation delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  const navigateItem = (direction: 'prev' | 'next') => {
    if (!selectedItem) return;

    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedItem(filteredItems[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedItem) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateItem('prev');
      } else if (e.key === 'ArrowRight') {
        navigateItem('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedItem, filteredItems]);
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


      {/* Gallery Title Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Glimpses from our training, hostel, and campus life
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="inline-block w-4 h-4 mr-1" />
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`break-inside-avoid group cursor-pointer transform transition-all duration-500 ${
                  imagesLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 100}ms`
                }}
                onClick={() => openLightbox(item)}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="relative overflow-hidden">
                    {item.type === 'video' ? (
                      <div className="relative">
                        {item.src.includes('youtube.com') || item.src.includes('embed') ? (
                          <div className="aspect-video">
                            <iframe
                              src={item.src}
                              title={item.alt}
                              className="w-full h-full"
                              frameBorder="0"
                              allowFullScreen
                            ></iframe>
                          </div>
                        ) : (
                          <>
                            <video
                              src={item.src}
                              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                              muted
                              loop
                              preload="metadata"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black bg-opacity-60 rounded-full p-3">
                                <PlayCircle className="h-8 w-8 text-white" />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                      <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm font-medium">{item.caption}</p>
                        {item.type === 'video' && (
                          <p className="text-xs text-gray-300 mt-1">🎥 Video</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateItem('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={() => navigateItem('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Media Content */}
          <div className="max-w-4xl max-h-full p-4">
            {selectedItem.type === 'video' ? (
              selectedItem.src.includes('youtube.com') || selectedItem.src.includes('embed') ? (
                <div className="w-full max-w-4xl aspect-video">
                  <iframe
                    src={selectedItem.src}
                    title={selectedItem.alt}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full object-contain"
                  style={{ maxHeight: '80vh' }}
                />
              )
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="max-w-full max-h-full object-contain"
              />
            )}

            {/* Caption */}
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{selectedItem.caption}</p>
              <p className="text-gray-300 text-sm mt-1">
                {selectedItem.category} {selectedItem.type === 'video' && '🎥 Video'}
              </p>
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
          ></div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
