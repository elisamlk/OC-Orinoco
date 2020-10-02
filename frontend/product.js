// Récupération de l'ID produit
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
//console.log(id);
let url = "http://localhost:3000/api/cameras/" + id;
//console.log(url);
// Panier
let cart = getCart();
displayCartItemsNumber();

ajaxGet(url, function (response) {
  let cameraDescription = JSON.parse(response);
  console.log(cameraDescription);
  let productDescription = document.getElementById("productDescription");
  let productSelected = displayProductSelected(cameraDescription);
});

function displayProductSelected(cameraDescription) {
  // Création div principale
  let mainContainer = document.createElement("div");
  mainContainer.className = "row no-gutters";
  productDescription.appendChild(mainContainer);

  // Création div secondaire
  let secondContainer = document.createElement("div");
  secondContainer.className = "col-md-4";
  mainContainer.appendChild(secondContainer);

  // Création de l'image
  let imageDescription = document.createElement("img");
  imageDescription.className = "card-img";
  imageDescription.src = cameraDescription.imageUrl;
  secondContainer.appendChild(imageDescription);

  // Création troisième div
  let thirdContainer = document.createElement("div");
  thirdContainer.className = "col-md-8";
  mainContainer.appendChild(thirdContainer);

  // Création div cardBody
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  thirdContainer.appendChild(cardBody);

  // Création titre
  let titleDescription = document.createElement("h5");
  titleDescription.className = "card-title";
  titleDescription.textContent = cameraDescription.name;
  cardBody.appendChild(titleDescription);

  // Création de la description
  let itemDescription = document.createElement("p");
  itemDescription.className = "card-text";
  itemDescription.textContent = cameraDescription.description;
  cardBody.appendChild(itemDescription);

  // Création du prix
  let itemPrice = document.createElement("p");
  itemPrice.className = "card-text";
  itemPrice.textContent = displayPrice(cameraDescription.price) + " €";
  cardBody.appendChild(itemPrice);

  // Choix des lentilles
  let select = document.createElement("select");
  select.className = "card-text";
  cardBody.appendChild(select);
  let firstoption = document.createElement("option");
  firstoption.textContent = "Sélectionner une lentille";
  select.appendChild(firstoption);
  for (let i = 0; i < cameraDescription.lenses.length; i++) {
    let lenseoption = document.createElement("option");
    lenseoption.textContent = cameraDescription.lenses[i];
    lenseoption.setAttribute("value", cameraDescription.lenses[i]);
    select.appendChild(lenseoption);
  }

  // Création du bouton ajout au panier
  let addToCart = document.createElement("button");
  addToCart.className = "card-text btn btn-md";
  addToCart.id = "addToCart";
  addToCart.textContent = "Ajouter au panier";
  cardBody.appendChild(addToCart);

  let buttonAction = document.getElementById("addToCart");
  buttonAction.addEventListener("click", function () {
    addElementToCart(cameraDescription);
  });
}

console.log(productDescription);

// Compteur panier et ajout des produits dans le localStorage
function addElementToCart(cameraDescription) {
  let lenseSelect = document.querySelector("select");
  let lenseChoice = lenseSelect.selectedIndex;
  if (lenseChoice == 0) {
    alert("Veuillez sélectionner une lentille");
  } else if (lenseChoice != 0) {
    let cameraInCart = {
      id: cameraDescription._id,
      name: cameraDescription.name,
      price: cameraDescription.price,
      imageUrl: cameraDescription.imageUrl,
      lens: cameraDescription.lenses[lenseChoice],
    };
  
  cart.push(cameraInCart);
  let addToCart = JSON.stringify(cart);
  localStorage.setItem("cart", addToCart);
  alert("Votre article a été ajouté au panier");
  console.log("Cet article a été ajouté" + "" + addToCart);
  displayCartItemsNumber();
  }
}


