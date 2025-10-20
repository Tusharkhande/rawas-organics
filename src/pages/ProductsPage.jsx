import React, { useState, useMemo } from 'react';
import { Filter, Search, ShoppingCart, Star } from 'lucide-react';
import { products, categories } from '../data/mockData';
import { useCart } from '../context/CartContext';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const handleSizeChange = (productId, sizeIndex) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: sizeIndex
    }));
  };

  const getSelectedSize = (product) => {
    const sizeIndex = selectedSizes[product.id] || 0;
    return product.sizes[sizeIndex];
  };

  const handleAddToCart = (product) => {
    const selectedSize = getSelectedSize(product);
    addToCart({
      ...product,
      selectedSize: selectedSize.size,
      price: selectedSize.price
    });
  };

  return (
    <div className="py-8 bg-rusty-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-rusty-900">
            Our Product Collection
          </h1>
          <p className="text-lg text-rusty-600 max-w-2xl mx-auto">
            Discover our traditional sweets, festive treats, and jaggery-based delicacies, each made with the finest natural ingredients
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rusty-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search sweets, treats, snacks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-rusty-200 rounded-lg focus:ring-2 focus:ring-earth-500 focus:border-transparent"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden btn-secondary flex items-center"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>

            {/* Category Filters (Desktop) */}
            <div className="hidden lg:flex items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-earth-600 text-white'
                      : 'bg-rusty-100 text-rusty-700 hover:bg-earth-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-rusty-200">
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setShowFilters(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-earth-600 text-white'
                        : 'bg-rusty-100 text-rusty-700 hover:bg-earth-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-rusty-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && (
              <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
            )}
            {searchTerm && <span> for "{searchTerm}"</span>}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const selectedSize = getSelectedSize(product);
              return (
                <div key={product.id} className="card p-6 group h-full flex flex-col">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-semibold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-semibold text-rusty-900 group-hover:text-earth-600 transition-colors mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-rusty-600 line-clamp-2 mb-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Size Selector */}
                    <div className="space-y-1">
                      <label className="text-xs text-rusty-600 font-medium">Select Size:</label>
                      <select
                        value={selectedSizes[product.id] || 0}
                        onChange={(e) => handleSizeChange(product.id, parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-rusty-200 rounded-lg text-sm focus:ring-2 focus:ring-earth-500 focus:border-transparent"
                      >
                        {product.sizes.map((sizeOption, index) => (
                          <option key={index} value={index}>
                            {sizeOption.size} - ₹{sizeOption.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-bold text-earth-600">₹{selectedSize.price}</span>
                      <div className="flex items-center text-copper-500">
                        <Star className="w-4 h-4" fill="currentColor" />
                        <span className="text-sm text-rusty-600 ml-1">4.8</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                        product.inStock
                          ? 'bg-earth-600 hover:bg-earth-700 text-white'
                          : 'bg-rusty-200 text-rusty-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍫</div>
            <h3 className="text-xl font-semibold text-rusty-900 mb-2">No products found</h3>
            <p className="text-rusty-600 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;