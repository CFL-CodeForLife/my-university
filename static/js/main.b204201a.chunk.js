(this["webpackJsonpmust-react"]=this["webpackJsonpmust-react"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(19),r=n.n(a),i=(n(26),n(15)),o=n(2),j=(n.p,n(27),n(16)),l=n.n(j),h=n(20),u=n(9),d=n(10),b=n(12),p=n(11),O=(n(29),n(0)),f=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"CourseCardLink one-link hero-btn gray-btn",children:Object(O.jsxs)("a",{href:this.props.contant.url,target:"_blank",children:[Object(O.jsx)("i",{className:"fa fa-".concat(this.props.contant.platform)}),this.props.contant.platform," ",null===this.props.contant.note||void 0===this.props.contant.note||""===this.props.contant.note?"":"("+this.props.contant.note+")"]})})}}]),n}(s.a.Component),x=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return 0===this.props.contant.length?Object(O.jsx)("div",{className:"CourseCardLinks",children:Object(O.jsx)("p",{children:"No data available."})}):Object(O.jsx)("div",{className:"CourseCardLinks",children:this.props.contant.map((function(e,t){return Object(O.jsx)(f,{contant:e},t)}))})}}]),n}(s.a.Component),m=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return!0===this.props.contant.hidden?"":Object(O.jsxs)("div",{className:"CourseCard",children:[Object(O.jsxs)("h3",{children:[this.props.contant.code,void 0===this.props.contant.name?"":": "+this.props.contant.name]}),Object(O.jsx)(x,{contant:this.props.contant.url})]})}}]),n}(s.a.Component),v=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,data:null},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://must-server.herokuapp.com/api/MUST/IT/courses-list?filtered=true");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,this.setState({data:t.links,loading:!1});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"courses",children:[Object(O.jsx)("h1",{children:"Course Groups Links"}),Object(O.jsx)("p",{children:" Courses & community groups for Misr University for Science and Technology. "}),Object(O.jsx)("div",{className:"courses-container container-3",children:this.state.loading?Object(O.jsx)("div",{children:"Loading..."}):this.state.data.map((function(e){return Object(O.jsx)(m,{contant:e},e.code)}))})]})}}]),n}(s.a.Component);var k=function(){return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("section",{className:"min-header",children:Object(O.jsxs)("nav",{children:[Object(O.jsx)("a",{href:"index.html",children:Object(O.jsx)("img",{src:"https://cfl.ahmedkira.com/MUST/image/logo.png",alt:""})}),Object(O.jsxs)("div",{className:"nav-links",id:"navLinks",children:[Object(O.jsx)("i",{className:"fa fa-times",onclick:"hideMenu()"}),Object(O.jsx)("i",{className:"fad fa-skull fa-rotate-90"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#footer",children:"About Us"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Courses"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://www.must.edu.eg/",children:"University"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"../useful-links/index.html",children:"Useful Links"})})]})]}),Object(O.jsx)("i",{className:"fa fa-moon-o",id:"theme-darkmode",onclick:"switchColorTheme()"}),Object(O.jsx)("i",{className:"fa fa-bars",onclick:"showMenu()"})]})}),Object(O.jsx)("script",{src:"https://cfl.ahmedkira.com/MUST/js/header/index.js"})]})};var g=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(k,{}),Object(O.jsx)(i.a,{children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/test",children:Object(O.jsx)(v,{})}),Object(O.jsx)(o.a,{path:"/Courses",children:Object(O.jsx)(v,{})})]})})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),C()}},[[39,1,2]]]);
//# sourceMappingURL=main.b204201a.chunk.js.map