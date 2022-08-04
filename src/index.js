import logo from './assets/logo.png';
import './style.css';
import renderCountries from './modules/renderCountries';
import modal from './modules/modal';


const image = document.getElementById('imageLogo');
const imageLogo = document.createElement('img');
imageLogo.src = logo;
imageLogo.className = 'logoStyle';
image.appendChild(imageLogo);



$('.theme').click(() => {
  const currTheme = $('body').attr('data-theme');
  $('body').attr('data-theme', `${currTheme === 'light' ? 'dark' : 'light'}`);
});

renderCountries();
// modal();

// ===== API ====

// const countryName = [];
// const dataCountry = [];

// fetch('https://restcountries.com/v2/all')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     displayBlocks(data);
//     displayPopup(data);
//   });
// console.log(dataCountry);

// const displayBlocks = (data) => {
//   const card = data
//     .map((item) => `
