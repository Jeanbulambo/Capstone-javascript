import getCountries from './api.js';

export default async function modal() {
  const item = await getCountries();
  let modal = '';
  item.forEach((item) => {
    const popUp = `
            <div class="modal-cont">
                <div class="back-btn">
                    <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-left"
                    class="svg-inline--fa fa-caret-left fa-w-6"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192 512"
                    >
                        <path
                            fill="currentColor"
                            d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"
                        ></path>
                    </svg>
                    <button>Back</button>
                <div class="division>
                    <div class="flag-popUp">
                        <img class="flag-imagepopup" src=${item.flag} alt=${item.name} />
                    </div>
                    <div class="right">
                        <div class="country-name">${item.name}</div>
                        <p class="expl">
                            Native Name: <span class="temp">${item.nativeName}</span>
                        </p>
                        <p class="expl">
                            Population: <span class="temp">${item.population.toLocaleString()}</span>
                        </p>
                        <p class="expl">
                            Region: <span class="temp">${item.region}</span>
                        </p>
                        <p class="expl">
                            Sub Region: <span class="temp">${item.subregion}</span>
                        </p>
                        <p class="expl">
                            Capital: <span class="temp">${item.capital}</span>
                        </p>
                    </div>
                </div>
            </div>        
        `;
    modal += popUp;
  });
  $('#popupShow').append(modal);
}