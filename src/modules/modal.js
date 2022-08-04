import getCountries from './api.js';

export default async function modal() {
  const item = await getCountries();
  let modal = '';
  item.forEach((item) => {
    const popUp = `
            <div class="modal-cont">
                <div class="modal-popup">
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
                        <p class="expl">
                            Area: <span class="temp">${item.area}</span>
                        </p>
                        <p class="expl">
                            Time-Zone: <span class="temp">${item.timezones}</span>
                        </p>
                        <p class="expl">
                            Code: <span class="temp">${item.numericCode}</span>
                        </p>
                         <button class="back-button">Home Page</button>

                    <div class="comment-form">
                        <h3 class="comment-title">Comments</h3>
                        <div id="comments">
                            <p> Jean</p>
                            <p>name</p>
                            <p> World</p>
                        </div>
                    </div>
                    <div class="add-comment">
                        <h3 class="comment-title">Add a Comment</h3>
                        <form class="form">
                            <input type="text" placeholder="Your name">
                            <textarea type="text" > Your comments</textarea>
                            <button type="button" class="submit">Comment</button>
                        </form>
                    </div>
                </div>
               </div>
            </div>
        `;
        modal += popUp;
    });
    $('#popupShow').append(modal);
}