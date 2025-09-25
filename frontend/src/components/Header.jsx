import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "HOME", path: "/" },
    { name: "COMPANY", path: "/about" },
    { name: "SOLUTIONS", path: "/services" },
    { name: "CAREER", path: "/career" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="https://img1.wsimg.com/isteam/ip/9621693c-899c-4763-b9aa-02fc73963b49/blob-9b78866.png/:/rs=h:120,cg:true,m/qt=q:95" 
                alt="Defender Security Services Logo" 
                className="h-16 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-gray-800 text-lg font-bold">Defender Security Services</span>
                <span className="text-gray-600 text-sm">& Staffing Services</span>
              </div>
            </div>
          </Link>

          {/* Great Place to Work Badge */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="bg-red-600 text-white px-3 py-2 rounded text-xs font-semibold">
              Great Place to Work® Certified
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  location.pathname === item.path
                    ? "text-red-600"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="w-4 h-4" />
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-red-600 ${
                    location.pathname === item.path
                      ? "text-red-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;