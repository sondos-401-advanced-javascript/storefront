(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(e,t,a){e.exports=a(51)},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(12),o=a.n(c),l=a(15),i=a(30),u=a(31),s=a(35),m=a(33);var p=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("h1",null,"OUR STORE"),n.a.createElement("h2",null,"CART (0)")))};var d=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{id:"footer"},n.a.createElement("h2",null,"\xa9 Sondos-2020")))},g=a(34),y={categories:[{name:"electronics",displayName:"Elecronics"},{name:"food",displayName:"Food"},{name:"clothing",displayName:"Clothing"}],products:[{name:"TV",category:"electronics",price:699,inStock:5},{name:"Radio",category:"electronics",price:99,inStock:15},{name:"Shirt",category:"clothing",price:9,inStock:25},{name:"Socks",category:"clothing",price:12,inStock:10},{name:"Apples",category:"food",price:.99,inStock:500},{name:"Eggs",category:"food",price:1.99,inStock:12},{name:"Bread",category:"food",price:2.39,inStock:90}],activeCategory:""},f=a(77),E=a(52),h=a(88),v=a(79),b=Object(f.a)({root:{flexGrow:1}}),C={productBaseCategory:function(e){return{type:"PRODUCT",payload:e}}},k=Object(l.b)((function(e){return{counter:e.product}}),C)((function(e){var t=b(),a=n.a.useState(0),r=Object(g.a)(a,2),c=r[0],o=r[1];return n.a.createElement("section",{className:"counter"},n.a.createElement(E.a,{className:t.root},n.a.createElement(h.a,{value:c,onChange:function(e,t){o(t)},indicatorColor:"primary",textColor:"primary",centered:!0},e.counter.categories.map((function(t,a){return n.a.createElement(v.a,{div:"true",onClick:function(){return e.productBaseCategory(t.name)},key:a,label:t.displayName})})))))})),S=a(81),O=a(82),j=a(85),N=a(83),w=a(86),x=a(84),R=a(80),T=Object(f.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:800,display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}})),B=Object(l.b)((function(e){return{products:e.product}}))((function(e){var t=T();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"cont"},n.a.createElement("h1",{id:"category"},e.products.activeCategory),n.a.createElement("p",null,"category description goes here")),n.a.createElement("section",{className:"products"},n.a.createElement(R.a,{cellHeight:200,className:t.gridList,cols:3},e.products.products.map((function(e,a){return n.a.createElement(S.a,{className:t.root,key:a},n.a.createElement(O.a,null,n.a.createElement(N.a,null,n.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),n.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"Price: ",e.price,"$ - inStock: ",e.inStock))),n.a.createElement(j.a,null,n.a.createElement(w.a,{size:"small",color:"primary"},"Add To Cart"),n.a.createElement(w.a,{size:"small",color:"primary"},"View Detailes")))})))))})),F=a(87),D=(a(50),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(F.a,null,n.a.createElement(p,null),n.a.createElement(k,null),n.a.createElement(B,null),n.a.createElement(d,null)))}}]),a}(n.a.Component)),A=a(13),P=a(32),U=Object(A.combineReducers)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"PRODUCT":var n=(e=y).products.filter((function(e){return e.category===r})),c=e.categories.filter((function(e){return e.name===r}))[0].displayName;return console.log("active data inn n====>",c),{categories:e.categories,products:n,activeCategory:c};default:var o=e.products.filter((function(t){return t.category===e.categories[0].name})),l=e.categories.filter((function(t){return t.name===e.categories[0].name}));return console.log("active data ====>",l[0].displayName),{categories:e.categories,products:o,activeCategory:l[0].displayName}}}}),W=Object(A.createStore)(U,Object(P.composeWithDevTools)());o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,{store:W},n.a.createElement(D,null))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b1f9bde1.chunk.js.map