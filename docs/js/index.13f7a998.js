(function(t){function e(e){for(var a,n,m=e[0],r=e[1],c=e[2],u=0,p=[];u<m.length;u++)n=m[u],i[n]&&p.push(i[n][0]),i[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,m=1;m<s.length;m++){var r=s[m];0!==i[r]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={index:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var m=window["webpackJsonp"]=window["webpackJsonp"]||[],r=m.push.bind(m);m.push=e,m=m.slice();for(var c=0;c<m.length;c++)e(m[c]);var l=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Heading",{attrs:{msg:"commissions i'm waiting on..."}}),t._m(0),s("p",[s("span",{domProps:{innerHTML:t._s(t.currentOptions)}})]),s("br"),s("div",{staticClass:"commgroup"},[s("table",{staticClass:"commtable"},[t._m(1),s("tbody",t._l(t.commissions,function(e){return s("tr",{key:e.commission_id,staticClass:"comm",attrs:{id:e.commission_id}},[s("td",{staticClass:"commdata"},[s("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Click to view timeline",expression:"'Click to view timeline'"}],attrs:{href:"/timeline?"+e.commission_id}},[t._v(t._s(e.commission_name))])]),s("td",{staticClass:"commdata"},t._l(e.detail_artist,function(e){return s("a",{attrs:{href:e.artist_url}},[t._v(t._s(e.artist_name)),s("br")])}),0),s("td",{staticClass:"commdata"},[t._v("\n            "+t._s(t._f("moment")(e.detail_date_of_commission/1,"dddd, MMMM Do YYYY, h:mm:ss a"))+"\n          ")]),s("td",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"Value of commission in USD: $"+e.commission_cost_USD,expression:"'Value of commission in USD: $'+commission.commission_cost_USD"}],staticClass:"commdata"},[t._v("\n            "+t._s(t._f("moment")(e.detail_date_of_completed_payment/1,"dddd, MMMM Do YYYY, h:mm:ss a"))+"\n          ")]),s("td",{staticClass:"commdata"},[s("a",{class:e.state_css,attrs:{href:e.latest_status_link,target:"_blank"}},[t._v(t._s(e.latest_status))])]),s("td",{staticClass:"commdata"},[t._v("\n            "+t._s(t._f("timecalc")(e))+"\n          ")])])}),0)])])],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"https://ref.basicallyodd.net"}},[s("p",{staticStyle:{"font-style":"italic"}},[t._v("\n      View Completed Art of My Characters Here (Click)\n    ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"commdata"},[t._v("Commission")]),s("th",{staticClass:"commdata"},[t._v("Artist(s)")]),s("th",{staticClass:"commdata"},[t._v("Date of Commission")]),s("th",{staticClass:"commdata"},[t._v("Date of Payment")]),s("th",{staticClass:"commdata"},[t._v("Status")]),s("th",{staticClass:"commdata"},[t._v("Time Since Start of Commission")])])])}],n=(s("28a5"),s("386d"),s("b43e")),m=s("b76a"),r=(window.location.pathname,window.location.search),c=r.split("?")[1],l="",u=!1;"includefinished"==c?(l='<a href="/"><button>Showing Completed Items, click to exclude completed</button></a>',u=!0):l='<a href="?includefinished"><button>Hiding Completed Items, click to include completed</button></a>';for(var p=[],d=0;d<m.length;d++){var _=m[d];0==_["state_complete"]?p.push(_):1==u&&p.push(_)}var f=Math.floor((new Date).getTime()/1e3),h={name:"app",components:{Heading:n["a"]},data:function(){return{commissions:p,time:f,currentOptions:l}},computed:{activeComms:function(){return this.commissions.filter(function(t){return!t.state_complete})}},filters:{timesince:function(t){var e=parseInt(f-t,10),s=Math.floor(e/86400);e-=3600*s*24;var a=Math.floor(e/3600);e-=3600*a;var i=Math.floor(e/60);return e-=60*i,s+" days, "+a+" hours, "+i+" minutes"},timecalc:function(t){if("Done"===t.latest_status){var e=t.updates[t.updates.length-1].timestamp,s=parseInt(e-t.detail_date_of_completed_payment,10),a=Math.floor(s/86400);s-=3600*a*24;var i=Math.floor(s/3600);s-=3600*i;var o=Math.floor(s/60);return s-=60*o,"Received finished piece after "+a+" days, "+i+" hours, "+o+" minutes"}e=t.detail_date_of_completed_payment,s=parseInt(f-e,10),a=Math.floor(s/86400);s-=3600*a*24;i=Math.floor(s/3600);s-=3600*i;o=Math.floor(s/60);return s-=60*o,"Waiting for "+a+" days, "+i+" hours, "+o+" minutes"}}},v=h,w=(s("034f"),s("2877")),y=Object(w["a"])(v,i,o,!1,null,null,null),b=y.exports,g=s("c0d6"),k=s("e37d");a["a"].config.productionTip=!1,a["a"].use(s("2ead")),a["a"].use(k["a"]),new a["a"]({store:g["a"],render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,s){},b43e:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"heading"},[s("h1",[t._v(t._s(t.msg))])])},i=[],o={name:"Heading",props:{msg:String}},n=o,m=s("2877"),r=Object(m["a"])(n,a,i,!1,null,null,null);e["a"]=r.exports},b76a:function(t){t.exports=[{commission_id:"2a85045a",commission_name:"Paws and Butt YCH",commission_cost_USD:65,sfw:!1,detail_artist:[{artist_name:"QTipps",artist_url:"https://www.furaffinity.net/user/qtipps/"}],detail_date_of_commission:"1543001640",detail_date_of_completed_payment:"1543625460",latest_status:"Paid, not started",latest_status_link:"https://trello.com/c/rNbX5Myg/470-paws-n-butt-ych",updates:[{timestamp:"1543001640",status:"Commission start",link:"#"},{timestamp:"1543625460",status:"Commission payment sent",link:"#"},{timestamp:"1545187500",status:"Twitter DM conversation; could not see commission in queue, so I reached out. Artist noted they would add the comm to the queue. ",link:"#"},{timestamp:"1546371000",status:"Twitter DM conversation; reached out to say Happy New Year, also still didn't see comm in queue. No response.",link:"#"},{timestamp:"1548964140",status:"Twitter DM conversation; reached out to check in, still couldn't see in queue. Artist advises to message on Telegram for future communications, notes they will add the commission to the queue",link:"#"},{timestamp:"1548964740",status:"Commission first appears in Trello Queue",link:"https://trello.com/c/rNbX5Myg/470-paws-n-butt-ych"},{timestamp:"1554328560",status:"Telegram DM communication: asked for status report, received: 'Ay!!! I havent started it sadly TvT but as soon as I fo I'll be sure to notify you here uvu! Your patience is much appreciated ! '",link:"https://trello.com/c/rNbX5Myg/470-paws-n-butt-ych"},{timestamp:"1558133100",status:"Telegram DM communication: asked for status report, received: 'HEY!!! thanks for checking in!!! I'm sorry I havent gotten started on it quite yet! Since I started a new job I'm not home as often but I have a big break coming up so I'm hoping to get a bunch of my NSFW stuff finished up! '",link:"https://trello.com/c/rNbX5Myg/470-paws-n-butt-ych"},{timestamp:"1562602500",status:"Telegram DM communication: asked for status report, received: 'Hey!! Unfortunately there isnt ;v; I've been caughl be sure to give you an update asap! '",link:"https://trello.com/c/rNbX5Myg/470-paws-n-butt-ych"}],state_complete:!1,state_css:"notstarted"},{commission_id:"40c3059d",commission_name:"YCH 148 Slot 3",commission_cost_USD:40,sfw:!1,detail_artist:[{artist_name:"Artararam",artist_url:"https://www.furaffinity.net/user/artararam/"}],detail_date_of_commission:"1556047140",detail_date_of_completed_payment:"1556211960",latest_status:"Done",latest_status_link:"https://pp.userapi.com/c851332/v851332162/157d9c/zUsU2e71NGQ.jpg",updates:[{timestamp:"1556047140",status:"Commission start",link:"#"},{timestamp:"1556211960",status:"Commission payment sent",link:"#"},{timestamp:"1561418940",status:"Final commission product received",link:"https://pp.userapi.com/c851332/v851332162/157d9c/zUsU2e71NGQ.jpg"}],state_complete:!0,state_css:"done"},{commission_id:"319804bb",commission_name:"Ych Portrait [Pic for 1]",detail_artist:[{artist_name:"regigi9",artist_url:"https://www.furaffinity.net/user/regigi9/"}],sfw:!0,commission_cost_USD:30,detail_date_of_commission:"1558462920",detail_date_of_completed_payment:"1558542600",latest_status:"Done",latest_status_link:"https://www.furaffinity.net/view/31721613/",updates:[{timestamp:"1558462920",status:"Commission start",link:"#"},{timestamp:"1558542600",status:"Commmission payment sent",link:"#"},{timestamp:"1559203500",status:"Final commission product received",link:"https://www.furaffinity.net/view/31721613/"}],state_complete:!0,state_css:"done"},{commission_id:"410f05ac",commission_name:"YCH 155 Piece 1 Slots 1&2",commission_cost_USD:80,sfw:!1,detail_artist:[{artist_name:"Artararam",artist_url:"https://www.furaffinity.net/user/artararam/"},{artist_name:"burryro",artist_url:"https://www.furaffinity.net/user/burryro/"}],detail_date_of_commission:"1558577820",detail_date_of_completed_payment:"1558658640",latest_status:"Paid, Started",latest_status_link:"https://www.furaffinity.net/view/31644407/#cid:138594666",updates:[{timestamp:"1558577820",status:"Commission start",link:"#"},{timestamp:"1558658640",status:"Commission payment sent",link:"#"},{timestamp:"1562545842",status:"Observed art has been sent to colorist",link:"https://imgur.com/0k7lmy1"}],state_complete:!1,state_css:"inprogress"},{commission_id:"393d053d",commission_name:"Stickers (5)",commission_cost_USD:40,sfw:!0,detail_artist:[{artist_name:"RattyKai",artist_url:"https://twitter.com/RattyKai"}],detail_date_of_commission:"1559948280",detail_date_of_completed_payment:"1559953500",latest_status:"Paid, Sketching",latest_status_link:"https://twitter.com/RattyKai/status/1137131736314339329",updates:[{timestamp:"1559948280",status:"Commission start",link:"#"},{timestamp:"1559952540",status:"First seen in Telegram Channel Queue",link:"https://t.me/rattykaiart/167"},{timestamp:"1559953500",status:"Commission payment sent",link:"#"},{timestamp:"1562600640",status:'Status changed to "sketching..." in Telegram Channel Queue',link:"https://t.me/rattykaiart/183"}],state_complete:!1,state_css:"inprogress"},{commission_id:"2743042d",commission_name:'YCH - "Strappy Smut"',commission_cost_USD:110,sfw:!1,detail_artist:[{artist_name:"porin",artist_url:"https://www.furaffinity.net/user/porin/"}],detail_date_of_commission:"1565058060",detail_date_of_completed_payment:"1565136900",latest_status:"Done",latest_status_link:"https://trello.com/c/mYDYhuw2/101-ych-leotheferret",updates:[{timestamp:"1564977480",status:"YCH Bid",link:"https://www.furaffinity.net/view/32513394/#cid:140259271"},{timestamp:"1565054100",status:"YCH Notified Won Comment",link:"https://www.furaffinity.net/view/32513394/#cid:140279187"},{timestamp:"1565058060",status:"YCH Notification via FA Notes",link:"#"},{timestamp:"1565136900",status:"Commission payment sent",link:"#"},{timestamp:"1565207580",status:"Sketch WIP Received",link:"https://uc59fa50505faca93d1113b3853c.previews.dropboxusercontent.com/p/thumb/AAhLWp3Yc729ANQL8F14fB6Efobskh6Q_C-oMxTH9EVMRW2FLNN-bz8gM5J4Y7UEhbFJDwN7dPcWjp74-ZPzAUd_t6VBkSnyIHBQvOdqRibxnV_-FgPi9bk3J6oLa1G15jPfvwUCnpjSCmAp3M6FOU0B-S7YM1hPb_gvW8i7RcN1FJTSflK22-QWtbld2O0gEFuppLyi7DMM9f9bsBtYl0mFuwlFnbdoAbCDng4i-D00wbstuyBGQPtKDg8I3JuYLhbaO7lHIOafU9fFXAjhjAOUXjpTqktRCAq3V7_KyNa4AlgWxZpGSZr8ciAP7QODwvGIly2FvZ9x1bM--ADfuhgrKNM_WgMZyclbFrQTTmFgkpe41JxIMBZUYYbQdsgvpH7VqpdWS1ogzHhAjzJxsTHi/p.jpeg?fv_content=true&size_mode=5"},{timestamp:"1565226660",status:"Sketch WIP Approved by me (delay due to me being at work)",link:"https://uc59fa50505faca93d1113b3853c.previews.dropboxusercontent.com/p/thumb/AAhLWp3Yc729ANQL8F14fB6Efobskh6Q_C-oMxTH9EVMRW2FLNN-bz8gM5J4Y7UEhbFJDwN7dPcWjp74-ZPzAUd_t6VBkSnyIHBQvOdqRibxnV_-FgPi9bk3J6oLa1G15jPfvwUCnpjSCmAp3M6FOU0B-S7YM1hPb_gvW8i7RcN1FJTSflK22-QWtbld2O0gEFuppLyi7DMM9f9bsBtYl0mFuwlFnbdoAbCDng4i-D00wbstuyBGQPtKDg8I3JuYLhbaO7lHIOafU9fFXAjhjAOUXjpTqktRCAq3V7_KyNa4AlgWxZpGSZr8ciAP7QODwvGIly2FvZ9x1bM--ADfuhgrKNM_WgMZyclbFrQTTmFgkpe41JxIMBZUYYbQdsgvpH7VqpdWS1ogzHhAjzJxsTHi/p.jpeg?fv_content=true&size_mode=5"},{timestamp:"1565247900",status:"Received Finished Commission",link:""},{timestamp:"1565304300",status:"Finished Commission Posted",link:"https://www.furaffinity.net/view/32588353/"}],state_complete:!0,state_css:"done"}]},c0d6:function(t,e,s){"use strict";var a=s("2b0e"),i=s("2f62");a["a"].use(i["a"]),e["a"]=new i["a"].Store({state:{},mutations:{},actions:{}})}});
//# sourceMappingURL=index.13f7a998.js.map