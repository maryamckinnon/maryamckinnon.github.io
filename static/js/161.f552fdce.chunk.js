(self.webpackChunkmaryamckinnon_github_io=self.webpackChunkmaryamckinnon_github_io||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});n(2791);var i=n(1523),r=n(7187),s=n(7892),a=n.n(s),o=n(184),c=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,target:"_newtab",children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,target:"_newtab",className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},u=[{title:"Nomad Nerds",link:"https://maryamckinnon.gitlab.io/nomad-nerds-revamped/",image:"/images/projects/nomadnerdsrevamped.png",date:"2022-11-01",desc:"A full-stack web application designed to provide information regarding city and activity recommendations by leveraging data from a Yelp API. Technologies used include Django, FastAPI, React, Docker, postgreSQL, and Heroku."},{title:"CarCar",link:"https://maryamckinnon.gitlab.io/project-beta",image:"/images/projects/carcar.png",date:"2022-09-15",desc:"A full-stack web application designed to help an automobile dealership manage the inventory, sales, and servicing. It has a Django back-end and React front-end and utilizes postgreSQL relational databases."},{title:"Conference GO",link:"https://gitlab.com/maryamckinnon/fearless-frontend",image:"/images/projects/conferencego.png",date:"2022-07-05",desc:"A full-stack web application designed to allow people to plan software developer conferences. It has a Django back-end, React front-end, and leverages third-party API information for conference details."},{title:"Wardrobify",link:"https://gitlab.com/maryamckinnon/microservice-two-shot",image:"/images/projects/wardrobify3.png",date:"2022-06-15",desc:"An API-based full-stack web application developed to make it easier for those who have many items in their wardrobe to find items easier. It has a Django back-end and a React front-end."}],d=function(){return(0,o.jsx)(r.Z,{title:"Projects",description:"Learn about Mary McKinnon's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(i.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"What I've been up to lately"})]})}),u.map((function(t){return(0,o.jsx)(c,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",c="week",u="month",d="quarter",h="year",l="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},v={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,u),s=n-r<0,a=e.clone().add(i+(s?-1:1),u);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:o,D:l,h:a,m:s,s:r,ms:i,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=p;var D=function(t){return t instanceof S},w=function t(e,n,i){var r;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(r=s),n&&(M[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,r=o}return!i&&r&&(y=r),r||!i&&y},b=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},j=v;j.l=w,j.i=D,j.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function p(t){this.$L=w(t.locale,null,!0),this.parse(t)}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return j},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return b(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<b(t)},g.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,i=!!j.u(e)||e,d=j.p(t),f=function(t,e){var r=j.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},m=function(t,e){return j.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,p=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case h:return i?f(1,0):f(31,11);case u:return i?f(1,p):f(0,p+1);case c:var y=this.$locale().weekStart||0,M=($<y?$+7:$)-y;return f(i?g-M:g+(6-M),p);case o:case l:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case s:return m(v+"Seconds",2);case r:return m(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,c=j.p(t),d="set"+(this.$u?"UTC":""),f=(n={},n[o]=d+"Date",n[l]=d+"Date",n[u]=d+"Month",n[h]=d+"FullYear",n[a]=d+"Hours",n[s]=d+"Minutes",n[r]=d+"Seconds",n[i]=d+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===h){var $=this.clone().set(l,1);$.$d[f](m),$.init(),this.$d=$.set(l,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[j.p(t)]()},g.add=function(i,d){var l,f=this;i=Number(i);var m=j.p(d),$=function(t){var e=b(f);return j.w(e.date(e.date()+Math.round(t*i)),f)};if(m===u)return this.set(u,this.$M+i);if(m===h)return this.set(h,this.$y+i);if(m===o)return $(1);if(m===c)return $(7);var p=(l={},l[s]=e,l[a]=n,l[r]=t,l)[m]||1,g=this.$d.getTime()+i*p;return j.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=j.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,d=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},h=function(t){return j.s(s%12||12,t,"0")},l=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:j.s(o+1,2,"0"),MMM:d(n.monthsShort,o,u,3),MMMM:d(u,o),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,c,2),ddd:d(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:j.s(s,2,"0"),h:h(1),hh:h(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:j.s(a,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:r};return i.replace($,(function(t,e){return e||m[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,l,f){var m,$=j.p(l),p=b(i),g=(p.utcOffset()-this.utcOffset())*e,v=this-p,y=j.m(this,p);return y=(m={},m[h]=y/12,m[u]=y,m[d]=y/3,m[c]=(v-g)/6048e5,m[o]=(v-g)/864e5,m[a]=v/n,m[s]=v/e,m[r]=v/t,m)[$]||v,f?y:j.a(y)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},g.clone=function(){return j.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),k=S.prototype;return b.prototype=k,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",u],["$y",h],["$D",l]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,S,b),t.$i=!0),b},b.locale=w,b.isDayjs=D,b.unix=function(t){return b(1e3*t)},b.en=M[y],b.Ls=M,b.p={},b}()}}]);
//# sourceMappingURL=161.f552fdce.chunk.js.map