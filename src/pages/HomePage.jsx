import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Leaf, Heart, Award } from 'lucide-react';
import { products, testimonials } from '../data/mockData';
import { useCart } from '../context/CartContext';

const HomePage = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rusty-100 via-rusty-50 to-earth-50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-organic-texture opacity-30"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-rusty-900 leading-tight">
                  Sweetness{' '}
                  <span className="text-earth-600">Reimagined</span>{' '}
                  with Jaggery
                </h1>
                <p className="text-lg sm:text-xl text-rusty-700 leading-relaxed">
                  Discover the perfect blend of tradition and innovation in our handcrafted 
                  jaggery-based chocolates. Pure, natural, and absolutely irresistible.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-primary inline-flex items-center justify-center">
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/about" className="btn-secondary inline-flex items-center justify-center">
                  Learn More
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Leaf className="w-5 h-5 text-earth-600" />
                  <span className="text-sm font-medium text-rusty-700">100% Natural</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-earth-600" />
                  <span className="text-sm font-medium text-rusty-700">Handcrafted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-earth-600" />
                  <span className="text-sm font-medium text-rusty-700">Premium Quality</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&h=600&fit=crop"
                  alt="Artisanal Jaggery Chocolate"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-copper-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-rusty-900">4.9/5</span>
                </div>
                <p className="text-xs text-rusty-600 mt-1">500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-rusty-900">
              Featured Chocolates
            </h2>
            <p className="text-lg text-rusty-600 max-w-2xl mx-auto">
              Explore our handpicked selection of the finest jaggery-based chocolates
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card p-6 group">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-rusty-900 group-hover:text-earth-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-rusty-600 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-earth-600">₹{product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-earth-600 hover:bg-earth-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-rusty-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-rusty-900">
              What Our Customers Say
            </h2>
            <p className="text-lg text-rusty-600">
              Hear from those who've experienced our chocolates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card p-6 text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4 text-copper-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" fill="currentColor" />
                  ))}
                </div>
                <p className="text-rusty-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-rusty-900">{testimonial.name}</p>
                  <p className="text-sm text-rusty-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-earth-600 to-earth-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Stay Sweet with Updates
            </h2>
            <p className="text-earth-100 text-lg">
              Get the latest news, special offers, and new product launches delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-rusty-900 placeholder-rusty-500 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-earth-700 font-semibold rounded-lg hover:bg-rusty-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;