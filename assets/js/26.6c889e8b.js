(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{489:function(t,e,i){"use strict";i.r(e);var s=i(417),a=i.n(s),n={props:{id:{type:String,default:"#code-example"},height:{type:String,default:"300px"}},computed:{style:function(){return"height: "+this.height}},mounted:function(){var t=new a.a.Shape({parent:"#"+this.id,shape:"circle",stroke:"#FC46AD",strokeDasharray:"125, 125",strokeDashoffset:{0:"-125"},strokeWidth:4,fill:"none",left:"50%",top:"50%",rotate:{"-90":"270"},radius:20,isShowStart:!0,duration:2e3,easing:"back.in"}).then({rotate:{"-90":"270"},strokeDashoffset:{"-125":"-250"},duration:3e3,easing:"cubic.out",onComplete:function(){t.replay(0)}}).play()}},o=i(54),r=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"interactive-code"},[this._t("default"),this._v(" "),e("div",{staticClass:"example-anim",style:this.style,attrs:{id:this.id}})],2)}),[],!1,null,null,null);e.default=r.exports}}]);