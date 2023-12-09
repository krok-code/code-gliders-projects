import"./assets/import-656b3d97.js";import{a as d,S as m}from"./assets/vendor-bb007519.js";const u="https://food-boutique.b.goit.study/api/products",f=()=>{const a={limit:5};return d(`${u}/popular`,{params:a})},C=()=>d(`${u}/discount`),y="https://food-boutique.b.goit.study/api/products";async function _(a,t){try{const e=await d.get(y,{params:{byABC:!0,byPrice:!0,byPopularity:!0,page:a,limit:t}}),{results:c,page:r,totalPages:o}=e.data;return Array.isArray(c)?{products:c,currentPage:r,totalPages:o}:(console.error("Received data does not contain an array of products:",e.data),null)}catch(e){return console.error("Error fetching products:",e),null}}async function l(a){const t=document.querySelector(`button[data-product-id="${a}"]`);if(t&&!t.classList.contains("added")){let c=function(r){m.fire({text:r,icon:"success",timer:2e3,showConfirmButton:!1,customClass:{container:"custom-swal2-container"}})};t.classList.add("added"),t.innerHTML=`
       <span class="icon-container">
          <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M15 4.5L6.75 12.75L3 9" stroke="#E8E8E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
    `;const e=JSON.parse(localStorage.getItem("cart"))||[];e.push({productId:a}),localStorage.setItem("cart",JSON.stringify(e)),c("Product added to the cart")}}async function v(a){try{return(JSON.parse(localStorage.getItem("cart"))||[]).some(c=>c.productId===a)}catch(t){return console.error("Error checking if product is in cart:",t),!1}}const p={popular:document.querySelector(".popular_list"),discount:document.querySelector(".discount_list")};document.addEventListener("DOMContentLoaded",b);document.addEventListener("DOMContentLoaded",w);async function b(){try{const{data:a}=await f();p.popular.insertAdjacentHTML("beforeend",L(a)),document.querySelectorAll(".popular_card_item").forEach(c=>{c.addEventListener("click",()=>{console.log("click cadrs")})}),document.querySelectorAll(".populat_card_btn").forEach(c=>{c.addEventListener("click",r=>{r.stopPropagation();const o=r.currentTarget.getAttribute("data-product-id");l(o)})})}catch(a){console.log(a)}}function L(a){return a.map(t=>` <li class="popular_card_item">
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
    </li>`).join("")}async function w(){try{const{data:a}=await C();p.discount.insertAdjacentHTML("beforeend",$(a.slice(0,2))),document.querySelectorAll(".discount_card_item").forEach(c=>{c.addEventListener("click",()=>{console.log("click cadrs")})}),document.querySelectorAll(".discount_card_btn").forEach(c=>{c.addEventListener("click",r=>{r.stopPropagation();const o=r.currentTarget.getAttribute("data-product-id");l(o)})})}catch(a){console.log(a)}}function $(a){return a.map(t=>`
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
    </li> `).join("")}document.addEventListener("DOMContentLoaded",async()=>{const a=document.getElementById("productList");if(!a){console.error("Element with id 'productList' not found.");return}const t=1,e=9;async function c(s=t,n=e){try{const{products:i,currentPage:g,totalPages:h}=await _(s,n);i&&(await o(i),updatePagination(g,h))}catch(i){console.error("Error fetching products:",i)}}function r(s){const n=v(s._id)?"":"Add to Cart";return`
  
   
         <li class="product-card">
           <div class="card-img-wrp">
             <img class="product-image" ${s.img?`src="${s.img}"`:'src="./default-image.jpg"'} alt="${s.name}">
           </div>
                 
                 <div class="general-card-container">
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
                 </div>
                 <p class="product-price">$${s.price.toFixed(2)}</p>
                 <button class="cart-button" data-product-id="${s._id}">
           
              <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.70005 0.900024C2.46135 0.900024 2.23244 0.994846 2.06365 1.16363C1.89487 1.33241 1.80005 1.56133 1.80005 1.80002C1.80005 2.03872 1.89487 2.26764 2.06365 2.43642C2.23244 2.60520 2.46135 2.70002 2.70005 2.70002H3.79805L4.07255 3.79982C4.07528 3.81249 4.07828 3.82509 4.08155 3.83762L5.30375 8.72462L4.50005 9.52742C3.36605 10.6614 4.16885 12.6 5.77265 12.6H13.5C13.7387 12.6 13.9677 12.5052 14.1364 12.3364C14.3052 12.1676 14.4 11.9387 14.4 11.7C14.4 11.4613 14.3052 11.2324 14.1364 11.0636C13.9677 10.8948 13.7387 10.8 13.5 10.8H5.77265L6.67265 9.90002H12.6C12.7671 9.89993 12.9309 9.85333 13.073 9.76543C13.2151 9.67752 13.33 9.5518 13.4046 9.40232L16.1046 4.00232C16.1732 3.86515 16.2056 3.71273 16.1987 3.55953C16.1918 3.40633 16.1458 3.25744 16.0652 3.12698C15.9846 2.99652 15.872 2.88882 15.7381 2.81409C15.6042 2.73937 15.4534 2.70011 15.3 2.70002H5.65205L5.37305 1.58132C5.32429 1.3867 5.21191 1.21395 5.05374 1.09051C4.89557 0.967076 4.70068 0.90003 4.50005 0.900024H2.70005ZM14.4 14.85C14.4 15.2081 14.2578 15.5514 14.0046 15.8046C13.7515 16.0578 13.4081 16.2 13.05 16.2C12.692 16.2 12.3486 16.0578 12.0955 15.8046C11.8423 15.5514 11.7 15.2081 11.7 14.85C11.7 14.492 11.8423 14.1486 12.0955 13.8954C12.3486 13.6423 12.692 13.5 13.05 13.5C13.4081 13.5 13.7515 13.6423 14.0046 13.8954C14.2578 14.1486 14.4 14.492 14.4 14.85ZM5.85005 16.2C6.20809 16.2 6.55147 16.0578 6.80464 15.8046C7.05782 15.5514 7.20005 15.2081 7.20005 14.85C7.20005 14.492 7.05782 14.1486 6.80464 13.8954C6.55147 13.6423 6.20809 13.5 5.85005 13.5C5.49201 13.5 5.14863 13.6423 4.89545 13.8954C4.64228 14.1486 4.50005 14.492 4.50005 14.85C4.50005 15.2081 4.64228 15.5514 4.89545 15.8046C5.14863 16.0578 5.49201 16.2 5.85005 16.2Z" fill="#E8E8E2"/>
              </svg>
           
            ${n}
                   </button>
         </li>
   `}async function o(s){a.innerHTML="";for(const n of s){const i=r(n);a.insertAdjacentHTML("beforeend",i)}}a.addEventListener("click",async s=>{if(s.target.classList.contains("cart-button")){const n=s.target.dataset.productId;await l(n)}}),c()});
//# sourceMappingURL=commonHelpers2.js.map
