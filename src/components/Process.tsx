import React from 'react';
import { Sprout, Truck, Package, Globe, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: 'Farm Selection',
      description: 'We partner with certified farmers in Nashik\'s fertile regions',
      details: ['Quality soil assessment', 'Farmer certification', 'Sustainable practices']
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Control',
      description: 'Rigorous quality checks at every stage of production',
      details: ['Pre-harvest inspection', 'Post-harvest grading', 'Export standards compliance']
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Processing & Packaging',
      description: 'State-of-the-art processing and export-grade packaging',
      details: ['Hygienic processing', 'Export-grade packaging', 'Cold chain maintenance']
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Logistics',
      description: 'Efficient transportation and timely delivery',
      details: ['Temperature-controlled transport', 'Real-time tracking', 'Documentation support']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Delivery',
      description: 'Safe delivery to international markets worldwide',
      details: ['Export documentation', 'Customs clearance', 'Final delivery confirmation']
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            From Nashik's Fertile Lands to Global Tables
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures premium quality from farm to your doorstep
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-300 to-green-300 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4 mt-4">
                    <div className="bg-gradient-to-r from-emerald-100 to-green-100 p-4 rounded-full group-hover:from-emerald-200 group-hover:to-green-200 transition-colors">
                      <div className="text-emerald-600">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center justify-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          <span className="text-sm text-gray-500">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 mb-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-300 to-green-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-gray-600">Successful Exports</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
            <div className="text-gray-600">Quality Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;