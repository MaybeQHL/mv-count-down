(function(t){function e(e){for(var s,o,a=e[0],u=e[1],c=e[2],h=0,d=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/mv-count-down/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0337":function(t,e,n){"use strict";var s=n("d127"),i=n.n(s);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("img",{attrs:{src:n("cf05")}}),s("h1",[t._v("mv-count-down 倒计时组件")]),s("main",[s("router-view")],1)])},r=[],o=(n("5c0b"),n("2877")),a={},u=Object(o["a"])(a,i,r,!1,null,null,null),c=u.exports,m=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("mv-count-down",{attrs:{startTime:t.startTime,endTime:t.endTime,endText:t.endText,dayTxt:"天",hourTxt:"小时",minutesTxt:"分钟",secondsTxt:"秒",isStart:t.isStart},on:{startCallback:t.countDownS,endCallback:t.countDownE}}),n("a",{staticClass:"link-blue",attrs:{href:"https://gitee.com/null_639_5368/mv-count-down/blob/master/src/views/Home.vue"}},[t._v("查看demo")])],1)},d=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mv-count-down"},[t.msTime.show?n("p",[t.msTime.day>0?n("span",[n("span",[t._v(t._s(t.msTime.day))]),n("i",[t._v(t._s(t.dayTxt))])]):t._e(),n("span",[t._v(t._s(t.msTime.hour))]),n("i",[t._v(t._s(t.hourTxt))]),n("span",[t._v(t._s(t.msTime.minutes))]),n("i",[t._v(t._s(t.minutesTxt))]),n("span",[t._v(t._s(t.msTime.seconds))]),n("i",[t._v(t._s(t.secondsTxt))])]):t._e(),t.msTime.show?t._e():n("p",[t._v(t._s(t.endText))])])},f=[],p=(n("6b54"),n("c5f6"),{name:"MvCountDown",replace:!0,data:function(){return{tipShow:!0,msTime:{show:!1,day:"",hour:"",minutes:"",seconds:""},star:"",end:"",current:""}},props:{isStart:{type:Boolean,default:!1},tipText:{type:String,default:"距离开始"},tipTextEnd:{type:String,default:"距离结束"},id:{type:String,default:"1"},currentTime:{type:Number},startTime:{type:Number},endTime:{type:Number},endText:{type:String,default:"已结束"},dayTxt:{type:String,default:":"},hourTxt:{type:String,default:":"},minutesTxt:{type:String,default:":"},secondsTxt:{type:String,default:":"},secondsFixed:{type:Boolean,default:!1}},mounted:function(){console.log(this)},watch:{isStart:{handler:function(t){t&&this.gogogo()},immediate:!0},currentTime:function(t,e){this.gogogo()}},methods:{gogogo:function(){var t=this;10==this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime,10==this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime,this.currentTime?10==this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout(function(){t.runTime(t.star,t.current,t.start_message)},1)):(this.end>this.current&&this.star<this.current||this.star==this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.$emit("start_callback",this.msTime.show),setTimeout(function(){t.runTime(t.end,t.star,t.end_message,!0)},1))},runTime:function(t,e,n,s){var i=this,r=this.msTime,o=t-e;if(o>0){this.msTime.show=!0,r.day=Math.floor(o/864e5),o-=864e5*r.day,r.hour=Math.floor(o/36e5),o-=36e5*r.hour,r.minutes=Math.floor(o/6e4),o-=6e4*r.minutes,r.seconds=Math.floor(o/1e3).toFixed(0),o-=1e3*r.seconds,r.hour<10&&(r.hour="0"+r.hour),r.minutes<10&&(r.minutes="0"+r.minutes),r.seconds<10&&(r.seconds="0"+r.seconds);var a=Date.now(),u=Date.now(),c=u-a;setTimeout(function(){s?i.runTime(i.end,e+=1e3,n,!0):i.runTime(i.star,e+=1e3,n)},1e3-c)}else n()},start_message:function(){var t=this;this.$set(this,"tipShow",!1),this.$emit("startCallback",this.msTime.show),setTimeout(function(){t.runTime(t.end,t.star,t.end_message,!0)},1)},end_message:function(){this.msTime.show=!1,this.currentTime<=0||this.$emit("endCallback",this.msTime.show)}},destroyed:function(){}}),T=p,v=(n("d885"),Object(o["a"])(T,l,f,!1,null,"b1370b30",null)),g=v.exports,w={name:"home",components:{MvCountDown:g},data:function(){return{startTime:(new Date).getTime(),endTime:0,endText:"倒计时结束",isStart:!1}},created:function(){this.setEndTime(10)},methods:{callback:function(){},setEndTime:function(t){var e=new Date,n=new Date(e.setSeconds(e.getSeconds()+t));this.endTime=n.getTime(),this.isStart=!0},countDownS:function(t){console.log(t)},countDownE:function(){this.callback()}}},_=w,b=(n("0337"),Object(o["a"])(_,h,d,!1,null,"f5e769a6",null)),y=b.exports;s["a"].use(m["a"]);var x=[{path:"/",name:"home",component:y}],S=new m["a"]({mode:"hash",routes:x}),O=S,j=n("2f62");s["a"].use(j["a"]);var D=new j["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:O,store:D,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("e332"),i=n.n(s);i.a},"5f9d":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"assets/img/logo.82b9c7a5.png"},d127:function(t,e,n){},d885:function(t,e,n){"use strict";var s=n("5f9d"),i=n.n(s);i.a},e332:function(t,e,n){}});