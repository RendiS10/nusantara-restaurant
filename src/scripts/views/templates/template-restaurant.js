/* eslint-disable no-unused-vars */
import CONFIG from '../../global/config';

const listRestaurantCard = (resto) => `
<a href="#/detail/${resto.id}" class="cards">
<div class="cards">
<picture>
<source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" type="image/webp">
<source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" type="image/jpeg">
<img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" class="lazyload" />
</picture>
<div class="card-body">
<p tabindex="0" style='color:#FDD663;'>Rating: ${resto.rating}</p>
  <h3 tabindex="0" style='color:#F4511E;' >Nama Restaurant : ${resto.name}</h3>
  <p tabindex="0" style='color:black;'>Kota : ${resto.city}</p>
</div>
</div>
</a>
`;

const listRestaurantDetail = (resto) => `
<div class="detail-restaurant">
<div class="detail-restaurant-img">
<h2 style="color : red;display : flex; justify-content : center;">${resto.name}</h2>
<picture>
<source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" type="image/jpeg">
<source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}-small.jpg" type="image/webp">
<img src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}-large.jpg" class="lazyload" style = "width : 20rem"/>
</picture>
</div>
<div class="detail-info">
<h3>Deskripsi Restaurant</h3>
<hr>
<p style="font-size : 12px;">${resto.description}</p>
<p style="color : red; display : flex; justify-content : center;">Alamat : ${resto.address}</p>
<p style="color : red;display : flex; justify-content : center;">Kota : ${resto.city}</p>
</div>
</div>
<br>
<hr>
<h3>Menu Makanan</h3>
<div class="detail-listMenu">
${resto.menus.foods
    .map(
      (food) => `
<div class="detail-listItem">
<i class="fas fa-utensils"></i>
<p>${food.name}</p>
</div>
`,
    )
    .join('')}
    </div>
<br>
<br>
<hr>
<h3>Menu Minuman</h3>
<div class="detail-listMenu">
${resto.menus.drinks
    .map(
      (drink) => `
<div class="detail-listItem">
<i class="fa-solid fa-beer-mug-empty"></i>
<p>${drink.name}</p>
</div>
  `,
    )
    .join('')}
    </div>
<br>
<br>
<hr>
<h3>Review Customer</h3>
<div class="detail-review" id="detail-review">
${resto.customerReviews
    .map(
      (customer) => `
  <div class=detail-customer>
  <p>Nama : ${customer.name}</p>
  <p>Ulasan : ${customer.review}</p>
  <p>Tanggal Review : ${customer.date}</p>
  </div>
  `,
    )
    .join('')}
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  listRestaurantCard,
  listRestaurantDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
