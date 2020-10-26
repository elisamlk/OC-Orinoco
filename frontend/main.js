ajaxGet("http://localhost:3000/api/cameras", function (reponse) {
  let cameras = JSON.parse(reponse);
  console.log(cameras);
  // Boucle pour récupérer les caméras
  cameras.forEach(function (camera) {
    // Récupération de l'élément main
    let productDisplay = document.getElementById("productDisplay");
    createProductBloc(camera, productDisplay);
  });
});

displayCartItemsNumber();

function createProductBloc(camera, container) {
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
  cameraImage.src = camera.imageUrl;
  cardBody.className = "card-body";
  cameraName.className = "card-title";
  cameraName.textContent = camera.name;
  cameraPrice.className = "card-text";
  cameraPrice.textContent = displayPrice(camera.price) + " €";
  cameraButton.className = "btn btn-lg";
  cameraButton.textContent = "Voir l'article";
  cameraDescription.href = "product.html?id=" + camera._id;

  // Ajout des éléments
  container.appendChild(containerCol);
  containerCol.appendChild(card);
  card.appendChild(cameraImage);
  card.appendChild(cardBody);
  cardBody.appendChild(cameraName);
  cardBody.appendChild(cameraPrice);
  cardBody.appendChild(cameraDescription);
  cameraDescription.appendChild(cameraButton);
};
