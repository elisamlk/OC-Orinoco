// Fonction qui permet de récupérer le panier
function getCart() {
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  return cart;
}

// Affichage du nombre d'élements dans le panier
function displayCartItemsNumber() {
  let cart = getCart();
  document.querySelector("span").textContent = cart.length;
}

function displayPrice(price) {
  return price / 100;
}

// Calcul du prix total de la commande


