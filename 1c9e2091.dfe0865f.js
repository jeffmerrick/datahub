(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,b=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return r?n.a.createElement(b,c(c({ref:t},s),{},{components:r})):n.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(7),i=(r(0),r(165)),o={title:"What is GMA graph?",hide_title:!0,slug:"/what/graph",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/graph.md"},c={unversionedId:"docs/what/graph",id:"docs/what/graph",isDocsHomePage:!1,title:"What is GMA graph?",description:"What is GMA graph?",source:"@site/genDocs/docs/what/graph.md",slug:"/what/graph",permalink:"/docs/what/graph",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/what/graph.md",version:"current",sidebar:"overviewSidebar",previous:{title:"Metadata Ingestion",permalink:"/docs/metadata-ingestion"},next:{title:"What is GMA search index?",permalink:"/docs/what/search-index"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"what-is-gma-graph"},"What is GMA graph?"),Object(i.b)("p",null,"All the ",Object(i.b)("a",{parentName:"p",href:"/docs/what/entity"},"entities")," and ",Object(i.b)("a",{parentName:"p",href:"/docs/what/relationship"},"relationships")," are stored in a graph database, Neo4j.\nThe graph always represents the current state of the world and has no direct support for versioning or history.\nHowever, as stated in the ",Object(i.b)("a",{parentName:"p",href:"/docs/how/metadata-modelling"},"Metadata Modeling")," section,\nthe graph is merely a derived view of all metadata ",Object(i.b)("a",{parentName:"p",href:"/docs/what/aspect"},"aspects")," thus can always be rebuilt directly from historic ",Object(i.b)("a",{parentName:"p",href:"/docs/what/mxe#metadata-audit-event-mae"},"MAEs"),".\nConsequently, it is possible to build a specific snapshot of the graph in time by replaying MAEs up to that point."),Object(i.b)("p",null,"In theory, the system can work with any generic ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Online_transaction_processing"},"OLTP")," graph DB that supports the following operations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dynamical creation, modification, and removal of nodes and edges"),Object(i.b)("li",{parentName:"ul"},"Dynamical attachment of key-value properties to each node and edge"),Object(i.b)("li",{parentName:"ul"},"Transactional partial updates of properties of a specific node or edge"),Object(i.b)("li",{parentName:"ul"},"Fast ID-based retrieval of nodes & edges"),Object(i.b)("li",{parentName:"ul"},"Efficient queries involving both graph traversal and properties value filtering"),Object(i.b)("li",{parentName:"ul"},"Support efficient bidirectional graph traversal")))}l.isMDXComponent=!0}}]);