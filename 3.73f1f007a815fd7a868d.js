(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{146:function(e,t,r){"use strict";var n=r(147)(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},147:function(e,t,r){var n=r(106),o=r(88);e.exports=function(e){return function(t,r){var a,i,s=String(o(t)),l=n(r),p=s.length;return l<0||l>=p?e?"":void 0:(a=s.charCodeAt(l))<55296||a>56319||l+1===p||(i=s.charCodeAt(l+1))<56320||i>57343?e?s.charAt(l):a:e?s.slice(l,l+2):i-56320+(a-55296<<10)+65536}}},396:function(e,t,r){"use strict";r(10);var n=r(8),o=r.n(n),a=r(0),i=r.n(a),s=r(1),l=r.n(s),p=r(395),c=r(71);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class m extends l.a.PureComponent{constructor(){super(...arguments),d(this,"renderContext",e=>{const t=this.props.intlProviderProps&&e.intlProvider||l.a.Fragment,r=this.props.themeProviderProps&&e.themeProvider||l.a.Fragment;return l.a.createElement(p.a,u({},e.defaults,this.props.defaults),l.a.createElement(t,this.getPropsIntl(e),l.a.createElement(r,this.getPropsTheme(e),this.props.children)))})}getPropsIntl(e){return e.intlProvider?o()(this.props.intlProviderProps)?this.props.intlProviderProps(e.intlProviderProps):function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){d(e,t,r[t])})}return e}({},e.intlProviderProps,this.props.intlProviderProps,{messages:Object.assign({},e.intlProviderProps.messages,this.props.intlProviderProps.messages)}):{}}getPropsTheme(e){if(!e.themeProvider)return{};return o()(this.props.themeProviderProps)?this.props.themeProviderProps(e.themeProviderProps):this.props.themeProviderProps}render(){return l.a.createElement(c.a,null,this.renderContext)}}m.propTypes={children:i.a.node.isRequired,defaults:i.a.shape({}),intlProviderProps:i.a.exact({locale:i.a.string,messages:i.a.objectOf(i.a.string)}),themeProviderProps:i.a.exact({theme:i.a.shape({}).isRequired})},m.defaultProps={defaults:{},intlProviderProps:{},themeProviderProps:void 0},t.a=m},398:function(e,t,r){"use strict";r.r(t);r(77);var n=r(0),o=r.n(n),a=r(40),i=r.n(a),s=r(1),l=r.n(s),p=r(2),c=r(711),u=r(89);const d=e=>{const t=e.component,r=e.queryComponent;return l.a.createElement(t,{ratio:e.ratio,variant:e.variant},l.a.createElement(r,e.queryComponentProps))};d.propTypes={component:p.a.component,queryComponent:p.a.component.isRequired,queryComponentProps:o.a.shape({action:o.a.func.isRequired,component:p.a.component.isRequired}).isRequired,ratio:o.a.number,variant:o.a.string},d.defaultProps={component:u.a,ratio:2,variant:"page"};var m=Object(c.a)({queryComponent:["entityView_query","component_query"]})(d),f=r(396),h=r(9),y=r(62),b=(r(10),r(7)),v=r(6),g=r.n(v),P=r(5),O=r(28),C=r.n(O);function R(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const w=l.a.createContext({}),E=w.Provider,j=w.Consumer,_=e=>(function(t){return l.a.createElement(x,null,r=>l.a.createElement(e,q({},r,t)))}),x=j,I=e=>{let t=e.children,r=R(e,["children"]);return l.a.createElement(E,{value:r},t)};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}I.propTypes=C()({children:o.a.node.isRequired,formDisabled:o.a.bool,formErrors:g.a.list.isRequired,formField:b.a.field.isRequired,formIndex:o.a.number,formInitialValue:g.a.map,formName:p.a.string,formNameMapper:o.a.shape({}),formOnChange:o.a.func.isRequired,formReadOnly:o.a.bool,formValue:o.a.oneOfType([g.a.map,g.a.list]).isRequired}),I.defaultProps={formDisabled:!1,formIndex:void 0,formInitialValue:null,formName:void 0,formNameMapper:{},formReadOnly:!1};class S extends l.a.Component{constructor(){var e,t,r;super(...arguments),r=(e=>{let t=e.target;return this.props.onChange({target:t})}),(t="handleChange")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}getProps(){return{formDisabled:this.props.disabled,formErrors:this.props.errors,formField:this.props.field,formIndex:this.props.index,formInitialValue:this.props.initialValue,formName:this.props.name,formNameMapper:this.props.nameMapper,formOnChange:this.handleChange,formReadOnly:this.props.readOnly,formValue:this.props.value}}render(){const e=this.props.component;return l.a.createElement(I,this.getProps(),l.a.createElement(e,F({className:this.props.className},this.props.componentProps),this.props.children))}}S.propTypes={children:o.a.node.isRequired,component:p.a.component,componentProps:o.a.shape({}),css:p.a.css,disabled:o.a.bool,errors:g.a.list.isRequired,field:b.a.entityField.isRequired,index:o.a.number,initialValue:g.a.map,name:o.a.oneOfType([o.a.string.isRequired,o.a.arrayOf(o.a.string.isRequired).isRequired]),nameMapper:o.a.shape({}),onChange:o.a.func.isRequired,readOnly:o.a.bool,value:g.a.map.isRequired},S.defaultProps={component:"div",componentProps:{},css:void 0,disabled:!1,index:void 0,initialValue:void 0,name:void 0,nameMapper:{},readOnly:!1};var D=S,k=r(11),A=r.n(k),T=r(8),V=r.n(T),M=r(22),N=r.n(M),L=r(709);r(234);function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B=function(e){class t extends l.a.Component{constructor(){super(...arguments),H(this,"handleChange",e=>{let t=e.target;const r=t.getAttribute?t.getAttribute("index")||void 0:t.index,n=this.getProps(),o=this.props.willChangeRecord({value:n.value,field:n.field,nextRecord:t.name?this.props.formValue.setIn(void 0===r?[t.name]:[t.name,r],n.field.clean(t.value)):this.props.formValue.merge(t.value),nextValue:t.value,record:this.props.formValue});return this.props.formOnChange({target:{index:this.props.formIndex,name:this.props.formName,value:o}})}),H(this,"handleChangeArray",e=>{let t=e.target;return this.props.formOnChange({target:{array:!0,name:this.props.formName,value:t.value}})})}getProps(){const e=this.props.formField.getField({name:this.props.name});return Object.assign({},this.props,{field:e,disabled:this.props.disabled,errors:this.props.formField.getErrors(this.props.formErrors,{name:this.props.name}),index:this.props.index,name:this.props.name,onChange:this.props.array?this.handleChangeArray:this.handleChange,readOnly:this.props.readOnly,initialValue:this.props.formInitialValue,options:e.getOptions(),value:this.props.formField.getValue(this.props.formValue,{name:this.props.name})})}renderComponent(t){return l.a.createElement(e,t)}renderQuery(e){const t=this.props.queryComponent;return l.a.createElement(t,{action:t=>{let r=t.search;return e.field.entity.duck.get({params:Object(P.Map)({search:r}).merge(this.props.filterParams)})}},t=>this.renderComponent(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){H(e,t,r[t])})}return e}({},e,{onInputChange:t.onInputChange,processing:t.processing,processingDidFail:t.processingDidFail,options:t.value})))}render(){return this.props.apiOptions?this.renderQuery(this.getProps()):this.renderComponent(this.getProps())}}return t.propTypes={apiOptions:o.a.bool,array:o.a.bool,disabled:o.a.bool,filterParams:g.a.map,formErrors:g.a.list.isRequired,formField:b.a.entityField.isRequired,formOnChange:o.a.func.isRequired,formIndex:o.a.number,formInitialValue:g.a.map,formName:p.a.string,formValue:g.a.map.isRequired,index:o.a.number,name:p.a.string,queryComponent:p.a.isRequiredIf("apiOptions",p.a.component),readOnly:o.a.bool,willChangeRecord:o.a.func},t.defaultProps={apiOptions:!1,array:!1,disabled:void 0,filterParams:Object(P.Map)(),formIndex:void 0,formInitialValue:void 0,formName:void 0,index:void 0,name:void 0,queryComponent:void 0,readOnly:void 0,willChangeRecord:e=>{return e.nextRecord}},A()(_,Object(c.a)({queryComponent:["entityForm_query","component_query"]}))(t)};function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}class W extends l.a.Component{getProps(){return Object.assign({name:this.props.name,onChange:this.props.onChange,value:this.props.value},!N()(this.props.component)&&{errors:this.props.errors,field:this.props.field,initialValue:this.props.initialValue,onInputChange:this.props.onInputChange,options:this.props.options,processing:this.props.processing,processingDidFail:this.props.processingDidFail},V()(this.props.componentProps)?this.props.componentProps(this.props):this.props.componentProps)}renderAsComponent(e){const t=this.props.wrapperComponent||l.a.Fragment,r=this.props.wrapperComponent?Object.assign({},e,this.props.wrapperComponentProps):{};return l.a.createElement(t,r,this.props.many?this.renderComponentArray(e):this.renderComponent(e))}renderComponent(e){const t=this.props.component;return l.a.createElement(t,e)}renderComponentArray(e){const t=this.props.component;return e.value.map((r,n)=>l.a.createElement(t,U({},e,{errors:e.field.getErrorsArray(e.errors,{index:n}),index:n,key:e.field.getId(r)||n,value:r})))}render(){return this.props.children?this.props.children(this.getProps()):this.renderAsComponent(this.getProps())}}W.propTypes={children:o.a.func,component:p.a.isRequiredIfNot("children",p.a.component),componentProps:o.a.oneOfType([o.a.shape({}),o.a.func]),errors:g.a.list.isRequired,field:b.a.field.isRequired,initialValue:o.a.any,many:p.a.notRequiredIf("children",o.a.bool),name:p.a.string,onChange:o.a.func.isRequired,onInputChange:o.a.func,options:g.a.list,processing:o.a.bool,processingDidFail:o.a.bool,value:o.a.any,wrapperComponent:p.a.isRequiredIf("wrapperComponentProps",p.a.component),wrapperComponentProps:o.a.shape({})},W.defaultProps={children:void 0,component:void 0,componentProps:{},initialValue:void 0,many:void 0,name:void 0,onInputChange:void 0,options:void 0,processing:!1,processingDidFail:!1,value:void 0,wrapperComponent:void 0,wrapperComponentProps:void 0};var z=A()(Object(L.a)({propTypes:C()({apiOptions:o.a.bool,apiValue:o.a.bool,children:o.a.func,component:p.a.component,componentProps:o.a.oneOfType([o.a.shape({}),o.a.func]),many:p.a.notRequiredIf("children",o.a.bool),name:p.a.string,type:o.a.string,willChangeRecord:o.a.func,wrapperComponent:p.a.component,wrapperComponentProps:o.a.shape({})}),defaultProps:{apiOptions:!1,apiValue:!1,children:void 0,component:void 0,componentProps:{},many:void 0,name:void 0,type:void 0,willChangeRecord:e=>{return e.nextRecord},wrapperComponentProps:void 0}}),B,Object(c.a)(e=>({component:`widget_${e.type||e.field.type}`,wrapperComponent:["entityForm_label","component_label"]})))(W),$=r(21),J=r.n($),Q=r(710),G=r(41);function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){X(e,t,r[t])})}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class Y extends l.a.Component{constructor(){super(...arguments),X(this,"handleEvent",()=>{const e=this.props.action(K({},this.getPropsContext()));return J()(e)&&"meta"in e&&"type"in e?this.props.setState({action:this.props.dispatch(e)}):this.props.onChange({target:{name:this.props.name,value:e}})})}getProps(){return Object.assign({[this.props.event]:this.handleEvent,disabled:this.props.disabled||this.props.readOnly},!N()(this.props.component)&&{processing:this.props.processing,processingDidFail:this.props.processingDidFail},V()(this.props.componentProps)?this.props.componentProps(this.getPropsContext()):this.props.componentProps)}getPropsContext(){return{errors:this.props.errors,field:this.props.field,initialValue:this.props.initialValue,processing:this.props.processing,processingDidFail:this.props.processingDidFail,value:this.props.value}}render(){const e=this.props.component;return l.a.createElement(e,this.getProps())}}Y.propTypes={action:o.a.func.isRequired,component:p.a.component.isRequired,componentProps:o.a.shape({}),disabled:o.a.bool,dispatch:o.a.func.isRequired,errors:g.a.list.isRequired,event:o.a.string,field:b.a.entityField.isRequired,initialValue:o.a.any,name:p.a.string,onChange:o.a.func.isRequired,processing:o.a.bool.isRequired,processingDidFail:o.a.bool.isRequired,readOnly:o.a.bool,setState:o.a.func.isRequired,value:o.a.any},Y.defaultProps={componentProps:{},disabled:void 0,event:"onClick",initialValue:void 0,name:void 0,readOnly:void 0,value:void 0};var Z=A()(B,Object(c.a)({component:["entityForm_button","component_button"]}),Object(Q.a)({initialState:{action:void 0}}),Object(G.connect)((e,t)=>({processing:!!t.state.action&&t.state.action.meta.entity.duck.status(e,K({},t.state.action.meta,{status:t.state.action.meta.keyProcessing})),processingDidFail:!!t.state.action&&t.state.action.meta.entity.duck.status(e,K({},t.state.action.meta,{status:t.state.action.meta.keyProcessingDidFail}))})))(Y);class ee extends l.a.Component{constructor(){var e,t,r;super(...arguments),r={shouldRedirect:!1},(t="state")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}static getDerivedStateFromProps(e,t){const r=e.field.getId(e.value);return{id:r,shouldRedirect:void 0===t.id&&!!r}}render(){const e=this.props.redirectComponent;return this.state.shouldRedirect?l.a.createElement(e,{to:this.props.to}):null}}ee.propTypes={field:b.a.entityField.isRequired,to:o.a.string.isRequired,redirectComponent:p.a.component.isRequired,value:g.a.map.isRequired};var te=Object(c.a)({redirectComponent:["entityView_redirect","component_redirect"]})(ee),re=r(72);const ne=e=>e.errors.size>0&&l.a.createElement(u.a,{className:e.className,variant:"danger"},e.errors.map((e,t)=>l.a.createElement(re.a,{key:t},e)));ne.propTypes={errors:g.a.list.isRequired};var oe=ne,ae=r(49),ie=r(387),se=r(14),le=Object(se.defineMessages)({complete:{defaultMessage:"COMPLETE",description:"Complete",id:"app.activity.action.complete"},completed_by:{defaultMessage:"Completed by",description:"Completed by",id:"app.activity.action.completed_by"},date_completed:{defaultMessage:"Completed Date",description:"Completed Date",id:"app.activity.action.date_completed"},date_due:{defaultMessage:"Due Date",description:"Due date",id:"app.activity.action.date_due"},header_title:{defaultMessage:"Action",description:"Action Title",id:"app.activity.action.header_title"},person_responsible:{defaultMessage:"Person Responsible",description:"Person responsible",id:"app.activity.action.person_responsible"},update:{defaultMessage:"UPDATE",description:"Update",id:"app.activity.action.update"}}),pe=r(3),ce=r.n(pe),ue=r(4);const de=ce.a.div.withConfig({displayName:"Actionstyles__Controls",componentId:"sc-1orkkz3-0"})(["align-items:center;display:flex;flex-direction:column;margin-top:1.5rem;"]),me=ce.a.div.withConfig({displayName:"Actionstyles__Header",componentId:"sc-1orkkz3-1"})(["align-items:center;border-bottom:1px solid ",";display:flex;justify-content:space-between;padding:0.5rem;"],Object(ue.b)({name:"gray"}));var fe={input:Object(pe.css)(["margin-top:1.5rem;"]),control:Object(pe.css)(["margin-top:0.5rem;"])};function he(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ye(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const be=e=>l.a.createElement(D,e,l.a.createElement(me,null,l.a.createElement(ae.a,{locale:e.locales.header_title,variant:"header_title"}),e.records&&null!==e.index&&l.a.createElement(Z,{action:t=>{t.value;let r=t.field,n=ye(t,["value","field"]);return r.entity.actionArrayDeleteAtIndexOrdered(e.records,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){he(e,t,r[t])})}return e}({},n,{index:e.index}))},component:ie.a,componentProps:{name:"delete"},array:!0})),l.a.createElement(z,{name:"person_responsible",wrapperComponentProps:{css:e.styles.input,labelLocale:e.locales.person_responsible}}),l.a.createElement(z,{name:"date_due",wrapperComponentProps:{css:e.styles.input,labelLocale:e.locales.date_due}}),l.a.createElement(z,{name:"completed_by",wrapperComponentProps:{css:e.styles.input,labelLocale:e.locales.completed_by}}),l.a.createElement(z,{name:"date_completed",wrapperComponentProps:{css:e.styles.input,labelLocale:e.locales.date_completed}}),l.a.createElement(de,null,l.a.createElement(Z,{action:e=>{let t=e.value,r=e.field,n=ye(e,["value","field"]);return r.entity.actionUpdate(t,n)},componentProps:{css:e.styles.control,locale:e.locales.update}}),l.a.createElement(Z,{action:e=>{let t=e.value,r=e.field,n=ye(e,["value","field"]);return r.entity.actionComplete(t,n)},componentProps:{css:e.styles.control,locale:e.locales.complete}})));be.propTypes={field:b.a.entityFieldWithInterface({actionComplete:o.a.func.isRequired,actionDelete:o.a.func.isRequired,actionUpdate:o.a.func.isRequired}).isRequired,index:o.a.number,locales:o.a.exact({complete:p.a.locale.isRequired,completed_by:p.a.locale.isRequired,date_completed:p.a.locale.isRequired,date_due:p.a.locale.isRequired,header_title:p.a.locale.isRequired,person_responsible:p.a.locale.isRequired,update:p.a.locale.isRequired}),records:g.a.list,styles:o.a.exact({control:p.a.css.isRequired,input:p.a.css.isRequired})},be.defaultProps={locales:le,styles:fe,index:null,records:void 0};var ve=be,ge=r(713),Pe=ce.a.div.withConfig({displayName:"Spacer",componentId:"sc-1kn0srl-0"})(["flex:1;"]),Oe=Object(se.defineMessages)({reset:{defaultMessage:"RESET",description:"Reset Activity",id:"app.activity.reset"},save:{defaultMessage:"SAVE",description:"Save Activity",id:"app.activity.save"},submit:{defaultMessage:"SUBMIT",description:"Submit Activity",id:"app.activity.submit"}});const Ce=ce.a.div.withConfig({displayName:"Controlsstyles__Controls",componentId:"sc-17azl1y-0"})(["display:flex;",""],e=>e.css);var Re={buttons:Object(pe.css)(["margin-left:24px;"])};function qe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){Ee(e,t,r[t])})}return e}function Ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const je=e=>{const t=e.extraControlsComponent;return l.a.createElement(D,e,!e.resetHidden&&l.a.createElement(Z,{action:e.resetAction,component:e.buttonComponent,componentProps:we({locale:e.locales.reset},e.resetButtonComponentProps)}),l.a.createElement(t,null),!e.saveHidden&&l.a.createElement(Z,{action:e.saveAction,component:e.buttonComponent,componentProps:we({css:e.styles.buttons,locale:e.locales.save},e.saveButtonComponentProps)}),!e.submitHidden&&l.a.createElement(Z,{action:e.submitAction,component:e.buttonComponent,componentProps:we({css:e.styles.buttons,locale:e.locales.submit},e.submitButtonComponentProps)}))};je.propTypes={buttonComponent:p.a.component,component:p.a.component,extraControlsComponent:p.a.component,field:b.a.entityFieldWithInterface({actionReset:o.a.func.isRequired,actionSave:o.a.func.isRequired,actionSubmit:o.a.func.isRequired}).isRequired,locales:o.a.exact({reset:p.a.locale.isRequired,save:p.a.locale.isRequired,submit:p.a.locale.isRequired}),resetAction:o.a.func,resetButtonComponentProps:o.a.shape({}),resetHidden:o.a.bool,saveAction:o.a.func,saveButtonComponentProps:o.a.shape({}),saveHidden:o.a.bool,styles:o.a.exact({buttons:p.a.css}),submitAction:o.a.func,submitButtonComponentProps:o.a.shape({}),submitHidden:o.a.bool,value:g.a.map.isRequired},je.defaultProps={locales:Oe,styles:Re,buttonComponent:ge.a,component:Ce,extraControlsComponent:Pe,resetAction:e=>{let t=e.value,r=e.field,n=qe(e,["value","field"]);return r.entity.actionReset(t,n)},resetButtonComponentProps:{},resetHidden:!1,saveAction:e=>{let t=e.value,r=e.field,n=qe(e,["value","field"]);return r.entity.actionSave(t,n)},saveButtonComponentProps:{},saveHidden:!1,submitAction:e=>{let t=e.value,r=e.field,n=qe(e,["value","field"]);return r.entity.actionSubmit(t,n)},submitButtonComponentProps:{},submitHidden:!1};var _e=je,xe=Object(se.defineMessages)({date_activity:{defaultMessage:"Observation Date",description:"Observation Date",id:"app.observation.date_activity"},date_due:{defaultMessage:"Due Date",description:"Due Date",id:"app.observation.date_due"},description:{defaultMessage:"Description",description:"Description",id:"app.observation.description"},follow_up_actions:{defaultMessage:"Follow up actions",description:"Follow up actions",id:"app.observation.follow_up_actions"},follow_up_actions_add:{defaultMessage:"Add action",description:"Add action",id:"app.observation.follow_up_actions_add"},title:{defaultMessage:"Title",description:"Title",id:"app.observation.title"},title_short:{defaultMessage:"Short Title",description:"Short Title",id:"app.observation.title_short"}}),Ie={input:Object(pe.css)(["margin-top:24px;"]),controls:Object(pe.css)(["margin-top:48px;"])};function Fe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const Se=e=>l.a.createElement(D,e,l.a.createElement(z,{component:oe}),l.a.createElement(z,{component:te,componentProps:{to:e.field.entity.toLink(e.value)}}),l.a.createElement(z,{name:"date_activity",wrapperComponentProps:{css:e.styles.input,labelLocale:e.locales.date_activity}}),l.a.createElement(z,{name:"title",wrapperComponentProps:{css:e.styles.input,labelLocale:e.locales.title}}),l.a.createElement(z,{name:"title_short",wrapperComponentProps:{css:e.styles.input,labelLocale:e.locales.title_short}}),l.a.createElement(z,{name:"description",wrapperComponentProps:{css:e.styles.input,labelLocale:e.locales.description}}),l.a.createElement(z,{name:"date_due",wrapperComponentProps:{css:e.styles.input,labelLocale:e.locales.date_due}}),l.a.createElement(z,{name:"follow_up_actions",component:ve,componentProps:e=>{return{records:e.value}},wrapperComponentProps:{css:e.styles.input,labelLocale:e.locales.follow_up_actions},many:!0}),l.a.createElement(Z,{action:e=>{let t=e.value,r=e.field,n=Fe(e,["value","field"]);return r.entity.actionActionsAdd(t,n)},componentProps:{locale:e.locales.follow_up_actions_add}}),l.a.createElement(z,{component:_e,componentProps:{css:e.styles.controls}}));Se.propTypes={field:b.a.entityField.isRequired,locales:o.a.exact({date_activity:p.a.locale.isRequired,date_due:p.a.locale.isRequired,description:p.a.locale.isRequired,follow_up_actions:p.a.locale.isRequired,follow_up_actions_add:p.a.locale.isRequired,title:p.a.locale.isRequired,title_short:p.a.locale.isRequired}),styles:o.a.exact({input:p.a.css,controls:p.a.css}),value:g.a.map.isRequired},Se.defaultProps={locales:xe,styles:Ie};var De=Se,ke=(r(37),r(712));function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const Te=e=>l.a.createElement(h.Link,Ae({to:e.field.entity.toLink(e.value)},Object(ke.b)(e)));Te.propTypes={children:o.a.node,value:g.a.map.isRequired,field:b.a.entityField.isRequired},Te.defaultProps={children:"View"};var Ve=ce()(Te).withConfig({displayName:"Link",componentId:"sc-1hs1rmw-0"})([""," ",""],Object(ue.c)({name:"viewLink"}),e=>e.css);function Me(){return(Me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const Ne=e=>l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Test"))),l.a.createElement("tbody",null,e.value.map(t=>l.a.createElement("tr",{key:e.field.getId(t)},l.a.createElement("td",null,e.field.getId(t)),l.a.createElement("td",null,e.field.toString(t)),l.a.createElement("td",null,l.a.createElement(Ve,Me({},e,{value:t})))))));Ne.propTypes={field:b.a.entityField.isRequired,value:g.a.list.isRequired};var Le=Ne;const He=e=>l.a.createElement(f.a,null,l.a.createElement(h.Switch,null,l.a.createElement(h.Route,{path:`${e.match.url}/list`,component:()=>l.a.createElement(m,{queryComponentProps:{action:()=>y.default.duck.get(),component:Le}})}),l.a.createElement(h.Route,{path:`${e.match.url}/:uuid?`,component:e=>l.a.createElement(m,{queryComponentProps:{action:()=>y.default.duck.get({id:e.match.params.uuid||null}),component:De}}),exact:!0}),l.a.createElement(h.Redirect,{to:e.routeNotFound})));He.propTypes={match:i.a.match.isRequired,routeNotFound:o.a.string.isRequired};t.default=He},40:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0));t.location=o.default.shape({hash:o.default.string.isRequired,key:o.default.string,pathname:o.default.string.isRequired,search:o.default.string.isRequired,state:o.default.oneOfType([o.default.array,o.default.bool,o.default.number,o.default.object,o.default.string])}),t.history=o.default.shape({action:o.default.oneOf(["PUSH","REPLACE","POP"]).isRequired,block:o.default.func.isRequired,canGo:o.default.func,createHref:o.default.func.isRequired,entries:o.default.arrayOf(t.location),go:o.default.func.isRequired,goBack:o.default.func.isRequired,goForward:o.default.func.isRequired,index:o.default.number,length:o.default.number,listen:o.default.func.isRequired,location:t.location.isRequired,push:o.default.func.isRequired,replace:o.default.func.isRequired}),t.match=o.default.shape({isExact:o.default.bool,params:o.default.object.isRequired,path:o.default.string.isRequired,url:o.default.string.isRequired});var a={path:o.default.string,exact:o.default.bool,strict:o.default.bool,sensitive:o.default.bool,component:o.default.func};a.routes=o.default.arrayOf(o.default.shape(a)),t.route=o.default.shape(a),t.default={location:t.location,history:t.history,match:t.match,route:t.route}},77:function(e,t,r){"use strict";var n=r(43),o=r(148),a=r(146),i=r(149);r(150)("match",1,function(e,t,r,s){return[function(r){var n=e(this),o=null==r?void 0:r[t];return void 0!==o?o.call(r,n):new RegExp(r)[t](String(n))},function(e){var t=s(r,e,this);if(t.done)return t.value;var l=n(e),p=String(this);if(!l.global)return i(l,p);var c=l.unicode;l.lastIndex=0;for(var u,d=[],m=0;null!==(u=i(l,p));){var f=String(u[0]);d[m]=f,""===f&&(l.lastIndex=a(p,o(l.lastIndex),c)),m++}return 0===m?null:d}]})},89:function(e,t,r){"use strict";var n=r(3),o=r.n(n),a=r(0),i=r.n(a),s=r(2),l=r(4);const p=o.a.div.withConfig({displayName:"Well__UIWell",componentId:"xiuhp8-0"})(["background-color:",";border:1px solid currentColor;border-radius:calc("," * "," * 0.5);color:",";padding:calc("," * "," * 2);"," ",""],Object(l.b)({name:"white"}),l.e,e=>e.ratio,Object(l.b)({name:"black"}),l.e,e=>e.ratio,Object(l.c)({name:"uiWell"}),e=>e.css);p.propTypes={css:s.a.css,ratio:i.a.number,variant:i.a.string},p.defaultProps={css:void 0,variant:"main",ratio:1},t.a=p}}]);
//# sourceMappingURL=3.73f1f007a815fd7a868d.js.map