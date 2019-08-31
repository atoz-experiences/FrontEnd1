(window.webpackJsonpatoz=window.webpackJsonpatoz||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=(a(78),a(32)),l=a(33),s=a(41),p=a(34),u=a(42),m=a(28),d=a.n(m),h=a(22),E=a(19);a(96);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach(function(t){Object(E.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={experience:{title:"",date:"",location:"",description:"",price:""}},a.changeHandler=function(e){e.persist();var t=e.target.value;"age"===e.target.name&&(t=parseInt(t,10)),a.setState(function(a){return{experience:g({},a.experience,Object(E.a)({},e.target.name,t))}})},a.handleSubmit=function(e){e.preventDefault(),a.props.addExperience(a.state.experience),a.setState({experience:{title:"",date:"",location:"",description:"",price:""}})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props,"props from form"),r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"cardContainer"},r.a.createElement("input",{type:"text",name:"title",onChange:this.changeHandler,placeholder:"Title",value:this.state.experience.title}),r.a.createElement("input",{type:"number",name:"date",onChange:this.changeHandler,placeholder:"Date",value:this.state.experience.date}),r.a.createElement("input",{type:"text",name:"location",onChange:this.changeHandler,placeholder:"Location",value:this.state.experience.location}),r.a.createElement("input",{type:"text",name:"description",onChange:this.changeHandler,placeholder:"Description",value:this.state.experience.description}),r.a.createElement("input",{type:"number",name:"price",onChange:this.changeHandler,placeholder:"Price",value:this.state.experience.price}),r.a.createElement("button",null,"Add New Experiencet")))}}]),t}(r.a.Component),x=function(e){return console.log(e,"props from experiences"),r.a.createElement("div",null,e.experiences.map(function(e){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Title"),e.title))}))},y=a(61),v=a.n(y),O=(a(97),a(8));function j(e){return r.a.createElement("div",{className:"type-card"},r.a.createElement("div",{className:"type-card-img-ctn"},r.a.createElement("img",{className:"type-card-img",src:e.src,alt:e.type})),r.a.createElement("div",{className:"type-card-txt"},r.a.createElement("div",{className:"type-card-title"},e.type),r.a.createElement("div",{className:"type-card-description"},e.des)))}var k=function(e){return r.a.createElement("div",{className:"type-link-ctn-ctn"},r.a.createElement("div",{className:"type-link-ctn"},r.a.createElement(O.b,{className:"type-link-a",to:"/adventures"},r.a.createElement(j,{type:"Adventure",src:"https://a0.muscache.com/im/pictures/b5ca14ba-87c5-4c44-8dbc-35fe514f0746.jpg?aki_policy=x_large",des:"Hosted journeys to extraordinary places\u2014all you have to do is show up."})),r.a.createElement(O.b,{className:"type-link-a",to:"/food-tours"},r.a.createElement(j,{type:"Food Tours",src:"https://a0.muscache.com/im/pictures/9ae4202f-3ab6-4684-8fa8-59af00320dba.jpg?aki_policy=x_large",des:"Sink your teeth into cities around the world with tours led by culinary experts."})),r.a.createElement(O.b,{className:"type-link-a",to:"/cooking"},r.a.createElement(j,{type:"Cooking",src:"https://a0.muscache.com/im/pictures/52aa45c1-d168-41d5-9149-445c8787358f.jpg?aki_policy=x_large",des:"Sample local flavors and take home new skills with hands-on cooking classes by local experts."})),r.a.createElement(O.b,{className:"type-link-a",to:"/surfing"},r.a.createElement(j,{type:"Surfing",src:"https://a0.muscache.com/im/pictures/bbaee069-8069-459d-aebd-f527b9ed72e8.jpg?aki_policy=x_large",des:"Catch a wave with experiences hand-picked by the World Surf League and hosted by a pro."})),r.a.createElement(O.b,{className:"type-link-a",to:"/concerts"},r.a.createElement(j,{type:"Concerts",src:"https://a0.muscache.com/im/pictures/4e8700d7-49f3-4165-b685-0c59524a1186.jpg?aki_policy=x_large",des:"Feel the rhythm with intimate shows in unique spaces and listen to live music like never before."})),r.a.createElement(O.b,{className:"type-link-a",to:"/social-impact"},r.a.createElement(j,{type:"Social Impact",src:"https://a0.muscache.com/im/pictures/90fec8f3-d925-4dcc-8688-3f1cebc8addd.jpg?aki_policy=x_large",des:"Try something new while supporting a cause\u2014100% of what you pay goes to a nonprofit."}))),r.a.createElement("div",{className:"experiences-title"},e.title))},w=a(31),N=a(133),S=a(134),C=a(137),z=a(135),A=a(138),_=a(136),B=Object(N.a)({card:{minWidth:275,maxWidth:275,minHeight:190,marginTop:32,boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 8px",borderRadius:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},button:{textAlign:"left",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",color:"#FF4081"},fiveTitle:{fontSize:"1.5rem",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:500,lineHeight:1.33,letterSpacing:"0em"}}),D=function(e){var t=B();return r.a.createElement(S.a,{className:t.card},r.a.createElement(z.a,null,r.a.createElement(_.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.ex.location),r.a.createElement(_.a,{className:t.fiveTitle,component:"h2"},e.ex.title),r.a.createElement(_.a,{className:t.pos,color:"textSecondary"},e.ex.price),r.a.createElement(_.a,{variant:"body2",component:"p"},e.ex.description)),r.a.createElement(C.a,null,r.a.createElement(A.a,{className:t.button,size:"small"},"VIEW MORE")))};var I=function(){var e=Object(n.useState)(),t=Object(w.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){d.a.get("https://atoz-backend.herokuapp.com/api/experiences").then(function(e){c(e.data.experiences)}).catch(function(e){return console.log("Axios Experience GET Error:",e)})},[]),null!=a||void 0!=a?(console.log("Experiences Array: ",a),r.a.createElement("div",null,r.a.createElement("div",{className:"experiences-ctn"},a.map(function(e){return r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(D,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/adventures",render:function(t){return r.a.createElement(D,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/food-tours",render:function(t){return r.a.createElement(D,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/cooking",render:function(t){return r.a.createElement(D,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/surfing",render:function(t){return r.a.createElement(D,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/concerts",render:function(t){return r.a.createElement(D,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/social-impact",render:function(t){return r.a.createElement(D,Object.assign({},t,{ex:e}))}}))})))):r.a.createElement("div",null,r.a.createElement("div",{className:"loading"},"Loading..."))},P=function(e){return r.a.createElement("div",{className:"home-ctn"},r.a.createElement(k,{title:e.title}),r.a.createElement(I,null))};var T=function(){return r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(P,Object.assign({},e,{title:"All Experiences"}))}}),r.a.createElement(h.a,{exact:!0,path:"/adventures",render:function(e){return r.a.createElement(P,Object.assign({},e,{title:"Adventures"}))}}),r.a.createElement(h.a,{exact:!0,path:"/food-tours",render:function(e){return r.a.createElement(P,Object.assign({},e,{title:"Food Tours"}))}}),r.a.createElement(h.a,{exact:!0,path:"/cooking",render:function(e){return r.a.createElement(P,Object.assign({},e,{title:"Cooking"}))}}),r.a.createElement(h.a,{exact:!0,path:"/surfing",render:function(e){return r.a.createElement(P,Object.assign({},e,{title:"Surfing"}))}}),r.a.createElement(h.a,{exact:!0,path:"/concerts",render:function(e){return r.a.createElement(P,Object.assign({},e,{title:"Concerts"}))}}),r.a.createElement(h.a,{exact:!0,path:"/social-impact",render:function(e){return r.a.createElement(P,Object.assign({},e,{title:"Social Impact"}))}}))},H=a(11),F=a(140),R=a(141),M=a(139),W=a(143),L=a(144),U=a(142),G=a(63),J=a.n(G),q=a(64),V=a.n(q),Z=a(48),$=a.n(Z),K=a(46),Q=a.n(K),X=a(47),Y=a.n(X),ee=a(65),te=a.n(ee),ae=Object(N.a)(function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(E.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(E.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(H.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(H.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(E.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(E.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(E.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}});function ne(){var e=ae(),t=r.a.useState(null),a=Object(w.a)(t,2),n=a[0],c=a[1],i=r.a.useState(null),o=Object(w.a)(i,2),l=o[0],s=o[1],p=Boolean(n),u=Boolean(l);function m(e){c(e.currentTarget)}function d(){s(null)}function h(){c(null),d()}var E="primary-search-account-menu",f=r.a.createElement(U.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:E,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:h},r.a.createElement(L.a,{onClick:h},"Profile"),r.a.createElement(L.a,{onClick:h},"My account")),g=r.a.createElement(U.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:d},r.a.createElement(O.a,null,r.a.createElement(O.b,{to:"/form"},r.a.createElement(L.a,null,r.a.createElement(M.a,{className:"iconButton",color:"inherit"},r.a.createElement(Q.a,null)),r.a.createElement("p",null,"Add Experience")))),r.a.createElement(O.a,null,r.a.createElement(O.b,{to:"/experiences"},r.a.createElement(L.a,null,r.a.createElement(M.a,{className:"iconButton",color:"inherit"},r.a.createElement(Y.a,null)),r.a.createElement("p",null,"My Experiences")))),r.a.createElement(L.a,{onClick:m},r.a.createElement(M.a,{className:"iconButton","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement($.a,null)),r.a.createElement("p",null,"Account")));return r.a.createElement("div",{className:e.grow},r.a.createElement(F.a,{position:"static"},r.a.createElement(R.a,null,r.a.createElement(M.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(J.a,null)),r.a.createElement(_.a,{className:e.title,variant:"h6",noWrap:!0},"AtoZ Experiences"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(V.a,null)),r.a.createElement(W.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(O.a,null,r.a.createElement(O.b,{to:"/form"},r.a.createElement(M.a,{color:"inherit"},r.a.createElement(Q.a,null)))),r.a.createElement(O.a,null,r.a.createElement(O.b,{to:"/experiences"},r.a.createElement(M.a,{color:"inherit"},r.a.createElement(Y.a,null)))),r.a.createElement(M.a,{edge:"end","aria-label":"account of current user","aria-controls":E,"aria-haspopup":"true",onClick:m,color:"inherit"},r.a.createElement($.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(M.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit"},r.a.createElement(te.a,null))))),g,f)}var re=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).addExperience=function(t){d.a.post("https://atoz-backend.herokuapp.com/api/experiences",t).then(function(t){console.log(t),e.setState({experiences:t.data}),e.props.history.push("/experiences")}).catch(function(e){console.log(e)})},e.setUpdateForm=function(t,a){t.preventDefault(),e.setState({whatever:a}),e.props.history.push("/update-form")},e.updateExperience=function(t){d.a.put("https://atoz-backend.herokuapp.com/api/experiences/".concat(t.id),t).then(function(t){console.log(t),e.setState({experiences:t.data}),e.props.history.push("/experiences")}).catch(function(e){console.log(e)})},e.state={experiences:[],whatever:null},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://atoz-backend.herokuapp.com/api/experiences").then(function(t){return e.setState({experiences:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(ne,null),r.a.createElement(h.a,{exact:!0,path:"/experiences",render:function(t){return r.a.createElement(x,Object.assign({},t,{experiences:e.state.experiences,setUpdateForm:e.setUpdateForm}))}}),r.a.createElement(T,null),r.a.createElement(h.a,{path:"/form",render:function(t){return r.a.createElement(b,Object.assign({},t,{addExperience:e.addExperience}))}}),r.a.createElement(h.a,{path:"/update-form",render:function(t){return r.a.createElement(v.a,Object.assign({},t,{activeExperience:e.state.whatever,updateExperience:e.updateExperience}))}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O.a,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t){},73:function(e,t,a){e.exports=a(104)},78:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.940754c8.chunk.js.map