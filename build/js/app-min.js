function addItem_1(){event.preventDefault(),element_1.quantity<10&&(element_1.quantity+=1,element_1.sum=element_1.quantity*element_1.price,inputField_1.value=element_1.quantity,priceField_1.innerHTML=element_1.sum),total.innerHTML=getTotal(),subtotal.innerHTML=getSubTotal()}function deleteItem_1(){event.preventDefault(),element_1.quantity>0&&(element_1.quantity-=1,inputField_1.value=element_1.quantity,element_1.sum=element_1.sum-element_1.price,priceField_1.innerHTML=element_1.sum),total.innerHTML=getTotal(),subtotal.innerHTML=getSubTotal()}function removeItem_1(){event.preventDefault(),item_1.classList.toggle("hide"),item_1.classList.contains("hide")&&(element_1.sum=0),total.innerHTML=getTotal(),subtotal.innerHTML=getSubTotal()}function addItem_2(){event.preventDefault(),element_2.quantity<10&&(element_2.quantity+=1,element_2.sum=element_2.quantity*element_2.price,inputField_2.value=element_2.quantity,priceField_2.innerHTML=element_2.sum),total.innerHTML=getTotal(),subtotal.innerHTML=getSubTotal()}function deleteItem_2(){event.preventDefault(),element_2.quantity>0&&(element_2.quantity-=1,inputField_2.value=element_2.quantity,element_2.sum=element_2.sum-element_2.price,priceField_2.innerHTML=element_2.sum),total.innerHTML=getTotal(),subtotal.innerHTML=getSubTotal()}function removeItem_2(){event.preventDefault(),item_2.classList.toggle("hide"),item_2.classList.contains("hide")&&(element_2.sum=0),total.innerHTML=getTotal(),subtotal.innerHTML=getSubTotal()}function addItem_3(){event.preventDefault(),element_3.quantity<10&&(element_3.quantity+=1,element_3.sum=element_3.quantity*element_3.price,inputField_3.value=element_3.quantity,priceField_3.innerHTML=element_3.sum),total.innerHTML=getTotal(),subtotal.innerHTML=getSubTotal()}function deleteItem_3(){event.preventDefault(),element_3.quantity>0&&(element_3.quantity-=1,inputField_3.value=element_3.quantity,element_3.sum=element_3.sum-element_3.price,priceField_3.innerHTML=element_3.sum),total.innerHTML=getTotal(),subtotal.innerHTML=getSubTotal()}function removeItem_3(){event.preventDefault(),item_3.classList.toggle("hide"),item_3.classList.contains("hide")&&(element_3.sum=0),total.innerHTML=getTotal(),subtotal.innerHTML=getSubTotal()}function getTotal(){return element_1.sum+element_2.sum+element_3.sum}function getSubTotal(){return element_1.sum+element_2.sum+element_3.sum}function showPopup(){popup.classList.toggle("opened"),mobileMenu.classList.contains("open-menu")&&(mobileMenu.classList.toggle("open-menu"),activeMenu.classList.toggle("active"),document.body.classList.toggle("nonScroll")),document.body.classList.toggle("nonScroll")}function closePopup(){popup.classList.toggle("opened"),document.body.classList.toggle("nonScroll")}function showMobileMenu(){mobileMenu.classList.toggle("open-menu"),document.body.classList.toggle("nonScroll"),activeMenu.classList.toggle("active")}function initMap(){var e=document.getElementById("map"),t=new google.maps.Map(e,{zoom:16,center:{lat:36.175172,lng:-86.778092},fullscreenControl:!1}),n=new google.maps.InfoWindow({content:"1001 5th Avenue North Nashville, TN 37219 USA"}),l=new google.maps.Marker({position:{lat:36.17338,lng:-86.787027},map:t,icon:"../images/map-marker.png"});l.addListener("click",function(){n.open(t,l)})}!function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,t){(l(e,t)?s:i)(e,t)}var l,i,s;"classList"in document.documentElement?(l=function(e,t){return e.classList.contains(t)},i=function(e,t){e.classList.add(t)},s=function(e,t){e.classList.remove(t)}):(l=function(e,n){return t(n).test(e.className)},i=function(e,t){l(e,t)||(e.className=e.className+" "+t)},s=function(e,n){e.className=e.className.replace(t(n)," ")});var o={hasClass:l,addClass:i,removeClass:s,toggleClass:n,has:l,add:i,remove:s,toggle:n};"function"==typeof define&&define.amd?define(o):e.classie=o}(window),function(e){"use strict";function t(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function n(e,n){this.el=e,this.options=t({},this.options),t(this.options,n),this._init()}n.prototype.options={newTab:!0,stickyPlaceholder:!0,onChange:function(e){return!1}},n.prototype._init=function(){var e=this.el.querySelector("option[selected]");this.hasDefaultPlaceholder=e&&e.disabled,this.selectedOpt=e||this.el.querySelector("option"),this._createSelectEl(),this.selOpts=[].slice.call(this.selEl.querySelectorAll("li[data-option]")),this.selOptsCount=this.selOpts.length,this.current=this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected"))||-1,this.selPlaceholder=this.selEl.querySelector("span.cs-placeholder"),this._initEvents()},n.prototype._createSelectEl=function(){var e="",t=function(e){var t="",n="",l="";return!e.selectedOpt||this.foundSelected||this.hasDefaultPlaceholder||(n+="cs-selected ",this.foundSelected=!0),e.getAttribute("data-class")&&(n+=e.getAttribute("data-class")),e.getAttribute("data-link")&&(l="data-link="+e.getAttribute("data-link")),""!==n&&(t='class="'+n+'" '),"<li "+t+l+' data-option data-value="'+e.value+'"><span>'+e.textContent+"</span></li>"};[].slice.call(this.el.children).forEach(function(n){if(!n.disabled){var l=n.tagName.toLowerCase();"option"===l?e+=t(n):"optgroup"===l&&(e+='<li class="cs-optgroup"><span>'+n.label+"</span><ul>",[].slice.call(n.children).forEach(function(n){e+=t(n)}),e+="</ul></li>")}});var n='<div class="cs-options"><ul>'+e+"</ul></div>";this.selEl=document.createElement("div"),this.selEl.className=this.el.className,this.selEl.tabIndex=this.el.tabIndex,this.selEl.innerHTML='<span class="cs-placeholder">'+this.selectedOpt.textContent+"</span>"+n,this.el.parentNode.appendChild(this.selEl),this.selEl.appendChild(this.el)},n.prototype._initEvents=function(){var e=this;this.selPlaceholder.addEventListener("click",function(){e._toggleSelect()}),this.selOpts.forEach(function(t,n){t.addEventListener("click",function(){e.current=n,e._changeOption(),e._toggleSelect()})}),document.addEventListener("click",function(t){var n=t.target;e._isOpen()&&n!==e.selEl&&!function(e,t){if(!e)return!1;for(var n=e.target||e.srcElement||e||!1;n&&n!=t;)n=n.parentNode||!1;return!1!==n}(n,e.selEl)&&e._toggleSelect()}),this.selEl.addEventListener("keydown",function(t){switch(t.keyCode||t.which){case 38:t.preventDefault(),e._navigateOpts("prev");break;case 40:t.preventDefault(),e._navigateOpts("next");break;case 32:t.preventDefault(),e._isOpen()&&void 0!==e.preSelCurrent&&-1!==e.preSelCurrent&&e._changeOption(),e._toggleSelect();break;case 13:t.preventDefault(),e._isOpen()&&void 0!==e.preSelCurrent&&-1!==e.preSelCurrent&&(e._changeOption(),e._toggleSelect());break;case 27:t.preventDefault(),e._isOpen()&&e._toggleSelect()}})},n.prototype._navigateOpts=function(e){this._isOpen()||this._toggleSelect();var t=void 0!==this.preSelCurrent&&-1!==this.preSelCurrent?this.preSelCurrent:this.current;("prev"===e&&t>0||"next"===e&&t<this.selOptsCount-1)&&(this.preSelCurrent="next"===e?t+1:t-1,this._removeFocus(),classie.add(this.selOpts[this.preSelCurrent],"cs-focus"))},n.prototype._toggleSelect=function(){this._removeFocus(),this._isOpen()?(-1!==this.current&&(this.selPlaceholder.textContent=this.selOpts[this.current].textContent),classie.remove(this.selEl,"cs-active")):(this.hasDefaultPlaceholder&&this.options.stickyPlaceholder&&(this.selPlaceholder.textContent=this.selectedOpt.textContent),classie.add(this.selEl,"cs-active"))},n.prototype._changeOption=function(){void 0!==this.preSelCurrent&&-1!==this.preSelCurrent&&(this.current=this.preSelCurrent,this.preSelCurrent=-1);var t=this.selOpts[this.current];this.selPlaceholder.textContent=t.textContent,this.el.value=t.getAttribute("data-value");var n=this.selEl.querySelector("li.cs-selected");n&&classie.remove(n,"cs-selected"),classie.add(t,"cs-selected"),t.getAttribute("data-link")&&(this.options.newTab?e.open(t.getAttribute("data-link"),"_blank"):e.location=t.getAttribute("data-link")),this.options.onChange(this.el.value)},n.prototype._isOpen=function(e){return classie.has(this.selEl,"cs-active")},n.prototype._removeFocus=function(e){var t=this.selEl.querySelector("li.cs-focus");t&&classie.remove(t,"cs-focus")},e.SelectFx=n}(window);var AddItem_1=document.getElementById("add_item_1"),DelItem_1=document.getElementById("del_item_1"),RemoveItem_1=document.getElementById("remove_1"),inputField_1=document.getElementById("count_item_1"),priceField_1=document.getElementById("price_item_1"),AddItem_2=document.getElementById("add_item_2"),DelItem_2=document.getElementById("del_item_2"),RemoveItem_2=document.getElementById("remove_2"),inputField_2=document.getElementById("count_item_2"),priceField_2=document.getElementById("price_item_2"),AddItem_3=document.getElementById("add_item_3"),DelItem_3=document.getElementById("del_item_3"),RemoveItem_3=document.getElementById("remove_3"),inputField_3=document.getElementById("count_item_3"),priceField_3=document.getElementById("price_item_3"),total=document.getElementById("total_cart"),subtotal=document.getElementById("subtotal_cart");null!==AddItem_1&&null!==DelItem_1&&null!==RemoveItem_1&&null!==AddItem_2&&null!==DelItem_2&&null!==RemoveItem_2&&null!==AddItem_3&&null!==DelItem_3&&null!==RemoveItem_3&&(AddItem_1.addEventListener("click",addItem_1),DelItem_1.addEventListener("click",deleteItem_1),RemoveItem_1.addEventListener("click",removeItem_1),AddItem_2.addEventListener("click",addItem_2),DelItem_2.addEventListener("click",deleteItem_2),RemoveItem_2.addEventListener("click",removeItem_2),AddItem_3.addEventListener("click",addItem_3),DelItem_3.addEventListener("click",deleteItem_3),RemoveItem_3.addEventListener("click",removeItem_3));var element_1={quantity:1,price:25,sum:25},element_2={quantity:1,price:35,sum:35},element_3={quantity:1,price:15,sum:15},popup=document.getElementById("overlay"),profileLink=document.getElementById("profile"),close=document.getElementById("close");profileLink.addEventListener("click",showPopup),close.addEventListener("click",closePopup);var pie=document.getElementById("mobile"),mobileMenu=document.getElementById("mobile-menu"),activeMenu=document.querySelector(".mobile-btn");pie.addEventListener("click",showMobileMenu);