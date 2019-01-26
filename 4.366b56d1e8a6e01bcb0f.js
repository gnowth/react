(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{396:function(e,t,n){"use strict";n(10);var r=n(8),o=n.n(r),a=n(0),s=n.n(a),i=n(1),c=n.n(i),l=n(395),p=n(71);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class m extends c.a.PureComponent{constructor(){super(...arguments),u(this,"renderContext",e=>{const t=this.props.intlProviderProps&&e.intlProvider||c.a.Fragment,n=this.props.themeProviderProps&&e.themeProvider||c.a.Fragment;return c.a.createElement(l.a,d({},e.defaults,this.props.defaults),c.a.createElement(t,this.getPropsIntl(e),c.a.createElement(n,this.getPropsTheme(e),this.props.children)))})}getPropsIntl(e){return e.intlProvider?o()(this.props.intlProviderProps)?this.props.intlProviderProps(e.intlProviderProps):function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}({},e.intlProviderProps,this.props.intlProviderProps,{messages:Object.assign({},e.intlProviderProps.messages,this.props.intlProviderProps.messages)}):{}}getPropsTheme(e){if(!e.themeProvider)return{};return o()(this.props.themeProviderProps)?this.props.themeProviderProps(e.themeProviderProps):this.props.themeProviderProps}render(){return c.a.createElement(p.a,null,this.renderContext)}}m.propTypes={children:s.a.node.isRequired,defaults:s.a.shape({}),intlProviderProps:s.a.exact({locale:s.a.string,messages:s.a.objectOf(s.a.string)}),themeProviderProps:s.a.exact({theme:s.a.shape({}).isRequired})},m.defaultProps={defaults:{},intlProviderProps:{},themeProviderProps:void 0},t.a=m},399:function(e,t,n){"use strict";n.r(t);n(77);var r=n(3),o=n.n(r),a=n(61),s=n.n(a),i=n(0),c=n.n(i),l=n(2),p=n(40),d=n.n(p),u=n(1),m=n.n(u),h=n(396),g=n(89),v=n(49),P=n(9),b=n(98),f=n.n(b),y=n(99),w=n.n(y),j=n(14),E=Object(j.defineMessages)({not_found:{defaultMessage:"Page Not Found",description:"Page Not Found",id:"app.page.page_not_found"}});const O=o.a.div.withConfig({displayName:"pages__Screen",componentId:"sc-9qauot-0"})(["align-items:center;display:flex;height:100vh;justify-content:center;"]),R=e=>m.a.createElement(h.a,e,m.a.createElement(P.Switch,null,m.a.createElement(P.Route,{path:`${e.match.url}/changelog`,component:()=>m.a.createElement(g.a,{ratio:3,variant:"page_flat"},m.a.createElement(s.a,{className:"markdown-body",source:f.a}))}),m.a.createElement(P.Route,{path:`${e.match.url}/readme`,component:()=>m.a.createElement(g.a,{ratio:3,variant:"page_flat"},m.a.createElement(s.a,{className:"markdown-body",source:w.a}))}),m.a.createElement(P.Route,{path:`${e.match.url}/notfound`,component:()=>m.a.createElement(O,null,m.a.createElement(v.a,{locale:E.not_found,variant:"header"}))}),m.a.createElement(P.Redirect,{to:`${e.match.url}/notfound`,push:!0})));R.propTypes={locales:c.a.exact({not_found:l.a.locale.isRequired}),match:d.a.match.isRequired},R.defaultProps={locales:E};t.default=R},89:function(e,t,n){"use strict";var r=n(3),o=n.n(r),a=n(0),s=n.n(a),i=n(2),c=n(4);const l=o.a.div.withConfig({displayName:"Well__UIWell",componentId:"xiuhp8-0"})(["background-color:",";border:1px solid currentColor;border-radius:calc("," * "," * 0.5);color:",";padding:calc("," * "," * 2);"," ",""],Object(c.b)({name:"white"}),c.e,e=>e.ratio,Object(c.b)({name:"black"}),c.e,e=>e.ratio,Object(c.c)({name:"uiWell"}),e=>e.css);l.propTypes={css:i.a.css,ratio:s.a.number,variant:s.a.string},l.defaultProps={css:void 0,variant:"main",ratio:1},t.a=l},98:function(e,t){e.exports=""},99:function(e,t){e.exports="# [React](http://gnowth.github.io/react/) &middot; [![npm version](https://img.shields.io/npm/v/@entity/core.svg?style=flat)](https://www.npmjs.com/package/@entity/core) [![GitHub license](https://img.shields.io/npm/l/@entity/core.svg?style=flat)](https://github.com/gnowth/react/blob/master/LICENSE) [![Coverage Status](https://coveralls.io/repos/github/gnowth/react/badge.svg?branch=master)](https://coveralls.io/github/gnowth/react?branch=master) [![CircleCI Status](https://img.shields.io/circleci/project/github/gnowth/react.svg?style=flat&label=circle)](https://circleci.com/gh/gnowth/react/tree/master) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/gnowth/react/blob/master/CONTRIBUTING) [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](paypal.me/gnowth)\n\n## Getting started\n\n### Project setup\n\nMake sure to use node v10.15.0 and npm v6.4.1 or above\n\nInstall project dependencies:\n\n```\nnpx yarn install\n```\n\n#### Run development server\n\n```\nnpm start\n```\n\n#### Run linters\n\n```\nnpm run lint\n```\n\n#### Create production build\n\n```\nnpm run build\n```\n\n#### Serve dist directory\n\n```\nnpm run serve-dist\n```\n\n#### Run tests\n\n```\nnpm test\n```\n\n### Run storybook\n\n```\nnpm run storybook\n```\n\n### Storybook\n\nAn example of stories is found at `.storybook/stories.jsx`\n"}}]);
//# sourceMappingURL=4.366b56d1e8a6e01bcb0f.js.map