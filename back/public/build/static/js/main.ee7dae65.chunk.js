(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,a,t){e.exports=t.p+"static/media/fondo.ff2e2b54.jpg"},312:function(e,a,t){e.exports=t(555)},317:function(e,a,t){},555:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(23),l=t.n(i),o=(t(317),t(22)),c=t(26),s=t(28),u=t(27),m=t(29),p=t(255),h=t(561),d=t(558),g=t(33),b=t.n(g),f=t(3),E=t.n(f),v=t(21),y=t(138),w=t.n(y),C=t(80),O=t.n(C),j=t(40),k=t.n(j),S=t(46),x=t.n(S),N=t(127),D=t.n(N),T=t(128),R=t.n(T),M=t(41),L=t.n(M),F=t(47),I=t.n(F),B=t(243),P=t.n(B),W=t(24),z=t.n(W),A=t(84),H=t.n(A),K=function e(){var a=this;Object(o.a)(this,e),this.signup=function(e,t,n,r){return a.service.post("/auth/signup",{name:e,surname:t,email:n,password:r}).then(function(e){return e.data})},this.login=function(e,t){return a.service.post("/auth/login",{email:e,password:t}).then(function(e){return e.data})},this.service=H.a.create({baseURL:"http://localhost:5000/"})},q=t(557),G=t(559),U=t(81),J=t.n(U),V=t(107),$=t(4),Q=t.n($),X=t(239),Y=t.n(X),Z=t(241),_=t.n(Z),ee=t(242),ae=t.n(ee),te=t(238),ne=t.n(te),re=t(36),ie=t.n(re),le=t(126),oe=t.n(le),ce=t(99),se=t.n(ce),ue=t(240),me=t.n(ue),pe=t(235),he=t.n(pe),de=t(236),ge=t.n(de),be=t(25);var fe=Object(be.withStyles)(function(e){return{success:{backgroundColor:he.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:ge.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var a=e.classes,t=e.open,n=e.className,i=e.message,l=e.onClose,o=e.variant,c=Object(V.a)(e,["classes","open","className","message","onClose","variant"]),s=Ee[o];return r.a.createElement(oe.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:t,autoHideDuration:3e3,onClose:l},r.a.createElement(se.a,Object.assign({className:Q()(a[o],n),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:a.message},r.a.createElement(s,{className:Q()(a.icon,a.iconVariant)}),i),action:[r.a.createElement(ie.a,{key:"close","aria-label":"Close",color:"inherit",className:a.close,onClick:l},r.a.createElement(ne.a,{className:a.icon}))]},c)))}),Ee={success:Y.a,warning:me.a,error:_.a,info:ae.a},ve=401,ye=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(v.a)({},n,r))},t.handleFormSubmit=function(e){e.preventDefault();var a=t.state.email,n=t.state.password;t.service.login(a,n).then(function(e){t.setState({email:"",password:"",redirect:!0})}).catch(function(e){e.response.status===ve&&t.setState({showError:!0}),console.log(e)})},t.handleCloseErrorPopup=function(e,a){"clickaway"!==a&&t.setState({showError:!1})},t.state={email:"",password:"",showError:!1,redirect:!1},t.service=new K,t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.email,n=a.password,i=a.showError;return this.state.redirect?r.a.createElement(G.a,{to:"/home"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{className:e.avatar},r.a.createElement(P.a,null)),r.a.createElement(z.a,{component:"h1",variant:"h5"},"Log In"),r.a.createElement("form",{className:e.form,onSubmit:this.handleFormSubmit},r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(I.a,{htmlFor:"email"},"Email Address"),r.a.createElement(L.a,{id:"email",name:"email",value:t,autoComplete:"email",autoFocus:!0,onChange:this.handleChange})),r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(I.a,{htmlFor:"password"},"Password"),r.a.createElement(L.a,{id:"password",name:"password",value:n,autoComplete:"current-password",type:"password",onChange:this.handleChange})),r.a.createElement(D.a,{control:r.a.createElement(R.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Log In")),r.a.createElement("div",{className:e.subButtom},r.a.createElement(J.a,{component:q.a,to:"/signup"},"or create an account")),r.a.createElement(fe,{open:i,onClose:this.handleCloseErrorPopup,variant:"warning",message:"Incorrect username or password"}))}}]),a}(n.Component),we=E()(function(e){return{avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},subButtom:{marginTop:3*e.spacing.unit}}})(ye),Ce=t(244),Oe=t(245),je=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(v.a)({},n,r))},t.handleFormSubmit=function(e){e.preventDefault();var a=t.state,n=a.name,r=a.surname,i=a.email,l=a.password;t.service.signup(n,r,i,l).then(function(e){t.setState({name:"",surname:"",email:"",password:"",redirect:!0})}).catch(function(e){return console.log(e)})},t.state={name:"",surname:"",email:"",password:"",redirect:!1},t.service=new K,t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.name,n=a.surname,i=a.email,l=a.password;return this.state.redirect?r.a.createElement(G.a,{to:"/login"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{className:e.avatar},r.a.createElement(Ce.Icon,{path:Oe.a,size:1,color:"white"})),r.a.createElement(z.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("form",{className:e.form,onSubmit:this.handleFormSubmit},r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(I.a,{htmlFor:"name"},"Name"),r.a.createElement(L.a,{id:"name",name:"name",autoComplete:"name",autoFocus:!0,value:t,onChange:this.handleChange})),r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(I.a,{htmlFor:"surname"},"Surname"),r.a.createElement(L.a,{id:"surname",name:"surname",autoComplete:"surname",value:n,onChange:this.handleChange})),r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(I.a,{htmlFor:"email"},"Email Address"),r.a.createElement(L.a,{id:"email",name:"email",autoComplete:"email",value:i,onChange:this.handleChange})),r.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(I.a,{htmlFor:"password"},"Password"),r.a.createElement(L.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",value:l,onChange:this.handleChange})),r.a.createElement(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up")),r.a.createElement("div",{className:e.subButtom},r.a.createElement(J.a,{component:q.a,to:"/login"},"or signup with your account")))}}]),a}(n.Component),ke=E()(function(e){return{avatar:{margin:e.spacing.unit,backgroundColor:"green"},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},subButtom:{marginTop:3*e.spacing.unit}}})(je),Se=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.isLogin;return r.a.createElement("div",{className:a.container},r.a.createElement("main",{className:a.main},r.a.createElement(b.a,{className:a.paper},t?r.a.createElement(we,null):r.a.createElement(ke,null))))}}]),a}(r.a.Component),xe=E()(function(e){return{container:{overflow:"auto",minHeight:"100vh",backgroundImage:"linear-gradient("+"rgba(0,0,0,".concat(.6,"), ")+"rgba(0,0,0,".concat(.6,")")+"), url(".concat(w.a,")"),backgroundSize:"cover"},main:Object(v.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")}}})(Se),Ne=t(562),De=t(129),Te=t.n(De),Re=t(83),Me=t.n(Re),Le=t(102),Fe=t.n(Le),Ie=t(48),Be=t.n(Ie),Pe=t(101),We=t.n(Pe),ze=t(248),Ae=t.n(ze),He=t(247),Ke=t.n(He),qe=t(105),Ge=t.n(qe),Ue=t(246),Je=t.n(Ue),Ve=t(54),$e=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={anchorEl:null,mobileMoreAnchorEl:null},t.handleProfileMenuOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.anchorEl,t=e.mobileMoreAnchorEl,n=this.props,i=n.classes,l=n.onClickMenu,o=Boolean(a),c=Boolean(t),s=r.a.createElement(We.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMenuClose},r.a.createElement(Be.a,{onClick:this.handleMenuClose},"Profile"),r.a.createElement(Be.a,{onClick:this.handleMenuClose},"Logout")),u=r.a.createElement(We.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:this.handleMenuClose},r.a.createElement(Be.a,{onClick:this.handleMobileMenuClose},r.a.createElement(ie.a,{color:"inherit"},r.a.createElement(Fe.a,{badgeContent:4,color:"secondary"},r.a.createElement(Ge.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(Be.a,{onClick:this.handleMobileMenuClose},r.a.createElement(ie.a,{color:"inherit"},r.a.createElement(Fe.a,{badgeContent:11,color:"secondary"},r.a.createElement(Je.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(Be.a,{onClick:this.handleProfileMenuOpen},r.a.createElement(ie.a,{color:"inherit"},r.a.createElement(Ke.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:i.root},r.a.createElement(Te.a,{position:"static"},r.a.createElement(Me.a,null,r.a.createElement(ie.a,{className:i.menuButton,color:"inherit","aria-label":"Open sidebar",onClick:l},r.a.createElement(Ae.a,null)),r.a.createElement(z.a,{className:i.title,variant:"h6",color:"inherit",noWrap:!0},"Tu Gestor"),r.a.createElement("div",{className:i.search},r.a.createElement("div",{className:i.searchIcon})))),s,u)}}]),a}(r.a.Component),Qe=Object(be.withStyles)(function(e){return{root:{position:"fixed",zIndex:1,width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(v.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(v.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Ve.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Ve.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(v.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(v.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(v.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})($e),Xe=t(130),Ye=t.n(Xe),Ze=t(82),_e=t.n(Ze),ea=t(131),aa=t.n(ea),ta=t(69),na=t.n(ta),ra=t(85),ia=t.n(ra),la=t(86),oa=t.n(la),ca=t(249),sa=t.n(ca),ua=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,n=e.onClose,i=e.onOpen;return r.a.createElement(Ye.a,{open:t,onClose:n,onOpen:i},r.a.createElement("div",{tabIndex:0,role:"button"},r.a.createElement("div",{className:a.list},r.a.createElement(_e.a,null,r.a.createElement(na.a,{button:!0,component:function(e){return r.a.createElement(q.a,Object.assign({to:"/home/order-list"},e))},onClick:n},r.a.createElement(ia.a,null,r.a.createElement(sa.a,null)),r.a.createElement(oa.a,{primary:"Order list"})),r.a.createElement(na.a,{button:!0,component:function(e){return r.a.createElement(q.a,Object.assign({to:"/home/create-order"},e))},onClick:n},r.a.createElement(ia.a,null,r.a.createElement(Ge.a,null)),r.a.createElement(oa.a,{primary:"Create order"}))),r.a.createElement(aa.a,null),r.a.createElement(_e.a,null,r.a.createElement(na.a,{button:!0,component:function(e){return r.a.createElement(q.a,Object.assign({to:"/login"},e))},onClick:n},r.a.createElement(ia.a,null,r.a.createElement(Ge.a,null)),r.a.createElement(oa.a,{primary:"Logout"}))))))}}]),a}(r.a.Component),ma=Object(be.withStyles)({list:{width:250},fullList:{width:"auto"}})(ua),pa=t(71),ha=t(257),da=t(103),ga=t.n(da),ba=t(132),fa=t.n(ba),Ea=t(87),va=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(i)))).getRowClassName=function(e){var a=e.index,n=t.props,r=n.classes,i=n.rowClassName,l=n.onRowClick;return Q()(r.tableRow,r.flexContainer,i,Object(v.a)({},r.tableRowHover,-1!==a&&null!=l))},t.cellRenderer=function(e){var a=e.cellData,n=e.columnIndex,i=void 0===n?null:n,l=t.props,o=l.columns,c=l.classes,s=l.rowHeight,u=l.onRowClick;return r.a.createElement(ga.a,{component:"div",className:Q()(c.tableCell,c.flexContainer,Object(v.a)({},c.noClick,null==u)),variant:"body",style:{height:s},align:null!=i&&o[i].numeric?"right":"left"},a)},t.headerRenderer=function(e){var a,n=e.label,i=e.columnIndex,l=e.dataKey,o=e.sortBy,c=e.sortDirection,s=t.props,u=s.headerHeight,m=s.columns,p=s.classes,h=s.sort,d=(a={},Object(v.a)(a,Ea.c.ASC,"asc"),Object(v.a)(a,Ea.c.DESC,"desc"),a),g=m[i].disableSort||null==h?n:r.a.createElement(fa.a,{active:l===o,direction:d[c]},n);return r.a.createElement(ga.a,{component:"div",className:Q()(p.tableCell,p.flexContainer,p.noClick),variant:"head",style:{height:u},align:m[i].numeric?"right":"left"},g)},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.classes,n=a.columns,i=Object(V.a)(a,["classes","columns"]);return r.a.createElement(Ea.a,null,function(a){var l=a.height,o=a.width;return r.a.createElement(Ea.d,Object.assign({className:t.table,height:l,width:o},i,{rowClassName:e.getRowClassName}),n.map(function(a,n){var i,l=a.cellContentRenderer,o=void 0===l?null:l,c=a.className,s=a.dataKey,u=Object(V.a)(a,["cellContentRenderer","className","dataKey"]);return i=null!=o?function(a){return e.cellRenderer({cellData:o(a),columnIndex:n})}:e.cellRenderer,r.a.createElement(Ea.b,Object.assign({key:s,headerRenderer:function(a){return e.headerRenderer(Object(pa.a)({},a,{columnIndex:n}))},className:Q()(t.flexContainer,c),cellRenderer:i,dataKey:s},u))}))})}}]),a}(r.a.PureComponent);va.defaultProps={headerHeight:56,rowHeight:56};var ya=Object(be.withStyles)(function(e){return{table:{fontFamily:e.typography.fontFamily},flexContainer:{display:"flex",alignItems:"center",boxSizing:"border-box"},tableRow:{cursor:"pointer"},tableRowHover:{"&:hover":{backgroundColor:e.palette.grey[200]}},tableCell:{flex:1},noClick:{cursor:"initial"}}})(va),wa=[["Frozen yoghurt",159,6,24,4],["Ice cream sandwich",237,9,37,4.3],["Eclair",262,16,24,6],["Cupcake",305,3.7,67,4.3],["Gingerbread",356,16,49,3.9]],Ca=0;function Oa(e,a,t,n,r){return{id:Ca+=1,dessert:e,calories:a,fat:t,carbs:n,protein:r}}for(var ja=[],ka=0;ka<200;ka+=1){var Sa=wa[Math.floor(Math.random()*wa.length)];ja.push(Oa.apply(void 0,Object(ha.a)(Sa)))}var xa=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={orders:[]},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;H.a.get("http://localhost:5000/orders").then(function(a){e.setState(Object(pa.a)({},e.state,{orders:a.data}))})}},{key:"render",value:function(){var e=this.state.orders;return r.a.createElement(ya,{rowCount:e.length,rowGetter:function(a){var t=a.index;return e[t]},columns:[{width:200,flexGrow:1,label:"Type",dataKey:"plantType"},{width:120,label:"Trays type",dataKey:"trayType",numeric:!0},{width:120,label:"Order date",dataKey:"orderDate",cellContentRenderer:function(e){return Na(e.cellData)}},{width:120,label:"Delivery date",dataKey:"deliveryDate",cellContentRenderer:function(e){return Na(e.cellData)}}]})}}]),a}(n.Component);function Na(e){return new Date(e).toLocaleDateString()}var Da=function(e){function a(e){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).call(this,e))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:e.main},r.a.createElement(b.a,{className:e.paper},r.a.createElement(z.a,{variant:"title",color:"primary",className:e.title},"Orders list"),r.a.createElement(xa,null))))}}]),a}(r.a.Component),Ta=E()(function(e){return{main:Object(v.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:{height:600,marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},submit:{marginTop:3*e.spacing.unit},title:{marginTop:e.spacing.unit,textAlign:"center"}}})(Da),Ra=t(70),Ma=t.n(Ra),La=t(106),Fa=function e(){var a=this;Object(o.a)(this,e),this.create=function(e){var t=e.trayType,n=e.plantType,r=e.orderDate,i=e.deliveryDate;return a.service.post("/orders",{trayType:t,plantType:n,orderDate:r,deliveryDate:i}).then(function(e){return e.data})},this.service=H.a.create({baseURL:"http://localhost:5000/"})},Ia=["Tomato","Melon","Pepper","Onion","Cauliflower","Watermelon"].map(function(e){return{value:e.toLowerCase(),label:e}}),Ba=[54,104,150,294,726,1066].map(function(e){return{value:e,label:e}}),Pa={orderDate:new Date,deliveryDate:new Date,plantType:Ia[0].value,trayType:Ba[0].value,showError:!1,showSuccess:!1},Wa=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).handleChange=function(e){return function(a){t.setState(Object(v.a)({},e,a.target.value))}},t.handleOrderDateChange=function(e){t.setState({orderDate:e})},t.handleDeliveryDateChange=function(e){t.setState({deliveryDate:e})},t.handleFormSubmit=function(e){e.preventDefault();var a=t.state,n=a.trayType,r=a.plantType,i=a.orderDate,l=a.deliveryDate;t.service.create({trayType:n,plantType:r,orderDate:i,deliveryDate:l}).then(function(e){t.setState(Object(pa.a)({},Pa,{showSuccess:!0}))}).catch(function(e){t.setState({showError:!0}),console.log(e)})},t.handleCloseSuccessPopup=function(e,a){"clickaway"!==a&&t.setState({showSuccess:!1})},t.handleCloseErrorPopup=function(e,a){"clickaway"!==a&&t.setState({showError:!1})},t.state=Object(pa.a)({},Pa),t.service=new Fa,t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.orderDate,t=e.deliveryDate,n=e.plantType,i=e.trayType,l=e.showError,o=e.showSuccess,c=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:c.main},r.a.createElement(b.a,{className:c.paper},r.a.createElement(z.a,{variant:"title",color:"primary"},"New Order"),r.a.createElement("form",{className:c.form,onSubmit:this.handleFormSubmit},r.a.createElement(La.a,{fullWidth:!0,margin:"normal",label:"Order date",value:a,onChange:this.handleOrderDateChange}),r.a.createElement(La.a,{fullWidth:!0,margin:"normal",label:"Delivery date",value:t,onChange:this.handleDeliveryDateChange}),r.a.createElement(Ma.a,{select:!0,fullWidth:!0,label:"Plant type",value:n,onChange:this.handleChange("plantType"),helperText:"Please select plant type",margin:"normal"},Ia.map(function(e){return r.a.createElement(Be.a,{key:e.value,value:e.value},e.label)})),r.a.createElement(Ma.a,{select:!0,fullWidth:!0,label:"Tray type",value:i,onChange:this.handleChange("trayType"),helperText:"Please select tray type",margin:"normal"},Ba.map(function(e){return r.a.createElement(Be.a,{key:e.value,value:e.value},e.label)})),r.a.createElement(k.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit},"Create Order")))),r.a.createElement(fe,{open:l,onClose:this.handleCloseErrorPopup,variant:"error",message:"Something went wront when creating the order"}),r.a.createElement(fe,{open:o,onClose:this.handleCloseSuccessPopup,variant:"success",message:"Order successfully created"}))}}]),a}(r.a.Component),za=E()(function(e){return{main:Object(v.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},submit:{marginTop:3*e.spacing.unit}}})(Wa),Aa=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).openSideBar=function(){t.setState({sideBarOpen:!0})},t.closeSideBar=function(){t.setState({sideBarOpen:!1})},t.state={sideBarOpen:!1},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.match,n=this.state.sideBarOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe,{onClickMenu:this.openSideBar}),r.a.createElement(ma,{open:n,onOpen:this.openSideBar,onClose:this.closeSideBar}),r.a.createElement("div",{className:a.container},r.a.createElement(h.a,null,r.a.createElement(d.a,{path:"".concat(t.url,"/create-order"),component:za}),r.a.createElement(d.a,{path:"".concat(t.url,"/order-list"),component:Ta}),r.a.createElement(d.a,{exact:!0,path:"".concat(t.url,"/"),component:Ta}))))}}]),a}(r.a.Component),Ha=E()(function(e){return{container:{overflow:"auto",minHeight:"100vh",backgroundImage:"linear-gradient("+"rgba(255,255,255,".concat(.9,"), ")+"rgba(255,255,255,".concat(.9,")")+"), url(".concat(w.a,")"),backgroundSize:"cover",paddingTop:8*e.spacing.unit},main:Object(v.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},submit:{marginTop:3*e.spacing.unit}}})(Object(Ne.a)(Aa)),Ka=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(xe,{isLogin:!1})}}),r.a.createElement(d.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(xe,{isLogin:!0})}}),r.a.createElement(d.a,{path:"/home",component:Ha})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qa=t(560),Ga=t(256);l.a.render(r.a.createElement(qa.a,null,r.a.createElement(La.b,{utils:Ga.a},r.a.createElement(Ka,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[312,1,2]]]);
//# sourceMappingURL=main.ee7dae65.chunk.js.map