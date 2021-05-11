(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{165:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,p=u["".concat(o,".").concat(m)]||u[m]||b[m]||r;return a?i.a.createElement(p,l(l({ref:t},c),{},{components:a})):i.a.createElement(p,l({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},226:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/high_level_design-a8115390d4be37f22c48e75e83741329.png"},227:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ml_model_graph-143969cbec832422044c00cd087674cf.png"},64:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(165)),o={title:"Machine Learning Models",hide_title:!0,slug:"/rfc/active/1812-ml_models",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/1812-ml_models/README.md"},l={unversionedId:"docs/rfc/active/1812-ml_models/README",id:"docs/rfc/active/1812-ml_models/README",isDocsHomePage:!1,title:"Machine Learning Models",description:"- Start Date: 08/18/2020",source:"@site/genDocs/docs/rfc/active/1812-ml_models/README.md",slug:"/rfc/active/1812-ml_models",permalink:"/docs/rfc/active/1812-ml_models",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/rfc/active/1812-ml_models/README.md",version:"current",sidebar:"overviewSidebar",previous:{title:"Dashboards",permalink:"/docs/rfc/active/1778-dashboards"},next:{title:"Azkaban Flows and Jobs",permalink:"/docs/rfc/active/1820-azkaban-flow-job"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Detailed design",id:"detailed-design",children:[{value:"URN Representation",id:"urn-representation",children:[]},{value:"Entities",id:"entities",children:[]},{value:"ML Model metadata",id:"ml-model-metadata",children:[]},{value:"ML Feature metadata",id:"ml-feature-metadata",children:[]},{value:"Metadata graph",id:"metadata-graph",children:[]}]},{value:"How we teach this",id:"how-we-teach-this",children:[]},{value:"Alternatives",id:"alternatives",children:[]},{value:"Rollout / Adoption Strategy",id:"rollout--adoption-strategy",children:[]},{value:"Future Work",id:"future-work",children:[]}],c={rightToc:s};function d(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Start Date: 08/18/2020"),Object(r.b)("li",{parentName:"ul"},"RFC PR: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/pull/1812"},"https://github.com/linkedin/datahub/pull/1812")),Object(r.b)("li",{parentName:"ul"},"Implementation PR(s): ",Object(r.b)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/pull/1721"},"https://github.com/linkedin/datahub/pull/1721"))),Object(r.b)("h1",{id:"machine-learning-models"},"Machine Learning Models"),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("p",null,"Adding support for trained machine learning models and features metadata cataloging and enabling search and discovery over them. This is a step towards organizing the essential facts of machine learning models in a structured way leading to responsible democratization of machine\nlearning and related artificial intelligence technology. The work is inspired by Google's model card ",Object(r.b)("a",{parentName:"p",href:"https://arxiv.org/pdf/1810.03993.pdf"},"paper"),"."),Object(r.b)("h2",{id:"motivation"},"Motivation"),Object(r.b)("p",null,"We need to model ML model metadata for transparent model reporting. Below are some of the reasons why storing machine learning model metadata is important:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Search and discovery of ML models trained, across an organization."),Object(r.b)("li",{parentName:"ul"},"Drawing boundaries around a model's capabilities and limitations: There is a need to store the conditions under which a model performs best and most consistently and if it has some blind spots. It helps potential users of the models be better informed on which models are best for their specific purposes. Also, it helps minimize usage of machine learning models in contexts for which they are not well suited."),Object(r.b)("li",{parentName:"ul"},"Metrics and Limitations: A model\u2019s performance can be measured in countless ways, but we need to catalog the metrics that are most relevant and useful. Similarly there is a need to store a model's potential limitations that are most useful to quantify."),Object(r.b)("li",{parentName:"ul"},"Ensure comparability across models in a well-informed way: Modeling metadata of ML models allows us to compare candidate models' results across not only traditional evaluation metrics but also along the axes of ethical, inclusive, and fairness\nconsiderations."),Object(r.b)("li",{parentName:"ul"},"Promote reproducibility: Often a model is trained on transformed data, there are some preprocessing steps involved in transforming the data e.g. centering, scaling, dealing with missing values, etc. These transforms should be stored as part of model metadata to ensure reproducibility."),Object(r.b)("li",{parentName:"ul"},"Ensure Data Governance: Increasing public concern over consumer privacy is resulting in new data laws, such as GDPR and CCPA, causing enterprises to strengthen their data governance & compliance efforts. Therefore, there is a need to store compliance information of ML models containing PII or condidential data (through manual tags or automated process) to eliminate the risk of sensitive data exposure.")),Object(r.b)("h2",{id:"detailed-design"},"Detailed design"),Object(r.b)("p",null,Object(r.b)("img",{alt:"high level design",src:a(226).default})),Object(r.b)("p",null,"As shown in the above diagram, machine learning models are using machine learning features as inputs. These machine learning features\ncould be shared across different machine learning models. In the example sketched above, ",Object(r.b)("inlineCode",{parentName:"p"},"ML_Feature_1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ML_Feature_2")," are used as inputs for ",Object(r.b)("inlineCode",{parentName:"p"},"ML_Model_A")," while ",Object(r.b)("inlineCode",{parentName:"p"},"ML_Feature_2"),", ",Object(r.b)("inlineCode",{parentName:"p"},"ML_Feature_3")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ML_Feature_4")," are inputs for ",Object(r.b)("inlineCode",{parentName:"p"},"ML_Model_B"),"."),Object(r.b)("h3",{id:"urn-representation"},"URN Representation"),Object(r.b)("p",null,"We'll define two ",Object(r.b)("a",{parentName:"p",href:"/docs/what/urn"},"URNs"),": ",Object(r.b)("inlineCode",{parentName:"p"},"MLModelUrn")," and ",Object(r.b)("inlineCode",{parentName:"p"},"MLFeatureUrn"),".\nThese URNs should allow for unique identification of machine learning models and features, respectively. Machine learning models, like datasets, will be identified by combination of standardized platform urn, name of the model and the fabric type where the model belongs to or where it was generated. Here platform urn corresponds to the data platform for ML Models (like TensorFlow) - representing the platform as an urn enables us to attach platform-specific metadata to it."),Object(r.b)("p",null,"A machine learning model URN will look like below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"urn:li:mlModel:(<<platform>>,<<modelName>>,<<fabric>>)\n")),Object(r.b)("p",null,"A machine learning feature will be uniquely identified by it's name and the namespace this feature belongs to.\nA machine learning feature URN will look like below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"urn:li:mlFeature:(<<namespace>>,<<featureName>>)\n")),Object(r.b)("h3",{id:"entities"},"Entities"),Object(r.b)("p",null,"There will be 2 top level GMA ",Object(r.b)("a",{parentName:"p",href:"/docs/what/entity"},"entities")," in the design: ML models and ML features.\nIt's important to make ML features as a top level entity because ML features could be shared between different ML models."),Object(r.b)("h3",{id:"ml-model-metadata"},"ML Model metadata"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Model properties: Basic information about the ML model",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Model date"),Object(r.b)("li",{parentName:"ul"},"Model desription"),Object(r.b)("li",{parentName:"ul"},"Model version"),Object(r.b)("li",{parentName:"ul"},"Model type: Basic model architecture details e.g. if it is Naive Bayes classifier, Convolutional Neural Network, etc"),Object(r.b)("li",{parentName:"ul"},"ML features used for training"),Object(r.b)("li",{parentName:"ul"},"Hyperparameters of the model, used to control the learning process"),Object(r.b)("li",{parentName:"ul"},"Tags: Primarily to enhance search and discovery of ML models"))),Object(r.b)("li",{parentName:"ul"},"Ownership: Users who own the ML model, to help with directing questions or comments about the model."),Object(r.b)("li",{parentName:"ul"},"Intended Use",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Primary intended use cases"),Object(r.b)("li",{parentName:"ul"},"Primary intended user types"),Object(r.b)("li",{parentName:"ul"},"Out-of-scope use cases"))),Object(r.b)("li",{parentName:"ul"},"Model Factors: Factors affecting model performance including groups, instrumentation and environments",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Relevant Factors: Foreseeable factors for which model performance may vary"),Object(r.b)("li",{parentName:"ul"},"Evaluation Factors: Factors that are being reported"))),Object(r.b)("li",{parentName:"ul"},"Metrics: Measures of model performance being reported, as well as decision thresholds (if any) used."),Object(r.b)("li",{parentName:"ul"},"Training Data: Details on datasets used for training ML Models",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Datasets used to train the ML model"),Object(r.b)("li",{parentName:"ul"},"Motivation behind choosing these datasets"),Object(r.b)("li",{parentName:"ul"},"Preprocessing steps involved: crucial for reproducibility"),Object(r.b)("li",{parentName:"ul"},"Link to the process/job that captures training execution"))),Object(r.b)("li",{parentName:"ul"},"Evaluation Data: Mirrors Training Data."),Object(r.b)("li",{parentName:"ul"},"Quantitative Analyses: Provides the results of evaluating the model according to the chosen metrics by linking to relevant dashboard."),Object(r.b)("li",{parentName:"ul"},"Ethical Considerations: Demonstrate the ethical considerations that went into model development, surfacing ethical challenges and solutions to stakeholders."),Object(r.b)("li",{parentName:"ul"},"Caveats and Recommendations: Captures additional concerns regarding the model",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Did the results suggest any further testing?"),Object(r.b)("li",{parentName:"ul"},"Relevant groups that were not represented in the evaluation dataset"),Object(r.b)("li",{parentName:"ul"},"Recommendations for model use"),Object(r.b)("li",{parentName:"ul"},"Ideal characteristics of an evaluation dataset"))),Object(r.b)("li",{parentName:"ul"},"Source Code: Contains training and evaluation pipeline source code, along with the source code where the ML Model is defined."),Object(r.b)("li",{parentName:"ul"},"Institutional Memory: Institutional knowledge for easy search and discovery."),Object(r.b)("li",{parentName:"ul"},"Status: Captures if the model has been soft deleted or not."),Object(r.b)("li",{parentName:"ul"},"Cost: Cost associated with the model based on the project/component this model belongs to."),Object(r.b)("li",{parentName:"ul"},"Deprecation: Captures if the model has been deprecated or not.")),Object(r.b)("h3",{id:"ml-feature-metadata"},"ML Feature metadata"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Feature Properties: Basic information about the ML Feature",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Description of the feature"),Object(r.b)("li",{parentName:"ul"},"Data type of the feature i.e. boolean, text, etc. These also include ",Object(r.b)("a",{parentName:"li",href:"https://towardsdatascience.com/7-data-types-a-better-way-to-think-about-data-types-for-machine-learning-939fae99a689#:~:text=In%20the%20machine%20learning%20world,groups%20are%20often%20called%20out."},"data types")," particularly for Machine Learning practitioners. "))),Object(r.b)("li",{parentName:"ul"},"Ownership: Owners of the ML Feature."),Object(r.b)("li",{parentName:"ul"},"Institutional Memory: Institutional knowledge for easy search and discovery."),Object(r.b)("li",{parentName:"ul"},"Status: Captures if the feature has been soft deleted or not."),Object(r.b)("li",{parentName:"ul"},"Deprecation: Captures if the feature has been deprecated or not.")),Object(r.b)("h3",{id:"metadata-graph"},"Metadata graph"),Object(r.b)("p",null,Object(r.b)("img",{alt:"ml_model_graph",src:a(227).default})),Object(r.b)("p",null,"An example metadata graph with complete data lineage picture is shown above. Below are the main edges of the graph"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Evaluation dataset contains data used for quantitative analyses and is used for evaluating ML Model hence ML Model is connected to the evaluation dataset(s) through ",Object(r.b)("inlineCode",{parentName:"li"},"EvaluatedOn")," edge"),Object(r.b)("li",{parentName:"ol"},"Training dataset(s) contain the training data and is used for training ML Model hence ML Model is connected to the training dataset(s) through ",Object(r.b)("inlineCode",{parentName:"li"},"TrainedOn")," edge."),Object(r.b)("li",{parentName:"ol"},"ML Model is connected to ",Object(r.b)("inlineCode",{parentName:"li"},"DataProcess")," entity which captures the training execution through a (newly proposed) ",Object(r.b)("inlineCode",{parentName:"li"},"TrainedBy")," edge."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"DataProcess")," entity itself uses the training dataset(s) (mentioned in 2) as it's input and hence is connected to the training datasets through ",Object(r.b)("inlineCode",{parentName:"li"},"Consumes")," edge."),Object(r.b)("li",{parentName:"ol"},"ML Model is connected to ML Feature(s) through ",Object(r.b)("inlineCode",{parentName:"li"},"Contains")," edge."),Object(r.b)("li",{parentName:"ol"},"Results of the performance of ML Model can be viewed in a dashboard and is therefore connected to ",Object(r.b)("inlineCode",{parentName:"li"},"Dashboard")," entity through ",Object(r.b)("inlineCode",{parentName:"li"},"Produces")," edge.")),Object(r.b)("h2",{id:"how-we-teach-this"},"How we teach this"),Object(r.b)("p",null,"We should create/update user guides to educate users for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Search & discovery experience (how to find a machine learning model in DataHub)"),Object(r.b)("li",{parentName:"ul"},"Lineage experience (how to find different entities connected to the machine learning model)")),Object(r.b)("h2",{id:"alternatives"},"Alternatives"),Object(r.b)("p",null,"A machine learning model could as well store a model ID which uniquely identifies a machine learning model in the machine learning model lifecycle management system. This can then be the only component of ",Object(r.b)("inlineCode",{parentName:"p"},"MLModelUrn")," however we would then need a system to retrieve model name given the model ID. Hence we chose the approach of modeling ",Object(r.b)("inlineCode",{parentName:"p"},"MLModelUrn")," similar to ",Object(r.b)("inlineCode",{parentName:"p"},"DatasetUrn"),"."),Object(r.b)("h2",{id:"rollout--adoption-strategy"},"Rollout / Adoption Strategy"),Object(r.b)("p",null,"The design is supposed to be generic enough that any user of DataHub should easily be able\nto onboard their ML model and ML feature metadata to DataHub irrespective of their machine learning platform."),Object(r.b)("p",null,"Only thing users will need to do is to write an ETL script customized for their machine learning platform (if it's not already provided in DataHub repo). This ETL script will construct and emit ML model and ML feature metadata in the form of ",Object(r.b)("a",{parentName:"p",href:"/docs/what/mxe"},"MCEs"),"."),Object(r.b)("h2",{id:"future-work"},"Future Work"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This RFC does not cover model evolution/versions, linking related models together and how we will handle it - that will require it's own RFC."),Object(r.b)("li",{parentName:"ul"},"This RFC does not cover the UI design of ML Model and ML Feature."),Object(r.b)("li",{parentName:"ul"},"This RFC does not cover social features like subscribe and follow on ML Model and/or ML Feature.")))}d.isMDXComponent=!0}}]);