(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{32:function(e,t,a){e.exports=a(63)},37:function(e,t,a){},60:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),s=a(10),o=a(11),m=a(13),i=a(14),u=(a(37),a(26)),d=a.n(u),h=(a(42),a(8)),E=a(27),p=a.n(E),f=a(64),v=a(65),b=a(68),S=a(66),g=a(67),N=a(28),k=a(30),y=(a(60),a(69)),C=a(70),w=[{value:"Virendra",label:"Virendra"},{value:"Ankit",label:"Ankit"},{value:"Deepu",label:"Deepu"}],x=[{value:"Singh",label:"Singh"},{value:"Vats",label:"Vats"},{value:"Thakur",label:"Thakur"}],j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSearchInput=function(e){e.preventDefault(),n.setState({search:e.target.value}),console.log(e.target.value)},n.onFormSumit=function(e){e.preventDefault();var t=Object(k.a)(n.state.items);n.state.id&&n.state.firstname&&""!==n.state.lastname?(t.push({id:n.state.id,firstname:n.state.firstname,lastname:n.state.lastname}),n.setState({items:t,id:n.state.id+1,firstname:"",lastname:""})):alert("Please Fill All ")},n.onChangeInput=function(e){n.setState(Object(N.a)({},e.target.name,e.target.value))},n.state={id:3,firstname:"",lastname:"",items:[],search:""},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",null,l.a.createElement("input",{type:"text",className:"form-control w-50 text-dark",placeholder:"Search here....",name:"search",value:this.state.search,onChange:this.onSearchInput})),l.a.createElement(f.a,{className:"mb-3 mt-3"},l.a.createElement(v.a,{md:3},l.a.createElement(S.a,null,l.a.createElement(g.a,null,"Firstname"),l.a.createElement(h.a,{options:w,classNamePrefix:"Select",placeholder:"Select ...."}))),l.a.createElement(v.a,{md:3},l.a.createElement(S.a,null,l.a.createElement(g.a,null,"Lastname"),l.a.createElement(h.a,{options:x,classNamePrefix:"Select",placeholder:"Select ...."})))),l.a.createElement(b.a,{onSubmit:this.onFormSumit},l.a.createElement("div",{className:"row mt-2 mb-2"},l.a.createElement("div",{className:"col"},l.a.createElement("input",{type:"text",className:"form-control text-dark",placeholder:"Enter First Name",name:"firstname",value:this.state.firstname,onChange:this.onChangeInput})),l.a.createElement("div",{className:"col"},l.a.createElement("input",{type:"text",className:"form-control text-dark ",placeholder:"Enter Last Name",name:"lastname",value:this.state.lastname,onChange:this.onChangeInput})),l.a.createElement("div",{className:"col text-left"},l.a.createElement(y.a,null,"Click Here to Add in Table")))),l.a.createElement(C.a,{bordered:!0,className:" text-center tabless"},l.a.createElement("thead",{color:"primary",style:{backgroundColor:"darkcyan",color:"floralwhite"},className:""},l.a.createElement("tr",null,l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1"),l.a.createElement("td",null,"Virendra "),l.a.createElement("td",null,"Singh")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2"),l.a.createElement("td",null,"Ankit"),l.a.createElement("td",null,"Vats")),this.state.items.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("th",{scope:"row"},e.id),l.a.createElement("td",null,e.firstname),l.a.createElement("td",null,e.lastname))})))))}}]),a}(l.a.Component),O=[{value:"title",label:"Title"}],I=[{value:"body",label:"Content"}],F=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onFormSumit=function(e){e.preventDefault()},e.onChangeInput=function(t){e.setState({searchString:t.target.value})},e.state={posts:[],searchString:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){e.setState({posts:t.data})}))}},{key:"render",value:function(){var e=this.state,t=e.searchString,a=e.posts,n=t.trim().toLowerCase();n.length>0&&(a=a.filter((function(e){return e.title.toLowerCase().match(n)||e.body.toLowerCase().match(n)})));return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement("div",{className:"container-fluid react-classes"},l.a.createElement(f.a,null,l.a.createElement(v.a,{md:3},l.a.createElement(b.a,{onSubmit:this.onFormSumit},l.a.createElement("input",{type:"text",className:"form-control  mt-3 mb-4 text-dark",value:t,placeholder:"Search Here",onChange:this.onChangeInput})))),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(v.a,{md:3},l.a.createElement(S.a,null,l.a.createElement(g.a,null,"Title"),l.a.createElement(h.a,{options:O,value:O.value,classNamePrefix:"Select",placeholder:"Select ...."}))),l.a.createElement(v.a,{md:3},l.a.createElement(S.a,null,l.a.createElement(g.a,null,"Content"),l.a.createElement(h.a,{options:I,classNamePrefix:"Select",placeholder:"Select ...."})))),l.a.createElement(d.a,{className:"",columns:[{Header:"Id",accessor:"id",width:100,minWidth:100,maxWidth:100,filterable:!1},{Header:"Title",accessor:"title",sortable:!1},{Header:"Content",accessor:"body",sortable:!1}],data:a,defaultPageSize:10,pageSizeOptions:[10,20],noDataText:"No Data Found"})))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.9e682175.chunk.js.map