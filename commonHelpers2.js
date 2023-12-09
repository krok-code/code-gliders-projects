import"./assets/header-06e5e9ac.js";import{a as i,S as f}from"./assets/vendor-bb007519.js";const d="https://food-boutique.b.goit.study/api/products",y=()=>{const t={limit:5};return i(`${d}/popular`,{params:t})},b=()=>i(`${d}/discount`);async function _(t){console.log("hello");const s=document.querySelector(`.cart-button[data-product-id="${t}"]`);if(s&&!s.classList.contains("added")){let c=function(n){f.fire({text:n,icon:"success",timer:2e3,showConfirmButton:!1,customClass:{container:"custom-swal2-container"}})};s.classList.add("added"),s.innerHTML=`
      <span class="icon-container">
        <svg class="check-icon" 
          width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
          <path d="M15 4.5L6.75 12.75L3 9" stroke="#E8E8E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    `,c("Product added to the cart")}}async function v(t){try{return(JSON.parse(localStorage.getItem("cart"))||[]).some(n=>n.productId===t)}catch(s){return console.error("Error checking if product is in cart:",s),!1}}document.addEventListener("DOMContentLoaded",async()=>{const t=document.getElementById("productList");if(!t){console.error("Element with id 'productList' or 'pagination' not found.");return}const s=1,c=9,n="https://food-boutique.b.goit.study/api/products";async function u(a=s,o=c){try{const e=await fetch(`${n}?byABC=true&byPrice=true&byPopularity=true&page=${a}&limit=${o}`);if(!e.ok)throw new Error(`Network response was not ok: ${e.statusText}`);const{results:r,page:h,totalPages:m}=await e.json();Array.isArray(r)?(await g(r),updatePagination(h,m)):console.error("Received data does not contain an array of products:",e.data)}catch(e){console.error("Error fetching products:",e)}}function p(a){const o=v(a._id)?"":"Add to Cart";return`
    <li class="product-card">
      <div class="ooverlay">
          <img width="140px" height="140px" class="product-image" ${a.img?`src="${a.img}"`:'src="./default-image.jpg"'} alt="${a.name}">
      </div>
      <h3 class="product-name">${a.name}</h3>
      <p class="product-category">
        <span class="label-category">Category:</span> ${a.category} 
      </p>
      <p class="product-size">
        <span class="label-size">Size:</span> ${a.size}
      </p>
      <p class="product-popularity">
        <span class="label-popularity">Popularity:</span> ${a.popularity}
      </p>
      <p class="product-price">$${a.price.toFixed(2)}</p>
      <button class="cart-button" data-product-id="${a._id}">${o}</button>
    </li>`}async function g(a){t.innerHTML="";for(const o of a){const e=p(o);t.insertAdjacentHTML("beforeend",e)}}t.addEventListener("click",async a=>{if(a.target.classList.contains("cart-button")){const o=a.target.dataset.productId;await _(o)}}),u()});const l={popular:document.querySelector(".popular_list"),discount:document.querySelector(".discount_list")};document.addEventListener("DOMContentLoaded",w);document.addEventListener("DOMContentLoaded",L);async function w(){try{const{data:t}=await y();l.popular.insertAdjacentHTML("beforeend",$(t)),console.log(t)}catch(t){console.log(t)}}function $(t){return t.map(s=>` <li class="card_item">
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
          <use href="../img/icons.svg#shopping-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function L(){try{const{data:t}=await b();l.discount.insertAdjacentHTML("beforeend",P(t.slice(0,2))),console.log(t)}catch(t){console.log(t)}}function P(t){return t.map(s=>`
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
          <svg width="60" height="60">
            <use href="../img/icons.svg#discount">
            </use>
          </svg>
        </div>

      <div class="discount_card_elements">
        <h3 class="card_title--discount card_title">${s.name}</h3>
        <span class="card_title--price card_title ">${s.price}</span>

        <button type="button" class="discount_card_btn">
          <svg  width="18" height="18">
          <use href="../img/icons.svg#shopping-cart"></use>
          </svg>
        </button>
          
      </div>  
    </li> `).join("")}
//# sourceMappingURL=commonHelpers2.js.map
