(function(t){function e(e){for(var s,o,u=e[0],a=e[1],c=e[2],h=0,d=[];h<u.length;h++)o=u[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,u=1;u<n.length;u++){var a=n[u];0!==i[a]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/mv-count-down/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var m=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"107d":function(t,e,n){"use strict";var s=n("41f9"),i=n.n(s);i.a},"41f9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("mv-count-down 倒计时组件")]),n("router-view")],1)},r=[],o=(n("5c0b"),n("2877")),u={},a=Object(o["a"])(u,i,r,!1,null,null,null),c=a.exports,m=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("mv-count-down",{attrs:{startTime:t.startTime,endTime:t.endTime,endText:t.endText,dayTxt:"天",hourTxt:"小时",minutesTxt:"分钟",secondsTxt:"秒",isStart:t.isStart},on:{startCallback:t.countDownS_cb,endCallback:t.countDownE_cb}})],1)},d=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mv-count-down"},[t.msTime.show?n("p",[t.msTime.day>0?n("span",[n("span",[t._v(t._s(t.msTime.day))]),n("i",[t._v(t._s(t.dayTxt))])]):t._e(),n("span",[t._v(t._s(t.msTime.hour))]),n("i",[t._v(t._s(t.hourTxt))]),n("span",[t._v(t._s(t.msTime.minutes))]),n("i",[t._v(t._s(t.minutesTxt))]),n("span",[t._v(t._s(t.msTime.seconds))]),n("i",[t._v(t._s(t.secondsTxt))])]):t._e(),t.msTime.show?t._e():n("p",[t._v(t._s(t.endText))])])},f=[],p=(n("6b54"),n("c5f6"),{replace:!0,data:function(){return{tipShow:!0,msTime:{show:!1,day:"",hour:"",minutes:"",seconds:""},star:"",end:"",current:""}},props:{isStart:{type:Boolean,default:!1},tipText:{type:String,default:"距离开始"},tipTextEnd:{type:String,default:"距离结束"},id:{type:String,default:"1"},currentTime:{type:Number},startTime:{type:Number},endTime:{type:Number},endText:{type:String,default:"已结束"},dayTxt:{type:String,default:":"},hourTxt:{type:String,default:":"},minutesTxt:{type:String,default:":"},secondsTxt:{type:String,default:":"},secondsFixed:{type:Boolean,default:!1}},mounted:function(){console.log(this)},watch:{isStart:{handler:function(t){t&&this.gogogo()},immediate:!0},currentTime:function(t,e){this.gogogo()}},methods:{gogogo:function(){var t=this;10==this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime,10==this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime,this.currentTime?10==this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout(function(){t.runTime(t.star,t.current,t.start_message)},1)):(this.end>this.current&&this.star<this.current||this.star==this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.$emit("start_callback",this.msTime.show),setTimeout(function(){t.runTime(t.end,t.star,t.end_message,!0)},1))},runTime:function(t,e,n,s){var i=this,r=this.msTime,o=t-e;if(o>0){this.msTime.show=!0,r.day=Math.floor(o/864e5),o-=864e5*r.day,r.hour=Math.floor(o/36e5),o-=36e5*r.hour,r.minutes=Math.floor(o/6e4),o-=6e4*r.minutes,r.seconds=Math.floor(o/1e3).toFixed(0),o-=1e3*r.seconds,r.hour<10&&(r.hour="0"+r.hour),r.minutes<10&&(r.minutes="0"+r.minutes),r.seconds<10&&(r.seconds="0"+r.seconds);var u=Date.now(),a=Date.now(),c=a-u;setTimeout(function(){s?i.runTime(i.end,e+=1e3,n,!0):i.runTime(i.star,e+=1e3,n)},1e3-c)}else n()},start_message:function(){var t=this;this.$set(this,"tipShow",!1),this.$emit("startCallback",this.msTime.show),setTimeout(function(){t.runTime(t.end,t.star,t.end_message,!0)},1)},end_message:function(){this.msTime.show=!1,this.currentTime<=0||this.$emit("endCallback",this.msTime.show)}},destroyed:function(){}}),T=p,g=(n("107d"),Object(o["a"])(T,l,f,!1,null,"0e7e3f16",null)),v=g.exports,_={name:"home",components:{MvCountDown:v},data:function(){return{content:"",startTime:(new Date).getTime(),endTime:0,endText:"",isStart:!1}},created:function(){this.setEndTime(111160)},methods:{setEndTime:function(t){var e=new Date,n=new Date(e.setSeconds(e.getSeconds()+t));this.endTime=n.getTime(),this.isStart=!0},countDownS_cb:function(t){console.log(t)},countDownE_cb:function(t){console.log(t)}}},w=_,y=Object(o["a"])(w,h,d,!1,null,null,null),b=y.exports;s["a"].use(m["a"]);var S=new m["a"]({routes:[{path:"/",name:"home",component:b}]}),x=n("2f62");s["a"].use(x["a"]);var O=new x["a"].Store({state:{},mutations:{},actions:{}});s["a"].config.productionTip=!1,new s["a"]({router:S,store:O,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("e332"),i=n.n(s);i.a},e332:function(t,e,n){}});