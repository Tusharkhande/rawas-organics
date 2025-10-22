import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'therawasorganics@gmail.com',
      link: 'mailto:therawasorganics@gmail.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 97674 60070',
      link: 'tel:+919767460070'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Tanish Pearls, Charholi Bk, Pune, Maharashtra 412105',
      link: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9AM - 7PM, Sun: 10AM - 5PM',
      link: null
    }
  ];

  const socialLinks = [
    // { icon: Facebook, name: 'Facebook', url: 'https://facebook.com/rawasorganics' },
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/rawas_organics/' },
    // { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/rawasorganics' }
  ];

  return (
    <div className="py-8 bg-rusty-50">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-rusty-100 to-earth-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-rusty-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-rusty-700 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our products, 
            need help with an order, or just want to share your sweet experience.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-display font-bold text-rusty-900 mb-4">
                Send us a Message
              </h2>
              <p className="text-rusty-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-rusty-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-rusty-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-rusty-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-rusty-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-rusty-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-rusty-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-display font-bold text-rusty-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-earth-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-rusty-900 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-rusty-600 hover:text-earth-600 transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-rusty-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-display font-bold text-rusty-900 mb-6">
                Follow Us
              </h2>
              <p className="text-rusty-600 mb-6">
                Stay connected with us on social media for the latest updates, 
                behind-the-scenes content, and sweet surprises!
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-earth-600 hover:bg-earth-700 text-white rounded-lg flex items-center justify-center transition-colors group"
                    >
                      <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* FAQ Teaser */}
            <div className="bg-gradient-to-br from-earth-600 to-earth-700 rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-display font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-earth-100 mb-6">
                Have questions about our chocolates, ingredients, or shipping? 
                Check out our FAQ section for quick answers.
              </p>
              <button className="bg-white text-earth-700 font-semibold px-6 py-3 rounded-lg hover:bg-rusty-50 transition-colors">
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;