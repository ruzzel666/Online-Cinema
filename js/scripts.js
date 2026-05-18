const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
const btnPay = document.querySelector('.button-pay');
const btnClear = document.querySelector('.button-clear');
let cost = 500;
let totalPrice = 0;

Fancybox.bind("[data-fancybox]", {});

function updateAppState() {
  let totalSeats = schemeSvg.querySelectorAll('.active').length;
  totalPrice = totalSeats * cost;
  totalPriceTag.textContent = totalPrice;
  
  if (totalSeats > 0) {
    btnPay.classList.remove('is-disabled');
    btnClear.classList.remove('is-disabled');
  } else {
    btnPay.classList.add('is-disabled');
    btnClear.classList.add('is-disabled');
  }
}

schemeSvg.addEventListener('click', (event) => {
  if(event.target.tagName === 'path' && !event.target.classList.contains('booked') && !event.target.classList.contains('light')) {
    event.target.classList.toggle('active');
    updateAppState();
  }
});

btnClear.addEventListener('click', () => {
  schemeSvg.querySelectorAll('.active').forEach(seat => {
    seat.classList.remove('active');
  });
  updateAppState();
});

menuButton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});