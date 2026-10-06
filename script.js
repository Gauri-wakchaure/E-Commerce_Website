let categories = []
let products = []

let currentUser = {
    name: "",
    email: "",
    phone: "",
    address: ""
}

let recentlyViewed = []
let filteredProducts = []
let cart = []
let orders = []
let currentOrderSteps = 1;

async function loadData() {
    try {
        const response = await fetch("data.json")

        if (!response.ok) {
            throw new Error("Network response was not ok")
        }

        const data = await response.json()

        categories = data.categories
        products = data.products

        initializeApp()

    } catch (error) {
        console.error("Error loading data", error)

        document.body.innerHTML =
            '<div style="text-align:center; margin-top: 50px"><h2>Error loading data. Please refresh the page.</h2></div>'
    }
}


function initializeApp() {
    renderCategories()
    showPage("home")
}


document.addEventListener("DOMContentLoaded", function () {
    loadData()
})


function showPage(pageId) {

    const pages = document.querySelectorAll(".page")

    pages.forEach(page => page.classList.add("hidden"))

    const targetPage = document.getElementById(pageId + "Page")

    if (targetPage) {
        targetPage.classList.remove("hidden")
    }

    switch (pageId) {

        case "home":
            renderCategories()
            break

        case "cart":
            renderCart()
            break

        case "orders":
            renderOrders()
            break

        case "account":
            renderAccountPage()
            break
    }
}


function renderCategories() {

    const categoryGrid = document.getElementById("categoryGrid")

    categoryGrid.innerHTML = ""

    categories.forEach(category => {

        const categoryCard = document.createElement("div")

        categoryCard.className = "category-card"

        categoryCard.onclick = () => showCategory(category.id)

        let cardContent = `
        <img src="${category.image}" alt="${category.name}">
        <div class="category-card-content">
        <h3>${category.name}</h3>
        <p>${category.description}</p>
        `

        if (category.isRecentlyViewed) {

            if (recentlyViewed.length === 0) {

                cardContent +=
                    '<p><em>No recently viewed products</em></p>'

            } else {

                cardContent +=
                    `<p>You have ${recentlyViewed.length} recently viewed products</p>`
            }
        }

        cardContent += `
        <a href="#" class="category-btn">View Products</a>
        </div>
        `

        categoryCard.innerHTML = cardContent

        categoryGrid.appendChild(categoryCard)
    })
}


function showCategory(categoryId) {

    if (categoryId === "recently-viewed") {

        filteredProducts =
            products.filter(product =>
                recentlyViewed.includes(product.id)
            )

        document.getElementById("categoryTitle").textContent =
            "Recently Viewed Products"

    } else {

        filteredProducts =
            products.filter(product =>
                product.category === categoryId
            )

        const category =
            categories.find(cat => cat.id === categoryId)

        document.getElementById("categoryTitle").textContent =
            category.name
    }

    populateFilters()
    renderProducts()
    showPage("category")
}


function populateFilters() {

    const brandFilter =
        document.getElementById("brandFilter")

    const brands =
        [...new Set(
            filteredProducts.map(product => product.brand)
        )]

    brandFilter.innerHTML =
        '<option value="">All Brands</option>'

    brands.forEach(brand => {

        const option =
            document.createElement("option")

        option.value = brand
        option.textContent = brand

        brandFilter.appendChild(option)
    })
}


function applyFilters() {

    const sortBy =
        document.getElementById("sortBy").value

    const maxPrice =
        parseInt(
            document.getElementById("priceRange").value
        )

    const selectedBrand =
        document.getElementById("brandFilter").value

    document.getElementById("priceValue").textContent =
        "₹" + maxPrice

    let filtered =
        filteredProducts.filter(product => {

            if (product.price > maxPrice)
                return false

            if (
                selectedBrand &&
                product.brand !== selectedBrand
            )
                return false

            return true
        })


    switch (sortBy) {

        case "price-low":

            filtered.sort(
                (a, b) => a.price - b.price
            )

            break


        case "price-high":

            filtered.sort(
                (a, b) => b.price - a.price
            )

            break


        case "rating":

            filtered.sort(
                (a, b) => b.rating - a.rating
            )

            break


        default:
            break
    }

    renderProducts(filtered)
}


