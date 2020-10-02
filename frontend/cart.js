displayCartItemsNumber();

let itemsInCart = getCart();
console.log(itemsInCart);
console.log(typeof itemsInCart);
let productInCart = document.getElementById("productInCart");

function displayItemsInCart() {
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
    productPrice.textContent = displayPrice(itemsInCart[i].price)+ " " + "€";
    tr.appendChild(productPrice);

    // Selectionner la quantité
    let productQuantity = document.createElement("th");
    productQuantity.setAttribute("scope", "row");
    tr.appendChild(productQuantity);


    // Ajouter le prix total
  };
  console.log(productInCart);

};

displayItemsInCart();
