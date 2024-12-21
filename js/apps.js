const buttons = document.getElementsByTagName("button");




function updateTotal() {
  const basePrice = 1299;
  const memoryCost = parseInt(
    document.getElementById("memory-cost").textContent
  );
  const storageCost = parseInt(
    document.getElementById("storage-cost").textContent
  );
  const deliveryCost = parseInt(
    document.getElementById("delivery-cost").textContent
  );

  return basePrice + memoryCost + storageCost + deliveryCost;
}




for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (buttons[i].id === "8gb-memory") {
      customizationPrice("memory-cost", 0);
    } else if (buttons[i].id === "16gb-memory") {
      customizationPrice("memory-cost", 150);
    } else if (buttons[i].id === "256gb-storage") {
      customizationPrice("storage-cost", 0);
    } else if (buttons[i].id === "512gb-storage") {
      customizationPrice("storage-cost", 100);
    } else if (buttons[i].id === "1tb-storage") {
      customizationPrice("storage-cost", 200);
    } else if (buttons[i].id === "late-delivery") {
      customizationPrice("delivery-cost", 0);
    } else if (buttons[i].id === "early-delivery") {
      customizationPrice("delivery-cost", 20);
    } else  {
      promocode();
    }
  });
}



function customizationPrice(id, cost) {
  const now = document.getElementById(id);
  now.textContent = cost;
  const totalCost = updateTotal();
  const totalPrice = document.getElementById("total-price");
  totalPrice.textContent = totalCost;
  let el = document.getElementById("user-payment");
  el.textContent = totalCost;

}




function promocode() {
  const promoInput = document.getElementById("input-field");
  const promoCode = promoInput.value.trim();
  const promoCodeLower = promoCode.toLowerCase();
  const totalPriceElement = document.getElementById("total-price");


  if (promoCodeLower === "ostad") {
    const originalTotal = updateTotal();
    const discountedTotal = originalTotal * 0.9; // 10% discount
    totalPriceElement.textContent = discountedTotal.toFixed(2); // Update total price  

    let el = document.getElementById("user-payment"); /// get user payment
    el.textContent = discountedTotal.toFixed(2); // Update user payment
    
    promoInput.value = ""; // Clear input field

    alert("Promo code applied successfully! 10% discount applied.");

  } else {
    alert("Invalid promo code. Please try again.");
  }
}
