(this.webpackJsonpmarkdown_previewer=this.webpackJsonpmarkdown_previewer||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n(7),o=n.n(s),i=n(2),c=n(3),l=n(5),h=n(4),u=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"col-sm",children:[Object(r.jsx)("h3",{className:"display-6",style:{textAlign:"center"},children:"Editor"}),Object(r.jsx)("textarea",{style:{height:"82vh",outline:"none",resize:"none"},className:".container container-xl form-control",id:"editor",type:"text",value:this.props.value,onChange:this.props.onUpdate})]})}}]),n}(a.Component),d=n(8),p=n.n(d),m=function(e){var t=e.text;return Object(r.jsxs)("div",{className:"col-sm",children:[Object(r.jsxs)("h3",{className:"display-6",style:{textAlign:"center"},children:[" ","Preview"," "]}),Object(r.jsx)("div",{style:{height:"82vh",overflowY:"scroll",overflowX:"hidden"},id:"preview",dangerouslySetInnerHTML:{__html:p()(t)}})]})},b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={text:"# Markdown Text goes here\n## You can also make subheadings\n\n > One of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.<br><br> >According to the React Documentation,\n> dangerouslySetInnerHTML is React\u2019s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it\u2019s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\n ---\n```\n// CODE BLOCK SAMPLE\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\n --- \nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\n![Vipatron icon](https://bit.ly/fcc-running-cats 'Kitty walking')\n\n![Vipatron icon][picref]\n\n[picref]: https://bit.ly/fcc-relaxing-cat 'kitten'\n"},e.handleOnChange=function(t){var n=e.state;n.text=t.target.value,e.setState({input:n})},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"row p-3",children:[Object(r.jsx)(u,{value:this.state.text,onUpdate:this.handleOnChange}),Object(r.jsx)(m,{text:this.state.text})]})}}]),n}(a.Component);o.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.974250a0.chunk.js.map