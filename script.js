/* ==========================================================================
   SMARTCART ENTERPRISE ENGINE (VERIFIED HIGH-RES IMAGE ASSETS & FALLBACKS)
   ========================================================================== */

// Bulletproof CDN fallback image if a network glitch occurs
const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80";

/* --------------------------------------------------------------------------
   1. MASTER CATEGORIES
   -------------------------------------------------------------------------- */
const categories = [
  {
    id: "mens",
    name: "Men's Collection",
    description: "Tailored blazers, casual shirts, jackets, trousers & streetwear essentials.",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "womens",
    name: "Women's Fashion",
    description: "Sundresses, luxury evening gowns, co-ords, linen wear & chic jumpsuits.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kids",
    name: "Kids & Teens",
    description: "Organic cotton dungarees, party frocks, denim sets & casual hoodies.",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "beauty",
    name: "Beauty & Skincare",
    description: "Dermatological serums, French perfumery, clay masks & facial oils.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "footwear",
    name: "Footwear & Sneakers",
    description: "Responsive road runners, Oxford dress brogues & retro lifestyle kicks.",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "electronics",
    name: "Consumer Electronics",
    description: "Spatial audio headphones, portable DACs, smart speakers & ANC earbuds.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "watches",
    name: "Timepieces & Horology",
    description: "Minimalist quartz chronographs, stainless dive watches & AMOLED fitness bands.",
    image: "https://i.pinimg.com/736x/b0/0d/2a/b00d2ad26cd6d8070ac4d7042be31ac4.jpg"
  },
  {
    id: "essentials",
    name: "Fashion Essentials",
    description: "Full-grain leather totes, polarized shades, reversible belts & wallets.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
  }
];

/* --------------------------------------------------------------------------
   2. MASTER PRODUCT DATABASE (7-8 HIGH-RES PRODUCTS PER SECTION)
   -------------------------------------------------------------------------- */
