/*
     <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
*/

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
    productName.textContent = itemsInCart.name;
    productName.setAttribute("scope", "row");
    tr.appendChild(productName);
  }
  console.log(productInCart);
}

displayItemsInCart();

/*

// Récupération des élements stockés dans le localStorage
let cart = Object.keys(localStorage);
console.log(cart);

for (i = 0; i < cameraInCart.length; i++) {
  let camera = JSON.parse(localStorage.getItem(cart[i]));
  console.log(camera);
  // Récupération de la balise <tbody>
  let productInCart = document.getElementById("productInCart");


  // Création des lignes du tableau
  let tr = document.createElement("tr");
  productInCart.appendChild(tr);

  // Ajout du nom
  let productName = document.createElement("th");
  productName.textContent = camera.name;
  productName.setAttribute("scope", "row");
  tr.appendChild(productName);

  // Ajout de l'image
  let imageContainer = document.createElement("th");
  imageContainer.setAttribute("scope", "row");
  tr.appendChild(imageContainer);
  let productImage = document.createElement("img");
  productImage.className = "cart-img";
  productImage.src = camera.imageUrl;
  productImage.style.width = "150px";
  productImage.style.height = "120px";
  imageContainer.appendChild(productImage);

  // Ajout du prix
  let productPrice = document.createElement("th");
  productPrice.setAttribute("scope", "row");
  productPrice.textContent = camera.price/100 + "" + "€";
  tr.appendChild(productPrice);

  // Ajout de la quantité



  // Ajout du prix total
  

  console.log(productInCart);
}

*/
