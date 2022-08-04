import logoAr from './assets/logoAr.png';
import './style.css';
import renderCountries from './modules/renderCountries.js';
import modal from './modules/modal.js';

const image = document.getElementById('imageLogo');
const imageLogo = document.createElement('img');
imageLogo.src = logoAr;
imageLogo.className = 'logoStyle';
image.appendChild(imageLogo);

$('.theme').click(() => {
  const currTheme = $('body').attr('data-theme');
  $('body').attr('data-theme', `${currTheme === 'light' ? 'dark' : 'light'}`);
});

renderCountries();
modal();