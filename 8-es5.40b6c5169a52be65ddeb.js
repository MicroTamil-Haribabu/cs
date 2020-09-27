function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{L2jE:function(t,e,n){"use strict";n.r(e),n.d(e,"HostsModule",(function(){return M}));var s=n("ofXK"),a=n("tyNb"),o=n("Mn71"),i=n("fXoL"),c=n("xsI5"),r=n("OaWH"),l=n("HFyB");function d(t,e){if(1&t&&(i.Ub(0,"div",6),i.Qb(1,"img",7),i.Tb()),2&t){var n=i.kc();i.Ab(1),i.rc("src",n.appService.assets("/images/ajax-loader.gif"),i.Fc)}}function u(t,e){1&t&&(i.Ub(0,"div",8),i.Mc(1,"No DATA"),i.Tb())}function f(t,e){if(1&t&&(i.Ub(0,"tr"),i.Ub(1,"td"),i.Mc(2),i.Tb(),i.Ub(3,"td"),i.Mc(4),i.lc(5,"date"),i.Tb(),i.Ub(6,"td"),i.Mc(7),i.lc(8,"date"),i.Tb(),i.Ub(9,"td"),i.Mc(10),i.Tb(),i.Ub(11,"td"),i.Mc(12),i.Tb(),i.Ub(13,"td"),i.Mc(14),i.Tb(),i.Ub(15,"td"),i.Mc(16),i.Tb(),i.Tb()),2&t){var n=e.$implicit,s=i.kc(2);i.Ab(2),i.Nc(n.hostname),i.Ab(2),i.Nc(i.nc(5,7,s.dateTime(n.last_seen),"dd MMM yyyy hh:mm a")),i.Ab(3),i.Nc(i.nc(8,10,s.dateTime(n.first_seen),"dd MMM yyyy hh:mm a")),i.Ab(3),i.Nc(n.os_version),i.Ab(2),i.Nc(n.system_product_name),i.Ab(2),i.Nc(n.product_type_desc),i.Ab(2),i.Nc(s.formatString(n.status))}}function b(t,e){if(1&t&&(i.Ub(0,"table",9),i.Ub(1,"thead"),i.Ub(2,"tr"),i.Ub(3,"th"),i.Mc(4,"Hostname"),i.Tb(),i.Ub(5,"th"),i.Mc(6,"Last seen"),i.Tb(),i.Ub(7,"th"),i.Mc(8,"First seen"),i.Tb(),i.Ub(9,"th"),i.Mc(10,"OS version"),i.Tb(),i.Ub(11,"th"),i.Mc(12,"Model"),i.Tb(),i.Ub(13,"th"),i.Mc(14,"Type"),i.Tb(),i.Ub(15,"th"),i.Mc(16,"Status"),i.Tb(),i.Tb(),i.Tb(),i.Ub(17,"tbody"),i.Kc(18,f,17,13,"tr",10),i.Tb(),i.Tb()),2&t){var n=i.kc();i.Ab(18),i.rc("ngForOf",n.detectionsFiltered)}}var p,h,m,g=[{path:"",component:(p=function(){function t(e,n,s){var a=this;_classCallCheck(this,t),this._css=e,this.appService=n,this.router=s,this.detectionsFiltered=[],this.filterCol=[{title:"Platform",fields:[],prop:"platform_name"},{title:"OS Version",fields:[],prop:"os_version"},{title:"Type",fields:[],prop:"product_type_desc"},{title:"Status",fields:[],prop:"status"}],this.filterChips=[],this.loading=!0,this.nodata=!1,this.csvData={name:"Hosts.csv",data:""},this._css.ready.subscribe((function(){setTimeout((function(){a.updateTable()}),1e3)}))}return _createClass(t,[{key:"ngOnInit",value:function(){this.router.events.subscribe((function(t){t instanceof a.b&&window.scrollTo(0,0)})),this.appService.setPath("Home/Dashboard/Hosts"),""!=this._css.access_token&&this.updateTable()}},{key:"getDate",value:function(t){return new Date(t)}},{key:"truncateSentance",value:function(t){return t.substr(0,25)+"..."}},{key:"updateTable",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=null;null==e&&this._css.currentHostFilterId>=1&&(e=(n=this._css.buildFilterFor(this._css.currentHostFilterId)).filter,this.filterChips=n.chips),this.loading=!0,this.detectionsFiltered=[],this._css._30DayDetections(0,e).subscribe((function(e){console.clear(),0==e.length&&(t.loading=!1),"error"!=e?t._css._30DayDetectionsSummries(e).subscribe((function(e){"error"!=e&&(t.loading=!1,t.detectionsFiltered=e,t.generateCSV(e),t.getFieldValues(e),t._css.currentHostFilterId>=1&&(t.getFieldValues(e),t._css.currentHostFilterId=0,window.scrollTo(0,0)))})):t.loading=!1}))}},{key:"generateCSV",value:function(t){var e="data:text/csv;charset=utf-8,";e+="Hostname,Last seen,First seen,OS version,Model,Type,Status\n",e+=t.map((function(t){var e=t.hostname+",";return e+=o.a.formatDate(t.last_seen,"DD MMM YYYY hh:mm a")+",",e+=o.a.formatDate(t.first_seen,"DD MMM YYYY hh:mm a")+",",e+=t.os_version+",",e+=t.system_product_name+",",e+=t.product_type_desc+",",e+=o.a.allWordUppercase(t.status)})).join("\n"),this.csvData={name:"Hosts.csv",data:e}}},{key:"dateTime",value:function(t){return new Date(t)}},{key:"getFieldValues",value:function(t){var e=this;this.filterCol.map((function(t){t.fields.map((function(t){t.count=0}))})),t.map((function(t){e.canPush(e.filterCol[0].fields,"label",t.platform_name),e.canPush(e.filterCol[1].fields,"label",t.os_version),e.canPush(e.filterCol[2].fields,"label",t.product_type_desc),e.canPush(e.filterCol[3].fields,"label",o.a.allWordUppercase(t.status))}))}},{key:"formatString",value:function(t){return o.a.allWordUppercase(t)}},{key:"canPush",value:function(t,e,n){0==t.filter((function(t){return t[e].toLowerCase()==n.toLowerCase()&&(t.count=null==t.count?1:t.count+1,!0)})).length&&t.push({label:n,selected:!1,count:1,prop:n})}}]),t}(),p.\u0275fac=function(t){return new(t||p)(i.Pb(c.a),i.Pb(r.a),i.Pb(a.c))},p.\u0275cmp=i.Jb({type:p,selectors:[["app-hosts"]],decls:6,vars:7,consts:[[1,"container-fluid","full-page","p-0"],["addedFor","hosts",1,".filter-sec",3,"totalDetections","filterCol","filterChips","csvData","filterSelection"],[1,"container-fluid"],["class","loader",4,"ngIf"],["class","nodata",4,"ngIf"],["class","table",4,"ngIf"],[1,"loader"],[3,"src"],[1,"nodata"],[1,"table"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(i.Ub(0,"section",0),i.Ub(1,"filter-selection",1),i.gc("filterSelection",(function(t){return e.updateTable(t)})),i.Tb(),i.Ub(2,"section",2),i.Kc(3,d,2,1,"div",3),i.Kc(4,u,2,0,"div",4),i.Kc(5,b,19,1,"table",5),i.Tb(),i.Tb()),2&t&&(i.Ab(1),i.rc("totalDetections",e.detectionsFiltered.length)("filterCol",e.filterCol)("filterChips",e.filterChips)("csvData",e.csvData),i.Ab(2),i.rc("ngIf",e.loading),i.Ab(1),i.rc("ngIf",e.nodata),i.Ab(1),i.rc("ngIf",!e.loading&&!e.nodata))},directives:[l.a,s.m,s.l],pipes:[s.d],styles:[".full-page[_ngcontent-%COMP%]{height:100vh;overflow:auto;padding-top:1em}.loader[_ngcontent-%COMP%]{text-align:center;padding-top:2em}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1em .5em;font-size:.9em}.table[_ngcontent-%COMP%]   .priority-icon[_ngcontent-%COMP%]{color:#ffab00;float:left}.table[_ngcontent-%COMP%]   .priority-data[_ngcontent-%COMP%]{padding-top:5px;padding-left:15px;font-size:.8em;float:left}.table[_ngcontent-%COMP%]   .col-2-title[_ngcontent-%COMP%]{text-transform:uppercase;color:#696969;font-size:.65em}.table[_ngcontent-%COMP%]   .col-2-data[_ngcontent-%COMP%]{font-size:.8em}"]}),p)}],_=((h=function t(){_classCallCheck(this,t)}).\u0275mod=i.Nb({type:h}),h.\u0275inj=i.Mb({factory:function(t){return new(t||h)},imports:[[a.e.forChild(g)],a.e]}),h),v=n("OZVm"),M=((m=function t(){_classCallCheck(this,t)}).\u0275mod=i.Nb({type:m}),m.\u0275inj=i.Mb({factory:function(t){return new(t||m)},imports:[[s.b,_,v.a]]}),m)}}]);