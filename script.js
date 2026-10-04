let categories =[]
let products = []

async function loadData(){
    try{
       const response = await fetch("data.json")
       if(!response.ok){
        throw new Error("Network response was not ok");
       }
       const data = await response.json()
       categories = data.categories
       products = data.products

    }catch(error){
        console.error("Error loading data",error);

        document.body.innerHTML = '<div style="text-align:center; margin-top: 50px"><h2>Error loading data. Please refresh the page.</h2></div>'
    }
}

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