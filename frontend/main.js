/*<div class="row row-cols-1 row-cols-md-3">
    <div class="col mb-4">
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
*/
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
  cameraPrice.className = cameraPrice.textContent =
    cameraList.price / 100 + " €";
  cameraButton.className = "btn btn-lg";
  cameraButton.textContent = "Voir l'article";
  cameraDescription.href = "product.html?id=" + cameraList._id;

  // Ajout des éléments
  productDisplay.appendChild(containerCol);
  containerCol.appendChild(card);
  card.appendChild(cameraImage);
  card.appendChild(cardBody);
  cardBody.appendChild(cameraName);
  cardBody.appendChild(cameraDescription);
  cameraDescription.appendChild(cameraButton);
};
