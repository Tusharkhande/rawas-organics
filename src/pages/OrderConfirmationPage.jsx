import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { CheckCircle, Package, Mail, Phone, MapPin, Home, Gift } from 'lucide-react';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const orderData = location.state?.orderData;

  // Redirect to home if no order data
  if (!orderData) {
    return <Navigate to="/" replace />;
  }

  const { customerDetails, items, subtotal, discountAmount, discountApplied, totalAmount, orderDate } = orderData;

  return (
    <div className="py-16 bg-rusty-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-display font-bold text-rusty-900 mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-lg text-rusty-600">
            Thank you for your order, {customerDetails.name}!
          </p>
        </div>

        {/* Confirmation Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <Mail className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Confirmation Emails Sent</h3>
              <p className="text-sm text-blue-700 mb-2">
                We've sent order confirmation emails to:
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Your email: <span className="font-medium">{customerDetails.email}</span></li>
                <li>• Our team: <span className="font-medium">therawasorganics@gmail.com</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <Package className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">What's Next?</h3>
              <p className="text-sm text-amber-700">
                Our team will contact you soon to confirm your order and arrange delivery. 
                Your order will be delivered via <strong>Cash on Delivery (COD)</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-earth-600 to-copper-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Order Details</h2>
            <p className="text-sm text-white/80">{orderDate}</p>
          </div>

          <div className="p-6 space-y-6">
            {/* Customer Information */}
            <div>
              <h3 className="font-semibold text-rusty-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-earth-600 rounded-full mr-2"></span>
                Customer Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start">
                  <Mail className="w-4 h-4 text-rusty-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-rusty-500 text-xs">Email</p>
                    <p className="text-rusty-900">{customerDetails.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-4 h-4 text-rusty-600 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-rusty-500 text-xs">Mobile</p>
                    <p className="text-rusty-900">{customerDetails.mobile}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start mt-4">
                <MapPin className="w-4 h-4 text-rusty-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-rusty-500 text-xs">Delivery Address</p>
                  <p className="text-rusty-900">{customerDetails.address}</p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div>
              <h3 className="font-semibold text-rusty-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-earth-600 rounded-full mr-2"></span>
                Order Items
              </h3>
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-rusty-50 rounded-lg">
                    <div className="flex items-center gap-4 flex-1">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-rusty-900">{item.name}</h4>
                        <p className="text-sm text-rusty-600">Size: {item.selectedSize || 'N/A'}</p>
                        <p className="text-sm text-rusty-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-earth-600">₹{item.price * item.quantity}</p>
                      <p className="text-xs text-rusty-500">₹{item.price} each</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-rusty-200 pt-6">
              {discountApplied && (
                <div className="mb-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-lg">
                  <div className="flex items-center gap-2 text-orange-700 font-bold mb-1">
                    <Gift className="w-5 h-5" />
                    New Year Offer Applied! 🎉
                  </div>
                  <p className="text-sm text-orange-600">
                    You saved ₹{discountAmount} with our 40% off deal!
                  </p>
                </div>
              )}
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-rusty-600">Subtotal</span>
                  <span className="font-medium text-rusty-900">₹{subtotal || totalAmount}</span>
                </div>
                
                {discountApplied && (
                  <div className="flex justify-between text-green-600">
                    <span className="flex items-center gap-1">
                      <Gift className="w-4 h-4" />
                      Discount (40% off)
                    </span>
                    <span className="font-semibold">-₹{discountAmount}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-rusty-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-rusty-200">
                  <span className="text-lg font-semibold text-rusty-900">Total Amount</span>
                  <div className="text-right">
                    {discountApplied && (
                      <div className="text-sm text-rusty-500 line-through">₹{subtotal}</div>
                    )}
                    <span className="text-2xl font-bold text-earth-600">₹{totalAmount}</span>
                  </div>
                </div>
                
                {discountApplied && (
                  <p className="text-xs text-green-600 text-right pt-1">
                    You saved ₹{discountAmount}! 🎉
                  </p>
                )}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800 font-medium">
                💰 Payment Method: <span className="font-bold">Cash on Delivery (COD)</span>
              </p>
              <p className="text-xs text-green-700 mt-1">
                Please keep the exact amount ready when our delivery partner arrives
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-secondary inline-flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link
            to="/products"
            className="btn-primary inline-flex items-center justify-center"
          >
            <Package className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>

        {/* Support Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-rusty-600 mb-2">
            Need help with your order?
          </p>
          <Link
            to="/contact"
            className="text-earth-600 hover:text-earth-700 font-medium text-sm underline"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
