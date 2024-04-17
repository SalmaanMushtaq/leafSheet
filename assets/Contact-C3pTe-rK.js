import{j as e,r as t,B as u,X as m}from"./index-DH12XxgK.js";import{c as x,d as f,e as h,f as g,g as b,D as j}from"./index-C9TK7xY0.js";import{I as p,P as N}from"./Profile-2QqZPrhk.js";function v(){return e.jsxs("div",{className:"mt-10",children:[e.jsxs("h1",{className:"text-4xl font-bold leading-relaxed flex gap-4 items-center",children:[e.jsx("span",{className:"bg-basic p-3 rounded-full",children:e.jsx(x,{className:"bg-basic"})}),"Contact"]}),e.jsxs("div",{className:"mt-10 ml-16 flex gap-8 flex-col justify-center items-center md:flex-row lg:flex-row lg:justify-evenly",children:[e.jsxs("div",{className:"border-2  border-basic p-3 w-60 rounded-2xl",children:[e.jsxs("h1",{className:"text-xl font-bold leading-relaxed flex flex-col gap-4 items-center",children:[e.jsx("span",{className:"bg-basic p-3 rounded-full",children:e.jsx(f,{className:"bg-basic text-4xl"})}),"Location"]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("small",{children:"Pampore, Srinagar"}),e.jsx("small",{children:"Jammu and Kashmir, 192121"})]})]}),e.jsxs("div",{className:"border-2  border-basic p-3 w-60 rounded-2xl",children:[e.jsxs("h1",{className:"text-xl font-bold leading-relaxed flex flex-col gap-4 items-center",children:[e.jsx("span",{className:"bg-basic p-3 rounded-full",children:e.jsx(h,{className:"bg-basic text-4xl"})}),"Email Address"]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("small",{children:"khansalmaan163@gmail.com"}),e.jsx("small",{children:"khandaysalmaan00@gmail.com"})]})]}),e.jsxs("div",{className:"border-2  border-basic p-3 w-60 rounded-2xl",children:[e.jsxs("h1",{className:"text-xl font-bold leading-relaxed flex flex-col gap-4 items-center",children:[e.jsx("span",{className:"bg-basic p-3 rounded-full",children:e.jsx(g,{className:"bg-basic text-4xl"})}),"Phone Number"]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("small",{children:"+91 7006-172-734"}),e.jsx("small",{children:"+91 9797-856-884"})]})]})]})]})}function P(){const[s,n]=t.useState({userName:"",userEmail:"",userPhone:"",message:""}),[l,o]=t.useState({}),r=a=>{const{name:c,value:d}=a.target;n({...s,[c]:d}),o({...l,[c]:""})},i=()=>{const a={};s.userName.trim()||(a.userName="Please enter your name"),s.userEmail.trim()?/\S+@\S+\.\S+/.test(s.userEmail)||(a.userEmail="Please enter a valid email address"):a.userEmail="Please enter your email",s.userPhone.trim()?/^\d{10}$/.test(s.userPhone)||(a.userPhone="Please enter a valid 10-digit phone number"):a.userPhone="Please enter your phone number",Object.keys(a).length>0?o(a):(console.log(s),n({userName:"",userEmail:"",userPhone:"",message:""}),u.success("Message Sent Succefully!",{theme:"dark",transition:m,toastStyle:{backgroundColor:"green"}}))};return e.jsxs("div",{className:"mt-10 w-[96vw]",children:[e.jsxs("h1",{className:"text-4xl font-bold leading-relaxed flex gap-4 items-center",children:[e.jsx("span",{className:"bg-basic p-3 rounded-full",children:e.jsx(b,{className:"bg-basic"})}),"Get In Touch"]}),e.jsxs("div",{className:"mt-10 m-auto p-5 flex flex-col gap-6 sm:w-3/4",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",name:"userName",id:"userName",placeholder:"Your Name*",onChange:r,value:s.userName,className:`placeholder:text-formTextColor bg-background p-3 w-full rounded-full
              focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground ${l.userName&&"border-red-500 border"}`}),l.userName&&e.jsx("p",{className:"text-red-500 ms-5",children:l.userName})]}),e.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[e.jsxs("div",{className:"w-full lg:w-1/2",children:[e.jsx("input",{type:"email",name:"userEmail",id:"userEmail",onChange:r,value:s.userEmail,placeholder:"Your Email*",className:`placeholder:text-formTextColor bg-background p-3 w-full rounded-full
              focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground ${l.userEmail&&"border border-red-500"}`}),l.userEmail&&e.jsx("p",{className:"text-red-500 ms-5",children:l.userEmail})]}),e.jsxs("div",{className:"w-full lg:w-1/2",children:[e.jsx("input",{type:"text",name:"userPhone",id:"userPhone",onChange:r,value:s.userPhone,placeholder:"Your Number*",className:`placeholder:text-formTextColor bg-background p-3 w-full rounded-full
              focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground ${l.userPhone&&"border border-red-500"}`}),l.userPhone&&e.jsx("p",{className:"text-red-500 ms-5",children:l.userPhone})]})]}),e.jsx("div",{children:e.jsx("textarea",{name:"message",id:"message",cols:"30",rows:"10",onChange:r,value:s.message,placeholder:"Your Message Here...",className:`placeholder:text-formTextColor bg-background p-3 w-full rounded-3xl\r
            focus:outline-none focus:ring-4 focus:ring-stone-700 focus:ring-offset-2 focus:ring-offset-btnBackground`})}),e.jsx("div",{children:e.jsx("button",{className:"float-end btnHover",onClick:i,children:"Send Message"})})]})]})}function k(){return e.jsxs("div",{className:"container pr-4",children:[e.jsx(p,{}),e.jsx(N,{}),e.jsx(v,{}),e.jsx(P,{}),e.jsx(j,{})]})}export{k as default};