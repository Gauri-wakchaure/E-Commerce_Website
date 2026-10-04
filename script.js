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
    document.getElementById("categoryTitle").textContent = category ? category.name : "Products"; 
  } 
}