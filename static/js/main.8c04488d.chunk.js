(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{249:function(t,n){},258:function(t,n){},276:function(t,n){},278:function(t,n){},297:function(t,n){},298:function(t,n){},361:function(t,n){},363:function(t,n){},396:function(t,n){},398:function(t,n){},399:function(t,n){},404:function(t,n){},406:function(t,n){},412:function(t,n){},414:function(t,n){},427:function(t,n){},439:function(t,n){},442:function(t,n){},447:function(t,n){},455:function(t,n){},464:function(t,n){},466:function(t,n){},535:function(t,n,e){},536:function(t,n,e){},537:function(t,n,e){"use strict";e.r(n);var c=e(1),r=e(86),a=e.n(r),o=e(17),i=e.n(o),s=e(44),l=e(70),d=e(14),u=e(120),x=e(119),p=e(2);function j(){return Object(p.jsxs)("div",{className:"social-container",children:[Object(p.jsx)("a",{href:"https://twitter.com/Doodle_Degens",className:"twitter social",children:Object(p.jsx)(u.a,{icon:x.b,size:"2x"})}),Object(p.jsx)("a",{href:"https://discord.gg/zADPVp7Q4a",className:"discord social",children:Object(p.jsx)(u.a,{icon:x.a,size:"2x"})})]})}var b,h,f,O,g,y,v,m,C,w,A,S,E,N,_,T,k,D=e(59),M=e(69),I=e.n(M),R=e(223),L=e.n(R),F=e(71),K=e(224),U=e(20),z={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(U.a)(Object(U.a)({},z),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(U.a)(Object(U.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(U.a)(Object(U.a)({},z),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(U.a)(Object(U.a)({},t),{},{account:n.payload.account});default:return t}},W={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(U.a)(Object(U.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(U.a)(Object(U.a)({},t),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(U.a)(Object(U.a)({},W),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},Y=Object(F.b)({blockchain:P,data:H}),B=[K.a],G=Object(F.c)(F.a.apply(void 0,B)),Q=Object(F.d)(Y,G),q=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},X=function(){return function(){var t=Object(s.a)(i.a.mark((function t(n){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,Q.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n(q("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},J=function(t){return{type:"CONNECTION_FAILED",payload:t}},V=function(t){return function(){var n=Object(s.a)(i.a.mark((function n(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(X());case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},Z=e(15),$=Z.a.div(b||(b=Object(d.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),tt=Z.a.div(h||(h=Object(d.a)(["\n  height: 8px;\n  width: 8px;\n"]))),nt=Z.a.div(f||(f=Object(d.a)(["\n  height: 16px;\n  width: 16px;\n"]))),et=Z.a.div(O||(O=Object(d.a)(["\n  height: 24px;\n  width: 24px;\n"]))),ct=Z.a.div(g||(g=Object(d.a)(["\n  height: 32px;\n  width: 32px;\n"]))),rt=Z.a.div(y||(y=Object(d.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var n=t.flex;return n||0}),(function(t){var n=t.fd;return n||"column"}),(function(t){var n=t.jc;return n||"flex-start"}),(function(t){var n=t.ai;return n||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),at=Z.a.p(v||(v=Object(d.a)(["\n  color: var(--primary-text);\n  font-size: 42px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ot=Z.a.p(m||(m=Object(d.a)(["\n  color: var(--primary-text);\n  font-size: 28px;\n  line-height: 1.6;\n"]))),it=Z.a.p(C||(C=Object(d.a)(["\n  color: var(--primary-text);\n  font-size: 26px;\n  line-height: 1.6;\n"]))),st=Z.a.p(w||(w=Object(d.a)(["\n  color: var(--primary-text);\n  font-size: 26px;\n  line-height: 1.6;\n"]))),lt=(Z.a.div(A||(A=Object(d.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(535),Z.a.button(S||(S=Object(d.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 16px;\n  color: var(--secondary-text);\n  width: 200px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"])))),dt=Z.a.button(E||(E=Object(d.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ut=Z.a.div(N||(N=Object(d.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),xt=(Z.a.img(_||(_=Object(d.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),Z.a.img(T||(T=Object(d.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"])))),pt=Z.a.a(k||(k=Object(d.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n  font-size: 26px;\n"])));var jt=function(){var t,n,e=Object(D.b)(),r=Object(D.c)((function(t){return t.blockchain})),a=Object(D.c)((function(t){return t.data})),o=Object(c.useState)(!1),d=Object(l.a)(o,2),u=d[0],x=d[1],b=Object(c.useState)("All 3333 degens are free."),h=Object(l.a)(b,2),f=h[0],O=h[1],g=Object(c.useState)(1),y=Object(l.a)(g,2),v=y[0],m=y[1],C=Object(c.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:.005,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),w=Object(l.a)(C,2),A=w[0],S=w[1],E=function(){""!==r.account&&null!==r.smartContract&&e(X(r.account)),a.totalSupply>18&&console.log("0")},N=function(){var t=Object(s.a)(i.a.mark((function t(){var n,e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,S(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){N()}),[]),Object(c.useEffect)((function(){E()}),[r.account]),Object(p.jsx)($,{children:Object(p.jsxs)(rt,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:A.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(p.jsx)(nt,{}),Object(p.jsxs)(ut,{flex:1,style:{padding:24},test:!0,children:[Object(p.jsx)(rt,{flex:1,jc:"center",ai:"center",children:Object(p.jsx)(xt,{alt:"example",src:"/config/images/example.png"})}),Object(p.jsx)(ct,{}),Object(p.jsxs)(rt,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(p.jsxs)(at,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[a.totalSupply," / ",A.MAX_SUPPLY]}),Object(p.jsxs)(it,{style:{textAlign:"center",color:"var(--primary-text)"},children:[Object(p.jsx)(pt,{target:"_blank",href:A.SCAN_LINK,children:(t=A.CONTRACT_ADDRESS,n=15,t.length>n?"".concat(t.substring(0,n),"..."):t)}),Object(p.jsx)(nt,{}),Object(p.jsx)(pt,{target:"_blank",href:"https://opensea.io",children:Object(p.jsx)(ot,{children:"Visit us on OpenSea"})})]}),Object(p.jsx)(nt,{}),Number(a.totalSupply)>=A.MAX_SUPPLY?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(at,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Sold Out."}),Object(p.jsxs)(it,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",A.NFT_NAME," on"]}),Object(p.jsx)(nt,{}),Object(p.jsx)(pt,{target:"_blank",href:A.MARKETPLACE_LINK,children:A.MARKETPLACE})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(at,{style:{textAlign:"center",color:"var(--accent-text)"},children:Number(a.totalSupply)>=1e3?Object(p.jsx)(at,{style:{textAlign:"center",color:"var(--accent-text)"},children:"FREE MINT"}):Object(p.jsx)(at,{style:{textAlign:"center",color:"var(--accent-text)"},children:"FREE MINT"})}),Object(p.jsx)(tt,{}),Object(p.jsx)(it,{style:{textAlign:"center",color:"var(--accent-text)"}}),Object(p.jsx)(nt,{}),""===r.account||null===r.smartContract?Object(p.jsxs)(rt,{ai:"center",jc:"center",children:[Object(p.jsx)(st,{style:{textAlign:"center",color:"var(--accent-text)"},children:"All 3333 degens are free."}),Object(p.jsx)(nt,{}),Object(p.jsx)(lt,{onClick:function(t){t.preventDefault(),e(function(){var t=Object(s.a)(i.a.mark((function t(n){var e,c,r,a,o,s,l,d,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=t.sent,t.next=12,r.json();case 12:if(a=t.sent,o=window,!(s=o.ethereum)||!s.isMetaMask){t.next=33;break}return I.a.setProvider(s),l=new L.a(s),t.prev=18,t.next=21,s.request({method:"eth_requestAccounts"});case 21:return d=t.sent,t.next=24,s.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(u=new I.a(c,a.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:d[0],smartContract:u,web3:l}}),s.on("accountsChanged",(function(t){n(V(t[0]))})),s.on("chainChanged",(function(){window.location.reload()}))):n(J("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),n(J("Something went wrong."));case 31:t.next=34;break;case 33:n(J("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(n){return t.apply(this,arguments)}}()),E()},children:"CONNECT"}),""!==r.errorMsg?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(nt,{}),Object(p.jsx)(it,{style:{textAlign:"center",color:"var(--accent-text)"},children:r.errorMsg})]}):null]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(it,{style:{textAlign:"center",color:"var(--accent-text)"},children:f}),Object(p.jsx)(et,{}),Object(p.jsxs)(rt,{ai:"center",jc:"center",fd:"row",children:[Object(p.jsx)(dt,{style:{lineHeight:.4},disabled:u?1:0,onClick:function(t){t.preventDefault(),function(){var t=v-1;t<1&&(t=1),m(t)}()},children:"-"}),Object(p.jsx)(et,{}),Object(p.jsx)(it,{style:{textAlign:"center",color:"var(--accent-text)"},children:v}),Object(p.jsx)(et,{}),Object(p.jsx)(dt,{disabled:u?1:0,onClick:function(t){t.preventDefault(),function(){var t=v+1;t>5&&(t=5),m(t)}()},children:"+"})]}),Object(p.jsx)(nt,{}),Object(p.jsx)(rt,{ai:"center",jc:"center",fd:"row",children:Object(p.jsx)(lt,{disabled:u?1:0,onClick:function(t){t.preventDefault(),function(){if(a.totalSupply<1e3)var t=0;a.totalSupply>=1e3&&(t=A.WEI_COST);A.GAS_LIMIT;var n=String(t*v),c=String("170000");console.log("Cost: ",n),console.log("Gas limit: ",c),O("Minting your ".concat(A.NFT_NAME,"...")),x(!0),r.smartContract.methods.mint(v).send({gasLimit:String(c),to:A.CONTRACT_ADDRESS,from:r.account,value:n}).once("error",(function(t){console.log(t),O("Sorry, something went wrong please try again later."),x(!1)})).then((function(t){console.log(t),O("Congrats, you have successfully minted your Okay Degen NFT!"),x(!1),e(X(r.account))}))}(),E()},children:u?"BUSY":"MINT"})})]})]}),Object(p.jsx)(et,{})]}),Object(p.jsx)(ct,{})]}),Object(p.jsx)(et,{}),Object(p.jsxs)(rt,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(p.jsx)(it,{style:{textAlign:"center",color:"var(--primary-text)"},children:"We are OKAY. We are doodles. We are degens."}),Object(p.jsx)(nt,{}),Object(p.jsx)(it,{style:{textAlign:"center",color:"var(--primary-text)"},children:"All 3333 degens are free. 20 free mints / wallet."}),Object(p.jsx)(j,{})]})]})})},bt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,541)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;e(t),c(t),r(t),a(t),o(t)}))};e(536);a.a.render(Object(p.jsx)(D.a,{store:Q,children:Object(p.jsx)(jt,{})}),document.getElementById("root")),bt()}},[[537,1,2]]]);
//# sourceMappingURL=main.8c04488d.chunk.js.map