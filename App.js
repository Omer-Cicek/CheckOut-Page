//
//
//
//
//
//
const subtotal = document.getElementById('cart-subtotal');
console.log(subtotal);

document.addEventListener('click', (e) => {
  console.log(
    e.target.parentElement.parentElement.querySelector('p').innerText
  );
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
});
