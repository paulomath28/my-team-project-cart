import{u as o,g as s}from"./utils-DUQbpE7m.js";function n(){const r=s("so-cart").map(t=>l(t));document.querySelector(".product-list").innerHTML=r.join("")}function l(a){var c,e;const r=((e=(c=a.Colors)==null?void 0:c[0])==null?void 0:e.ColorName)||"No Color";return`<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${a.Image}"
        alt="${a.Name}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${a.Name}</h2>
    </a>
    <p class="cart-card__color">${r}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${a.FinalPrice}</p>
  </li>`}n();o();
