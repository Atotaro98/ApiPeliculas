(this["webpackJsonp12-react-redux"]=this["webpackJsonp12-react-redux"]||[]).push([[0],{26:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(13),i=a.n(s),o=(a(26),a(4)),r=a(9),l=(a(32),"ADD_MOVIE_FAVORITE"),j="REMOVE_MOVIE_FAVORITE",d="GET_MOVIES",b="GET_MOVIES_DETAIL";var m=a(1);function u(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.moviesFavourites}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"centrado",children:Object(m.jsx)("h2",{className:"favoritas-titulo",children:"Tus Pel\xedculas Favoritas"})}),Object(m.jsx)("ul",{children:t&&t.map((function(t){return Object(m.jsxs)("div",{className:"peli",children:[Object(m.jsx)("h1",{children:t.Title}),Object(m.jsx)("div",{className:"imagen",children:Object(m.jsxs)("figure",{children:[Object(m.jsx)("span",{className:"a\xf1o",children:t.Year}),Object(m.jsxs)(r.b,{className:"link",to:"/movie/".concat(t.imdbID),children:["  ",Object(m.jsx)("img",{className:"poster",src:"N/A"===t.Poster?"https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg":t.Poster})," "]})]})}),Object(m.jsx)("button",{className:"remove-favorite",onClick:function(){return e({type:j,payload:t})},children:"Remover de Favoritas"})]},t.imdbID)}))})]})}var h=a(21);a(38);function v(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],s=Object(o.b)(),i=Object(o.c)((function(e){return e.moviesLoaded}));function j(e){var t;e.preventDefault(),s((t=a,function(e){return fetch("http://www.omdbapi.com/?apikey=20dac387&s="+t).then((function(e){return e.json()})).then((function(t){e({type:d,payload:t})}))}))}return Object(m.jsxs)("div",{className:"formulario",children:[Object(m.jsx)("form",{className:"form-container",onSubmit:function(e){return j(e)},children:Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{className:"label",htmlFor:"title",children:"Pel\xedcula: "}),Object(m.jsx)("input",{type:"text",id:"title",autoComplete:"off",value:a,onChange:function(e){return function(e){n(e.target.value)}(e)}}),Object(m.jsx)("button",{className:"buscar",type:"submit",children:"BUSCAR"})]})}),Object(m.jsx)("section",{className:"contenedor",children:i&&i.map((function(e){return Object(m.jsxs)("div",{className:"peli",children:[Object(m.jsx)("h1",{children:e.Title}),Object(m.jsx)("div",{className:"imagen",children:Object(m.jsxs)("figure",{children:[Object(m.jsx)("span",{className:"a\xf1o",children:e.Year}),Object(m.jsxs)(r.b,{className:"link",to:"/movie/".concat(e.imdbID),children:["  ",Object(m.jsx)("img",{className:"poster",src:"N/A"===e.Poster?"https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg":e.Poster})," "]})]})}),Object(m.jsx)("button",{className:"favorita",onClick:function(){return s((t={Title:e.Title,id:e.imdbID,Poster:e.Poster,Year:e.Year},{type:l,payload:t}));var t},children:"A\xf1adir a Favorita"})]},e.imdbID)}))})]})}var O=a.p+"static/media/logoHenry.57a1848e.png";a(39);function p(){return Object(m.jsxs)("header",{className:"navbar",children:[Object(m.jsxs)("div",{className:"imagen",children:["  ",Object(m.jsx)("img",{id:"logoHenry",src:O,width:"80",height:"80",alt:""})," ",Object(m.jsx)("h2",{className:"movie-found",children:"Movie Found"}),"   "]}),Object(m.jsxs)("nav",{className:"nav",children:[Object(m.jsx)(r.c,{className:"NavLink",to:"/favs",children:"Favoritas"}),Object(m.jsx)(r.c,{className:"NavLink",exact:!0,to:"/",children:"Home"})]})]})}var f=a(3);a(40);function x(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.movieDetail})),a=Object(f.e)();return Object(c.useEffect)((function(){var t,c=a.id;console.log("entre antes del dispatch"),e((t=c,function(e){return fetch("http://www.omdbapi.com/?apikey=20dac387&i="+t).then((function(e){return e.json()})).then((function(t){e({type:b,payload:t})}))})),console.log("entre despues del dispatch")}),[]),Object(m.jsxs)("div",{className:"movie-detail",children:[Object(m.jsxs)("h1",{children:[" Detalle de la Pelicula ",Object(m.jsx)("span",{className:"span-title",children:t.Title})]}),Object(m.jsx)("div",{children:Object(m.jsx)("figure",{children:Object(m.jsx)("img",{className:"poster",src:"N/A"===t.Poster?"https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg":t.Poster})})}),Object(m.jsxs)("h4",{children:["A\xf1o de lanzamieto: ",Object(m.jsx)("span",{className:"span-info",children:"N/A"===t.Released?" No se pudo obtener esa informacion.":t.Released})]}),Object(m.jsxs)("h4",{children:["Duracion: ",Object(m.jsx)("span",{className:"span-info",children:"N/A"===t.Runtime?" No se pudo obtener esa informacion.":t.Runtime})]}),Object(m.jsxs)("h4",{children:["Genero: ",Object(m.jsx)("span",{className:"span-info",children:"N/A"===t.Genre?" No se pudo obtener esa informacion.":t.Genre})]}),Object(m.jsxs)("h4",{children:["Premios: ",Object(m.jsx)("span",{className:"span-info",children:"N/A"===t.Awards?" No se pudo obtener esa informacion.":t.Awards})]}),Object(m.jsxs)("h4",{children:["Producida por : ",Object(m.jsx)("span",{className:"span-info",children:"N/A"===t.Production?" No se pudo obtener esa informacion.":t.Production})]})]})}var N=function(){return Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsx)(f.a,{exact:!0,path:"/",component:v}),Object(m.jsx)(f.a,{path:"/favs",component:u}),Object(m.jsx)(f.a,{path:"/movie/:id",component:x})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(18),y=a(10),w={moviesFavourites:[],moviesLoaded:[],movieDetail:{}};var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;return t.type===l?Object(y.a)(Object(y.a)({},e),{},{moviesFavourites:e.moviesFavourites.concat(t.payload)}):t.type===j?Object(y.a)(Object(y.a)({},e),{},{moviesFavourites:e.moviesFavourites.filter((function(e){return e!==t.payload}))}):t.type===b?Object(y.a)(Object(y.a)({},e),{},{movieDetail:t.payload}):t.type===d?Object(y.a)(Object(y.a)({},e),{},{moviesLoaded:t.payload.Search}):e},F=a(20),P=Object(g.b)(A,Object(g.a)(F.a));i.a.render(Object(m.jsx)(o.a,{store:P,children:Object(m.jsx)(r.a,{children:Object(m.jsx)(N,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.85f4de31.chunk.js.map