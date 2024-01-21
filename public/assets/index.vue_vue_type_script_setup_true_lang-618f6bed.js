import{d as V,a5 as q,o as n,c as d,a as r,A as K,t as M,u as e,F as E,s as oe,f as l,_ as p,C as N,i as H,v as b,w as C,q as le,l as Q,I as Y,Y as ne,m as J,k as X,r as x,b as _,p as z,e as ie,a3 as ce,ad as re,n as ue,Q as de,z as B,K as O,bd as pe,be as fe,P as ye}from"./index-bf4d935c.js";import{N as he}from"./Popconfirm-7e540a2b.js";import{N as _e}from"./LayoutSider-386aaeb1.js";function ke(L,w){let g;return(...v)=>{const i=()=>{clearTimeout(g),L(...v)};clearTimeout(g),g=setTimeout(i,w)}}const ve={class:"mb-2 text-xs text-neutral-400 font-bold"},me={class:"ml-1"},xe=["onClick"],be={class:"relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap"},ge={key:1},Se={key:0,class:"absolute z-10 flex visible right-1"},Ce=["onClick"],we={class:"p-1"},Ie={key:0,class:"p-1"},De={class:"p-1"},U=V({__name:"ListItem",props:{dataSources:null,title:null},emits:["update","delete","sticky","select"],setup(L,{emit:w}){const g=L,v=g.dataSources,i=q();async function f(o){w("select",o)}function P(o,a,u){u==null||u.stopPropagation(),o.isEdit=a}async function k(o,a){a==null||a.stopPropagation(),await i.updateGroupInfo({isSticky:!o.isSticky,groupId:o.uuid}),await i.queryMyGroup()}async function m(o,a){a==null||a.stopPropagation(),w("delete",o)}const y=ke(m,600);async function S(o){const{uuid:a,title:u}=o;o.isEdit=!1,await i.updateGroupInfo({groupId:a,title:u}),await i.queryMyGroup()}async function I(o,a){a==null||a.stopPropagation(),a.key==="Enter"&&S(o)}function A(o,a){a==null||a.stopPropagation(),S(o)}function G(o){return i.active===o}return(o,a)=>{var u;return n(),d(E,null,[r("p",ve,[K(M(g.title)+" ",1),r("span",me,"("+M((u=e(v))==null?void 0:u.length)+")",1)]),(n(!0),d(E,null,oe(e(v),s=>(n(),d("div",{key:`${s.uuid}`},[r("a",{class:le(["relative flex items-center gap-3 px-3 py-2.5 break-all border rounded-md cursor-pointer hover:bg-neutral-100 group dark:border-neutral-800 dark:hover:bg-[#24272e]",G(s.uuid)&&["border-[#3076FD]","bg-neutral-100","text-[#3076FD]","dark:bg-[#24272e]","dark:border-[#3076fd]","pr-20"]]),onClick:c=>f(s)},[r("span",null,[l(e(p),{icon:s.isSticky?"ri:pushpin-2-line":s.appId?"icon-park-outline:application-one":"ri:message-3-line"},null,8,["icon"])]),r("div",be,[s.isEdit?(n(),N(e(H),{key:0,value:s.title,"onUpdate:value":c=>s.title=c,size:"tiny",onKeypress:c=>I(s,c)},null,8,["value","onUpdate:value","onKeypress"])):(n(),d("span",ge,M(s.title),1))]),G(s.uuid)?(n(),d("div",Se,[s.isEdit?(n(),d("button",{key:0,class:"p-1",onClick:c=>A(s,c)},[l(e(p),{icon:"ri:save-line"})],8,Ce)):(n(),d(E,{key:1},[r("button",we,[l(e(p),{icon:s.isSticky?"ri:unpin-line":"ri:pushpin-line",onClick:c=>k(s,c)},null,8,["icon","onClick"])]),s.appId?b("",!0):(n(),d("button",Ie,[l(e(p),{icon:"ri:edit-line",onClick:c=>P(s,!0,c)},null,8,["onClick"])])),l(e(he),{placement:"bottom",onPositiveClick:c=>e(y)(s,c)},{trigger:C(()=>[r("button",De,[l(e(p),{icon:"ri:delete-bin-line"})])]),default:C(()=>[K(" "+M(o.$t("chat.deleteHistoryConfirm")),1)]),_:2},1032,["onPositiveClick"])],64))])):b("",!0)],10,xe)]))),128))],64)}}}),$e={class:"flex flex-col gap-3 text-sm"},Te={key:0,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},Ge=V({__name:"List",setup(L){const{isMobile:w}=Q(),g=Y(),v=ne(),i=J(),f=q(),P=X(),k=x(100),m=_(()=>f.groupList),y=_(()=>f.groupKeyWord);z(m,()=>k.value=k.value+1),z(y,()=>k.value=k.value+1),_(()=>P.isLogin);function S(t){const R=new Date(t).getTime()+8*60*60*1e3;return new Date(R).getTime()}const I=new Date().setHours(0,0,0,0),A=_(()=>m.value.filter(t=>y.value?t.title.includes(y.value)&&t.isSticky:t.isSticky)),G=_(()=>m.value.filter(t=>y.value?t.title.includes(y.value)&&!t.isSticky&&t.appId:!t.isSticky&&t.appId)),o=_(()=>m.value.filter(t=>y.value?t.title.includes(y.value)&&!t.isSticky&&!t.appId&&S(t.createdAt)>=I:!t.isSticky&&!t.appId&&S(t.createdAt)>=I)),a=_(()=>m.value.filter(t=>y.value?t.title.includes(y.value)&&!t.isSticky&&!t.appId&&S(t.createdAt)<I:!t.isSticky&&!t.appId&&S(t.createdAt)<I));async function u(t){const{uuid:D}=t;c(D)||(await f.setActiveGroup(D),v.name!=="Chat"&&g.push("/chat"),w.value&&i.setSiderCollapsed(!0))}async function s(t){event==null||event.stopPropagation(),await f.deleteGroup(t),await f.queryMyGroup(),w.value&&i.setSiderCollapsed(!0)}function c(t){return f.active===t}return ie(()=>{f.queryMyGroup()}),(t,D)=>(n(),N(e(ce),{class:"px-4"},{default:C(()=>[r("div",$e,[e(m).length?(n(),d(E,{key:1},[e(A).length?(n(),N(U,{key:1e3+k.value,title:"置顶","data-sources":e(A),onSelect:u,onDelete:s},null,8,["data-sources"])):b("",!0),e(G).length?(n(),N(U,{key:2e3+k.value,title:"应用分类组","data-sources":e(G),onSelect:u,onDelete:s},null,8,["data-sources"])):b("",!0),e(o).length?(n(),N(U,{key:3e3+k.value,title:"今天","data-sources":e(o),onSelect:u,onDelete:s},null,8,["data-sources"])):b("",!0),e(a).length?(n(),N(U,{key:4e3+k.value,title:"其他","data-sources":e(a),onSelect:u,onDelete:s},null,8,["data-sources"])):b("",!0)],64)):(n(),d("div",Te,[l(e(p),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),r("span",null,M(t.$t("common.noData")),1)]))])]),_:1}))}}),Me={class:"flex flex-col h-full flex-1 min-h-0"},Ae={key:0,class:"flex h-14 items-center space-x-2 bg-[#fafbfc] dark:bg-[#18181c]"},Be={class:"flex-1"},Ne={key:1,class:"flex h-14 items-center space-x-2 px-2 bg-[#fafbfc] dark:bg-[#18181c]"},Le={class:"flex-1"},Pe={class:"flex-1 min-h-0 pb-4 overflow-hidden"},Ke={class:"p-4 border-t dark:border-t-neutral-800 flex flex-col"},ze={key:0,class:"my-1 flex items-center select-none"},Ue={key:1,class:"my-1 flex items-center select-none"},Ee={class:"flex justify-between my-3"},Re=r("span",{class:"mr-2"},"公告栏",-1),Ve=r("span",{class:"mr-3"},"工作台",-1),qe={class:"flex justify-betweenx"},We=r("span",{class:"mr-3"},"清空会话",-1),He=V({__name:"index",setup(L){const w=re(),g=Y(),v=J(),i=q(),f=X();ue();const P=x(null),k=x(null),m=_(()=>f.userBalance),y=de(),S=_(()=>i==null?void 0:i.activeModelKeyDeductType);_(()=>i==null?void 0:i.activeModelKeyPrice);const I=x(0),A=x(0),G=x(0),o=x(0),a=x(!1),u=x(null);z(()=>f.userBalance.useModel3Token,(h,$)=>{var T;I.value=$||0,A.value=h||0,(T=P.value)==null||T.play()},{immediate:!0,flush:"post"}),z(()=>f.userBalance.useModel4Token,(h,$)=>{var T;G.value=$||0,o.value=h||0,(T=k.value)==null||T.play()},{immediate:!0,flush:"post"});const{isMobile:s}=Q(),c=x(!1),t=_(()=>v.siderCollapsed),D=x("");function R(h){D.value=h,i.setGroupKeyWord(h)}function W(){a.value=!1}function Z(){g.push("/role")}async function F(){try{c.value=!0,await i.addNewChatGroup(),await i.queryMyGroup(),c.value=!1,s.value&&v.setSiderCollapsed(!0)}catch{c.value=!1}}async function ee(){y.warning({title:"清空分组",content:"是否删除所有非置顶的对话组？",positiveText:"确认删除",negativeText:"再想想",onPositiveClick:async()=>{await i.delAllGroup()}})}function j(){v.setSiderCollapsed(!t.value)}function te(){a.value=!0,ye(()=>{var h;(h=u.value)==null||h.focus()})}const se=_(()=>s.value?{position:"fixed",zIndex:50}:{}),ae=_(()=>s.value?{paddingBottom:"env(safe-area-inset-bottom)"}:{});return z(s,h=>{v.setSiderCollapsed(h)},{immediate:!0,flush:"post"}),(h,$)=>(n(),d("div",null,[l(e(_e),{collapsed:e(t),"collapsed-width":0,width:260,"show-trigger":e(s)?!1:"arrow-circle","collapse-mode":"transform",position:"absolute",bordered:"",style:O(e(se)),onUpdateCollapsed:j},{default:C(()=>[r("div",{class:"flex flex-col h-full bg-[#fafbfc] dark:bg-[#18181c]",style:O(e(ae))},[r("main",Me,[a.value?(n(),d("div",Ae,[l(e(B),{type:"primary",loading:c.value,onClick:F},{default:C(()=>[l(e(p),{icon:"ion:add-outline",class:"text-xl"})]),_:1},8,["loading"]),r("div",Be,[l(e(H),{ref_key:"searchRef",ref:u,modelValue:D.value,"onUpdate:modelValue":$[0]||($[0]=T=>D.value=T),type:"text",placeholder:"对话历史查找",clearable:"",onBlur:W,onInput:R},null,8,["modelValue"])])])):b("",!0),a.value?b("",!0):(n(),d("div",Ne,[r("div",Le,[l(e(B),{type:"primary",style:{width:"100%"},loading:c.value,onClick:F},{default:C(()=>[K(" 新对话 "),l(e(p),{icon:"ion:add-outline",class:"text-xl"})]),_:1},8,["loading"])]),l(e(B),{onClick:te},{default:C(()=>[l(e(p),{icon:"icon-park-outline:search",class:"text-xl"})]),_:1})])),r("div",Pe,[l(Ge)]),r("div",Ke,[e(S)===1?(n(),d("div",ze,[l(e(p),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),K("普通额度： "+M(`${e(m).sumModel3Count||0} 积分`),1)])):b("",!0),e(S)===2?(n(),d("div",Ue,[l(e(p),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),K("高级额度： "+M(`${e(m).sumModel4Count||0} 积分`),1)])):b("",!0),r("div",Ee,[l(e(B),{type:"tertiary",size:"small",onClick:$[1]||($[1]=T=>e(w).updateNoticeDialog(!0))},{default:C(()=>[l(e(p),{icon:"mdi:notice-board",class:"ml-2 mr-2 text-sm"}),Re]),_:1}),l(e(B),{type:"tertiary",size:"small",onClick:Z},{default:C(()=>[l(e(p),{icon:"ri:emoji-sticker-line",class:"ml-2 mr-2 text-sm"}),Ve]),_:1})]),r("div",qe,[l(e(B),{type:"tertiary",size:"small",style:{width:"100%"},onClick:ee},{default:C(()=>[l(e(p),{icon:"ant-design:delete-outlined",class:"ml-2 mr-2 text-sm"}),We]),_:1})])])])],4)]),_:1},8,["collapsed","show-trigger","style"]),e(s)?pe((n(),d("div",{key:0,class:"fixed inset-0 z-40 bg-black/40",onClick:j},null,512)),[[fe,!e(t)]]):b("",!0)]))}});export{He as _};
