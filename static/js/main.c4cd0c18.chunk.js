(this["webpackJsonpsupervision-webapp"]=this["webpackJsonpsupervision-webapp"]||[]).push([[0],{108:function(e,t,n){e.exports=n(156)},155:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=n(26),s=n(52),i=n(35),u=n(7),m=n.n(u),p=n(14),f=n(201),d=n(202),b=n(194),g=n(4),h=n(203),x=n(87),v=n.n(x),y=r.a.createContext({}),E=function(){return Object(a.useContext)(y)},w=n(18),O=n(210),j=n(97),k=n(184),C=n(207),I=n(204),N=n(209),R=function(e){var t=e.classes,n=e.id,a=e.name,o=e.label,c=e.value,l=e.handleChange,s=e.items,i=Object(j.a)(e,["classes","id","name","label","value","handleChange","items"]);return r.a.createElement(k.a,{variant:"outlined",classes:{root:t.selectorItem}},r.a.createElement(C.a,{id:"".concat(n,"-select-label")},o),r.a.createElement(I.a,Object.assign({labelId:"".concat(n,"-select-label"),id:"".concat(n,"-select"),name:a,value:c,onChange:l},i),s.map((function(e){return r.a.createElement(N.a,{key:e.id,value:e.id},e.name)}))))};R.defaultProps={name:""};var z=Object(g.a)((function(){return{selectorItem:{minWidth:"150px",marginRight:"16px"}}}))(R),S=function(e){var t=e.component,n=e.classes,a=e.options,o=e.name,c=e.label,l=e.type,s=e.disabled;return r.a.createElement(w.b,{className:n.field,type:l,name:o},(function(e){var i=e.form,u=e.field;"selector"===t&&"commune"===o&&(a=a.filter((function(e){return e.wilaya===i.values.wilaya})));return r.a.createElement(r.a.Fragment,null,"selector"===t&&r.a.createElement(z,{classes:{selectorItem:n.selectorItem},id:o,name:o,label:c,items:a,disabled:s||0===a.length,value:i.values[o]||"",handleChange:"wilaya"===o?function(e){return function(e){i.setFieldValue("commune","",!0),i.handleChange(e)}(e)}:u.onChange}),"input"===t&&r.a.createElement(O.a,Object.assign({fullWidth:!0,name:!0,type:l,variant:"outlined",margin:"normal",label:c,value:i.values[o]},u)),"textArea"===t&&r.a.createElement("textarea",Object.assign({name:!0,className:n.textArea,placeholder:c,rows:10,value:i.values[o]},u)))}))};S.defaultProps={options:[],type:"text",disabled:!1};var M=Object(g.a)((function(){return{textArea:{resize:"none",width:"500px",marginTop:"16px",fontFamily:"Roboto",fontSize:"16px",padding:"18.5px 14px",border:"1.2px solid #0000003b",borderRadius:"4px",outline:"none","&:hover":{borderColor:"#000000"},"&:focus":{border:"1.5px solid #3f51b5"}}}}))(S),T=Object(g.a)((function(){return{form:{display:"flex"},selectorItem:{background:"#fff",borderRadius:"4px"}}}))((function(e){var t=e.classes,n=E(),a=n.data,o=a.wilayas,c=a.communes,l=n.setMapsConfigs,s=[o,c];return r.a.createElement(w.d,{initialValues:{wilaya:"",commune:""},validate:function(e){if(e.commune){var t=c.options.find((function(t){return t.id===e.commune})),n=t.latitude,a=t.longitude;l({center:{lat:n,lng:a},zoom:13}),window.handleEventUpdateZoom=!0}}},(function(){return r.a.createElement(w.c,{className:t.form},s.map((function(e){return r.a.createElement(M,Object.assign({classes:{selectorItem:t.selectorItem},key:e.id},e))})))}))})),A=n(42),P=n(191),W=n(192),B=n(193),D=n(157);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var V=r.a.createElement("g",{transform:"translate(0.000000,256.000000) scale(0.100000,-0.100000)",stroke:"none"},r.a.createElement("path",{d:"M1310 2541 c-212 -45 -383 -136 -531 -281 -162 -159 -223 -290 -261 -560 -17 -118 -25 -152 -46 -183 -16 -24 -31 -37 -41 -34 -108 32 -106 31 -139 7 -71 -53 -187 -221 -235 -341 -43 -106 -57 -184 -57 -311 0 -277 98 -493 293 -641 124 -96 329 -176 482 -189 l50 -4 100 107 100 108 3 -110 3 -109 549 0 550 0 0 300 0 300 -468 0 -469 0 -214 -230 -214 -231 -40 7 c-21 4 -66 15 -100 26 -265 86 -423 258 -477 516 -34 162 -13 313 62 467 40 81 120 192 145 201 7 3 145 -37 306 -89 l292 -95 756 385 c416 212 757 387 759 389 2 1 -9 26 -24 56 -77 154 -234 324 -383 416 -94 58 -221 107 -329 128 -104 20 -316 17 -422 -5z"}),r.a.createElement("path",{d:"M1791 1490 c-387 -197 -708 -363 -712 -367 -4 -4 14 -101 39 -215 l46 -208 507 0 506 0 55 58 c151 158 270 382 312 584 18 87 21 268 6 349 -14 76 -39 159 -48 159 -4 0 -324 -162 -711 -360z"})),L=function(e){var t=e.svgRef,n=e.title,a=q(e,["svgRef","title"]);return r.a.createElement("svg",F({width:"20px",height:"20px",viewBox:"0 0 256 256",preserveAspectRatio:"xMidYMid meet",ref:t},a),n?r.a.createElement("title",null,n):null,V)},U=r.a.forwardRef((function(e,t){return r.a.createElement(L,F({svgRef:t},e))}));n.p;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Y=r.a.createElement("g",{transform:"translate(0.000000,256.000000) scale(0.100000,-0.100000)",stroke:"none"},r.a.createElement("path",{d:"M1048 2544 c-261 -47 -496 -173 -685 -367 -106 -109 -167 -193 -228 -313 -93 -181 -135 -365 -135 -584 0 -364 127 -668 383 -917 109 -106 193 -167 313 -228 181 -93 365 -135 584 -135 219 0 403 42 584 135 120 61 204 122 313 228 197 192 321 426 368 693 20 113 19 336 0 450 -30 168 -102 345 -202 498 -60 91 -248 279 -338 338 -154 101 -332 173 -499 203 -110 19 -351 19 -458 -1z m247 -229 c33 -9 98 -36 145 -61 88 -46 255 -166 273 -195 8 -13 -2 -30 -50 -85 -33 -38 -79 -98 -103 -133 -50 -74 -130 -228 -130 -249 0 -10 -5 -12 -17 -6 -38 16 -171 16 -220 0 l-47 -16 -23 27 c-37 44 -91 162 -109 238 -20 86 -23 220 -6 297 18 78 66 147 122 176 52 26 85 27 165 7z m75 -907 c54 -37 75 -73 75 -128 0 -55 -21 -91 -75 -127 -91 -62 -220 13 -220 128 0 114 129 188 220 127z m506 -148 c168 -42 339 -157 380 -256 21 -51 20 -114 -5 -161 -24 -48 -118 -136 -193 -181 -79 -47 -251 -123 -284 -125 -27 -2 -30 2 -56 78 -41 116 -100 235 -163 327 l-55 80 34 40 c41 47 70 107 81 163 4 22 12 43 18 47 23 15 165 8 243 -12z m-1353 -11 c77 -16 139 -22 252 -22 83 -1 162 2 178 6 24 7 27 5 27 -16 0 -41 59 -145 101 -179 45 -36 46 -52 4 -124 -64 -110 -191 -224 -315 -283 -68 -32 -83 -36 -161 -36 -78 0 -89 2 -121 27 -77 59 -114 195 -105 382 5 111 25 266 34 266 3 0 51 -10 106 -21z"})),K=function(e){var t=e.svgRef,n=e.title,a=G(e,["svgRef","title"]);return r.a.createElement("svg",Z({width:"20px",height:"20px",viewBox:"0 0 256 256",preserveAspectRatio:"xMidYMid meet",ref:t},a),n?r.a.createElement("title",null,n):null,Y)},H=r.a.forwardRef((function(e,t){return r.a.createElement(K,Z({svgRef:t},e))})),J=(n.p,Object(g.a)((function(){return{widget:{width:"200px",height:"fit-content",background:"#fff",boxShadow:"0 3px 20px 0px #aaa",borderRadius:"4px",padding:"16px",zIndex:1},element:{display:"flex",margin:"8px",color:"#666666","& * + *":{marginLeft:"8px"}},colorGreen:{color:"green"},colorBlue:{color:"blue"},colorOrange:{color:"orange"},colorRed:{color:"red"}}}))((function(e){var t=e.classes;return r.a.createElement("div",{className:t.widget},function(e){return[{icon:r.a.createElement(U,{style:{fill:"#7e7996"}}),label:"Masques"},{icon:r.a.createElement(H,{style:{fill:"#7e7996"}}),label:"Ventilateurs"},{icon:r.a.createElement(P.a,{style:{fill:"#7e7996"}}),label:"Imprimantes 3D"},{icon:r.a.createElement(W.a,{style:{fill:"#7e7996"}}),label:"Centres d'isolation"},{icon:r.a.createElement(B.a,{classes:{root:e.colorBlue}}),label:"Information"},{icon:r.a.createElement(B.a,{classes:{root:e.colorGreen}}),label:"Disponibles"},{icon:r.a.createElement(B.a,{classes:{root:e.colorOrange}}),label:"En production"},{icon:r.a.createElement(B.a,{classes:{root:e.colorRed}}),label:"Les demandes"}]}(t).map((function(e,n){return r.a.createElement("div",{key:n,className:t.element},function(e){var t=e.classes,n=e.icon,a=e.label;return r.a.createElement("div",{className:t.element},n,r.a.createElement(D.a,null,a))}(Object(A.a)({},e,{classes:t})))})))}))),Q=n(206),_=n(196),X=n(197),$=n(198),ee=n(199),te=n(195),ne=n(93),ae=n.n(ne).a.create({baseURL:"".concat("https://mofeedz.herokuapp.com/")}),re=function(){var e=Object(p.a)(m.a.mark((function e(t,n,a){var r,o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="public"===n,o="api/".concat(n,"/").concat(t,"/"),e.next=4,ae.get(o,!r&&{headers:{Authorization:"Token ".concat(a)}});case 4:if(200!==(c=e.sent).status){e.next=7;break}return e.abrupt("return",c.data);case 7:return e.abrupt("return",[]);case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),oe=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re("types","resources",t);case 2:return e.t0=e.sent,e.abrupt("return",{component:"selector",name:"type",label:"Type",type:"text",options:e.t0,disabled:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re("resources","resources",t);case 2:return e.t0=e.sent,e.abrupt("return",{component:"selector",name:"resource",label:"Resource",type:"text",options:e.t0,disabled:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re("wilayas","public");case 2:return e.t0=e.sent,e.abrupt("return",{component:"selector",name:"wilaya",label:"Wilaya",type:"text",options:e.t0,disabled:!1});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re("communes","public");case 2:return e.t0=e.sent,e.abrupt("return",{component:"selector",name:"commune",label:"Commune",type:"text",options:e.t0,disabled:!1});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie={component:"textArea",name:"comment",label:"Comment",disabled:!1},ue=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.get("api/resources/entries/",{headers:{Authorization:"Token ".concat(t)}});case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.data);case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=Object(g.a)((function(){return{iconButton:{background:"#fff","&:hover":{background:"#fff"}},form:{display:"flex",alignItems:"flex-start",flexDirection:"column"},fields:{display:"flex",flexDirection:"column"},fieldset:{display:"flex",justifyContent:"space-between",width:"100%"},dialogTitle:{borderBottom:"1px solid #e0e6ea"},dialogActions:{borderTop:"1px solid #e0e6ea",marginTop:"16px"},selectorItem:{display:"flex",minWidth:"200px",margin:"16px 0 8px 0"}}}))((function(e){var t,n=e.classes,o=E(),c=o.token,s=o.data,i=o.setEntries,u=Object(a.useState)(!1),f=Object(l.a)(u,2),d=f[0],g=f[1],h=s.types,x=[s.communes,{component:"input",name:"quantity",label:"Quantity",type:"number",disabled:!1},{component:"input",name:"phone",label:"Phone",type:"text",disabled:!1}],v=[(t=s).wilayas,t.resources,{component:"input",name:"fullName",label:"Nom",type:"text",disabled:!1}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{classes:{root:n.iconButton},color:"primary",onClick:function(){return g(!0)}},r.a.createElement(te.a,{fontSize:"large"})),r.a.createElement(Q.a,{open:d,onClose:function(){return g(!1)},"aria-labelledby":"form-dialog-title"},r.a.createElement(w.d,{initialValues:{type:"",resource:"",wilaya:"",commune:"",fullName:"",phone:"",comment:""},onSubmit:function(e){(function(e,t){var n=e.type,a=e.resource,r=e.fullName,o=e.phone,c=e.wilaya,l=e.commune,s=e.comment;return ae.post("api/resources/entries/",{type:n,resource:a,full_name:r,phone:o,wilaya:c,commune:l,comment:s},{headers:{Authorization:"Token ".concat(t),"Content-Type":"application/json"}})})(e,c).then(Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,ue(c);case 3:e.t1=e.sent,(0,e.t0)(e.t1),g(!1);case 6:case"end":return e.stop()}}),e)}))))},validate:function(e){var t={};return e.type&&e.resource&&e.wilaya&&e.commune&&e.fullName&&e.phone||(t.missingRequiredFields=!0),t}},(function(e){var t=e.handleSubmit,a=e.errors,o=e.dirty;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{id:"form-dialog-title",className:n.dialogTitle},"Formulaire"),r.a.createElement(X.a,null,r.a.createElement(w.c,{className:n.form},r.a.createElement(M,Object.assign({classes:{selectorItem:n.selectorItem}},h)),r.a.createElement("div",{className:n.fieldset},r.a.createElement("div",{className:n.fields},v.map((function(e){return r.a.createElement(M,Object.assign({classes:{selectorItem:n.selectorItem},key:e.name},e))}))),r.a.createElement("div",{className:n.fields},x.map((function(e){return r.a.createElement(M,Object.assign({classes:{selectorItem:n.selectorItem},key:e.name},e))})))),r.a.createElement(M,Object.assign({classes:{selectorItem:n.selectorItem}},ie)))),r.a.createElement($.a,{className:n.dialogActions},r.a.createElement(ee.a,{disabled:!o||o&&a.missingRequiredFields,onClick:t,color:"primary"},"Envoyer")))}))))})),pe=n(200),fe=Object(g.a)((function(){return{iconButton:{background:"#fff","&:hover":{background:"#fff"}}}}))((function(e){var t=e.classes,n=Object(i.g)(),a=E().setToken;return r.a.createElement(b.a,{classes:{root:t.iconButton},color:"secondary",onClick:function(){return a(""),void n.push("/")}},r.a.createElement(pe.a,null))})),de=n(95),be=n.n(de),ge={key:"AIzaSyDWozbCKDy-RkqkzY7TGKme89eG9q7RT1Y"},he={lat:35.38,lng:4.49},xe=8,ve={fullscreenControl:!1,zoomControl:!1,minZoom:3},ye={padding:"2px",background:"#fff","box-shadow":"0 3px 8px 0px #aaa","border-radius":"50%"},Ee=Object(g.a)((function(){return{hover:{position:"relative",bottom:"45px"}}}))((function(e){var t,n=e.classes,o=e.entry,c=Object(a.useState)(!1),s=Object(l.a)(c,2),i=s[0],u=s[1],m="",p="",f=function(){u(!i)};return 1===o.type.id&&(m="blue"),2===o.type.id&&(m="green"),3===o.type.id&&(m="orange"),4===o.type.id&&(m="red"),1===o.resource.id&&(p="Print"),2===o.resource.id&&(p="Mask"),3===o.resource.id&&(p="Home"),4===o.resource.id&&(p="Ventilator"),"Print"===p&&(t=r.a.createElement(P.a,{fontSize:"large",style:Object(A.a)({fill:m},ye)})),"Mask"===p&&(t=r.a.createElement(U,{style:Object(A.a)({fill:m,width:"35px",height:"35px"},ye)})),"Home"===p&&(t=r.a.createElement(W.a,{fontSize:"large",style:Object(A.a)({fill:m},ye)})),"Ventilator"===p&&(t=r.a.createElement(H,{style:Object(A.a)({fill:m,width:"35px",height:"35px"},ye)})),r.a.createElement("div",{className:i?n.hover:"",onMouseEnter:f,onMouseLeave:f},i&&r.a.createElement("div",{style:{right:"60px",width:"125px",height:"fit-content",display:"flex",background:"#fff",position:"relative",zIndex:"100",flexDirection:"column",bottom:"2px",padding:"12px 16px 16px",borderRadius:"8px",boxShadow:"0 4px 10px rgba(60,64,67,.28)"}},r.a.createElement("span",null,"Name: ",o.full_name),r.a.createElement("span",null,"Mobile: ",o.phone),r.a.createElement("span",null,"Comment: ",o.comment),r.a.createElement("span",null,"Quantity: ",o.quantity)),t)})),we=Object(g.a)((function(){return{googleMaps:{width:"100%",height:"100vh",position:"absolute",top:0,left:0}}}))((function(e){var t=e.classes,n=E(),o=n.mapsConfigs,c=o.center,s=o.zoom,i=n.token,u=n.entries,f=n.setEntries,d=he,b=xe,g=ve,h=ge,x=Object(a.useState)(s),v=Object(l.a)(x,2),y=v[0],w=v[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,ue(i);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),i),r.a.createElement("div",{className:t.googleMaps},r.a.createElement(be.a,{bootstrapURLKeys:h,center:c,zoom:y,defaultCenter:d,defaultZoom:b,options:g,onZoomAnimationStart:function(e){w(e)},onChange:function(){window.handleEventUpdateZoom&&(w(s),window.handleEventUpdateZoom=!1)},distanceToMouse:function(){}},function(e){var t=[];return e.forEach((function(e){var n=e.commune.latitude,a=e.commune.longitude;t.push(r.a.createElement(Ee,{lat:n,lng:a,entry:e}))})),t}(u).map((function(e){return e}))))})),Oe=Object(g.a)((function(){return{container:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",width:"100%",maxWidth:"100%",backgroundImage:"url(".concat(v.a,")"),padding:"24px"},topContainer:{display:"flex",justifyContent:"space-between"},bottomContainer:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},iconButton:{background:"#fff","&:hover":{background:"#fff"}},topRightContainer:{display:"flex",alignItems:"flex-start"},loading:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",maxWidth:"100%",background:"#9e9ea2bf"}}}))((function(e){var t=e.classes,n=E(),o=n.token,c=n.data,l=n.setData;return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,oe(o);case 3:return e.t1=e.sent,e.next=6,ce(o);case 6:return e.t2=e.sent,e.next=9,le();case 9:return e.t3=e.sent,e.next=12,se();case 12:e.t4=e.sent,e.t5={loading:!1,types:e.t1,resources:e.t2,wilayas:e.t3,communes:e.t4},(0,e.t0)(e.t5);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),o),c.loading?r.a.createElement("div",{className:t.loading},r.a.createElement(f.a,null)):r.a.createElement(d.a,{className:t.container,component:"main",maxWidth:"xs"},r.a.createElement(we,null),r.a.createElement("div",{className:t.topContainer},r.a.createElement(J,null),r.a.createElement("div",{className:t.topRightContainer},r.a.createElement(T,null),r.a.createElement(fe,null))),r.a.createElement("div",{className:t.bottomContainer},r.a.createElement(b.a,{classes:{root:t.iconButton},color:"primary"},r.a.createElement(h.a,null)),r.a.createElement(me,null)))})),je=n(96),ke=n.n(je),Ce=Object(g.a)((function(e){return{container:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",maxWidth:"100%",backgroundImage:"url(".concat(ke.a,")")},paper:{display:"flex",flexDirection:"column",alignItems:"center",background:"#ffffffbd",borderRadius:"4px",padding:"16px"},submit:{margin:e.spacing(3,0,2)}}}))((function(e){var t=e.classes,n=Object(i.g)(),a=E().setToken,o=function(){var e=Object(p.a)(m.a.mark((function e(t){var r,o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,o=t.password,console.log(r,o),e.next=4,ae.post("api/auth/login/",{username:"admin@mofeed.dz",password:"axdvfcsz"});case 4:200===(c=e.sent).status&&(a(c.data.token),n.push("/home"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(d.a,{className:t.container,component:"main",maxWidth:"xs"},r.a.createElement("div",{className:t.paper},r.a.createElement(D.a,{component:"h1",variant:"h5"},"Fight COVID-19"),r.a.createElement(w.d,{initialValues:{username:"",password:""},onSubmit:function(e){o(e)}},(function(){return r.a.createElement(w.c,null,r.a.createElement(w.b,{type:"text",name:"username"},(function(e){var t=e.field;return r.a.createElement(O.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Username",autoFocus:!0},t))})),r.a.createElement(w.a,{name:"username",component:"div"}),r.a.createElement(w.b,{type:"password",name:"password"},(function(e){var t=e.field;return r.a.createElement(O.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",id:"password",type:"password",autoComplete:"current-password"},t))})),r.a.createElement(w.a,{name:"password",component:"div"}),r.a.createElement(ee.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Login"))}))))})),Ie=function(){var e=Object(a.useState)(localStorage.getItem("token")),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)({loading:!0}),u=Object(l.a)(c,2),m=u[0],p=u[1],f=Object(a.useState)({}),d=Object(l.a)(f,2),b=d[0],g=d[1],h=Object(a.useState)([]),x=Object(l.a)(h,2),v=x[0],E=x[1],w={token:n,setToken:function(e){localStorage.setItem("token",e),o(e)},data:m,setData:function(e){return p(e)},entries:v,setEntries:function(e){return E(e)},mapsConfigs:b,setMapsConfigs:function(e){return g(e)}};return r.a.createElement(y.Provider,{value:w},r.a.createElement(s.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/home"},n?r.a.createElement(Oe,null):r.a.createElement(i.a,{to:{pathname:"/"}})),r.a.createElement(i.b,{path:"/"},r.a.createElement(Ce,null)))))};n(155);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ie,null)),document.getElementById("root"))},87:function(e,t,n){e.exports=n.p+"static/media/covid-map.7e0487cc.jpg"},96:function(e,t,n){e.exports=n.p+"static/media/bg-01.f51d5f66.jpg"}},[[108,1,2]]]);
//# sourceMappingURL=main.c4cd0c18.chunk.js.map