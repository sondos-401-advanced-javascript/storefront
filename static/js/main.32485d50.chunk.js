(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{60:function(e,t,a){e.exports=a(73)},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(6),o=a.n(c),l=a(15),i=a(48),u=a(49),m=a(54),s=a(52),d=a(37),p=a(109),g=a(122),y=a(124),f=a(50),E=a.n(f);var h=Object(l.b)((function(e){return{cart:e.cart}}))((function(e){var t=n.a.useState(null),a=Object(d.a)(t,2),r=a[0],c=a[1],o=Boolean(r),l=function(){c(null)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("h1",null,"OUR STORE"),n.a.createElement("div",{className:"menu"},n.a.createElement("h2",null,"CART (",e.cart.cart,")"),n.a.createElement(p.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)}},n.a.createElement(E.a,null)),n.a.createElement(g.a,{id:"long-menu",anchorEl:r,keepMounted:!0,open:o,onClose:l,PaperProps:{style:{maxHeight:216,width:"20ch"}}},e.cart.cartProduct.map((function(e,t){return n.a.createElement(y.a,{key:t,selected:"Pyxis"===e,onClick:l},e.name)}))))))}));var v=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{id:"footer"},n.a.createElement("h2",null,"\xa9 Sondos-2020")))},C={categories:[{name:"electronics",displayName:"Elecronics"},{name:"food",displayName:"Food"},{name:"clothing",displayName:"Clothing"}],activeCategory:""},b=a(112),k=a(74),O=a(123),j=a(113),S=Object(b.a)({root:{flexGrow:1}}),T={productBaseCategory:function(e){return{type:"PRODUCT",payload:e}}},N=Object(l.b)((function(e){return{counter:e.category}}),T)((function(e){var t=S(),a=n.a.useState(0),r=Object(d.a)(a,2),c=r[0],o=r[1];return n.a.createElement("section",{className:"counter"},n.a.createElement(k.a,{className:t.root},n.a.createElement(O.a,{value:c,onChange:function(e,t){o(t)},indicatorColor:"primary",textColor:"primary",centered:!0},e.counter.categories.map((function(t,a){return n.a.createElement(j.a,{div:"true",onClick:function(){return e.productBaseCategory(t.name)},key:a,label:t.displayName})})))))})),w=a(116),R=a(117),P=a(120),x=a(118),A=a(114),B=a(119),D=a(115),F=a(53),U={cartProduct:[],cart:0};var W={addToCart:function(e){return{type:"CART",payload:e}}},z=Object(l.b)((function(e){return{cart:e.cart}}),W)((function(e){return n.a.createElement(A.a,{onClick:function(){return e.addToCart(e.data)},size:"small",color:"primary"},"Add To Cart")})),H=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:800,display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}})),J=Object(l.b)((function(e){return{products:e.product,category:e.category}}))((function(e){var t=H();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"cont"},n.a.createElement("h1",{id:"category"},e.category.activeCategory),n.a.createElement("p",null,"category description goes here")),n.a.createElement("section",{className:"products"},n.a.createElement(D.a,{cellHeight:200,className:t.gridList,cols:3},e.products.products.map((function(e,a){return n.a.createElement(w.a,{className:t.root,key:a},n.a.createElement(R.a,null,n.a.createElement(x.a,null,n.a.createElement(B.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),n.a.createElement(B.a,{variant:"body2",color:"textSecondary",component:"p"},"Price: ",e.price,"$ - inStock: ",e.inStock))),n.a.createElement(P.a,null,n.a.createElement(z,{data:e}),n.a.createElement(A.a,{size:"small",color:"primary"},"View Detailes")))})))))})),L=a(121),M=(a(72),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(L.a,null,n.a.createElement(h,null),n.a.createElement(N,null),n.a.createElement(J,null),n.a.createElement(v,null)))}}]),a}(n.a.Component)),V=a(21),G=a(51),I=[{name:"TV",category:"electronics",price:699,inStock:5},{name:"Radio",category:"electronics",price:99,inStock:15},{name:"Shirt",category:"clothing",price:9,inStock:25},{name:"Socks",category:"clothing",price:12,inStock:10},{name:"Apples",category:"food",price:.99,inStock:500},{name:"Eggs",category:"food",price:1.99,inStock:12},{name:"Bread",category:"food",price:2.39,inStock:90}],$=Object(V.combineReducers)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"PRODUCT":var n=(e=I).filter((function(e){return e.category===r}));return{products:n};case"CART":var c=(e=I).filter((function(e){return e.category===r.category}));return{products:c};default:var o=e.filter((function(t){return t.category===e[0].category}));return{products:o}}},category:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"PRODUCT":var n=(e=C).categories.filter((function(e){return e.name===r}))[0].displayName;return{categories:e.categories,activeCategory:n};case"CART":var c=(e=C).categories.filter((function(e){return e.name===r.category}));return{categories:e.categories,activeCategory:c[0].displayName};default:var o=e.categories.filter((function(t){return t.name===e.categories[0].name}));return{categories:e.categories,activeCategory:o[0].displayName}}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"CART":var n=[].concat(Object(F.a)(e.cartProduct),[r]);return{cartProduct:n,cart:n.length};default:return e}}}),q=Object(V.createStore)($,Object(G.composeWithDevTools)());o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,{store:q},n.a.createElement(M,null))),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.32485d50.chunk.js.map