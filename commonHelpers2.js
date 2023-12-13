import{l as m,i as u,g as w}from"./assets/footer-fe4baa50.js";import{a as y,P as _}from"./assets/vendor-58a52777.js";function z(e){const s=[...e,"Show all"].map(o=>`<li class="filters-categories-item" data-category="${o}">${o}</li>`);document.querySelector(".filters-categories-list").insertAdjacentHTML("beforeend",s.join("").replaceAll("_"," ")),console.log("Rendered Category List:",s)}function E(e){const t=this.closest(".filters-wrap"),s=t.querySelector(".filters-down-svg");t.querySelector("ul").classList.toggle("list-active"),s.classList.toggle("rotate")}function x(e){this.classList.toggle("rotate");const t=this.previousElementSibling;t.classList.contains("list-active")?t.classList.remove("list-active"):t.classList.add("list-active")}function T(){const e=document.querySelector(".filters-search-btn");e&&e.click()}function H(e){const t=document.querySelector(".filters-categories"),s=document.querySelector(".filters-categories-list"),a=e.target.textContent;t.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate"),T()}function F(e){const t=document.querySelector(".filters-allTypes"),s=document.querySelector(".filters-allTypes-list"),a=e.target.textContent;t.textContent=a,s.classList.remove("list-active"),s.nextElementSibling.classList.remove("rotate"),T()}function C(){const e=document.querySelector(".filters-allTypes").textContent.split(" ").join(""),s=document.querySelector(".filters-categories").textContent.trim(),a=s.toLowerCase()==="all"?"":s.split(" ").join("_").replace("/","&"),o=document.querySelector(".filters-input").value,c={category:a,keyword:o,filterSearch:`by${e}`},r=m.load("queryParams");if(r&&r.category===c.category&&r.keyword===c.keyword&&r.filterSearch===c.filterSearch)return null;const n={category:a,keyword:o,filterSearch:`by${e}`,page:1,limit:9};return m.save("queryParams",n),c}function A(e){let t;switch(e){case"byAtoZ":t="byABC=true";break;case"byZtoA":t="byABC=false";break;case"byCheaperfirst":t="byPrice=true";break;case"byExpensivefirst":t="byPrice=false";break;case"byPopular":t="byPopularity=false";break;case"byNotpopular":t="byPopularity=true";break;case"Show all":t="";break;default:t="byABC=true";break}return t}const B="https://food-boutique.b.goit.study/api/products";async function O(){return(await y.get("https://food-boutique.b.goit.study/api/products/categories")).data}async function R(e){let{keyword:t,category:s,page:a,limit:o,filterSearch:c}=e;const r=window.innerWidth;r<768?o=6:r>=768&&r<1440?o=8:o=9;const n=new URLSearchParams({page:a,limit:o});return t!==""&&n.append("keyword",t),s!==""&&s!=="Show_all"&&s!=="Categories"&&n.append("category",s),(await y.get(`${B}?${n}&${A(c)}`)).data}async function W(){return(await y.get("https://food-boutique.b.goit.study/api/products/discount")).data}async function N(){return(await y.get("https://food-boutique.b.goit.study/api/products/popular")).data}async function P(e){let t,{keyword:s,category:a,page:o=1,limit:c,filterSearch:r}=e;const n=window.innerWidth;n<768?c=6:n>=768&&n<1440?c=8:c=9;const i=new URLSearchParams({limit:c,page:o});return s!==""&&i.append("keyword",s),a!==""&&a!=="Show_all"&&a!=="Categories"&&i.append("category",a),t=await y.get(`${B}?${i}&${A(r)}`),t.data}async function $(e){return(await y.get(`https://food-boutique.b.goit.study/api/products/${e}`)).data}function V(e){let{img:t,name:s,category:a,size:o,popularity:c,price:r,_id:n,is10PercentOff:i}=e;const l=a.replace(/_/g," "),p=d.some(g=>g.id===n);return`
      <li class="product-card-general">
          <div class="img-wrapper">
            <img
              class="card-img"
              src="${t}"
              alt="${s}"
              loading="lazy"
            />
          </div>
  
              <div class="general-card-container" >
                  <h3 class="general-card-title">${s}</h3>
                  <div class="general-span-container">
                  <span class="general-span-info">Category:<span class="span-info-value">${l}</span></span>

                  <span class="general-span-info">Size:<span class="span-info-value">${o}</span></span>

                  <span class="general-span-info">Popularity:<span class="span-info-value">${c}</span></span>
                  </div>
              </div>
    
              <div class="general-card-price">
                  <span class="general-span-price">&#36;${r}</span>
                  <button data-id=${n} type="submit" class="addToCart-btn js-addToCart-btn" ${p?"disabled":""}>
                      <svg class="cart-svg " width="18" height="18">
                          <use href="${u}${p?"#checkmark":"#shopping-cart"}"></use>
                         
                      </svg>  
                  </button>
              </div>
              <svg class="general-discount-svg ${i?"discount-label":""}" width="60" height="60">
                <use href="${u}#discount"></use>
              </svg>
      </li>
      `}function U(e){const{img:t,name:s,category:a,size:o,popularity:c,_id:r}=e,n=a.replace(/_/g," "),i=d.some(l=>l.id===r);return`
        <li class="popular-product-card">
            <div class="poppular-img-wrapper">
              <img
                class="popular-card-img"
                src="${t}"
                alt="${s}"
                loading="lazy"
              />
            </div>
    
                <div class="popular-card-info" >
                    <h3 class="popular-card-title">${s}</h3>
                    <div class="popular-span-container">
                    <span class="popular-span-info">Category: <span class="span-info-value">${n}</span></span>
                    <span class="popular-span-info">Size: <span class="span-info-value">${o}</span></span>
                    <span class="popular-span-info">Popularity: <span class="span-info-value">${c}</span></span>
                    </div>
                </div>
                    
                <button data-id=${r} type="submit" class="popular-card-btn js-addToCart-btn" ${i?"disabled":""}>
                    <svg class="popular-cart-svg" width="12" height="12">
                        <use href="${u}${i?"#checkmark":"#shopping-cart"}"></use>
                    </svg>
                </button>
            
        </li>
        `}function J(e){const{img:t,name:s,price:a,_id:o}=e,c=d.some(r=>r.id===o);return`
      <li class="discount-product-card">
      <div class="discount-img-wrapper">
        <img
          class="discount-card-img"
          src="${t}"
          alt="${s}"
          loading="lazy"
        />
        <svg class="discount-svg-icon" width="60" height="60">
          <use href="${u}#discount"></use>
        </svg>

      </div>

      <div class="discount-card-info" >
          <h3 class="discount-card-title">${s}</h3>

          <div class="discount-card-price">
              <span class="span-price">&#36;${a}</span>
              <button data-id=${o} type="submit" class="addToCart-btn js-addToCart-btn" ${c?"disabled":""}>
                  <svg class="cart-svg" width="18" height="18">
                      <use href="${u}${c?"#checkmark":"#shopping-cart"}"></use>
                  </svg>
              </button>
          </div>
      </div>
  </li>`}function f(e,t,s){let a;t==="general"?a=e.map(o=>V(o)):t==="popular"?a=e.map(o=>U(o)):a=e.map(o=>J(o)),s.innerHTML=a.join("")}function q(){const e=document.querySelector(".modal-product-backdrop");e.remove(),e.classList.add("is-hidden"),document.body.classList.remove("is-overflow-hidden")}function Q(e){const t=document.querySelector(".modal-product-backdrop");e.key==="Escape"&&(q(),t.classList.add("is-hidden"))}function G(e){const t=document.querySelector(".modal-product-backdrop");e.target===t&&(q(),t.classList.remove("is-hidden"))}function Z(e){let{name:t,category:s,desc:a,img:o,price:c,size:r,popularity:n,_id:i}=e;const l=s.replace(/_/g," "),p=d.some(g=>g.id===i);return`
          <div class="modal-product-backdrop" data-modal>
          <div class="modal-product">
              <button type="button" class="modal-btn-close" data-modal-close>
                  <svg class="modal-svg-close" width="28" height="28">
                      <use href="${u}#close"></use>
                  </svg>
              </button>
      
              <div class="modal-product-info">
                  <div class="modal-product-img-wrapper">
                    
                      <img class="modal-product-img" src="${o}" alt="${t}" width="1660">
        
                  </div>
      
                  <div class="modal-product-description">
                      <h2 class="modal-title">${t}</h2>
      
                      <ul class="modal-product-list">
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Category:</h3>
                              <p class="modal-product-content">${l}</p>
                          </li>
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Size:</h3>
                              <p class="modal-product-content">${r}</p>
                          </li>
                          <li class="modal-product-item">
                              <h3 class="modal-product-caption">Popularity:</h3>
                              <p class="modal-product-content">${n}</p>
                          </li>
                      </ul>
      
                      <p class="modal-product-text">${a}</p>
                  </div>
              </div>
      
              <div class="modal-product-wrapper-price">
                  <p class="modal-product-price"><span>&#36;</span>${c}</p>
                  <button data-id=${i} type="submit" class="modal-product-btn-price">
                  ${p?"Remove from":"Add to"} 
                      <svg class="modal-btn-svg" width="18" height="18">
                          <use class="modal-icon-svg" href="${u}#shopping-cart"></use>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
      `}async function h(e){if(e.target.closest(".js-addToCart-btn"))return;const a=e.target.closest("li").querySelector(".js-addToCart-btn").getAttribute("data-id"),o=await $(a);document.querySelector("body").insertAdjacentHTML("beforeend",Z(o)),document.body.classList.add("is-overflow-hidden"),document.querySelector(".modal-btn-close").addEventListener("click",q),document.addEventListener("keydown",Q),document.addEventListener("click",G),document.querySelector(".modal-product-btn-price").addEventListener("click",ce)}async function k(e){const t=e.currentTarget.getAttribute("data-id"),s=document.querySelectorAll(`button[data-id='${t}']`);s.forEach(c=>{c.querySelector("use").setAttribute("href",`${u}#checkmark`),c.setAttribute("disabled","true")}),console.log(s);const a={};try{const c=await $(t);console.log(c);const{category:r,size:n,_id:i,name:l,price:p,img:g}=c;a.category=r,a.size=n,a.id=i,a.name=l,a.price=p,a.img=g}catch(c){console.log(c)}const o=window.localStorage;d.push(a),o.setItem("product",JSON.stringify(d)),w()}function M(){return`
        <div class="sorry-wrapper">
            <span class="emoji-sorry">&#128561;</span>
            <h3 class="sorry-message-text"> Sorry, there are no items matching your filter request!</h3>
        </div> 
    `}const Y=document.querySelector(".filters-form"),K=document.querySelector(".filters-categories"),X=document.querySelector(".filters-allTypes"),ee=document.querySelectorAll(".filters-down-svg"),te=document.querySelectorAll(".filters-allTypes-item"),b=document.querySelector(".products-list-general"),se=document.querySelector(".products-list-discount"),ae=document.querySelector(".products-list-popular");let d=[];const re=()=>{const e=m.load("product");if(e===void 0){document.querySelector("#header-length").innerHTML="0";return}document.querySelector("#header-length").innerHTML=e.length,d=e};re();function oe(){m.load("queryParams")||m.save("queryParams",{keyword:"",category:"",page:1,limit:9})}oe();document.addEventListener("DOMContentLoaded",async()=>{try{const e=await O();z(e),document.querySelectorAll(".filters-categories-item").forEach(l=>{l.addEventListener("click",H)});const t=m.load("queryParams"),a=(await R(t)).results;f(a,"general",b),document.querySelectorAll(".product-card-general").forEach(l=>{l.addEventListener("click",h)});const c=await W();f(c,"discount",se),document.querySelectorAll(".discount-product-card").forEach(l=>{l.addEventListener("click",h)});const n=await N();f(n,"popular",ae),document.querySelectorAll(".popular-product-card").forEach(l=>{l.addEventListener("click",h),document.querySelectorAll(".js-addToCart-btn").forEach(g=>{g.addEventListener("click",k)})})}catch(e){console.log(e)}});K.addEventListener("click",E);X.addEventListener("click",E);ee.forEach(e=>{e.addEventListener("click",x)});te.forEach(e=>{e.addEventListener("click",F)});Y.addEventListener("submit",async e=>{e.preventDefault();try{const t=C(),a=(await P(t)).results;if(b.innerHTML="",a.length===0){const r=M();b.insertAdjacentHTML("beforeend",r)}else f(a,"general",b);document.querySelectorAll(".product-card-general").forEach(r=>{r.addEventListener("click",h)}),document.querySelectorAll(".js-addToCart-btn").forEach(r=>{r.addEventListener("click",k)})}catch(t){console.log(t)}});async function ce(e){const t={},s=e.currentTarget.getAttribute("data-id"),a=d.some(o=>o.id===s);if(!a){e.currentTarget.innerHTML=`Remove from <svg class="modal-btn-svg" width="18" height="18">
                <use class="modal-icon-svg" href="${u}#shopping-cart"></use>
                </svg>`,document.querySelectorAll(".js-addToCart-btn").forEach(r=>{let n=r.getAttribute("data-id");const i=r.querySelector("use");n===s&&(i.setAttribute("href",`${u}#checkmark`),r.disabled=!0)});try{const r=await $(s),{category:n,size:i,_id:l,name:p,price:g,img:I}=r;t.category=n,t.size=i,t.id=l,t.name=p,t.price=g,t.img=I}catch(r){console.log(r)}const c=window.localStorage;d.push(t),c.setItem("product",JSON.stringify(d)),w()}if(a){e.currentTarget.innerHTML=`Add to <svg class="modal-btn-svg" width="18" height="18">
        <use class="modal-icon-svg" href="${u}#shopping-cart"></use>
        </svg>`;const o=e.currentTarget.getAttribute("data-id");d=d.filter(r=>r.id!==o),document.querySelectorAll(".js-addToCart-btn").forEach(r=>{let n=r.getAttribute("data-id");const i=r.querySelector("use");n===s&&(i.setAttribute("href",`${u}#shopping-cart`),r.disabled=!1)}),localStorage.setItem("product",JSON.stringify(d)),w()}}const S=document.querySelector(".products-list-general"),L=document.querySelector("#tui-pagination-container"),ne=()=>window.innerWidth<=767?2:4,j=()=>{const e={itemsPerPage:1,visiblePages:ne(),page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="icon tui-page-btn tui-{{type}}">
        <span class="tui-ico-{{type}}">{{type}}
        </span>
        </a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}">
        <span class="tui-ico-{{type}}">{{type}}
        </span>
        </span>`,moreButton:'<a href="#"  class="tui-page-btn-el tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};return new _(L,e)};let v=j();window.addEventListener("resize",()=>{v.destroy(),v=j()});const ie=async e=>{const t=e.page;console.log(t);try{const s=C();s.page=t;const o=(await P(s)).results;if(S.innerHTML="",o.length===0){const n=M();S.insertAdjacentHTML("beforeend",n)}else f(o,"general",S);document.querySelectorAll(".product-card-general").forEach(n=>{n.addEventListener("click",h)}),document.querySelectorAll(".js-addToCart-btn").forEach(n=>{n.addEventListener("click",k)})}catch(s){console.log(s)}};v.on("afterMove",ie);const D=async e=>{try{const t=C(),s=await P(t);s.totalPages===1?L.classList.add("is-hidden"):(v.setTotalItems(s.totalPages),L.classList.remove("is-hidden")),v.reset()}catch(t){console.log(t)}};document.addEventListener("DOMContentLoaded",D);const le=document.querySelector(".filters-form");le.addEventListener("submit",D);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".products-list-general");function t(){window.scrollY/(document.body.scrollHeight-window.innerHeight)*100>=30&&e.classList.add("animation")}window.addEventListener("scroll",t)});
//# sourceMappingURL=commonHelpers2.js.map
