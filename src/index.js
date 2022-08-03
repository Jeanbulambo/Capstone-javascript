import logo from './assets/logo.png';
import './style.css';

const image = document.getElementById('imageLogo');
const imageLogo = document.createElement('img');
imageLogo.src = logo;
imageLogo.className = 'logoStyle';
image.appendChild(imageLogo);

document.querySelector('.theme').add.click(() => {
  const currTheme = document.querySelector('body').attr('data-theme');
  document.querySelector('body').attr('data-theme', `${currTheme === 'light' ? 'dark' : 'light'}`);
});