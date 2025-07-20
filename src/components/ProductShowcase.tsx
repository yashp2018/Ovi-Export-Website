import React from 'react';
import { CheckCircle, Grape, Apple, Option as Onion } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      id: 'grapes',
      name: 'Premium Grapes',
      icon: <Grape className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium quality grapes sourced directly from Nashik\'s finest vineyards.',
      features: [
        'High-Quality Standards',
        'On-Time Delivery',
        'Certifications and Safety',
        'Direct Farmer-to-Buyer',
        'Fresh from Farm',
        'Bulk Supply Capability'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'pomegranates',
      name: 'Pomegranates',
      icon: <Apple className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fresh, juicy pomegranates packed with nutrients and exceptional taste.',
      features: [
        'Direct from Farms',
        'Hygienic Harvest & Handling',
        'Export-Grade Packaging',
        'Timely & Safe Delivery',
        'Certified & Compliant',
        'Bulk Supply Capability'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'onions',
      name: 'Premium Onions',
      icon: <Onion className="w-12 h-12" />,
      image: 'https://images.pexels.com/photos/144248/onions-food-vegetables-healthy-144248.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-quality onions from Maharashtra\'s fertile fields, perfect for global markets.',
      features: [
        'Uniform Size & Shine',
        'Multiple Varieties Available',
        'Clean & Sorted',
        'Strong Packing for Export',
        'Bulk Supply Capability',
        'Export Experience & Documentation'
      ],
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Nashik's fertile lands to your table - discover our range of premium agricultural exports
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`bg-gradient-to-r ${product.color} text-white p-3 rounded-full shadow-lg`}>
                    {product.icon}
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Features List */}
                <div className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Button */}
                <div className="mt-8">
                  <button className={`w-full bg-gradient-to-r ${product.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Place an Order?</h3>
            <p className="text-gray-600 mb-6">Contact us for bulk orders and export inquiries</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">📱</span>
                <span className="text-gray-700">+91 7028712888 / +91 7038400825</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-gray-900">📧</span>
                <span className="text-gray-700">shubhamthete78@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;