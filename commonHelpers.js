import{l as n,g as p,i as y}from"./assets/footer-96c07ce7.js";import{f as v}from"./assets/vendor-d873ffc3.js";const m="/code-gliders-projects/assets/yellow-shopping-basket-7c9e4c8c.webp",g="/code-gliders-projects/assets/yellow-shopping-basket@2x-16bffe16.webp",L="/code-gliders-projects/assets/yellow-shopping-basket_mob-d3bbad76.webp",S="/code-gliders-projects/assets/yellow-shopping-basket_mob@2x-b0f89c1a.webp",M="/code-gliders-projects/assets/yellow-shopping-basket-014cc855.png";function f(){const e=n.load("product");document.querySelector(".cart-number-purchases").innerHTML=`${e?e.length:"0"} `}f();const s=n.load("product");document.addEventListener("DOMContentLoaded",e=>{s.length===0&&(document.querySelector(".section-cart").innerHTML=d()),b()});function h(e){if(e){const t=e.map(r=>w(r)).join("");document.querySelector(".cart-shopping-list").innerHTML=t}else document.querySelector(".section-cart").innerHTML=d()}h(s);document.querySelector(".delete-all-box").addEventListener("click",()=>{n.remove("product"),p(),document.querySelector(".section-cart").innerHTML=d()});const l=document.querySelector(".cart-shopping-list ");l.addEventListener("click",q);function q(e){if(!e.target.closest(".cart-delete-icon"))return;localStorage.setItem("product",JSON.stringify());const r=e.target.closest("li").dataset.productId,o=s.findIndex(c=>c.id===r);o!==-1&&s.splice(o,1),localStorage.setItem("product",JSON.stringify(s)),h(s),u(),b(),f(),p(),s.length===0&&(document.querySelector(".section-cart").innerHTML=d())}function w(e){let{id:t,name:r,img:o,category:c,size:a,price:i}=e;return`
      <li class="cart-shopping-item" data-product-id=${t}>
      <img
        class="cart-shopping-img"
        src="${o}"
        alt="${r}"
      />
      <div class="cart-item-info">
        <div class="cart-info-top">
          <p class="cart-info-name-product">${r}</p>
          <svg class="cart-delete-icon">
              <use href="${y}#icon-close"></use>
          </svg>
        </div>
  
        <ul class="cart-properties-list">
          <li class="cart-properties-item">
            <h3 class="cart-properties-caption">Category:</h3>
            <p class="cart-properties-subtitle">${c}</p>
          </li>
          <li class="cart-properties-item">
            <h3 class="cart-properties-caption">Size:</h3>
            <p class="cart-properties-subtitle">${a}</p>
          </li>
        </ul>
  
        <div class="cart-info-bottom">
         <p class="cart-info-price">&#36;<span class="js-cart-info-price">${i}</span></p>
  
          <div class="cart-counter-wrapper">
            <button class="cart-counter-decrement" type="button" data-action="minus">-</button>
            <span class="cart-counter-value" data-counter>1</span>
            <button class="cart-counter-increment" type="button" data-action="plus">+</button>
          </div>
        </div>
      </div>
    </li>
      `}function d(){return`
  <div class="cart-empty">
  <picture class="cart-empty-retina">
        <source
          media="(min-width: 1440px)"
          srcset="
            ${m} 1x,
            ${g} 2x
          "
        />
        <source
          media="(min-width: 768px)"
          srcset="
          ${m} 1x,
          ${g} 2x
          "
        />
        <source
          media="(min-width: 320px)"
          srcset="
          ${L} 1x,
          ${S} 2x
          "
        />
  <img
    class="cart-empty-img"
    src="${M}"
    alt="Empty cart"
  />
  <p class="cart-empty-text">
    Your basket is <a href="#" class="cart-empty-link">empty...</a>
  </p>
  <p class="cart-empty-description">
    Go to the main page to select your favorite products and add them to the
    cart.
  </p>
</div>
      `}function u(){const e=document.querySelectorAll(".cart-shopping-item"),t=document.querySelector(".js-total-price");let r=0;e.forEach(o=>{const c=o.querySelector("[data-counter]"),a=o.querySelector(".js-cart-info-price"),i=Number(c.innerHTML)*Number(a.innerHTML);r+=i}),t.innerHTML=r.toFixed(2)}u();window.addEventListener("click",e=>{let t;(e.target.dataset.action==="plus"||e.target.dataset.action==="minus")&&(t=e.target.closest(".cart-counter-wrapper").querySelector("[data-counter]")),e.target.dataset.action==="plus"&&(t.innerHTML=++t.innerHTML,u()),e.target.dataset.action==="minus"&&(parseInt(t.innerHTML)>1&&(t.innerHTML=--t.innerHTML),u())});function b(){l.querySelectorAll(".cart-shopping-item").length>3?l.style.overflowY="scroll":l.style.overflowY="hidden"}const T=document.querySelector(".cart-form");T.addEventListener("submit",k);function k(e){e.preventDefault();let t=n.load("product");document.body.insertAdjacentHTML("afterbegin",E(t))}function E(e){return`
  <div class="order-backdrop">
  <div class="order-modal">
      <svg class="order-close-icon">
        <use href="${y}#icon-close"></use>
      </svg>
      <img class="order-image" src="${e[0].img}" alt="order-image" id="${e[0].id}">
      <h2 class="order-title">Order success</h2>
      <p class="order-text">Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness.</p>
  </div>
  </div>
  `}document.body.addEventListener("click",$);function $(e){const t=document.querySelector(".order-backdrop");(e.target.closest(".order-close-icon")||e.target.classList.contains("order-backdrop"))&&(t.classList.add("is-hidden"),document.querySelector(".section-cart").innerHTML=d(),n.remove("product"),p())}const x=document.querySelector(".datatime"),H={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1};v(x,H);document.addEventListener("DOMContentLoaded",function(){document.querySelector(".cart-order-info-btn").addEventListener("submit",function(t){t.preventDefault();const r=document.getElementById("name").value,o=document.getElementById("phone").value,c=document.getElementById("address").value,a=document.getElementById("datetime").value,i={name:r,phone:o,address:c,datetime:a};console.log(error),n.save("lastOrder",i)})});
//# sourceMappingURL=commonHelpers.js.map
