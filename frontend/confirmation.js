displayCartItemsNumber();

function orderInfo() {
  let orderId = localStorage.getItem("orderId");
  console.log(orderId);
  let contactName = localStorage.getItem("contactName");
  console.log(contactName);
  let totalPrice = localStorage.getItem("totalPrice");
  let confirmMessage = document.querySelector("p");
  confirmMessage.textContent =
    contactName + ", votre commande numéro " + orderId +  " pour un montant de " + displayPrice(totalPrice) + " € a bien été prise en compte.";
  console.log(confirmMessage);
}

orderInfo();
