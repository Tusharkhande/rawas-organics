import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Order placed successfully! We will contact you for Cash on Delivery.');
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
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
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className={`w-full btn-primary ${
                    isCheckingOut ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isCheckingOut ? 'Processing...' : 'Checkout (Cash on Delivery)'}
                </button>
                
                <div className="text-center">
                  <p className="text-sm text-rusty-600">
                    💰 Cash on Delivery Available
                  </p>
                  <p className="text-xs text-rusty-500 mt-1">
                    Pay when your order arrives at your doorstep
                  </p>
                </div>
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