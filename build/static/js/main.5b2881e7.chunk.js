(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(23),r=a.n(s),i=(a(82),a(83),a(13)),l=a(15),o=a(9),d=a(41);a(121),a(122),a(123),a(85);d.a.initializeApp({apiKey:"AIzaSyDNYaKmy4RDoBWWrF56cP2vyBsKsdLLfsc",authDomain:"gusgus-project.firebaseapp.com",databaseURL:"https://gusgus-project-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"gusgus-project",storageBucket:"gusgus-project.appspot.com",messagingSenderId:"715385701552",appId:"1:715385701552:web:1746c7c54cf774a7d52775",measurementId:"G-3MBP2J073Q"}),d.a.analytics();var j=d.a.firestore(),b=a(0),u=n.a.createContext(),m=function(e){var t=e.children,a=Object(c.useState)(!0),n=Object(o.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(null),l=Object(o.a)(i,2),j=l[0],m=l[1];return Object(c.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){m(e),r(!1)}))}),[]),s?Object(b.jsx)("p",{children:"Loading..."}):Object(b.jsx)(u.Provider,{value:{currentUser:j},children:t})};function h(){return Object(b.jsx)("div",{})}var O=a(24),p=a(25),x=a(30),v=a(73),f=function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{})}}]),a}(n.a.Component);function g(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"main-header navbar navbar-expand-md navbar-light navbar-white",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)(i.b,{to:"/",className:"navbar-brand",children:[Object(b.jsx)("img",{className:"img img-size-32 mx-2",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"}),Object(b.jsx)("span",{className:"brand-text font-weight-light",children:"Gusgus"})]}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.c,{to:"/manageorder-schedule/my-order",className:"nav-link",activeClassName:"active",children:"\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.c,{to:"/manageorder-schedule",className:"nav-link",activeClassName:"active",children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.c,{to:"/manageuser",className:"nav-link",activeClassName:"active",children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(i.c,{to:"/manageproduct",className:"nav-link",activeClassName:"active",children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"})})]})}),Object(b.jsx)("ul",{class:"order-1 order-md-3 navbar-nav navbar-no-expand ml-auto",children:Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(i.c,{to:"/",className:"nav-link",activeClassName:"active",children:"Login"})})})]})})})}var N=function(){return Object(c.useContext)(u).currentUser?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Welcome"}),Object(b.jsx)("p",{children:"This is the dashboard, if you can see this you're logged in."}),Object(b.jsx)("button",{onClick:function(){return d.a.auth().signOut()},class:"btn btn-danger",children:"Sign Out"})]})}):Object(b.jsx)(l.a,{to:"/login"})},y=function(){return Object(c.useContext)(u).currentUser?Object(b.jsx)(l.a,{to:"/dashboard"}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Log In"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,c=t.password;try{d.a.auth().signInWithEmailAndPassword(a.value,c.value)}catch(n){alert(n)}},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(b.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})},w=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1];return a?Object(b.jsx)(l.a,{to:"/dashboard"}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsx)("h1",{children:"Sign Up"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements,a=t.email,c=t.password;try{console.log(a.value),d.a.auth().createUserWithEmailAndPassword(a.value,c.value),n(!0)}catch(s){alert(s)}},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(b.jsx)("input",{type:"email",name:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(b.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",className:"form-control",id:"exampleInputPassword1"})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})})},S=a(28),k=a.n(S),C=a(7),I=a(35),_=a(47),D=a.n(_),P=D.a.mixin({icon:"success",title:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08.",toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,padding:"5px 10px",showClass:{popup:"animate__animated animate__fadeInRightBig"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),T=D.a.mixin({title:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e17\u0e33\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",text:"",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",confirmButtonText:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"}),L=D.a.mixin({title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"",allowOutsideClick:!1}),B=a(155);function E(e){var t=e.tableName,a=e.orderBy,c=void 0===a?"name":a,s=e.headerList,r=e.bodyList,l=e.actionLinkCreate,d=void 0===l?"":l,u=e.actLinkEdit,m=void 0===u?"":u,h=n.a.useState([]),O=Object(o.a)(h,2),p=O[0],x=O[1],v=n.a.useState(0),f=Object(o.a)(v,2),g=f[0],N=f[1],y=n.a.useState(""),w=Object(o.a)(y,2),S=w[0],_=w[1],D=n.a.useState(0),P=Object(o.a)(D,2),E=P[0],F=P[1],W=n.a.useState(new Map),Y=Object(o.a)(W,2),A=Y[0],U=Y[1],M=n.a.useState(10),q=Object(o.a)(M,2),G=q[0],R=q[1],z=j.collection(t);n.a.useEffect((function(){function e(){return(e=Object(I.a)(k.a.mark((function e(){var t,a,n,s,r,i,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=z.orderBy(c),a={},n=0,s=0;case 4:return r=0!==Object.keys(a).length?t.startAfter(a):t,e.next=8,r.limit(G).get();case 8:if(i=e.sent,l=i.size,!i.empty&&0!==l){e.next=12;break}return e.abrupt("break",19);case 12:0===s&&x(i.docs.map((function(e){return Object(C.a)(Object(C.a)({},e.data()),{},{id:e.id})}))),n+=l,a=i.docs[l-1],A.set(++s,a),U(A),e.next=4;break;case 19:N(n);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("init ".concat(t," ").concat(c)),A.set(0,""),function(){e.apply(this,arguments)}()}),[]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{className:"content",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)("div",{className:"card-header",children:[Object(b.jsx)("div",{className:"card-title",children:Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log("searchProduct");var t=S;z.orderBy(c).startAt(t).endAt(t+"\uf8ff").get().then((function(e){e.empty?L.fire("\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"):(x(e.docs.map((function(e){return Object(C.a)(Object(C.a)({},e.data()),{},{id:e.id})}))),N(e.size))}))},children:Object(b.jsxs)("div",{className:"input-group input-group-sm",style:{width:150},children:[Object(b.jsx)("input",{type:"text",name:"queryName",className:"form-control",placeholder:"Search",onChange:function(e){_(e.target.value)}}),Object(b.jsx)("div",{className:"input-group-append",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-default",children:Object(b.jsx)("i",{className:"fas fa-search"})})})]})})}),Object(b.jsx)("div",{className:"card-tools",children:Object(b.jsx)(i.b,{to:d,className:"btn btn-warning float-right d-inline",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21"})})]}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("div",{className:" table-responsive p-0",children:Object(b.jsxs)("table",{className:"table table-hover text-nowrap",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[s?s.map((function(e,t){return Object(b.jsx)("th",{children:e},t)})):"",Object(b.jsx)("th",{width:"1",className:"text-center",children:"Action"})]})}),Object(b.jsx)("tbody",{children:p?p.map((function(e){return Object(b.jsxs)("tr",{children:[r?r.map((function(t,a){var c=e[t]+"";return c.startsWith("http")?Object(b.jsx)("td",{className:"align-middle",children:Object(b.jsx)("div",{className:"text-center position-relative",style:{width:"60px",height:"60px",border:"1px dashed rgb(182 186 189)",cursor:"pointer"},children:Object(b.jsx)("img",{src:c,className:"w-100 position-absolute",style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"},alt:""})})},a):Object(b.jsx)("td",{className:"align-middle",children:c},a)})):"",Object(b.jsxs)("td",{className:"align-middle",children:[Object(b.jsx)(i.b,{to:"".concat(m,"/").concat(e.id),className:"btn btn-primary mr-2",children:Object(b.jsx)("i",{className:"fas fa-edit"})}),Object(b.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t=e.id,void T.fire({title:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e25\u0e1a"}).then((function(e){e.value&&z.doc(t).delete().then((function(e){x(p.filter((function(e){return e.id!==t}))),N(g-1)}))}));var t},children:Object(b.jsx)("i",{className:"fas fa-trash"})})]})]},e.id)})):""})]})}),Object(b.jsx)(B.a,{component:"div",count:g,page:E,onPageChange:function(e,t){var a=A.get(t);z.orderBy(c).startAfter(a).limit(G).get().then((function(e){e.empty||(x(e.docs.map((function(e){return Object(C.a)(Object(C.a)({},e.data()),{},{id:e.id})}))),F(t))}))},rowsPerPage:G,onRowsPerPageChange:function(e){console.log("handleChangeRowsPerPage"),R(e.target.value)}})]})]})})})})})})}function F(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("section",{className:"content-header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row mb-2",children:Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})})})})}),Object(b.jsx)(E,{tableName:"tbUsers",headerList:["\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"],bodyList:["name"],actionLinkCreate:"manageuser/create",actLinkEdit:"manageuser"})]})}var W=a(26),Y=a.n(W);function A(e){var t=Object(l.g)(),a=Object(c.useState)({id:"",name:""}),n=Object(o.a)(a,2),s=n[0],r=n[1],d=j.collection("tbUsers");Object(c.useEffect)((function(){e.match.params.id&&d.doc(e.match.params.id).get().then((function(t){r(Object(C.a)(Object(C.a)({},t.data()),{},{id:e.match.params.id}))}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"content-header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row mb-2",children:Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})})})})}),Object(b.jsx)("section",{className:"content",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("div",{className:"card card-outline card-primary",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("div",{className:"card-title",children:Object(b.jsx)("h3",{className:"card-title",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})})}),Object(b.jsx)("div",{className:"card-body table-responsive p-0",children:Object(b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==s.id){var a={name:s.name,updateDate:Y()().format()};d.doc(s.id).update(a),t.push("/manageuser")}else{var c={name:s.name,createDate:Y()().format(),isactive:1};d.add(c),t.push("/manageuser")}},children:[Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"\u0e0a\u0e37\u0e48\u0e2d"}),Object(b.jsx)("input",{type:"name",className:"form-control",id:"name",placeholder:"\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32",value:s.name,onChange:function(e){r(Object(C.a)(Object(C.a)({},s),{},{name:e.target.value}))}})]})}),Object(b.jsxs)("div",{className:"card-footer",children:[Object(b.jsx)(i.b,{to:"/manageuser",className:"btn btn-danger mr-2",children:"Back"}),Object(b.jsx)("div",{className:"float-right",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})]})})]})})})})})]})}function U(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("section",{className:"content-header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row mb-2",children:Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"})})})})}),Object(b.jsx)(E,{tableName:"tbProducts",headerList:["\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32","\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17","\u0e23\u0e32\u0e04\u0e32","\u0e23\u0e39\u0e1b"],bodyList:["name","subType","price","thumbnail"],actionLinkCreate:"manageproduct/create",actLinkEdit:"manageproduct"})]})}var M=a(156);function q(e){var t=e.thumbnail,a=e.setIsLoaded,c=e.onThumbnailChange;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:"sss"}),Object(b.jsxs)("div",{className:"text-center position-relative",style:{width:"150px",height:"150px",border:"1px dashed rgb(182 186 189)",cursor:"pointer"},children:[Object(b.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];if(void 0!==t){a(!0);var n=d.a.storage().ref("images/").child(Object(M.a)()+"."+t.name.split(".").pop());n.put(t).then((function(){n.getDownloadURL().then((function(e){c(e),a(!1)}))}))}},className:"custom-file-input h-100"}),t&&Object(b.jsx)("button",{style:{position:"absolute",top:0,right:0,width:20,border:0,background:"transparent",zIndex:3},onMouseDown:function(e){c("")},children:"X"}),Object(b.jsx)("img",{src:t,className:"w-100 position-absolute",style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)",height:"100%"},alt:""}),!t&&Object(b.jsx)("i",{className:"fas fa-plus position-absolute",style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"}})]})]})}function G(e){var t=Object(l.g)(),a=Object(c.useState)(!1),n=Object(o.a)(a,2),s=n[0],r=n[1],d=Object(c.useState)({id:"",name:"",subType:"",price:"",thumbnail:""}),u=Object(o.a)(d,2),m=u[0],h=u[1],O=j.collection("tbProducts");Object(c.useEffect)((function(){e.match.params.id&&O.doc(e.match.params.id).get().then((function(t){h(Object(C.a)(Object(C.a)({},t.data()),{},{id:e.match.params.id}))}))}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("section",{className:"content-header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row mb-2",children:Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"})})})})}),Object(b.jsx)("section",{className:"content",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("div",{className:"card card-outline card-primary",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("div",{className:"card-title",children:Object(b.jsx)("h3",{className:"card-title",children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"})})}),Object(b.jsx)("div",{className:"card-body table-responsive p-0",children:Object(b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==m.id){var a={name:m.name,subType:m.subType,price:parseInt(m.price),thumbnail:m.thumbnail,updateDate:Y()().format()};O.doc(m.id).update(a),t.push("/manageproduct")}else{var c={name:m.name,subType:m.subType,price:parseInt(m.price),thumbnail:m.thumbnail,createDate:Y()().format(),isactive:1};O.add(c),t.push("/manageproduct")}},children:[Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32",value:m.name,onChange:function(e){h(Object(C.a)(Object(C.a)({},m),{},{name:e.target.value}))}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"subType",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"subType",placeholder:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17",value:m.subType,onChange:function(e){h(Object(C.a)(Object(C.a)({},m),{},{subType:e.target.value}))}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"price",children:"\u0e23\u0e32\u0e04\u0e32"}),Object(b.jsx)("input",{type:"number",min:"1",className:"form-control",id:"price",placeholder:"\u0e23\u0e32\u0e04\u0e32",value:m.price,onChange:function(e){h(Object(C.a)(Object(C.a)({},m),{},{price:e.target.value}))}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"image",children:"\u0e23\u0e39\u0e1b\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),Object(b.jsx)(q,{thumbnail:m.thumbnail,setIsLoaded:r,onThumbnailChange:function(e){h(Object(C.a)(Object(C.a)({},m),{},{thumbnail:e}))}})]})]}),Object(b.jsxs)("div",{className:"card-footer",children:[Object(b.jsx)(i.b,{to:"/manageproduct",className:"btn btn-danger mr-2",children:"Back"}),Object(b.jsx)("div",{className:"float-right",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:s?"disabled":"",children:s?" \u2022 \u2022 \u2022 ":"Submit"})})]})]})})]})})})})})]})}function R(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"content-header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row mb-2",children:Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"})})})})}),Object(b.jsx)(E,{tableName:"tbOrderSchedules",orderBy:"users_name",headerList:["\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32","\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07","\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07","\u0e23\u0e32\u0e04\u0e32"],bodyList:["users_name","schedule","delivery","totalPrice"],actionLinkCreate:"manageorder-schedule/create",actLinkEdit:"manageorder-schedule"})]})}var z=a(14),H=a(37),J=[{value:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8,15",label:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8,15"},{value:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8",label:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8"},{value:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 15",label:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 15"},{value:"\u0e27\u0e31\u0e19\u0e42\u0e01\u0e19",label:"\u0e27\u0e31\u0e19\u0e42\u0e01\u0e19"},{value:"\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a",label:"\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a"},{value:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c",label:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"}],K=[{value:"\u0e44\u0e1b\u0e2a\u0e48\u0e07\u0e17\u0e35\u0e48\u0e1a\u0e49\u0e32\u0e19",label:"\u0e44\u0e1b\u0e2a\u0e48\u0e07\u0e17\u0e35\u0e48\u0e1a\u0e49\u0e32\u0e19"},{value:"\u0e21\u0e32\u0e40\u0e2d\u0e32\u0e17\u0e35\u0e48\u0e15\u0e25\u0e32\u0e14",label:"\u0e21\u0e32\u0e40\u0e2d\u0e32\u0e17\u0e35\u0e48\u0e15\u0e25\u0e32\u0e14"}];function Q(e){var t=Object(l.g)(),a=Object(c.useState)({users_id:"",users_name:"",schedule:"",delivery:"",remark:"",orderScheduleItems:[{products_id:"",qty:""}],totalPrice:""}),n=Object(o.a)(a,2),s=n[0],r=n[1],d=Object(c.useState)([]),u=Object(o.a)(d,2),m=u[0],h=u[1],O=Object(c.useState)([]),p=Object(o.a)(O,2),x=p[0],v=p[1],f=Object(c.useState)([]),g=Object(o.a)(f,2),N=g[0],y=g[1],w=j.collection("tbOrderSchedules"),S=j.collection("tbProducts"),_=j.collection("tbUsers");Object(c.useEffect)((function(){function t(){return(t=Object(I.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.orderBy("name").get();case 2:t=e.sent,h(t.docs.map((function(e){return{value:e.id,label:e.data().name}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(I.a)(k.a.mark((function e(){var t,a,c,n,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.orderBy("name").get();case 2:t=e.sent,a=t.docs.map((function(e){return{value:e.id,label:e.data().name+(""!==e.data().subType?"("+e.data().subType+")":"")+" "+e.data().price+"\u0e3f",price:e.data().price,nameGroup:e.data().name,products:{products_name:e.data().name,products_price:e.data().price,products_subType:e.data().subType,products_thumbnail:e.data().thumbnail}}})),y(a),c=a.map((function(e){return e.nameGroup})),n=Object(z.a)(new Set(c)),console.log(a),s=n.sort((function(e,t){return e-t})).map((function(e){return{label:e,options:a.filter((function(t){return t.nameGroup===e}))}})),console.log(s),v(s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){a.apply(this,arguments)}(),e.match.params.id&&w.doc(e.match.params.id).get().then((function(t){r(Object(C.a)(Object(C.a)({},t.data()),{},{id:e.match.params.id}))})),function(){r({})}}),[e.match.params.id]);var D=function(){var e=Object(I.a)(k.a.mark((function e(a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("submit"),a.preventDefault(),console.log(s),""!==s.id?(w.doc(s.id).set(Object(C.a)(Object(C.a)({},s),{},{updateDate:Y()().format()}),{merge:!0}),t.push("/manageorder-schedule")):(w.doc().set(s,{merge:!0}),t.push("/manageorder-schedule"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(e,t){if(0===Object.keys(t).length){var a=Object(z.a)(s.orderScheduleItems);a.splice(e,1),r(Object(C.a)(Object(C.a)({},s),{},{orderScheduleItems:a}))}else{var c=Object(z.a)(s.orderScheduleItems);c[e]=t,r(Object(C.a)(Object(C.a)({},s),{},{orderScheduleItems:c}))}};return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"content-header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row mb-2",children:Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})})})})}),Object(b.jsx)("section",{className:"content",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsxs)("div",{className:"card card-outline card-primary",children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("div",{className:"card-title",children:Object(b.jsx)("h3",{className:"card-title",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})})}),Object(b.jsx)("div",{className:"card-body table-responsive p-0",children:Object(b.jsxs)("form",{onSubmit:D,children:[Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"users_id",children:"\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"}),Object(b.jsx)(H.a,{options:m,id:"users_id",value:m.filter((function(e){return e.value===s.users_id})),onChange:function(e){r(Object(C.a)(Object(C.a)({},s),{},{users_id:e.value,users_name:e.label}))},isSearchable:!1})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"users_id",children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),s.orderScheduleItems.map((function(e,t){return Object(b.jsx)(X,{index:t,orderScheduleItem:e,productDropdownGroup:x,productDropdown:N,onOrderScheduleItemChange:P},t)})),Object(b.jsx)("button",{type:"button",className:"border text-center m-auto d-block px-3 btn btn-primary",onClick:function(){var e=Object(z.a)(s.orderScheduleItems);e.push({products_id:"",qty:""}),r(Object(C.a)(Object(C.a)({},s),{},{orderScheduleItems:e}))},children:"+"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"totalPrice",children:"\u0e23\u0e32\u0e04\u0e32\u0e23\u0e27\u0e21"}),Object(b.jsx)("input",{type:"number",min:"1",className:"form-control",id:"totalPrice",onChange:function(e){r(Object(C.a)(Object(C.a)({},s),{},{totalPrice:e.target.value}))},value:s.totalPrice})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"schedule",children:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}),Object(b.jsx)(H.a,{options:J,id:"schedule",onChange:function(e){r(Object(C.a)(Object(C.a)({},s),{},{schedule:e.value}))},isSearchable:!1,value:J.filter((function(e){return e.value===s.schedule}))})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"delivery",children:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}),Object(b.jsx)(H.a,{options:K,id:"delivery",onChange:function(e){r(Object(C.a)(Object(C.a)({},s),{},{delivery:e.value}))},isSearchable:!1,value:K.filter((function(e){return e.value===s.delivery}))})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"remark",children:"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e2b\u0e15\u0e38"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"remark",onChange:function(e){r(Object(C.a)(Object(C.a)({},s),{},{remark:e.target.value}))},value:s.remark})]})]}),Object(b.jsxs)("div",{className:"card-footer",children:[Object(b.jsx)(i.b,{to:"/manageorder-schedule",className:"btn btn-danger mr-2",children:"Back"}),Object(b.jsx)("div",{className:"float-right",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})]})})]})})})})})]})}function X(e){Object(c.useEffect)((function(){s(e.orderScheduleItem)}),[e.orderScheduleItem]);var t=Object(c.useState)({products_id:"",qty:""}),a=Object(o.a)(t,2),n=a[0],s=a[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-8 mb-2 pr-0",children:Object(b.jsx)(H.a,{options:e.productDropdownGroup,id:"products_id",onChange:function(t){s(Object(C.a)(Object(C.a)({},n),{},{products_id:t.value})),e.onOrderScheduleItemChange(e.index,Object(C.a)(Object(C.a)({},n),{},{products_id:t.value},e.productDropdown.filter((function(e){return e.value===t.value}))[0].products))},isSearchable:!1,value:e.productDropdown.filter((function(t){return t.value===e.orderScheduleItem.products_id}))})}),Object(b.jsx)("div",{className:"col-3",children:Object(b.jsx)("input",{type:"number",min:"1",className:"form-control text-right",placeholder:"\u0e08\u0e33\u0e19\u0e27\u0e19",onChange:function(t){s(Object(C.a)(Object(C.a)({},n),{},{qty:t.target.value})),e.onOrderScheduleItemChange(e.index,Object(C.a)(Object(C.a)({},n),{},{qty:t.target.value}))},value:e.orderScheduleItem.qty,pattern:"[0-9]*|\\s"})}),Object(b.jsx)("div",{className:"col-1 pl-0",children:Object(b.jsx)("div",{className:"btn btn-danger btn-block px-0",onClick:function(t){t.preventDefault(),e.onOrderScheduleItemChange({},e.index)},children:"X"})})]})})}function $(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8"),r=Object(o.a)(s,2),i=r[0],l=r[1],d=[{value:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8",label:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8"},{value:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 15",label:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 15"},{value:"\u0e27\u0e31\u0e19\u0e42\u0e01\u0e19",label:"\u0e27\u0e31\u0e19\u0e42\u0e01\u0e19"},{value:"\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a",label:"\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a"},{value:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c",label:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"}],u=j.collection("tbOrderSchedules");Object(c.useEffect)((function(){var e=i;function t(){return(t=Object(I.a)(k.a.mark((function t(){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.orderBy("schedule").startAt(e).get();case 2:a=t.sent,n(a.docs.filter((function(e){var t=e.data();return!(Y()(t.deliverTime,"YYYY-MM-DD").format("YYYY-MM-DD")===Y()().format("YYYY-MM-DD"))})).map((function(e){var t=e.data();return Object(C.a)(Object(C.a)({},t),{},{id:e.id})})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){n([])}}),[i]);var m=function(e){n(a.filter((function(t){return t.id!==e}))),P.fire()};return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{className:"content-header",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row mb-2",children:Object(b.jsx)("div",{className:"col-sm-6",children:Object(b.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"})})})})}),Object(b.jsx)("section",{className:"content",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-12",children:Object(b.jsx)(H.a,{options:d,id:"schedule",onChange:function(e){l(e.value)},isSearchable:!1,value:d.filter((function(e){return e.value===i}))})})}),Object(b.jsx)("div",{className:"row mt-4",children:Object(b.jsx)("div",{className:"col-12 text-right",children:Object(b.jsxs)("span",{className:"text-sm",children:["\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 ",a.length," \u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"]})})}),Object(b.jsx)("div",{className:"row mt-2",children:Object(b.jsx)("div",{className:"col-12",children:a.length>0?a.map((function(e){return Object(b.jsx)(V,{item:e,onDeliverClick:m},e.id)})):"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"})})]})})]})}function V(e){var t=e.item,a=e.onDeliverClick,c=j.collection("tbOrders"),n=j.collection("tbOrderSchedules");return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"card card-outline card-primary",children:Object(b.jsxs)("div",{className:"card-body p-3",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col-8 text-lg text-bold",children:t.users_name})}),Object(b.jsx)("div",{className:"row mt-3",children:Object(b.jsx)("div",{className:"col-12",children:t.orderScheduleItems.map((function(e,t){return Object(b.jsxs)("div",{className:"info-box",children:[Object(b.jsx)("span",{className:"info-box-icon",children:Object(b.jsx)("img",{src:e.products_thumbnail,alt:e.products_name})}),Object(b.jsxs)("div",{className:"info-box-content",children:[Object(b.jsx)("span",{className:"info-box-text text-md",children:e.products_name+(""!==e.products_subType?" ("+e.products_subType+")":"")}),Object(b.jsxs)("span",{className:"info-box-number",children:[e.products_price," \u0e3f"]})]}),Object(b.jsx)("div",{className:"info-box-content",children:Object(b.jsxs)("span",{className:"info-box-text text-xl text-right",children:["x ",e.qty]})})]},t)}))})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-6 text-lg d-table",children:Object(b.jsxs)("div",{className:"d-table-cell align-middle",children:["\u0e23\u0e32\u0e04\u0e32\u0e23\u0e27\u0e21 ",Object(b.jsxs)("b",{children:[t.totalPrice," \u0e3f"]})]})}),Object(b.jsx)("div",{className:"col-6",children:Object(b.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){T.fire({title:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}).then((function(e){if(e.value){var s={create_date:Y()().format(),isactive:1,orderTypeId:1,orderTypeName:"\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e1b\u0e23\u0e30\u0e08\u0e33",tbOrderScheduleId:t.id,tbOrderSchedule:t};c.doc().set(s,{merge:!0}),n.doc(t.id).update({deliverTime:Y()().format()}),a(t.id)}}))},children:"\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"})})]})]})})})}function Z(){return Object(b.jsxs)(m,{children:[Object(b.jsxs)(i.a,{children:[Object(b.jsx)(h,{}),Object(b.jsx)(g,{}),Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/",component:$}),Object(b.jsx)(l.b,{exact:!0,path:"/dashboard",component:N}),Object(b.jsx)(l.b,{exact:!0,path:"/manageuser",component:F}),Object(b.jsx)(l.b,{exact:!0,path:"/manageuser/create",component:A}),Object(b.jsx)(l.b,{exact:!0,path:"/manageuser/:id",component:A}),Object(b.jsx)(l.b,{exact:!0,path:"/manageproduct",component:U}),Object(b.jsx)(l.b,{exact:!0,path:"/manageproduct/create",component:G}),Object(b.jsx)(l.b,{exact:!0,path:"/manageproduct/:id",component:G}),Object(b.jsx)(l.b,{exact:!0,path:"/manageorder-schedule",component:R}),Object(b.jsx)(l.b,{exact:!0,path:"/manageorder-schedule/my-order",component:$}),Object(b.jsx)(l.b,{exact:!0,path:"/manageorder-schedule/create",component:Q}),Object(b.jsx)(l.b,{exact:!0,path:"/manageorder-schedule/:id",component:Q}),Object(b.jsx)(l.b,{exact:!0,path:"/login",component:y}),Object(b.jsx)(l.b,{exact:!0,path:"/signup",component:w})]})]}),Object(b.jsx)(f,{})]})}var ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ae=a(71),ce=a(72),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e},se=Object(ae.a)(ne),re=function(){return Object(b.jsx)(i.a,{children:Object(b.jsx)(ce.a,{store:se,children:Object(b.jsx)(Z,{})})})};r.a.render(Object(b.jsx)(re,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");ee?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):te(e)}))}}()},82:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.5b2881e7.chunk.js.map