(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(17),a(1)),l=a.n(s),i=a(2),u=a(5),m=a(6),d=a(9),p=a(7),h=a(10),g=a(8),b=a.n(g),f=(a(19),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).getVersionData=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tranquil-caverns-41069.herokuapp.com/version");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}},e)})),a.getCarsData=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tranquil-caverns-41069.herokuapp.com/cars");case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}},e)})),a.state={version:null,cars:null},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getVersionData().then(function(t){return e.setState({version:t.version})}).catch(function(e){return console.log(e)}),this.getCarsData().then(function(t){return e.setState({cars:t.cars})}).catch(function(e){return console.log(e)})}},{key:"getPostData",value:function(){this.setState({cars:this.state.cars.push({make:"",model:"",year:"",rating:""})}),this.render()}},{key:"getDeleteData",value:function(){}},{key:"getPutData",value:function(){}},{key:"render",value:function(){var e;e=null==this.state.version?"Loading ...":this.state.version;var t,a={"border-collapse":"collapse",border:"1px solid #dddddd"};return t=null==this.state.cars?r.a.createElement("p",null,'"Loading ..."'):this.state.cars.map(function(e){return r.a.createElement("tr",{style:a},r.a.createElement("td",null,e.make),r.a.createElement("td",null,e.model),r.a.createElement("td",null,e.year),r.a.createElement("td",null,e.rating))}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header",style:{height:"50%"}},r.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"Welcome to React"),r.a.createElement("p",null,e)),r.a.createElement("table",{style:{width:"80%","border-collapse":"collapse",border:"1px solid #dddddd",margin:"1em auto"}},r.a.createElement("tr",{style:a},r.a.createElement("th",null,"Make"),r.a.createElement("th",null,"Model"),r.a.createElement("th",null,"Year"),r.a.createElement("th",null,"Rating")),t),r.a.createElement("button",{type:"button",style:{"margin-bottom":"1em"},onclick:"getPostData()"},"POST"),r.a.createElement("button",{type:"button",style:{"margin-bottom":"1em"},onclick:"getPutData()"},"PUT"),r.a.createElement("button",{type:"button",style:{"margin-bottom":"1em"},onclick:"getDeleteData()"},"DELETE"),r.a.createElement("button",{type:"button",style:{"margin-bottom":"1em"},onclick:"getPostData()"},"SUMBIT"))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.e1705336.chunk.js.map