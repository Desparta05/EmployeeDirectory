(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(50)},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l);t(23),t(24);var s=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)},i=t(3),o=t(4),d=t(6),m=t(5),u=(t(25),function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Click on carrots to filter by heading or use the search box to narrow your results."))}}]),t}(n.Component)),h=t(2);t(26),t(27);var f=function(e){var a=e.users;return r.a.createElement("tbody",null,void 0!==a[0]&&void 0!==a[0].name?a.map(function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,c=e.email,s=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+t.first+" "+t.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var a=e.split("-"),t=a[0];return[a[1],a[2].split("T")[0],t].join("-")}(s.date)))}):r.a.createElement(r.a.Fragment,null))};t(28);var v=function(e){var a=e.headings,t=e.users,n=e.handleSort;return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map(function(e){var a=e.name,t=e.width;return console.log(a),r.a.createElement("th",{className:"col",key:a,style:{width:t},onClick:function(){n(a.toLowerCase())}},a,r.a.createElement("span",{className:"pointer"}))}))),r.a.createElement(f,{users:t})))};t(29);var E=function(e){var a=e.handleSearchChange;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},r.a.createElement("div",{className:"navbar-collapse row",id:"navbarNav"},r.a.createElement(N,{handleSearchChange:a})))},g=t(17),p=t.n(g),b={getUsers:function(){return p.a.get("https://randomuser.me/api/?results=200&nat=us")}},w=(t(47),function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],e.handleSort=function(a){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var t=e.state.filteredUsers.sort(function(t,n){return"ascend"===e.state.order?void 0===t[a]?1:void 0===n[a]?-1:"name"===a?t[a].first.localeCompare(n[a].first):t[a]-n[a]:void 0===t[a]?1:void 0===n[a]?-1:"name"===a?n[a].first.localeCompare(t[a].first):n[a]-t[a]});e.setState({filteredUsers:t})},e.handleSearchChange=function(a){console.log(a.target.value);var t=a.target.value,n=e.state.users.filter(function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(t.toLowerCase())});e.setState({filteredUsers:n})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.getUsers().then(function(a){e.setState({users:a.data.results,filteredUsers:a.data.results})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{handleSearchChange:this.handleSearchChange}),r.a.createElement("div",{className:"data-area"},r.a.createElement(v,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})))}}]),t}(n.Component));var N=function(){var e=Object(n.useState)(""),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:"searchbox"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return function(e){var a=e.target.value;l(a),t||l(w)}(e)}})))};var O=function(){var e=Object(n.useState)([{name:"Picture",width:"width:10%"},{name:"Name",width:"width:10%"},{name:"Phone",width:"width:20%"},{name:"Email",width:"width:20%"},{name:"DOB",width:"width:20%"}]),a=Object(h.a)(e,2),t=a[0],l=(a[1],Object(n.useState)([])),c=Object(h.a)(l,2),s=c[0],i=c[1];return Object(n.useEffect)(function(){b.getUsers().then(function(e){i(e.data.results)})},[]),r.a.createElement(r.a.Fragment,null,console.log(t),r.a.createElement(N,null),r.a.createElement(v,{headings:t,users:s,handleSort:function(){}}))};t(48);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null,r.a.createElement(u,null),r.a.createElement(O,null),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(49);c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.d5659edb.chunk.js.map