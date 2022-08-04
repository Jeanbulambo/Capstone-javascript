import getCountries from './api.js';

export default async function renderCountries() {
  const country = await getCountries();
  let card = '';
  country.forEach((country) => {
    const htmlSegment = `
        <div class="card" data-info=${country.alpha2Code}>
            <div class="flag">
                <img class="flag-image" src=${country.flag} alt=${country.name} />
            </div>
            <div class="country-data">
                <span class="country-name">${country.name}</span>
                <p class="des">
                    Capital:
                    <span class="population">${country.capital}</span>
                </p>
            </div>
            <div class="likes">
                <p class="p">
                    <span class="material-symbols-outlined">
                        favorite
                    </span> 
                    like
                </p>
            </div>
            <div class="comment"> 
                <button type="button" class="">Comments</button>
            </div>
        </div>
        `;
    card += htmlSegment;
  });
  $('#coutriesShow').append(card);
}