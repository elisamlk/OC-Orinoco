displayCartItemsNumber();

let itemsInCart = getCart();
console.log(itemsInCart);
console.log(typeof itemsInCart);
let productInCart = document.getElementById("productInCart");

// Affichage des produits dans le tableau panier
function displayItemsInCart() {
  // Boucle pour récupérer les éléments du panier
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
  }
  console.log(productInCart);
}

function displayTotalPrice() {
  console.log(itemsInCart);
  let displayPriceRow = document.createElement("tr");
  productInCart.appendChild(displayPriceRow);
  let totalPriceRow = document.createElement("th");
  totalPriceRow.textContent = "TOTAL DE VOTRE COMMANDE";
  displayPriceRow.appendChild(totalPriceRow);
  let totalPrice = getTotalPrice(itemsInCart);
  let displayTotalCost = document.createElement("th");
  displayTotalCost.textContent = displayPrice(totalPrice) + " " + "€";
  displayPriceRow.appendChild(displayTotalCost);
}

function getTotalPrice(itemsInCart) {
  let totalPrice = 0;
  for (let i = 0; i < itemsInCart.length; i++) {
    totalPrice = itemsInCart[i].price + totalPrice;
  }
  return totalPrice;
}

function confirmOrder() {
  let sendInfoBtn = document.getElementById("form");
  sendInfoBtn.addEventListener("submit", function (e) {
    e.preventDefault();
    if (checkInfo() == true) {
      // Objet contact
      let contact = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("name").value,
        address: document.getElementById("adress").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
      };
      console.log(contact);

      // Récupération de l'ID du produit
      let products = [];
      for (let i = 0; i < itemsInCart.length; i++) {
        products.push(itemsInCart[i].id);
      }
      console.log(products);
      // Info à envoyer à l'API
      const order = {
        contact,
        products,
      };

      localStorage.setItem("order", JSON.stringify(order));

      let requestInfo = {
        method: "POST",
        body: JSON.stringify(order),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      };

      fetch("http://localhost:3000/api/cameras/order", requestInfo)
        .then((response) => response.json())
        .then(function (orderConfirm) {
          setOrderInStorage(orderConfirm);
          location = "confirmation.html";
        });
    }
  });
}

function setOrderInStorage(orderConfirm) {
  localStorage.setItem("orderId", JSON.stringify(orderConfirm.orderId));
  localStorage.setItem("contactName", orderConfirm.contact["firstName"]);
  localStorage.setItem("totalPrice", getTotalPrice(itemsInCart));
}

displayItemsInCart();
displayTotalPrice();
confirmOrder();
