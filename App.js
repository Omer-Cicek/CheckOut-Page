const subtotal = document.getElementById('cart-subtotal');
const arr1 = [];
const arr2 = [];
const arr3 = [];
const ömer = document.querySelectorAll('.product-info');

//AddEventListener
document.addEventListener('click', (e) => {
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
  ömer.forEach((infocard, i) => {
    let countItem = infocard.querySelector('#product-quantity').innerText;
    let priceItem = infocard
      .getElementsByTagName('p')[0]
      .innerText.split(' ')[0];
    let productTotal = infocard.querySelector('.product-line-price');
    productTotal.innerText = (countItem * priceItem).toFixed(2);
  });
});
