const cookieUI = document.getElementById('cookie');
let clicksCounter = 0;

(function init() {
  if (localStorage.getItem('clicksCounter') !== null) {
    clicksCounter = localStorage.getItem('clicksCounter');
  }
})();

function isClicked(e) {
  if (e.target) {
    countClick();
  }
}

function countClick() {
  const outputUI = document.getElementById('output');
  if (clicksCounter === 0) {
    outputUI.innerHTML = `<span class="bold">${++clicksCounter}</span> click`;
    localStorage.setItem('clicksCounter', clicksCounter);
  } else {
    outputUI.innerHTML = `<span class="bold">${++clicksCounter}</span> clicks`;
    localStorage.setItem('clicksCounter', clicksCounter);
  }
}

cookieUI.addEventListener('mousedown', isClicked);
