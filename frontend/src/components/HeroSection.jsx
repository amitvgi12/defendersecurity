import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Protect What Matters Most With Our Reliable Security Solutions",
      subtitle: "Secure Your Business Today",
      description: "Secure your peace of mind with our top-rated security and manpower services",
      image: "https://img1.wsimg.com/isteam/ip/95804eb6-e04e-4ff7-9bcd-f341308d975f/ChatGPT%20Image%20May%206%2C%202025%20at%2001_47_29%20PM.png/:/rs=h:1000,cg:true,m",
    },
    {
      title: "Professional Security Personnel for Every Need", 
      subtitle: "Trusted Security Services",
      description: "Comprehensive security solutions tailored to your business requirements",
      image: "https://img1.wsimg.com/isteam/ip/95804eb6-e04e-4ff7-9bcd-f341308d975f/ChatGPT%20Image%20May%206%2C%202025%20at%2001_47_29%20PM.png/:/rs=h:1000,cg:true,m",
    },
    {
      title: "Excellence in Security and Staffing Services",
      subtitle: "Your Reliable Partners",
      description: "Dedicated to providing exceptional security services to establishments nationwide", 
      image: "https://img1.wsimg.com/isteam/ip/95804eb6-e04e-4ff7-9bcd-f341308d975f/ChatGPT%20Image%20May%206%2C%202025%20at%2001_47_29%20PM.png/:/rs=h:1000,cg:true,m",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="w-full h-full bg-gray-50 relative flex items-center">
            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
                {/* Left Content */}
                <div className="space-y-6">
                  <p className="text-gray-600 uppercase tracking-wide text-sm font-medium">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      size="lg" 
                      className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      GET A FREE SECURITY ASSESSMENT
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                    >
                      LEARN MORE
                    </Button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                  <img
                    src={slide.image}
                    alt="Security Personnel"
                    className="w-full max-w-lg h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-600/20 hover:bg-teal-600/40 text-teal-800 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-600/20 hover:bg-teal-600/40 text-teal-800 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-teal-600" : "bg-teal-600/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;