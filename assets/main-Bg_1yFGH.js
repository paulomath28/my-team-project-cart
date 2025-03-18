import{r as a,u as n}from"./utils-DUQbpE7m.js";import{P as r}from"./ProductData-Dx0C3TkS.js";function c(t){const e=Math.round((t.SuggestedRetailPrice-t.FinalPrice)/t.SuggestedRetailPrice*100),s=e>0;return`<li class="product-card">
    <a href="product_pages/index.html?product=${t.Id}">
      <img src="${t.Image}" alt="Image of ${t.Name}" />
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      
      <div class="price-container">
        ${s?`<span class="discount-badge">${e}% OFF</span>`:""}
        <p class="product-card__price">
          ${s?`<s>$${t.SuggestedRetailPrice.toFixed(2)}</s> `:""}
          <strong>$${t.FinalPrice.toFixed(2)}</strong>
        </p>
      </div>
    </a>
  </li>`}class d{constructor(e,s,i){this.category=e,this.dataSource=s,this.listElement=i,this.includedIds=["880RR","985RF","985PR","344YJ"]}async init(){const e=await this.dataSource.getData(),s=this.filterList(e);this.renderList(s)}filterList(e){return e.filter(s=>this.includedIds.includes(s.Id))}renderList(e){a(c,this.listElement,e)}}const l=new r("tents"),o=document.querySelector(".product-list"),u=new d("Tents",l,o);u.init();n();

