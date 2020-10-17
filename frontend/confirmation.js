displayCartItemsNumber();

function orderInfo() {
  let orderId = localStorage.getItem("orderId");
  console.log(orderId);
  let contactName = localStorage.getItem("contactName");
  console.log(contactName);
  let confirmMessage = document.querySelector("p");
  confirmMessage.textContent =
    contactName + ", merci pour votre commande numéro " + orderId;
  console.log(confirmMessage);
}

window.onload = orderInfo();
