(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{508:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"shapeswirl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shapeswirl"}},[t._v("#")]),t._v(" ShapeSwirl")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://codepen.io/sol0mka/pen/pbebwQ?editors=0010",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodePen Example"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/api/modules/shape/"}},[t._v("Shape API")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/api/tweens/tween.html"}},[t._v("Tween API")])],1)]),t._v(" "),n("p",[t._v("Full API reference:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" shapeSwirl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mojs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ShapeSwirl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ∆ :: Diviation size of sine. {Number}")]),t._v("\n  swirlSize"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ∆ :: Frequency of sine. {Number}")]),t._v("\n  swirlFrequency"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ∆ :: Sine length scale. {Number} [ 0..1 ]")]),t._v("\n  pathScale"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ∆ :: Degree shift for sine path. {Number}")]),t._v("\n  degreeShift"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("        "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [number: -1, 1] :: Directon of sine. {Number} [ -1, 1 ]")]),t._v("\n  direction"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("          "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If shape should follow sinusoidal path. {Boolean}")]),t._v("\n  isSwirl"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("            "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* (+) SHAPE PROPERTIES AND CALLBACKS - see Shape API */")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Creates next state transition chain.\n    @param options {Object} Next shape state.\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* next state options */")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Tunes start state with new options.\n    @param options {Object} New start properties.\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tune")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* new start properties */")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Regenerates all randoms in initial properties.\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Starts playback.\n    @param shift {Number} Start progress shift in milliseconds.\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" shift "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Starts playback in backward direction.\n    @param shift {Number} Start progress shift in milliseconds.\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("playBackward")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" shift "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Pauses playback.\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pause")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Restarts playback.\n    @param shift {Number} Start progress shift in milliseconds.\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replay")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" shift "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Restarts playback in backward direction.\n    @param shift {Number} Start progress shift in milliseconds.\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("replayBackward")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" shift "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Resumes playback in direction it was prior to `pause`.\n    @param shift {Number} Start progress shift in milliseconds.\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resume")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" shift "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Sets progress of the tween.\n    @param progress {Number} Progress to set [ 0..1 ].\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProgress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" progress "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    Sets speed of the tween.\n    @param speed {Number} Progress to set [ 0..∞ ].\n  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSpeed")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" speed "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Stops and resets the tween. */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" speed "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("ul",[n("li",[n("a",{attrs:{href:"https://codepen.io/sol0mka/pen/pbebwQ?editors=0010",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodePen Example"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/api/modules/shape/"}},[t._v("Shape API")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/api/tweens/tween.html"}},[t._v("Tween API")])],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);