export const products = [
    {
      id: 1,
      name: "Classic Jaggery Dark Chocolate",
      price: 299,
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop",
      description: "Rich dark chocolate infused with pure jaggery for a naturally sweet experience.",
      category: "dark",
      size: "100g",
      ingredients: ["Organic Cacao", "Pure Jaggery", "Cocoa Butter"],
      inStock: true
    },
    {
      id: 2,
      name: "Coconut Jaggery Milk Chocolate",
      price: 329,
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop",
      description: "Creamy milk chocolate with coconut flakes and jaggery sweetness.",
      category: "milk",
      size: "100g",
      ingredients: ["Milk Chocolate", "Coconut Flakes", "Jaggery", "Cocoa Butter"],
      inStock: true
    },
    {
      id: 3,
      name: "Spiced Jaggery Chocolate Bar",
      price: 349,
      image: "https://images.unsplash.com/photo-1606312619878-ac35bb3c7fb5?w=400&h=400&fit=crop",
      description: "Traditional spices blended with jaggery chocolate for an authentic taste.",
      category: "spiced",
      size: "100g",
      ingredients: ["Dark Chocolate", "Jaggery", "Cardamom", "Cinnamon", "Nutmeg"],
      inStock: true
    },
    {
      id: 4,
      name: "Almond Jaggery Crunch",
      price: 379,
      image: "https://images.unsplash.com/photo-1571197772638-4a2c0ea5e3b6?w=400&h=400&fit=crop",
      description: "Crunchy almonds embedded in smooth jaggery chocolate.",
      category: "nuts",
      size: "120g",
      ingredients: ["Dark Chocolate", "Roasted Almonds", "Jaggery", "Sea Salt"],
      inStock: true
    },
    {
      id: 5,
      name: "Date & Jaggery Fusion",
      price: 359,
      image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=400&h=400&fit=crop",
      description: "Sweet dates combined with jaggery chocolate for double natural sweetness.",
      category: "fruit",
      size: "100g",
      ingredients: ["Milk Chocolate", "Dates", "Jaggery", "Vanilla"],
      inStock: false
    },
    {
      id: 6,
      name: "Premium Jaggery White Chocolate",
      price: 399,
      image: "https://images.unsplash.com/photo-1582131503261-d1f6ab2d3faa?w=400&h=400&fit=crop",
      description: "Luxurious white chocolate sweetened naturally with pure jaggery.",
      category: "white",
      size: "100g",
      ingredients: ["White Chocolate", "Pure Jaggery", "Vanilla", "Cocoa Butter"],
      inStock: true
    },
    {
      id: 7,
      name: "Cashew Jaggery Delight",
      price: 429,
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop",
      description: "Premium cashews with jaggery chocolate in a handcrafted bar.",
      category: "nuts",
      size: "120g",
      ingredients: ["Milk Chocolate", "Cashews", "Jaggery", "Ghee"],
      inStock: true
    },
    {
      id: 8,
      name: "Ginger Jaggery Dark",
      price: 339,
      image: "https://images.unsplash.com/photo-1599599810694-57a2ca8276a8?w=400&h=400&fit=crop",
      description: "Bold dark chocolate with warming ginger and natural jaggery.",
      category: "spiced",
      size: "100g",
      ingredients: ["Dark Chocolate", "Crystallized Ginger", "Jaggery", "Black Pepper"],
      inStock: true
    }
  ];
  
  export const reviews = [
    {
      id: 1,
      customerName: "Priya Sharma",
      rating: 5,
      comment: "The Classic Jaggery Dark Chocolate is absolutely divine! You can taste the quality and the natural sweetness is perfect.",
      productId: 1,
      date: "2024-01-15",
      verified: true
    },
    {
      id: 2,
      customerName: "Rajesh Kumar",
      rating: 4,
      comment: "Love the sustainable approach and the taste is incredible. My family enjoys these chocolates every evening.",
      productId: 2,
      date: "2024-01-12",
      verified: true
    },
    {
      id: 3,
      customerName: "Anita Patel",
      rating: 5,
      comment: "Finally, chocolates that align with my health-conscious lifestyle. The jaggery gives such a rich, complex sweetness.",
      productId: 3,
      date: "2024-01-10",
      verified: true
    },
    {
      id: 4,
      customerName: "Michael Johnson",
      rating: 4,
      comment: "Ordered these for my Indian colleague and now I'm addicted! The spices in the chocolate are perfectly balanced.",
      productId: 3,
      date: "2024-01-08",
      verified: false
    },
    {
      id: 5,
      customerName: "Deepika Rao",
      rating: 5,
      comment: "The almond crunch is my absolute favorite. Great texture and the jaggery doesn't overpower the chocolate flavor.",
      productId: 4,
      date: "2024-01-05",
      verified: true
    },
    {
      id: 6,
      customerName: "Sarah Williams",
      rating: 5,
      comment: "These chocolates are a game changer! No guilt, all pleasure. The packaging is beautiful too.",
      productId: 6,
      date: "2024-01-03",
      verified: true
    }
  ];
  
  export const testimonials = [
    {
      id: 1,
      name: "Dr. Meera Krishnan",
      role: "Nutritionist",
      quote: "Rawas Organics has revolutionized how we think about sweet treats. The use of jaggery makes these chocolates a healthier indulgence.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Chef Arjun Kapoor",
      role: "Celebrity Chef",
      quote: "The flavor profiles in these chocolates are extraordinary. Each bite tells a story of tradition meeting innovation.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Lakshmi Iyer",
      role: "Food Blogger",
      quote: "I've tried chocolates from around the world, but nothing compares to the authentic taste and quality of Rawas Organics.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];
  
  export const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'dark', name: 'Dark Chocolate', count: products.filter(p => p.category === 'dark').length },
    { id: 'milk', name: 'Milk Chocolate', count: products.filter(p => p.category === 'milk').length },
    { id: 'white', name: 'White Chocolate', count: products.filter(p => p.category === 'white').length },
    { id: 'nuts', name: 'With Nuts', count: products.filter(p => p.category === 'nuts').length },
    { id: 'spiced', name: 'Spiced', count: products.filter(p => p.category === 'spiced').length },
    { id: 'fruit', name: 'With Fruits', count: products.filter(p => p.category === 'fruit').length }
  ];
  
  export const brandInfo = {
    story: "Rawas Organics was born from a simple belief: that the sweetest moments in life should be guilt-free.",
    mission: "To create the world's finest jaggery-based chocolates while supporting sustainable farming practices and preserving traditional sweetening methods.",
    values: [
      "100% Natural Ingredients",
      "Zero Refined Sugar",
      "Fair Trade Practices",
      "Eco-Friendly Packaging",
      "Supporting Local Farmers"
    ],
    sustainability: [
      "We source our jaggery directly from certified organic farms",
      "Our packaging is made from recycled and biodegradable materials",
      "We maintain carbon-neutral shipping practices",
      "10% of profits support sustainable farming initiatives"
    ]
  };