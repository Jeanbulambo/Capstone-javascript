import logo from './assets/logo.png';
import './style.css';

const image = document.getElementById("imageLogo");
const imageLogo = document.createElement('img');
imageLogo.src = logo;
imageLogo.className = "logoStyle";
image.appendChild(imageLogo);

$(".theme").click(() => {
    let currTheme = $("body").attr("data-theme");
    $("body").attr("data-theme", `${currTheme == "light" ? `dark` : `light`}`);
}); 