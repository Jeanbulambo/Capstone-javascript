import logo from './assets/logo.png';
import './style.css';

const image = document.getElementById('imageLogo');
const imageLogo = document.createElement('img');
imageLogo.src = logo;
imageLogo.className = 'logoStyle';
image.appendChild(imageLogo);

$('.theme').click(() => {
  const currTheme = $('body').attr('data-theme');
  $('body').attr('data-theme', `${currTheme === 'light' ? 'dark' : 'light'}`);
});

// ===== API ====

const countryName = [];
const dataCountry = [];

fetch('https://restcountries.com/v2/all')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    displayBlocks(data);
    displayPopup(data);
  });
console.log(dataCountry);

const displayBlocks = (data) => {
  const card = data
    .map((item) => `
<div class="card" data-info=${item.alpha2Code}>
<div class="flag">
<img class="flag-image" src=${item.flag} alt=${item.name} />
</div>
<div class="country-data">
<span class="country-name">${item.name}</span>
<p class="des">
Populations:
<span class="population">${item.population.toLocaleString()}</span>
</p>
</div>
<div class="likes"><p><span class="material-symbols-outlined">
favorite
</span> like</p></div>
<div class="comments">
<div class="comment"> <button type="button" class="">Comments</button> </span> </div>
</div>
</div>
`)
    .join('');
  $('#coutriesShow').append(card);
};
