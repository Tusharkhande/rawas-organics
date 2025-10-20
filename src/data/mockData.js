export const products = [
  {
    id: 1,
    name: "GopalGud Jaggery Kalakand",
    price: 299,
    image: "/assets/GopalGud Kalakand.PNG",
    description: "Traditional jaggery-based Kalakand, a Janmashtami special sweet crafted with rural authenticity.",
    category: "mithai",
    size: "250g",
    ingredients: ["Organic Jaggery", "Milk Solids", "Pistachios", "Cardamom"],
    inStock: true 
  },
  {
    id: 2,
    name: "Chocolate Modak",
    price: 349,
    image: "/assets/RAWAS Chocolate Modak.JPG",
    description: "Rich chocolate Modaks made with shudh ghee and organic jaggery, perfect for festive offerings.",
    category: "festive",
    size: "200g",
    ingredients: ["Organic Jaggery", "Cocoa", "Shudh Ghee", "Milk Solids"],
    inStock: true
  },
  {
    id: 3,
    name: "Navratri Sattvik Gulab Jamun",
    price: 279,
    image: "/assets/Gulab Jamun.JPG",
    description: "Soft and juicy Gulab Jamuns prepared in a sattvik style for Navratri celebrations.",
    category: "mithai",
    size: "250g",
    ingredients: ["Milk Solids", "Organic Jaggery Syrup", "Cardamom"],
    inStock: true
  },
  {
    id: 4,
    name: "ChocoJag Bar",
    price: 199,
    image: "/assets/ChocoJag Bar.PNG",
    description: "A wholesome bar packed with the goodness of jaggery and crunchy nuts, perfect for gifting.",
    category: "snack",
    size: "50g",
    ingredients: ["Organic Jaggery", "Nuts", "Cocoa", "Rose Petals"],
    inStock: true
  },
  {
    id: 5,
    name: "ChocoJag Cubes",
    price: 249,
    image: "/assets/ChocoJag Cubes.PNG",
    description: "Delicious bite-sized cubes made with jaggery and nuts, a healthy festive treat.",
    category: "snack",
    size: "150g",
    ingredients: ["Organic Jaggery", "Nuts", "Cocoa", "Rose Petals"],
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