const products = [
  /* ========================================================================
     1. MEN'S COLLECTION (8 ITEMS)
     ======================================================================== */
  {
    id: "men-01",
    name: "Structured Slim-Fit Navy Blazer",
    category: "mens",
    brand: "Heritage Club",
    price: 4499,
    originalPrice: 7999,
    discount: 44,
    rating: 4.8,
    reviewsCount: 164,
    badge: "Trending",
    isFeatured: true,
    images: [
      "https://imagescdn.louisphilippe.com/img/app/product/9/927139-11717726.jpg?auto=format&w=390",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Navy Blue", "Charcoal Gray"],
    sizes: ["38", "40", "42", "44"],
    description: "Tailored two-button modern blazer crafted with a wrinkle-resistant wool blend, double-vented back, and breathable lining.",
    specifications: { "Fit": "Tailored Slim Fit", "Fabric": "70% Wool, 30% Cotton", "Closure": "Dual Button", "Care": "Dry Clean" }
  },
  {
    id: "men-02",
    name: "Textured Oxford Casual Shirt",
    category: "mens",
    brand: "StyleFit",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.6,
    reviewsCount: 92,
    badge: "Everyday Staple",
    isFeatured: false,
    images: [
      "https://stylox.in/cdn/shop/files/1_33c65e41-58b0-4924-898c-4999d015e3bc.jpg?v=1773386398",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Sky Blue", "Clean White"],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic button-down Oxford shirt engineered from pre-washed combed cotton with reinforced seams and rounded hem.",
    specifications: { "Collar": "Button-Down", "Fabric": "100% Combed Cotton", "Weave": "Oxford Weave", "Care": "Machine Wash Warm" }
  },
  {
    id: "men-03",
    name: "Tapered Cotton Chino Trousers",
    category: "mens",
    brand: "StyleFit",
    price: 1899,
    originalPrice: 3299,
    discount: 42,
    rating: 4.7,
    reviewsCount: 110,
    badge: "Hot",
    isFeatured: false,
    images: [
      "https://cdna.lystit.com/1040/1300/n/photos/asos/829187dd/asos-Black-Smart-Cotton-Rich-Tapered-Chino-Trousers.jpeg",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Khaki Tan", "Olive Green"],
    sizes: ["30", "32", "34", "36"],
    description: "Versatile four-pocket chinos featuring a comfortable 2% elastane stretch for all-day freedom of movement.",
    specifications: { "Rise": "Mid Rise", "Material": "98% Cotton, 2% Elastane", "Closure": "Zip Fly with Button", "Care": "Machine Wash" }
  },
  {
    id: "men-04",
    name: "Vintage Sherpa Trucker Denim Jacket",
    category: "mens",
    brand: "Heritage Club",
    price: 3299,
    originalPrice: 5999,
    discount: 45,
    rating: 4.9,
    reviewsCount: 205,
    badge: "Winter Warmth",
    isFeatured: true,
    images: [
      "https://i.ebayimg.com/images/g/AbMAAeSwzZpqwlYJ/s-l1600.webp",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Washed Indigo", "Charcoal Black"],
    sizes: ["M", "L", "XL"],
    description: "Authentic heavyweight cotton denim outerwear jacket with warm faux-sherpa lining and snap-button chest flaps.",
    specifications: { "Lining": "Faux Sherpa Fleece", "Outer": "100% Rigid Cotton Denim", "Fit": "Relaxed Trucker", "Pockets": "4 Exterior" }
  },
  {
    id: "men-05",
    name: "Heavyweight Boxy Graphic Tee",
    category: "mens",
    brand: "StreetCore",
    price: 899,
    originalPrice: 1599,
    discount: 43,
    rating: 4.5,
    reviewsCount: 312,
    badge: "Streetwear",
    isFeatured: false,
    images: [
      "https://th.bing.com/th?id=OPAC.iwv%2f3bRNoDZLtg474C474&w=658&h=658&qlt=100&o=5&dpr=1.3&pid=21.1",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Off-White", "Washed Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description: "240 GSM ultra-heavyweight combed organic cotton t-shirt built with dropped shoulders and ribbed neckband.",
    specifications: { "Weight": "240 GSM", "Material": "100% Combed Cotton", "Cut": "Relaxed Boxy Fit", "Care": "Cold Wash Only" }
  },
  {
    id: "men-06",
    name: "Ribbed Cable-Knit Wool Crewneck",
    category: "mens",
    brand: "Heritage Club",
    price: 2499,
    originalPrice: 4299,
    discount: 41,
    rating: 4.7,
    reviewsCount: 78,
    badge: "Cozy Knit",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Oatmeal Heather", "Forest Pine"],
    sizes: ["M", "L", "XL"],
    description: "Traditional chunky cable-pattern sweater woven with soft merino wool blend for winter insulation without bulk.",
    specifications: { "Material": "80% Merino Wool, 20% Polyamide", "Pattern": "Heritage Cable Weave", "Care": "Hand Wash Flat Dry" }
  },
  {
    id: "men-07",
    name: "Utility Cargo Jogger Pants",
    category: "mens",
    brand: "StreetCore",
    price: 1999,
    originalPrice: 3499,
    discount: 42,
    rating: 4.6,
    reviewsCount: 145,
    badge: "Tactical",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Matte Black", "Desert Khaki"],
    sizes: ["30", "32", "34", "36"],
    description: "Ergonomic ripstop cotton joggers featuring 6 bellowed utility pockets, elasticated ankles, and an interior drawcord.",
    specifications: { "Fabric": "Ripstop Cotton Twill", "Pockets": "6 Tactical Pockets", "Fit": "Tapered Ankle", "Closure": "Elastic Waist + Cord" }
  },
  {
    id: "men-08",
    name: "Classic Biker Leather Jacket",
    category: "mens",
    brand: "StreetCore",
    price: 6999,
    originalPrice: 12999,
    discount: 46,
    rating: 4.9,
    reviewsCount: 88,
    badge: "Collector",
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Ebony Black"],
    sizes: ["38", "40", "42", "44"],
    description: "Asymmetrical zip motorcycle jacket made of supple full-grain sheepskin leather with heavy-duty silver hardware.",
    specifications: { "Leather": "100% Genuine Nappa Leather", "Hardware": "YKK Heavy Silver", "Lining": "Satin Quilted", "Care": "Specialist Leather Clean" }
  },

  /* ========================================================================
     2. WOMEN'S FASHION (8 ITEMS)
     ======================================================================== */
  {
    id: "wom-01",
    name: "Floral Tiered Midi Sundress",
    category: "womens",
    brand: "Aura Studio",
    price: 2499,
    originalPrice: 4499,
    discount: 44,
    rating: 4.9,
    reviewsCount: 230,
    badge: "Bestseller",
    isFeatured: true,
    images: [
      "https://res.cloudinary.com/wolfandbadger/image/upload/f_auto,q_auto:best,c_pad,b_white,h_800,w_800/products/red-midi-sundress-little-red-bows__b88a85a1fc44bcb01db29ddf4fb2550b",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Sunflower Yellow", "Sage Floral"],
    sizes: ["XS", "S", "M", "L"],
    description: "Airy summer midi dress tailored with ruffled tiers, an elasticated smocked bodice, and adjustable shoulder ribbons.",
    specifications: { "Length": "Midi Calf-Length", "Fabric": "100% Breathable Rayon", "Neckline": "Sweetheart", "Care": "Gentle Machine Wash" }
  },
  {
    id: "wom-02",
    name: "Emerald Satin Evening Wrap Gown",
    category: "womens",
    brand: "LuxeVibe",
    price: 4999,
    originalPrice: 8999,
    discount: 44,
    rating: 4.8,
    reviewsCount: 175,
    badge: "Exclusive",
    isFeatured: true,
    images: [
      "https://tse3.mm.bing.net/th/id/OIP.hjZ9NKP6f11cXIkEXoXhCwHaKW?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://i.pinimg.com/originals/f0/85/da/f085da31379b88850af4d19bd6df3918.png"
    ],
    colors: ["Emerald Green", "Ruby Red"],
    sizes: ["S", "M", "L"],
    description: "Luxurious fluid satin wrap dress cut with an asymmetric hemline, flattering waist tie belt, and soft shawl lapels.",
    specifications: { "Material": "Heavyweight Silk Satin", "Sleeve": "Long Fluted", "Fastening": "Side Wrap Self-Tie", "Length": "Maxi Floor Length" }
  },
  {
    id: "wom-03",
    name: "Ribbed Knit Top & Pant Co-Ord Set",
    category: "womens",
    brand: "Aura Studio",
    price: 2899,
    originalPrice: 4299,
    discount: 33,
    rating: 4.7,
    reviewsCount: 88,
    badge: "Trending",
    isFeatured: false,
    images: [
      "https://www.only.in/cdn/shop/files/116897402_g0.jpg?v=1745835695&width=1080",
      "https://beyondpinkshop.com/cdn/shop/files/imgi_75_Gemini_Generated_Image_uhpynouhpynouhpy.png?v=1764272244&width=1445"
    ],
    colors: ["Warm Beige", "Lilac Mist"],
    sizes: ["S", "M", "L"],
    description: "Relaxed two-piece knit lounge ensemble featuring wide-leg flared pants and a dropped-shoulder round-neck pullover top.",
    specifications: { "Includes": "1 Pullover Top, 1 Wide-Leg Pant", "Weave": "Vertical Rib Knit", "Waistband": "High-Rise Elastic" }
  },
  {
    id: "wom-04",
    name: "Double-Breasted Wool Overcoat",
    category: "womens",
    brand: "LuxeVibe",
    price: 5999,
    originalPrice: 10999,
    discount: 45,
    rating: 4.9,
    reviewsCount: 112,
    badge: "High Fashion",
    isFeatured: true,
    images: [
      "https://i.etsystatic.com/6811060/r/il/003284/5457939690/il_1080xN.5457939690_aqp8.jpg",
      "https://dqp736wsu6w3m.cloudfront.net/s3bucket/w1000/looks/3417/charcoal-grey-double-breasted-wool-coat-with-black-trousers.jpg"
    ],
    colors: ["Camel Beige", "Onyx Black"],
    sizes: ["S", "M", "L"],
    description: "Tailored structured wool-cashmere blend trench overcoat featuring tortoiseshell buttons, notched lapels, and sash belt.",
    specifications: { "Material": "80% Wool, 20% Cashmere", "Lining": "Viscose Satin", "Length": "Below the Knee", "Care": "Dry Clean" }
  },
  {
    id: "wom-05",
    name: "Pure Linen Button-Front Midi Dress",
    category: "womens",
    brand: "Aura Studio",
    price: 2199,
    originalPrice: 3999,
    discount: 45,
    rating: 4.6,
    reviewsCount: 140,
    badge: "Organic",
    isFeatured: false,
    images: [
      "https://i.etsystatic.com/11146119/r/il/af22c0/4076478524/il_794xN.4076478524_tlor.jpg",
      "https://i.pinimg.com/originals/68/d4/c1/68d4c1f8860bc42c5d98a870a58d07c8.jpg"
    ],
    colors: ["Terracotta", "Pure White"],
    sizes: ["XS", "S", "M", "L"],
    description: "Relaxed resort wear dress tailored in pre-softened European flax linen with side pockets and wood-finish buttons.",
    specifications: { "Fabric": "100% European Flax Linen", "Pockets": "Two Hidden Side Slits", "Neck": "V-Neck Collar" }
  },
  {
    id: "wom-06",
    name: "Pleated Velvet Cocktail Jumpsuit",
    category: "womens",
    brand: "LuxeVibe",
    price: 3699,
    originalPrice: 6499,
    discount: 43,
    rating: 4.8,
    reviewsCount: 65,
    badge: "Party Edit",
    isFeatured: false,
    images: [
      "https://i5.walmartimages.com/seo/Velvet-Jumpsuits-Women-Elegant-V-Neck-Playsuits-Long-Sleeve-High-Waist-Romper-Velour-Belted-Dungarees-Petite-Overalls-Wedding-Party-Clubbing-Jumpsuit_e3064ccd-44cf-41af-a51c-f2eb34d45828.0518231f457b231469b6207ea6fb7dbf.jpeg",
      "https://www.phase-eight.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-master-Catalog-P8/default/dw7de9afd9/images/221871050/221871050-01-petite-holly-black-velvet-jumpsuit.jpg?sw=1280&sh=1792&strip=false"
    ],
    colors: ["Midnight Sapphire", "Burgundy"],
    sizes: ["S", "M", "L"],
    description: "Flattering wide-leg evening jumpsuit sculpted in plush micro-pleated velvet with a wrap surplice neckline.",
    specifications: { "Fabric": "Plush Stretch Velvet", "Closure": "Concealed Back Zipper", "Fit": "Fitted Bust, Wide Leg" }
  },
  {
    id: "wom-07",
    name: "Classic High-Rise Straight Jeans",
    category: "womens",
    brand: "Aura Studio",
    price: 1799,
    originalPrice: 2999,
    discount: 40,
    rating: 4.7,
    reviewsCount: 198,
    badge: "Denim Fit",
    isFeatured: false,
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.UzmUH4U6jlwwEA-MxjNItgHaJG?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://media-photos.depop.com/b1/14759474/2453494479_614c3c93bff843bf88a594d865abb9fe/P0.jpg"
    ],
    colors: ["Vintage Mid-Blue", "Faded Black"],
    sizes: ["26", "28", "30", "32"],
    description: "Timeless 90s inspired 100% cotton denim cut with an authentic high waistline and clean ankle graze finish.",
    specifications: { "Rise": "11 Inch High Rise", "Fabric": "99% Cotton, 1% Spandex", "Leg": "Straight Leg Ankle Graze" }
  },
  {
    id: "wom-08",
    name: "Bohemian Chiffon Tiered Maxi Skirt",
    category: "womens",
    brand: "Aura Studio",
    price: 1599,
    originalPrice: 2799,
    discount: 42,
    rating: 4.5,
    reviewsCount: 84,
    badge: "Boho Chic",
    isFeatured: false,
    images: [
      "https://mytrendboutique.com/wp-content/uploads/2024/12/0_3_640_N-1-460.webp",
      "https://i.etsystatic.com/21028634/r/il/d05ce4/7005064629/il_1080xN.7005064629_7jze.jpg"
    ],
    colors: ["Dusty Mauve", "Ivory Bloom"],
    sizes: ["S", "M", "L"],
    description: "Flowy printed georgette maxi skirt layered with soft micro-pleating and an elasticated waistband with drawstrings.",
    specifications: { "Material": "Polyester Georgette Chiffon", "Lining": "Opaque Crepe Underlay", "Care": "Hand Wash" }
  },

  /* ========================================================================
     3. KIDS & TEENS (7 ITEMS)
     ======================================================================== */
  {
    id: "kid-01",
    name: "Kids Organic Cotton Dungaree Set",
    category: "kids",
    brand: "TinyNest",
    price: 1299,
    originalPrice: 2199,
    discount: 41,
    rating: 4.8,
    reviewsCount: 140,
    badge: "Soft Touch",
    isFeatured: true,
    images: [
      "https://media.centrepointstores.com/i/centrepoint/DLSD01S26BLACKDARK-DLSD01S26-SS2681225_06-2100.jpg?v=2",
      "https://tse3.mm.bing.net/th/id/OIP.7CEuy7OTSVIrWllBF6RqNwHaHa?r=0&w=4096&h=4096&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    colors: ["Denim Blue", "Caramel Tan"],
    sizes: ["2-3 Yrs", "3-4 Yrs", "4-5 Yrs", "5-6 Yrs"],
    description: "Pure combed organic cotton twill overalls equipped with dual shoulder button locks and an ultra-soft striped inner tee.",
    specifications: { "Fabric": "100% GOTS Cotton", "Includes": "1 Dungaree, 1 T-Shirt", "Safety": "Nickel-Free Snap Buttons" }
  },
  {
    id: "kid-02",
    name: "Little Stars Floral Tulle Party Frock",
    category: "kids",
    brand: "TinyNest",
    price: 1699,
    originalPrice: 2999,
    discount: 43,
    rating: 4.9,
    reviewsCount: 98,
    badge: "Party Wear",
    isFeatured: true,
    images: [
      "https://i.pinimg.com/originals/04/ab/95/04ab95dc6c510327cd58025244fb1e17.jpg",
      "https://5.imimg.com/data5/ECOM/Default/2025/4/505782559/HZ/AR/EY/54512512/whatsapp-image-2024-07-04-at-8-22-07-pm-2-1000x1000.jpg"
    ],
    colors: ["Blush Pink", "Snow White"],
    sizes: ["3-4 Yrs", "4-5 Yrs", "6-7 Yrs", "8-9 Yrs"],
    description: "Multi-layered soft net party frock lined with 100% skin-safe cotton and accented with a satin waist ribbon.",
    specifications: { "Lining": "100% Hypoallergenic Cotton", "Outer Layer": "Soft Micro Tulle", "Back": "Concealed Smooth Zipper" }
  },
  {
    id: "kid-03",
    name: "Junior Fleece Pullover Hoodie",
    category: "kids",
    brand: "TinyNest",
    price: 999,
    originalPrice: 1799,
    discount: 44,
    rating: 4.7,
    reviewsCount: 82,
    badge: "Cozy",
    isFeatured: false,
    images: [
      "https://i5.walmartimages.com/seo/MAIHAN-Girls-Heart-Print-Fleece-Hoodie-Soft-Lined-Pullover-Allover-Pattern-Toddler-Girls-Winter-Sherpa-Lined-Hoodie-Kid-s-Fleece-Pullover-Hooded-Swea_ff6276b0-23f9-4e52-b71a-6c5d7ac2fe4a.2cb76f1c2e02d42c6d27d21f761150f7.jpeg",
      "https://m.media-amazon.com/images/I/61xavVQ5gCL._AC_UY1000_.jpg"
    ],
    colors: ["Heather Gray", "Teal Blue"],
    sizes: ["4-5 Yrs", "6-7 Yrs", "8-9 Yrs", "10-11 Yrs"],
    description: "Thick brushed fleece hoodie featuring a front kangaroo pocket and stretchy ribbed cuffs for playground comfort.",
    specifications: { "Material": "80% Cotton, 20% Polyester Fleece", "Hood": "Double-Layer Lined", "Care": "Machine Washable" }
  },
  {
    id: "kid-04",
    name: "Everyday Stretch Denim Jeans",
    category: "kids",
    brand: "TinyNest",
    price: 1099,
    originalPrice: 1899,
    discount: 42,
    rating: 4.6,
    reviewsCount: 115,
    badge: "Durable",
    isFeatured: false,
    images: [
      "https://tse2.mm.bing.net/th/id/OIP.COU8ZuNWX9Cf2iHg9a023QHaHa?r=0&w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://assets.target.com.au/m/53f7f15d2cdeee99/webimage-340_67388257_27-22D60B.png"
    ],
    colors: ["Classic Medium Wash"],
    sizes: ["4-5 Yrs", "6-7 Yrs", "8-9 Yrs", "10-12 Yrs"],
    description: "Reinforced knee construction with interior button-elastic adjustable waistbands that grow with your child.",
    specifications: { "Waist": "Internal Adjustable Elastic", "Denim": "98% Cotton, 2% Stretch", "Rivets": "Safe Flat-Pressed" }
  },
  {
    id: "kid-05",
    name: "3-Pack Organic Cotton Rompers",
    category: "kids",
    brand: "TinyNest",
    price: 1399,
    originalPrice: 2299,
    discount: 39,
    rating: 4.9,
    reviewsCount: 180,
    badge: "Baby Essential",
    isFeatured: false,
    images: [
      "https://assets.digitalcontent.marksandspencer.app/image/upload/w_600,h_780,q_auto,f_auto,e_sharpen/SD_04_T92_6390S_SP_X_EC_0",
      "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AM3912s.jpg?im=Resize,width=750"
    ],
    colors: ["Pastel Mix (Yellow, Mint, Sky)"],
    sizes: ["0-3 Mos", "3-6 Mos", "6-12 Mos", "12-18 Mos"],
    description: "Ultra-fine combed organic cotton infant bodysuits featuring expandable lap shoulders and non-pinch leg openings.",
    specifications: { "Pack Includes": "3 Unique Printed Rompers", "Cotton": "100% Certified Organic", "Fastener": "Crotch Poppers" }
  },
  {
    id: "kid-06",
    name: "Colorblocked Sports Windbreaker",
    category: "kids",
    brand: "TinyNest",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.7,
    reviewsCount: 67,
    badge: "Active",
    isFeatured: false,
    images: [
      "https://down-sg.img.susercontent.com/file/cn-11134207-7ras8-mblui512si8da0",
      "https://media.kohlsimg.com/is/image/kohls/7487815_Frost_Wind?wid=1000&hei=1000&op_sharpen=1"
    ],
    colors: ["Cobalt & Neon Coral"],
    sizes: ["5-6 Yrs", "7-8 Yrs", "9-10 Yrs", "11-12 Yrs"],
    description: "Water-resistant lightweight micro-ripstop shell jacket with reflective safety strips and a mesh interior lining.",
    specifications: { "Weatherproofing": "DWR Water Resistant", "Safety": "Reflective 3M Trims", "Closure": "Zip with Chin Guard" }
  },
  {
    id: "kid-07",
    name: "Summer Graphic Cotton Tee & Shorts",
    category: "kids",
    brand: "TinyNest",
    price: 899,
    originalPrice: 1599,
    discount: 43,
    rating: 4.5,
    reviewsCount: 95,
    badge: "Summer Set",
    isFeatured: false,
    images: [
      "https://cdn.dsmcdn.com/ty1754/prod/QC_ENRICHMENT/20250916/17/3d4e7f9d-8d21-348b-a9de-14cd0f3736be/1_org_zoom.jpg",
      "https://i.pinimg.com/originals/5c/4a/20/5c4a20987ddd502b329d9eece356dc62.jpg"
    ],
    colors: ["Surf Blue & Gray"],
    sizes: ["3-4 Yrs", "5-6 Yrs", "7-8 Yrs"],
    description: "Breathable jersey knit t-shirt paired with matching drawstring french terry shorts for active summer days.",
    specifications: { "Material": "100% Pure Bio-Washed Cotton", "Set": "1 T-Shirt, 1 Elastic Short", "Care": "Machine Wash" }
  },

  /* ========================================================================
     4. BEAUTY & SKINCARE (8 ITEMS)
     ======================================================================== */
  {
    id: "bea-01",
    name: "Botanical Glow Vitamin C Radiance Serum",
    category: "beauty",
    brand: "DermaBotanics",
    price: 899,
    originalPrice: 1599,
    discount: 44,
    rating: 4.8,
    reviewsCount: 380,
    badge: "Derm Approved",
    isFeatured: true,
    images: [
      "https://cdn.shopify.com/s/files/1/0668/0022/2505/files/skin1004-cream-tea-trica-b5-cream-1125798218_1440x_a4c74f52-9c4f-495d-a4ff-60a464925f07.webp?v=1755088194&width=960&height=1120&crop=center",
      "https://images-na.ssl-images-amazon.com/images/I/61cfF8ghMFL.jpg"
    ],
    colors: ["Clear Amber Dropper"],
    sizes: ["30 ml", "50 ml"],
    description: "Potent 15% Ethyl Ascorbic Acid infused with Ferulic Acid and Hyaluronic Acid to brighten uneven pigmentation and boost collagen synthesis.",
    specifications: { "Active Formula": "15% Vitamin C + Ferulic", "Skin Types": "All Skin Types", "Certification": "Cruelty-Free, Paraben-Free" }
  },
  {
    id: "bea-02",
    name: "Nocturne Eau De Parfum 100ml",
    category: "beauty",
    brand: "Maison Scent",
    price: 3499,
    originalPrice: 5999,
    discount: 42,
    rating: 4.9,
    reviewsCount: 210,
    badge: "Luxury",
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Smoked Amber Glass"],
    sizes: ["100 ml EDP"],
    description: "An intoxicating blend of Madagascar vanilla, smoked cedarwood, bergamot top notes, and pink pepper base notes that lasts over 12 hours.",
    specifications: { "Concentration": "20% Eau De Parfum", "Top Notes": "Bergamot, Cardamom", "Base Notes": "Bourbon Vanilla, Tonka Bean" }
  },
  {
    id: "bea-03",
    name: "Ceramide Barrier Hydrating Face Elixir",
    category: "beauty",
    brand: "DermaBotanics",
    price: 1199,
    originalPrice: 1999,
    discount: 40,
    rating: 4.7,
    reviewsCount: 165,
    badge: "Clean Beauty",
    isFeatured: false,
    images: [
      "https://feel22.com/cdn/shop/files/3_de78f442-f4c8-49e8-81f7-d61b6e3d268e.png?v=1704447134&width=720",
      "https://static.wixstatic.com/media/b23115_835328ec41a9462bbbdd53b2aa21b254~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b23115_835328ec41a9462bbbdd53b2aa21b254~mv2.jpg"
    ],
    colors: ["Frosted Dropper"],
    sizes: ["50 ml"],
    description: "Non-greasy squalane and 5-ceramide complex oil designed to restore skin barrier health and lock in moisture.",
    specifications: { "Ingredients": "Ceramides 1, 3, 6-II, Squalane", "Texture": "Weightless Oil", "Fragrance": "100% Fragrance-Free" }
  },
  {
    id: "bea-04",
    name: "Velvet Matte Moisture Lipstick",
    category: "beauty",
    brand: "LuxeVibe",
    price: 699,
    originalPrice: 1199,
    discount: 41,
    rating: 4.6,
    reviewsCount: 240,
    badge: "Longwear",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
      "https://images-static.nykaa.com/media/catalog/product/e/d/edd8d95SWIAC00000310_9.jpg"
    ],
    colors: ["Crimson Red", "Berry Bloom", "Nude Mocha"],
    sizes: ["4.2g Bullet"],
    description: "Highly pigmented waterproof bullet lipstick formulated with shea butter and jojoba oil to keep lips supple for 10 hours.",
    specifications: { "Finish": "Non-Drying Soft Matte", "Wear Time": "10 Hours Transfer-Resistant", "Enrichment": "Vitamin E & Shea Butter" }
  },
  {
    id: "bea-05",
    name: "Australian Pink Clay Purifying Detox Mask",
    category: "beauty",
    brand: "DermaBotanics",
    price: 999,
    originalPrice: 1799,
    discount: 44,
    rating: 4.8,
    reviewsCount: 192,
    badge: "Detox",
    isFeatured: false,
    images: [
      "https://m.media-amazon.com/images/I/71X7M0wP+HL._AC_SL1500_.jpg",
      "https://us.sandandsky.com/cdn/shop/files/SS_WEB_APC_MASKBESTIES_3_2795906f-c422-4172-a836-50c41c32bde1_614x614_crop_center.jpg?v=1754373831"
    ],
    colors: ["Blush Jar"],
    sizes: ["100g"],
    description: "Gentle mineral kaolin clay mask that decongests enlarged pores and sweeps away dead skin cells in 10 minutes.",
    specifications: { "Key Mineral": "Australian Pink Kaolin Clay", "Includes": "Free Soft Application Brush", "Volume": "100 Grams" }
  },
  {
    id: "bea-06",
    name: "Deep Moisture Hydro-Gel Overnight Cream",
    category: "beauty",
    brand: "DermaBotanics",
    price: 1099,
    originalPrice: 1899,
    discount: 42,
    rating: 4.7,
    reviewsCount: 145,
    badge: "Night Repair",
    isFeatured: false,
    images: [
      "https://images.ctfassets.net/bcjr30vxh6td/1kg5T47YSwLUMAt10ezXuK/9969cff46550eca4247f90e9604e1a93/6806482-mod2-20250220.webp",
      "https://cdn.notinoimg.com/detail_main_lq/youth_to_the_people/810834030131_05/adaptogen-deep-moisture-cream___250411.jpg"
    ],
    colors: ["Ocean Blue Gel"],
    sizes: ["50g Jar"],
    description: "Quenching water-based sleeping mask infused with polyglutamic acid and aloe vera leaf water for plump skin by morning.",
    specifications: { "Key Humectant": "Multi-Molecular Hyaluronic Acid", "Formula": "Non-Comedogenic Gel", "Size": "50 ml Glass Tub" }
  },
  {
    id: "bea-07",
    name: "Centella Soothing Mineral Sunscreen SPF 50+",
    category: "beauty",
    brand: "DermaBotanics",
    price: 799,
    originalPrice: 1399,
    discount: 43,
    rating: 4.9,
    reviewsCount: 310,
    badge: "Zero Whitecast",
    isFeatured: false,
    images: [
      "https://down-id.img.susercontent.com/file/id-11134207-7ra0r-mds3azehdkujd6",
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/04/201/XXL_p0171820104.jpg"
    ],
    colors: ["White Tube"],
    sizes: ["50 ml"],
    description: "Broad-spectrum PA++++ physical sun fluid enriched with Cica extract to calm irritation without leaving any chalky residue.",
    specifications: { "SPF Rating": "SPF 50+ PA++++", "Filter": "Non-Nano Zinc Oxide", "Finish": "Dewy Non-Greasy" }
  },
  {
    id: "bea-08",
    name: "Pure Cold-Pressed Moroccan Argan Oil",
    category: "beauty",
    brand: "Maison Scent",
    price: 1299,
    originalPrice: 2199,
    discount: 41,
    rating: 4.8,
    reviewsCount: 110,
    badge: "100% Pure",
    isFeatured: false,
    images: [
      "https://www.tealandterra.com/cdn/shop/products/moroccan-argan-oil-cold-pressed-30ml-beauty-teal-and-terra-332838_1024x1024.jpg?v=1624995730",
      "https://tse4.mm.bing.net/th/id/OIP.bHbDOFIxAyn37wehLOJCxgHaId?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    colors: ["Golden Pipette Dropper"],
    sizes: ["100 ml"],
    description: "Single-origin virgin argan kernel oil for smoothing frizz, strengthening dry nail cuticles, and restoring hair softness.",
    specifications: { "Origin": "Southwestern Morocco", "Processing": "First Cold Pressed", "Usage": "Hair, Face & Cuticles" }
  },

  /* ========================================================================
     5. FOOTWEAR & SNEAKERS (8 ITEMS)
     ======================================================================== */
  {
    id: "ftw-01",
    name: "Velocity Nitro Runner Shoes",
    category: "footwear",
    brand: "AeroSport",
    price: 3499,
    originalPrice: 5999,
    discount: 41,
    rating: 4.8,
    reviewsCount: 215,
    badge: "Trending",
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Ignite Red", "Phantom Black"],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    description: "Ultralight aerodynamic road running shoe featuring responsive supercritical foam midsole cushioning and an engineered breathable mesh.",
    specifications: { "Upper": "Engineered Breathable Mesh", "Sole": "Supercritical Nitrogen Foam", "Weight": "218 grams", "Drop": "8mm" }
  },
  {
    id: "ftw-02",
    name: "Handcrafted Italian Leather Oxford Brogues",
    category: "footwear",
    brand: "Heritage Club",
    price: 4999,
    originalPrice: 8999,
    discount: 44,
    rating: 4.9,
    reviewsCount: 130,
    badge: "Handcrafted",
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Chestnut Brown", "Classic Black"],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    description: "Goodyear welted formal wingtip brogues built with full-grain calfskin leather, leather stacked heels, and memory foam insoles.",
    specifications: { "Construction": "Goodyear Welted", "Leather": "Top-Grain Italian Calfskin", "Sole": "Reinforced Oak Leather" }
  },
  {
    id: "ftw-03",
    name: "Retro Court Low-Top Clean White Sneakers",
    category: "footwear",
    brand: "StreetCore",
    price: 2299,
    originalPrice: 3999,
    discount: 42,
    rating: 4.7,
    reviewsCount: 320,
    badge: "Everyday Staple",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Triple White", "White / Navy Heel"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    description: "Minimalist cupsole lifestyle sneakers constructed with smooth Nappa leather and padded ankle collars for daily rotation.",
    specifications: { "Upper": "Smooth Genuine Nappa Leather", "Outsole": "Vulcanized Rubber Cupsole", "Insole": "OrthoLite Foam" }
  },
  {
    id: "ftw-04",
    name: "All-Terrain Rugged Trail Hiking Boots",
    category: "footwear",
    brand: "AeroSport",
    price: 4299,
    originalPrice: 7499,
    discount: 43,
    rating: 4.8,
    reviewsCount: 164,
    badge: "Waterproof",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
      "https://img.freepik.com/premium-photo/hiking-boots-resting-rocky-terrain_1115439-10056.jpg"
    ],
    colors: ["Earth Brown & Orange"],
    sizes: ["UK 8", "UK 9", "UK 10", "UK 11"],
    description: "Waterproof ankle hiking boots equipped with deep 5mm Vibram traction lugs and an EVA impact-absorbing midsole.",
    specifications: { "Waterproofing": "HydroShield Membrane", "Outsole": "Vibram High-Grip Rubber", "Ankle Support": "Padded Ergonomic Collar" }
  },
  {
    id: "ftw-05",
    name: "Air-Striders Knit Slip-On Walking Shoes",
    category: "footwear",
    brand: "AeroSport",
    price: 1799,
    originalPrice: 2999,
    discount: 40,
    rating: 4.6,
    reviewsCount: 180,
    badge: "Ultra-Light",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Heather Charcoal", "Dusty Pink"],
    sizes: ["UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
    description: "Featherweight sock-like engineered knit upper with a flexible grooved phylon sole designed for high step-count commutes.",
    specifications: { "Upper": "Seamless Elastic Flyknit", "Weight": "165 grams per shoe", "Closure": "Laceless Slip-On" }
  },
  {
    id: "ftw-06",
    name: "Chelsea Waxed Suede Ankle Boots",
    category: "footwear",
    brand: "Heritage Club",
    price: 3899,
    originalPrice: 6999,
    discount: 44,
    rating: 4.8,
    reviewsCount: 140,
    badge: "Classic",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Smoked Taupe Suede", "Black Leather"],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    description: "Iconic pull-on Chelsea boots built with treated weather-resistant split suede and dual high-tension elastic gussets.",
    specifications: { "Material": "Weather-Treated Split Suede", "Gusset": "Heavy-Duty Elastic Weave", "Sole": "Durable Crepe Rubber" }
  },
  {
    id: "ftw-07",
    name: "Cushioned EVA Pool & Beach Slides",
    category: "footwear",
    brand: "StreetCore",
    price: 699,
    originalPrice: 1299,
    discount: 46,
    rating: 4.5,
    reviewsCount: 410,
    badge: "Cloud Comfort",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Bone Cream", "Matte Black", "Sage"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    description: "4cm thick pillowy molded EVA recovery slides designed to soothe fatigued feet after workouts or pool sessions.",
    specifications: { "Material": "One-Piece Molded EVA Foam", "Platform Height": "4 cm Arch Support", "Water Resistance": "100% Quick-Dry" }
  },
  {
    id: "ftw-08",
    name: "Classic High-Top Suede Skate Sneakers",
    category: "footwear",
    brand: "StreetCore",
    price: 2799,
    originalPrice: 4899,
    discount: 43,
    rating: 4.7,
    reviewsCount: 185,
    badge: "Skate Ready",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Black / White Stripe", "Rust Red"],
    sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
    description: "Heavy canvas and suede reinforced high-top shoes featuring signature gum waffle outsoles and padded collars.",
    specifications: { "Upper": "Heavy Canvas + Suede Toe Cap", "Outsole": "Vulcanized Gum Waffle", "Collar": "Padded Ankle Support" }
  },

  /* ========================================================================
     6. CONSUMER ELECTRONICS (8 ITEMS)
     ======================================================================== */
  {
    id: "elec-01",
    name: "Acoustic Pro Studio Headphones",
    category: "electronics",
    brand: "SoundWave",
    price: 4999,
    originalPrice: 8999,
    discount: 44,
    rating: 4.9,
    reviewsCount: 382,
    badge: "Best Seller",
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Matte Black", "Silver Frost"],
    sizes: ["Standard"],
    description: "Flagship wireless active noise-cancelling headphones equipped with custom 40mm beryllium drivers and spatial audio.",
    specifications: { "Driver": "40mm Dynamic Driver", "Battery": "Up to 32 Hours", "Connectivity": "Bluetooth 5.3 + Aux", "ANC": "Hybrid ANC" }
  },
  {
    id: "elec-02",
    name: "SonicPod True Wireless ANC Earbuds",
    category: "electronics",
    brand: "SoundWave",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.8,
    reviewsCount: 512,
    badge: "Top Rated",
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "https://tse2.mm.bing.net/th/id/OIP.rzgBp4irNPOoM9L0Le4ZgAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    colors: ["Ceramic White", "Midnight Navy"],
    sizes: ["In-Ear (S/M/L Tips)"],
    description: "Compact wireless earbuds with 35dB active noise cancellation, quad-mic ENC for crystal calls, and wireless charging case.",
    specifications: { "Playtime": "8 Hours (30 Hours with Case)", "Drivers": "10mm Graphene", "Water Resistance": "IPX5 Splashproof" }
  },
  {
    id: "elec-03",
    name: "SoundPulse 360° Waterproof Bluetooth Speaker",
    category: "electronics",
    brand: "SoundWave",
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    rating: 4.7,
    reviewsCount: 290,
    badge: "IPX7 Rugged",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
      "https://p.globalsources.com/IMAGES/PDT/B1185990139/Bluetooth-Speaker.png"
    ],
    colors: ["Forest Green", "Stealth Black"],
    sizes: ["24W Output"],
    description: "Rugged omnidirectional wireless speaker packed with dual passive bass radiators and an IPX7 submersible housing.",
    specifications: { "Power Output": "24 Watts RMS", "Battery": "16 Hours Playback", "Waterproofing": "IPX7 Submersible", "Pairing": "TWS Stereo Link" }
  },
  {
    id: "elec-04",
    name: "UltraView 4K 60FPS Streaming Webcam",
    category: "electronics",
    brand: "OptixPro",
    price: 3799,
    originalPrice: 6299,
    discount: 40,
    rating: 4.6,
    reviewsCount: 140,
    badge: "Pro Work",
    isFeatured: false,
    images: [
      "https://altex.com/cdn/shop/files/emeet-ems60u-ld-smartcam-s600-uhd-4k-60fps-streaming-webcam-with-fast-autofocus-usb-c-749680.jpg?v=1733276426",
      "https://m.media-amazon.com/images/I/61C+fMO+tRL._AC_.jpg"
    ],
    colors: ["Matte Black"],
    sizes: ["Standard Monitor Mount"],
    description: "Professional glass-lens webcam offering dual stereo noise-cancelling mics, autofocus tracking, and magnetic privacy cover.",
    specifications: { "Resolution": "4K Ultra HD @ 30FPS / 1080P @ 60FPS", "Sensor": "Sony Starvis CMOS", "Field of View": "90° Diagonal" }
  },
  {
    id: "elec-05",
    name: "HyperCharge 65W GaN Fast Charger",
    category: "electronics",
    brand: "OptixPro",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.9,
    reviewsCount: 430,
    badge: "GaN Fast",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://assets.kmart.com.au/transform/75534c9a-2d30-4be4-8e4e-e4a0e05bdae7/110128446-5?io=transform:fit,width:3840,height:4800&quality=90"
    ],
    colors: ["Piano White", "Space Gray"],
    sizes: ["3-Port (2C + 1A)"],
    description: "Compact Gallium Nitride wall adapter capable of charging laptops, phones, and tablets simultaneously at maximum speed.",
    specifications: { "Max Output": "65W Power Delivery", "Technology": "GaN III Semiconductor", "Ports": "2x USB-C, 1x USB-A" }
  },
  {
    id: "elec-06",
    name: "MagSafe 10000mAh Magnetic Power Bank",
    category: "electronics",
    brand: "OptixPro",
    price: 1999,
    originalPrice: 3499,
    discount: 43,
    rating: 4.8,
    reviewsCount: 220,
    badge: "Wireless",
    isFeatured: false,
    images: [
      "https://m.media-amazon.com/images/I/61Kwk8-XPKL._AC_.jpg",
      "https://img.lazcdn.com/g/p/b7662d8c3b5b565af0a6796c9eba8973.jpg_720x720q80.jpg"
    ],
    colors: ["Titanium Gray", "Sky Blue"],
    sizes: ["10000 mAh"],
    description: "Snap-on magnetic battery pack equipped with 15W fast wireless induction and a fold-out metal kickstand for hands-free viewing.",
    specifications: { "Capacity": "10,000 mAh Li-Polymer", "Wireless Charging": "15W Max Qi/MagSafe", "Wired Output": "20W PD USB-C" }
  },
  {
    id: "elec-07",
    name: "RGB Mechanical Gaming Keyboard",
    category: "electronics",
    brand: "OptixPro",
    price: 3299,
    originalPrice: 5499,
    discount: 40,
    rating: 4.7,
    reviewsCount: 310,
    badge: "Hot Swappable",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
      "https://www.howtogeek.com/wp-content/uploads/2022/04/rgb-lit-gaming-mechanical-keyboard.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1"
    ],
    colors: ["Retro Chalk", "Stealth Dark"],
    sizes: ["75% Layout"],
    description: "Compact 75% hot-swappable keyboard with pre-lubricated linear switches, sound-dampening foam, and multi-device Bluetooth.",
    specifications: { "Switches": "Pre-Lubed Red Linears", "Connectivity": "Tri-Mode (BT / 2.4G / Type-C)", "Keycaps": "Double-Shot PBT" }
  },
  {
    id: "elec-08",
    name: "StudioCard USB-C High-Res Audio DAC",
    category: "electronics",
    brand: "SoundWave",
    price: 1699,
    originalPrice: 2899,
    discount: 41,
    rating: 4.9,
    reviewsCount: 95,
    badge: "Audiophile",
    isFeatured: false,
    images: [
      "https://m.media-amazon.com/images/I/41inmmMXPOL._SL500_.jpg",
      "https://tse2.mm.bing.net/th/id/OIP.t_DzG4A-24DpXXnfR6bsFwHaHT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    colors: ["Anodized Silver"],
    sizes: ["Dongle DAC"],
    description: "Portable 32-bit/384kHz headphone amplifier dongle engineered with an ESS Sabre chip to drive high-impedance headphones.",
    specifications: { "Chipset": "ESS Sabre 9281C PRO", "Decoding": "PCM 32-Bit/384kHz, DSD128", "Output Jack": "3.5mm Gold-Plated" }
  },

  /* ========================================================================
     7. TIMEPIECES & HOROLOGY (8 ITEMS)
     ======================================================================== */
  {
    id: "wat-01",
    name: "Chronos Minimalist Quartz Watch",
    category: "watches",
    brand: "Horology Co",
    price: 7499,
    originalPrice: 11999,
    discount: 37,
    rating: 4.7,
    reviewsCount: 148,
    badge: "Handcrafted",
    isFeatured: true,
    images: [
      "https://i.pinimg.com/736x/b0/0d/2a/b00d2ad26cd6d8070ac4d7042be31ac4.jpg",
      "https://i.ebayimg.com/images/g/neoAAeSwpRNpaPYS/s-l400.jpg"
    ],
    colors: ["Classic Silver", "Rose Gold"],
    sizes: ["40mm Dial"],
    description: "Sleek Scandinavian timepiece featuring genuine Italian full-grain leather straps, sapphire crystal glass, and stainless steel case.",
    specifications: { "Movement": "Japanese Quartz Caliber", "Glass": "Sapphire Crystal", "Water Resistance": "5 ATM (50 Meters)" }
  },
  {
    id: "wat-02",
    name: "Titan Smart AMOLED Fitness Watch",
    category: "watches",
    brand: "SoundWave",
    price: 3299,
    originalPrice: 6999,
    discount: 52,
    rating: 4.5,
    reviewsCount: 520,
    badge: "Sale",
    isFeatured: true,
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.JVl0mFIyVichO6-tXNDMWgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://www.titanwatches.sg/cdn/shop/files/90188AP05_1_05e75dc1-4f5a-4e86-9745-6d054f20844a.jpg?v=1718101827"
    ],
    colors: ["Carbon Black", "Alpine Green"],
    sizes: ["1.78 Inch AMOLED"],
    description: "Next-gen sports smartwatch offering high-definition always-on AMOLED display, optical heart rate and SpO2 tracking, and 14-day battery life.",
    specifications: { "Display": "1.78\" AMOLED Always-On", "Sensors": "Heart Rate, SpO2, Sleep", "Battery": "14 Days Typical Use" }
  },
  {
    id: "wat-03",
    name: "DeepSea Automatic Diver's Watch 200M",
    category: "watches",
    brand: "Horology Co",
    price: 11499,
    originalPrice: 18999,
    discount: 39,
    rating: 4.9,
    reviewsCount: 88,
    badge: "Automatic",
    isFeatured: true,
    images: [
      "https://media.rolex.com/image/upload/q_auto:best/f_auto/c_limit,w_1920/v1712065100/rolexcom/collection/family-pages/professional-watches/rolex-deepsea/navigation/professional-watches-rolex-deepsea-landing-navigation-m136660-0005-2403bh-0002.jpg",
      "https://techwriteredc.com/wp-content/uploads/2022/07/addiesdive0homage-seiko-williard.jpg"
    ],
    colors: ["Ceramic Blue Bezel", "Classic Black"],
    sizes: ["42mm Case"],
    description: "Heavy-duty diver's watch featuring a 24-jewel self-winding mechanical movement, unidirectional ceramic bezel, and screw-down crown.",
    specifications: { "Movement": "NH35 Automatic 24-Jewel", "Water Resistance": "20 ATM / 200 Meters", "Bezel": "120-Click Ceramic" }
  },
  {
    id: "wat-04",
    name: "Heritage Aviation Chronograph Watch",
    category: "watches",
    brand: "Horology Co",
    price: 8999,
    originalPrice: 14999,
    discount: 40,
    rating: 4.8,
    reviewsCount: 104,
    badge: "Pilot Edition",
    isFeatured: false,
    images: [
      "https://privateedition.co.za/wp-content/uploads/2017/04/Image.1486988324814.jpg",
      "https://static.bangkokpost.com/media/content/20201023/c1_2007011_201023104356_1200.jpg"
    ],
    colors: ["Smoked Tobacco Leather"],
    sizes: ["43mm Case"],
    description: "Vintage pilot dial equipped with a precision 1/10-second stopwatch subdial and high-luminescence hands for nighttime legibility.",
    specifications: { "Complication": "Triple Subdial Chronograph", "Strap": "Oiled Riveted Cowhide", "Lume": "Swiss Super-LumiNova BGW9" }
  },
  {
    id: "wat-05",
    name: "Mesh Milanese Ultra-Thin Dress Watch",
    category: "watches",
    brand: "Horology Co",
    price: 4599,
    originalPrice: 7999,
    discount: 42,
    rating: 4.6,
    reviewsCount: 160,
    badge: "Slim Profile",
    isFeatured: false,
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.CSPnwwurpTP3pQr8eAhjaQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://es.digitbands.com/cdn/shop/files/bef07915118b02e5ad8194b8ed11b310.jpg?v=1740622540"
    ],
    colors: ["Rose Gold Mesh", "Silver Mesh"],
    sizes: ["36mm Dial (6mm Slim)"],
    description: "Whisper-thin 6mm case with a magnetic Milanese stainless weave band tailored for formal cocktail attire and weddings.",
    specifications: { "Thickness": "6.2 mm Slimline", "Band": "Magnetic Milanese Loop", "Glass": "Hardened Mineral Crystal" }
  },
  {
    id: "wat-06",
    name: "Tactical Solar Digital Sports Watch",
    category: "watches",
    brand: "AeroSport",
    price: 2699,
    originalPrice: 4499,
    discount: 40,
    rating: 4.8,
    reviewsCount: 310,
    badge: "Solar Powered",
    isFeatured: false,
    images: [
      "https://anix.lk/wp-content/uploads/2020/07/anix.lk_.skmeib4831.png",
      "https://juhi.co.uk/wp-content/uploads/2023/07/Skmei-Led-Light-Display-Chrono-Digital-Sport-Watches-Mens-10bar-Top-Waterproof-Wristwatch-10-Year-Battery-3.jpg"
    ],
    colors: ["Matte Olive", "Stealth Black"],
    sizes: ["Shock Case"],
    description: "Virtually indestructible shock-resistant resin digital watch powered by indoor and solar light with 100-hour countdown timers.",
    specifications: { "Power": "Solar Rechargeable Cell", "Shock Rating": "Military Grade MIL-STD", "Features": "World Time 48 Cities" }
  },
  {
    id: "wat-07",
    name: "Open-Heart Automatic Exhibition Watch",
    category: "watches",
    brand: "Horology Co",
    price: 13999,
    originalPrice: 22999,
    discount: 39,
    rating: 4.9,
    reviewsCount: 72,
    badge: "Skeleton",
    isFeatured: false,
    images: [
      "https://tse2.mm.bing.net/th/id/OIP.bYkelWubKuFzli7A4igNLQHaI4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      "https://tse3.mm.bing.net/th/id/OIP.s-7JLnmQVpoI5mSijvd4JwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    colors: ["Gunmetal & Gold Balance"],
    sizes: ["41mm Dial"],
    description: "Captivating open-heart dial revealing the oscillating balance wheel through a front and exhibition glass caseback.",
    specifications: { "Jewels": "21 Synthetic Rubies", "Caseback": "Exhibition Mineral Window", "Band": "Solid Stainless Steel Link" }
  },
  {
    id: "wat-08",
    name: "ActivePro GPS Smart Running Watch",
    category: "watches",
    brand: "AeroSport",
    price: 5499,
    originalPrice: 9999,
    discount: 45,
    rating: 4.7,
    reviewsCount: 190,
    badge: "Built-In GPS",
    isFeatured: false,
    images: [
      "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/W29790s6.jpg?im=Resize,width=750",
      "https://tse3.mm.bing.net/th/id/OIP.Fkbp9mL1Ogg1cmGj8nF4QwHaHZ?r=0&w=720&h=719&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    colors: ["Slate Black & Lime Band"],
    sizes: ["1.4 Inch Transflective"],
    description: "Dedicated athletic training watch featuring dual-satellite GPS tracking, VO2 max metrics, and onboard training recovery advice.",
    specifications: { "Navigation": "Independent GPS / GLONASS", "Screen": "Sunlight-Readable Memory-in-Pixel", "Water Resistance": "50m Swimming" }
  },

  /* ========================================================================
     8. FASHION ESSENTIALS (8 ITEMS)
     ======================================================================== */
  {
    id: "ess-01",
    name: "Handcrafted Full-Grain Leather Tote",
    category: "essentials",
    brand: "Artisan Guild",
    price: 3799,
    originalPrice: 6499,
    discount: 42,
    rating: 4.9,
    reviewsCount: 220,
    badge: "Handmade",
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Cognac Brown", "Ebony Black"],
    sizes: ["Fits 15-inch Laptop"],
    description: "Spacious everyday work tote made from vegetable-tanned genuine cowhide with reinforced double straps and antique brass zippers.",
    specifications: { "Material": "100% Vegetable-Tanned Cowhide", "Hardware": "Solid Brushed Brass", "Dimensions": "38cm x 30cm x 12cm" }
  },
  {
    id: "ess-02",
    name: "Classic Reversible Italian Leather Belt",
    category: "essentials",
    brand: "Artisan Guild",
    price: 1199,
    originalPrice: 1999,
    discount: 40,
    rating: 4.7,
    reviewsCount: 130,
    badge: "Value Pick",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
      "https://tse2.mm.bing.net/th/id/OIP.GMuc8pb6pvKi2VV8WaPnDQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    colors: ["Black / Brown Reversible"],
    sizes: ["32", "34", "36", "38", "40"],
    description: "Wardrobe staple featuring a rotatable zinc-alloy buckle that lets you switch between black and saddle brown in one second.",
    specifications: { "Width": "35mm Formal Width", "Material": "Full-Grain Italian Leather", "Buckle": "360° Rotatable Matte Gunmetal" }
  },
  {
    id: "ess-03",
    name: "Aviator Gold Polarized Shades",
    category: "essentials",
    brand: "Lumiere",
    price: 1899,
    originalPrice: 3499,
    discount: 45,
    rating: 4.6,
    reviewsCount: 94,
    badge: "Hot Deal",
    isFeatured: true,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Gold Amber", "Obsidian Black"],
    sizes: ["Medium"],
    description: "Classic teardrop aviator frame built with titanium alloy wire and category 3 polarized lenses offering UV400 radiation protection.",
    specifications: { "Frame": "Ultra-Light Titanium Alloy", "Protection": "100% UV400", "Lenses": "Triacetate Cellulose Polarized" }
  },
  {
    id: "ess-04",
    name: "Heritage Canvas Travel Duffle 35L",
    category: "essentials",
    brand: "Artisan Guild",
    price: 2499,
    originalPrice: 4299,
    discount: 41,
    rating: 4.8,
    reviewsCount: 165,
    badge: "Weekender",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://herschel.ph/cdn/shop/files/1000460569_02.jpg?v=1740031271&width=5000"
    ],
    colors: ["Olive Green", "Charcoal Gray"],
    sizes: ["35 Liters"],
    description: "Rugged 16oz waxed cotton canvas bag featuring dedicated ventilated shoe compartments and brass YKK dual zippers.",
    specifications: { "Capacity": "35 Liters", "Fabric": "16oz Heavy Waxed Canvas", "Hardware": "Solid Antiqued Brass" }
  },
  {
    id: "ess-05",
    name: "RFID-Blocking Slim Bifold Leather Wallet",
    category: "essentials",
    brand: "Artisan Guild",
    price: 999,
    originalPrice: 1799,
    discount: 44,
    rating: 4.8,
    reviewsCount: 280,
    badge: "RFID Safe",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      "https://www.lyh.com.sg/media/catalog/product/cache/081c4aa1a77bded9027d935cbb423118/i/m/images_bh2msc7wgo.jpg"
    ],
    colors: ["Hunter Tan", "Midnight Black"],
    sizes: ["Slim 8-Card"],
    description: "Precision-stitched vegetable-tanned bifold wallet lined with electromagnetic blocking mesh to shield RFID cards from theft.",
    specifications: { "Protection": "13.56 MHz RFID Blocker", "Capacity": "8 Card Slots + Full Cash Billfold", "Thickness": "Only 9mm Empty" }
  },
  {
    id: "ess-06",
    name: "Pure Cashmere Winter Scarf",
    category: "essentials",
    brand: "Heritage Club",
    price: 1899,
    originalPrice: 3299,
    discount: 42,
    rating: 4.9,
    reviewsCount: 110,
    badge: "100% Cashmere",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Camel Beige", "Heather Slate"],
    sizes: ["180cm x 30cm"],
    description: "Spun from combed Inner Mongolian grade-A cashmere fibers with fringed ends to deliver warmth without skin scratchiness.",
    specifications: { "Fiber": "100% Grade-A Pure Cashmere", "Weave": "Twill Weave with Fringe", "Care": "Dry Clean or Gentle Wool Wash" }
  },
  {
    id: "ess-07",
    name: "Tortoise Shell Wayfarer Acetate Sunglasses",
    category: "essentials",
    brand: "Lumiere",
    price: 2199,
    originalPrice: 3899,
    discount: 43,
    rating: 4.7,
    reviewsCount: 140,
    badge: "Hand Polished",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Havana Amber", "Gloss Black"],
    sizes: ["Standard 50mm"],
    description: "Hand-polished cellulose acetate frames with five-barrel hinges and anti-reflective coated bottle-green mineral lenses.",
    specifications: { "Frame": "Cellulose Acetate", "Hinges": "5-Barrel Metal Riveted", "Lens Tint": "Classic G-15 Green UV400" }
  },
  {
    id: "ess-08",
    name: "Minimalist Solid Brass Keyhook & Clip",
    category: "essentials",
    brand: "Artisan Guild",
    price: 599,
    originalPrice: 999,
    discount: 40,
    rating: 4.6,
    reviewsCount: 85,
    badge: "Patina Finish",
    isFeatured: false,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    ],
    colors: ["Raw Brushed Brass"],
    sizes: ["Standard Clip"],
    description: "Machined from solid brass rod with a secure screw-shackle gate designed to develop an authentic golden patina over time.",
    specifications: { "Material": "C3604 Machined Solid Brass", "Gate": "Threaded Hex Shackle", "Weight": "42 grams" }
  }
];

/* --------------------------------------------------------------------------
   3. APPLICATION STATE
   -------------------------------------------------------------------------- */
let activeCategory = "all";
let filteredProductsList = [...products];
let cart = [];
let wishlist = [];
let orders = [];
let couponApplied = null;
let currentCheckoutStep = 1;
let lastBrowsedCategory = "all";

let userProfile = {
  name: "Prathmesh Surwase",
  email: "prathmesh@example.com",
  phone: "9876543210",
  address: "Flat 402, Skyline Residency, Tech Park Road, Bangalore"
};

/* --------------------------------------------------------------------------
   4. TOAST NOTIFICATION ENGINE
   -------------------------------------------------------------------------- */
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icon = type === "success" ? "✓" : (type === "error" ? "⚠" : "ℹ");
  toast.innerHTML = `<span style="font-size:16px;">${icon}</span><span>${message}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}

/* --------------------------------------------------------------------------
   5. LOCALSTORAGE & INITIAL LOAD
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  loadStoredData();
  renderHome();
  updateHeaderCounts();
});

function loadStoredData() {
  try {
    const savedCart = localStorage.getItem("sc_cart");
    if (savedCart) cart = JSON.parse(savedCart);

    const savedWish = localStorage.getItem("sc_wishlist");
    if (savedWish) wishlist = JSON.parse(savedWish);

    const savedOrders = localStorage.getItem("sc_orders");
    if (savedOrders) orders = JSON.parse(savedOrders);

    const savedProfile = localStorage.getItem("sc_profile");
    if (savedProfile) userProfile = JSON.parse(savedProfile);
  } catch (e) {
    console.warn("Storage parsing notice:", e);
  }
}

function persistCart() {
  localStorage.setItem("sc_cart", JSON.stringify(cart));
  updateHeaderCounts();
}

function persistWishlist() {
  localStorage.setItem("sc_wishlist", JSON.stringify(wishlist));
  updateHeaderCounts();
}

function persistOrders() {
  localStorage.setItem("sc_orders", JSON.stringify(orders));
}

function persistProfile() {
  localStorage.setItem("sc_profile", JSON.stringify(userProfile));
}

function updateHeaderCounts() {
  const cartTotal = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const countEl = document.getElementById("cart-count");
  const mCountEl = document.getElementById("mobile-cart-count");
  if (countEl) countEl.textContent = cartTotal;
  if (mCountEl) mCountEl.textContent = cartTotal;

  const wishEl = document.getElementById("wishlist-count");
  const mWishEl = document.getElementById("mobile-wishlist-count");
  if (wishEl) wishEl.textContent = wishlist.length;
  if (mWishEl) mWishEl.textContent = wishlist.length;
}

/* --------------------------------------------------------------------------
   6. NAVIGATION ROUTING
   -------------------------------------------------------------------------- */
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  const target = document.getElementById(`${pageId}-page`);
  if (target) {
    target.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (pageId === "home") renderHome();
  if (pageId === "cart") renderCart();
  if (pageId === "orders") renderOrders();
  if (pageId === "account") loadAccountForm();
  if (pageId === "order") renderCheckoutStep();
}

function toggleSidebar() {
  document.querySelector(".sidebar")?.classList.toggle("active");
  document.querySelector(".sidebar-overlay")?.classList.toggle("active");
}

/* --------------------------------------------------------------------------
   7. HOME PAGE VIEWS
   -------------------------------------------------------------------------- */
function renderHome() {
  const catGrid = document.getElementById("category-grid");
  if (catGrid) {
    catGrid.innerHTML = categories.map(cat => `
      <div class="category-card" onclick="showCategory('${cat.id}')">
        <img src="${cat.image}" alt="${cat.name}" loading="lazy" onerror="this.src='${PLACEHOLDER_IMG}'" />
        <div class="category-card-content">
          <h3>${cat.name}</h3>
          <p>${cat.description}</p>
          <span class="category-link-tag">Browse Collection →</span>
        </div>
      </div>
    `).join("");
  }

  const featGrid = document.getElementById("featured-grid");
  if (featGrid) {
    const featuredItems = products.filter(p => p.isFeatured);
    featGrid.innerHTML = featuredItems.map(p => createProductCardHtml(p)).join("");
  }
}

/* --------------------------------------------------------------------------
   8. CATALOG & PRODUCT CARDS
   -------------------------------------------------------------------------- */
function createProductCardHtml(product) {
  const isWish = wishlist.includes(product.id);
  const price = Number(product.price);
  const origPrice = Number(product.originalPrice);
  const mainImage = product.images?.[0] || product.image || PLACEHOLDER_IMG;

  return `
    <div class="product-card" onclick="showProductDetails('${product.id}')">
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
      <button 
        class="wishlist-toggle ${isWish ? 'active' : ''}" 
        title="Save item" 
        onclick="event.stopPropagation(); toggleWishlist('${product.id}')">
        ${isWish ? '♥' : '♡'}
      </button>

      <div class="product-card-img-wrap">
        <img src="${mainImage}" alt="${product.name}" loading="lazy" onerror="this.src='${PLACEHOLDER_IMG}'" />
      </div>

      <div class="product-card-content">
        <span class="card-brand">${product.brand}</span>
        <h3>${product.name}</h3>
        <div class="card-rating">
          ★ ${product.rating} <span>(${product.reviewsCount || 10})</span>
        </div>
        <div class="card-pricing">
          <span class="price-current">₹${price.toLocaleString()}</span>
          ${origPrice ? `<span class="price-original">₹${origPrice.toLocaleString()}</span>` : ""}
          ${product.discount ? `<span class="price-discount">${product.discount}% OFF</span>` : ""}
        </div>
        <button 
          class="btn-primary" 
          style="width: 100%; margin-top: auto;" 
          onclick="event.stopPropagation(); quickAddToCart('${product.id}')">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

function showCategory(categoryId) {
  activeCategory = categoryId;
  lastBrowsedCategory = categoryId;

  const titleEl = document.getElementById("category-title");
  if (categoryId === "all") {
    filteredProductsList = [...products];
    if (titleEl) titleEl.textContent = "Entire Collection";
  } else {
    filteredProductsList = products.filter(p => p.category === categoryId);
    const catObj = categories.find(c => c.id === categoryId);
    if (titleEl) titleEl.textContent = catObj ? catObj.name : "Products";
  }

  populateFilterBrands();
  applyFilters();
  showPage("category");
}

function populateFilterBrands() {
  const brandSelect = document.getElementById("brand-filter");
  if (!brandSelect) return;
  brandSelect.innerHTML = `<option value="">All Brands</option>`;

  const brands = [...new Set(filteredProductsList.map(p => p.brand).filter(Boolean))];
  brands.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    brandSelect.appendChild(opt);
  });
}

