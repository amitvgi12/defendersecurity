import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { newsItems } from "../data/mockData";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";

const NewsSection = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              News and Media
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest developments and achievements
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            View All News
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-0 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-teal-600 text-white hover:bg-teal-700"
                  >
                    {item.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(item.date)}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>

                <Button 
                  variant="ghost" 
                  size="sm"
                  className="p-0 h-auto text-teal-600 hover:text-teal-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  read more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Career Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 rounded-2xl p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Career Opportunities
              </h3>
              <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
                At Defender Security Services, we believe that human resource is the most valuable asset of the company. Join our growing team and build a rewarding career in the security industry.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Join Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;