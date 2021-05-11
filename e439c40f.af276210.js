(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(165)),i={title:"How to model metadata ?",hide_title:!0,slug:"/how/metadata-modelling",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/metadata-modelling.md"},c={unversionedId:"docs/how/metadata-modelling",id:"docs/how/metadata-modelling",isDocsHomePage:!1,title:"How to model metadata ?",description:"How to model metadata ?",source:"@site/genDocs/docs/how/metadata-modelling.md",slug:"/how/metadata-modelling",permalink:"/docs/how/metadata-modelling",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/metadata-modelling.md",version:"current",sidebar:"overviewSidebar",previous:{title:"How to onboard to GMA graph?",permalink:"/docs/how/graph-onboarding"},next:{title:"Onboarding to GMA Graph - Adding a new relationship type",permalink:"/docs/demo/graph-onboarding"}},p=[],d={rightToc:p};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"how-to-model-metadata-"},"How to model metadata ?"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/what/gma"},"GMA")," uses ",Object(o.b)("a",{parentName:"p",href:"https://rest.li"},"rest.li"),", which is LinkedIn's open source REST framework. All metadata in GMA needs to be modelled using ",Object(o.b)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"Pegasus schema (PDL)")," which is the data schema for ",Object(o.b)("a",{parentName:"p",href:"https://rest.li"},"rest.li"),"."),Object(o.b)("p",null,"Conceptually we\u2019re modelling metadata as a hybrid graph of nodes (",Object(o.b)("a",{parentName:"p",href:"/docs/what/entity"},"entities"),") and edges (",Object(o.b)("a",{parentName:"p",href:"/docs/what/relationship"},"relationships"),"), with additional documents (",Object(o.b)("a",{parentName:"p",href:"/docs/what/aspect"},"metadata aspects"),") attached to each node. You can also think of it as a modified ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model"},"Entity-Relationship Model"),". "),Object(o.b)("p",null,"Here is an example graph consisting of 3 types of entities (",Object(o.b)("inlineCode",{parentName:"p"},"User"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Group"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Dataset"),"), 3 types of relationships (",Object(o.b)("inlineCode",{parentName:"p"},"OwnedBy"),", ",Object(o.b)("inlineCode",{parentName:"p"},"HasAdmin"),", ",Object(o.b)("inlineCode",{parentName:"p"},"HasMember"),"), and 3 types of metadata aspects (",Object(o.b)("inlineCode",{parentName:"p"},"Ownership"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Profile"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"Membership"),")."),Object(o.b)("p",null,Object(o.b)("img",{alt:"metadata-modeling",src:n(177).default})))}l.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(n),b=a,u=s["".concat(i,".").concat(b)]||s[b]||m[b]||o;return n?r.a.createElement(u,c(c({ref:t},d),{},{components:n})):r.a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},177:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/metadata-modeling-92c9ff3f89f50361a40b60173fe223c3.png"}}]);