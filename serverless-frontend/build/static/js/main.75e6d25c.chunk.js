(this["webpackJsonpserverless-frontend"]=this["webpackJsonpserverless-frontend"]||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var s=e(1),i=e.n(s),a=e(8),c=e.n(a),o=(e(13),e(3)),r=e(4),u=e(2),b=e(6),h=e(5),m=(e(14),e(0)),d=function(t){return Object(m.jsx)("label",{children:Object(m.jsx)("input",{name:t.name,type:"text",value:t.content,onChange:function(n){var e=n.target.value;t.changeSubmission(e)}})})},f=function(t){Object(b.a)(e,t);var n=Object(h.a)(e);function e(t){var s;return Object(o.a)(this,e),(s=n.call(this,t)).state={submission:""},s.changeSubmission=s.changeSubmission.bind(Object(u.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(u.a)(s)),s}return Object(r.a)(e,[{key:"changeSubmission",value:function(t){this.setState({submission:t})}},{key:"handleSubmit",value:function(t){t.preventDefault();var n=Math.floor(1e7*Math.random()+1),e={fld_str:this.state.submission,fld_id:n};this.props.addNewSubmission(e),this.setState({submission:""})}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)(d,{content:this.state.submission,label:"Submission",name:"submission",changeSubmission:function(n){t.changeSubmission(n)}}),Object(m.jsx)("input",{className:"button",type:"submit",value:"submit"})]})}}]),e}(s.Component),l=function(t){return Object(m.jsx)("div",{children:t.name})},j=function(t){var n=t.names.map((function(t){return Object(m.jsx)(l,{name:t.fld_str},t.fld_id)}));return Object(m.jsx)("ul",{children:n})},v="https://gpaxew3tdjwmudc5xi5dgifiei.apigateway.us-ashburn-1.oci.customer-oci.com",O=function(t){Object(b.a)(e,t);var n=Object(h.a)(e);function e(t){var s;return Object(o.a)(this,e),(s=n.call(this,t)).state={names:[{fld_id:1,fld_str:""}]},s.addNewSubmission=s.addNewSubmission.bind(Object(u.a)(s)),s}return Object(r.a)(e,[{key:"addNewSubmission",value:function(t){var n=this;fetch("".concat(v,"/v1/name"),{method:"POST",body:JSON.stringify(t)}).then((function(t){if(t.ok)return t.json();throw new Error("submission error")})).then((function(t){var e=n.state.names.concat(t);n.setState({names:e})})).catch((function(t){return console.error("Error in fetch: ".concat(t.message))}))}},{key:"componentDidMount",value:function(){var t=this;fetch("".concat(v,"/v1/names")).then((function(t){if(t.ok)return t;var n="".concat(t.status," (").concat(t.statusText,")");throw new Error(n)})).then((function(t){return t.json()})).then((function(n){t.setState({names:n})})).catch((function(t){return console.error("Error in fetch: ".concat(t.message))}))}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)(j,{names:this.state.names}),Object(m.jsx)(f,{addNewSubmission:this.addNewSubmission})]})})}}]),e}(s.Component),S=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(n){var e=n.getCLS,s=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;e(t),s(t),i(t),a(t),c(t)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),S()}},[[16,1,2]]]);
//# sourceMappingURL=main.75e6d25c.chunk.js.map