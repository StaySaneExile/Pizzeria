(this.webpackJsonppizzeria=this.webpackJsonppizzeria||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/pizza-logo.f3327011.svg"},38:function(e,t,a){e.exports=a.p+"static/media/771.565faf61.gif"},41:function(e,t,a){e.exports=a(71)},46:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),i=(a(46),a(10)),o=a.n(i),s=function(e){var t=e.onClick,a=e.className,n=e.outline,r=e.children;return c.a.createElement("button",{onClick:t,className:o()("button",a,{"button--outline":n})},r)},m=a(34),u=a.n(m),d=a(8),p=a(6),E=function(e){Object(p.b)();var t=Object(p.c)((function(e){return{totalPrice:e.cart.totalPrice,totalCount:e.cart.totalCount}})),a=t.totalPrice,n=t.totalCount;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement(d.b,{to:"/"},c.a.createElement("div",{className:"header__logo"},c.a.createElement("img",{width:"38",src:u.a,alt:"Pizza logo"}),c.a.createElement("div",null,c.a.createElement("h1",null,"Sen-Pai Pizza"),c.a.createElement("p",null,"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439")))),c.a.createElement("div",{className:"header__cart"},c.a.createElement(d.b,{to:"/cart"},c.a.createElement(s,{className:"button--cart"},c.a.createElement("span",null,a),c.a.createElement("div",{className:"button__delimiter"}),c.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",null,n))))))},C=c.a.memo((function(e){var t=e.activeCategory,a=e.items,n=e.clickSetCategory,r=function(e){n(e)},l=a&&a.map((function(e,a){return c.a.createElement("li",{onClick:function(){return r(a)},className:t===a?"active":"",key:"".concat(e,"_").concat(a)},e)}));return c.a.createElement("div",{className:"categories"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return r(null)},className:null===t?"active":""},"\u0412\u0441\u0435"),l))})),h=a(13),v=c.a.memo((function(e){var t=e.items,a=e.activeSortType,n=e.onClickSortType,r=c.a.useState(!1),l=Object(h.a)(r,2),i=l[0],o=l[1],s=c.a.useRef(),m=t.find((function(e){return e.type===a})).name;c.a.useEffect((function(){document.body.addEventListener("click",u)}),[]);var u=function(e){e.path.includes(s.current)||o(!1)};return c.a.createElement("div",{ref:s,className:"sort"},c.a.createElement("div",{className:"sort__label"},c.a.createElement("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})),c.a.createElement("b",null,"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"),c.a.createElement("span",{onClick:function(){o(!i)}},m)),i&&c.a.createElement("div",{className:"sort__popup"},c.a.createElement("ul",null,t&&t.map((function(e,t){return c.a.createElement("li",{onClick:function(){return t=e.type,n(t),void o(!1);var t},className:a===e.type?"active":"",key:"".concat(e.type,"_").concat(t)},e.name)})))))})),f=function(e){var t=e.id,a=e.name,n=e.imageUrl,r=e.price,l=e.types,i=e.sizes,m=e.cartItems,u=e.clickAddPizzaToCart,d=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],p=[26,30,40],E=c.a.useState(l[0]),C=Object(h.a)(E,2),v=C[0],f=C[1],_=c.a.useState(0),b=Object(h.a)(_,2),k=b[0],g=b[1];return c.a.createElement("div",{className:"pizza-block"},c.a.createElement("img",{className:"pizza-block__image",src:n,alt:"Pizza"}),c.a.createElement("h4",{className:"pizza-block__title"},a),c.a.createElement("div",{className:"pizza-block__selector"},c.a.createElement("ul",null,d.map((function(e,t){return c.a.createElement("li",{key:t,className:o()({active:v==t,disabled:!l.includes(t)}),onClick:function(){return function(e){f(e)}(t)}},e)}))),c.a.createElement("ul",null,p.map((function(e,t){return c.a.createElement("li",{key:t,className:o()({active:k==t,disabled:!i.includes(e)}),onClick:function(){return function(e){g(e)}(t)}},e," cm")})))),c.a.createElement("div",{className:"pizza-block__bottom"},c.a.createElement("div",{className:"pizza-block__price"},"\u043e\u0442 ",r," P"),c.a.createElement(s,{onClick:function(){var e={id:t,name:a,imageUrl:n,price:r,size:p[k],type:d[v]};u(e)}},c.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})),c.a.createElement("span",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),m&&c.a.createElement("i",null,m))))},_=a(4),b={category:null,sortBy:"popular"},k=a(23),g=a.n(k),w=a(36),y=a(37),L=a.n(y),z=function(e,t){return L.a.get("http://localhost:3004/pizzas?".concat(null!==t?"category=".concat(t):"","&_sort=").concat(e,"&_order=desc")).then((function(e){return e.data}))},N={items:[],isLoading:!1},j=function(e){return{type:"SET_PRELOADER",value:e}},O=a(38),B=a.n(O),P=(a(70),function(e){return c.a.createElement("div",{className:"preloader"},c.a.createElement("img",{src:B.a}))}),A=a(17),T=a(40),x={items:{},totalPrice:0,totalCount:0},S=function(e){return e.reduce((function(e,t){return t.price+e}),0)},Z=["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435"],V=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"popular"},{name:"\u0446\u0435\u043d\u0430",type:"price"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"name"}],M=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return{pizzas:e.pizzas.items,preloader:e.pizzas.isLoading,category:e.filters.category,sortBy:e.filters.sortBy,cartItems:e.cart.items}}));c.a.useEffect((function(){var a,n;e((a=t.sortBy,n=t.category,function(){var e=Object(w.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(j(!0)),e.next=4,z(a,n);case 4:c=e.sent,t({type:"SET_PIZZAS",items:c}),t(j(!1)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}),[t.category,t.sortBy]);var a=c.a.useCallback((function(t){e({type:"SET_SORT_BY_CATEGORY",payload:t})}),[]),n=c.a.useCallback((function(t){e({type:"SET_SORT_BY_POPULAR",payload:t})}),[]),r=function(t){e({type:"ADD_PIZZA_TO_CART",payload:t})};return c.a.createElement("div",null,t.preloader?c.a.createElement(P,null):c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content__top"},c.a.createElement(C,{activeCategory:t.category,clickSetCategory:a,items:Z}),c.a.createElement(v,{activeSortType:t.sortBy,onClickSortType:n,items:V})),c.a.createElement("h2",{className:"content__title"},"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"),c.a.createElement("div",{className:"content__items"},t.pizzas.map((function(e){return c.a.createElement(f,Object.assign({cartItems:t.cartItems[e.id]&&t.cartItems[e.id].items.length,clickAddPizzaToCart:r,key:e.id},e))})))))},R=function(e){return c.a.createElement("div",{className:"cart__item"},c.a.createElement("div",{className:"cart__item-img"},c.a.createElement("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})),c.a.createElement("div",{className:"cart__item-info"},c.a.createElement("h3",null,e.name),c.a.createElement("p",null,e.type,", ",e.size," \u0441\u043c.")),c.a.createElement("div",{className:"cart__item-count"},c.a.createElement("div",{className:"button button--outline button--circle cart__item-count-minus"},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"}))),c.a.createElement("b",null,e.totalCount),c.a.createElement("div",{className:"button button--outline button--circle cart__item-count-plus"},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))),c.a.createElement("div",{className:"cart__item-price"},c.a.createElement("b",null,e.totalPrice)),c.a.createElement("div",{className:"cart__item-remove"},c.a.createElement("div",{onClick:function(){e.onDeletePizza(e.id)},className:"button button--outline button--circle"},c.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),c.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))))},H=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.cart})),a=t.items,r=t.totalPrice,l=t.totalCount,i=Object.keys(a).map((function(e){return a[e].items[0]})),o=Object(n.useCallback)((function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443")&&e({type:"CLEAR_CART"})}),[]),s=Object(n.useCallback)((function(t){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0438\u0446\u0446\u0443")&&e(function(e){return{type:"DELETE_PIZZA",id:e}}(t))}),[]);return c.a.createElement("div",{className:"container container--cart"},c.a.createElement("div",{className:"cart"},c.a.createElement("div",{className:"cart__top"},c.a.createElement("h2",{className:"content__title"},c.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),c.a.createElement("div",{className:"cart__clear"},c.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",{onClick:o},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))),c.a.createElement("div",{className:"content__items"},i.map((function(e){return c.a.createElement(R,{totalCount:a[e.id].items.length,id:e.id,onDeletePizza:s,totalPrice:a[e.id].totalPrice,name:e.name,type:e.type,size:e.size})}))),c.a.createElement("div",{className:"cart__bottom"},c.a.createElement("div",{className:"cart__bottom-details"},c.a.createElement("span",null," \u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",c.a.createElement("b",null,l," \u0448\u0442.")," "),c.a.createElement("span",null," \u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",c.a.createElement("b",null,r," \u20bd")," ")),c.a.createElement("div",{className:"cart__bottom-buttons"},c.a.createElement("a",{href:"/",className:"button button--outline button--add go-back-btn"},c.a.createElement("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),c.a.createElement("span",null,"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434")),c.a.createElement("div",{className:"button pay-btn"},c.a.createElement("span",null,"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"))))))},D=a(1),I=function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement(E,null),c.a.createElement("div",{className:"content"},c.a.createElement(D.a,{path:"/",component:M,exact:!0}),c.a.createElement(D.a,{path:"/cart",component:H,exact:!0})))},W=a(9),Y=a(39),U=Object(W.c)({filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORT_BY_POPULAR":return Object(_.a)({},e,{sortBy:t.payload});case"SET_SORT_BY_CATEGORY":return Object(_.a)({},e,{category:t.payload});default:return e}},pizzas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PIZZAS":return Object(_.a)({},e,{items:t.items});case"SET_PRELOADER":return Object(_.a)({},e,{isLoading:t.value});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PIZZA_TO_CART":var a=e.items[t.payload.id]?[].concat(Object(T.a)(e.items[t.payload.id].items),[t.payload]):[t.payload],n=Object(_.a)({},e.items,Object(A.a)({},t.payload.id,{items:a,totalPrice:S(a)})),c=Object.values(n).map((function(e){return e.items})),r=[].concat.apply([].concat.apply([],c)),l=S(r);return Object(_.a)({},e,{items:n,totalCount:r.length,totalPrice:l});case"CLEAR_CART":return Object(_.a)({},e,{totalPrice:0,totalCount:0,items:{}});case"DELETE_PIZZA":var i=Object(_.a)({},e.items),o=i[t.id].totalPrice,s=i[t.id].items.length;return delete i[t.id],Object(_.a)({},e,{items:i,totalPrice:e.totalPrice-o,totalCount:e.totalCount-s});default:return e}}}),G=Object(W.d)(U,Object(W.a)(Y.a));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,null,c.a.createElement(p.a,{store:G},c.a.createElement(I,null)))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.77427215.chunk.js.map