function renderProducts(products = filteredProducts) {

    const productGrid =
        document.getElementById("productGrid")

    productGrid.innerHTML = ""

    if (products.length === 0) {

        productGrid.innerHTML =
            '<p>No products found matching your criteria.</p>'

        return
    }


    products.forEach(product => {

        const productCard =
            document.createElement("div")

        productCard.className = "product-card"

        productCard.onclick =
            () => showProduct(product.id)


        productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">

        <div class="product-card-content">

            <div class="product-brand">
                ${product.brand}
            </div>

            <h3>${product.name}</h3>

            <div class="product-rating">
                ${"★".repeat(Math.floor(product.rating))}
                ${"☆".repeat(5 - Math.floor(product.rating))}
                ${product.rating}
            </div>

            <div class="product-price">

                <span class="current-price">
                    ₹${product.price}
                </span>

                <span class="original-price">
                    ₹${product.originalPrice}
                </span>

                <span class="discount">
                    ${product.discount}% OFF
                </span>

            </div>

        </div>
        `

        productGrid.appendChild(productCard)
    })
}


function showProduct(productId) {

    const product =
        products.find(p => p.id === productId)

    if (!product)
        return


    if (!recentlyViewed.includes(productId)) {

        recentlyViewed.unshift(productId)

        if (recentlyViewed.length > 10) {
            recentlyViewed.pop()
        }

        saveRecentlyViewed()
    }


    const productDetail =
        document.getElementById("productDetail")


    const deliveryDate = new Date()

    deliveryDate.setDate(
        deliveryDate.getDate() + 7
    )


    productDetail.innerHTML = `

    <div>

        <img
            src="${product.image}"
            alt="${product.name}"
            class="product-image"
        >

    </div>


    <div class="product-info">

        <h1>${product.name}</h1>

        <div class="brand">
            ${product.brand}
        </div>


        <div class="product-rating">

            ${"★".repeat(Math.floor(product.rating))}
            ${"☆".repeat(5 - Math.floor(product.rating))}

            ${product.rating}/5

        </div>


        <div class="product-price">

            <span class="current-price">
                ₹${product.price}
            </span>

            <span class="original-price">
                ₹${product.originalPrice}
            </span>

            <span class="discount">
                ${product.discount}% OFF
            </span>

        </div>


        <div class="description">
            ${product.description}
        </div>


        <div class="product-option">

            ${product.colors.length > 0 ? `

                <div class="option-group">

                    <label>Color:</label>

                    <select id="selectedColor">

                        ${product.colors.map(color =>
                            `<option value="${color}">
                                ${color}
                            </option>`
                        ).join("")}

                    </select>

                </div>

            ` : ""}


            ${product.sizes.length > 0 ? `

                <div class="option-group">

                    <label>Size:</label>

                    <select id="selectedSize">

                        ${product.sizes.map(size =>
                            `<option value="${size}">
                                ${size}
                            </option>`
                        ).join("")}

                    </select>

                </div>

            ` : ""}

        </div>


        <div class="address-section">

            <h3>Delivery Address</h3>


            ${currentUser.address ? `

                <p>${currentUser.address}</p>

                <button
                    class="btn-secondary"
                    onclick="showPage('account')"
                >
                    Change Address
                </button>

            ` : `

                <p>No address added</p>

                <button
                    class="btn-secondary"
                    onclick="showPage('account')"
                >
                    Add Address
                </button>

            `}

        </div>


        <div class="delivery-info">

            <h4>Delivery Information</h4>

            <p>
                📅 Delivery by
                ${deliveryDate.toLocaleDateString()}
            </p>

            <p>
                ↩️ 10 days return policy
            </p>

            <p>
                💰 Cash on delivery available
            </p>

        </div>


        <div class="product-actions">

            <button
                class="btn-primary"
                onclick="addToCart(${product.id})"
            >
                Add to Cart
            </button>

            <button
                class="btn-secondary"
                onclick="buyNow(${product.id})"
            >
                Buy Now
            </button>

        </div>

    </div>
    `

    showPage("product")
}

function addToCart(productId){
    const product = products.find(p => p.id === productId)
    if(!product) return;

    const selectedColor = document.getElementById("selectedColor")?.
    value || " ";

    const selectedSize = document.getElementById("selectedSize")?.
    value || " ";

    const existingItem = cart.find(items =>
        items.id ===productId &&
        items.color === selectedColor &&
        items.size === selectedSize
    )

    if(existingItem){
        existingItem.quantity += 1;
    }else{
        cart.push ({
            id:productId,
            name:product.name,
            brand:product.brand,
            price:product.price,
            originalPrice:product.originalPrice,
            discount:product.discount,
            image:product.image,
            color:selectedColor,
            size:selectedSize,
            quantity:1
        })
    }
    updateCartCount();
    saveCartData();
    alert("Product Added to Cart!");
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const cartSummary = document.getElementById("cartSummary");

    it(cart.length === 0) (
        cartItems.innerHTML = `<p> Your cart is empty. <a href="#" 
        onclick= "showPage(\'home')"`
    )
}

function updateCartCount() {
    const cartCount = cart.reduce((total,item)=> total + item.quantity,0)
    document.getElementById("cartCount").textContent = cartCount
}

function saveCartData() {
    try{
        window.cartData = cart
    } catch(e) {
        console.log("Storage  not available.");
    }
}

function saveRecentlyViewed() {
    try{
        window.recentlyViewedData = recentlyViewed;
    }catch(e){
        console.log("Storage not available");
    }
}