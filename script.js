/* ==========================================================================
   BULLETPROOF SCRIPT.JS
   ========================================================================== */

// Fallback catalog in case data.json cannot be fetched (e.g. running via file://)
const fallbackCategories = [
  {
    id: "clothing",
    name: "Clothing & Apparel",
    description: "Trending fashion for everyone.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "electronics",
    name: "Consumer Electronics",
    description: "Laptops, headphones, & audio gear.",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fitness",
    name: "Sports & Fitness",
    description: "Essential workout gear.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
  }
];

const fallbackProducts = [
  {
    id: "prod-1",
    name: "Classic Denim Jacket",
    category: "clothing",
    brand: "StyleFit",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.5,
    colors: ["Indigo Blue", "Washed Black"],
    sizes: ["S", "M", "L", "XL"],
    description: "Authentic rugged denim crafted with pure cotton for everyday comfort.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-2",
    name: "Premium Cotton T-Shirt",
    category: "clothing",
    brand: "FashionWear",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    rating: 4.2,
    colors: ["White", "Charcoal"],
    sizes: ["M", "L"],
    description: "Ultra-soft breathable cotton basic tee suited for casual wear.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-3",
    name: "Noise Cancelling Headphones",
    category: "electronics",
    brand: "SoundWave",
    price: 5499,
    originalPrice: 8999,
    discount: 39,
    rating: 4.8,
    colors: ["Black", "Silver"],
    sizes: ["One Size"],
    description: "High-fidelity audio with active noise cancellation.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
  }
];

/* Global State */
let categories = [];
let products = [];
let filteredProducts = [];
let recentlyViewed = [];
let cart = [];
let orders = [];
let currentOrderStep = 1;

let currentUser = {
  name: "",
  email: "",
  phone: "",
  address: ""
};

/* Validation */
function validateName(name) {
  return /^[a-zA-Z\s]{2,50}$/.test(name?.trim() || "");
}
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.trim() || "");
}
function validatePhone(phone) {
  return /^[0-9]{10}$/.test(phone?.trim() || "");
}

/* Local Storage */
function saveUserData() {
  try { localStorage.setItem("userData", JSON.stringify(currentUser)); } catch (e) {}
}
function loadUserData() {
  try {
    const d = localStorage.getItem("userData");
    if (d) currentUser = JSON.parse(d);
  } catch (e) {}
}

function saveCartData() {
  try { localStorage.setItem("cartData", JSON.stringify(cart)); } catch (e) {}
  updateCartCount();
}
function loadCartData() {
  try {
    const d = localStorage.getItem("cartData");
    if (d) cart = JSON.parse(d);
  } catch (e) {}
  updateCartCount();
}

function saveOrderData() {
  try { localStorage.setItem("ordersData", JSON.stringify(orders)); } catch (e) {}
}
function loadOrderData() {
  try {
    const d = localStorage.getItem("ordersData");
    if (d) orders = JSON.parse(d);
  } catch (e) {}
}

function saveRecentlyViewed() {
  try { localStorage.setItem("recentlyViewedData", JSON.stringify(recentlyViewed)); } catch (e) {}
}
function loadRecentlyViewed() {
  try {
    const d = localStorage.getItem("recentlyViewedData");
    if (d) recentlyViewed = JSON.parse(d);
  } catch (e) {}
}

function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (countEl) {
    countEl.textContent = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  }
}

