(this.webpackJsonpcakes=this.webpackJsonpcakes||[]).push([[0],{32:function(e,t,a){e.exports=a(53)},37:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),s=(a(37),a(28)),i=a(10);function o(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}function u(e){return e[Math.floor(Math.random()*e.length)]}function m(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(u(e),"-").concat(u(e),"-").concat(u(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var p=function(e){var t=r.a.createRef();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"store-selector",onSubmit:function(a){return function(a){a.preventDefault(),e.history.push("/store/".concat(t.current.value))}(a)}},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{type:"text",ref:t,required:!0,placeholder:"Store Name",defaultValue:m()}),r.a.createElement("button",{type:"submit"},"Visit Store \u2192")))},f=a(14),d=a(13),h=a(11),b=a.n(h),g=b.a.initializeApp({apiKey:"AIzaSyDYqA6n6nNWA1m288MRI0VfUU2dHrqijyI",authDomain:"cakes-3516d.firebaseapp.com",databaseURL:"https://cakes-3516d.firebaseio.com"}),v=b.a,y=function(e){var t=e.tagline;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"of"),r.a.createElement("span",{className:"the"},"the")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,t))))},E=a(55),O=a(56),j=function(e){var t,a=e.order,n=e.fishes,c=e.removeFromOrder,l=0;return a&&n&&(l=(t=Object.keys(a)).reduce((function(e,t){var r=n[t],c=a[t];return r&&"available"===r.status?e+c*r.price:e}),0)),r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(O.a,{component:"ul",className:"order"},t&&t.map((function(e){return function(e){var t=n[e],l=a[e],s=t&&"available"===t.status,i={classNames:"order",key:e,timeout:{enter:500,exit:500}};return t?s?r.a.createElement(E.a,i,r.a.createElement("li",{key:e},r.a.createElement("span",{className:"order-span"},r.a.createElement("span",null,r.a.createElement(O.a,{component:"span",className:"count"},r.a.createElement(E.a,{classNames:"count",key:l,timeout:{enter:500,exit:500}},r.a.createElement("span",null,l))),"lbs ",t.name," ",o(l*t.price)),r.a.createElement("button",{type:"button",className:"delete",onClick:function(){c(e)}},"\xd7")))):r.a.createElement(E.a,i,r.a.createElement("li",{key:e},"Sorry ",t?t.name:"fish"," is no longer available")):null}(e)}))),r.a.createElement("div",{className:"total"},"Total: ",r.a.createElement("strong",null,o(l))))},w=a(16),k=a.n(w),N=a(21),S=function(e){var t=e.addFish,a=r.a.createRef(),n=r.a.createRef(),c=r.a.createRef(),l=r.a.createRef(),s=r.a.createRef();return r.a.createElement("form",{className:"fish-edit",onSubmit:function(e){return function(e){e.preventDefault();"fish".concat(Date.now());var r={name:a.current.value,price:parseFloat(n.current.value),status:c.current.value,desc:l.current.value,image:s.current.value};t(r),e.currentTarget.reset()}(e)}},r.a.createElement("input",{type:"text",name:"name",ref:a,required:!0,placeholder:"Name"}),r.a.createElement("input",{type:"number",name:"price",ref:n,required:!0,placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:c,required:!0},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:l,required:!0,placeholder:"Description"}),r.a.createElement("input",{type:"text",name:"image",ref:s,required:!0,placeholder:"image"}),r.a.createElement("button",{type:"submit"},"+ Add Fish"))};function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var P=function(e){var t=e.fish,a=t.name,n=t.price,c=t.status,l=t.desc,s=t.image,i=e.updateFish,o=e.deleteFish,u=e.index;function m(t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.fish,Object(f.a)({},t.target.name,t.target.value));i(e.index,a)}return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{name:"name",type:"text",placeholder:"Name",required:!0,value:a,onChange:m}),r.a.createElement("input",{name:"price",type:"number",placeholder:"Price",required:!0,value:n,onChange:m}),r.a.createElement("select",{name:"status",onChange:m,value:c},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",placeholder:"Desc",required:!0,value:l,onChange:m}),r.a.createElement("input",{name:"image",type:"text",placeholder:"Image",required:!0,value:s,onChange:m}),r.a.createElement("button",{type:"button",onClick:function(){o(u)}},"Remove Fish"))},x=function(e){var t=e.authenticate;return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Sign in to manage your store's inventory."),r.a.createElement("button",{type:"button",className:"github",onClick:function(){t("Github")}}," ","Log In With GitHub"," "),r.a.createElement("button",{type:"button",className:"twitter",onClick:function(){t("Twitter")}}," ","Log In With Twitter"," "),r.a.createElement("button",{type:"button",className:"facebook",onClick:function(){t("Facebook")}}," ","Log In With Facebook"," "),r.a.createElement("button",{type:"button",className:"github",onClick:function(){t("Google")}}," ","Log In With Google"," "))},C=function(e){var t=e.storeId,a=e.addFish,c=e.updateFish,l=e.deleteFish,s=e.loadSampleFishes,i=e.fishes,o=Object(n.useState)(null),u=Object(d.a)(o,2),m=u[0],p=u[1],f=Object(n.useState)(null),h=Object(d.a)(f,2),v=h[0],y=h[1],E=Object(n.useState)(null),O=Object(d.a)(E,2),j=O[0],w=O[1],F=b.a.database().ref(t),C=Object(n.useCallback)(function(){var e=Object(N.a)(k.a.mark((function e(t){var a,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.user.uid,y(a),n=t.user.photoURL,w(n),e.next=6,F.child("owner").once("value").then((function(e){return e.val()}));case 6:(r=e.sent)||F.update({owner:a}),p(r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[F]),I=function(){var e=Object(N.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.auth().signOut();case 2:y(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){b.a.auth().onAuthStateChanged((function(e){e&&C({user:e})}))}),[C]);var D=r.a.createElement("button",{type:"button",className:"logout",onClick:I},"Log Out"),q=r.a.createElement("img",{src:j,alt:"user"});return v?m&&v!==m?r.a.createElement("div",{className:"inventory"},D,r.a.createElement("h3",null,"Sorry, you are not the owner of this store...",r.a.createElement("br",null),r.a.createElement("br",null),"go to the homepage to create a new store just for you!")):m&&v&&m===v?r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),r.a.createElement("div",{className:"inventory-top"},D,q),i&&Object.keys(i).map((function(e){return r.a.createElement(P,{key:e,fish:i[e],updateFish:c,deleteFish:l,index:e})})),r.a.createElement(S,{addFish:a}),r.a.createElement("button",{type:"button",onClick:s},"Load Sample Fishes")):r.a.createElement("div",null,"loading..."):r.a.createElement(x,{authenticate:function(e){var t=new(b.a.auth["".concat(e,"AuthProvider")]);g.auth().signInWithPopup(t).then(C)}})},I=[{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyones favorite white fish. We will cut it to the size you need and ship it.",price:17.24,status:"available"},{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:32,status:"available"},{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:16.84,status:"unavailable"},{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:11.29,status:"available"},{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:42.34,status:"available"},{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:14.53,status:"available"},{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:25.43,status:"available"},{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:4.25,status:"available"},{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:22.5,status:"available"}],D=function(e){var t=e.details,a=t.name,n=t.price,c=t.status,l=t.desc,s=t.image,i=e.addToOrder,u=e.index,m="available"===c;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:s,alt:a}),r.a.createElement("h3",{className:"fish-name"},a," ",r.a.createElement("span",{className:"price"},n&&o(n))),r.a.createElement("p",null,l),r.a.createElement("button",{type:"button",disabled:!m,onClick:function(){i(u)}},m?"Add To Cart":"Sold Out!"))};function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=function(e){var t=e.match.params.storeId,a=Object(n.useState)({}),c=Object(d.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)(JSON.parse(localStorage.getItem(t))||{}),o=Object(d.a)(i,2),u=o[0],m=o[1],p=v.database().ref("".concat(t,"/fishes/"));Object(n.useEffect)((function(){return p.on("value",(function(e){s(e.val())})),function(){p.off()}}),[p]),Object(n.useEffect)((function(){localStorage.setItem(t,JSON.stringify(u))}),[u,t]);var h=function(e){var a={};a[v.database().ref(t).child("fishes").push().key]=e,p.update(a)},b=function(e){m(A({},u,Object(f.a)({},e,u[e]+1||1)))},g=function(e){var t=A({},u);delete t[e],m(t)};return r.a.createElement("div",{className:"cakes"},r.a.createElement("div",{className:"menu"},r.a.createElement(y,{tagline:"fresh seafood market"}),r.a.createElement("ul",{className:"fishes"},l&&Object.keys(l).map((function(e){return r.a.createElement(D,{key:e,index:e,details:l[e],addToOrder:b})})))),r.a.createElement(j,{fishes:l,order:u,removeFromOrder:g}),r.a.createElement(C,{storeId:t,fishes:l,addFish:h,loadSampleFishes:function(){I.map((function(e){return h(e)}))},updateFish:function(e,t){var a=A({},l);a[e]=t,p.update(a)},deleteFish:function(e){p.child(e).remove(),g(e)}}))},T=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found!!!"))},R=function(){return r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:p}),r.a.createElement(i.a,{path:"/store/:storeId",component:L}),r.a.createElement(i.a,{component:T})))};l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5d7a06cb.chunk.js.map