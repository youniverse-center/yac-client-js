!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("js-cookie")):"function"==typeof define&&define.amd?define(["js-cookie"],t):"object"==typeof exports?exports.YacClient=t(require("js-cookie")):e.YacClient=t(e["js-cookie"])}(self,(function(e){return(()=>{"use strict";var t={911:(e,t)=>{function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"value",void 0),n(this,"expiresAt",void 0),this.value=t,this.expiresAt=r}var t,o,i;return t=e,i=[{key:"Invalid",value:function(){return new e("",0)}}],(o=[{key:"isValid",value:function(){return this.expiresAt>0&&!this.isExpired()}},{key:"isExpired",value:function(){return Date.now()>this.expiresAt}},{key:"isAboutToExpire",value:function(){return Date.now()>this.expiresAt-60}},{key:"toString",value:function(){return this.value}},{key:"getExpiresAt",value:function(){return this.expiresAt}}])&&r(t.prototype,o),i&&r(t,i),e}();t.default=o},991:function(e,t,r){function n(e,t,r,n,o,i,a){try{var u=e[i](a),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function u(e){n(a,o,i,u,s,"next",e)}function s(e){n(a,o,i,u,s,"throw",e)}u(void 0)}))}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&u(t,e,r);return s(t,e),t},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.storages=t.AccessToken=void 0;var l=f(r(498)),d=f(r(911)),p=r(911);Object.defineProperty(t,"AccessToken",{enumerable:!0,get:function(){return f(p).default}}),t.storages=c(r(479));var h=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"config",void 0),a(this,"store",void 0),a(this,"initialized",!1),this.config=t,this.store=r}var t,r,n,u,s,c,f,p,h,v;return t=e,(r=[{key:"login",value:(v=o(regeneratorRuntime.mark((function e(){var t,r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!(n.length>0&&void 0!==n[0])||n[0],this.store.resetLoggedOut(),e.next=4,l.default(this.config.authorizationServer,this.config.clientId,{prompt:t,scopes:this.config.scopes,redirectUri:this.config.redirectUri});case 4:r=e.sent,this.store.saveVerifier(r.state,r.verifier),window.location.assign(r.url);case 7:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{key:"handleCheckLogin",value:(h=o(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search),r=t.get("state"),n=t.get("code"),r&&!n){e.next=5;break}return e.abrupt("return");case 5:this.store.removeVerifier(r),this.cleanUrl();case 7:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"isInitialized",value:function(){return this.initialized}},{key:"cleanUrl",value:function(){var e=new URL(window.location.toString());e.search="",window.history.replaceState(null,"",e.toString())}},{key:"handleCodeCallback",value:(p=o(regeneratorRuntime.mark((function e(){var t,r,n,o,i,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!(a.length>0&&void 0!==a[0])||a[0],r=new URLSearchParams(window.location.search),n=r.get("code"),o=r.get("state"),n&&o){e.next=6;break}return e.abrupt("return");case 6:return t&&this.cleanUrl(),e.prev=7,e.next=10,this.exchangeCode(n,o);case 10:i=e.sent,this.storeTokens(i),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(7);case 16:case"end":return e.stop()}}),e,this,[[7,14]])}))),function(){return p.apply(this,arguments)})},{key:"refreshAccessToken",value:(f=o(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.store.getRefreshToken()){e.next=3;break}return e.abrupt("return",d.default.Invalid());case 3:return e.prev=3,e.next=6,fetch("".concat(this.config.authorizationServer,"/token"),{method:"POST",body:new URLSearchParams({client_id:this.config.clientId,grant_type:"refresh_token",refresh_token:t}).toString(),headers:new Headers({"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"})}).then((function(e){return e.json()}));case 6:r=e.sent,this.storeTokens(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.store.clear();case 13:return e.abrupt("return",this.store.getAccessToken());case 14:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(){return f.apply(this,arguments)})},{key:"storeTokens",value:(c=o(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.access_token){e.next=3;break}return this.store.clear(),e.abrupt("return");case 3:r=Date.now()+1e3*t.expires_in,n=new d.default(t.access_token,r),this.store.saveAccessToken(n),this.store.saveRefreshToken(t.refresh_token);case 7:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"exchangeCode",value:(s=o(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.store.getVerifier(r)){e.next=3;break}throw new Error("Invalid state");case 3:return this.store.removeVerifier(r),e.next=6,fetch("".concat(this.config.authorizationServer,"/token"),{method:"POST",body:new URLSearchParams({client_id:this.config.clientId,grant_type:"authorization_code",code_verifier:n,code:t}).toString(),headers:new Headers({"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"})}).then((function(e){return e.json()}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)})},{key:"getAccessToken",value:(u=o(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.store.getAccessToken()).isAboutToExpire()){e.next=5;break}return e.next=4,this.refreshAccessToken();case 4:return e.abrupt("return",e.sent);case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"getProfile",value:(n=o(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAccessToken();case 2:if((t=e.sent).isValid()){e.next=5;break}return e.abrupt("return");case 5:return e.abrupt("return",fetch("".concat(this.config.authorizationServer,"/r/profile"),{headers:new Headers({Authorization:"Bearer ".concat(t.toString())}),credentials:"include"}).then((function(e){if(401!==e.status)return e.json();r.store.clear()})));case 6:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"logout",value:function(){this.store.clear(),this.store.setLoggedOut()}}])&&i(t.prototype,r),e}();t.default=h},498:(e,t,r)=>{function n(e,t,r,n,o,i,a){try{var u=e[i](a),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function u(e){n(a,o,i,u,s,"next",e)}function s(e){n(a,o,i,u,s,"throw",e)}u(void 0)}))}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(335);function a(){return(a=o(regeneratorRuntime.mark((function e(t,r,n){var o,a,u,s,c,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=i.randomString(32),a=i.randomString(128),e.next=4,i.sha256(a).then(i.bufferToBase64UrlEncoded);case 4:return u=e.sent,s={client_id:r,response_type:"code",scope:(n.scopes||[]).join(" "),code_challenge:u,code_challenge_method:"S256",state:o},Object.prototype.hasOwnProperty.call(n,"prompt")&&!1===n.prompt&&(s.prompt="none"),n.redirectUri&&(s.redirect_uri=n.redirectUri),c=Object.fromEntries(Object.entries(s)),(f=new URL("".concat(t,"/auth"))).search=new URLSearchParams(c).toString(),e.abrupt("return",{url:f.toString(),verifier:a,state:o});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e,t,r){return a.apply(this,arguments)}},838:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(155)),u=i(r(911)),s=function(){function e(t){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=void 0,(r="prefix")in this?Object.defineProperty(this,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[r]=n,this.prefix=t}var t,r;return t=e,(r=[{key:"resetLoggedOut",value:function(){window.sessionStorage.removeItem(this.key("loggedOut"))}},{key:"isLoggedOut",value:function(){return!!window.sessionStorage.getItem(this.key("loggedOut"))}},{key:"setLoggedOut",value:function(){window.sessionStorage.setItem(this.key("loggedOut"),"true")}},{key:"removeVerifier",value:function(e){window.sessionStorage.removeItem(this.key(e))}},{key:"getVerifier",value:function(e){return window.sessionStorage.getItem(this.key(e))}},{key:"clear",value:function(){var e=new RegExp("^".concat(this.prefix,"-"));Object.keys(window.sessionStorage).filter((function(t){return e.test(t)})).forEach((function(e){window.sessionStorage.removeItem(e)})),a.default.remove("".concat(this.prefix,"-refresh-token")),a.default.remove("".concat(this.prefix,"-access-token"))}},{key:"saveVerifier",value:function(e,t){window.sessionStorage.setItem(this.key(e),t)}},{key:"removeState",value:function(e){window.sessionStorage.removeItem(this.key(e))}},{key:"getAccessToken",value:function(){var e=a.default.get("".concat(this.prefix,"-access-token"));if(!e)return u.default.Invalid();var t,r,o=(t=e.split(";"),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],s=o[1],c=parseInt(s,10);return isNaN(c)||!i?u.default.Invalid():new u.default(i,c)}},{key:"getRefreshToken",value:function(){return a.default.get("".concat(this.prefix,"-refresh-token"))}},{key:"saveAccessToken",value:function(e){a.default.set("".concat(this.prefix,"-access-token"),"".concat(e.toString(),";").concat(e.getExpiresAt()),{sameSite:"strict"})}},{key:"saveRefreshToken",value:function(e){a.default.set("".concat(this.prefix,"-refresh-token"),e,{sameSite:"strict"})}},{key:"key",value:function(e){return"".concat(this.prefix,"-").concat(e)}}])&&o(t.prototype,r),e}();t.default=s},479:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleStorage=void 0;var o=r(838);Object.defineProperty(t,"SimpleStorage",{enumerable:!0,get:function(){return n(o).default}})},979:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(174));t.default=function(e){var t,r=new Uint8Array(e);return i.default(window.btoa(String.fromCharCode.apply(String,function(e){if(Array.isArray(e))return n(e)}(t=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())))}},102:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(new TextEncoder).encode(e);return window.crypto.subtle.digest("SHA-256",t)}},335:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.urlEncodeB64=t.bufferToBase64UrlEncoded=t.sha256=t.randomString=void 0;var o=r(392);Object.defineProperty(t,"randomString",{enumerable:!0,get:function(){return n(o).default}});var i=r(102);Object.defineProperty(t,"sha256",{enumerable:!0,get:function(){return n(i).default}});var a=r(979);Object.defineProperty(t,"bufferToBase64UrlEncoded",{enumerable:!0,get:function(){return n(a).default}});var u=r(174);Object.defineProperty(t,"urlEncodeB64",{enumerable:!0,get:function(){return n(u).default}})},392:(e,t)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0});var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";t.default=function(e){var t,o=new Uint8Array(e);return window.crypto.getRandomValues(o),o=o.map((function(e){return n.charCodeAt(e%n.length)})),String.fromCharCode.apply(String,function(e){if(Array.isArray(e))return r(e)}(t=o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}},174:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={"+":"-","/":"_","=":""};return e.replace(/[+/=]/g,(function(e){return t[e]}))}},155:t=>{t.exports=e}},r={};return function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}(991)})()}));