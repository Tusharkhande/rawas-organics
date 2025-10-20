export const products = [
  {
    id: 1,
    name: "GopalGud Jaggery Kalakand",
    image: "/assets/GopalGud Kalakand.PNG",
    description:
      "Traditional jaggery-based Kalakand, a Janmashtami special sweet crafted with rural authenticity.",
    category: "mithai",
    sizes: [
      { size: "100g", price: 200 },
      { size: "200g", price: 399 },
    ],
    ingredients: ["Organic Jaggery", "Milk Solids", "Pistachios", "Cardamom"],
    inStock: true,
  },
  {
    id: 2,
    name: "Chocolate Modak",
    image: "/assets/RAWAS Chocolate Modak.JPG",
    description:
      "Rich chocolate Modaks made with shudh ghee and organic jaggery, perfect for festive offerings.",
    category: "festive",
    sizes: [
      { size: "250g", price: 199 },
      { size: "500g", price: 499 },
      { size: "1kg", price: 899 },
    ],
    ingredients: ["Organic Jaggery", "Cocoa", "Shudh Ghee", "Milk Solids"],
    inStock: true,
  },
  {
    id: 3,
    name: "Navratri Sattvik Gulab Jamun",
    image: "/assets/Gulab Jamun.JPG",
    description:
      "Soft and juicy Gulab Jamuns prepared in a sattvik style for Navratri celebrations.",
    category: "mithai",
    sizes: [
      { size: "100g", price: 60 },
      { size: "200g", price: 120 },
      { size: "500g", price: 200 },
    ],
    ingredients: ["Milk Solids", "Organic Jaggery Syrup", "Cardamom"],
    inStock: true,
  },
  {
    id: 4,
    name: "ChocoJag Bar",
    image: "/assets/ChocoJag Bar.PNG",
    description:
      "A wholesome bar packed with the goodness of jaggery and crunchy nuts, perfect for gifting.",
    category: "snack",
    sizes: [
      { size: "50g", price: 199 },
      { size: "100g", price: 349 },
      { size: "200g", price: 649 },
    ],
    ingredients: ["Organic Jaggery", "Nuts", "Cocoa", "Rose Petals"],
    inStock: true,
  },
  {
    id: 5,
    name: "ChocoJag Cubes",
    image: "/assets/ChocoJag Cubes.PNG",
    description:
      "Delicious bite-sized cubes made with jaggery and nuts, a healthy festive treat.",
    category: "snack",
    sizes: [
      { size: "60g", price: 99 },
      { size: "160g", price: 199 },
      { size: "200g", price: 249 },
    ],
    ingredients: ["Organic Jaggery", "Nuts", "Cocoa", "Rose Petals"],
    inStock: true,
  },
];

export const reviews = [
  {
    id: 1,
    customerName: "Radhika K",
    rating: 5,
    comment:
      "Rawas चं ChocoJag खरंच अप्रतिम आहे! गुळाची गोडी आणि ड्रायफ्रूट्सची क्रंच एकदम परफेक्ट. आरोग्यदायी, स्वादिष्ट आणि guilt-free! आम्ही पुन्हा…",
    productId: 4, // ChocoJag -> assumed ChocoJag Bar
    date: "2025-10-18",
    verified: false,
  },
  {
    id: 2,
    customerName: "Mayuri S",
    rating: 5,
    comment:
      "it was delicious and healthy my kid loved if perfect for all ages",
    productId: 4, // ChocoJag
    date: "2025-10-12",
    verified: false,
  },
  {
    id: 3,
    customerName: "Srishti S",
    rating: 4.5,
    comment:
      "I really liked the taste and moreover it’s natural and good for health",
    productId: 4, // Chocojag
    date: "2025-09-28",
    verified: false,
  },
  {
    id: 4,
    customerName: "Damini S",
    rating: 5,
    comment: "It’s earthy and Yummy",
    productId: 4, // ChocoJag
    date: "2025-09-12",
    verified: false,
  },
  {
    id: 5,
    customerName: "Abhishek S",
    rating: 4,
    comment: "Delicious and Chocolaty",
    productId: 2, // Rawas Modak -> assumed Chocolate Modak
    date: "2025-08-24",
    verified: false,
  },
  {
    id: 6,
    customerName: "Sheetal k",
    rating: 5,
    comment: "Yummy And Healthy",
    productId: 2, // Rawas Modak
    date: "2025-07-29",
    verified: false,
  },
  {
    id: 7,
    customerName: "Dhanashri",
    rating: 5,
    comment: "Too Tasty definitely try it again",
    productId: 2, // Rawas Modak
    date: "2025-06-18",
    verified: false,
  },
  {
    id: 8,
    customerName: "Radhika K",
    rating: 5,
    comment: "Nice kids loved it",
    productId: 1, // Gopal Kalakand -> assumed GopalGud Jaggery Kalakand
    date: "2025-03-22",
    verified: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Meera Krishnan",
    role: "Nutritionist",
    quote:
      "Rawas Organics has revolutionized traditional Indian sweets. The use of organic jaggery makes these treats a healthier indulgence without compromising on authentic taste.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Chef Arjun Kapoor",
    role: "Celebrity Chef",
    quote:
      "The flavor profiles in these sweets are extraordinary. Each bite tells a story of tradition, authenticity, and the rich culinary heritage of India.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Lakshmi Iyer",
    role: "Food Blogger",
    quote:
      "From Kalakand to Modaks, Rawas Organics brings back the authentic taste of homemade mithai with the goodness of natural jaggery. Simply divine!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export const categories = [
  { id: "all", name: "All Products", count: products.length },
  {
    id: "mithai",
    name: "Mithai",
    count: products.filter((p) => p.category === "mithai").length,
  },
  {
    id: "festive",
    name: "Festive Treats",
    count: products.filter((p) => p.category === "festive").length,
  },
  {
    id: "snack",
    name: "Snacks",
    count: products.filter((p) => p.category === "snack").length,
  },
];

export const brandInfo = {
  story:
    "Rawas Organics was born from a simple belief: that the sweetest moments in life should be guilt-free. We celebrate India's rich heritage of traditional sweets and festive treats, reimagined with pure, natural jaggery.",
  mission:
    "To create authentic Indian sweets, mithai, and festive treats using traditional recipes and organic jaggery, while supporting sustainable farming practices and preserving our culinary heritage.",
  values: [
    "100% Natural Ingredients",
    "Zero Refined Sugar",
    "Fair Trade Practices",
    "Eco-Friendly Packaging",
    "Supporting Local Farmers",
  ],
  sustainability: [
    "We source our jaggery directly from certified organic farms",
    "Our packaging is made from recycled and biodegradable materials",
    "We maintain carbon-neutral shipping practices",
    "10% of profits support sustainable farming initiatives",
  ],
};
