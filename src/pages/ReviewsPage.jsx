import React, { useState } from 'react';
import { Star, ThumbsUp, Verified, Send } from 'lucide-react';
import { reviews, products } from '../data/mockData';

const ReviewsPage = () => {
  const [newReview, setNewReview] = useState({
    customerName: '',
    rating: 5,
    comment: '',
    productId: 1
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate review submission
    setTimeout(() => {
      alert('Thank you for your review! It will be published after moderation.');
      setNewReview({
        customerName: '',
        rating: 5,
        comment: '',
        productId: 1
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: name === 'rating' || name === 'productId' ? parseInt(value) : value
    }));
  };

  const getProductName = (productId) => {
    const product = products.find(p => p.id === productId);
    return product ? product.name : 'Unknown Product';
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / totalReviews) * 100
  }));

  return (
    <div className="py-8 bg-rusty-50">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-rusty-100 to-earth-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-rusty-900 mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-rusty-700 max-w-2xl mx-auto">
            See what our customers are saying about our delicious jaggery-based chocolates
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Reviews Overview */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              {/* Average Rating */}
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-earth-600 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.floor(averageRating)
                          ? 'text-copper-500'
                          : 'text-rusty-300'
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-rusty-600">Based on {totalReviews} reviews</p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3 mb-8">
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-rusty-700 w-8">
                      {rating}★
                    </span>
                    <div className="flex-1 bg-rusty-200 rounded-full h-2">
                      <div
                        className="bg-copper-500 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-rusty-600 w-8">
                      {count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Write Review CTA */}
              <div className="border-t border-rusty-200 pt-6">
                <h3 className="font-semibold text-rusty-900 mb-2">
                  Share Your Experience
                </h3>
                <p className="text-sm text-rusty-600 mb-4">
                  Help others discover the sweetness of our chocolates
                </p>
                <a
                  href="#write-review"
                  className="btn-primary w-full text-center block"
                >
                  Write a Review
                </a>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center">
                      <span className="text-earth-600 font-semibold text-lg">
                        {review.customerName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-rusty-900">
                          {review.customerName}
                        </h3>
                        {review.verified && (
                          <Verified className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-sm text-rusty-600">
                        {new Date(review.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-copper-500' : 'text-rusty-300'
                        }`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-earth-600 font-medium mb-2">
                    Product: {getProductName(review.productId)}
                  </p>
                  <p className="text-rusty-700">{review.comment}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-rusty-100">
                  <button className="flex items-center space-x-2 text-rusty-600 hover:text-earth-600 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">Helpful</span>
                  </button>
                  {review.verified && (
                    <span className="text-xs text-green-600 font-medium">
                      Verified Purchase
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Write Review Form */}
        <div id="write-review" className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-display font-bold text-rusty-900 mb-6">
              Write a Review
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="customerName" className="block text-sm font-medium text-rusty-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    value={newReview.customerName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-rusty-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="productId" className="block text-sm font-medium text-rusty-700 mb-2">
                    Product *
                  </label>
                  <select
                    id="productId"
                    name="productId"
                    value={newReview.productId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-rusty-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                  >
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-rusty-700 mb-2">
                  Rating *
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setNewReview(prev => ({ ...prev, rating }))}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          rating <= newReview.rating
                            ? 'text-copper-500'
                            : 'text-rusty-300'
                        } hover:text-copper-500 transition-colors`}
                        fill="currentColor"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-rusty-700 mb-2">
                  Your Review *
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={newReview.comment}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-rusty-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your experience with this chocolate..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary flex items-center ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit Review
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;