// Fonction qui permet de récupérer le panier
function getItemsFromCart(){
    let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    return cart
    };

// Affichage du nombre d'élements dans le panier
function displayCartItemsNumber(){
    let cart = getCart()
    document.querySelector("span").textContent = cart.length;
}

function displayPrice(price){
    return price / 100;
};