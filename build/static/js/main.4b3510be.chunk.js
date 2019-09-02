(window.webpackJsonpatoz=window.webpackJsonpatoz||[]).push([[0],{106:function(e,t,a){e.exports=a(139)},111:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=(a(111),a(40)),l=a(24),s=a(49),m=a(50),p=a(57),u=a(25),d=a.n(u),h=a(33),E=a(8);a(129);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach(function(t){Object(E.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={experience:{title:"",date:"",location:"",description:"",price:""}},a.changeHandler=function(e){e.persist();var t=e.target.value;"age"===e.target.name&&(t=parseInt(t,10)),a.setState(function(a){return{experience:g({},a.experience,Object(E.a)({},e.target.name,t))}})},a.handleSubmit=function(e){e.preventDefault(),a.props.addExperience(a.state.experience),a.setState({experience:{title:"",date:"",location:"",description:"",price:""}})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props,"props from form"),r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"cardContainer"},r.a.createElement("input",{type:"text",name:"title",onChange:this.changeHandler,placeholder:"Title",value:this.state.experience.title}),r.a.createElement("input",{type:"number",name:"date",onChange:this.changeHandler,placeholder:"Date",value:this.state.experience.date}),r.a.createElement("input",{type:"text",name:"location",onChange:this.changeHandler,placeholder:"Location",value:this.state.experience.location}),r.a.createElement("input",{type:"text",name:"description",onChange:this.changeHandler,placeholder:"Description",value:this.state.experience.description}),r.a.createElement("input",{type:"number",name:"price",onChange:this.changeHandler,placeholder:"Price",value:this.state.experience.price}),r.a.createElement("button",null,"Add New Experience")))}}]),t}(r.a.Component),v=function(e){return console.log(e,"props from experiences"),r.a.createElement("div",null,e.experiences.map(function(e){return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Title"),e.title))}))},x=a(86),y=a.n(x),O=(a(130),a(9));function j(e){return r.a.createElement("div",{className:"type-card"},r.a.createElement("div",{className:"type-card-img-ctn"},r.a.createElement("img",{className:"type-card-img",src:e.src,alt:e.type})),r.a.createElement("div",{className:"type-card-txt"},r.a.createElement("div",{className:"type-card-title"},e.type),r.a.createElement("div",{className:"type-card-description"},e.des)))}var w=function(e){return r.a.createElement("div",{className:"type-link-ctn-ctn"},r.a.createElement("div",{className:"type-link-ctn"},r.a.createElement(O.b,{className:"type-link-a",to:"/home/adventures"},r.a.createElement(j,{type:"Adventure",src:"https://a0.muscache.com/im/pictures/b5ca14ba-87c5-4c44-8dbc-35fe514f0746.jpg?aki_policy=x_large",des:"Hosted journeys to extraordinary places\u2014all you have to do is show up."})),r.a.createElement(O.b,{className:"type-link-a",to:"/home/food-tours"},r.a.createElement(j,{type:"Food Tours",src:"https://a0.muscache.com/im/pictures/9ae4202f-3ab6-4684-8fa8-59af00320dba.jpg?aki_policy=x_large",des:"Sink your teeth into cities around the world with tours led by culinary experts."})),r.a.createElement(O.b,{className:"type-link-a",to:"/home/cooking"},r.a.createElement(j,{type:"Cooking",src:"https://a0.muscache.com/im/pictures/52aa45c1-d168-41d5-9149-445c8787358f.jpg?aki_policy=x_large",des:"Sample local flavors and take home new skills with hands-on cooking classes by local experts."})),r.a.createElement(O.b,{className:"type-link-a",to:"/home/surfing"},r.a.createElement(j,{type:"Surfing",src:"https://a0.muscache.com/im/pictures/bbaee069-8069-459d-aebd-f527b9ed72e8.jpg?aki_policy=x_large",des:"Catch a wave with experiences hand-picked by the World Surf League and hosted by a pro."})),r.a.createElement(O.b,{className:"type-link-a",to:"/home/concerts"},r.a.createElement(j,{type:"Concerts",src:"https://a0.muscache.com/im/pictures/4e8700d7-49f3-4165-b685-0c59524a1186.jpg?aki_policy=x_large",des:"Feel the rhythm with intimate shows in unique spaces and listen to live music like never before."})),r.a.createElement(O.b,{className:"type-link-a",to:"/home/social-impact"},r.a.createElement(j,{type:"Social Impact",src:"https://a0.muscache.com/im/pictures/90fec8f3-d925-4dcc-8688-3f1cebc8addd.jpg?aki_policy=x_large",des:"Try something new while supporting a cause\u2014100% of what you pay goes to a nonprofit."}))),r.a.createElement("div",{className:"experiences-title"},e.title))},k=a(28),N=a(87),S=a(178),C=a(180),P=a(179),D=a(181),W=a(140),z=Object(N.a)({card:{minWidth:275,maxWidth:275,minHeight:190,marginTop:32,boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 8px",borderRadius:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},button:{textAlign:"left",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",color:"#FF4081"},fiveTitle:{fontSize:"1.5rem",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:500,lineHeight:1.33,letterSpacing:"0em"}}),A=function(e){var t=z();return r.a.createElement(S.a,{className:t.card},r.a.createElement(P.a,null,r.a.createElement(W.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.ex.location),r.a.createElement(W.a,{className:t.fiveTitle,component:"h2"},e.ex.title),r.a.createElement(W.a,{className:t.pos,color:"textSecondary"},e.ex.price),r.a.createElement(W.a,{variant:"body2",component:"p"},e.ex.description)),r.a.createElement(C.a,null,r.a.createElement(D.a,{className:t.button,size:"small"},"VIEW MORE")))};var I=function(){var e=Object(n.useState)(),t=Object(k.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){d.a.get("https://atoz-backend.herokuapp.com/api/experiences").then(function(e){c(e.data.experiences)}).catch(function(e){return console.log("Axios Experience GET Error:",e)})},[]),null!=a||void 0!=a?(console.log("Experiences Array: ",a),r.a.createElement("div",null,r.a.createElement("div",{className:"experiences-ctn"},a.map(function(e){return r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/home",render:function(t){return r.a.createElement(A,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/adventures",render:function(t){return r.a.createElement(A,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/food-tours",render:function(t){return r.a.createElement(A,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/cooking",render:function(t){return r.a.createElement(A,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/surfing",render:function(t){return r.a.createElement(A,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/concerts",render:function(t){return r.a.createElement(A,Object.assign({},t,{ex:e}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/social-impact",render:function(t){return r.a.createElement(A,Object.assign({},t,{ex:e}))}}))})))):r.a.createElement("div",null,r.a.createElement("div",{className:"loading"},"Loading..."))},F=function(e){return r.a.createElement("div",{className:"home-ctn"},r.a.createElement(w,{title:e.title}),r.a.createElement(I,null))};var T=function(){return r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/home",render:function(e){return r.a.createElement(F,Object.assign({},e,{title:"All Experiences"}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/adventures",render:function(e){return r.a.createElement(F,Object.assign({},e,{title:"Adventures"}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/food-tours",render:function(e){return r.a.createElement(F,Object.assign({},e,{title:"Food Tours"}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/cooking",render:function(e){return r.a.createElement(F,Object.assign({},e,{title:"Cooking"}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/surfing",render:function(e){return r.a.createElement(F,Object.assign({},e,{title:"Surfing"}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/concerts",render:function(e){return r.a.createElement(F,Object.assign({},e,{title:"Concerts"}))}}),r.a.createElement(h.a,{exact:!0,path:"/home/social-impact",render:function(e){return r.a.createElement(F,Object.assign({},e,{title:"Social Impact"}))}}))},_=a(12),B=a(182),R=a(183),H=a(141),q=a(143),M=a(194),L=a(94),U=a(88),V=a.n(U),G=a(89),J=a.n(G),Z=a(69),$=a.n(Z),K=a(67),Q=a.n(K),X=a(68),Y=a.n(X),ee=a(90),te=a.n(ee),ae=Object(N.a)(function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(E.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(E.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(_.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(_.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(E.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(E.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(E.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}});function ne(){var e=ae(),t=r.a.useState(null),a=Object(k.a)(t,2),n=a[0],c=a[1],o=r.a.useState(null),i=Object(k.a)(o,2),l=i[0],s=i[1],m=Boolean(n),p=Boolean(l);function u(e){c(e.currentTarget)}function d(){s(null)}function h(){c(null),d()}var E="primary-search-account-menu",f=r.a.createElement(L.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:E,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:h},r.a.createElement(M.a,{onClick:h},"Profile"),r.a.createElement(M.a,{onClick:h},"My account")),g=r.a.createElement(L.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:d},r.a.createElement(O.a,null,r.a.createElement(O.b,{to:"/home/form"},r.a.createElement(M.a,null,r.a.createElement(H.a,{className:"iconButton",color:"inherit"},r.a.createElement(Q.a,null)),r.a.createElement("p",null,"Add Experience")))),r.a.createElement(O.a,null,r.a.createElement(O.b,{to:"/home/experiences"},r.a.createElement(M.a,null,r.a.createElement(H.a,{className:"iconButton",color:"inherit"},r.a.createElement(Y.a,null)),r.a.createElement("p",null,"My Experiences")))),r.a.createElement(M.a,{onClick:u},r.a.createElement(H.a,{className:"iconButton","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement($.a,null)),r.a.createElement("p",null,"Account")));return r.a.createElement("div",{className:e.grow},r.a.createElement(B.a,{position:"static"},r.a.createElement(R.a,null,r.a.createElement(H.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(V.a,null)),r.a.createElement(W.a,{className:e.title,variant:"h6",noWrap:!0},"AtoZ Experiences"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(J.a,null)),r.a.createElement(q.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(O.a,null,r.a.createElement(O.b,{to:"/home/form"},r.a.createElement(H.a,{color:"inherit"},r.a.createElement(Q.a,null)))),r.a.createElement(O.a,null,r.a.createElement(O.b,{to:"/home/experiences"},r.a.createElement(H.a,{color:"inherit"},r.a.createElement(Y.a,null)))),r.a.createElement(H.a,{edge:"end","aria-label":"account of current user","aria-controls":E,"aria-haspopup":"true",onClick:u,color:"inherit"},r.a.createElement($.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(H.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit"},r.a.createElement(te.a,null))))),g,f)}var re=a(185),ce=a(192),oe=a(189),ie=a(193),le=a(95),se=a(184);function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var pe=Object(N.a)(function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}});function ue(){var e=pe(),t=Object(n.useState)({email:"",password:""}),a=Object(k.a)(t,2),c=a[0],o=a[1],i=function(e){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(a,!0).forEach(function(t){Object(E.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},c,Object(E.a)({},e.target.name,e.target.value)))};return r.a.createElement(se.a,{container:!0,component:"main",className:e.root},r.a.createElement(re.a,null),r.a.createElement(se.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(se.a,{item:!0,xs:12,sm:8,md:5,component:le.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(W.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,onSubmit:function(e){return function(e,t){var a=t.resetForm,n=(t.setErrors,t.setSubmitting);e.preventDefault(),console.log(c.email),console.log(c.password),d.a.post("https://atoz-backend.herokuapp.com/api/login",{message:"Welcome!"},{username:c.email,password:c.password}).then(function(e){console.log("axios result: ",e),a(),n(!1)}).catch(function(e){console.log("axios error: ",e),n(!1)})}(e)}},r.a.createElement(ce.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return i(e)}}),r.a.createElement(ce.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return i(e)}}),r.a.createElement(oe.a,{control:r.a.createElement(ie.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onChange:i},"Sign In"),r.a.createElement(se.a,{container:!0},r.a.createElement(se.a,{item:!0,xs:!0},r.a.createElement(O.b,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(se.a,{item:!0},r.a.createElement(O.b,{to:"/sign-up",variant:"body2"},"Don't have an account? Sign Up")))))))}var de=a(23),he=a(190),Ee=a(22),fe=a(45),ge=Object(N.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}});var be=Object(Ee.c)({mapPropsToValues:function(e){return{firstName:e.firstName||"",lastName:e.lastName||"",email:e.email||"",password:e.password||""}},handleSubmit:function(e,t){var a=t.setStatus,n=t.resetForm;d.a.post("https://atoz-backend.herokuapp.com/api/register",e).then(function(e){console.log(e),a("handleSubmit result: ",e.data),n()}).catch(function(e){return console.error("handleSubmit error: ",e)})}})(function(e){e.errors,e.touched,e.values;var t=e.status,a=ge(),c=Object(n.useState)([]),o=Object(k.a)(c,2),i=o[0],l=o[1];return Object(n.useEffect)(function(){t&&l([].concat(Object(de.a)(i),[t]))},[t]),r.a.createElement(he.a,{component:"main",maxWidth:"xs"},r.a.createElement(re.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(W.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(se.a,{container:!0,spacing:2},r.a.createElement(se.a,{item:!0,xs:12,sm:6},r.a.createElement(Ee.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,component:fe.a})),r.a.createElement(se.a,{item:!0,xs:12,sm:6},r.a.createElement(Ee.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",component:fe.a})),r.a.createElement(se.a,{item:!0,xs:12},r.a.createElement(Ee.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",component:fe.a})),r.a.createElement(se.a,{item:!0,xs:12},r.a.createElement(Ee.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",component:fe.a})),r.a.createElement(se.a,{item:!0,xs:12},r.a.createElement(oe.a,{control:r.a.createElement(ie.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(O.b,{to:"/home"},r.a.createElement(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up")),r.a.createElement(se.a,{container:!0,justify:"flex-end"},r.a.createElement(se.a,{item:!0},r.a.createElement(O.b,{to:"/",variant:"body2"},"Already have an account? Sign in"))))))}),ve=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).addExperience=function(t){d.a.post("https://atoz-backend.herokuapp.com/api/experiences",t).then(function(t){console.log(t),e.setState({experiences:t.data}),e.props.history.push("/experiences")}).catch(function(e){console.log(e)})},e.setUpdateForm=function(t,a){t.preventDefault(),e.setState({whatever:a}),e.props.history.push("/update-form")},e.updateExperience=function(t){d.a.put("https://atoz-backend.herokuapp.com/api/experiences/".concat(t.id),t).then(function(t){console.log(t),e.setState({experiences:t.data}),e.props.history.push("/experiences")}).catch(function(e){console.log(e)})},e.state={experiences:[],whatever:null},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://atoz-backend.herokuapp.com/api/experiences").then(function(t){return e.setState({experiences:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{path:"/home",component:ne}),r.a.createElement(h.a,{exact:!0,path:"/",component:ue}),r.a.createElement(h.a,{exact:!0,path:"/sign-up",component:be}),r.a.createElement(h.a,{path:"/home",component:T}),r.a.createElement(h.a,{exact:!0,path:"/experiences",render:function(t){return r.a.createElement(v,Object.assign({},t,{experiences:e.state.experiences,setUpdateForm:e.setUpdateForm}))}}),r.a.createElement(h.a,{path:"/form",render:function(t){return r.a.createElement(b,Object.assign({},t,{addExperience:e.addExperience}))}}),r.a.createElement(h.a,{path:"/update-form",render:function(t){return r.a.createElement(y.a,Object.assign({},t,{activeExperience:e.state.whatever,updateExperience:e.updateExperience}))}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O.a,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t){}},[[106,1,2]]]);
//# sourceMappingURL=main.4b3510be.chunk.js.map