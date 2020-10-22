ajaxGet("http://localhost:3000/api/cameras", function (reponse) {
  let cameras = JSON.parse(reponse);
  console.log(cameras);
  // Boucle pour récupérer les caméras
  cameras.forEach(function (cameraList) {
    // Récupération de l'élément main
    let productDisplay = document.getElementById("productDisplay");
    let newProduct = createProductBloc(cameraList);
  });
});

displayCartItemsNumber();

function createProductBloc(cameraList) {
  // Création des éléments
  let containerCol = document.createElement("div");
  let card = document.createElement("div");
  let cameraImage = document.createElement("img");
  let cardBody = document.createElement("div");
  let cameraName = document.createElement("h5");
  let cameraPrice = document.createElement("p");
  let cameraDescription = document.createElement("a");
  let cameraButton = document.createElement("button");

  // Personnalisation des éléments
  containerCol.className = "col mb-4";
  card.className = "card h-100";
  cameraImage.className = "card-img-top";
  cameraImage.src = cameraList.imageUrl;
  cardBody.className = "card-body";
  cameraName.className = "card-title";
  cameraName.textContent = cameraList.name;
  cameraPrice.className = "card-text";
  cameraPrice.textContent = displayPrice(cameraList.price) + " €";
  cameraButton.className = "btn btn-lg";
  cameraButton.textContent = "Voir l'article";
  cameraDescription.href = "product.html?id=" + cameraList._id;

  // Ajout des éléments
  productDisplay.appendChild(containerCol);
  containerCol.appendChild(card);
  card.appendChild(cameraImage);
  card.appendChild(cardBody);
  cardBody.appendChild(cameraName);
  cardBody.appendChild(cameraPrice);
  cardBody.appendChild(cameraDescription);
  cameraDescription.appendChild(cameraButton);
};
