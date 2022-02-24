//catching DOM elements
const subtotal = document.getElementById('cart-subtotal');
const infoPriceCard = document.querySelectorAll('.product-info');
const subtotalPrice = document.querySelector('#cart-subtotal > p:nth-child(2)');
const taxTotalPrice = document.querySelector('#cart-tax > p:nth-child(2)');
const totalpriceLast = document.querySelector('#cart-total > p:nth-child(2)');
//AddEventListener
document.addEventListener('click', (e) => {
  arr1 = [];
  if (e.target.classList.contains('remove-product')) {
    e.target.closest('.product').remove();
  }
  if (e.target.classList.contains('fa-plus')) {
    e.target.parentElement.parentElement.querySelector('p').innerText =
      +e.target.parentElement.parentElement.querySelector('p').innerText + 1;
  }
  if (e.target.classList.contains('fa-minus')) {
    if (
      +e.target.parentElement.parentElement.querySelector('p').innerText > 1
    ) {
      e.target.parentElement.parentElement.querySelector('p').innerText =
        +e.target.parentElement.parentElement.querySelector('p').innerText - 1;
    } else {
      return;
    }
  }
  //Catching DOM elements inside Foreach
  infoPriceCard.forEach((infocard, i) => {
    let countItem = infocard.querySelector('#product-quantity').innerText;
    let priceItem = infocard
      .getElementsByTagName('p')[0]
      .innerText.split(' ')[0];
    let productTotal = infocard.querySelector('.product-line-price');
    productTotal.innerText = (countItem * priceItem).toFixed(2);
    arr1.push(countItem * priceItem);
  });
  //using reduce method to count subtotal price
  const totalprice = arr1.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  //Displaying total Prices of products
  subtotalPrice.innerText = totalprice.toFixed(2);
  taxTotalPrice.innerText = (+totalprice * 0.18).toFixed(2);
  totalpriceLast.innerText = (+totalprice + 15 + +totalprice * 0.18).toFixed(2);
});
