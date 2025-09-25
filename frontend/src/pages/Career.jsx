import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Footer from "../components/Footer";
import { MapPin, Clock, DollarSign, Users } from "lucide-react";

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Security Guard",
      location: "Dehradun, Uttarakhand",
      type: "Full-time",
      salary: "₹15,000 - ₹20,000",
      description: "Experienced security personnel for corporate clients. Must have valid license and 2+ years experience.",
    },
    {
      id: 2,
      title: "Security Supervisor",
      location: "Multiple Locations",
      type: "Full-time", 
      salary: "₹25,000 - ₹35,000",
      description: "Lead security operations and manage teams. Strong leadership skills and security background required.",
    },
    {
      id: 3,
      title: "Facility Manager",
      location: "Dehradun, Uttarakhand",
      type: "Full-time",
      salary: "₹30,000 - ₹45,000",
      description: "Manage facility operations and maintenance. Experience in facility management preferred.",
    }
  ];

  const benefits = [
    "Competitive salary packages",
    "Health insurance coverage",
    "Professional training programs",
    "Career advancement opportunities",
    "Performance-based incentives",
    "Flexible working arrangements"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Build a rewarding career in the security industry with opportunities for growth and development
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Defender Security Services, we believe that human resource is the most valuable asset of the company. 
                We are committed to providing a supportive work environment where our employees can grow professionally 
                and personally.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and join our growing team of security professionals
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                    </div>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Don't See the Right Position?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
            Send Your Resume
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Career;