"use strict";(self.webpackChunksocial_ts=self.webpackChunksocial_ts||[]).push([[340],{7340:function(e,s,a){a.r(s),a.d(s,{default:function(){return T}});a(2791);var i=a(2177),n=a(97),t=a(8281),l=a(2932),c="Dialogs_dialogs__vAzAs",r="Dialogs_dialogsItem__r3rrJ",d="Dialogs_messages__AB6o2",g="Dialogs_item__Agl4i",o="Dialogs_messageBlock__n0u1V",u="Message_message__awEiV",_="Message_avatar__xZtwQ",m="Message_bubble__kqiwX",x="Message_angle__mQ8e9",h="Message_text__F48aC",v="Message_time__afWWl",j=a(4353),f=a(184),M=function(e){var s=(new Date).getHours(),a=function(){var e=(new Date).getMinutes();return e<10?"0"+e:e}();return(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("img",{src:j,alt:"avatar",className:_}),(0,f.jsx)("div",{className:x}),(0,f.jsx)("div",{className:m,children:(0,f.jsx)("div",{className:h,children:e.message})}),(0,f.jsx)("div",{className:v,children:"".concat(s,":").concat(a)})]})},N="DialogItem_item__qLxTI",w="DialogItem_block__TltuG",D="DialogItem_avatar__RxR40",b="DialogItem_active__wFFhz",A="DialogItem_inactive__apk8I",k=a(2426),p=function(e){return(0,f.jsx)("div",{className:N,children:(0,f.jsx)(k.OL,{to:"/dialogues/".concat(e.id),className:function(e){return e?b:A},children:(0,f.jsxs)("div",{className:w,children:[(0,f.jsx)("img",{src:j,className:D,alt:"avatar"}),e.name]})})})},I=a(9723),P=a(5705),q=a(7568),C=a(121),F=a(310),R=function(e){var s=F.Ry({newMessage:F.Z_().max(3e3,"The message is too long").required("required")});return(0,f.jsx)("div",{children:(0,f.jsx)(P.J9,{initialValues:{newMessage:""},validationSchema:s,onSubmit:function(s,a){var i=a.resetForm;!function(s){e.sendMessage(s.newMessage)}(s),i({values:{newMessage:""}})},children:(0,f.jsxs)(P.l0,{children:[(0,f.jsx)(C.N,{control:"textarea",name:"newMessage",placeholder:"add a message ..."}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{className:q.Z.button,type:"submit",children:"Send"})})]})})})},S=function(e){var s=e.dialogsPage.dialogs.map((function(e,s){return(0,f.jsx)(p,{id:e.id,name:e.name},s)})),a=e.dialogsPage.messages.map((function(e,s){return(0,f.jsx)(M,{message:e.message,id:e.id},s)}));return e.isAuth?(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("div",{className:r,children:s}),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("div",{className:d,children:(0,f.jsx)("div",{className:g,children:a})}),(0,f.jsx)(R,{sendMessage:function(s){e.sendMessage(s)}})]})]}):(0,f.jsx)(I.l_,{to:"/login"})},T=(0,n.qC)(l.D,(0,i.$j)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(s){e((0,t.d)(s))}}})))((function(e){return(0,f.jsx)(S,{dialogsPage:e.dialogsPage,sendMessage:e.sendMessage,isAuth:e.isAuth})}))}}]);
//# sourceMappingURL=340.a007f9b0.chunk.js.map