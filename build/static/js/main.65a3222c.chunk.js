(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(25),r=a.n(s),i=(a(63),a(6)),l=a(5),o=a(7),d=a(1);function j(){return Object(d.jsx)("div",{})}var b=a(8),h=a(9),u=a(10),m=a(21),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{})}}]),a}(n.a.Component);function O(){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"main-header navbar navbar-expand-md navbar-light navbar-white",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)(l.b,{to:"/",className:"navbar-brand",children:[Object(d.jsx)("img",{className:"img img-size-32 mx-2",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Workflow"}),Object(d.jsx)("span",{className:"brand-text font-weight-light",children:"Gusgus"})]}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(d.jsxs)("ul",{className:"navbar-nav",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.c,{to:"/manageorder",className:"nav-link",activeClassName:"active",children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.c,{to:"/manageuser",className:"nav-link",activeClassName:"active",children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.c,{to:"/manageproduct",className:"nav-link",activeClassName:"active",children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"})})]})})]})})})}var v=a(17),x=a.n(v),f=[{value:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8,15",label:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8,15"},{value:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8",label:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8"},{value:"\u0e17\u0e01\u0e38\u0e1e\u0e23\u0e30 15",label:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 15"},{value:"\u0e27\u0e31\u0e19\u0e42\u0e01\u0e19",label:"\u0e27\u0e31\u0e19\u0e42\u0e01\u0e19"},{value:"\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a",label:"\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a"},{value:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c",label:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"}],g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(b.a)(this,a),(c=t.call(this,e)).changeDataSchedule=function(e){var t=c.state.dataTableMain;c.setState({dataTable:t.filter((function(t){return t.schedule===e}))}),c.forceUpdate()},c.state={dataTableMain:[],dataTable:[],dataSchedule:1},c}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://safe-crag-24120.herokuapp.com/api/order?name=").then((function(t){console.log(t.data),null!==t.data&&e.setState({dataTableMain:t.data,dataTable:t.data.filter((function(e){return"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8,15"===e.schedule}))})}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("section",{className:"content-header",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row mb-2",children:Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"})})})})}),Object(d.jsx)("section",{className:"content",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12 text-center",children:Object(d.jsx)("div",{className:"btn-group btn-group-toggle flex-wrap","data-toggle":"buttons",children:f.map((function(t,a){return Object(d.jsxs)("label",{className:"btn btn-info mb-1 "+(0===a?"active":""),children:[Object(d.jsx)("input",{type:"radio",name:"options",autoComplete:"off",onClick:function(){return e.changeDataSchedule(t.value)}}),t.label]},a)}))})})}),Object(d.jsx)("div",{className:"row mt-4",children:Object(d.jsx)("div",{className:"col-12",children:this.state.dataTable.map((function(e){return Object(d.jsx)("div",{className:"card card-outline card-primary",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-8 text-lg text-bold",children:e.userModel.name})}),Object(d.jsx)("div",{className:"row mt-3",children:Object(d.jsx)("div",{className:"col-12",children:e.orderItems.map((function(e,t){return Object(d.jsxs)("div",{className:"info-box",children:[Object(d.jsx)("div",{className:"position-relative d-inline-block",style:{width:"80px",height:"80px",cursor:"pointer"},children:Object(d.jsx)("img",{src:e.productModel.thumbnail&&"https://safe-crag-24120.herokuapp.com/"+e.productModel.thumbnail,className:"w-100 position-absolute",style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"},alt:""})}),Object(d.jsxs)("div",{className:"info-box-content",children:[Object(d.jsx)("span",{className:"info-box-text text-md",style:{width:"220px"},children:e.productModel.name+(""!==e.productModel.subtype?" ("+e.productModel.subtype+")":"")}),Object(d.jsxs)("span",{className:"info-box-number",children:[e.productModel.price," \u0e3f"]})]}),Object(d.jsx)("div",{className:"info-box-content",children:Object(d.jsxs)("span",{className:"info-box-text text-xl text-right",children:["x ",e.qty]})})]},t)}))})}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-6 text-lg d-table",children:Object(d.jsxs)("div",{className:"d-table-cell align-middle",children:["\u0e23\u0e32\u0e04\u0e32\u0e23\u0e27\u0e21 ",Object(d.jsxs)("b",{children:[e.totalPrice," \u0e3f"]})]})}),Object(d.jsx)("div",{className:"col-6",children:Object(d.jsx)("button",{className:"btn btn-primary btn-block",children:"\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07\u0e41\u0e25\u0e49\u0e27"})})]})]})},e._id)}))})})]})})]})}}]),a}(c.Component),N=a(20),y=a(33),w=a.n(y),C=(w.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e4}),w.a.mixin({title:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e17\u0e33\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23",text:"",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",confirmButtonText:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19"})),k=(w.a.mixin({type:"error",title:"\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",text:"",allowOutsideClick:!1}),a(34));a(115),a(98),a(116);k.a.initializeApp({apiKey:"AIzaSyDNYaKmy4RDoBWWrF56cP2vyBsKsdLLfsc",authDomain:"gusgus-project.firebaseapp.com",databaseURL:"https://gusgus-project-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"gusgus-project",storageBucket:"gusgus-project.appspot.com",messagingSenderId:"715385701552",appId:"1:715385701552:web:1746c7c54cf774a7d52775",measurementId:"G-3MBP2J073Q"}),k.a.analytics();var I=k.a;var S=a(28),D=a.n(S);function T(e){var t=Object(o.f)(),a=Object(c.useState)(""),n=Object(N.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(""),j=Object(N.a)(i,2),b=j[0],h=j[1];Object(c.useEffect)((function(){e.match.params.id&&(r(e.match.params.id),I.database().ref("User").child(e.match.params.id).on("value",(function(e){var t=e.val();console.log(t),h(t.name)})))}),[e.match.params.id]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("section",{className:"content-header",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row mb-2",children:Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})})})})}),Object(d.jsx)("section",{className:"content",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"card card-outline card-primary",children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("div",{className:"card-title",children:Object(d.jsx)("h3",{className:"card-title",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})})}),Object(d.jsx)("div",{className:"card-body table-responsive p-0",children:Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==s){I.database().ref("User").child(s).update({name:b,update_date:D()().format()}),t.push("/manageuser")}else{var a=I.database().ref("User"),c={name:b,create_date:D()().format(),isactive:1};a.push(c),t.push("/manageuser")}},children:[Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"\u0e0a\u0e37\u0e48\u0e2d"}),Object(d.jsx)("input",{type:"name",className:"form-control",id:"name",placeholder:"\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32",value:b,onChange:function(e){h(e.target.value)}})]})}),Object(d.jsxs)("div",{className:"card-footer",children:[Object(d.jsx)(l.b,{to:"/manageuser",className:"btn btn-danger mr-2",children:"Back"}),Object(d.jsx)("div",{className:"float-right",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})]})})]})})})})})]})}var P=a(118);function B(e){var t=Object(o.f)(),a=Object(c.useState)({id:"",name:"",subType:"",price:"",thumbnail:""}),n=Object(N.a)(a,2),s=n[0],r=n[1];Object(c.useEffect)((function(){e.match.params.id&&I.database().ref("Product").child(e.match.params.id).on("value",(function(t){var a=t.val();console.log(a),r(Object(i.a)(Object(i.a)({},a),{},{id:e.match.params.id}))}));return function(){r({})}}),[e.match.params.id]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("section",{className:"content-header",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row mb-2",children:Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"})})})})}),Object(d.jsx)("section",{className:"content",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"card card-outline card-primary",children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("div",{className:"card-title",children:Object(d.jsx)("h3",{className:"card-title",children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"})})}),Object(d.jsx)("div",{className:"card-body table-responsive p-0",children:Object(d.jsxs)("form",{onSubmit:function(e){if(console.log("submit"),e.preventDefault(),""!==s.id){console.log(s.id);var a=I.database().ref("Product").child(s.id),c={name:s.name,subType:s.subType,price:parseInt(s.price),thumbnail:s.thumbnail,update_date:D()().format()};a.update(c),t.push("/manageproduct")}else{var n=I.database().ref("Product"),r={name:s.name,subType:s.subType,price:parseInt(s.price),thumbnail:s.thumbnail,create_date:D()().format(),isactive:1};n.push(r),t.push("/manageproduct")}},children:[Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32",value:s.name,onChange:function(e){r(Object(i.a)(Object(i.a)({},s),{},{name:e.target.value}))}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"subType",children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"subType",placeholder:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17",value:s.subType,onChange:function(e){r(Object(i.a)(Object(i.a)({},s),{},{subType:e.target.value}))}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"price",children:"\u0e23\u0e32\u0e04\u0e32"}),Object(d.jsx)("input",{type:"number",className:"form-control",id:"price",placeholder:"\u0e23\u0e32\u0e04\u0e32",value:s.price,onChange:function(e){r(Object(i.a)(Object(i.a)({},s),{},{price:e.target.value}))}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"image",children:"\u0e23\u0e39\u0e1b\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),Object(d.jsx)(q,{thumbnail:s.thumbnail,onthumbnailChange:function(e){r(Object(i.a)(Object(i.a)({},s),{},{thumbnail:e}))}})]})]}),Object(d.jsxs)("div",{className:"card-footer",children:[Object(d.jsx)(l.b,{to:"/manageproduct",className:"btn btn-danger mr-2",children:"Back"}),Object(d.jsx)("div",{className:"float-right",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})]})})]})})})})})]})}function q(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"text-center position-relative",style:{width:"100px",height:"100px",border:"1px dashed rgb(182 186 189)",cursor:"pointer"},children:[Object(d.jsx)("input",{type:"file",onChange:function(t){var a=t.target.files[0],c=I.storage().ref("images/").child(Object(P.a)()+"."+a.name.split(".").pop());c.put(a).then((function(t){c.getDownloadURL().then((function(t){e.onthumbnailChange(t)}))}))},className:"custom-file-input h-100"}),e.thumbnail&&Object(d.jsx)("button",{style:{position:"absolute",top:0,right:0,width:20,border:0,background:"transparent",zIndex:3},onClick:function(t){e.onthumbnailChange("")},children:"X"}),Object(d.jsx)("img",{src:e.thumbnail,className:"w-100 position-absolute",style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"},alt:""}),!e.thumbnail&&Object(d.jsx)("i",{className:"fas fa-plus position-absolute",style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"}})]})})}x.a.defaults.headers["Access-Control-Allow-Origin"]="*";var A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(b.a)(this,a),(c=t.call(this,e)).getOrders=function(){var e=c.queryName.value;x.a.get("https://safe-crag-24120.herokuapp.com"+"/api/order?name=".concat(e)).then((function(e){null!=e.data?(console.log(e.data),c.setState({dataTable:e.data})):c.setState({dataTable:[]})}))},c.delOrder=function(e){C.fire({title:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e25\u0e1a"}).then((function(t){t.value&&x.a.delete("https://safe-crag-24120.herokuapp.com"+"/api/order/".concat(e)).then((function(e){c.getOrders()}))}))},c.state={queryName:"",dataTable:[]},c}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getOrders()}},{key:"render",value:function(){var e=this,t=this.state.dataTable;return Object(d.jsxs)("div",{children:[Object(d.jsx)("section",{className:"content-header",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row mb-2",children:Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"})})})})}),Object(d.jsx)("section",{className:"content",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"card-header",children:[Object(d.jsx)("div",{className:"card-title",children:Object(d.jsxs)("div",{className:"input-group input-group-sm",style:{width:150},children:[Object(d.jsx)("input",{type:"text",name:"queryName",className:"form-control",placeholder:"Search",ref:function(t){return e.queryName=t},onChange:this.getOrders}),Object(d.jsx)("div",{className:"input-group-append",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-default",onClick:function(){return e.getOrders()},children:Object(d.jsx)("i",{className:"fas fa-search"})})})]})}),Object(d.jsx)("div",{className:"card-tools",children:Object(d.jsx)(l.b,{to:"/manageorder-create",className:"btn btn-warning float-right d-inline",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21"})})]}),Object(d.jsx)("div",{className:"card-body table-responsive p-0",children:Object(d.jsxs)("table",{className:"table table-hover text-nowrap",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"\u0e0a\u0e37\u0e48\u0e2d"}),Object(d.jsx)("th",{children:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}),Object(d.jsx)("th",{children:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}),Object(d.jsx)("th",{width:"1",className:"text-center",children:"Action"})]})}),Object(d.jsx)("tbody",{children:t.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.userModel.name}),Object(d.jsx)("td",{children:t.schedule}),Object(d.jsx)("td",{children:t.delivery}),Object(d.jsxs)("td",{children:[Object(d.jsx)(l.b,{to:{pathname:"manageorder-create/".concat(t._id)},className:"btn btn-primary mr-2",children:Object(d.jsx)("i",{className:"fas fa-edit"})}),Object(d.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return e.delOrder(t.id)},children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})]},t._id)}))})]})})]})})})})})]})}}]),a}(c.Component),M=a(27),U=a(23),F=a(30),E=[{value:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8,15",label:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8,15"},{value:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8",label:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 8"},{value:"\u0e17\u0e01\u0e38\u0e1e\u0e23\u0e30 15",label:"\u0e17\u0e38\u0e01\u0e1e\u0e23\u0e30 15"},{value:"\u0e27\u0e31\u0e19\u0e42\u0e01\u0e19",label:"\u0e27\u0e31\u0e19\u0e42\u0e01\u0e19"},{value:"\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a",label:"\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a"},{value:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c",label:"\u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"}],L=[{value:"\u0e44\u0e1b\u0e2a\u0e48\u0e07\u0e17\u0e35\u0e48\u0e1a\u0e49\u0e32\u0e19",label:"\u0e44\u0e1b\u0e2a\u0e48\u0e07\u0e17\u0e35\u0e48\u0e1a\u0e49\u0e32\u0e19"},{value:"\u0e21\u0e32\u0e40\u0e2d\u0e32\u0e17\u0e35\u0e48\u0e15\u0e25\u0e32\u0e14",label:"\u0e21\u0e32\u0e40\u0e2d\u0e32\u0e17\u0e35\u0e48\u0e15\u0e25\u0e32\u0e14"}];x.a.defaults.headers["Access-Control-Allow-Origin"]="*";var W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var c,n;return Object(b.a)(this,a),(n=t.call(this,e)).handleOrderItemChange=function(e,t){if(0===e.length){var a=Object(M.a)(n.state.orderItems);a.splice(t,1),n.setState({orderItems:a})}else{var c=Object(M.a)(n.state.orderItems);c[t]=e,n.setState({orderItems:c})}},n.addEmptyOrderItem=function(){var e=Object(M.a)(n.state.orderItems);e.push({productId:"",qty:""}),n.setState({orderItems:e})},n.saveOrder=function(e){var t;e.preventDefault();var a=n.state.id,c={userId:n.state.userId,orderItems:n.state.orderItems,totalPrice:parseInt(null!==(t=n.totalPrice.value)&&void 0!==t?t:0),delivery:n.state.delivery,schedule:n.state.schedule,remark:n.remark.value};0!==a?x.a.patch("https://safe-crag-24120.herokuapp.com"+"/api/order/".concat(a),c).then((function(e){n.props.history.push("/manageorder")})):x.a.post("https://safe-crag-24120.herokuapp.com/api/order",c).then((function(e){n.props.history.push("/manageorder")}))},n.state={id:null!==(c=e.match.params.id)&&void 0!==c?c:0,userDropdown:[],productDropdownGroup:[],productDropdown:[],productList:[],userId:"",schedule:"",delivery:"",orderItems:[{productId:"",qty:""}]},n.handleUserChange=n.handleUserChange.bind(Object(U.a)(n)),n.handleScheduleChange=n.handleScheduleChange.bind(Object(U.a)(n)),n.handleDeliveryChange=n.handleDeliveryChange.bind(Object(U.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:function(){var e=this,t=this.state.id;t&&x.a.get("https://safe-crag-24120.herokuapp.com"+"/api/order/".concat(t)).then((function(t){console.log(t),e.setState({userId:t.data.userId,orderItems:t.data.orderItems,schedule:t.data.schedule,delivery:t.data.delivery}),e.totalPrice.value=t.data.totalPrice})),x.a.get("https://safe-crag-24120.herokuapp.com/api/user?q=").then((function(t){var a=[];t.data.forEach((function(e){var t={value:e.id,label:e.name};a.push(t)})),e.setState({userDropdown:a})})),x.a.get("https://safe-crag-24120.herokuapp.com/api/product?q=").then((function(t){var a=[],c=[];t.data.sort((function(e,t){return e.name-t.name})).forEach((function(e){var t={value:e.id,label:e.name+(""!==e.subType?"("+e.subType+")":"")+" "+e.price+"\u0e3f"},n=a.find((function(t){return t.label===e.name}));n?n.options.push(t):a.push({label:e.name,options:[t]}),c.push(t)})),e.setState({productDropdownGroup:a,productDropdown:c,productList:t.data})}))}},{key:"handleUserChange",value:function(e){this.setState({userId:e.value})}},{key:"handleScheduleChange",value:function(e){this.setState({schedule:e.value})}},{key:"handleDeliveryChange",value:function(e){this.setState({delivery:e.value})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("section",{className:"content-header",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row mb-2",children:Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})})})})}),Object(d.jsx)("section",{className:"content",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"card card-outline card-primary",children:[Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("div",{className:"card-title",children:Object(d.jsx)("h3",{className:"card-title",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})})}),Object(d.jsx)("div",{className:"card-body table-responsive p-0",children:Object(d.jsxs)("form",{onSubmit:this.saveOrder,children:[Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"userId",children:"\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"}),Object(d.jsx)(F.a,{options:this.state.userDropdown,id:"userId",value:this.state.userDropdown.filter((function(t){return t.value===e.state.userId})),onChange:this.handleUserChange,isSearchable:!1})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"userId",children:"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),this.state.orderItems.map((function(t,a){return Object(d.jsx)(G,{index:a,orderItem:t,productDropdown:e.state.productDropdown,productDropdownGroup:e.state.productDropdownGroup,onOrderItemChange:e.handleOrderItemChange},a)})),Object(d.jsx)("button",{type:"button",className:"border text-center m-auto d-block px-3 btn btn-primary",onClick:this.addEmptyOrderItem,children:"+"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"totalPrice",children:"\u0e23\u0e32\u0e04\u0e32\u0e23\u0e27\u0e21"}),Object(d.jsx)("input",{type:"number",className:"form-control",id:"totalPrice",ref:function(t){return e.totalPrice=t}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"schedule",children:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}),Object(d.jsx)(F.a,{options:E,id:"schedule",onChange:this.handleScheduleChange,isSearchable:!1,value:E.filter((function(t){return t.value===e.state.schedule}))})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"delivery",children:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07"}),Object(d.jsx)(F.a,{options:L,id:"delivery",onChange:this.handleDeliveryChange,isSearchable:!1,value:L.filter((function(t){return t.value===e.state.delivery}))})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"remark",children:"\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e2b\u0e15\u0e38"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"remark",ref:function(t){return e.remark=t}})]})]}),Object(d.jsxs)("div",{className:"card-footer",children:[Object(d.jsx)(l.b,{to:"/manageorder",className:"btn btn-danger mr-2",children:"Back"}),Object(d.jsx)("div",{className:"float-right",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})]})})]})})})})})]})}}]),a}(c.Component),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var c,n,s;return Object(b.a)(this,a),(s=t.call(this,e)).state={productId:null!==(c=s.props.orderItem.productId)&&void 0!==c?c:"",qty:null!==(n=s.props.orderItem.qty)&&void 0!==n?n:0},s.onProductChange=s.onProductChange.bind(Object(U.a)(s)),s.onQtyChange=s.onQtyChange.bind(Object(U.a)(s)),s.removeOrderItem=s.removeOrderItem.bind(Object(U.a)(s)),s}return Object(h.a)(a,[{key:"onProductChange",value:function(e){this.setState({productId:e.value});var t={productId:e.value,qty:this.state.qty};this.props.onOrderItemChange(t,this.props.index)}},{key:"onQtyChange",value:function(e){var t;this.setState({qty:e.target.value});var a={productId:this.state.productId,qty:parseInt(null!==(t=e.target.value)&&void 0!==t?t:0)};this.props.onOrderItemChange(a,this.props.index)}},{key:"removeOrderItem",value:function(e){e.preventDefault(),this.props.onOrderItemChange([],this.props.index)}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-8 mb-2 pr-0",children:Object(d.jsx)(F.a,{value:this.props.productDropdown.filter((function(t){return t.value===e.props.orderItem.productId})),options:this.props.productDropdownGroup,id:"productId",onChange:this.onProductChange,isSearchable:!1})}),Object(d.jsx)("div",{className:"col-3",children:Object(d.jsx)("input",{type:"number",className:"form-control text-right",placeholder:"\u0e08\u0e33\u0e19\u0e27\u0e19",onChange:this.onQtyChange,value:this.props.orderItem.qty,pattern:"[0-9]*|\\s"})}),Object(d.jsx)("div",{className:"col-1 pl-0",children:Object(d.jsx)("button",{className:"btn btn-danger btn-block px-0",onClick:this.removeOrderItem,children:"X"})})]})})}}]),a}(c.Component),_=[{path:"/",exact:!0,component:g},{path:"/manageuser",component:function(){var e=Object(c.useState)([]),t=Object(N.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(N.a)(s,2),o=r[0],j=r[1];Object(c.useEffect)((function(){var e=o;I.database().ref("User").orderByChild("name").startAt(e).endAt(e+"\uf8ff").on("value",(function(e){var t=e.val(),a=[];for(var c in t)a.push(Object(i.a)({id:c},t[c]));n(a)}))}),[o]);var b=function(){var e=o;I.database().ref("User").orderByChild("name").startAt(e).endAt(e+"\uf8ff").on("value",(function(e){var t=e.val(),a=[];for(var c in t)a.push(Object(i.a)({id:c},t[c]));n(a)}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("section",{className:"content-header",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row mb-2",children:Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32"})})})})}),Object(d.jsx)("section",{className:"content",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"card-header",children:[Object(d.jsx)("div",{className:"card-title",children:Object(d.jsxs)("div",{className:"input-group input-group-sm",style:{width:150},children:[Object(d.jsx)("input",{type:"text",name:"queryName",className:"form-control",placeholder:"Search",onChange:function(e){j(e.target.value)},onKeyPress:function(e){13===e.charCode&&b()}}),Object(d.jsx)("div",{className:"input-group-append",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-default",onClick:function(){return b()},children:Object(d.jsx)("i",{className:"fas fa-search"})})})]})}),Object(d.jsx)("div",{className:"card-tools",children:Object(d.jsx)(l.b,{to:"/manageuser-create",className:"btn btn-warning float-right d-inline",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21"})})]}),Object(d.jsx)("div",{className:"card-body table-responsive p-0",children:Object(d.jsxs)("table",{className:"table table-hover text-nowrap",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"\u0e0a\u0e37\u0e48\u0e2d"}),Object(d.jsx)("th",{width:"1",className:"text-center",children:"Action"})]})}),Object(d.jsx)("tbody",{children:a?a.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"align-middle",children:e.name}),Object(d.jsxs)("td",{children:[Object(d.jsx)(l.b,{to:{pathname:"manageuser-create/".concat(e.id)},className:"btn btn-primary mr-2",children:Object(d.jsx)("i",{className:"fas fa-edit"})}),Object(d.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t=e.id,void C.fire({title:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e25\u0e1a"}).then((function(e){e.value&&I.database().ref("User").child(t).remove()}));var t},children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})]},e.id)})):""})]})})]})})})})})]})}},{path:"/manageuser-create/:id",component:T},{path:"/manageuser-create",component:T},{path:"/manageproduct",component:function(){var e=Object(c.useState)([]),t=Object(N.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(N.a)(s,2),o=r[0],j=r[1];Object(c.useEffect)((function(){var e=o;return I.database().ref("Product").orderByChild("name").startAt(e).endAt(e+"\uf8ff").on("value",(function(e){var t=e.val(),a=[];for(var c in t)a.push(Object(i.a)({id:c},t[c]));n(a)})),function(){j(""),n([])}}),[o]);var b=function(){var e=o;I.database().ref("Product").orderByChild("name").startAt(e).endAt(e+"\uf8ff").on("value",(function(e){var t=e.val(),a=[];for(var c in t)a.push(Object(i.a)({id:c},t[c]));n(a)}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("section",{className:"content-header",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row mb-2",children:Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("h1",{children:"\u0e23\u0e32\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"})})})})}),Object(d.jsx)("section",{className:"content",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"card-header",children:[Object(d.jsx)("div",{className:"card-title",children:Object(d.jsxs)("div",{className:"input-group input-group-sm",style:{width:150},children:[Object(d.jsx)("input",{type:"text",name:"queryName",className:"form-control",placeholder:"Search",onChange:function(e){j(e.target.value)},onKeyPress:function(e){13===e.charCode&&b()}}),Object(d.jsx)("div",{className:"input-group-append",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-default",onClick:function(){return b()},children:Object(d.jsx)("i",{className:"fas fa-search"})})})]})}),Object(d.jsx)("div",{className:"card-tools",children:Object(d.jsx)(l.b,{to:"/manageproduct-create",className:"btn btn-warning float-right d-inline",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21"})})]}),Object(d.jsx)("div",{className:"card-body table-responsive p-0",children:Object(d.jsxs)("table",{className:"table table-hover text-nowrap",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"}),Object(d.jsx)("th",{children:"\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17"}),Object(d.jsx)("th",{children:"\u0e23\u0e32\u0e04\u0e32"}),Object(d.jsx)("th",{children:"\u0e23\u0e39\u0e1b"}),Object(d.jsx)("th",{width:"1",className:"text-center",children:"Action"})]})}),Object(d.jsx)("tbody",{children:a?a.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"align-middle",children:e.name}),Object(d.jsx)("td",{className:"align-middle",children:e.subType}),Object(d.jsx)("td",{className:"align-middle",children:e.price}),Object(d.jsx)("td",{className:"align-middle",children:Object(d.jsx)("div",{className:"text-center position-relative",style:{width:"60px",height:"60px",border:"1px dashed rgb(182 186 189)",cursor:"pointer"},children:Object(d.jsx)("img",{src:e.thumbnail,className:"w-100 position-absolute",style:{left:"50%",top:"50%",transform:"translate(-50%, -50%)"},alt:""})})}),Object(d.jsxs)("td",{className:"align-middle",children:[Object(d.jsx)(l.b,{to:{pathname:"manageproduct-create/".concat(e.id)},className:"btn btn-primary mr-2",children:Object(d.jsx)("i",{className:"fas fa-edit"})}),Object(d.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t=e.id,void C.fire({title:"\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e01\u0e32\u0e23\u0e25\u0e1a"}).then((function(e){e.value&&I.database().ref("Product").child(t).remove()}));var t},children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})]},e.id)})):""})]})})]})})})})})]})}},{path:"/manageproduct-create/:id",component:B},{path:"/manageproduct-create",component:B},{path:"/manageorder",component:A},{path:"/manageorder-create/:id",component:W},{path:"/manageorder-create",component:W}];function Q(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)(l.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(O,{}),Object(d.jsx)(o.c,{children:_.map((function(e,t){return Object(d.jsx)(K,Object(i.a)({},e),t)}))})]}),Object(d.jsx)(p,{})]})}function K(e){return Object(d.jsx)(o.a,{path:e.path,render:function(t){return Object(d.jsx)(e.component,Object(i.a)(Object(i.a)({},t),{},{routes:e.routes}))}})}var z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var J=a(57),X=a(58),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e},$=Object(J.a)(Y),H=function(){return Object(d.jsx)(l.a,{children:Object(d.jsx)(X.a,{store:$,children:Object(d.jsx)(Q,{})})})};r.a.render(Object(d.jsx)(H,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");z?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):R(e)}))}}()},63:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.65a3222c.chunk.js.map