import{j as s,L as m,c as d,R as c,r as x,a as _}from"./index-CYPS4fVt.js";function j({id:i,year:t,title:a,summary:r,poster:e,genres:n}){return s.jsx("div",{className:"movie",children:s.jsxs(m,{to:`/movie/${i}`,children:[s.jsx("img",{src:e,alt:a}),s.jsxs("div",{className:"movie__data",children:[s.jsx("h3",{className:"movie__title",children:a}),s.jsx("h5",{className:"movie__year",children:t}),s.jsx("ul",{className:"movie__genres",children:n.map((o,l)=>s.jsx("li",{className:"genres__genre",children:o},l))}),s.jsxs("p",{className:"movie__summary",children:[r.slice(0,180),"..."]})]})]})})}const h=d("/")({component:u});function u(){const[i,t]=c.useState(!0),[a,r]=c.useState([]);return x.useEffect(()=>{(async()=>{const{data:{data:{movies:n}}}=await _.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");r(n),t(!1)})()},[]),s.jsx("section",{className:"container",children:i?s.jsx("div",{className:"loader",children:s.jsx("span",{className:"loader__text",children:"Loading..."})}):s.jsx("div",{className:"movies",children:a.map(e=>s.jsx(j,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id))})})}export{h as Route};
