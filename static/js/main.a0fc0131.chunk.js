(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(19),r=a.n(c),o=(a(28),a(8)),u=a(20),s=a(11),m=a(13);const i=Object(u.a)({apiKey:"AIzaSyD9TsaBx7lRp9Tfmycx7UFP1s4x5L2P2d4",authDomain:"my-items-7cb3e.firebaseapp.com",databaseURL:"https://my-items-7cb3e-default-rtdb.firebaseio.com",projectId:"my-items-7cb3e",storageBucket:"my-items-7cb3e.appspot.com",messagingSenderId:"270447319098",appId:"1:270447319098:web:89de038eb13ee7a2073d03",measurementId:"G-YTFJ66NH61"}),b=Object(o.c)(i),d=Object(s.a)(i),E=Object(m.b)(i);var h=a(3);var p=()=>{const e=Object(h.o)();Object(n.useEffect)(()=>{Object(o.d)(b,t=>{if(t){const a=t.uid;e("/delete_mehrab"),console.log("uid",a)}else console.log("user is logged out"),e("/login_mehrab"),console.log("user is logged out")})},[])},O=a(16);var g=()=>{Object(o.f)(b);const e=b.currentUser,t=(Object(O.a)(),Object(h.o)());const a=async()=>{if(e)try{Object(o.b)(e),alert("Account deleted successfully"),t("/")}catch(a){console.error("Error deleting account:",a),alert("Error deleting account")}else alert("No user is currently signed in")};return l.a.createElement("div",null,l.a.createElement("h2",null,'Are you sure to Delete El Mehrab Account ?"  ',b.currentUser.phoneNumber,' " ?'),l.a.createElement("button",{onClick:a},"Delete My Account"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{id:"recaptcha-container"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",null,"Delete Another Account"),l.a.createElement("button",{onClick:a},"Delete My Account"))};var f=()=>{const[e,t]=Object(n.useState)(""),[a,c]=Object(n.useState)(""),[r,u]=Object(n.useState)(null),[i,p]=Object(n.useState)(!0),O=Object(h.o)(),g=t=>{t&&t.preventDefault(),window.recaptchaVerifier=new o.a(b,"recaptcha-container",{size:"normal",callback:e=>{console.log(e),g()},"expired-callback":()=>{}});const a=window.recaptchaVerifier;Object(o.e)(b,e,a).then(e=>{p(null),u(e),alert("OTP has been sent!")}).catch(e=>{console.error(e)})};return l.a.createElement("div",null,i&&l.a.createElement("div",null,l.a.createElement("h2",null,"Phone Authentication Of El Mehrab"),l.a.createElement("form",{onSubmit:g},l.a.createElement("div",null,l.a.createElement("label",null,"Phone Number of El Mehrab"),l.a.createElement("input",{type:"tel",value:e,onChange:e=>{console.log("setPHoneNumber"+e.target.value),t(e.target.value)},placeholder:"+1234567890"})),l.a.createElement("button",{type:"submit"},"Send OTP"),l.a.createElement("div",{id:"recaptcha-container"})),"  "),r&&l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),r.confirm(a).then(e=>{e.user,(async()=>{const e=b.currentUser;if(!e)return alert("No user is currently signed in"),void O("/");try{const l="/profiles/"+e.uid+"/lostItems",c="/profiles/"+e.uid+"/foundItems",r="/profiles/"+e.uid+"/chatRooms",u=Object(s.c)(d,l),i=Object(s.c)(d,c),b=Object(s.c)(d,r);Object(s.b)(u,e=>{e&&e.array.forEach(e=>{var t="/lostItems/"+e.key,a="/LostItemsImages/"+e.key,n=Object(m.c)(E,a),l=Object(s.c)(d,t);Object(s.d)(l),Object(m.a)(n)})}),Object(s.b)(i,e=>{e.array.forEach(e=>{var t="/foundItems/"+e.key,a="/FoundItemsImages/"+e.key,n=Object(m.c)(E,a),l=Object(s.c)(d,t);Object(s.d)(l),Object(m.a)(n)})}),Object(s.b)(b,e=>{e.array.forEach(e=>{var t="/chatRooms/"+e.key+"/isDeleted",a=Object(s.c)(d,t);Object(s.e)(a,!0)})});var t="/profiles/"+e.uid,a=Object(s.c)(d,t);Object(s.d)(a),await Object(o.b)(e),alert("Account deleted successfully"),O("/")}catch(n){console.error("Error during account deletion:",n),alert("Error during account deletion: "+n.message)}})(),alert("Account Is Deleted!! We are going to miss you")}).catch(e=>{console.error(e)})}},l.a.createElement("div",null,l.a.createElement("label",null,"OTP"),l.a.createElement("input",{type:"number",value:a,onChange:e=>{console.log("OTP"+e.target.value),c(e.target.value)}})),l.a.createElement("button",{type:"submit"},"Verify OTP")))};var j=()=>l.a.createElement("div",null,"fsafsa",l.a.createElement("br",null),l.a.createElement("p",null,"Hi there it's working greatt")),y=a(12);var v=function(){return l.a.createElement(y.a,null,l.a.createElement("div",null,l.a.createElement("section",null,l.a.createElement(h.c,null,"                                                  npm build",l.a.createElement(h.a,{path:"/",element:l.a.createElement(p,null)}),l.a.createElement(h.a,{path:"/login_mehrab",element:l.a.createElement(f,null)}),l.a.createElement(h.a,{path:"/delete_mehrab",element:l.a.createElement(g,null)}),l.a.createElement(h.a,{path:"/Delete-Account_mehrab",element:l.a.createElement(p,null)}),l.a.createElement(h.a,{path:"/*",element:l.a.createElement(p,null)}),l.a.createElement(h.a,{path:"/test_mehrab",element:l.a.createElement(j,null)})))))};var I=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:c,getTTFB:r}=t;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null))),I()}},[[21,1,2]]]);
//# sourceMappingURL=main.a0fc0131.chunk.js.map