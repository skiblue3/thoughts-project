(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{100:function(e,t,a){e.exports=a(130)},129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=a(19),i=a(27),s=a(76),u=a(91),m=a(11),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(m.a)({},null===t||void 0===t?void 0:t.data))),Object(m.a)(Object(m.a)({},e),{},{authData:t.data});case"LOGOUT":return localStorage.clear(),Object(m.a)(Object(m.a)({},e),{},{authData:null});default:return e}},d=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:p}),f=a(175),g=a(43),v=a(6),b=a(13),h=a(165),E=a(132),y=a(167),x=a(180),j=a(168),O=a(55),w=a(77),k=a.n(w),C=a(24),S=a(161),N=a(164),I=Object(S.a)((function(e){return{appBar:Object(C.a)({borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(C.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(C.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(N.a[500]),backgroundColor:N.a[500]}}})),T=function(){var e=I(),t=Object(o.b)(),a=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),l=Object(b.a)(a,2),c=l[0],i=l[1],s=Object(v.f)(),u=Object(v.e)(),m=function(){t({type:"LOGOUT"}),s("/"),window.location.reload(!1),i(null)};return Object(n.useEffect)((function(){var e=null===c||void 0===c?void 0:c.token;e&&(1e3*Object(O.a)(e).exp<(new Date).getTime()&&m());i(JSON.parse(localStorage.getItem("profile")))}),[u]),r.a.createElement(h.a,{className:e.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:e.brandContainer},r.a.createElement(E.a,{component:g.b,to:"/",className:e.heading,variant:"h2",align:"center"},"Thoughts"),r.a.createElement("img",{className:e.image,src:k.a,alt:"icon",height:"60"})),r.a.createElement(y.a,{className:e.toolbar},c?r.a.createElement("div",{className:e.profile},r.a.createElement(x.a,{className:e.purple,alt:c.result.name,src:c.result.picture},c.result.name.charAt(0)),r.a.createElement(E.a,{className:e.userName,variant:"h6"},c.result.name),r.a.createElement(j.a,{variant:"contained",className:e.logout,color:"secondary",onClick:m},"Logout")):r.a.createElement(j.a,{component:g.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},A=a(179),D=a(174),L=a(173),F=a(169),_=a(170),z=a(171),B=a(172),P=a(84),U=a.n(P),W=a(60),J=a.n(W),H=a(86),R=a.n(H),M=a(85),q=a.n(M),G=a(82),K=a.n(G),V=a(12),Y=a.n(V),Q=a(21),X=a(83),Z=a.n(X).a.create({baseURL:"https://thoughts-project-03.herokuapp.com/api/"});Z.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var $=function(e){return Z.patch("/posts/".concat(e,"/likePost"))},ee=function(e,t){return Z.patch("/posts/".concat(e),t)},te=function(e){return Z.delete("/posts/".concat(e))},ae=function(e){return Z.post("/user/signin",e)},ne=function(e){return Z.post("/user/signup",e)},re=function(e){return function(){var t=Object(Q.a)(Y.a.mark((function t(a){var n,r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l=e,Z.post("/posts",l);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var l}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},le=function(e,t){return function(){var a=Object(Q.a)(Y.a.mark((function a(n){var r,l;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ee(e,t);case 3:r=a.sent,l=r.data,n({type:"UPDATE",payload:l}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},ce=Object(S.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),oe=function(e){var t,a,n,l,c=e.post,i=e.setCurrentId,s=Object(o.b)(),u=ce(),m=JSON.parse(localStorage.getItem("profile")),p=function(){var e;return(null===(e=c.likes)||void 0===e?void 0:e.length)>0?c.likes.find((function(e){var t,a;return e===((null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.sub)||(null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a._id))}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{fontSize:"small"}),"\xa0Like")};return r.a.createElement(F.a,{className:u.card},r.a.createElement(_.a,{className:u.media,image:c.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:c.title}),r.a.createElement("div",{className:u.overlay},r.a.createElement(E.a,{variant:"h6"},c.name),r.a.createElement(E.a,{variant:"body2"},K()(c.createdAt).fromNow())),((null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.sub)===(null===c||void 0===c?void 0:c.creator)||(null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a._id)===(null===c||void 0===c?void 0:c.creator))&&r.a.createElement("div",{className:u.overlay2},r.a.createElement(j.a,{style:{color:"white"},size:"small",onClick:function(){return i(c._id)}},r.a.createElement(q.a,{fontSize:"default"}))),r.a.createElement("div",{className:u.details},r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"h2"},c.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(E.a,{className:u.title,gutterBottom:!0,variant:"h5",component:"h2"},c.title),r.a.createElement(z.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},c.message)),r.a.createElement(B.a,{className:u.cardActions},r.a.createElement(j.a,{size:"small",color:"primary",disabled:!(null===m||void 0===m?void 0:m.result),onClick:function(){return s((e=c._id,function(){var t=Object(Q.a)(Y.a.mark((function t(a){var n,r;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$(e);case 3:n=t.sent,r=n.data,a({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(p,null)),((null===m||void 0===m||null===(n=m.result)||void 0===n?void 0:n.sub)===(null===c||void 0===c?void 0:c.creator)||(null===m||void 0===m||null===(l=m.result)||void 0===l?void 0:l._id)===(null===c||void 0===c?void 0:c.creator))&&r.a.createElement(j.a,{size:"small",color:"primary",onClick:function(){return s((e=c._id,function(){var t=Object(Q.a)(Y.a.mark((function t(a){return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,te(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(R.a,{fontSize:"small"})," Delete")))},ie=Object(S.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),se=function(e){var t=e.setCurrentId,a=Object(o.c)((function(e){return e.posts})),n=ie();return a.length?r.a.createElement(D.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(D.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(oe,{post:e,setCurrentId:t}))}))):r.a.createElement(L.a,null)},ue=a(93),me=a(178),pe=a(87),de=a.n(pe),fe=Object(S.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ge=function(e){var t,a=e.currentId,l=e.setCurrentId,c=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),i=Object(b.a)(c,2),s=i[0],u=i[1],p=Object(o.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),d=Object(o.b)(),f=fe(),g=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){p&&u(p)}),[p]);var v=function(){l(0),u({title:"",message:"",tags:"",selectedFile:""})},h=function(){var e=Object(Q.a)(Y.a.mark((function e(t){var n,r;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(d(re(Object(m.a)(Object(m.a)({},s),{},{name:null===g||void 0===g||null===(n=g.result)||void 0===n?void 0:n.name}))),v()):(d(le(a,Object(m.a)(Object(m.a)({},s),{},{name:null===g||void 0===g||null===(r=g.result)||void 0===r?void 0:r.name}))),v());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===g||void 0===g||null===(t=g.result)||void 0===t?void 0:t.name)?r.a.createElement(ue.a,{className:f.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(f.root," ").concat(f.form),onSubmit:h},r.a.createElement(E.a,{variant:"h6"},a?'Editing "'.concat(p.title,'"'):"Share your thoughts!"),r.a.createElement(me.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(me.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{message:e.target.value}))}}),r.a.createElement(me.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:f.fileInput},r.a.createElement(de.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(m.a)(Object(m.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(j.a,{className:f.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(j.a,{variant:"contained",color:"secondary",size:"small",onClick:v,fullWidth:!0},"Clear"))):r.a.createElement(ue.a,{className:f.paper},r.a.createElement(E.a,{variant:"h6",align:"center"},"Please Sign In to post your thoughts and like other's thoughts."))},ve=Object(S.a)((function(e){return Object(C.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),be=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(o.b)(),i=ve();return Object(n.useEffect)((function(){c(function(){var e=Object(Q.a)(Y.a.mark((function e(t){var a,n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.get("/posts");case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,c]),r.a.createElement(A.a,{in:!0},r.a.createElement(f.a,null,r.a.createElement(D.a,{container:!0,className:i.mainContainer,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(D.a,{item:!0,xs:12,sm:7},r.a.createElement(se,{setCurrentId:l})),r.a.createElement(D.a,{item:!0,xs:12,sm:4},r.a.createElement(ge,{currentId:a,setCurrentId:l})))))},he=a(90),Ee=a.n(he),ye=a(62),xe=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),je=a(176),Oe=a(177),we=a(88),ke=a.n(we),Ce=a(89),Se=a.n(Ce),Ne=function(e){var t=e.name,a=e.handleChange,n=e.label,l=e.half,c=e.autoFocus,o=e.type,i=e.handleShowPassword;return r.a.createElement(D.a,{item:!0,xs:12,sm:l?6:12},r.a.createElement(me.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:c,type:o,InputProps:"password"===t?{endAdornment:r.a.createElement(je.a,{position:"end"},r.a.createElement(Oe.a,{onClick:i},"password"===o?r.a.createElement(ke.a,null):r.a.createElement(Se.a,null)))}:null}))},Ie={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Te=function(){var e=xe(),t=Object(n.useState)(!1),a=Object(b.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),s=Object(b.a)(i,2),u=s[0],p=s[1],d=Object(n.useState)(Ie),g=Object(b.a)(d,2),h=g[0],y=g[1],w=Object(o.b)(),k=Object(v.f)(),S=function(e){y(Object(m.a)(Object(m.a)({},h),{},Object(C.a)({},e.target.name,e.target.value)))},N=function(){var e=Object(Q.a)(Y.a.mark((function e(t){var a,n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null===t||void 0===t?void 0:t.credential,e.next=3,Object(O.a)(a);case 3:n=e.sent;try{w({type:"AUTH",data:{result:n,token:a}}),k("/")}catch(r){console.log(r)}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement(ue.a,{className:e.paper,elevation:3},r.a.createElement(x.a,{className:e.avatar},r.a.createElement(Ee.a,null)),r.a.createElement(E.a,{variant:"h5"},u?"Sign Up":"Sign In"),r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),w(u?function(e,t){return function(){var a=Object(Q.a)(Y.a.mark((function a(n){var r,l;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ne(e);case 3:r=a.sent,l=r.data,n({type:"AUTH",data:l}),t("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(h,k):function(e,t){return function(){var a=Object(Q.a)(Y.a.mark((function a(n){var r,l;return Y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ae(e);case 3:r=a.sent,l=r.data,n({type:"AUTH",data:l}),t("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(h,k))}},r.a.createElement(D.a,{container:!0,spacing:2},u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,{name:"firstName",label:"First Name",handleChange:S,autoFocus:!0,half:!0}),r.a.createElement(Ne,{name:"lastName",label:"Last Name",handleChange:S,half:!0})),r.a.createElement(Ne,{name:"email",label:"Email Address",handleChange:S,type:"email"}),r.a.createElement(Ne,{name:"password",label:"Password",handleChange:S,type:l?"text":"password",handleShowPassword:function(){c((function(e){return!e}))}}),u&&r.a.createElement(Ne,{name:"confirmPassword",label:"Repeat Password",handleChange:S,type:"password"})),r.a.createElement(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},u?"Sign Up":"Sign In"),r.a.createElement(ye.b,{clientId:"57366438895-7ipjaangh3qn68hejkrde5a6m106u6op.apps.googleusercontent.com"},r.a.createElement(ye.a,{onSuccess:N,onError:function(e){console.log(e),console.log("Google Sign In was unsuccessful. Try Again Later")},className:e.googleButton})),";",r.a.createElement(D.a,{container:!0,justify:"flex-end"},r.a.createElement(D.a,{item:!0},r.a.createElement(j.a,{onClick:function(){p((function(e){return!e})),c(!1)}},u?"Already have an account? Sign In":"Don't have an account? Sign up"))))))},Ae=function(){return r.a.createElement(g.a,null,r.a.createElement(f.a,{maxWidth:"lg"},r.a.createElement(T,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,element:r.a.createElement(be,null)}),r.a.createElement(v.a,{path:"/auth",exact:!0,element:r.a.createElement(Te,null)}))))},De=(a(129),Object(i.e)(d,Object(i.d)(Object(i.a)(s.a))));c.a.render(r.a.createElement(o.a,{store:De},r.a.createElement(Ae,null)),document.getElementById("root"))},77:function(e,t,a){e.exports=a.p+"static/media/thoughts.5c0c63fb.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.929190fa.chunk.js.map