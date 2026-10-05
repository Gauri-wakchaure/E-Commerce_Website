let categories =[] 
let products = []  
  
let recentlyViewed = [] 
let filteredProducts = [];
  
async function loadData(){ 
    try{ 
       const response = await fetch("data.json") 
       if(!response.ok){ 
        throw new Error("Network response was not ok"); 
       } 
       const data = await response.json() 
       categories = data.categories 
       products = data.products 
  
       initializeApp() 
  
    }catch(error){ 
        console.error("Error loading data",error); 
  
        document.body.innerHTML = '<div style="text-align:center; margin-top: 50px"><h2>Error loading data. Please refresh the page.</h2></div>' 
    } 
} 
  
function initializeApp(){ 
    renderCategories() 
    showPage("home") 
} 
  
document.addEventListener("DOMContentLoaded", function() { 
loadData() 
}) 
  
function showPage(pageId){ 
    const pages = document.querySelectorAll(".page") 
    pages.forEach(page => page.classList.add("hidden")) 
  
    const targetPage = document.getElementById(pageId + "Page") 
    if(targetPage){ 
        targetPage.classList.remove("hidden") 
    } 
  
    switch(pageId){ 
        case "home": 
            renderCategories(); 
            break; 
        case "cart": 
            renderCart(); 
            break; 
        case "orders": 
            renderOrders(); 
            break; 
        case "account": 
            renderAccountPage(); 
            break; 
    } 
} 
  
function renderCategories(){ 
    const categoryGrid = document.getElementById("categoryGrid") 
    categoryGrid.innerHTML = ""; 
  
    categories.forEach(category =>{ 
        const categoryCard = document.createElement("div"); 
        categoryCard.className = "category-card"; 
        categoryCard.onclick =()=>showCategory(category.id) 
  
        let cardContent = ` 
        <img src="${category.image}" alt="${category.name}"> 
        <div class="category-card-content"> 
        <h3>${category.name}</h3> 
        <p>${category.description}</p>`; 
  
        if(category.isRecentlyViewed){ 
            if(recentlyViewed.length === 0) { 
                cardContent +='<p><em> No recently viewed products</em></p>'; 
            }else { 
                cardContent += `<p> You have ${recentlyViewed.length} recently viewed products</p>`; 
            } 
        } 
           
        cardContent +=`<a href="#" class="category-btn">View Products</a> 
        </div>`; 
  
        categoryCard.innerHTML = cardContent; 
        categoryGrid.appendChild(categoryCard); 
}) 
} 
 
function showCategory(categoryId){ 
    if(categoryId === "recently-viewed"){ 
     filteredProducts = products.filter(product => recentlyViewed.includes(product.id)); 
       
    document.getElementById("categoryTitle").textContent = "Recently Viewed Products"; 
}else { 
    filteredProducts = products.filter(product => product.category === categoryId); 
    const category = categories.find(cat => cat.id === categoryId); 
    document.getElementById("categoryTitle").textContent = category.name; 
  } 
  populateFilters();
  renderProducts();
  showPage("category");
}

function populateFilters(){
    const brandFilter = document.getElementById("brandFilter");
    const brands = [...new Set(filteredProducts.map(product => product.brand))]
    
    brandFilter.innerHTML ='<option value="">All Brands</option>';
    brands.forEach(brand=>{
        const option=document.createElement("option")
        option.value=brand;
        option.textContent=brand;
        brandFilter.appendChild(option)
    })
}

function applyFilter(){ 
    const sortBy = document.getElementById("sortBy").value; 
    const maxPrice = parseInt(document.getElementById("priceRange").value); 
    const selectedBrand = document.getElementById("brandFilter").value; 

    document.getElementById("priceValue").textContent = "₹" + maxPrice; 

    let filtered = filteredProducts.filter(product => { 
        if(product.price > maxPrice) return false; 
        if(selectedBrand && product.brand !== selectedBrand) 
            return false;
        return true;
    });

    switch(sortBy) {
        case "price-low":
            filtered.sort((a,b) =>a.price-b.price)
            break;
        case "price-high":
            filtered.sort((a,b) =>b.price-a.price)
            break;
        case "rating":
            filtered.sort((a,b) =>b.rating-a.rating)
            break;
        default:
            break;
    }

    renderProducts(filtered);
}

function renderProducts(products = filteredProducts){
    const productGrid = document.getElementById("productGrid")
    productGrid.innerHTML="";

    if(products.length === 0) {
        productGrid.innerHTML='<p>No products found matching your criteria.</p>';
        return;
    }

    product.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className="product-card";

        productCard.onclick =() => showProduct(product.id);

        productCard.innerHTML= `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-card-content">
          <div class="product-brand">${product.brand}</div>
          <h3>${product.name}<h3>
          <div class="product-rating">
          ${"★".repeat(Math.floor(product.rating))}${"☆".
          repeat(5-Math.floor(product.rating))}
          ${product.rating}
          </div>
          <div class="product-price">
          <span class="current-price">₹${product.price}</span>
          <span class="original-price">₹${product.originalPrice}</span>
          <span class="discount">₹${product.discount}% OFF</span>
          </div>
          </div>`;


          productGrid.appendChild(productCard);
    })
    
}