import React, { useState, useEffect, useRef } from "react";
import { companyStats } from "../data/mockData";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    revenue: 0,
    customers: 0,
    employees: 0,
    branches: 0,
    sites: 0,
    districts: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    { key: "revenue", label: "REVENUE", value: "50+", suffix: "cr" },
    { key: "customers", label: "CUSTOMERS", value: "200+" },
    { key: "employees", label: "EMPLOYEES", value: "1000+" },
    { key: "branches", label: "BRANCH OFFICES", value: "5" },
    { key: "sites", label: "SITES", value: "150+" },
    { key: "districts", label: "DISTRICTS", value: "25+" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const interval = 50;
      const steps = duration / interval;

      const targets = {
        revenue: 50,
        customers: 200,
        employees: 1000,
        branches: 5,
        sites: 150,
        districts: 25
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        setAnimatedStats({
          revenue: Math.round(targets.revenue * easeProgress),
          customers: Math.round(targets.customers * easeProgress),
          employees: Math.round(targets.employees * easeProgress),
          branches: Math.round(targets.branches * easeProgress),
          sites: Math.round(targets.sites * easeProgress),
          districts: Math.round(targets.districts * easeProgress)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Group Facts and Figures
          </h2>
          <p className="text-blue-100 text-lg">*As of December 2024</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className={`text-center transform transition-all duration-700 ${
                isVisible 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.key === "revenue" ? (
                    <>
                      {animatedStats[stat.key]}
                      <span className="text-2xl">+</span>
                    </>
                  ) : stat.key === "customers" ? (
                    <>
                      {animatedStats[stat.key]}
                      <span className="text-2xl">+</span>
                    </>
                  ) : stat.key === "employees" ? (
                    <>
                      {animatedStats[stat.key]}
                      <span className="text-2xl">+</span>
                    </>
                  ) : stat.key === "sites" ? (
                    <>
                      {animatedStats[stat.key]}
                      <span className="text-2xl">+</span>
                    </>
                  ) : stat.key === "districts" ? (
                    <>
                      {animatedStats[stat.key]}
                      <span className="text-2xl">+</span>
                    </>
                  ) : (
                    animatedStats[stat.key]
                  )}
                  {stat.suffix && <span className="text-lg ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-blue-100 text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Expanding Across India
            </h3>
            <p className="text-blue-100 leading-relaxed">
              With operations spanning multiple districts and a growing network of branch offices, 
              Defender Security Services continues to expand its reach to serve clients nationwide. 
              Our commitment to excellence drives us to establish new partnerships and deliver 
              superior security solutions across diverse industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;