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
  // incrementer de 1 par rapport a la longueur du tableau
  let totalPrice = itemsInCart[0].price + itemsInCart[1].price;
  console.log(totalPrice);
  let displayTotalCost = document.createElement("th");
  displayTotalCost.textContent = displayPrice(totalPrice) + " " + "€";
  displayPriceRow.appendChild(displayTotalCost);
}

let contact = {
  firstName: document.getElementById("firstname").value,
  lastName: document.getElementById("name").value,
  address: document.getElementById("adress").value,
  city: document.getElementById("city").value,
  email: document.getElementById("email").value,
};

let products = [];
for (let i = 0; i < itemsInCart.length; i++) {
  products.push(itemsInCart[i].id);
}


// Gestion des regex
function checkInfo() {
  let stringInfo = /^[A-Z]{1}[a-z]/;
  let mailInfo = /.+@.+\..+/;

  let formName = document.getElementById("name").value;
  let formFirstName = document.getElementById("firstname").value;
  let formAdress = document.getElementById("adress").value;
  let formCity = document.getElementById("city").value;
  let formMail = document.getElementById("email").value;

  if (stringInfo.test(formName) == false) {
    alert("Votre nom doit être renseigné");
    return false;
  } else if (stringInfo.test(formFirstName) == false) {
    alert("Votre prénom doit être renseigné");
    return false;
  } else if (stringInfo.test(formAdress) == false) {
    alert("Votre adresse doit être renseignée");
    return false;
  } else if (formCity == false) {
    alert(" Votre ville doit être renseignée.");
    return false;
  } else if (mailInfo.test(formMail) == false) {
    alert("Votre adresse mail n'est pas au bon format");
    return false;
  } else {
    return true;
  }
}

//Création de l'objet à envoyer à l'API
const order = {
  contact,
  products,
};

console.log(order);

function confirmOrder() {
  let sendInfoBtn = document.getElementById("order");
}

let requestInfo = {
  method: "POST",
  body: JSON.stringify(order),
  headers: { "Content-type": "application/json; charset=UTF-8" },
};

fetch("http://localhost:3000/api/cameras/order", requestInfo)
  .then((response) => response.json())
  .then((orderConfirm) => {
    console.log(orderConfirm);
  });

displayItemsInCart();
displayTotalPrice();
confirmOrder();
