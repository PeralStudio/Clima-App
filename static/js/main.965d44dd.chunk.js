(this.webpackJsonpclima=this.webpackJsonpclima||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),c=t.n(l),o=(t(13),t(3)),s=t.n(o),i=t(7),m=t(1),u=function(e){var a=e.titulo;return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper light-blue darken-2"},r.a.createElement("a",{href:"#!",className:"brand-logo"},a)))},d=t(2),p=t(4),E=function(e){var a=e.mensaje;return r.a.createElement("p",{className:"red darken-4 error"},a)},v=function(e){var a=e.busqueda,t=e.guardarBusqueda,l=e.guardarConsultar,c=Object(n.useState)(!1),o=Object(m.a)(c,2),s=o[0],i=o[1],u=a.ciudad,v=a.pais,f=function(e){t(Object(p.a)(Object(p.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==u.trim()&&""!==v.trim()?(i(!1),l(!0)):i(!0)}},s?r.a.createElement(E,{mensaje:"Es necesario rellenar ambos campos"}):null,r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"text",name:"ciudad",id:"ciudad",value:u,onChange:f}),r.a.createElement("label",{htmlFor:"ciudad"},"Ciudad:")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("select",{name:"pais",id:"pais",value:v,onChange:f},r.a.createElement("option",{value:""},"-- Seleccione un pa\xeds--"),r.a.createElement("option",{value:"ES"},"Espa\xf1a"),r.a.createElement("option",{value:"US"},"Estados Unidos"),r.a.createElement("option",{value:"MX"},"M\xe9xico"),r.a.createElement("option",{value:"AR"},"Argentina"),r.a.createElement("option",{value:"CO"},"Colombia"),r.a.createElement("option",{value:"CR"},"Costa Rica"),r.a.createElement("option",{value:"PE"},"Per\xfa")),r.a.createElement("label",{htmlFor:"pais"},"Pa\xeds")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"submit",value:"Buscar clima",className:"waves-effect waves-light btn-large btn-block yellow accent-4"})))},f=function(e){var a=e.resultado,t=a.name,n=a.main,l=a.wind;if(!t)return!1;var c="https://openweathermap.org/img/w/"+a.weather[0].icon+".png";return console.log(c),r.a.createElement("div",{className:"card-panel white col s12"},r.a.createElement("h2",null,"La Temperatura de ",t," es: "),r.a.createElement("p",{className:"temperatura"},r.a.createElement("img",{className:"icono",alt:"icono",src:c})," ",parseFloat(n.temp-273.15,10).toFixed(1),r.a.createElement("span",null,"\u2103")),r.a.createElement("p",null,"Sensaci\xf3n Termica:\xa0",parseFloat(n.feels_like-273.15,10).toFixed(1)," ",r.a.createElement("span",null,"\u2103")),r.a.createElement("p",null,"Temperatura M\xe1xima:\xa0",parseFloat(n.temp_max-273.15,10).toFixed(1)," ",r.a.createElement("span",null,"\u2103")),r.a.createElement("p",null,"Temperatura Minima:\xa0",parseFloat(n.temp_min-273.15,10).toFixed(1)," ",r.a.createElement("span",null," \u2103")),r.a.createElement("p",null,"Humedad:\xa0",n.humidity,r.a.createElement("span",null,"\xa0%")),r.a.createElement("p",null,"Viento:\xa0",l.speed,r.a.createElement("span",null,"\xa0m/s")))};var b=function(){var e,a=Object(n.useState)({ciudad:"",pais:""}),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(!1),d=Object(m.a)(o,2),p=d[0],b=d[1],h=Object(n.useState)({}),g=Object(m.a)(h,2),w=g[0],j=g[1],N=Object(n.useState)(!1),O=Object(m.a)(N,2),x=O[0],F=O[1],S=l.ciudad,k=l.pais;return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var a,t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=12;break}return"40efccd434eefd0344923485b60fbda7",a="https://api.openweathermap.org/data/2.5/weather?q=".concat(S,",").concat(k,"&appid=").concat("40efccd434eefd0344923485b60fbda7"),e.next=5,fetch(a);case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,j(n),b(!1),"404"===n.cod?F(!0):F(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]),e=x?r.a.createElement(E,{mensaje:"No hay resultados"}):r.a.createElement(f,{resultado:w}),r.a.createElement(n.Fragment,null,r.a.createElement(u,{titulo:"Clima React Alberto Peral"}),r.a.createElement("div",{className:"contenedor-form"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col m6 s12"},r.a.createElement(v,{busqueda:l,guardarBusqueda:c,guardarConsultar:b})),r.a.createElement("div",{className:"col m6 s12"},e)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.965d44dd.chunk.js.map