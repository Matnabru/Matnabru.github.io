(this["webpackJsonptasklist-empty"]=this["webpackJsonptasklist-empty"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),l=a(7),r=a.n(l),o=(a(13),a(8)),s=a(5),d=a(2),i=a(0),b=function(e){var t=e.color,a=e.hoverColor,c=e.text,n=e.onClick;return Object(i.jsx)("button",{onClick:n,className:t+" "+a+" ml-auto px-8 py-3 rounded",children:c})};b.defaultProps={color:"bg-teal-400",hoverColor:"hover:bg-teal-500"};var j=b,u=function(e){var t=e.onAdd,a=e.text,c=e.showAdd;return Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("h1",{className:"text-center text-4xl",children:a}),Object(i.jsx)(j,{onClick:t,text:c?"Close":"Show"})]})},x=a(17),m=function(e){var t=e.task,a=e.onDelete,c=e.onToggle;return Object(i.jsxs)("div",{onDoubleClick:function(){return c(t.id)},className:"".concat(!0===t.reminder?"border-l-4 border-teal-300":""," bg-gray-100 m-1 p-2 pl-4"),children:[Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("h3",{className:"text-xl",children:t.text}),Object(i.jsx)("a",{className:"ml-auto mr-3 mt-2",href:"#",children:Object(i.jsx)(x.a,{onClick:function(){return a(t.id)},style:{color:"teal"}})})]}),Object(i.jsx)("p",{className:"text-base",children:t.day})]})},h=function(e){var t=e.tasks,a=e.onDelete,c=e.onToggle;return Object(i.jsx)("div",{className:"mt-3",children:t.map((function(e){return Object(i.jsx)(m,{task:e,onDelete:a,onToggle:c},e.id)}))})},O=function(e){var t=e.onAdd,a=Object(c.useState)(""),n=Object(d.a)(a,2),l=n[0],r=n[1],o=Object(c.useState)(""),s=Object(d.a)(o,2),b=s[0],j=s[1],u=Object(c.useState)(!1),x=Object(d.a)(u,2),m=x[0],h=x[1];return Object(i.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),l?(t({text:l,day:b,reminder:m}),r(""),j(""),h(!1)):alert("Please add a task")},children:[Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{className:"text-2xl",htmlFor:"",children:"Task"}),Object(i.jsx)("input",{value:l,onChange:function(e){return r(e.target.value)},className:"bg-gray-200 m-1 p-2 rounded border-2 border-black",placeholder:"Add Task",type:"text"})]}),Object(i.jsxs)("div",{className:"flex flex-col",children:[Object(i.jsx)("label",{className:"text-2xl",htmlFor:"",children:"Day and Time"}),Object(i.jsx)("input",{value:b,onChange:function(e){return j(e.target.value)},className:"bg-gray-200 m-1 p-2 rounded border-2 border-black",placeholder:"Add day and time",type:"text"})]}),Object(i.jsxs)("div",{className:"flex flex-wrap",children:[Object(i.jsx)("label",{className:"text-2xl",htmlFor:"",children:"Set Reminder"}),Object(i.jsx)("input",{checked:m,value:m,onChange:function(e){return h(e.currentTarget.checked)},className:"ml-5 mt-3 form-checkbox",type:"checkbox"})]}),Object(i.jsx)("input",{className:"bg-teal-400 m-3 p-1 h-10 w-full rounded hover:bg-teal-500",value:"Save task",type:"submit"})]})};var f=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],l=t[1],r=Object(c.useState)(JSON.parse(localStorage.getItem("localStorage"))||[{id:1,text:"Dentist",day:"Feb 5th at 2:30 pm",reminder:!1},{id:2,text:"Pog Champ",day:"May 23th at 3:30 pm",reminder:!0}]),b=Object(d.a)(r,2),j=b[0],x=b[1];return n.a.useEffect((function(){localStorage.setItem("localStorage",JSON.stringify(j))}),[j]),Object(i.jsxs)("div",{className:"border-2  m-20 p-10",children:[Object(i.jsx)(u,{showAdd:a,onAdd:function(){return l(!a)},text:"Task Tracker"}),!1===a?"":Object(i.jsx)(O,{onAdd:function(e){console.log(e);var t=Math.floor(1e4*Math.random())+1,a=Object(s.a)({id:t},e);x([].concat(Object(o.a)(j),[a])),console.log(j)}}),j.length>0?Object(i.jsx)(h,{tasks:j,onDelete:function(e){console.log("delete ",e),x(j.filter((function(t){return e!==t.id}))),console.log(j)},onToggle:function(e){x(j.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{reminder:!t.reminder}):t})))}}):Object(i.jsx)("h1",{className:"mt-5 text-xl",children:"No tasks to show!"})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),l(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.5d3e361f.chunk.js.map