function applyFilters() {
  const sortBy = document.getElementById("sort-by")?.value || "relevance";
  const maxPrice = Number(document.getElementById("price-range")?.value || 15000);
  const selectedBrand = document.getElementById("brand-filter")?.value || "";

  const priceLabel = document.getElementById("price-value");
  if (priceLabel) priceLabel.textContent = `₹${maxPrice.toLocaleString()}`;

  let list = filteredProductsList.filter(p => {
    const fitsPrice = Number(p.price) <= maxPrice;
    const fitsBrand = selectedBrand ? p.brand === selectedBrand : true;
    return fitsPrice && fitsBrand;
  });

  if (sortBy === "price-low") list.sort((a, b) => a.price - b.price);
  if (sortBy === "price-high") list.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") list.sort((a, b) => b.rating - a.rating);

  const grid = document.getElementById("product-grid");
  const meta = document.getElementById("category-meta");
  if (meta) meta.textContent = `Displaying ${list.length} item(s)`;

  if (!grid) return;
  if (list.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--gray-500);">No products match the selected criteria. Try adjusting your filters.</div>`;
    return;
  }

  grid.innerHTML = list.map(p => createProductCardHtml(p)).join("");
}

/* --------------------------------------------------------------------------
   9. INTERACTIVE PRODUCT GALLERY & SINGLE VIEW
   -------------------------------------------------------------------------- */
function showProductDetails(productId) {
  const product = products.find(p => String(p.id) === String(productId));
  if (!product) return;

  const container = document.getElementById("product-detail");
  if (!container) return;

  const images = (product.images && product.images.length) ? product.images : [product.image || PLACEHOLDER_IMG];
  const specs = product.specifications || {};

  const colorsHtml = (product.colors || []).length ? `
    <div class="option-selector">
      <label for="detail-color-select">Color Option</label>
      <select id="detail-color-select">
        ${product.colors.map(c => `<option value="${c}">${c}</option>`).join("")}
      </select>
    </div>
  ` : "";

  const sizesHtml = (product.sizes || []).length ? `
    <div class="option-selector">
      <label for="detail-size-select">Select Size / Fit</label>
      <select id="detail-size-select">
        ${product.sizes.map(s => `<option value="${s}">${s}</option>`).join("")}
      </select>
    </div>
  ` : "";

  const specsRows = Object.entries(specs).map(([k, v]) => `
    <tr>
      <td class="spec-key">${k}</td>
      <td class="spec-value">${v}</td>
    </tr>
  `).join("");

  const thumbnailsHtml = images.map((imgUrl, idx) => `
    <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="swapGalleryImage(this, '${imgUrl}')">
      <img src="${imgUrl}" alt="Thumbnail" onerror="this.src='${PLACEHOLDER_IMG}'" />
    </div>
  `).join("");

  container.innerHTML = `
    <div class="product-gallery">
      <div class="main-image-viewport">
        <img id="detail-primary-img" src="${images[0]}" alt="${product.name}" onerror="this.src='${PLACEHOLDER_IMG}'" />
      </div>
      <div class="thumbnail-carousel">${thumbnailsHtml}</div>
    </div>

    <div class="product-info">
      <span class="detail-brand">${product.brand}</span>
      <h1>${product.name}</h1>
      <div class="card-rating" style="margin-bottom: 14px;">
        ★ ${product.rating} / 5.0 <span>(${product.reviewsCount || 10} verified customer reviews)</span>
      </div>

      <div class="card-pricing" style="margin-bottom: 20px;">
        <span class="price-current" style="font-size: 1.8rem;">₹${Number(product.price).toLocaleString()}</span>
        ${product.originalPrice ? `<span class="price-original">₹${Number(product.originalPrice).toLocaleString()}</span>` : ""}
        ${product.discount ? `<span class="price-discount" style="font-size: 14px;">${product.discount}% OFF</span>` : ""}
      </div>

      <p style="color: var(--gray-600); line-height: 1.7; margin-bottom: 20px;">${product.description}</p>

      ${colorsHtml}
      ${sizesHtml}

      <table class="detail-specs-table">
        <tbody>${specsRows}</tbody>
      </table>

      <div class="product-actions-group">
        <button class="btn-primary" style="flex: 2;" onclick="detailAddToCart('${product.id}')">Add To Cart</button>
        <button class="btn-secondary" style="flex: 1;" onclick="detailBuyNow('${product.id}')">Buy Now</button>
      </div>
    </div>
  `;

  showPage("product");
}

function swapGalleryImage(element, url) {
  const primaryImg = document.getElementById("detail-primary-img");
  if (primaryImg) primaryImg.src = url;
  document.querySelectorAll(".thumb-item").forEach(t => t.classList.remove("active"));
  element.classList.add("active");
}

function historyBackCategory() {
  showCategory(lastBrowsedCategory || "all");
}

/* --------------------------------------------------------------------------
   10. SHOPPING CART ENGINE
   -------------------------------------------------------------------------- */
function quickAddToCart(productId) {
  const product = products.find(p => String(p.id) === String(productId));
  if (!product) return;

  const color = product.colors?.[0] || "Standard";
  const size = product.sizes?.[0] || "Standard";

  addItemToCart(product, color, size);
}

function detailAddToCart(productId) {
  const product = products.find(p => String(p.id) === String(productId));
  if (!product) return;

  const color = document.getElementById("detail-color-select")?.value || product.colors?.[0] || "Standard";
  const size = document.getElementById("detail-size-select")?.value || product.sizes?.[0] || "Standard";

  addItemToCart(product, color, size);
}

function detailBuyNow(productId) {
  detailAddToCart(productId);
  showPage("cart");
}

function addItemToCart(product, color, size) {
  const existing = cart.find(i => String(i.id) === String(product.id) && i.color === color && i.size === size);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: Number(product.price),
      image: product.images?.[0] || product.image || PLACEHOLDER_IMG,
      color: color,
      size: size,
      quantity: 1
    });
  }

  persistCart();
  showToast(`Added "${product.name}" to cart!`, "success");
}

function updateCartQty(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  persistCart();
  renderCart();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  const item = cart[index];
  cart.splice(index, 1);
  persistCart();
  renderCart();
  showToast(`Removed "${item.name}"`, "info");
}

function applyCoupon() {
  const input = document.getElementById("coupon-input");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === "WELCOME10") {
    couponApplied = { code: "WELCOME10", percentage: 10 };
    showToast("Coupon Applied: 10% Discount active!", "success");
  } else {
    showToast("Invalid promo code.", "error");
  }
  renderCart();
}

function renderCart() {
  const itemsContainer = document.getElementById("cart-items");
  const summaryContainer = document.getElementById("cart-summary");
  if (!itemsContainer || !summaryContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="background: var(--white); padding: 50px; text-align: center; border-radius: var(--radius-lg); border: 1px solid var(--gray-200);">
        <h3>Your shopping cart is currently empty</h3>
        <p style="color: var(--gray-500); margin: 10px 0 20px;">Discover trending items from our seasonal collections.</p>
        <button class="btn-primary" onclick="showCategory('all')">Start Shopping</button>
      </div>
    `;
    summaryContainer.innerHTML = "";
    return;
  }

  itemsContainer.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='${PLACEHOLDER_IMG}'" />
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p style="color: var(--gray-500); font-size: 13px;">${item.brand} | ${item.color} | ${item.size}</p>
        <p style="font-weight: 800; margin-top: 4px;">₹${item.price.toLocaleString()}</p>
        <div class="cart-qty-ctrls">
          <button class="qty-btn" onclick="updateCartQty(${idx}, -1)">−</button>
          <span style="font-weight: 700; font-size: 14px;">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
        </div>
      </div>
      <div style="text-align: right;">
        <p style="font-weight: 800; font-size: 1.1rem;">₹${(item.price * item.quantity).toLocaleString()}</p>
        <button style="background: none; border: none; color: var(--accent-red); font-size: 13px; font-weight: 600; cursor: pointer; margin-top: 10px;" onclick="removeCartItem(${idx})">Remove</button>
      </div>
    </div>
  `).join("");

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = couponApplied ? Math.round(subtotal * (couponApplied.percentage / 100)) : 0;
  const shipping = subtotal > 3000 ? 0 : 150;
  const finalTotal = subtotal - discountAmount + shipping;

  summaryContainer.innerHTML = `
    <h3 style="margin-bottom: 16px;">Order Summary</h3>
    <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; color: var(--gray-600);">
      <span>Subtotal (${cart.length} items)</span>
      <span>₹${subtotal.toLocaleString()}</span>
    </div>
    ${couponApplied ? `
      <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; color: var(--accent-green);">
        <span>Promo Discount (${couponApplied.code})</span>
        <span>-₹${discountAmount.toLocaleString()}</span>
      </div>
    ` : ""}
    <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; color: var(--gray-600);">
      <span>Express Shipping</span>
      <span>${shipping === 0 ? '<strong style="color: var(--accent-green)">FREE</strong>' : `₹${shipping}`}</span>
    </div>
    <div class="coupon-box">
      <input type="text" id="coupon-input" placeholder="Coupon (e.g. WELCOME10)" value="${couponApplied ? couponApplied.code : ''}" />
      <button class="btn-secondary" onclick="applyCoupon()">Apply</button>
    </div>
    <hr style="border: none; border-top: 1px solid var(--gray-200); margin: 16px 0;" />
    <div style="display: flex; justify-content: space-between; font-size: 1.25rem; font-weight: 800; margin-bottom: 20px;">
      <span>Total</span>
      <span>₹${finalTotal.toLocaleString()}</span>
    </div>
    <button class="btn-primary btn-block" onclick="beginCheckout()">Proceed to Checkout</button>
  `;
}

/* --------------------------------------------------------------------------
   11. WISHLIST MANAGEMENT
   -------------------------------------------------------------------------- */
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast("Removed from wishlist", "info");
  } else {
    wishlist.push(productId);
    showToast("Saved to wishlist", "success");
  }
  persistWishlist();

  if (!document.getElementById("category-page").classList.contains("hidden")) {
    applyFilters();
  } else if (!document.getElementById("home-page").classList.contains("hidden")) {
    renderHome();
  }
}

function showWishlistPage() {
  const wishItems = products.filter(p => wishlist.includes(p.id));
  filteredProductsList = wishItems;

  const titleEl = document.getElementById("category-title");
  if (titleEl) titleEl.textContent = "My Wishlist";

  populateFilterBrands();
  applyFilters();
  showPage("category");
}

/* --------------------------------------------------------------------------
   12. SEARCH MANAGEMENT
   -------------------------------------------------------------------------- */
function handleSearch() {
  const query = document.getElementById("search-input")?.value.trim().toLowerCase();
  executeSearchQuery(query);
}

function handleMobileSearch() {
  const query = document.getElementById("mobile-search-input")?.value.trim().toLowerCase();
  executeSearchQuery(query);
}

function executeSearchQuery(query) {
  if (!query) return;

  filteredProductsList = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );

  const titleEl = document.getElementById("category-title");
  if (titleEl) titleEl.textContent = `Search: "${query}"`;

  populateFilterBrands();
  applyFilters();
  showPage("category");
}

/* --------------------------------------------------------------------------
   13. MULTI-STEP CHECKOUT
   -------------------------------------------------------------------------- */
function beginCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty.", "error");
    return;
  }
  currentCheckoutStep = 1;
  showPage("order");
}

function renderCheckoutStep() {
  const container = document.getElementById("order-steps");
  if (!container) return;

  document.querySelectorAll(".step-indicator").forEach((el, idx) => {
    el.classList.toggle("active", idx + 1 === currentCheckoutStep);
  });

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = couponApplied ? Math.round(subtotal * (couponApplied.percentage / 100)) : 0;
  const shipping = subtotal > 3000 ? 0 : 150;
  const total = subtotal - discountAmount + shipping;

  if (currentCheckoutStep === 1) {
    container.innerHTML = `
      <div class="order-form-container">
        <h2 style="margin-bottom: 16px;">Delivery Details</h2>
        <div class="form-group">
          <label>Full Recipient Name</label>
          <input type="text" id="chk-name" value="${userProfile.name}" />
        </div>
        <div class="form-group">
          <label>Contact Phone (10-Digits)</label>
          <input type="tel" id="chk-phone" value="${userProfile.phone}" maxlength="10" />
        </div>
        <div class="form-group">
          <label>Complete Shipping Address</label>
          <textarea id="chk-address" rows="3">${userProfile.address}</textarea>
        </div>
        <button class="btn-primary btn-block" onclick="submitStep1()">Continue to Summary</button>
      </div>
    `;
  } else if (currentCheckoutStep === 2) {
    container.innerHTML = `
      <div class="order-form-container">
        <h2 style="margin-bottom: 16px;">Review Your Order</h2>
        <div style="background: var(--gray-50); padding: 14px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 14px;">
          <p><strong>Shipping To:</strong> ${userProfile.name} (${userProfile.phone})</p>
          <p style="color: var(--gray-600); margin-top: 4px;">${userProfile.address}</p>
        </div>
        <div style="margin-bottom: 20px;">
          ${cart.map(i => `
            <div style="display:flex; justify-content:space-between; font-size: 14px; margin-bottom: 8px;">
              <span>${i.name} (x${i.quantity})</span>
              <strong>₹${(i.price * i.quantity).toLocaleString()}</strong>
            </div>
          `).join("")}
        </div>
        <div style="border-top: 1px solid var(--gray-200); padding-top: 14px; display: flex; justify-content: space-between; font-weight: 800; font-size: 1.15rem;">
          <span>Payable Amount</span>
          <span>₹${total.toLocaleString()}</span>
        </div>
        <div style="display:flex; gap: 12px; margin-top: 24px;">
          <button class="btn-secondary" style="flex:1;" onclick="currentCheckoutStep = 1; renderCheckoutStep();">Back</button>
          <button class="btn-primary" style="flex:1;" onclick="currentCheckoutStep = 3; renderCheckoutStep();">Proceed to Payment</button>
        </div>
      </div>
    `;
  } else if (currentCheckoutStep === 3) {
    container.innerHTML = `
      <div class="order-form-container">
        <h2 style="margin-bottom: 16px;">Select Payment Mode</h2>
        <div style="display:flex; flex-direction:column; gap: 12px; margin-bottom: 24px;">
          <label style="display:flex; align-items:center; gap: 12px; padding: 14px; border: 1.5px solid var(--gray-200); border-radius: var(--radius-md); cursor: pointer;">
            <input type="radio" name="pay-option" value="UPI" checked />
            <div>
              <strong>Instant UPI / QR</strong>
              <p style="font-size: 12px; color: var(--gray-500);">Google Pay, PhonePe, Paytm, BHIM</p>
            </div>
          </label>
          <label style="display:flex; align-items:center; gap: 12px; padding: 14px; border: 1.5px solid var(--gray-200); border-radius: var(--radius-md); cursor: pointer;">
            <input type="radio" name="pay-option" value="Card" />
            <div>
              <strong>Credit / Debit Card</strong>
              <p style="font-size: 12px; color: var(--gray-500);">Visa, MasterCard, RuPay, Amex</p>
            </div>
          </label>
          <label style="display:flex; align-items:center; gap: 12px; padding: 14px; border: 1.5px solid var(--gray-200); border-radius: var(--radius-md); cursor: pointer;">
            <input type="radio" name="pay-option" value="COD" />
            <div>
              <strong>Cash on Delivery (COD)</strong>
              <p style="font-size: 12px; color: var(--gray-500);">Pay via cash or UPI upon delivery</p>
            </div>
          </label>
        </div>
        <div style="display:flex; gap: 12px;">
          <button class="btn-secondary" style="flex:1;" onclick="currentCheckoutStep = 2; renderCheckoutStep();">Back</button>
          <button class="btn-primary" style="flex:1;" onclick="completeOrderPlacement()">Place Order (₹${total.toLocaleString()})</button>
        </div>
      </div>
    `;
  }
}

function submitStep1() {
  const name = document.getElementById("chk-name")?.value.trim();
  const phone = document.getElementById("chk-phone")?.value.trim();
  const address = document.getElementById("chk-address")?.value.trim();

  if (!name || name.length < 2) return showToast("Please provide a valid recipient name.", "error");
  if (!phone || !/^\d{10}$/.test(phone)) return showToast("Please enter a valid 10-digit contact number.", "error");
  if (!address || address.length < 8) return showToast("Please provide full delivery address.", "error");

  userProfile.name = name;
  userProfile.phone = phone;
  userProfile.address = address;
  persistProfile();

  currentCheckoutStep = 2;
  renderCheckoutStep();
}

function completeOrderPlacement() {
  const payMode = document.querySelector('input[name="pay-option"]:checked')?.value || "COD";
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = couponApplied ? Math.round(subtotal * (couponApplied.percentage / 100)) : 0;
  const shipping = subtotal > 3000 ? 0 : 150;
  const orderId = `SC-${Date.now().toString().slice(-6)}`;

  const deliveryEst = new Date();
  deliveryEst.setDate(deliveryEst.getDate() + 4);

  const placedOrder = {
    id: orderId,
    timestamp: new Date().toISOString(),
    deliveryDate: deliveryEst.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }),
    items: [...cart],
    total: subtotal - discountAmount + shipping,
    paymentMethod: payMode,
    customer: { ...userProfile }
  };

  orders.unshift(placedOrder);
  persistOrders();

  cart = [];
  couponApplied = null;
  persistCart();

  const container = document.getElementById("order-steps");
  if (container) {
    container.innerHTML = `
      <div style="text-align: center; background: var(--white); padding: 50px 24px; border-radius: var(--radius-lg); border: 1px solid var(--gray-200); max-width: 600px; margin: 0 auto;">
        <span style="font-size: 48px;">🎉</span>
        <h2 style="color: var(--accent-green); margin: 12px 0;">Order Confirmed!</h2>
        <p style="font-size: 15px; color: var(--gray-600);">Thank you for your purchase. Tracking identifier: <strong>${orderId}</strong></p>
        <p style="margin: 8px 0 24px; color: var(--gray-500); font-size: 14px;">Estimated delivery by <strong>${placedOrder.deliveryDate}</strong></p>
        <div style="display:flex; gap: 12px; justify-content: center;">
          <button class="btn-primary" onclick="showPage('orders')">View My Orders</button>
          <button class="btn-secondary" onclick="showCategory('all')">Continue Shopping</button>
        </div>
      </div>
    `;
  }
  showToast("Order placed successfully!", "success");
}

/* --------------------------------------------------------------------------
   14. ORDERS HISTORY & TRACKING
   -------------------------------------------------------------------------- */
function renderOrders() {
  const container = document.getElementById("order-list");
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <div style="background: var(--white); padding: 40px; text-align: center; border-radius: var(--radius-lg); border: 1px solid var(--gray-200);">
        <h3>No past orders found</h3>
        <p style="color: var(--gray-500); margin: 10px 0 20px;">You haven't placed any orders with this profile yet.</p>
        <button class="btn-primary" onclick="showCategory('all')">Start Shopping</button>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(ord => `
    <div class="order-card">
      <div class="order-card-header" onclick="toggleOrderAccordion('${ord.id}')">
        <div>
          <strong>${ord.id}</strong>
          <span style="background: #ecfdf5; color: var(--accent-green); padding: 3px 10px; border-radius: var(--radius-full); font-size: 12px; font-weight: 700; margin-left: 8px;">
            Confirmed
          </span>
        </div>
        <div style="font-size: 14px;">
          <span>Estimated: ${ord.deliveryDate}</span> | 
          <strong>₹${ord.total.toLocaleString()}</strong> ▾
        </div>
      </div>
      <div id="order-box-${ord.id}" class="order-card-body">
        <p style="font-size: 13px; color: var(--gray-600); margin-bottom: 12px;">
          <strong>Payment:</strong> ${ord.paymentMethod} | <strong>Delivery To:</strong> ${ord.customer.name}, ${ord.customer.address}
        </p>
        ${(ord.items || []).map(i => `
          <div style="display:flex; justify-content:space-between; font-size: 14px; padding: 6px 0; border-bottom: 1px solid var(--gray-100);">
            <span>${i.name} (${i.color}, ${i.size}) ×${i.quantity}</span>
            <strong>₹${(i.price * i.quantity).toLocaleString()}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function toggleOrderAccordion(orderId) {
  const el = document.getElementById(`order-box-${orderId}`);
  if (!el) return;
  el.style.display = el.style.display === "block" ? "none" : "block";
}

/* --------------------------------------------------------------------------
   15. USER ACCOUNT SETTINGS
   -------------------------------------------------------------------------- */
function loadAccountForm() {
  const n = document.getElementById("user-name");
  const e = document.getElementById("user-email");
  const p = document.getElementById("user-phone");
  const a = document.getElementById("user-address");
  if (n) n.value = userProfile.name || "";
  if (e) e.value = userProfile.email || "";
  if (p) p.value = userProfile.phone || "";
  if (a) a.value = userProfile.address || "";
}

function saveUserAccountInfo() {
  const name = document.getElementById("user-name")?.value.trim();
  const email = document.getElementById("user-email")?.value.trim();
  const phone = document.getElementById("user-phone")?.value.trim();
  const address = document.getElementById("user-address")?.value.trim();

  if (!name || name.length < 2) return showToast("Invalid name.", "error");
  if (!email || !email.includes("@")) return showToast("Invalid email address.", "error");
  if (!phone || !/^\d{10}$/.test(phone)) return showToast("10-digit mobile number required.", "error");

  userProfile = { name, email, phone, address };
  persistProfile();
  showToast("Profile details updated successfully!", "success");
}