import React from "react";
import { Card, CardContent } from "../components/ui/card";
import Footer from "../components/Footer";
import { companyInfo } from "../data/mockData";
import { Shield, Users, Award, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Security",
      description: "Over 10 years of providing reliable security solutions to businesses and individuals across Uttarakhand."
    },
    {
      icon: Users,
      title: "Skilled Team",
      description: "Our highly trained professionals ensure the highest standards of security and customer service."
    },
    {
      icon: Award,
      title: "Excellence Award",
      description: "Recognized for outstanding service quality and customer satisfaction in the security industry."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support services to ensure your safety and security."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Defender Security Services
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Leading security solutions provider with a commitment to excellence and customer satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {companyInfo.mission}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {companyInfo.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                With {companyInfo.experience}, we have built a reputation for reliability, 
                professionalism, and innovative security solutions tailored to meet the unique 
                needs of our diverse clientele.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Security Team"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and customer-focused approach sets us apart in the security industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;