/* Data Loading with Graceful Fallback */
async function loadData() {
  try {
    const res = await fetch("data.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    categories = Array.isArray(json.categories) ? json.categories : [];
    products = Array.isArray(json.products) ? json.products : [];
    console.log("Successfully loaded data from data.json");
  } catch (err) {
    console.warn("Could not fetch data.json (likely running via file:// without local server). Using fallback data.", err);
    categories = fallbackCategories;
    products = fallbackProducts;
  }

  filteredProducts = [...products];

  loadUserData();
  loadCartData();
  loadOrderData();
  loadRecentlyViewed();

  renderCategories();
  showPage("home");
}

document.addEventListener("DOMContentLoaded", loadData);

/* Navigation */
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  const target = document.getElementById(`${pageId}-page`);
  if (target) {
    target.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (pageId === "home") renderCategories();
  if (pageId === "cart") renderCart();
  if (pageId === "orders") renderOrders();
  if (pageId === "order") renderOrderSteps();
  if (pageId === "account") loadUserAccountPage();
}

function toggleSidebar() {
  const s = document.querySelector(".sidebar");
  const o = document.querySelector(".sidebar-overlay");
  if (s) s.classList.toggle("active");
  if (o) o.classList.toggle("active");
}

/* Category & Product Views */
function renderCategories() {
  const grid = document.getElementById("category-grid");
  if (!grid) return;
  grid.innerHTML = "";

  categories.forEach(cat => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.onclick = () => showCategory(cat.id);

    const isRecent = cat.id === "recently-viewed";
    const subtext = isRecent
      ? `${recentlyViewed.length} items checked`
      : (cat.description || "Browse collection");

    card.innerHTML = `
      <img src="${cat.image || ''}" alt="${cat.name || ''}">
      <div class="category-card-content">
        <h3>${cat.name || 'Category'}</h3>
        <p>${subtext}</p>
        <span class="category-btn">View Products</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function showCategory(categoryId) {
  const titleEl = document.getElementById("category-title");

  if (categoryId === "recently-viewed") {
    filteredProducts = products.filter(p => recentlyViewed.includes(p.id));
    if (titleEl) titleEl.textContent = "Recently Viewed";
  } else {
    filteredProducts = products.filter(p => p.category === categoryId);
    const cat = categories.find(c => c.id === categoryId);
    if (titleEl) titleEl.textContent = cat ? cat.name : "Products";
  }

  populateFilterBrands();
  renderProducts(filteredProducts);
  showPage("category");
}

function populateFilterBrands() {
  const brandSelect = document.getElementById("brand-filter");
  if (!brandSelect) return;
  brandSelect.innerHTML = `<option value="">All Brands</option>`;

  const brands = [...new Set(filteredProducts.map(p => p.brand).filter(Boolean))];
  brands.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    brandSelect.appendChild(opt);
  });
}

function applyFilters() {
  const sortBy = document.getElementById("sort-by")?.value || "relevance";
  const maxPrice = parseInt(document.getElementById("price-range")?.value || "10000", 10);
  const selectedBrand = document.getElementById("brand-filter")?.value || "";

  const priceValueDisplay = document.getElementById("price-value");
  if (priceValueDisplay) priceValueDisplay.textContent = `₹${maxPrice.toLocaleString()}`;

  let result = filteredProducts.filter(p => {
    const pPrice = Number(p.price) || 0;
    const matchesPrice = pPrice <= maxPrice;
    const matchesBrand = selectedBrand ? p.brand === selectedBrand : true;
    return matchesPrice && matchesBrand;
  });

  if (sortBy === "price-low") {
    result.sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0));
  } else if (sortBy === "price-high") {
    result.sort((a, b) => (Number(b.price) || 0) - (Number(a.price) || 0));
  } else if (sortBy === "rating") {
    result.sort((a, b) => (Number(b.rating) || 0) - (Number(a.rating) || 0));
  }

  renderProducts(result);
}

function renderProducts(items) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  grid.innerHTML = "";

  if (!items || items.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">No matching products found.</p>`;
    return;
  }

  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.onclick = () => showProductDetails(p.id);

    const ratingVal = Math.floor(Number(p.rating) || 5);
    const stars = "★".repeat(ratingVal) + "☆".repeat(Math.max(0, 5 - ratingVal));
    const price = Number(p.price) || 0;

    card.innerHTML = `
      <img src="${p.image || ''}" alt="${p.name || ''}">
      <div class="product-card-content">
        <span class="product-brand">${p.brand || "Brand"}</span>
        <h3>${p.name || 'Product'}</h3>
        <div class="product-rating">${stars} (${p.rating || 5})</div>
        <div class="product-price">
          <span class="current-price">₹${price.toLocaleString()}</span>
          ${p.originalPrice ? `<span class="original-price">₹${Number(p.originalPrice).toLocaleString()}</span>` : ""}
          ${p.discount ? `<span class="discount">${p.discount}% OFF</span>` : ""}
        </div>
        <button class="btn-primary btn-sm" onclick="event.stopPropagation(); addToCart('${p.id}')">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function searchProducts() {
  const input = document.getElementById("search-input");
  if (!input) return;
  const q = input.value.trim().toLowerCase();
  if (!q) return;

  filteredProducts = products.filter(p =>
    (p.name && p.name.toLowerCase().includes(q)) ||
    (p.brand && p.brand.toLowerCase().includes(q)) ||
    (p.category && p.category.toLowerCase().includes(q)) ||
    (p.description && p.description.toLowerCase().includes(q))
  );

  const titleEl = document.getElementById("category-title");
  if (titleEl) titleEl.textContent = `Search: "${q}"`;

  populateFilterBrands();
  renderProducts(filteredProducts);
  showPage("category");
}

/* Product Details */
function showProductDetails(productId) {
  const p = products.find(item => String(item.id) === String(productId));
  if (!p) return;

  if (!recentlyViewed.includes(p.id)) {
    recentlyViewed.unshift(p.id);
    if (recentlyViewed.length > 10) recentlyViewed.pop();
    saveRecentlyViewed();
  }

  const container = document.getElementById("product-detail");
  if (!container) return;

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  const colors = Array.isArray(p.colors) ? p.colors : [];
  const sizes = Array.isArray(p.sizes) ? p.sizes : [];

  const colorsHtml = colors.length ? `
    <div class="option-group">
      <label for="detail-color">Select Color</label>
      <select id="detail-color">
        ${colors.map(c => `<option value="${c}">${c}</option>`).join("")}
      </select>
    </div>
  ` : "";

  const sizesHtml = sizes.length ? `
    <div class="option-group">
      <label for="detail-size">Select Size</label>
      <select id="detail-size">
        ${sizes.map(s => `<option value="${s}">${s}</option>`).join("")}
      </select>
    </div>
  ` : "";

  container.innerHTML = `
    <div class="product-image">
      <img src="${p.image || ''}" alt="${p.name || ''}">
    </div>
    <div class="product-info">
      <h1>${p.name || ''}</h1>
      <div class="brand">${p.brand || 'Brand'}</div>
      <div class="product-rating">★ Rating: ${p.rating || 5} / 5</div>
      <div class="product-price">
        <span class="current-price">₹${(Number(p.price) || 0).toLocaleString()}</span>
        ${p.originalPrice ? `<span class="original-price">₹${Number(p.originalPrice).toLocaleString()}</span>` : ""}
        ${p.discount ? `<span class="discount">${p.discount}% OFF</span>` : ""}
      </div>
      <p class="description">${p.description || "Authentic quality product."}</p>

      ${colorsHtml}
      ${sizesHtml}

      <div class="delivery-info">
        <p>🚚 Expected Delivery: <strong>${targetDate.toLocaleDateString()}</strong></p>
        <p>🔄 10 Days Replacement Policy</p>
        <p>💵 Cash on Delivery Available</p>
      </div>

      <div class="product-actions">
        <button class="btn-primary" onclick="addToCart('${p.id}', true)">Add to Cart</button>
        <button class="btn-secondary" onclick="buyNow('${p.id}')">Buy Now</button>
      </div>
    </div>
  `;

  showPage("product");
}

/* Cart Management */
function addToCart(productId, fromDetail = false) {
  const p = products.find(item => String(item.id) === String(productId));
  if (!p) return;

  let chosenColor = "";
  let chosenSize = "";

  if (fromDetail) {
    chosenColor = document.getElementById("detail-color")?.value || "";
    chosenSize = document.getElementById("detail-size")?.value || "";
  } else {
    if (Array.isArray(p.colors) && p.colors.length) chosenColor = p.colors[0];
    if (Array.isArray(p.sizes) && p.sizes.length) chosenSize = p.sizes[0];
  }

  const existing = cart.find(i =>
    String(i.id) === String(productId) &&
    i.color === chosenColor &&
    i.size === chosenSize
  );

  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      brand: p.brand || "Brand",
      price: Number(p.price) || 0,
      image: p.image || "",
      color: chosenColor,
      size: chosenSize,
      quantity: 1
    });
  }

  saveCartData();
  alert(`Added "${p.name}" to cart!`);
}

function buyNow(productId) {
  addToCart(productId, true);
  showPage("cart");
}

function updateQuantity(index, delta, explicitVal = null) {
  if (!cart[index]) return;
  if (explicitVal !== null) {
    const val = parseInt(explicitVal, 10);
    cart[index].quantity = isNaN(val) || val < 1 ? 1 : val;
  } else {
    cart[index].quantity = (cart[index].quantity || 1) + delta;
  }

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCartData();
  renderCart();
}

function removeFromCart(index) {
  if (!cart[index]) return;
  cart.splice(index, 1);
  saveCartData();
  renderCart();
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const summary = document.getElementById("cart-summary");
  if (!container || !summary) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 50px; background: #fff; border-radius: 12px;">
        <h3>Your Cart is Empty</h3>
        <button class="btn-primary" style="margin-top: 15px;" onclick="showPage('home')">Start Shopping</button>
      </div>
    `;
    summary.innerHTML = "";
    return;
  }

  container.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.image || ''}" alt="${item.name || ''}">
      <div class="cart-item-details">
        <h3>${item.name || 'Item'}</h3>
        <p style="color: #64748b; font-size: 13px;">
          ${item.brand || ''} ${item.color ? `| Color: ${item.color}` : ""} ${item.size ? `| Size: ${item.size}` : ""}
        </p>
        <p class="current-price" style="margin-top: 4px;">₹${(item.price || 0).toLocaleString()}</p>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${idx}, -1)">−</button>
          <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity(${idx}, 0, this.value)">
          <button class="quantity-btn" onclick="updateQuantity(${idx}, 1)">+</button>
        </div>
        <p style="font-size: 14px;"><strong>Subtotal:</strong> ₹${((item.price || 0) * (item.quantity || 1)).toLocaleString()}</p>
      </div>
      <button class="btn-secondary" onclick="removeFromCart(${idx})">Remove</button>
    </div>
  `).join("");

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = subtotal > 500 ? 0 : 50;
  const total = subtotal + delivery;

  summary.innerHTML = `
    <h3>Price Details</h3>
    <div class="summary-row" style="margin-top: 14px;">
      <span>Subtotal</span>
      <span>₹${subtotal.toLocaleString()}</span>
    </div>
    <div class="summary-row">
      <span>Delivery</span>
      <span>${delivery === 0 ? '<span style="color: #10b981; font-weight:700;">FREE</span>' : `₹${delivery}`}</span>
    </div>
    <div class="summary-divider"></div>
    <div class="summary-row summary-total">
      <span>Total Amount</span>
      <span>₹${total.toLocaleString()}</span>
    </div>
    <button class="btn-primary" style="width: 100%; margin-top: 20px;" onclick="proceedToCheckout()">Proceed to Checkout</button>
  `;
}

/* Checkout */
function proceedToCheckout() {
  if (cart.length === 0) return alert("Your cart is empty.");
  currentOrderStep = 1;
  showPage("order");
}

function renderOrderSteps() {
  const container = document.getElementById("order-steps");
  if (!container) return;

  if (currentOrderStep === 1) {
    container.innerHTML = `
      <div class="order-form">
        <h2>Step 1: Shipping Address</h2>
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" id="step-name" value="${currentUser.name || ""}" placeholder="Enter full name" />
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <input type="tel" id="step-phone" value="${currentUser.phone || ""}" placeholder="10-digit number" />
        </div>
        <div class="form-group">
          <label>Address</label>
          <textarea id="step-address" rows="3" placeholder="Full shipping address">${currentUser.address || ""}</textarea>
        </div>
        <button class="btn-primary" style="width: 100%;" onclick="saveStepOne()">Continue to Summary</button>
      </div>
    `;
  } else if (currentOrderStep === 2) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal > 500 ? 0 : 50;

    container.innerHTML = `
      <div class="order-form">
        <h2>Step 2: Order Review</h2>
        <div style="background: var(--gray-50); padding: 14px; border-radius: 8px; margin: 16px 0;">
          <p><strong>Deliver To:</strong> ${currentUser.name} (${currentUser.phone})</p>
          <p style="color: #64748b; font-size: 14px;">${currentUser.address}</p>
        </div>
        <div>
          ${cart.map(i => `
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
              <span>${i.name} ×${i.quantity}</span>
              <strong>₹${(i.price * i.quantity).toLocaleString()}</strong>
            </div>
          `).join("")}
        </div>
        <div class="summary-divider"></div>
        <div class="summary-row summary-total">
          <span>Final Total</span>
          <span>₹${(subtotal + delivery).toLocaleString()}</span>
        </div>
        <div style="display: flex; gap: 12px; margin-top: 20px;">
          <button class="btn-secondary" style="flex: 1;" onclick="currentOrderStep = 1; renderOrderSteps();">Back</button>
          <button class="btn-primary" style="flex: 1;" onclick="currentOrderStep = 3; renderOrderSteps();">Proceed to Payment</button>
        </div>
      </div>
    `;
  } else if (currentOrderStep === 3) {
    container.innerHTML = `
      <div class="order-form">
        <h2>Step 3: Payment Method</h2>
        <div class="payment-options">
          <label class="payment-option">
            <input type="radio" name="pay-method" value="UPI" checked />
            <div><strong>UPI</strong> (GPay / PhonePe / Paytm)</div>
          </label>
          <label class="payment-option">
            <input type="radio" name="pay-method" value="COD" />
            <div><strong>Cash on Delivery (COD)</strong></div>
          </label>
        </div>
        <div style="display: flex; gap: 12px;">
          <button class="btn-secondary" style="flex: 1;" onclick="currentOrderStep = 2; renderOrderSteps();">Back</button>
          <button class="btn-primary" style="flex: 1;" onclick="finishOrder()">Place Order</button>
        </div>
      </div>
    `;
  }
}

function saveStepOne() {
  const name = document.getElementById("step-name")?.value.trim() || "";
  const phone = document.getElementById("step-phone")?.value.trim() || "";
  const address = document.getElementById("step-address")?.value.trim() || "";

  if (!validateName(name)) return alert("Please enter a valid full name.");
  if (!validatePhone(phone)) return alert("Please enter a valid 10-digit phone number.");
  if (!address) return alert("Please enter a delivery address.");

  currentUser.name = name;
  currentUser.phone = phone;
  currentUser.address = address;
  saveUserData();

  currentOrderStep = 2;
  renderOrderSteps();
}

function finishOrder() {
  const payMethod = document.querySelector('input[name="pay-method"]:checked')?.value || "COD";
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = subtotal > 500 ? 0 : 50;
  const orderId = `OID-${Date.now().toString().slice(-6)}`;

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);

  const newOrder = {
    id: orderId,
    orderDate: new Date().toISOString(),
    deliveryDate: deliveryDate.toISOString(),
    items: [...cart],
    total: subtotal + delivery,
    paymentMethod: payMethod,
    customer: { ...currentUser }
  };

  orders.unshift(newOrder);
  saveOrderData();

  cart = [];
  saveCartData();

  const container = document.getElementById("order-steps");
  if (container) {
    container.innerHTML = `
      <div class="order-success">
        <h1>🎉 Order Placed Successfully!</h1>
        <p style="margin: 10px 0;">Order ID: <strong>${orderId}</strong></p>
        <p style="color: #64748b;">Delivery By: <strong>${deliveryDate.toLocaleDateString()}</strong></p>
        <div style="margin-top: 25px; display: flex; gap: 14px; justify-content: center;">
          <button class="btn-primary" onclick="showPage('orders')">View My Orders</button>
          <button class="btn-secondary" onclick="showPage('home')">Shop More</button>
        </div>
      </div>
    `;
  }
}

/* Orders History */
function renderOrders() {
  const container = document.getElementById("order-list");
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; background: #fff; border-radius: 8px;">
        <h3>No past orders found.</h3>
        <button class="btn-primary" style="margin-top: 15px;" onclick="showPage('home')">Start Shopping</button>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(ord => {
    const isDelivered = new Date() > new Date(ord.deliveryDate);
    return `
      <div class="order-card">
        <div class="order-header" onclick="toggleOrderDetails('${ord.id}')">
          <div>
            <strong>${ord.id}</strong>
            <span class="status-badge ${isDelivered ? 'delivered' : 'on-the-way'}">
              ${isDelivered ? 'Delivered' : 'On The Way'}
            </span>
          </div>
          <div>
            <span>${new Date(ord.orderDate).toLocaleDateString()}</span> | 
            <strong>₹${(ord.total || 0).toLocaleString()}</strong> ▾
          </div>
        </div>
        <div id="details-${ord.id}" class="order-details-box">
          <p><strong>Payment:</strong> ${ord.paymentMethod} | <strong>Delivery:</strong> ${new Date(ord.deliveryDate).toLocaleDateString()}</p>
          <p><strong>Deliver To:</strong> ${ord.customer?.name || ''}, ${ord.customer?.address || ''} (${ord.customer?.phone || ''})</p>
          <div style="margin-top: 12px;">
            ${(ord.items || []).map(i => `
              <div style="display: flex; justify-content: space-between; font-size: 14px; padding: 4px 0;">
                <span>${i.name} ×${i.quantity}</span>
                <span>₹${((i.price || 0) * (i.quantity || 1)).toLocaleString()}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function toggleOrderDetails(orderId) {
  const el = document.getElementById(`details-${orderId}`);
  if (!el) return;
  el.style.display = el.style.display === "block" ? "none" : "block";
}

/* Account Info */
function loadUserAccountPage() {
  const n = document.getElementById("user-name");
  const e = document.getElementById("user-email");
  const p = document.getElementById("user-phone");
  const a = document.getElementById("user-address");
  if (n) n.value = currentUser.name || "";
  if (e) e.value = currentUser.email || "";
  if (p) p.value = currentUser.phone || "";
  if (a) a.value = currentUser.address || "";
}

function saveUserAccountInfo() {
  const name = document.getElementById("user-name")?.value.trim() || "";
  const email = document.getElementById("user-email")?.value.trim() || "";
  const phone = document.getElementById("user-phone")?.value.trim() || "";
  const address = document.getElementById("user-address")?.value.trim() || "";

  if (name && !validateName(name)) return alert("Please enter a valid name.");
  if (email && !validateEmail(email)) return alert("Please enter a valid email.");
  if (phone && !validatePhone(phone)) return alert("Please enter a 10-digit phone.");

  currentUser = { name, email, phone, address };
  saveUserData();
  alert("Profile saved successfully!");
}