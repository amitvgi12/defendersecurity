import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { businessLines } from "../data/mockData";
import { ArrowRight, Shield, Users, Settings } from "lucide-react";

const BusinessLines = () => {
  const getIcon = (index) => {
    const icons = [Shield, Users, Settings];
    const IconComponent = icons[index];
    return <IconComponent className="w-12 h-12 text-red-600 mb-4" />;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Business Lines
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We are the Market Leader in each of our verticals – Security Solutions, Manpower Services and Facility Management by providing Essential Solutions with Trust, People Focus and Service Spirit.
          </p>
        </div>

        {/* Business Lines Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {businessLines.map((line, index) => (
            <Card 
              key={line.id} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={line.image}
                  alt={line.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-8">
                {getIcon(index)}
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {line.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {line.description}
                </p>

                {/* Services List */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {line.services.slice(0, 3).map((service, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300"
                >
                  Know More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Custom Security Solutions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experts are ready to design a comprehensive security plan tailored to your specific requirements.
            </p>
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLines;