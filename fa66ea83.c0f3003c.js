(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),s=(n(0),n(165)),u={title:"Deploying with Kubernetes",hide_title:!0,slug:"/datahub-kubernetes",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/datahub-kubernetes/README.md"},o={unversionedId:"datahub-kubernetes/README",id:"datahub-kubernetes/README",isDocsHomePage:!1,title:"Deploying with Kubernetes",description:"Deploying Datahub with Kubernetes",source:"@site/genDocs/datahub-kubernetes/README.md",slug:"/datahub-kubernetes",permalink:"/docs/datahub-kubernetes",editUrl:"https://github.com/linkedin/datahub/blob/master/datahub-kubernetes/README.md",version:"current",sidebar:"overviewSidebar",previous:{title:"Deploying with Docker",permalink:"/docs/docker"},next:{title:"Slack",permalink:"/docs/slack"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Components",id:"components",children:[]},{value:"Quickstart",id:"quickstart",children:[]},{value:"Other useful commands",id:"other-useful-commands",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"deploying-datahub-with-kubernetes"},"Deploying Datahub with Kubernetes"),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/tree/master/datahub-kubernetes"},"This directory")," provides\nthe Kubernetes ",Object(s.b)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," charts for deploying ",Object(s.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/tree/master/datahub-kubernetes/datahub"},"Datahub")," and it's ",Object(s.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/tree/master/datahub-kubernetes/prerequisites"},"dependencies"),"\n(Elasticsearch, Neo4j, MySQL, and Kafka) on a Kubernetes cluster.  "),Object(s.b)("h2",{id:"setup"},"Setup"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Set up a kubernetes cluster",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"In a cloud platform of choice like ",Object(s.b)("a",{parentName:"li",href:"https://aws.amazon.com/eks"},"Amazon EKS"),",\n",Object(s.b)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"Google Kubernetes Engine"),",\nand ",Object(s.b)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service/"},"Azure Kubernetes Service")," OR"),Object(s.b)("li",{parentName:"ul"},"In local environment using ",Object(s.b)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/"},"Minikube"),".\nNote, more than 7GB of RAM is required to run Datahub and it's dependencies "))),Object(s.b)("li",{parentName:"ol"},"Install the following tools: ",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," to manage kubernetes resources"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," to deploy the resources based on helm charts.\nNote, we only support Helm 3.")))),Object(s.b)("h2",{id:"components"},"Components"),Object(s.b)("p",null,"Datahub consists of 4 main components: ",Object(s.b)("a",{parentName:"p",href:"/docs/gms"},"GMS"),",\n",Object(s.b)("a",{parentName:"p",href:"/docs/metadata-jobs/mae-consumer-job"},"MAE Consumer"),",\n",Object(s.b)("a",{parentName:"p",href:"/docs/metadata-jobs/mce-consumer-job"},"MCE Consumer"),", and\n",Object(s.b)("a",{parentName:"p",href:"/docs/datahub-frontend"},"Frontend"),". Kubernetes deployment\nfor each of the components are defined as subcharts under the main\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/tree/master/datahub-kubernetes/datahub"},"Datahub"),"\nhelm chart."),Object(s.b)("p",null,"The main components are powered by 4 external dependencies:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Kafka"),Object(s.b)("li",{parentName:"ul"},"Local DB (MySQL, Postgres, MariaDB)"),Object(s.b)("li",{parentName:"ul"},"Search Index (Elasticsearch)"),Object(s.b)("li",{parentName:"ul"},"Graph Index (Supports only Neo4j)")),Object(s.b)("p",null,"The dependencies must be deployed before deploying Datahub. We created a separate\n",Object(s.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/tree/master/datahub-kubernetes/prerequisites"},"chart"),"\nfor deploying the dependencies with example configuration. They could also be deployed\nseparately on-prem or leveraged as managed services.   "),Object(s.b)("h2",{id:"quickstart"},"Quickstart"),Object(s.b)("p",null,"Assuming kubectl context points to the correct kubernetes cluster, first create kubernetes secrets that contain MySQL and Neo4j passwords. "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-(shell)"},"kubectl create secret generic mysql-secrets --from-literal=mysql-root-password=datahub\nkubectl create secret generic neo4j-secrets --from-literal=neo4j-password=datahub\n")),Object(s.b)("p",null,'The above commands sets the passwords to "datahub" as an example. Change to any password of choice. '),Object(s.b)("p",null,"Second, deploy the dependencies by running the following"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-(shell)"},"(cd prerequisites && helm dep update)\nhelm install prerequisites prerequisites/\n")),Object(s.b)("p",null,"Note, after changing the configurations in the values.yaml file, you can run "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-(shell)"},"helm upgrade prerequisites prerequisites/\n")),Object(s.b)("p",null,"To just redeploy the dependencies impacted by the change. "),Object(s.b)("p",null,"Run ",Object(s.b)("inlineCode",{parentName:"p"},"kubectl get pods")," to check whether all the pods for the dependencies are running.\nYou should get a result similar to below."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"NAME                                               READY   STATUS      RESTARTS   AGE\nelasticsearch-master-0                             1/1     Running     0          62m\nelasticsearch-master-1                             1/1     Running     0          62m\nelasticsearch-master-2                             1/1     Running     0          62m\nprerequisites-cp-schema-registry-cf79bfccf-kvjtv   2/2     Running     1          63m\nprerequisites-kafka-0                              1/1     Running     2          62m\nprerequisites-mysql-0                              1/1     Running     1          62m\nprerequisites-neo4j-community-0                    1/1     Running     0          52m\nprerequisites-zookeeper-0                          1/1     Running     0          62m\n")),Object(s.b)("p",null,"deploy Datahub by running the following"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-(shell)"},"helm install datahub datahub/ --values datahub/quickstart-values.yaml\n")),Object(s.b)("p",null,"Values in ",Object(s.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/tree/master/datahub-kubernetes/datahub/quickstart-values.yaml"},"quickstart-values.yaml"),"\nhave been preset to point to the dependencies deployed using the ",Object(s.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/tree/master/datahub-kubernetes/prerequisites"},"prerequisites"),'\nchart with release name "prerequisites". If you deployed the helm chart using a different release name, update the quickstart-values.yaml file accordingly before installing. '),Object(s.b)("p",null,"Run ",Object(s.b)("inlineCode",{parentName:"p"},"kubectl get pods")," to check whether all the datahub pods are running. You should get a result similar to below."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"NAME                                               READY   STATUS      RESTARTS   AGE\ndatahub-datahub-frontend-84c58df9f7-5bgwx          1/1     Running     0          4m2s\ndatahub-datahub-gms-58b676f77c-c6pfx               1/1     Running     0          4m2s\ndatahub-datahub-mae-consumer-7b98bf65d-tjbwx       1/1     Running     0          4m3s\ndatahub-datahub-mce-consumer-8c57d8587-vjv9m       1/1     Running     0          4m2s\ndatahub-elasticsearch-setup-job-8dz6b              0/1     Completed   0          4m50s\ndatahub-kafka-setup-job-6blcj                      0/1     Completed   0          4m40s\ndatahub-mysql-setup-job-b57kc                      0/1     Completed   0          4m7s\nelasticsearch-master-0                             1/1     Running     0          97m\nelasticsearch-master-1                             1/1     Running     0          97m\nelasticsearch-master-2                             1/1     Running     0          97m\nprerequisites-cp-schema-registry-cf79bfccf-kvjtv   2/2     Running     1          99m\nprerequisites-kafka-0                              1/1     Running     2          97m\nprerequisites-mysql-0                              1/1     Running     1          97m\nprerequisites-neo4j-community-0                    1/1     Running     0          88m\nprerequisites-zookeeper-0                          1/1     Running     0          97m\n")),Object(s.b)("p",null,"You can run the following to expose the frontend locally. Note, you can find the pod name using the command above.\nIn this case, the datahub-frontend pod name was ",Object(s.b)("inlineCode",{parentName:"p"},"datahub-datahub-frontend-84c58df9f7-5bgwx"),". "),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-(shell)"},"kubectl port-forward <datahub-frontend pod name> 9002:9002\n")),Object(s.b)("p",null,"You should be able to access the frontend via http://localhost:9002. "),Object(s.b)("p",null,"Once you confirm that the pods are running well, you can set up ingress for datahub-frontend\nto expose the 9002 port to the public.  "),Object(s.b)("h2",{id:"other-useful-commands"},"Other useful commands"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Command"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"helm uninstall datahub"),Object(s.b)("td",{parentName:"tr",align:null},"Remove DataHub")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"helm ls"),Object(s.b)("td",{parentName:"tr",align:null},"List of Helm charts")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"helm history"),Object(s.b)("td",{parentName:"tr",align:null},"Fetch a release history")))))}b.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),i=b(n),d=a,m=i["".concat(u,".").concat(d)]||i[d]||p[d]||s;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,u=new Array(s);u[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var l=2;l<s;l++)u[l]=n[l];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);