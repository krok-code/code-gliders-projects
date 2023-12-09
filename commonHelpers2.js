import"./assets/header-a5e3182b.js";import{a as d,S as m}from"./assets/vendor-bb007519.js";const l="https://food-boutique.b.goit.study/api/products",f=()=>{const a={limit:5};return d(`${l}/popular`,{params:a})},y=()=>d(`${l}/discount`),_="https://food-boutique.b.goit.study/api/products";async function b(a,t){try{const e=await d.get(_,{params:{byABC:!0,byPrice:!0,byPopularity:!0,page:a,limit:t}}),{results:c,page:r,totalPages:o}=e.data;return Array.isArray(c)?{products:c,currentPage:r,totalPages:o}:(console.error("Received data does not contain an array of products:",e.data),null)}catch(e){return console.error("Error fetching products:",e),null}}async function u(a){const t=document.querySelector(`button[data-product-id="${a}"]`);if(t&&!t.classList.contains("added")){let e=function(c){m.fire({text:c,icon:"success",timer:2e3,showConfirmButton:!1,customClass:{container:"custom-swal2-container"}})};t.classList.add("added"),t.innerHTML=`
      <span class="icon-container">
        <svg class="check-icon" 
          width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
          <path d="M15 4.5L6.75 12.75L3 9" stroke="#E8E8E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    `,e("Product added to the cart")}}async function v(a){try{return(JSON.parse(localStorage.getItem("cart"))||[]).some(c=>c.productId===a)}catch(t){return console.error("Error checking if product is in cart:",t),!1}}const p={popular:document.querySelector(".popular_list"),discount:document.querySelector(".discount_list")};document.addEventListener("DOMContentLoaded",L);document.addEventListener("DOMContentLoaded",w);async function L(){try{const{data:a}=await f();p.popular.insertAdjacentHTML("beforeend",$(a)),document.querySelectorAll(".popular_card_item").forEach(c=>{c.addEventListener("click",()=>{console.log("click cadrs")})}),document.querySelectorAll(".populat_card_btn").forEach(c=>{c.addEventListener("click",r=>{r.stopPropagation();const o=r.currentTarget.getAttribute("data-product-id");u(o)})})}catch(a){console.log(a)}}function $(a){return a.map(t=>` <li class="popular_card_item">
      <div class="card_img">
        <img
          src=${t.img}
          width="56"
          height="56"
          alt=${t.name}
        />
      </div>
      <div class="card_elements">
        <h3 class="card_title">${t.name}</h3>
        <p class="card_text card_text--margin_b">
          <span class="card_el">Category:</span>&nbsp;<span>${t.category}</span>
        </p>
        <p class="card_text">
          <span class="card_el">Size:</span>&nbsp;<span>${t.size}</span
          ><span class="card_el card_el--margin_l">Popularity:</span>&nbsp;<span
            >${t.popularity}</span
          >
        </p>
      </div>
      <button type="button" class="populat_card_btn" data-product-id='${t._id}'>
        <svg class="order_btn" width="12" height="12">
          <use href="./img/icons.svg#shopping-cart"></use>
        </svg>
      </button>
    </li>`).join("")}async function w(){try{const{data:a}=await y();p.discount.insertAdjacentHTML("beforeend",E(a.slice(0,2))),document.querySelectorAll(".discount_card_item").forEach(c=>{c.addEventListener("click",()=>{console.log("click cadrs")})}),document.querySelectorAll(".discount_card_btn").forEach(c=>{c.addEventListener("click",r=>{r.stopPropagation();const o=r.currentTarget.getAttribute("data-product-id");u(o)})})}catch(a){console.log(a)}}function E(a){return a.map(t=>`
    <li class="discount_card_item">
      <div class="discount_card_img">
        <img
          src=${t.img}
          width="114"
          height="114"
          alt=${t.name}
        />
        </div>
        <div class="svg_box">
          <svg width="60" height="60">
            <use href="./img/icons.svg#discount">
            </use>
          </svg>
        </div>

      <div class="discount_card_elements">
        <h3 class="card_title--discount card_title">${t.name}</h3>
        <span class="card_title--price card_title ">${t.price}</span>

        <button type="button" class="discount_card_btn" data-product-id='${t._id}'>
          <svg  width="18" height="18">
          <use href="./img/icons.svg#shopping-cart"></use>
          </svg>
        </button>
          
      </div>  
    </li> `).join("")}document.addEventListener("DOMContentLoaded",async()=>{const a=document.getElementById("productList");if(!a){console.error("Element with id 'productList' not found.");return}const t=1,e=9;async function c(s=t,n=e){try{const{products:i,currentPage:g,totalPages:h}=await b(s,n);i&&(await o(i),updatePagination(g,h))}catch(i){console.error("Error fetching products:",i)}}function r(s){const n=v(s._id)?"":"Add to Cart";return`
    <li class="product-card">
      <div class="ooverlay">
          <img width="140px" height="140px" class="product-image" ${s.img?`src="${s.img}"`:'src="./default-image.jpg"'} alt="${s.name}">
      </div>
      <h3 class="product-name">${s.name}</h3>
      <p class="product-category">
        <span class="label-category">Category:</span> ${s.category} 
      </p>
      <p class="product-size">
        <span class="label-size">Size:</span> ${s.size}
      </p>
      <p class="product-popularity">
        <span class="label-popularity">Popularity:</span> ${s.popularity}
      </p>
      <p class="product-price">$${s.price.toFixed(2)}</p>
      <button class="cart-button" data-product-id="${s._id}">${n}</button>
    </li>`}async function o(s){a.innerHTML="";for(const n of s){const i=r(n);a.insertAdjacentHTML("beforeend",i)}}a.addEventListener("click",async s=>{if(s.target.classList.contains("cart-button")){const n=s.target.dataset.productId;await u(n)}}),c()});
//# sourceMappingURL=commonHelpers2.js.map
