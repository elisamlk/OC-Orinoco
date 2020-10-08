displayCartItemsNumber();

let itemsInCart = getCart();
console.log(itemsInCart);
console.log(typeof itemsInCart);
let productInCart = document.getElementById("productInCart");

function displayItemsInCart() {
  // Boucle pour récupérer les éléments dans le panier
  for (i = 0; i < itemsInCart.length; i++) {
    // Création des lignes du tableau
    let tr = document.createElement("tr");
    productInCart.appendChild(tr);

    // Ajout du nom
    let productName = document.createElement("th");
    productName.textContent = itemsInCart[i].name;
    productName.setAttribute("scope", "row");
    tr.appendChild(productName);

    // Ajout de l'image
    let imageContainer = document.createElement("th");
    imageContainer.setAttribute("scope", "row");
    tr.appendChild(imageContainer);
    let productImage = document.createElement("img");
    productImage.className = "cart-img";
    productImage.src = itemsInCart[i].imageUrl;
    productImage.style.width = "60px";
    productImage.style.height = "60px";
    imageContainer.appendChild(productImage);

    // Ajout du prix
    let productPrice = document.createElement("th");
    productPrice.setAttribute("scope", "row");
    productPrice.textContent = displayPrice(itemsInCart[i].price) + " " + "€";
    tr.appendChild(productPrice);

    // Ajout de la lentille séléctionnée
    let lenseSelected = document.createElement("th");
    lenseSelected.setAttribute("scope", "row");
    lenseSelected.textContent = itemsInCart[i].lens;
    tr.appendChild(lenseSelected);

    // Supprimer un produit du panier
  }
  console.log(productInCart);
}

displayItemsInCart();
