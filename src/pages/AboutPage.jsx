import React from 'react';
import { Heart, Leaf, Users, Award, Target, Recycle } from 'lucide-react';
import { brandInfo } from '../data/mockData';

const AboutPage = () => {
  const stats = [
    { number: '5000+', label: 'Happy Customers', icon: Users },
    { number: '100%', label: 'Natural Ingredients', icon: Leaf },
    { number: '4.9', label: 'Average Rating', icon: Award },
    { number: '50+', label: 'Partner Farms', icon: Target },
  ];

  const teamMembers = [
    {
      name: 'Pooja Khande',
      role: 'Founder & CEO',
      image: '',
      bio: 'Passionate about bringing traditional jaggery sweetness to modern chocolate making.'
    },
    {
      name: 'Shaurya Khande',
      role: 'Head of Production',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Ensures every chocolate meets our highest standards of quality and taste.'
    },
    {
      name: '---',
      role: 'Sustainability Director',
      image: '',
      bio: 'Leading our mission to create a positive impact on farming communities.'
    },
  ];

  return (
    <div className="py-8 bg-rusty-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-rusty-100 to-earth-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-rusty-900">
              Our Story
            </h1>
            <p className="text-xl text-rusty-700 leading-relaxed">
              {brandInfo.story}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-earth-600" />
                  <h2 className="text-3xl font-display font-bold text-rusty-900">Our Mission</h2>
                </div>
                <p className="text-lg text-rusty-700 leading-relaxed">
                  To create authentic Indian sweets, mithai, and festive treats using traditional recipes and organic jaggery, while supporting sustainable farming practices and preserving our culinary heritage.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-rusty-900">Our Values</h3>
                <ul className="space-y-3">
                  {brandInfo.values.map((value, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-earth-600 rounded-full"></div>
                      <span className="text-rusty-700">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=600&h=600&fit=crop"
                  alt="Jaggery making process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-earth-600 text-white p-4 rounded-xl">
                <p className="font-semibold">Traditional Methods</p>
                <p className="text-sm opacity-90">Modern Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-rusty-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-600 text-white rounded-full mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-rusty-900 mb-2">{stat.number}</div>
                  <div className="text-rusty-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Recycle className="w-8 h-8 text-earth-600" />
              <h2 className="text-3xl font-display font-bold text-rusty-900">
                Sustainability Commitment
              </h2>
            </div>
            <p className="text-lg text-rusty-600 max-w-2xl mx-auto">
              We believe in creating delicious traditional sweets while caring for our planet and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandInfo.sustainability.map((practice, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-rusty-50">
                <div className="w-3 h-3 bg-earth-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-rusty-700">{practice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-rusty-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-display font-bold text-rusty-900">
              Meet Our Team
            </h2>
            <p className="text-lg text-rusty-600">
              The passionate people behind Rawas Organics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-rusty-900 mb-1">{member.name}</h3>
                <p className="text-earth-600 font-medium mb-3">{member.role}</p>
                <p className="text-rusty-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-earth-600 to-earth-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-display font-bold text-white">
              Join Our Sweet Journey
            </h2>
            <p className="text-earth-100 text-lg">
              Experience the perfect blend of tradition and innovation in every delicious bite
            </p>
            <a
              href="/products"
              className="inline-block px-8 py-4 bg-white text-earth-700 font-semibold rounded-lg hover:bg-rusty-50 transition-colors"
            >
              Shop Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;