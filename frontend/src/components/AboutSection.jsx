import React from "react";
import { Button } from "./ui/button";
import { companyInfo } from "../data/mockData";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                <span className="text-red-600">Defender Security Services</span> provides Security and Manpower Solutions, which are essential to the functioning of a vibrant and healthy economy.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have emerged as a trusted leader across these business segments in Uttarakhand and other regions. Our deep market insights enable us to leverage growth opportunities while helping our brand emerge as a trusted leader.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                With an unremitting spirit of innovation coupled with a dynamic and multifaceted portfolio of solutions, we strive to offer people enduring value. Our experience of more than 10 years enables us to understand and cater to the varied demands of the markets we serve.
              </p>
              <p className="text-gray-700">
                A market leader in essential service verticals, we have steadily increased our offerings and reach, catering to corporate clients, government agencies, and private establishments across Uttarakhand.
              </p>
            </div>

            <Button 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Want to Know More
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Security Services"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 border-l-4 border-red-600">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">200+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;