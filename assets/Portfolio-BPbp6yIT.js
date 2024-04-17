import{j as r}from"./index-DYQrzLI3.js";import{B as a}from"./Button-D1bL8J44.js";import{I as i,P as n}from"./Profile-CZfAOUK9.js";function t({project:s}){return r.jsxs("div",{className:"max-w-xl mx-auto lg:w-full xl:w-full",children:[r.jsxs("div",{className:"flex items-center mb-4 gap-5",children:[r.jsx("span",{className:"rounded-full bg-background w-10 h-10 flex items-center justify-center text-xl",children:s.id}),r.jsx("h1",{className:"text-2xl font-bold",children:s.name})]}),r.jsx("div",{className:"ml-5 my-5",children:r.jsx("p",{className:"pl-10",children:s.description})}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:s.pictures.map((e,l)=>r.jsx("div",{className:"cursor-zoom-in rounded-lg relative overflow-hidden transition-transform duration-300 transform hover:scale-125 hover:z-50",children:r.jsx("img",{src:`profile/assets/projects/${e}.png`,alt:`Picture ${l+1}`,className:"w-full rounded-lg h-[100%]",loading:"lazy"})},l))}),r.jsx("div",{className:"mt-5 text-end",children:s.githubLink&&r.jsx("button",{className:`btnHover p-1 px-6 bg-background rounded-full\r
          `,children:r.jsx("a",{href:s.githubLink,target:"_blank",rel:"noopener noreferrer",className:"bg-transparent",children:"View on GitHub"})})})]})}const o=[{id:1,name:"Resturant Landing Page",description:"This is the restuurant landing page",pictures:["rlp/rlp1","rlp/rlp2","rlp/rlp3","rlp/rlp4","rlp/rlpM1","rlp/rlpM2"],githubLink:"https://github.com/SalmaanMushtaq/restaurant-landing-page"},{id:2,name:"Personal Portfolio",description:"My personal portfolio",pictures:["rlp1","rlp2","rlp3","rlp4","rlpM1","rlpM2"],githubLink:"https://github.com/SalmaanMushtaq/profile"}];function d(){return r.jsx("div",{className:"mt-10 grid grid-cols-1 gap-6 w-[96vw]",children:o.map(s=>r.jsx(t,{project:s},s.id))})}function m(){return r.jsxs("div",{className:"container pr-4",children:[r.jsx(i,{}),r.jsx(n,{heading:"Portfolio"}),r.jsx("div",{className:"mt-4 gap-5 grid grid-cols-1 w-[20%] mx-auto bg-background rounded-2xl p-4 lg:rounded-full",children:r.jsx(a,{text:"Resturant"})}),r.jsx(d,{})]})}export{m as default};