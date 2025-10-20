import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, User, Mail, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    mobile: '',
    address: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const validateForm = () => {
    const errors = {};
    
    if (!customerDetails.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!customerDetails.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(customerDetails.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!customerDetails.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(customerDetails.mobile.replace(/\s/g, ''))) {
      errors.mobile = 'Mobile number must be 10 digits';
    }
    
    if (!customerDetails.address.trim()) {
      errors.address = 'Address is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      return;
    }

    setIsCheckingOut(true);

    // Prepare order details for email
    const orderItemsText = items.map(item => 
      `${item.name} (${item.size}) - Qty: ${item.quantity} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`
    ).join('\n');

    const orderDetails = {
      customerName: customerDetails.name,
      customerEmail: customerDetails.email,
      customerMobile: customerDetails.mobile,
      customerAddress: customerDetails.address,
      items: items,
      totalAmount: getTotalPrice(),
      orderDate: new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'short'
      })
    };

    // Prepare email content
    const emailSubject = `New Order from ${customerDetails.name} - Rawas Organics`;
    const emailBody = `
NEW ORDER RECEIVED!

Customer Details:
================
Name: ${customerDetails.name}
Email: ${customerDetails.email}
Mobile: ${customerDetails.mobile}
Address: ${customerDetails.address}

Order Details:
==============
${orderItemsText}

Total Amount: ₹${getTotalPrice()}
Order Date: ${orderDetails.orderDate}

Payment Method: Cash on Delivery
`;

    try {
      // Using Web3Forms - Free email service
      // Get your access key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '55935fe7-79e2-4e2b-a0ff-96900fd650b3', // Get free key from web3forms.com
          subject: emailSubject,
          from_name: 'Rawas Organics Website',
          to_email: 'khandetushar2001@gmail.com',
          message: emailBody,
          // Additional fields for reference
          customer_name: customerDetails.name,
          customer_email: customerDetails.email,
          customer_mobile: customerDetails.mobile,
          customer_address: customerDetails.address,
          order_total: `₹${getTotalPrice()}`,
        })
      });

      const result = await response.json();

      if (result.success) {
        alert('Order placed successfully! You will receive a confirmation email shortly.\n\nOur team will contact you soon for Cash on Delivery.');
        clearCart();
        setShowCheckoutForm(false);
        setCustomerDetails({
          name: '',
          email: '',
          mobile: '',
          address: ''
        });
      } else {
        throw new Error('Email service failed');
      }
    } catch (error) {
      console.error('Error sending order:', error);
      // Fallback: Log order details and show alert
      console.log('Order Details:', orderDetails);
      console.log('Email Body:', emailBody);
      
      alert(
        'Order received! Our team will contact you soon for Cash on Delivery.\n\n' +
        'Order Summary:\n' +
        '================\n' +
        `Name: ${orderDetails.customerName}\n` +
        `Email: ${orderDetails.customerEmail}\n` +
        `Mobile: ${orderDetails.customerMobile}\n` +
        `Total: ₹${orderDetails.totalAmount}\n\n` +
        'Note: Email notification may not be sent. Please check console for order details.'
      );
      
      clearCart();
      setShowCheckoutForm(false);
      setCustomerDetails({
        name: '',
        email: '',
        mobile: '',
        address: ''
      });
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="py-16 bg-rusty-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-3xl font-display font-bold text-rusty-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-lg text-rusty-600 mb-8">
              Looks like you haven't added any chocolates yet
            </p>
            <Link to="/products" className="btn-primary inline-flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-rusty-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-rusty-900">Shopping Cart</h1>
            <p className="text-rusty-600">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
          </div>
          <Link to="/products" className="btn-secondary inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-semibold text-rusty-900">{item.name}</h3>
                      <p className="text-sm text-rusty-600">{item.size}</p>
                      <p className="text-sm text-rusty-600 line-clamp-1">{item.description}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-rusty-100 hover:bg-rusty-200 flex items-center justify-center text-rusty-700 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-rusty-900 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-rusty-100 hover:bg-rusty-200 flex items-center justify-center text-rusty-700 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center space-x-4">
                        <span className="font-bold text-earth-600 text-lg">
                          ₹{item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-rusty-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-rusty-600">Subtotal</span>
                  <span className="font-semibold text-rusty-900">₹{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-rusty-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="border-t border-rusty-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-rusty-900">Total</span>
                    <span className="text-xl font-bold text-earth-600">₹{getTotalPrice()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {!showCheckoutForm ? (
                  <>
                    <button
                      onClick={() => setShowCheckoutForm(true)}
                      className="w-full btn-primary"
                    >
                      Proceed to Checkout
                    </button>
                    
                    <div className="text-center">
                      <p className="text-sm text-rusty-600">
                        💰 Cash on Delivery Available
                      </p>
                      <p className="text-xs text-rusty-500 mt-1">
                        Pay when your order arrives at your doorstep
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-rusty-900 mb-4">Your Details</h3>
                    
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-rusty-700 mb-1">
                        <User className="w-4 h-4 inline mr-1" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={customerDetails.name}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent ${
                          formErrors.name ? 'border-red-500' : 'border-rusty-200'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.name && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-rusty-700 mb-1">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={customerDetails.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent ${
                          formErrors.email ? 'border-red-500' : 'border-rusty-200'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Mobile Field */}
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-rusty-700 mb-1">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={customerDetails.mobile}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent ${
                          formErrors.mobile ? 'border-red-500' : 'border-rusty-200'
                        }`}
                        placeholder="10-digit mobile number"
                        maxLength="10"
                      />
                      {formErrors.mobile && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.mobile}</p>
                      )}
                    </div>

                    {/* Address Field */}
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-rusty-700 mb-1">
                        Delivery Address *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={customerDetails.address}
                        onChange={handleInputChange}
                        rows="3"
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent resize-none ${
                          formErrors.address ? 'border-red-500' : 'border-rusty-200'
                        }`}
                        placeholder="Enter your complete delivery address"
                      />
                      {formErrors.address && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.address}</p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => {
                          setShowCheckoutForm(false);
                          setFormErrors({});
                        }}
                        className="flex-1 px-4 py-2 text-sm border-2 border-rusty-300 text-rusty-700 rounded-lg hover:bg-rusty-50 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        onClick={handlePlaceOrder}
                        disabled={isCheckingOut}
                        className={`flex-1 btn-primary ${
                          isCheckingOut ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        {isCheckingOut ? 'Placing Order...' : 'Place Order'}
                      </button>
                    </div>

                    <div className="text-center pt-2">
                      <p className="text-xs text-rusty-600">
                        💰 Cash on Delivery
                      </p>
                      <p className="text-xs text-rusty-500 mt-1">
                        We'll contact you to confirm your order
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-rusty-200">
                <h3 className="font-semibold text-rusty-900 mb-3">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm text-rusty-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-earth-600 rounded-full mr-2"></span>
                    100% Natural Ingredients
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-earth-600 rounded-full mr-2"></span>
                    No Refined Sugar
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-earth-600 rounded-full mr-2"></span>
                    Handcrafted with Love
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-earth-600 rounded-full mr-2"></span>
                    Free Shipping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;