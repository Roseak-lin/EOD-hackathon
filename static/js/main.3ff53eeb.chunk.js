(this["webpackJsonpeod-challenge"]=this["webpackJsonpeod-challenge"]||[]).push([[0],{33:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Home}));var C_Users_rosea_Documents_Github_EOD_hackathon_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),C_Users_rosea_Documents_Github_EOD_hackathon_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),C_Users_rosea_Documents_Github_EOD_hackathon_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20),C_Users_rosea_Documents_Github_EOD_hackathon_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(25),C_Users_rosea_Documents_Github_EOD_hackathon_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(24),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),jquery__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),jquery__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__),react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(15),react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(48),_Images_Chlorophyll_Ch_2020_1_1_png__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(34),_Images_Chlorophyll_Ch_2020_4_1_png__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(35),_Images_Chlorophyll_Ch_2020_7_1_png__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(36),_Images_TotalSuspendedMatter_Ts_2020_1_1_png__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(37),_Images_TotalSuspendedMatter_Ts_2020_4_1_png__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(38),_Images_TotalSuspendedMatter_Ts_2020_7_1_png__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(39),_Images_Nitrogen_Ni_2020_1_1_png__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(40),_Images_Nitrogen_Ni_2020_4_1_png__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(41),_Images_Nitrogen_Ni_2020_7_1_png__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(42),_Images_Carbon_Monoxide_Co_2020_1_1_png__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(43),_Images_Carbon_Monoxide_Co_2020_4_1_png__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(44),_Images_Carbon_Monoxide_Co_2020_7_1_png__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(45),_Map__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(46),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(6),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__),active=0,Ch1=_Images_Chlorophyll_Ch_2020_1_1_png__WEBPACK_IMPORTED_MODULE_9__.a,Ch2=_Images_Chlorophyll_Ch_2020_4_1_png__WEBPACK_IMPORTED_MODULE_10__.a,Ch3=_Images_Chlorophyll_Ch_2020_7_1_png__WEBPACK_IMPORTED_MODULE_11__.a,Ts1=_Images_TotalSuspendedMatter_Ts_2020_1_1_png__WEBPACK_IMPORTED_MODULE_12__.a,Ts2=_Images_TotalSuspendedMatter_Ts_2020_4_1_png__WEBPACK_IMPORTED_MODULE_13__.a,Ts3=_Images_TotalSuspendedMatter_Ts_2020_7_1_png__WEBPACK_IMPORTED_MODULE_14__.a,Ni1=_Images_Nitrogen_Ni_2020_1_1_png__WEBPACK_IMPORTED_MODULE_15__.a,Ni2=_Images_Nitrogen_Ni_2020_4_1_png__WEBPACK_IMPORTED_MODULE_16__.a,Ni3=_Images_Nitrogen_Ni_2020_7_1_png__WEBPACK_IMPORTED_MODULE_17__.a,Co1=_Images_Carbon_Monoxide_Co_2020_1_1_png__WEBPACK_IMPORTED_MODULE_18__.a,Co2=_Images_Carbon_Monoxide_Co_2020_4_1_png__WEBPACK_IMPORTED_MODULE_19__.a,Co3=_Images_Carbon_Monoxide_Co_2020_7_1_png__WEBPACK_IMPORTED_MODULE_20__.a,Home=function(_React$Component){Object(C_Users_rosea_Documents_Github_EOD_hackathon_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Home,_React$Component);var _super=Object(C_Users_rosea_Documents_Github_EOD_hackathon_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Home);function Home(_){var e;return Object(C_Users_rosea_Documents_Github_EOD_hackathon_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Home),(e=_super.call(this,_)).state={foreground:Ts1,background:Ni1,i1:"Total Suspended Matter",i2:"NO2",scale_1:"https://eodashboard.org/data/trilateral/WaterQuality_legend_trilateral_tsm.png",scale_2:"https://maps.s5p-pal.com/static/images/colorbartropno2.svg"},e.changeIndicator=e.changeIndicator.bind(Object(C_Users_rosea_Documents_Github_EOD_hackathon_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(C_Users_rosea_Documents_Github_EOD_hackathon_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Home,[{key:"componentDidMount",value:function(){for(var _=this,e=function(e){jquery__WEBPACK_IMPORTED_MODULE_6___default()(".date-btn").eq(e).on("click",(function(){_.changeMap(e)}))},t=0;t<3;t++)e(t)}},{key:"changeMap",value:function changeMap(index){jquery__WEBPACK_IMPORTED_MODULE_6___default()(".date-btn").eq(active).attr("class","date-btn"),jquery__WEBPACK_IMPORTED_MODULE_6___default()(".date-btn").eq(index).attr("class","date-btn selected"),active=index;var foreground=this.state.foreground.substr(28,2),background=this.state.background.substr(28,2);switch(console.log(foreground+" | "+background),index){case 0:this.setState({background:eval(background+"1"),foreground:eval(foreground+"1")});break;case 1:this.setState({background:eval(background+"2"),foreground:eval(foreground+"2")});break;case 2:this.setState({background:eval(background+"3"),foreground:eval(foreground+"3")})}}},{key:"changeIndicator",value:function changeIndicator(key){var stringKey=String(key);stringKey.endsWith("1")?stringKey.startsWith("a")?this.setState({i1:"Total Suspended Matter",foreground:eval("Ts"+(active+1)),scale_1:"https://eodashboard.org/data/trilateral/WaterQuality_legend_trilateral_tsm.png"}):this.setState({i1:"Chlorophyll-a concentration",foreground:eval("Ch"+(active+1)),scale_1:"https://eodashboard.org/data/trilateral/WaterQuality_legend_trilateral.png"}):stringKey.startsWith("a")?this.setState({i2:"NO2",background:eval("Ni"+(active+1)),scale_2:"https://maps.s5p-pal.com/static/images/colorbartropno2.svg"}):this.setState({i2:"Carbon Monoxide Concentration",background:eval("Co"+(active+1)),scale_2:"https://maps.s5p-pal.com/static/images/colorbarco.svg"})}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"header",children:"New York, USA"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__.a,{xs:3,id:"left",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"date-btn selected",children:"2020-01-01"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"date-btn",children:"2020-04-01"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"date-btn",children:"2020-07-01"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__.a,{id:"right",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Map__WEBPACK_IMPORTED_MODULE_21__.a,{background:this.state.background,foreground:this.state.foreground,changeIndicator:this.changeIndicator,i1:this.state.i1,i2:this.state.i2,scale_1:this.state.scale_1,scale_2:this.state.scale_2})})]})]})}}]),Home}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component)},34:function(_,e,t){"use strict";e.a=t.p+"static/media/Ch_2020-1-1.b8a0c0b3.png"},35:function(_,e,t){"use strict";e.a=t.p+"static/media/Ch_2020-4-1.480089ab.png"},36:function(_,e,t){"use strict";e.a=t.p+"static/media/Ch_2020-7-1.c701d812.png"},37:function(_,e,t){"use strict";e.a=t.p+"static/media/Ts_2020-1-1.67ca9cff.png"},38:function(_,e,t){"use strict";e.a=t.p+"static/media/Ts_2020-4-1.f4bd2982.png"},39:function(_,e,t){"use strict";e.a=t.p+"static/media/Ts_2020-7-1.dfcaf74f.png"},40:function(_,e,t){"use strict";e.a=t.p+"static/media/Ni_2020-1-1.bd7ccae1.png"},41:function(_,e,t){"use strict";e.a=t.p+"static/media/Ni_2020-4-1.3077c828.png"},42:function(_,e,t){"use strict";e.a=t.p+"static/media/Ni_2020-7-1.b7c33daf.png"},43:function(_,e,t){"use strict";e.a=t.p+"static/media/Co_2020-1-1.34930e70.png"},44:function(_,e,t){"use strict";e.a=t.p+"static/media/Co_2020-4-1.f2647d70.png"},45:function(_,e,t){"use strict";e.a=t.p+"static/media/Co_2020-7-1.2b2ca9b8.png"},46:function(_,e,t){"use strict";t.d(e,"a",(function(){return g}));var a=t(18),r=t(19),n=t(25),s=t(24),c=t(0),i=t.n(c),o=t(8),u=t.n(o),d=t(49),l=t(32),E=t(10),O=t(31),b=t(47),p=t(6),g=function(_){Object(n.a)(t,_);var e=Object(s.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){u()(".slider").on("mousemove",(function(_){var e=_.target.value/100*1168-2-(_.target.value/100*1168-584)/584-(_.target.value/100*1168-584)/584*10;u()(".foreground-img").css("width","".concat(e,"px")),u()("#break").css("left","".concat(e,"px"))})),u()(".foreground-img").css("left","calc(50% - ".concat(parseInt(u()(".background-img").css("width"))/2,"px)"))}},{key:"render",value:function(){var _=this.props,e=_.foreground,t=_.background,a=_.i1,r=_.i2,n=_.changeIndicator,s=_.scale_1,c=_.scale_2;return Object(p.jsxs)("div",{children:[Object(p.jsxs)(b.a,{className:"justify-content-between",children:[Object(p.jsx)(O.a,{children:Object(p.jsxs)(l.a,{title:a,id:"indicator-1",variant:"outline-dark",onSelect:function(_){n(_)},children:[Object(p.jsx)(E.a.Item,{eventKey:"a1",children:"Total Suspended Matter"}),Object(p.jsx)(E.a.Item,{eventKey:"b1",children:"Chlorophyll-a concentration"})]})}),Object(p.jsx)(O.a,{children:Object(p.jsxs)(l.a,{title:r,id:"indicator-2",variant:"outline-dark",onSelect:function(_){n(_)},children:[Object(p.jsx)(E.a.Item,{eventKey:"a2",children:"NO2"}),Object(p.jsx)(E.a.Item,{eventKey:"b2",children:"Carbon Monoxide Concentration"})]})})]}),Object(p.jsx)("img",{id:"legend_1",src:"".concat(s),alt:"img1"}),Object(p.jsx)("img",{id:"legend_2",src:"".concat(c),alt:"img2"}),Object(p.jsx)("div",{className:"background-img",style:{backgroundImage:"url(".concat(t,")")},children:Object(p.jsx)(d.a.Control,{className:"slider",type:"range"})}),Object(p.jsx)("div",{className:"foreground-img",style:{backgroundImage:"url(".concat(e,")")},children:Object(p.jsx)("div",{id:"break"})})]})}}]),t}(i.a.Component)},54:function(_,e,t){},61:function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),n=t(17),s=t.n(n),c=(t(54),t(33)),i=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,65)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,n=e.getLCP,s=e.getTTFB;t(_),a(_),r(_),n(_),s(_)}))},o=(t(60),t(6));s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(c.a,{})}),document.getElementById("root")),i()}},[[61,1,2]]]);
//# sourceMappingURL=main.3ff53eeb.chunk.js.map