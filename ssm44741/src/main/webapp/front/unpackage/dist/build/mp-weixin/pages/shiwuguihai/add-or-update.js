(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shiwuguihai/add-or-update"],{"07a4":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=u(i("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function r(n,e,i,t,u,r,a){try{var o=n[r](a),s=o.value}catch(c){return void i(c)}o.done?e(s):Promise.resolve(s).then(t,u)}function a(n){return function(){var e=this,i=arguments;return new Promise((function(t,u){var a=n.apply(e,i);function o(n){r(a,t,u,o,s,"next",n)}function s(n){r(a,t,u,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("b1dd"))}.bind(null,i)).catch(i.oe)},s={data:function(){return{ruleForm:{yonghuming:"",shizhuxingming:"",wupinmingcheng:"",wupinleibie:"",tupian:"",shiqudidian:"",shiqushijian:"",wupinzhuangtai:"",zhanghao:"",xingming:"",shouji:"",sfsh:"",shhf:"",userid:""},wupinzhuangtaiOptions:[],wupinzhuangtaiIndex:0,user:{},ro:{yonghuming:!1,shizhuxingming:!1,wupinmingcheng:!1,wupinleibie:!1,tupian:!1,shiqudidian:!1,shiqushijian:!1,wupinzhuangtai:!1,zhanghao:!1,xingming:!1,shouji:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var i=this;return a(t.default.mark((function u(){var r,a,o,s;return t.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return r=n.getStorageSync("nowTable"),u.next=3,i.$api.session(r);case 3:if(a=u.sent,i.user=a.data,i.ruleForm.zhanghao=i.user.zhanghao,i.ruleForm.xingming=i.user.xingming,i.ruleForm.shouji=i.user.shouji,i.wupinzhuangtaiOptions="已归还,待归还".split(","),i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid,i.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){u.next=17;break}return i.ruleForm.id=e.id,u.next=15,i.$api.info("shiwuguihai",i.ruleForm.id);case 15:a=u.sent,i.ruleForm=a.data;case 17:if(!e.cross){u.next=72;break}o=n.getStorageSync("crossObj"),u.t0=t.default.keys(o);case 20:if((u.t1=u.t0()).done){u.next=72;break}if(s=u.t1.value,"yonghuming"!=s){u.next=26;break}return i.ruleForm.yonghuming=o[s],i.ro.yonghuming=!0,u.abrupt("continue",20);case 26:if("shizhuxingming"!=s){u.next=30;break}return i.ruleForm.shizhuxingming=o[s],i.ro.shizhuxingming=!0,u.abrupt("continue",20);case 30:if("wupinmingcheng"!=s){u.next=34;break}return i.ruleForm.wupinmingcheng=o[s],i.ro.wupinmingcheng=!0,u.abrupt("continue",20);case 34:if("wupinleibie"!=s){u.next=38;break}return i.ruleForm.wupinleibie=o[s],i.ro.wupinleibie=!0,u.abrupt("continue",20);case 38:if("tupian"!=s){u.next=42;break}return i.ruleForm.tupian=o[s],i.ro.tupian=!0,u.abrupt("continue",20);case 42:if("shiqudidian"!=s){u.next=46;break}return i.ruleForm.shiqudidian=o[s],i.ro.shiqudidian=!0,u.abrupt("continue",20);case 46:if("shiqushijian"!=s){u.next=50;break}return i.ruleForm.shiqushijian=o[s],i.ro.shiqushijian=!0,u.abrupt("continue",20);case 50:if("wupinzhuangtai"!=s){u.next=54;break}return i.ruleForm.wupinzhuangtai=o[s],i.ro.wupinzhuangtai=!0,u.abrupt("continue",20);case 54:if("zhanghao"!=s){u.next=58;break}return i.ruleForm.zhanghao=o[s],i.ro.zhanghao=!0,u.abrupt("continue",20);case 58:if("xingming"!=s){u.next=62;break}return i.ruleForm.xingming=o[s],i.ro.xingming=!0,u.abrupt("continue",20);case 62:if("shouji"!=s){u.next=66;break}return i.ruleForm.shouji=o[s],i.ro.shouji=!0,u.abrupt("continue",20);case 66:if("userid"!=s){u.next=70;break}return i.ruleForm.userid=o[s],i.ro.userid=!0,u.abrupt("continue",20);case 70:u.next=20;break;case 72:i.styleChange();case 73:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shiqushijianConfirm:function(n){console.log(n),this.ruleForm.shiqushijian=n.result,this.$forceUpdate()},wupinzhuangtaiChange:function(n){this.wupinzhuangtaiIndex=n.target.value,this.ruleForm.wupinzhuangtai=this.wupinzhuangtaiOptions[this.wupinzhuangtaiIndex]},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.shouji||n.$validate.isMobile(n.ruleForm.shouji)){e.next=3;break}return n.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 3:if(!n.ruleForm.id){e.next=8;break}return e.next=6,n.$api.update("shiwuguihai",n.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,n.$api.add("shiwuguihai",n.ruleForm);case 10:n.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,u=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,u=u>9?u:"0"+u,"".concat(i,"-").concat(t,"-").concat(u)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,i("543d")["default"])},"0f54":function(n,e,i){"use strict";i.r(e);var t=i("6adf"),u=i("4e65");for(var r in u)"default"!==r&&function(n){i.d(e,n,(function(){return u[n]}))}(r);i("6e4a");var a,o=i("f0c5"),s=Object(o["a"])(u["default"],t["b"],t["c"],!1,null,"285d258a",null,!1,t["a"],a);e["default"]=s.exports},"4e65":function(n,e,i){"use strict";i.r(e);var t=i("07a4"),u=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);e["default"]=u.a},"68a7":function(n,e,i){"use strict";(function(n){i("c23b");t(i("66fd"));var e=t(i("0f54"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},"6adf":function(n,e,i){"use strict";i.d(e,"b",(function(){return u})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"b1dd"))}},u=function(){var n=this,e=n.$createElement;n._self._c},r=[]},"6e4a":function(n,e,i){"use strict";var t=i("ec2a"),u=i.n(t);u.a},ec2a:function(n,e,i){}},[["68a7","common/runtime","common/vendor"]]]);