(this["webpackJsonpgomoku-app"]=this["webpackJsonpgomoku-app"]||[]).push([[0],{20:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t(12),a=t.n(o),i=t(2),c=t(5);t(20);function s(n,e,t,r,o){for(var a=n[e][t],i=e+r,c=t+o,s=0,u=[];n[i]&&n[i][c]===a;)u.push([i,c]),s++,i+=r,c+=o;return[s,u]}function u(n,e,t){if(null!==e||null!==t)return s(n,e,t,1,0)[0]+s(n,e,t,-1,0)[0]>=4?{current:n[e][t],chess:[].concat(Object(i.a)(s(n,e,t,1,0)[1]),Object(i.a)(s(n,e,t,-1,0)[1]),[[e,t]])}:s(n,e,t,0,1)[0]+s(n,e,t,0,-1)[0]>=4?{current:n[e][t],chess:[].concat(Object(i.a)(s(n,e,t,0,1)[1]),Object(i.a)(s(n,e,t,0,-1)[1]),[[e,t]])}:s(n,e,t,1,1)[0]+s(n,e,t,-1,-1)[0]>=4?{current:n[e][t],chess:[].concat(Object(i.a)(s(n,e,t,1,1)[1]),Object(i.a)(s(n,e,t,-1,-1)[1]),[[e,t]])}:s(n,e,t,1,-1)[0]+s(n,e,t,-1,1)[0]>=4?{current:n[e][t],chess:[].concat(Object(i.a)(s(n,e,t,1,-1)[1]),Object(i.a)(s(n,e,t,-1,1)[1]),[[e,t]])}:n.every((function(n){return n.every((function(n){return n}))}))?"draw":null}var d,l,b,p,m,f,x=t(3),h=t(4),j=t(1),g=h.a.div(d||(d=Object(x.a)(["\n  position: fixed;\n  inset: 0;\n  text-align: center;\n  padding: 5rem 1rem 0;\n  background: rgba(0, 0, 0, .8);\n  transition: all .2s;\n  z-index: 3;\n  user-select: none;\n  animation: zoom-in 1s;\n  ","\n\n  @keyframes zoom-in {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n\n  h2 {\n    color: #eee;\n    font-size: 8rem;\n  }\n\n  div {\n    margin: 10rem auto;\n    padding: 0 5rem;\n    display: flex;\n    justify-content: center;\n  }\n  button {\n    min-width: 12rem;\n    font-size: 2rem;\n    padding: 1rem 2rem;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    color: #111;\n    background: rgba(200, 200, 200, .6);\n    box-shadow: .2rem .2rem .2rem #333;\n    cursor: pointer;\n    transition: all .2s;\n\n    & + button {\n      margin-left: 10rem;\n    }\n    &:active {\n      transform: translate(.5rem, .8rem);\n      box-shadow: none;\n    }\n    &:hover {\n      background: #666;\n      color: #ccc;\n    }\n  }\n"])),(function(n){return!n.isShow&&"\n    display: none;\n  "})),O=function(n){var e=n.msg,t=n.showing,o=n.reset,a=Object(r.useState)(t),i=Object(c.a)(a,2),s=i[0],u=i[1];return Object(j.jsxs)(g,{isShow:s,children:[Object(j.jsx)("h2",{children:e}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:o,children:"Restart"}),Object(j.jsx)("button",{onClick:function(){return u(!1)},children:"Back"})]})]})},v=h.a.div(l||(l=Object(x.a)(["\n  box-sizing: border-box;\n  border: 1px solid #666;\n  border-radius: 2px;\n  width: 38rem;\n  height: 38rem;\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  background: #BB9966;\n  box-shadow: 6px 6px 10px rgba(51,51,51,0.6);\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    border: calc(1rem - .4px) solid #BB9966;\n    pointer-events: none;\n  }\n\n  i:hover {\n    opacity: .4;\n    ","\n\n    ","\n  }\n\n"])),(function(n){return n.hover&&"\n      background: linear-gradient(315deg, #dadada, #fff);\n      box-shadow: inset 16px 14px 10px 1px #000, -3px -3px 3px -2px #353232;\n    "}),(function(n){return!n.hover&&"\n      background: linear-gradient(315deg, #ccc, #111);\n      box-shadow: inset 16px 14px 10px 1px #ddd, -3px -3px 3px -2px #666;\n    "})),w=h.a.div(b||(b=Object(x.a)(["\n  box-sizing: border-box;\n  /* border: 1px solid #aaa; */\n  border-radius: 2px;\n  width: calc(100%/",");\n  height: calc(100%/",");\n  flex-shrink: 0;\n  flex-grow: 0;\n  cursor: pointer;\n  user-select: none;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    border-left: 1px solid #111;\n    transform: translateX(-50%);\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 50%;\n    border-top: 1px solid #111;\n    transform: translateY(-50%);\n  }\n\n  i.chess {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    width: 1.4rem;\n    height: 1.4rem;\n    z-index: 1;\n    \n\n    /* Black chess */\n    ","\n\n    /* White chess */\n    ","\n\n    /* Winner chess */\n    ","\n\n    @keyframes shine{\n      10% {\n        opacity: 1;\n        transition-property: left, top, opacity;\n        transition-duration: 0.7s, 0.7s, 0.15s;\n        transition-timing-function: ease;\n      }\n      100% {\n        opacity: 0;\n        transition-property: left, top, opacity;\n      }\n    }\n\n    &:active {\n      transform: translate(-60%, -60%);\n    }\n\n    &::after {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      border-radius: 50%;\n      ","\n    }\n  }\n"])),19,19,(function(n){var e=n.chess;return(1===e||6===e)&&"\n      background: linear-gradient(315deg, #dadada, #fff);\n      box-shadow: inset 16px 14px 10px 1px #000, -3px -3px 3px -2px #353232;\n      opacity: 1;\n    "}),(function(n){var e=n.chess;return(2===e||7===e)&&"\n      background: linear-gradient(315deg, #ccc, #111);\n      box-shadow: inset 16px 14px 10px 1px #ddd, -3px -3px 3px -2px #666;\n      opacity: 1;\n    "}),(function(n){var e=n.chess;return(6===e||7===e)&&"\n      animation: shine 1.5s infinite;\n    "}),(function(n){var e=n.mark,t=n.chess;return e&&!t&&"\n        content: '';\n        width: .5rem;\n        height: .5rem;\n        background: #111;\n      "})),k=function(n,e){return[4,10,16].includes(n+1)&&[4,10,16].includes(e+1)},y=function(n){var e=n.winner,t=n.winnerBoard,r=n.hover,o=n.squares,a=n.onClick;return Object(j.jsx)(v,{hover:r,children:(e?t:o).map((function(n,e){return n.map((function(n,t){return Object(j.jsx)(w,{chess:n,mark:k(e,t),onClick:function(){return a(e,t)},children:Object(j.jsx)("i",{className:"chess"})},"".concat(e,"-").concat(t))}))}))})},z=h.a.div(p||(p=Object(x.a)(["\n  width: 240px;\n  height: 38rem;\n  overflow: auto;\n  margin-left: 2rem;\n  padding-left: 1rem;\n\n  @media only screen and (max-width: 1080px) {\n    width: 90%;\n    text-align: center;\n    font-size: 2.5rem;\n    margin-top: 4rem;\n    button {\n      width: 80%;\n      font-size: 1.5rem;\n      padding: 1rem;\n    }\n  }\n"]))),B=h.a.button(m||(m=Object(x.a)(['\n  font-family: "Cyber", Futura, sans-serif;\n  font-size: 1.1rem;\n  width: 80%;\n  padding: .3rem .4rem;\n  margin: .4rem .2rem 0;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  color: #111;\n  background: #ccc;\n  box-shadow: .1rem .1rem .1rem #999;\n  transition: .2s;\n  cursor: pointer;\n  user-select: none;\n  z-index: 1;\n\n  &:active {\n    transform: translateY(.2rem);\n    box-shadow: none;\n    transform: scale(1.05);\n  }\n\n  ',"\n\n  &:hover {\n    background: #666;\n    color: #ccc;\n  }\n"])),(function(n){return n.active&&"\n    font-weight: 900;\n    background: #666;\n    color: #eee;\n    box-shadow: .1rem .1rem .1rem #333;\n    transform: scale(1.05);\n  "})),q=function(n){var e=n.status,t=n.stepNumber,o=n.history,a=n.handleMove,i=Object(r.useMemo)((function(){return o.map((function(n,e){return Object(j.jsx)("li",{children:Object(j.jsx)(B,{active:t===e,onClick:function(){return a(e)},children:e?"Go to move #"+e:"Go to game start"})},"#".concat(e))}))}),[o,t,a]);return Object(j.jsxs)(z,{children:[Object(j.jsx)("div",{children:e}),Object(j.jsxs)("div",{children:["current step: ",t]}),Object(j.jsx)("ul",{children:i})]})},C=h.a.footer(f||(f=Object(x.a)(["\n  position: relative;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  letter-spacing: 0.05rem;\n  background: transparent;\n  text-align: center;\n  padding: 0.1rem 0.5rem;\n  margin-top: 4rem;\n  user-select: none;\n  z-index: -1;\n\n  span {\n    display: block;\n    font-size: 1.5rem;\n    font-weight: 300;\n    margin-bottom: 0.7rem;\n    margin-top: 0.2rem;\n  }\n\n  a {\n    color: #6a89cc;\n    text-decoration: none;\n    font-style: italic;\n  }\n"]))),S=function(){return Object(j.jsx)(C,{children:Object(j.jsxs)("span",{children:["\xa9 copyright ","2021"," by ",Object(j.jsx)("a",{href:"mailto:".concat("coolizz1010@gmail.com"),children:"Enzo Luo"})]})})},N=function(){var n=Object(r.useState)((function(){return[{squares:Array(19).fill().map((function(){return Array(19).fill(0)})),coordinate:[null,null]}]})),e=Object(c.a)(n,2),t=e[0],o=e[1],a=Object(r.useState)(!0),s=Object(c.a)(a,2),d=s[0],l=s[1],b=Object(r.useState)(0),p=Object(c.a)(b,2),m=p[0],f=p[1],x=Object(r.useMemo)((function(){return t[m]}),[t,m]),h=Object(r.useMemo)((function(){return u.apply(void 0,[x.squares].concat(Object(i.a)(x.coordinate)))}),[x]),g=Object(r.useMemo)((function(){return"draw"===h?"draw":h?(l(null),"Winner is ".concat(1===h.current?"Black":"White")):"Next player: "+(d?"Black":"White")}),[h,d]),v=Object(r.useMemo)((function(){if(h&&"draw"!==h){var n=JSON.parse(JSON.stringify(x.squares));return h.chess.forEach((function(e){var t=Object(c.a)(e,2),r=t[0],o=t[1];return n[r][o]=n[r][o]+5})),n}}),[h,x]),w=Object(r.useCallback)((function(n,e){if(null!==d&&!x.squares[n][e]){var r=t.slice(0,m+1),a=JSON.parse(JSON.stringify(x.squares));a[n][e]=d?1:2,o([].concat(Object(i.a)(r),[{squares:a,coordinate:[n,e]}])),f(r.length),l(!d)}}),[t,d,x.squares,m]),k=Object(r.useCallback)((function(n){f(n),l(n%2===0)}),[f,l]),z=Object(r.useCallback)((function(){return Object(j.jsx)(O,{msg:g,showing:!0,reset:function(){f(0),o(t.slice(0,1)),l(!0)}})}),[g,t]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"game",children:[h&&z(),Object(j.jsx)(y,{winner:h,winnerBoard:v,hover:d,squares:x.squares,onClick:w}),Object(j.jsx)(q,{status:g,stepNumber:m,history:t,handleMove:k})]}),Object(j.jsx)(S,{})]})};a.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0aafa248.chunk.js.map