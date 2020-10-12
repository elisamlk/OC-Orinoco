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

// Gestion des regex
function checkInfo() {
  let stringInfo = /^[A-Za-z0-9]{1,}/;
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







