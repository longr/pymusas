"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[424],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),k=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=k(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=k(t),d=r,c=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return t?a.createElement(c,i(i({ref:n},m),{},{components:t})):a.createElement(c,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var k=2;k<l;k++)i[k]=t[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7291:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return k},toc:function(){return m},default:function(){return p}});var a=t(3117),r=t(102),l=(t(7294),t(3905)),i=["components"],o={},s=void 0,k={unversionedId:"api/rankers/lexicon_entry",id:"api/rankers/lexicon_entry",title:"lexicon_entry",description:"pymusas.rankers.lexicon_entry",source:"@site/docs/api/rankers/lexicon_entry.md",sourceDirName:"api/rankers",slug:"/api/rankers/lexicon_entry",permalink:"/pymusas/api/rankers/lexicon_entry",editUrl:"https://github.com/ucrel/pymusas/edit/main/docs/docs/api/rankers/lexicon_entry.md",tags:[],version:"current",lastUpdatedBy:"Robin Long",lastUpdatedAt:1683208839,formattedLastUpdatedAt:"5/4/2023",frontMatter:{},sidebar:"api",previous:{title:"lexical_match",permalink:"/pymusas/api/rankers/lexical_match"},next:{title:"ranking_meta_data",permalink:"/pymusas/api/rankers/ranking_meta_data"}},m=[{value:"LexiconEntryRanker",id:"lexiconentryranker",children:[{value:"__call__",id:"__call__",children:[],level:3}],level:2},{value:"ContextualRuleBasedRanker",id:"contextualrulebasedranker",children:[{value:"to_bytes",id:"to_bytes",children:[],level:3},{value:"from_bytes",id:"from_bytes",children:[],level:3},{value:"get_construction_arguments",id:"get_construction_arguments",children:[],level:3},{value:"int_2_str",id:"int_2_str",children:[],level:3},{value:"get_global_lowest_ranks",id:"get_global_lowest_ranks",children:[],level:3},{value:"__call__",id:"__call__-1",children:[],level:3},{value:"__eq__",id:"__eq__",children:[],level:3}],level:2}],u={toc:m};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"source-div"},(0,l.kt)("p",null,(0,l.kt)("i",null,"pymusas"),(0,l.kt)("i",null,".rankers"),(0,l.kt)("strong",null,".lexicon_entry")),(0,l.kt)("p",null,(0,l.kt)("a",{className:"sourcelink",href:"https://github.com/UCREL/pymusas/blob/main/pymusas/rankers/lexicon_entry.py"},"[SOURCE]"))),(0,l.kt)("div",null),(0,l.kt)("hr",null),(0,l.kt)("a",{id:"pymusas.rankers.lexicon_entry.LexiconEntryRanker"}),(0,l.kt)("h2",{id:"lexiconentryranker"},"LexiconEntryRanker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class LexiconEntryRanker(Serialise)\n")),(0,l.kt)("p",null,"An ",(0,l.kt)("strong",{parentName:"p"},"abstract class")," that defines the basic methods, ",(0,l.kt)("inlineCode",{parentName:"p"},"__call__"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"to_bytes"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"from_bytes"),", that is required for all\n",(0,l.kt)("a",{parentName:"p",href:"#lexiconentryranker"},(0,l.kt)("inlineCode",{parentName:"a"},"LexiconEntryRanker")),"s."),(0,l.kt)("p",null,"Each lexicon entry match is represented by a\n",(0,l.kt)("a",{parentName:"p",href:"/pymusas/api/rankers/ranking_meta_data/#rankingmetadata"},(0,l.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.ranking_meta_data.RankingMetaData"))," object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Lower ranked lexicon entry matches should be given priority when making\ntagging decisions. A rank of 0 is better than a rank of 1.")),(0,l.kt)("p",null,"A LexcionEntryRanker when called, ",(0,l.kt)("inlineCode",{parentName:"p"},"__call__"),", returns a tuple of two ",(0,l.kt)("inlineCode",{parentName:"p"},"List"),"s\nwhereby each entry in the list corresponds to a token:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Contains the ranks of the lexicon entry matches as a ",(0,l.kt)("inlineCode",{parentName:"li"},"List[int]"),".\n",(0,l.kt)("strong",{parentName:"li"},"Note")," that the ",(0,l.kt)("inlineCode",{parentName:"li"},"List")," can be empty if a token has no lexicon entry matches."),(0,l.kt)("li",{parentName:"ol"},"An ",(0,l.kt)("inlineCode",{parentName:"li"},"Optional[RankingMetaData]")," that is the global lowest ranked entry\nmatch for that token. If the value is ",(0,l.kt)("inlineCode",{parentName:"li"},"None")," then no global lowest ranked\nentry can be found for that token. If the ",(0,l.kt)("inlineCode",{parentName:"li"},"RankingMetaData")," represents more\nthan one token, like a Multi Word Expression (MWE) match, then those associated tokens\nwill have the same ",(0,l.kt)("inlineCode",{parentName:"li"},"RankingMetaData")," object as the global lowest ranked entry match.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The tagger will have to make a decision how to handle global lowest ranked\nmatches of value ",(0,l.kt)("inlineCode",{parentName:"strong"},"None"),", a suggested approach would be to assign an\nunmatched/unknown semantic tag to those tokens.")),(0,l.kt)("p",null,"The reason for the adding the second list is that the ",(0,l.kt)("strong",{parentName:"p"},"global")," lowest\nranked match is not the same as the local/token lowest ranked match, this is\ndue to the potential of overlapping matches, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"North East London brewery"),"\ncan have a match of ",(0,l.kt)("inlineCode",{parentName:"p"},"North East"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"North"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"East London brewery")," in this\ncase the lowest rank for ",(0,l.kt)("inlineCode",{parentName:"p"},"North")," would be ",(0,l.kt)("inlineCode",{parentName:"p"},"North East"),", but as we have a\nlower match that uses ",(0,l.kt)("inlineCode",{parentName:"p"},"East")," which is ",(0,l.kt)("inlineCode",{parentName:"p"},"East London brewery")," then the\n",(0,l.kt)("strong",{parentName:"p"},"global")," lowest rank for ",(0,l.kt)("inlineCode",{parentName:"p"},"North")," would be ",(0,l.kt)("inlineCode",{parentName:"p"},"North"),"."),(0,l.kt)("a",{id:"pymusas.rankers.lexicon_entry.LexiconEntryRanker.__call__"}),(0,l.kt)("h3",{id:"__call__"},"_","_","call","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class LexiconEntryRanker(Serialise):\n | ...\n | @abstractmethod\n | def __call__(\n |     self,\n |     token_ranking_data: List[List[RankingMetaData]]\n | ) -> Tuple[List[List[int]], List[Optional[RankingMetaData]]]\n")),(0,l.kt)("p",null,"For each token it returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"List")," of rankings for each lexicon entry\nmatch and the optional ",(0,l.kt)("a",{parentName:"p",href:"/pymusas/api/rankers/ranking_meta_data/#rankingmetadata"},(0,l.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.ranking_meta_data.RankingMetaData")),"\nobject of the ",(0,l.kt)("strong",{parentName:"p"},"global")," lowest ranked match for each token."),(0,l.kt)("h4",{id:"__call__.parameters"},"Parameters",(0,l.kt)("a",{className:"headerlink",href:"#__call__.parameters",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"token","_","ranking","_","data")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"List[List[RankingMetaData]]")," ",(0,l.kt)("br",null),"\nFor each token a ",(0,l.kt)("inlineCode",{parentName:"li"},"List")," of ",(0,l.kt)("a",{parentName:"li",href:"/pymusas/api/rankers/ranking_meta_data/#rankingmetadata"},(0,l.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.ranking_meta_data.RankingMetaData")),"\nrepresenting the lexicon entry match.")),(0,l.kt)("h4",{id:"__call__.returns"},"Returns",(0,l.kt)("a",{className:"headerlink",href:"#__call__.returns",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Tuple[List[List[int]], List[Optional[RankingMetaData]]]")," ",(0,l.kt)("br",null))),(0,l.kt)("a",{id:"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker"}),(0,l.kt)("h2",{id:"contextualrulebasedranker"},"ContextualRuleBasedRanker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ContextualRuleBasedRanker(LexiconEntryRanker):\n | ...\n | def __init__(\n |     self,\n |     maximum_n_gram_length: int,\n |     maximum_number_wildcards: int\n | ) -> None\n")),(0,l.kt)("p",null,"The contextual rule based ranker creates ranks based on the rules stated below."),(0,l.kt)("p",null,"Each lexicon entry match is represented by a\n",(0,l.kt)("a",{parentName:"p",href:"/pymusas/api/rankers/ranking_meta_data/#rankingmetadata"},(0,l.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.ranking_meta_data.RankingMetaData"))," object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Lower ranked lexicon entry matches should be given priority when making\ntagging decisions. See the ",(0,l.kt)("a",{parentName:"strong",href:"#lexiconentryranker"},(0,l.kt)("inlineCode",{parentName:"a"},"LexiconEntryRanker"))," class docstring for\nmore details on the returned value of the ",(0,l.kt)("inlineCode",{parentName:"strong"},"__call__")," method.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Ranking Rules:")),(0,l.kt)("p",null,"The ranking of lexicon entires is based off the following rules, these rules\nare based on the 6 heuristic stated at the top of column 2 on page 4 of\n",(0,l.kt)("a",{parentName:"p",href:"https://aclanthology.org/W03-1807.pdf"},"Piao et al. 2003"),":"),(0,l.kt)("p",null,"First we create an initial ranking based on lexicon entry type:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Multi Word Expression (MWE) entries ranked lower than single and Non-Special\nentries are ranked lower than wild card entires.")),(0,l.kt)("p",null,"Then within these rankings we further rank based on:"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Longer entries, based on n-gram length, are ranked lower."),(0,l.kt)("li",{parentName:"ol"},"Entries with fewer wildcards are ranked lower.")),(0,l.kt)("p",null,"Then we apply the following contextual ranking rules:"),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Whether the POS information was excluded in the match if so these are ranked\nhigher. This is only ",(0,l.kt)("inlineCode",{parentName:"li"},"True")," when the match ignores the POS information for\nsingle word lexicon entries. This is always ",(0,l.kt)("inlineCode",{parentName:"li"},"False")," when used in a\nMWE lexicon entry match."),(0,l.kt)("li",{parentName:"ol"},"Whether the lexicon entry was matched on Token < Lemma <\nLower cased token < Lower cased lemma. Token is the lowest ranked and lower\ncased lemma is highest."),(0,l.kt)("li",{parentName:"ol"},"The lexicon entry that first appears in the text is ranked lowest,\nthis is required for matches that do not apply to the same sequence\nof tokens.")),(0,l.kt)("p",null,"In the case whereby the global lowest ranked lexicon entry match is joint\nranked with another entry then it is random which lexicon entry match is chosen."),(0,l.kt)("h4",{id:"contextualrulebasedranker.parameters"},"Parameters",(0,l.kt)("a",{className:"headerlink",href:"#contextualrulebasedranker.parameters",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"maximum","_","n","_","gram","_","length")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"int")," ",(0,l.kt)("br",null),"\nThe largest n_gram rule match that will be encountered, e.g. a match\nof ",(0,l.kt)("inlineCode",{parentName:"li"},"ski_noun boot_noun")," will have a n-gram length of 2."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"maximum","_","number","_","wildcards")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"int")," ",(0,l.kt)("br",null),"\nThe number of wildcards in the rule that contains the most wildcards, e.g.\nthe rule ",(0,l.kt)("inlineCode",{parentName:"li"},"ski_* *_noun")," would contain 2 wildcards. This can be 0 if you\nhave no wildcard rules.")),(0,l.kt)("h4",{id:"contextualrulebasedranker.instance_attributes"},"Instance Attributes",(0,l.kt)("a",{className:"headerlink",href:"#contextualrulebasedranker.instance_attributes",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"n","_","gram","_","number","_","indexes")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"int")," ",(0,l.kt)("br",null),"\nThe number of indexes that each n-gram length value should have when\nconverting the n-gram length to a string using\n",(0,l.kt)("inlineCode",{parentName:"li"},"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker.int_2_str"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"wildcards","_","number","_","indexes")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"int")," ",(0,l.kt)("br",null),"\nThe number of indexes that each wildcard count value should have when\nconverting the wildcard count value to a string using\n",(0,l.kt)("inlineCode",{parentName:"li"},"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker.int_2_str"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"n","_","gram","_","ranking","_","dictionary")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"Dict[int, int]")," ",(0,l.kt)("br",null),"\nMaps the n-gram length to it's rank value, as the n-gram length is\ninverse to it's rank, as the larger the n-gram length the lower it's\nrank.")),(0,l.kt)("a",{id:"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker.to_bytes"}),(0,l.kt)("h3",{id:"to_bytes"},"to","_","bytes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ContextualRuleBasedRanker(LexiconEntryRanker):\n | ...\n | def to_bytes() -> bytes\n")),(0,l.kt)("p",null,"Serialises the ",(0,l.kt)("a",{parentName:"p",href:"#contextualrulebasedranker"},(0,l.kt)("inlineCode",{parentName:"a"},"ContextualRuleBasedRanker"))," to a bytestring."),(0,l.kt)("h4",{id:"to_bytes.returns"},"Returns",(0,l.kt)("a",{className:"headerlink",href:"#to_bytes.returns",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bytes")," ",(0,l.kt)("br",null))),(0,l.kt)("a",{id:"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker.from_bytes"}),(0,l.kt)("h3",{id:"from_bytes"},"from","_","bytes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class ContextualRuleBasedRanker(LexiconEntryRanker):\n | ...\n | @staticmethod\n | def from_bytes(bytes_data: bytes) -> "ContextualRuleBasedRanker"\n')),(0,l.kt)("p",null,"Loads ",(0,l.kt)("a",{parentName:"p",href:"#contextualrulebasedranker"},(0,l.kt)("inlineCode",{parentName:"a"},"ContextualRuleBasedRanker"))," from the given bytestring and\nreturns it."),(0,l.kt)("h4",{id:"from_bytes.parameters"},"Parameters",(0,l.kt)("a",{className:"headerlink",href:"#from_bytes.parameters",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"bytes","_","data")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"bytes")," ",(0,l.kt)("br",null),"\nThe bytestring to load.")),(0,l.kt)("h4",{id:"from_bytes.returns"},"Returns",(0,l.kt)("a",{className:"headerlink",href:"#from_bytes.returns",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#contextualrulebasedranker"},(0,l.kt)("inlineCode",{parentName:"a"},"ContextualRuleBasedRanker"))," ",(0,l.kt)("br",null))),(0,l.kt)("a",{id:"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker.get_construction_arguments"}),(0,l.kt)("h3",{id:"get_construction_arguments"},"get","_","construction","_","arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ContextualRuleBasedRanker(LexiconEntryRanker):\n | ...\n | @staticmethod\n | def get_construction_arguments(\n |     rules: List['Rule']\n | ) -> Tuple[int, int]\n")),(0,l.kt)("p",null,"Given a ",(0,l.kt)("inlineCode",{parentName:"p"},"List")," of rules it will return the ",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_n_gram_length")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_number_wildcards")," from the lexicon collections that those\n",(0,l.kt)("a",{parentName:"p",href:"/pymusas/api/taggers/rules/rule/#rule"},(0,l.kt)("inlineCode",{parentName:"a"},"pymusas.taggers.rules.rule.Rule")),"(s) are based on. The output from\nthis function can then be used as the arguments to the constructor of\n",(0,l.kt)("a",{parentName:"p",href:"#contextualrulebasedranker"},(0,l.kt)("inlineCode",{parentName:"a"},"ContextualRuleBasedRanker")),"."),(0,l.kt)("h4",{id:"get_construction_arguments.parameters"},"Parameters",(0,l.kt)("a",{className:"headerlink",href:"#get_construction_arguments.parameters",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"rules")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"List[Rule]")," ",(0,l.kt)("br",null),"\nA ",(0,l.kt)("inlineCode",{parentName:"li"},"List")," of rules. This ",(0,l.kt)("inlineCode",{parentName:"li"},"List")," is typically required when creating\na ",(0,l.kt)("a",{parentName:"li",href:"/pymusas/api/taggers/rule_based/#rulebasedtagger"},(0,l.kt)("inlineCode",{parentName:"a"},"pymusas.taggers.rule_based.RuleBasedTagger"))," tagger.")),(0,l.kt)("h4",{id:"get_construction_arguments.returns"},"Returns",(0,l.kt)("a",{className:"headerlink",href:"#get_construction_arguments.returns",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Tuple[int, int]")," ",(0,l.kt)("br",null))),(0,l.kt)("h4",{id:"get_construction_arguments.examples"},"Examples",(0,l.kt)("a",{className:"headerlink",href:"#get_construction_arguments.examples",title:"Permanent link"},"\xb6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from pymusas.rankers.lexicon_entry import ContextualRuleBasedRanker\nfrom pymusas.taggers.rules.mwe import MWERule\nfrom pymusas.lexicon_collection import MWELexiconCollection\npt_mwe_lexicon_url = "https://raw.githubusercontent.com/UCREL/Multilingual-USAS/master/Portuguese/mwe-pt.tsv"\nmwe_dict = MWELexiconCollection.from_tsv(pt_mwe_lexicon_url)\nmwe_rule = MWERule(mwe_dict)\nranker_construction_arguments = ContextualRuleBasedRanker.get_construction_arguments([mwe_rule])\nranker = ContextualRuleBasedRanker(*ranker_construction_arguments)\n')),(0,l.kt)("a",{id:"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker.int_2_str"}),(0,l.kt)("h3",{id:"int_2_str"},"int","_","2","_","str"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ContextualRuleBasedRanker(LexiconEntryRanker):\n | ...\n | @staticmethod\n | def int_2_str(int_value: int, number_indexes: int) -> str\n")),(0,l.kt)("p",null,"Converts the integer, ",(0,l.kt)("inlineCode",{parentName:"p"},"int_value"),", to a string with ",(0,l.kt)("inlineCode",{parentName:"p"},"number_indexes"),",\ne.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"10")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"05")," both have ",(0,l.kt)("inlineCode",{parentName:"p"},"number_indexes")," of 2 and ",(0,l.kt)("inlineCode",{parentName:"p"},"001"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"020"),",\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"211")," have ",(0,l.kt)("inlineCode",{parentName:"p"},"number_indexes")," of 3."),(0,l.kt)("h4",{id:"int_2_str.parameters"},"Parameters",(0,l.kt)("a",{className:"headerlink",href:"#int_2_str.parameters",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"int","_","value")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"int")," ",(0,l.kt)("br",null),"\nThe integer to converts to a string with the given ",(0,l.kt)("inlineCode",{parentName:"li"},"number_indexes"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"number","_","indexes")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"int")," ",(0,l.kt)("br",null),"\nThe number of indexes the ",(0,l.kt)("inlineCode",{parentName:"li"},"int_value")," should have in the returned\nstring.")),(0,l.kt)("h4",{id:"int_2_str.returns"},"Returns",(0,l.kt)("a",{className:"headerlink",href:"#int_2_str.returns",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"str")," ",(0,l.kt)("br",null))),(0,l.kt)("h4",{id:"int_2_str.raises"},"Raises",(0,l.kt)("a",{className:"headerlink",href:"#int_2_str.raises",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ValueError ",(0,l.kt)("br",null),"\nIf the ",(0,l.kt)("inlineCode",{parentName:"li"},"number_indexes")," of the ",(0,l.kt)("inlineCode",{parentName:"li"},"int_value")," when converted to a\nstring is greater than the given ",(0,l.kt)("inlineCode",{parentName:"li"},"number_indexes"),".")),(0,l.kt)("a",{id:"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker.get_global_lowest_ranks"}),(0,l.kt)("h3",{id:"get_global_lowest_ranks"},"get","_","global","_","lowest","_","ranks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ContextualRuleBasedRanker(LexiconEntryRanker):\n | ...\n | @staticmethod\n | def get_global_lowest_ranks(\n |     token_ranking_data: List[List[RankingMetaData]],\n |     token_rankings: List[List[int]],\n |     ranking_data_to_exclude: Optional[Set[RankingMetaData]] = None\n | ) -> List[Optional[RankingMetaData]]\n")),(0,l.kt)("p",null,"Returns the global lowest ranked entry match for each token. If the value\nis ",(0,l.kt)("inlineCode",{parentName:"p"},"None")," then no global lowest ranked entry can be found for that token.\nIf the ",(0,l.kt)("inlineCode",{parentName:"p"},"RankingMetaData")," represents more than one token, like a Multi\nWord Expression (MWE) match, then those associated tokens will have the\nsame ",(0,l.kt)("inlineCode",{parentName:"p"},"RankingMetaData")," object as the global lowest ranked entry match."),(0,l.kt)("p",null,"Time Complexity, given ",(0,l.kt)("em",{parentName:"p"},"N")," is the number of tokens, ",(0,l.kt)("em",{parentName:"p"},"M")," is the number\nof unique ranking data, and ",(0,l.kt)("em",{parentName:"p"},"P")," is the number of ranking data (non-unique)\nthen the time complexity is:"),(0,l.kt)("p",null,"O(N + P) + O(M log M) + O(M)"),(0,l.kt)("h4",{id:"get_global_lowest_ranks.parameters"},"Parameters",(0,l.kt)("a",{className:"headerlink",href:"#get_global_lowest_ranks.parameters",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"token","_","ranking","_","data")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"List[List[RankingMetaData]]")," ",(0,l.kt)("br",null),"\nFor each token a ",(0,l.kt)("inlineCode",{parentName:"li"},"List")," of\n",(0,l.kt)("a",{parentName:"li",href:"/pymusas/api/rankers/ranking_meta_data/#rankingmetadata"},(0,l.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.ranking_meta_data.RankingMetaData"))," representing\nthe lexicon entry match."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"token","_","rankings")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"List[List[int]]")," ",(0,l.kt)("br",null),"\nFor each token contains the ranks of the lexicon entry matches.\n",(0,l.kt)("strong",{parentName:"li"},"Note")," that the ",(0,l.kt)("inlineCode",{parentName:"li"},"List")," can be empty if a token has no lexicon\nentry matches."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ranking","_","data","_","to","_","exclude")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"Set[RankingMetaData]"),", optional (default = ",(0,l.kt)("inlineCode",{parentName:"li"},"None"),") ",(0,l.kt)("br",null),"\nAny ",(0,l.kt)("a",{parentName:"li",href:"/pymusas/api/rankers/ranking_meta_data/#rankingmetadata"},(0,l.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.ranking_meta_data.RankingMetaData"))," to\nexclude from the ranking selection, this can be useful when wanting\nto get the next best global rank for each token.")),(0,l.kt)("h4",{id:"get_global_lowest_ranks.raises"},"Raises",(0,l.kt)("a",{className:"headerlink",href:"#get_global_lowest_ranks.raises",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AssertionError")," ",(0,l.kt)("br",null),"\nIf the length of ",(0,l.kt)("inlineCode",{parentName:"li"},"token_ranking_data")," is not equal to the length of\n",(0,l.kt)("inlineCode",{parentName:"li"},"token_rankings"),", for both the outer and inner ",(0,l.kt)("inlineCode",{parentName:"li"},"List"),"s.")),(0,l.kt)("h4",{id:"get_global_lowest_ranks.examples"},"Examples",(0,l.kt)("a",{className:"headerlink",href:"#get_global_lowest_ranks.examples",title:"Permanent link"},"\xb6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from pymusas.rankers.lexicon_entry import ContextualRuleBasedRanker\nfrom pymusas.rankers.ranking_meta_data import RankingMetaData\nfrom pymusas.lexicon_collection import LexiconType\nfrom pymusas.rankers.lexical_match import LexicalMatch\nnorth_east = RankingMetaData(LexiconType.MWE_NON_SPECIAL, 2, 0,\n                             False, LexicalMatch.TOKEN, 0, 2,\n                             'North_noun East_noun', ('Z1',))\neast_london_brewery = RankingMetaData(LexiconType.MWE_NON_SPECIAL, 3, 0,\n                                      False, LexicalMatch.TOKEN, 1, 4,\n                                      'East_noun London_noun brewery_noun', ('Z1',))\ntoken_ranking_data = [\n    [\n        north_east\n    ],\n    [\n        north_east,\n        east_london_brewery\n    ],\n    [\n        east_london_brewery\n    ],\n    [\n        east_london_brewery\n    ]\n]\ntoken_rankings = [[120110], [120110, 110111], [110111], [110111]]\nexpected_lowest_ranked_matches = [None, east_london_brewery,\n                                  east_london_brewery, east_london_brewery]\nassert (ContextualRuleBasedRanker.get_global_lowest_ranks(token_ranking_data, token_rankings, None)\n        == expected_lowest_ranked_matches)\n")),(0,l.kt)("p",null,"Following on from the previous example, we now want to find the next best\nglobal match for each token so we exclude the current best global match\nfor each token which is the ",(0,l.kt)("inlineCode",{parentName:"p"},"east_london_brewery")," match:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"expected_lowest_ranked_matches = [north_east, north_east, None, None]\nranking_data_to_exclude = {east_london_brewery}\nassert (ContextualRuleBasedRanker.get_global_lowest_ranks(token_ranking_data, token_rankings,\n                                                         ranking_data_to_exclude)\n        == expected_lowest_ranked_matches)\n")),(0,l.kt)("a",{id:"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker.__call__"}),(0,l.kt)("h3",{id:"__call__-1"},"_","_","call","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ContextualRuleBasedRanker(LexiconEntryRanker):\n | ...\n | def __call__(\n |     self,\n |     token_ranking_data: List[List[RankingMetaData]]\n | ) -> Tuple[List[List[int]], List[Optional[RankingMetaData]]]\n")),(0,l.kt)("p",null,"For each token it returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"List")," of rankings for each lexicon entry\nmatch and the optional ",(0,l.kt)("a",{parentName:"p",href:"/pymusas/api/rankers/ranking_meta_data/#rankingmetadata"},(0,l.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.ranking_meta_data.RankingMetaData")),"\nobject of the ",(0,l.kt)("strong",{parentName:"p"},"global")," lowest ranked match for each token."),(0,l.kt)("p",null,"See the ranking rules in the class docstring for details on how\neach lexicon entry match is ranked."),(0,l.kt)("p",null,"Time Complexity, given ",(0,l.kt)("em",{parentName:"p"},"N")," is the number of tokens, ",(0,l.kt)("em",{parentName:"p"},"M")," is the number\nof unique ranking data, and ",(0,l.kt)("em",{parentName:"p"},"P")," is the number of ranking data (non-unique)\nthen the time complexity is:"),(0,l.kt)("p",null,"O(3(N + P)) + O(M log M) + O(M)"),(0,l.kt)("h4",{id:"__call__.parameters"},"Parameters",(0,l.kt)("a",{className:"headerlink",href:"#__call__.parameters",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"token","_","ranking","_","data")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"List[List[RankingMetaData]]")," ",(0,l.kt)("br",null),"\nFor each token a ",(0,l.kt)("inlineCode",{parentName:"li"},"List")," of ",(0,l.kt)("a",{parentName:"li",href:"/pymusas/api/rankers/ranking_meta_data/#rankingmetadata"},(0,l.kt)("inlineCode",{parentName:"a"},"pymusas.rankers.ranking_meta_data.RankingMetaData")),"\nrepresenting the lexicon entry match.")),(0,l.kt)("h4",{id:"__call__.returns"},"Returns",(0,l.kt)("a",{className:"headerlink",href:"#__call__.returns",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Tuple[List[List[int]], List[Optional[RankingMetaData]]]")," ",(0,l.kt)("br",null))),(0,l.kt)("h4",{id:"__call__.examples"},"Examples",(0,l.kt)("a",{className:"headerlink",href:"#__call__.examples",title:"Permanent link"},"\xb6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from pymusas.rankers.lexicon_entry import ContextualRuleBasedRanker\nfrom pymusas.rankers.ranking_meta_data import RankingMetaData\nfrom pymusas.lexicon_collection import LexiconType\nfrom pymusas.rankers.lexical_match import LexicalMatch\nnorth_east = RankingMetaData(LexiconType.MWE_NON_SPECIAL, 2, 0,\n                             False, LexicalMatch.TOKEN, 0, 2,\n                             'North_noun East_noun', ('Z1',))\neast_london_brewery = RankingMetaData(LexiconType.MWE_NON_SPECIAL, 3, 0,\n                                      False, LexicalMatch.TOKEN, 1, 4,\n                                      'East_noun London_noun brewery_noun', ('Z1',))\ntoken_ranking_data = [\n    [\n        north_east\n    ],\n    [\n        north_east,\n        east_london_brewery\n    ],\n    [\n        east_london_brewery\n    ],\n    [\n        east_london_brewery\n    ]\n]\nexpected_ranks = [[120110], [120110, 110111], [110111], [110111]]\nexpected_lowest_ranked_matches = [None, east_london_brewery,\n                                  east_london_brewery, east_london_brewery]\nranker = ContextualRuleBasedRanker(3, 0)\nassert ((expected_ranks, expected_lowest_ranked_matches)\n        == ranker(token_ranking_data))\n")),(0,l.kt)("a",{id:"pymusas.rankers.lexicon_entry.ContextualRuleBasedRanker.__eq__"}),(0,l.kt)("h3",{id:"__eq__"},"_","_","eq","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ContextualRuleBasedRanker(LexiconEntryRanker):\n | ...\n | def __eq__(other: object) -> bool\n")),(0,l.kt)("p",null,"Given another object to compare too it will return ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," if the other\nobject is the same class and was initialised using with the same\n",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_n_gram_length")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"maximum_number_wildcards")," values."),(0,l.kt)("h4",{id:"__eq__.parameters"},"Parameters",(0,l.kt)("a",{className:"headerlink",href:"#__eq__.parameters",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"other")," : ",(0,l.kt)("inlineCode",{parentName:"li"},"object")," ",(0,l.kt)("br",null),"\nThe object to compare too.")),(0,l.kt)("h4",{id:"__eq__.returns"},"Returns",(0,l.kt)("a",{className:"headerlink",href:"#__eq__.returns",title:"Permanent link"},"\xb6")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"True")," ",(0,l.kt)("br",null))))}p.isMDXComponent=!0}}]);