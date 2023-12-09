import"./assets/import-251a534b.js";import{a as e}from"./assets/vendor-a61d8330.js";const n="https://food-boutique.b.goit.study/api/products",c=()=>{const t={limit:5};return e(`${n}/popular`,{params:t})},o=()=>e(`${n}/discount`),a={popular:document.querySelector(".popular_list"),discount:document.querySelector(".discount_list")};document.addEventListener("DOMContentLoaded",i);document.addEventListener("DOMContentLoaded",d);async function i(){try{const{data:t}=await c();a.popular.insertAdjacentHTML("beforeend",r(t)),console.log(t)}catch(t){console.log(t)}}function r(t){return t.map(s=>` <li class="card_item">
      <div class="card_img">
        <img
          src=${s.img}
          width="56"
          height="56"
          alt=${s.name}
        />
      </div>
      <div class="card_elements">
        <h3 class="card_title">${s.name}</h3>
        <p class="card_text card_text--margin_b">
          <span class="card_el">Category:</span>&nbsp;<span>${s.category}</span>
        </p>
        <p class="card_text">
          <span class="card_el">Size:</span>&nbsp;<span>${s.size}</span
          ><span class="card_el card_el--margin_l">Popularity:</span>&nbsp;<span
            >${s.popularity}</span
          >
        </p>
      </div>
      <button type="button" class="card_btn">
        <svg class="order_btn" width="12" height="12">
          <use href="../svg/icons.svg#icon-cart-hover"></use>
        </svg>
      </button>
    </li>`).join("")}async function d(){try{const{data:t}=await o();a.discount.insertAdjacentHTML("beforeend",l(t.slice(0,2))),console.log(t)}catch(t){console.log(t)}}function l(t){return t.map(s=>`
    <li class="discount_card_item">
      <div class="discount_card_img">
        <img
          src=${s.img}
          width="114"
          height="114"
          alt=${s.name}
        />
        </div>
        <div class="svg_box">
          <svg></svg>
        </div>

      <div class="discount_card_elements">
        <h3 class="card_title--discount card_title">${s.name}</h3>
        <span class="card_title--price card_title ">${s.price}</span>

        <button type="button" class="discount_card_btn">
          <svg class="discount_order_btn" width="12" height="12">
          <use href="../svg/icons.svg#icon-cart-hover"></use>
          </svg>
        </button>
          
      </div>  
    </li> `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
