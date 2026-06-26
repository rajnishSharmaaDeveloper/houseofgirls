// Import generated assets
import skincareDropper from '../assets/skincare_dropper.png';
import creamJar from '../assets/cream_jar.png';
import eyeshadowPalette from '../assets/eyeshadow_palette.png';
import makeupBrushes from '../assets/makeup_brushes.png';

export const categories = ['All', 'Skin Care', 'Hair Care', 'Makeup', 'Fragrances'];

export const products = [
  {
    id: 1,
    name: "Rose Petals Serum - Glow Radiance",
    category: "Skin Care",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviewsCount: 124,
    image: skincareDropper,
    tag: "Sale",
    description: "Formulated with pure rose water, hyaluronic acid, and niacinamide to bring a bright, healthy, and natural glow to your skin. Lightweight and fast-absorbing.",
    shades: ["Standard 30ml", "Value Size 50ml"],
    features: ["Hydrating", "Brightening", "Cruelty-Free"]
  },
  {
    id: 2,
    name: "Aqua Face Hydrator - Intense Cream",
    category: "Skin Care",
    price: 34.00,
    originalPrice: 45.00,
    rating: 4.7,
    reviewsCount: 86,
    image: creamJar,
    tag: "New",
    description: "An ultra-hydrating gel cream that denches your skin with lightweight moisture for 48 hours. Formulated with minerals and plant extracts.",
    shades: ["50g Jar", "Travel Size 15g"],
    features: ["Deep Moisture", "Non-comedogenic", "Dermatologist Tested"]
  },
  {
    id: 3,
    name: "Sunset Glow Eyeshadow Palette",
    category: "Makeup",
    price: 38.00,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 215,
    image: eyeshadowPalette,
    tag: "Trending",
    description: "A rich mix of 12 highly pigmented warm, neutral, and sparkling gold shades. Blends like butter to create both day and night professional makeup looks.",
    shades: ["Sunset Palette", "Nude Matte Palette"],
    features: ["Ultra-pigmented", "Long-lasting", "Zero Fallout"]
  },
  {
    id: 4,
    name: "Pink Bliss Professional Brush Set",
    category: "Makeup",
    price: 25.00,
    originalPrice: 32.00,
    rating: 4.6,
    reviewsCount: 98,
    image: makeupBrushes,
    tag: "Sale",
    description: "A set of 7 professional-grade, cruelty-free cosmetic brushes with rose gold handles and fluffy pink synthetic bristles. Perfect for precision application.",
    shades: ["7-Piece Pink Set", "10-Piece Gold Set"],
    features: ["Vegan Bristles", "Soft Application", "Ergonomic Handles"]
  },
  {
    id: 5,
    name: "Keratin Therapy Hair Repair Oil",
    category: "Hair Care",
    price: 28.00,
    originalPrice: null,
    rating: 4.5,
    reviewsCount: 67,
    image: skincareDropper, // Reuse high quality image
    tag: "Best Seller",
    description: "Infused with pure Moroccan argan oil and keratin. Smooths frizz, adds mirror-like shine, and repairs split ends without weighing hair down.",
    shades: ["100ml Pump", "50ml Spray"],
    features: ["Frizz Control", "Heat Protection", "Organic Extracts"]
  },
  {
    id: 6,
    name: "Amber Essence Luxurious Spray",
    category: "Fragrances",
    price: 65.00,
    originalPrice: 80.00,
    rating: 4.9,
    reviewsCount: 154,
    image: creamJar, // Reuse high quality image
    tag: "Sale",
    description: "An elegant, long-lasting scent blending warm amber notes with vanilla flower, sweet citrus, and cedarwood undertones. A timeless fragrance signature.",
    shades: ["Eau De Parfum 50ml", "Eau De Parfum 100ml"],
    features: ["Long-lasting 12h", "Artisanal Bottle", "Natural Essential Oils"]
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "10 Skincare Rules to Follow for Glowing Skin",
    excerpt: "Discover the ultimate dermatologist-approved skincare tips to revive dull skin and protect your skin barrier...",
    date: "June 24, 2026",
    author: "Elena R.",
    readTime: "5 min read",
    image: skincareDropper
  },
  {
    id: 2,
    title: "How to Choose the Perfect Eyeshadow Palette",
    excerpt: "Struggling to find the shades that match your eye color? Read our expert makeup guide on color wheels and finishes...",
    date: "June 18, 2026",
    author: "Maya Patel",
    readTime: "4 min read",
    image: eyeshadowPalette
  },
  {
    id: 3,
    title: "The Argan Oil Miracle: Benefits for Dry Hair",
    excerpt: "Learn how incorporating natural oils into your routine can transform frizzy, broken hair into silky smooth locks...",
    date: "June 12, 2026",
    author: "Sophie Chen",
    readTime: "6 min read",
    image: makeupBrushes
  }
];

export const faqData = [
  {
    question: "Are your products cruelty-free and vegan?",
    answer: "Yes! At HouseOf Girls, we are proud to say that all of our products are 100% cruelty-free. A majority of our catalog is also vegan-friendly, which you can verify using the product highlights on each page."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days. We offer free standard shipping on all orders over $50."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee. If you are not completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund. Items must be in their original packaging."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping fees and custom duties are calculated at checkout depending on the shipping destination."
  },
  {
    question: "How do I check my order status?",
    answer: "Once your order is shipped, we will send you a confirmation email containing a tracking link so you can follow its delivery path in real-time."
  }
];
