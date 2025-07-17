var e,t;"function"==typeof(e=globalThis.define)&&(t=e,e=null),function(t,r,n,i,s){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o[i]&&o[i],l=a.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(e,r){if(!l[e]){if(!t[e]){var n="function"==typeof o[i]&&o[i];if(!r&&n)return n(e,!0);if(a)return a(e,!0);if(u&&"string"==typeof e)return u(e);var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}d.resolve=function(r){var n=t[e][1][r];return null!=n?n:r},d.cache={};var h=l[e]=new c.Module(e);t[e][0].call(h.exports,d,h,h.exports,this)}return l[e].exports;function d(e){var t=d.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=t,c.cache=l,c.parent=a,c.register=function(e,r){t[e]=[function(e,t){t.exports=r},{}]},Object.defineProperty(c,"root",{get:function(){return o[i]}}),o[i]=c;for(var h=0;h<r.length;h++)c(r[h]);if(n){var d=c(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof e&&e.amd?e(function(){return d}):s&&(this[s]=d)}}({kgW6q:[function(e,t,r){e("./messaging"),e("../../../background/index")},{"./messaging":"iG3ww","../../../background/index":"lSzt3"}],iG3ww:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js"),i=e("~background/messages/ping"),s=n.interopDefault(i),o=e("~background/messages/updateSubscription"),a=n.interopDefault(o);globalThis.__plasmoInternalPortMap=new Map,chrome.runtime.onMessageExternal.addListener((e,t,r)=>(e?.name,!0)),chrome.runtime.onMessage.addListener((e,t,r)=>{switch(e.name){case"ping":(0,s.default)({...e,sender:t},{send:e=>r(e)});break;case"updateSubscription":(0,a.default)({...e,sender:t},{send:e=>r(e)})}return!0}),chrome.runtime.onConnect.addListener(function(e){globalThis.__plasmoInternalPortMap.set(e.name,e),e.onMessage.addListener(function(t){e.name})})},{"~background/messages/ping":"1noeI","~background/messages/updateSubscription":"kM6Jq","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],"1noeI":[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);let n=async(e,t)=>{console.log("Received ping with input:",e.body),t.send({message:"pong"})};r.default=n},{"@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],f6DG4:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],kM6Jq:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r);var n=e("@/lib/firebase"),i=e("firebase/firestore");let s=async(e,t)=>{try{let{userId:r,subscriptionType:s,subscriptionEndDate:o}=e.body;if(!r||!s||!o){t.send({success:!1,error:"Missing required parameters"});return}await (0,i.updateDoc)((0,i.doc)(n.db,"users",r),{isSubscribed:!0,subscriptionType:s,subscriptionEndDate:(0,i.Timestamp).fromDate(new Date(o))}),t.send({success:!0,message:"Subscription updated successfully"})}catch(e){console.error("Error updating subscription:",e),t.send({success:!1,error:e.message})}};r.default=s},{"@/lib/firebase":"3hInq","firebase/firestore":"39ttL","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],"3hInq":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"auth",()=>u),n.export(r,"db",()=>c);var i=e("firebase/app"),s=e("firebase/auth"),o=e("firebase/firestore"),a=e("./config");let l=(0,i.initializeApp)(a.CONFIG.FIREBASE),u=(0,s.getAuth)(l),c=(0,o.getFirestore)(l);r.default=l},{"firebase/app":"i8wEc","firebase/auth":"b5l1p","firebase/firestore":"39ttL","./config":"kdNLa","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],i8wEc:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var i=e("@firebase/app");n.exportAll(i,r),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,i.registerVersion)("firebase","11.10.0","app")},{"@firebase/app":"hhTEg","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],hhTEg:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"FirebaseError",()=>o.FirebaseError),n.export(r,"SDK_VERSION",()=>k),n.export(r,"_DEFAULT_ENTRY_NAME",()=>d),n.export(r,"_addComponent",()=>y),n.export(r,"_addOrOverwriteComponent",()=>v),n.export(r,"_apps",()=>p),n.export(r,"_clearComponents",()=>T),n.export(r,"_components",()=>g),n.export(r,"_getProvider",()=>b),n.export(r,"_isFirebaseApp",()=>_),n.export(r,"_isFirebaseServerApp",()=>E),n.export(r,"_registerComponent",()=>w),n.export(r,"_removeServiceInstance",()=>I),n.export(r,"_serverApps",()=>m),n.export(r,"deleteApp",()=>P),n.export(r,"getApp",()=>O),n.export(r,"getApps",()=>R),n.export(r,"initializeApp",()=>N),n.export(r,"initializeServerApp",()=>D),n.export(r,"onLog",()=>M),n.export(r,"registerVersion",()=>L),n.export(r,"setLogLevel",()=>F);var i=e("@firebase/component"),s=e("@firebase/logger"),o=e("@firebase/util"),a=e("idb");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let u="@firebase/app",c="0.13.2",h=new s.Logger("@firebase/app"),d="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/ai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,m=new Map,g=new Map;function y(e,t){try{e.container.addComponent(t)}catch(r){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function v(e,t){e.container.addOrOverwriteComponent(t)}function w(e){let t=e.name;if(g.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(g.set(t,e),p.values()))y(r,e);for(let t of m.values())y(t,e);return!0}function b(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function I(e,t,r=d){b(e,t).clearInstance(r)}function _(e){return void 0!==e.options}function E(e){return null!=e&&void 0!==e.settings}function T(){g.clear()}let S=new o.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new i.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw S.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){let r=(0,o.base64Decode)(e.split(".")[1]);if(null===r){console.error(`FirebaseServerApp ${t} is invalid: second part could not be parsed.`);return}let n=JSON.parse(r).exp;if(void 0===n){console.error(`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`);return}let i=1e3*JSON.parse(r).exp,s=new Date().getTime();i-s<=0&&console.error(`FirebaseServerApp ${t} is invalid: the token has expired.`)}class C extends A{constructor(e,t,r,n){let i=void 0===t.automaticDataCollectionEnabled||t.automaticDataCollectionEnabled,s={name:r,automaticDataCollectionEnabled:i};void 0!==e.apiKey?super(e,s,n):super(e.options,s,n),this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._serverConfig.authIdToken&&x(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&x(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,"undefined"!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,L(u,c,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){P(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw S.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k="11.10.0";function N(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:d,automaticDataCollectionEnabled:!0},t),s=n.name;if("string"!=typeof s||!s)throw S.create("bad-app-name",{appName:String(s)});if(r||(r=(0,o.getDefaultAppConfig)()),!r)throw S.create("no-options");let a=p.get(s);if(a){if((0,o.deepEqual)(r,a.options)&&(0,o.deepEqual)(n,a.config))return a;throw S.create("duplicate-app",{appName:s})}let l=new i.ComponentContainer(s);for(let e of g.values())l.addComponent(e);let u=new A(r,n,l);return p.set(s,u),u}function D(e,t){let r;if((0,o.isBrowser)()&&!(0,o.isWebWorker)())throw S.create("invalid-server-app-environment");void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!0),r=_(e)?e.options:e;let n=Object.assign(Object.assign({},t),r);if(void 0!==n.releaseOnDeref&&delete n.releaseOnDeref,void 0!==t.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw S.create("finalization-registry-not-supported",{});let s=""+[...JSON.stringify(n)].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0),a=m.get(s);if(a)return a.incRefCount(t.releaseOnDeref),a;let l=new i.ComponentContainer(s);for(let e of g.values())l.addComponent(e);let u=new C(r,t,s,l);return m.set(s,u),u}function O(e=d){let t=p.get(e);if(!t&&e===d&&(0,o.getDefaultAppConfig)())return N();if(!t)throw S.create("no-app",{appName:e});return t}function R(){return Array.from(p.values())}async function P(e){let t=!1,r=e.name;p.has(r)?(t=!0,p.delete(r)):m.has(r)&&0>=e.decRefCount()&&(m.delete(r),t=!0),t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function L(e,t,r){var n;let s=null!==(n=f[e])&&void 0!==n?n:e;r&&(s+=`-${r}`);let o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let e=[`Unable to register library "${s}" with version "${t}":`];o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),h.warn(e.join(" "));return}w(new i.Component(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}function M(e,t){if(null!==e&&"function"!=typeof e)throw S.create("invalid-log-argument");(0,s.setUserLogHandler)(e,t)}function F(e){(0,s.setLogLevel)(e)}let V="firebase-heartbeat-store",U=null;function j(){return U||(U=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(V)}catch(e){console.warn(e)}}}).catch(e=>{throw S.create("idb-open",{originalErrorMessage:e.message})})),U}async function B(e){try{let t=await j(),r=t.transaction(V),n=await r.objectStore(V).get(z(e));return await r.done,n}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{let t=S.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}async function q(e,t){try{let r=await j(),n=r.transaction(V,"readwrite"),i=n.objectStore(V);await i.put(t,z(e)),await n.done}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{let t=S.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});h.warn(t.message)}}}function z(e){return`${e.name}!${e.options.appId}`}class G{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new K(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate(),n=r.getPlatformInfoString(),i=$();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){h.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=$(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),H(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),H(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return h.warn(e),""}}}function $(){let e=new Date;return e.toISOString().substring(0,10)}class K{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await B(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return q(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return q(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function H(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}w(new i.Component("platform-logger",e=>new l(e),"PRIVATE")),w(new i.Component("heartbeat",e=>new G(e),"PRIVATE")),L(u,c,""),L(u,c,"esm2017"),L("fire-js","")},{"@firebase/component":"7aBr9","@firebase/logger":"95325","@firebase/util":"kdZ0V",idb:"9TR5X","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],"7aBr9":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"Component",()=>s),n.export(r,"ComponentContainer",()=>l),n.export(r,"Provider",()=>a);var i=e("@firebase/util");class s{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new i.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===o?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},{"@firebase/util":"kdZ0V","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],kdZ0V:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"CONSTANTS",()=>a),n.export(r,"DecodeBase64StringError",()=>f),n.export(r,"Deferred",()=>C),n.export(r,"ErrorFactory",()=>Z),n.export(r,"FirebaseError",()=>X),n.export(r,"MAX_VALUE_MILLIS",()=>ek),n.export(r,"RANDOM_FACTOR",()=>eN),n.export(r,"Sha1",()=>ey),n.export(r,"areCookiesEnabled",()=>Y),n.export(r,"assert",()=>l),n.export(r,"assertionError",()=>u),n.export(r,"async",()=>eb),n.export(r,"base64",()=>d),n.export(r,"base64Decode",()=>g),n.export(r,"base64Encode",()=>p),n.export(r,"base64urlEncodeWithoutPadding",()=>m),n.export(r,"calculateBackoffMillis",()=>eD),n.export(r,"contains",()=>el),n.export(r,"createMockUserToken",()=>D),n.export(r,"createSubscribe",()=>ev),n.export(r,"decode",()=>en),n.export(r,"deepCopy",()=>y),n.export(r,"deepEqual",()=>function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],o=r[s];if(ed(n)&&ed(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}),n.export(r,"deepExtend",()=>v),n.export(r,"errorPrefix",()=>eE),n.export(r,"extractQuerystring",()=>eg),n.export(r,"getDefaultAppConfig",()=>A),n.export(r,"getDefaultEmulatorHost",()=>T),n.export(r,"getDefaultEmulatorHostnameAndPort",()=>S),n.export(r,"getDefaults",()=>E),n.export(r,"getExperimentalSetting",()=>x),n.export(r,"getGlobal",()=>w),n.export(r,"getModularInstance",()=>eR),n.export(r,"getUA",()=>L),n.export(r,"isAdmin",()=>ea),n.export(r,"isBrowser",()=>V),n.export(r,"isBrowserExtension",()=>B),n.export(r,"isCloudWorkstation",()=>k),n.export(r,"isCloudflareWorker",()=>j),n.export(r,"isElectron",()=>z),n.export(r,"isEmpty",()=>ec),n.export(r,"isIE",()=>G),n.export(r,"isIndexedDBAvailable",()=>Q),n.export(r,"isMobileCordova",()=>M),n.export(r,"isNode",()=>F),n.export(r,"isNodeSdk",()=>K),n.export(r,"isReactNative",()=>q),n.export(r,"isSafari",()=>H),n.export(r,"isSafariOrWebkit",()=>W),n.export(r,"isUWP",()=>$),n.export(r,"isValidFormat",()=>eo),n.export(r,"isValidTimestamp",()=>ei),n.export(r,"isWebWorker",()=>U),n.export(r,"issuedAtTime",()=>es),n.export(r,"jsonEval",()=>et),n.export(r,"map",()=>eh),n.export(r,"ordinal",()=>eO),n.export(r,"pingServer",()=>N),n.export(r,"promiseWithTimeout",()=>ef),n.export(r,"querystring",()=>ep),n.export(r,"querystringDecode",()=>em),n.export(r,"safeGet",()=>eu),n.export(r,"stringLength",()=>eC),n.export(r,"stringToByteArray",()=>ex),n.export(r,"stringify",()=>er),n.export(r,"updateEmulatorBanner",()=>P),n.export(r,"validateArgCount",()=>e_),n.export(r,"validateCallback",()=>eS),n.export(r,"validateContextObject",()=>eA),n.export(r,"validateIndexedDBOpenable",()=>J),n.export(r,"validateNamespace",()=>eT);var i=e("./postinstall.mjs"),s=arguments[3],o=e("d07263985281b344");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},l=function(e,t){if(!e)throw u(t)},u=function(e){return Error("Firebase Database ("+a.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},c=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},h=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[r++],o=e[r++],a=e[r++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4,h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),n.push(r[u],r[c],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):h(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length,o=s?r[e.charAt(t)]:0;++t;let a=t<e.length,l=a?r[e.charAt(t)]:64;++t;let u=t<e.length,c=u?r[e.charAt(t)]:64;if(++t,null==i||null==o||null==l||null==c)throw new f;let h=i<<2|o>>4;if(n.push(h),64!==l){let e=o<<4&240|l>>2;if(n.push(e),64!==c){let e=l<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class f extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let p=function(e){let t=c(e);return d.encodeByteArray(t,!0)},m=function(e){return p(e).replace(/\./g,"")},g=function(e){try{return d.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){return v(void 0,e)}function v(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(let r in t)t.hasOwnProperty(r)&&"__proto__"!==r&&(e[r]=v(e[r],t[r]));return e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s)return s;throw Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b=()=>w().__FIREBASE_DEFAULTS__,I=()=>{if(void 0===o||void 0===o.env)return;let e=void 0;if(e)return JSON.parse(e)},_=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&g(e[1]);return t&&JSON.parse(t)},E=()=>{try{return(0,i.getDefaultsFromPostinstall)()||b()||I()||_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},T=e=>{var t,r;return null===(r=null===(t=E())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},S=e=>{let t=T(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},A=()=>{var e;return null===(e=E())||void 0===e?void 0:e.config},x=e=>{var t;return null===(t=E())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){try{let t=e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e;return t.endsWith(".cloudworkstations.dev")}catch(e){return!1}}async function N(e){let t=await fetch(e,{credentials:"include"});return t.ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[m(JSON.stringify({alg:"none",type:"JWT"})),m(JSON.stringify(s)),""].join(".")}let O={},R=!1;function P(e,t){if("undefined"==typeof window||"undefined"==typeof document||!k(window.location.host)||O[e]===t||O[e]||R)return;function r(e){return`__firebase__banner__${e}`}O[e]=t;let n="__firebase__banner",i=function(){let e={prod:[],emulator:[]};for(let t of Object.keys(O))O[t]?e.emulator.push(t):e.prod.push(t);return e}(),s=i.prod.length>0;function o(){let e,t;let i=(e=document.getElementById(n),t=!1,e||((e=document.createElement("div")).setAttribute("id",n),t=!0),{created:t,element:e}),o=r("text"),a=document.getElementById(o)||document.createElement("span"),l=r("learnmore"),u=document.getElementById(l)||document.createElement("a"),c=r("preprendIcon"),h=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(i.created){let e=i.element;e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center",u.setAttribute("id",l),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline";let t=function(){let e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{R=!0,function(){let e=document.getElementById(n);e&&e.remove()}()},e}();h.setAttribute("width","24"),h.setAttribute("id",c),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px",e.append(h,a,u,t),document.body.appendChild(e)}s?(a.innerText="Preview backend disconnected.",h.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(h.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,a.innerText="Preview backend running in this workspace."),a.setAttribute("id",o)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function M(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(L())}function F(){var e;let t=null===(e=E())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(s.process)}catch(e){return!1}}function V(){return"undefined"!=typeof window||U()}function U(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function j(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function B(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function q(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function z(){return L().indexOf("Electron/")>=0}function G(){let e=L();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function $(){return L().indexOf("MSAppHost/")>=0}function K(){return!0===a.NODE_CLIENT||!0===a.NODE_ADMIN}function H(){return!F()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function W(){return!F()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Q(){try{return"object"==typeof indexedDB}catch(e){return!1}}function J(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function Y(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class X extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,X.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Z.prototype.create)}}class Z{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(ee,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`,a=new X(n,o,r);return a}}let ee=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){return JSON.parse(e)}function er(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en=function(e){let t={},r={},n={},i="";try{let s=e.split(".");t=et(g(s[0])||""),r=et(g(s[1])||""),i=s[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:i}},ei=function(e){let t=en(e).claims,r=Math.floor(new Date().getTime()/1e3),n=0,i=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),i=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!i&&r>=n&&r<=i},es=function(e){let t=en(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},eo=function(e){let t=en(e),r=t.claims;return!!r&&"object"==typeof r&&r.hasOwnProperty("iat")},ea=function(e){let t=en(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function eu(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ec(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function eh(e,t,r){let n={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=t.call(r,e[i],i,e));return n}function ed(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(e,t=2e3){let r=new C;return setTimeout(()=>r.reject("timeout!"),t),e.then(r.resolve,r.reject),r.promise}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function em(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function eg(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let r,n;t||(t=0);let i=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)i[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)i[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=i[e-3]^i[e-8]^i[e-14]^i[e-16];i[e]=(t<<1|t>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],u=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),n=1518500249):(r=o^a^l,n=1859775393):e<60?(r=o&a|l&(o|a),n=2400959708):(r=o^a^l,n=3395469782);let t=(s<<5|s>>>27)+r+u+n+i[e]&4294967295;u=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let r=t-this.blockSize,n=0,i=this.buf_,s=this.inbuf_;for(;n<t;){if(0===s)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(i[s]=e.charCodeAt(n),++s,++n,s===this.blockSize){this.compress_(i),s=0;break}}else for(;n<t;)if(i[s]=e[n],++s,++n,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let r=0;for(let t=0;t<5;t++)for(let n=24;n>=0;n-=8)e[r]=this.chain_[t]>>n&255,++r;return e}}function ev(e,t){let r=new ew(e,t);return r.subscribe.bind(r)}class ew{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=eI),void 0===n.error&&(n.error=eI),void 0===n.complete&&(n.complete=eI);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eb(e,t){return(...r)=>{Promise.resolve(!0).then(()=>{e(...r)}).catch(e=>{t&&t(e)})}}function eI(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_=function(e,t,r,n){let i;if(n<t?i="at least "+t:n>r&&(i=0===r?"none":"no more than "+r),i){let t=e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+i+".";throw Error(t)}};function eE(e,t){return`${e} failed: ${t} argument `}function eT(e,t,r){if((!r||t)&&"string"!=typeof t)throw Error(eE(e,"namespace")+"must be a valid firebase namespace.")}function eS(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw Error(eE(e,t)+"must be a valid function.")}function eA(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw Error(eE(e,t)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ex=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i>=55296&&i<=56319){let t=i-55296;l(++n<e.length,"Surrogate pair missing trail surrogate.");let r=e.charCodeAt(n)-56320;i=65536+(t<<10)+r}i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:(i<65536?t[r++]=i>>12|224:(t[r++]=i>>18|240,t[r++]=i>>12&63|128),t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},eC=function(e){let t=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t},ek=144e5,eN=.5;function eD(e,t=1e3,r=2){let n=t*Math.pow(r,e);return Math.min(ek,n+Math.round(eN*n*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(e){return Number.isFinite(e)?e+function(e){e=Math.abs(e);let t=e%100;if(t>=10&&t<=20)return"th";let r=e%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"}(e):`${e}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(e){return e&&e._delegate?e._delegate:e}},{d07263985281b344:"lToA8","./postinstall.mjs":"daImS","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],lToA8:[function(e,t,r){var n,i,s,o,a=Object.create,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,h=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,f=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of c(t))d.call(e,i)||i===r||l(e,i,{get:()=>t[i],enumerable:!(n=u(t,i))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?a(h(e)):{},f(!t&&e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)),m=(n=(e,t)=>{var r,n,i=t.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var l,u=[],c=!1,h=-1;function d(){c&&l&&(c=!1,l.length?u=l.concat(u):h=-1,u.length&&f())}function f(){if(!c){var e=a(d);c=!0;for(var t=u.length;t;){for(l=u,u=[];++h<t;)l&&l[h].run();h=-1,t=u.length}l=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||c||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}},()=>(i||n((i={exports:{}}).exports,i),i.exports)),g={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(g,{default:()=>v}),t.exports=f(l({},"__esModule",{value:!0}),g);var y=p(m());s=p(m()),o=t.exports,f(g,s,"default"),o&&f(o,s,"default");var v=y.default},{}],daImS:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"getDefaultsFromPostinstall",()=>i);let i=()=>void 0},{"@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],95325:[function(e,t,r){/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var n,i,s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"LogLevel",()=>i),s.export(r,"Logger",()=>h),s.export(r,"setLogLevel",()=>d),s.export(r,"setUserLogHandler",()=>f);let o=[];(n=i||(i={}))[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT";let a={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},l=i.INFO,u={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=u[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class h{constructor(e){this.name=e,this._logLevel=l,this._logHandler=c,this._userLogHandler=null,o.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function d(e){o.forEach(t=>{t.setLogLevel(e)})}function f(e,t){for(let r of o){let n=null;t&&t.level&&(n=a[t.level]),null===e?r.userLogHandler=null:r.userLogHandler=(t,r,...s)=>{let o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");r>=(null!=n?n:t.logLevel)&&e({level:i[r].toLowerCase(),message:o,args:s,type:t.name})}}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],"9TR5X":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"unwrap",()=>i.u),n.export(r,"wrap",()=>i.w),n.export(r,"deleteDB",()=>o),n.export(r,"openDB",()=>s);var i=e("./wrap-idb-value.js");function s(e,t,{blocked:r,upgrade:n,blocking:s,terminated:o}={}){let a=indexedDB.open(e,t),l=(0,i.w)(a);return n&&a.addEventListener("upgradeneeded",e=>{n((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction),e)}),r&&a.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),l.then(e=>{o&&e.addEventListener("close",()=>o()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),l}function o(e,{blocked:t}={}){let r=indexedDB.deleteDatabase(e);return t&&r.addEventListener("blocked",e=>t(e.oldVersion,e)),(0,i.w)(r).then(()=>void 0)}let a=["get","getKey","getAll","getAllKeys","count"],l=["put","add","delete","clear"],u=new Map;function c(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(u.get(t))return u.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=l.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||a.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return u.set(t,s),s}(0,i.r)(e=>({...e,get:(t,r,n)=>c(t,r)||e.get(t,r,n),has:(t,r)=>!!c(t,r)||e.has(t,r)}))},{"./wrap-idb-value.js":"emwtr","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],emwtr:[function(e,t,r){let n,i;var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"a",()=>h),s.export(r,"i",()=>o),s.export(r,"r",()=>f),s.export(r,"u",()=>m),s.export(r,"w",()=>p);let o=(e,t)=>t.some(t=>e instanceof t),a=new WeakMap,l=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,d={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return p(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){d=e(d)}function p(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(p(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&a.set(t,e)}).catch(()=>{}),h.set(t,e),t}(e);if(c.has(e))return c.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(m(this),e),p(a.get(this))}:function(...e){return p(t.apply(m(this),e))}:function(e,...r){let n=t.call(m(this),e,...r);return u.set(n,e.sort?e.sort():[e]),p(n)}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});l.set(e,t)}(t),o(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,d):t;return r!==e&&(c.set(e,r),h.set(r,e)),r}let m=e=>h.get(e)},{"@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],b5l1p:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var i=e("@firebase/auth");n.exportAll(i,r)},{"@firebase/auth":"8bINc","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],"8bINc":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"ActionCodeOperation",()=>i.A),n.export(r,"ActionCodeURL",()=>i.aj),n.export(r,"AuthCredential",()=>i.M),n.export(r,"AuthErrorCodes",()=>i.J),n.export(r,"EmailAuthCredential",()=>i.N),n.export(r,"EmailAuthProvider",()=>i.W),n.export(r,"FacebookAuthProvider",()=>i.X),n.export(r,"FactorId",()=>i.F),n.export(r,"GithubAuthProvider",()=>i.Z),n.export(r,"GoogleAuthProvider",()=>i.Y),n.export(r,"OAuthCredential",()=>i.Q),n.export(r,"OAuthProvider",()=>i._),n.export(r,"OperationType",()=>i.O),n.export(r,"PhoneAuthCredential",()=>i.U),n.export(r,"PhoneAuthProvider",()=>i.P),n.export(r,"PhoneMultiFactorGenerator",()=>i.n),n.export(r,"ProviderId",()=>i.q),n.export(r,"RecaptchaVerifier",()=>i.R),n.export(r,"SAMLAuthProvider",()=>i.$),n.export(r,"SignInMethod",()=>i.S),n.export(r,"TotpMultiFactorGenerator",()=>i.T),n.export(r,"TotpSecret",()=>i.o),n.export(r,"TwitterAuthProvider",()=>i.a0),n.export(r,"applyActionCode",()=>i.a8),n.export(r,"beforeAuthStateChanged",()=>i.y),n.export(r,"browserCookiePersistence",()=>i.a),n.export(r,"browserLocalPersistence",()=>i.b),n.export(r,"browserPopupRedirectResolver",()=>i.m),n.export(r,"browserSessionPersistence",()=>i.c),n.export(r,"checkActionCode",()=>i.a9),n.export(r,"confirmPasswordReset",()=>i.a7),n.export(r,"connectAuthEmulator",()=>i.L),n.export(r,"createUserWithEmailAndPassword",()=>i.ab),n.export(r,"debugErrorMap",()=>i.H),n.export(r,"deleteUser",()=>i.G),n.export(r,"fetchSignInMethodsForEmail",()=>i.ag),n.export(r,"getAdditionalUserInfo",()=>i.ar),n.export(r,"getAuth",()=>i.p),n.export(r,"getIdToken",()=>i.ao),n.export(r,"getIdTokenResult",()=>i.ap),n.export(r,"getMultiFactorResolver",()=>i.at),n.export(r,"getRedirectResult",()=>i.k),n.export(r,"inMemoryPersistence",()=>i.V),n.export(r,"indexedDBLocalPersistence",()=>i.i),n.export(r,"initializeAuth",()=>i.K),n.export(r,"initializeRecaptchaConfig",()=>i.v),n.export(r,"isSignInWithEmailLink",()=>i.ae),n.export(r,"linkWithCredential",()=>i.a3),n.export(r,"linkWithPhoneNumber",()=>i.l),n.export(r,"linkWithPopup",()=>i.e),n.export(r,"linkWithRedirect",()=>i.h),n.export(r,"multiFactor",()=>i.au),n.export(r,"onAuthStateChanged",()=>i.z),n.export(r,"onIdTokenChanged",()=>i.x),n.export(r,"parseActionCodeURL",()=>i.ak),n.export(r,"prodErrorMap",()=>i.I),n.export(r,"reauthenticateWithCredential",()=>i.a4),n.export(r,"reauthenticateWithPhoneNumber",()=>i.r),n.export(r,"reauthenticateWithPopup",()=>i.f),n.export(r,"reauthenticateWithRedirect",()=>i.j),n.export(r,"reload",()=>i.as),n.export(r,"revokeAccessToken",()=>i.E),n.export(r,"sendEmailVerification",()=>i.ah),n.export(r,"sendPasswordResetEmail",()=>i.a6),n.export(r,"sendSignInLinkToEmail",()=>i.ad),n.export(r,"setPersistence",()=>i.t),n.export(r,"signInAnonymously",()=>i.a1),n.export(r,"signInWithCredential",()=>i.a2),n.export(r,"signInWithCustomToken",()=>i.a5),n.export(r,"signInWithEmailAndPassword",()=>i.ac),n.export(r,"signInWithEmailLink",()=>i.af),n.export(r,"signInWithPhoneNumber",()=>i.s),n.export(r,"signInWithPopup",()=>i.d),n.export(r,"signInWithRedirect",()=>i.g),n.export(r,"signOut",()=>i.D),n.export(r,"unlink",()=>i.aq),n.export(r,"updateCurrentUser",()=>i.C),n.export(r,"updateEmail",()=>i.am),n.export(r,"updatePassword",()=>i.an),n.export(r,"updatePhoneNumber",()=>i.u),n.export(r,"updateProfile",()=>i.al),n.export(r,"useDeviceLanguage",()=>i.B),n.export(r,"validatePassword",()=>i.w),n.export(r,"verifyBeforeUpdateEmail",()=>i.ai),n.export(r,"verifyPasswordResetCode",()=>i.aa);var i=e("./index-35c79a8a.js");e("@firebase/app"),e("@firebase/util"),e("@firebase/logger"),e("tslib"),e("@firebase/component")},{"./index-35c79a8a.js":"3WlHt","@firebase/app":"hhTEg","@firebase/util":"kdZ0V","@firebase/logger":"95325",tslib:"bGRfT","@firebase/component":"7aBr9","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],"3WlHt":[function(e,t,r){var n,i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"$",()=>tA),i.export(r,"A",()=>p),i.export(r,"B",()=>rv),i.export(r,"C",()=>rw),i.export(r,"D",()=>rb),i.export(r,"E",()=>rI),i.export(r,"F",()=>c),i.export(r,"G",()=>r_),i.export(r,"H",()=>g),i.export(r,"I",()=>y),i.export(r,"J",()=>w),i.export(r,"K",()=>e0),i.export(r,"L",()=>e1),i.export(r,"M",()=>e6),i.export(r,"N",()=>ta),i.export(r,"O",()=>f),i.export(r,"P",()=>nl),i.export(r,"Q",()=>tu),i.export(r,"R",()=>ne),i.export(r,"S",()=>d),i.export(r,"T",()=>n9),i.export(r,"U",()=>tm),i.export(r,"V",()=>eI),i.export(r,"W",()=>tv),i.export(r,"X",()=>t_),i.export(r,"Y",()=>tE),i.export(r,"Z",()=>tT),i.export(r,"_",()=>tI),i.export(r,"a",()=>rF),i.export(r,"a0",()=>tx),i.export(r,"a1",()=>tD),i.export(r,"a2",()=>tj),i.export(r,"a3",()=>tB),i.export(r,"a4",()=>tq),i.export(r,"a5",()=>tG),i.export(r,"a6",()=>tJ),i.export(r,"a7",()=>tY),i.export(r,"a8",()=>tX),i.export(r,"a9",()=>tZ),i.export(r,"aA",()=>nj),i.export(r,"aB",()=>eR),i.export(r,"aC",()=>E),i.export(r,"aD",()=>C),i.export(r,"aE",()=>nF),i.export(r,"aF",()=>ew),i.export(r,"aG",()=>e_),i.export(r,"aH",()=>nL),i.export(r,"aI",()=>nS),i.export(r,"aJ",()=>nT),i.export(r,"aK",()=>ej),i.export(r,"aL",()=>ey),i.export(r,"aM",()=>eU),i.export(r,"aN",()=>eL),i.export(r,"aO",()=>rB),i.export(r,"aP",()=>nX),i.export(r,"aQ",()=>M),i.export(r,"aR",()=>tS),i.export(r,"aa",()=>t0),i.export(r,"ab",()=>t1),i.export(r,"ac",()=>t2),i.export(r,"ad",()=>t4),i.export(r,"ae",()=>t6),i.export(r,"af",()=>t5),i.export(r,"ag",()=>t3),i.export(r,"ah",()=>t8),i.export(r,"ai",()=>t7),i.export(r,"aj",()=>tg),i.export(r,"ak",()=>ty),i.export(r,"al",()=>rt),i.export(r,"am",()=>rr),i.export(r,"an",()=>rn),i.export(r,"ao",()=>er),i.export(r,"ap",()=>en),i.export(r,"aq",()=>tL),i.export(r,"ar",()=>rh),i.export(r,"as",()=>eh),i.export(r,"at",()=>rS),i.export(r,"au",()=>rk),i.export(r,"av",()=>N),i.export(r,"aw",()=>eO),i.export(r,"ax",()=>ek),i.export(r,"ay",()=>_),i.export(r,"az",()=>n0),i.export(r,"b",()=>rR),i.export(r,"c",()=>rU),i.export(r,"d",()=>ng),i.export(r,"e",()=>nv),i.export(r,"f",()=>ny),i.export(r,"g",()=>nC),i.export(r,"h",()=>nO),i.export(r,"i",()=>r2),i.export(r,"j",()=>nN),i.export(r,"k",()=>nP),i.export(r,"l",()=>nn),i.export(r,"m",()=>n2),i.export(r,"n",()=>n5),i.export(r,"o",()=>n8),i.export(r,"p",()=>ia),i.export(r,"q",()=>h),i.export(r,"r",()=>ni),i.export(r,"s",()=>nr),i.export(r,"t",()=>rd),i.export(r,"u",()=>no),i.export(r,"v",()=>rf),i.export(r,"w",()=>rp),i.export(r,"x",()=>rm),i.export(r,"y",()=>rg),i.export(r,"z",()=>ry);var s=e("@firebase/app"),o=e("@firebase/util"),a=e("@firebase/logger"),l=e("tslib"),u=e("@firebase/component");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c={PHONE:"phone",TOTP:"totp"},h={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},d={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},f={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},p={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let g=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}},y=m,v=new o.ErrorFactory("auth","Firebase",m()),w={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"},b=new a.Logger("@firebase/auth");function I(e,...t){b.logLevel<=a.LogLevel.ERROR&&b.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,...t){throw x(e,...t)}function E(e,...t){return x(e,...t)}function T(e,t,r){let n=Object.assign(Object.assign({},y()),{[t]:r}),i=new o.ErrorFactory("auth","Firebase",n);return i.create(t,{appName:e.name})}function S(e){return T(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function A(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&_(e,"argument-error"),T(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function x(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return v.create(e,...t)}function C(e,t,...r){if(!e)throw x(t,...r)}function k(e){let t="INTERNAL ASSERTION FAILED: "+e;throw I(t),Error(t)}function N(e,t){e||k(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===R()||"https:"===R()}function R(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,N(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,o.isMobileCordova)()||(0,o.isReactNative)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(O()||(0,o.isBrowserExtension)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){N(e.emulator,"Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void k("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void k("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void k("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},V=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],U=new P(3e4,6e4);function j(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function B(e,t,r,n,i={}){return q(e,i,async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});let a=(0,o.querystring)(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);let u=Object.assign({method:t,headers:l},i);return(0,o.isCloudflareWorker)()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&(0,o.isCloudWorkstation)(e.emulatorConfig.host)&&(u.credentials="include"),M.fetch()(await G(e,e.config.apiHost,r,a),u)})}async function q(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},F),t);try{let t=new $(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw K(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let t=i.ok?s.errorMessage:s.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw K(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===r)throw K(e,"email-already-in-use",s);if("USER_DISABLED"===r)throw K(e,"user-disabled",s);let a=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw T(e,a,o);_(e,a)}}catch(t){if(t instanceof o.FirebaseError)throw t;_(e,"network-request-failed",{message:String(t)})}}async function z(e,t,r,n,i={}){let s=await B(e,t,r,n,i);return"mfaPendingCredential"in s&&_(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function G(e,t,r,n){let i=`${t}${r}?${n}`,s=e.config.emulator?L(e.config,i):`${e.config.apiScheme}://${i}`;if(V.includes(r)&&(await e._persistenceManagerAvailable,"COOKIE"===e._getPersistenceType())){let t=e._getPersistence();return t._getFinalTarget(s).toString()}return s}class ${clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(E(this.auth,"network-request-failed")),U.get())})}}function K(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=E(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return void 0!==e&&void 0!==e.getResponse}function W(e){return void 0!==e&&void 0!==e.enterprise}class Q{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e){return(await B(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Y(e,t){return B(e,"GET","/v2/recaptchaConfig",j(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t){return B(e,"POST","/v1/accounts:delete",t)}async function Z(e,t){return B(e,"POST","/v1/accounts:update",t)}async function ee(e,t){return B(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e,t=!1){return(0,o.getModularInstance)(e).getIdToken(t)}async function en(e,t=!1){let r=(0,o.getModularInstance)(e),n=await r.getIdToken(t),i=es(n);C(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");let s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:et(ei(i.auth_time)),issuedAtTime:et(ei(i.iat)),expirationTime:et(ei(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function ei(e){return 1e3*Number(e)}function es(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return I("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,o.base64Decode)(r);if(!e)return I("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return I("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function eo(e){let t=es(e);return C(t,"internal-error"),C(void 0!==t.exp,"internal-error"),C(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof o.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=et(this.lastLoginAt),this.creationTime=et(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(e){var t;let r=e.auth,n=await e.getIdToken(),i=await ea(e,ee(r,{idToken:n}));C(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ed(s.providerUserInfo):[],a=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null==a?void 0:a.length),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new eu(s.createdAt,s.lastLoginAt),isAnonymous:!!l&&u};Object.assign(e,c)}async function eh(e){let t=(0,o.getModularInstance)(e);await ec(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ed(e){return e.map(e=>{var{providerId:t}=e,r=(0,l.__rest)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ef(e,t){let r=await q(e,{},async()=>{let r=(0,o.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=await G(e,n,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";let l={method:"POST",headers:a,body:r};return e.emulatorConfig&&(0,o.isCloudWorkstation)(e.emulatorConfig.host)&&(l.credentials="include"),M.fetch()(s,l)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function ep(e,t){return B(e,"POST","/v2/accounts:revokeToken",j(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(void 0!==e.idToken,"internal-error"),C(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):eo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){C(0!==e.length,"internal-error");let t=eo(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(C(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await ef(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new em;return r&&(C("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(C("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(C("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new em,this.toJSON())}_performRefresh(){return k("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(e,t){C("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ey{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=(0,l.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new el(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new eu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await ea(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return en(this,e)}reload(){return eh(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new ey(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ec(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,s._isFirebaseServerApp)(this.auth.app))return Promise.reject(S(this.auth));let e=await this.getIdToken();return await ea(this,X(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:I,stsTokenManager:_}=t;C(v&&_,e,"internal-error");let E=em.fromJSON(this.name,_);C("string"==typeof v,e,"internal-error"),eg(c,e.name),eg(h,e.name),C("boolean"==typeof w,e,"internal-error"),C("boolean"==typeof b,e,"internal-error"),eg(d,e.name),eg(f,e.name),eg(p,e.name),eg(m,e.name),eg(g,e.name),eg(y,e.name);let T=new ey({uid:v,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return I&&Array.isArray(I)&&(T.providerData=I.map(e=>Object.assign({},e))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,r=!1){let n=new em;n.updateFromServerResponse(t);let i=new ey({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await ec(i),i}static async _fromGetAccountInfoResponse(e,t,r){let n=t.users[0];C(void 0!==n.localId,"internal-error");let i=void 0!==n.providerUserInfo?ed(n.providerUserInfo):[],s=!(n.email&&n.passwordHash)&&!(null==i?void 0:i.length),o=new em;o.updateFromIdToken(r);let a=new ey({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new eu(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(null==i?void 0:i.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ev=new Map;function ew(e){N(e instanceof Function,"Expected a class definition");let t=ev.get(e);return t?N(t instanceof e,"Instance stored in cache mismatched with class"):(t=new e,ev.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}eb.type="NONE";let eI=eb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(e,t,r){return`firebase:${e}:${t}:${r}`}class eE{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=e_(this.userKey,n.apiKey,i),this.fullPersistenceKey=e_("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){let t=await ee(this.auth,{idToken:e}).catch(()=>void 0);return t?ey._fromGetAccountInfoResponse(this.auth,t,e):null}return ey._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new eE(ew(eI),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||ew(eI),s=e_(r,e.config.apiKey,e.name),o=null;for(let r of t)try{let t=await r._get(s);if(t){let n;if("string"==typeof t){let r=await ee(e,{idToken:t}).catch(()=>void 0);if(!r)break;n=await ey._fromGetAccountInfoResponse(e,r,t)}else n=ey._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new eE(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";{if(eC(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(eS(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(eN(t))return"Blackberry";if(eD(t))return"Webos";if(eA(t))return"Safari";if((t.includes("chrome/")||ex(t))&&!t.includes("edge/"))return"Chrome";if(ek(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function eS(e=(0,o.getUA)()){return/firefox\//i.test(e)}function eA(e=(0,o.getUA)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ex(e=(0,o.getUA)()){return/crios\//i.test(e)}function eC(e=(0,o.getUA)()){return/iemobile/i.test(e)}function ek(e=(0,o.getUA)()){return/android/i.test(e)}function eN(e=(0,o.getUA)()){return/blackberry/i.test(e)}function eD(e=(0,o.getUA)()){return/webos/i.test(e)}function eO(e=(0,o.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function eR(e=(0,o.getUA)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function eP(e=(0,o.getUA)()){return eO(e)||ek(e)||eD(e)||eN(e)||/windows phone/i.test(e)||eC(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(e,t=[]){let r;switch(e){case"Browser":r=eT((0,o.getUA)());break;case"Worker":r=`${eT((0,o.getUA)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${s.SDK_VERSION}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eF(e,t={}){return B(e,"GET","/v2/passwordPolicy",j(e,t))}class eV{constructor(e){var t,r,n,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eB(this),this.idTokenSubscription=new eB(this),this.beforeStateQueue=new eM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ew(t)),this._initializationPromise=this.queue(async()=>{var r,n,i;if(!this._deleted&&(this.persistenceManager=await eE.create(this,e),null===(r=this._resolvePersistenceManagerAvailable)||void 0===r||r.call(this),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await ee(this,{idToken:e}),r=await ey._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,s._isFirebaseServerApp)(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==o?void 0:o.user)&&(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,s._isFirebaseServerApp)(this.app))return Promise.reject(S(this));let t=e?(0,o.getModularInstance)(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,s._isFirebaseServerApp)(this.app)?Promise.reject(S(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,s._isFirebaseServerApp)(this.app)?Promise.reject(S(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ew(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await eF(this),t=new eV(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new o.ErrorFactory("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(r.tenantId=this.tenantId),await ep(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&ew(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await eE.create(this,[ew(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eL(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;if((0,s._isFirebaseServerApp)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){b.logLevel<=a.LogLevel.WARN&&b.warn(`Auth (${s.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function ej(e){return(0,o.getModularInstance)(e)}class eB{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,o.createSubscribe)(e=>this.observer=e)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eq={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ez(e){return eq.loadJS(e)}function eG(e){return`__${e}${Math.floor(1e6*Math.random())}`}class e${constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){let r=this.counter;return this._widgets.set(r,new eW(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;let r=e||1e12;null===(t=this._widgets.get(r))||void 0===t||t.delete(),this._widgets.delete(r)}getResponse(e){var t;return(null===(t=this._widgets.get(e||1e12))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;return null===(t=this._widgets.get(e||1e12))||void 0===t||t.execute(),""}}class eK{constructor(){this.enterprise=new eH}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class eH{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class eW{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let n="string"==typeof e?document.getElementById(e):e;C(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){let t=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let e=0;e<50;e++)t.push(r.charAt(Math.floor(Math.random()*r.length)));return t.join("")}(0);let{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}let eQ="NO_RECAPTCHA";class eJ{constructor(e){this.type="recaptcha-enterprise",this.auth=ej(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{Y(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new Q(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;W(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r(eQ)})}):n(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){let e=new eK;return e.execute("siteKey",{action:"verify"})}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&W(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=eq.recaptchaEnterpriseScript;0!==t.length&&(t+=r),ez(t).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function eY(e,t,r,n=!1,i=!1){let s;let o=new eJ(e);if(i)s=eQ;else try{s=await o.verify(r)}catch(e){s=await o.verify(r,!0)}let a=Object.assign({},t);if("mfaSmsEnrollment"===r||"mfaSmsSignIn"===r){if("phoneEnrollmentInfo"in a){let e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){let e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function eX(e,t,r,n,i){var s,o;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(s=e._getRecaptchaConfig())||void 0===s||!s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await eY(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await eY(e,t,r,"getOobCode"===r);return n(e,i)}}if("PHONE_PROVIDER"!==i)return Promise.reject(i+" provider is not supported.");if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){let i=await eY(e,t,r);return n(e,i).catch(async i=>{var s;if((null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${r} flow.`);let i=await eY(e,t,r,!1,!0);return n(e,i)}return Promise.reject(i)})}{let i=await eY(e,t,r,!1,!0);return n(e,i)}}async function eZ(e){let t=ej(e),r=await Y(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Q(r);if(null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,n.isAnyProviderEnabled()){let e=new eJ(t);e.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(e,t){let r=(0,s._getProvider)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if((0,o.deepEqual)(n,null!=t?t:{}))return e;_(e,"already-initialized")}let n=r.initialize({options:t});return n}function e1(e,t,r){let n=ej(e);C(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),s=e2(t),{host:a,port:l}=function(e){let t=e2(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:e4(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:e4(t)}}}(t),u=null===l?"":`:${l}`,c={url:`${s}//${a}${u}/`},h=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!n._canInitEmulator){C(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),C((0,o.deepEqual)(c,n.config.emulator)&&(0,o.deepEqual)(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=c,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,(0,o.isCloudWorkstation)(a)?((0,o.pingServer)(`${s}//${a}${u}`),(0,o.updateEmulatorBanner)("Auth",!0)):i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function e2(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function e4(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return k("not implemented")}_getIdTokenResponse(e){return k("not implemented")}_linkToIdToken(e,t){return k("not implemented")}_getReauthenticationResolver(e){return k("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e5(e,t){return B(e,"POST","/v1/accounts:resetPassword",j(e,t))}async function e9(e,t){return B(e,"POST","/v1/accounts:update",t)}async function e3(e,t){return B(e,"POST","/v1/accounts:signUp",t)}async function e8(e,t){return B(e,"POST","/v1/accounts:update",j(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e7(e,t){return z(e,"POST","/v1/accounts:signInWithPassword",j(e,t))}async function te(e,t){return B(e,"POST","/v1/accounts:sendOobCode",j(e,t))}async function tt(e,t){return te(e,t)}async function tr(e,t){return te(e,t)}async function tn(e,t){return te(e,t)}async function ti(e,t){return te(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",j(e,t))}async function to(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",j(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends e6{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new ta(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ta(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eX(e,t,"signInWithPassword",e7,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ts(e,{email:this._email,oobCode:this._password});default:_(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return eX(e,r,"signUpPassword",e3,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return to(e,{idToken:t,email:this._email,oobCode:this._password});default:_(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(e,t){return z(e,"POST","/v1/accounts:signInWithIdp",j(e,t))}class tu extends e6{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new tu(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=(0,l.__rest)(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new tu(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){let t=this.buildRequest();return tl(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,tl(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,tl(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,o.querystring)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(e,t){return B(e,"POST","/v1/accounts:sendVerificationCode",j(e,t))}async function th(e,t){return z(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,t))}async function td(e,t){let r=await z(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,t));if(r.temporaryProof)throw K(e,"account-exists-with-different-credential",r);return r}let tf={USER_NOT_FOUND:"user-not-found"};async function tp(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return z(e,"POST","/v1/accounts:signInWithPhoneNumber",j(e,r),tf)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends e6{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new tm({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new tm({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return th(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return td(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return tp(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new tm({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class tg{constructor(e){var t,r,n,i,s,a;let l=(0,o.querystringDecode)((0,o.extractQuerystring)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(r=l.oobCode)&&void 0!==r?r:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);C(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(i=l.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=l.lang)&&void 0!==s?s:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,o.querystringDecode)((0,o.extractQuerystring)(e)).link,r=t?(0,o.querystringDecode)((0,o.extractQuerystring)(t)).deep_link_id:null,n=(0,o.querystringDecode)((0,o.extractQuerystring)(e)).deep_link_id,i=n?(0,o.querystringDecode)((0,o.extractQuerystring)(n)).link:null;return i||n||r||t||e}(e);try{return new tg(t)}catch(e){return null}}}function ty(e){return tg.parseLink(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.providerId=tv.PROVIDER_ID}static credential(e,t){return ta._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=tg.parseLink(t);return C(r,"argument-error"),ta._fromEmailAndCode(e,r.code,r.tenantId)}}tv.PROVIDER_ID="password",tv.EMAIL_PASSWORD_SIGN_IN_METHOD="password",tv.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb extends tw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class tI extends tb{static credentialFromJSON(e){let t="string"==typeof e?JSON.parse(e):e;return C("providerId"in t&&"signInMethod"in t,"argument-error"),tu._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return C(e.idToken||e.accessToken,"argument-error"),tu._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return tI.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return tI.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:n,pendingToken:i,nonce:s,providerId:o}=e;if(!r&&!n&&!t&&!i||!o)return null;try{return new tI(o)._credential({idToken:t,accessToken:r,nonce:s,pendingToken:i})}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends tb{constructor(){super("facebook.com")}static credential(e){return tu._fromParams({providerId:t_.PROVIDER_ID,signInMethod:t_.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t_.credentialFromTaggedObject(e)}static credentialFromError(e){return t_.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t_.credential(e.oauthAccessToken)}catch(e){return null}}}t_.FACEBOOK_SIGN_IN_METHOD="facebook.com",t_.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends tb{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tu._fromParams({providerId:tE.PROVIDER_ID,signInMethod:tE.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tE.credentialFromTaggedObject(e)}static credentialFromError(e){return tE.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return tE.credential(t,r)}catch(e){return null}}}tE.GOOGLE_SIGN_IN_METHOD="google.com",tE.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT extends tb{constructor(){super("github.com")}static credential(e){return tu._fromParams({providerId:tT.PROVIDER_ID,signInMethod:tT.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tT.credentialFromTaggedObject(e)}static credentialFromError(e){return tT.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tT.credential(e.oauthAccessToken)}catch(e){return null}}}tT.GITHUB_SIGN_IN_METHOD="github.com",tT.PROVIDER_ID="github.com";class tS extends e6{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){let t=this.buildRequest();return tl(e,t)}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,tl(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,tl(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n,pendingToken:i}=t;return r&&n&&i&&r===n?new tS(r,i):null}static _create(e,t){return new tS(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class tA extends tw{constructor(e){C(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return tA.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return tA.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){let t=tS.fromJSON(e);return C(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return tS._create(r,t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx extends tb{constructor(){super("twitter.com")}static credential(e,t){return tu._fromParams({providerId:tx.PROVIDER_ID,signInMethod:tx.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tx.credentialFromTaggedObject(e)}static credentialFromError(e){return tx.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return tx.credential(t,r)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(e,t){return z(e,"POST","/v1/accounts:signUp",j(e,t))}tx.TWITTER_SIGN_IN_METHOD="twitter.com",tx.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await ey._fromIdTokenResponse(e,r,n),s=tN(r),o=new tk({user:i,providerId:s,_tokenResponse:r,operationType:t});return o}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);let n=tN(r);return new tk({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function tN(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(e){var t;if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let r=ej(e);if(await r._initializationPromise,null===(t=r.currentUser)||void 0===t?void 0:t.isAnonymous)return new tk({user:r.currentUser,providerId:null,operationType:"signIn"});let n=await tC(r,{returnSecureToken:!0}),i=await tk._fromIdTokenResponse(r,"signIn",n,!0);return await r._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO extends o.FirebaseError{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,tO.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new tO(e,t,r,n)}}function tR(e,t,r,n){let i="reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw tO._fromErrorAndOperation(e,r,t,n);throw r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(e,t){let r=(0,o.getModularInstance)(e);await tF(!0,r,t);let{providerUserInfo:n}=await Z(r.auth,{idToken:await r.getIdToken(),deleteProvider:[t]}),i=tP(n||[]);return r.providerData=r.providerData.filter(e=>i.has(e.providerId)),i.has("phone")||(r.phoneNumber=null),await r.auth._persistUserIfCurrent(r),r}async function tM(e,t,r=!1){let n=await ea(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return tk._forOperation(e,"link",n)}async function tF(e,t,r){await ec(t);let n=tP(t.providerData);C(n.has(r)===e,t.auth,!1===e?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tV(e,t,r=!1){let{auth:n}=e;if((0,s._isFirebaseServerApp)(n.app))return Promise.reject(S(n));let i="reauthenticate";try{let s=await ea(e,tR(n,i,t,e),r);C(s.idToken,n,"internal-error");let o=es(s.idToken);C(o,n,"internal-error");let{sub:a}=o;return C(e.uid===a,n,"user-mismatch"),tk._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&_(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tU(e,t,r=!1){if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n="signIn",i=await tR(e,n,t),o=await tk._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(o.user),o}async function tj(e,t){return tU(ej(e),t)}async function tB(e,t){let r=(0,o.getModularInstance)(e);return await tF(!1,r,t.providerId),tM(r,t)}async function tq(e,t){return tV((0,o.getModularInstance)(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tz(e,t){return z(e,"POST","/v1/accounts:signInWithCustomToken",j(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tG(e,t){if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let r=ej(e),n=await tz(r,{token:t,returnSecureToken:!0}),i=await tk._fromIdTokenResponse(r,"signIn",n);return await r._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tK._fromServerResponse(e,t):"totpInfo"in t?tH._fromServerResponse(e,t):_(e,"internal-error")}}class tK extends t${constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tK(t)}}class tH extends t${constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new tH(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tW(e,t,r){var n;C((null===(n=r.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),C(void 0===r.dynamicLinkDomain||r.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),C(void 0===r.linkDomain||r.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=r.url,t.dynamicLinkDomain=r.dynamicLinkDomain,t.linkDomain=r.linkDomain,t.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(C(r.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=r.iOS.bundleId),r.android&&(C(r.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=r.android.installApp,t.androidMinimumVersionCode=r.android.minimumVersion,t.androidPackageName=r.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tQ(e){let t=ej(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function tJ(e,t,r){let n=ej(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};r&&tW(n,i,r),await eX(n,i,"getOobCode",tr,"EMAIL_PASSWORD_PROVIDER")}async function tY(e,t,r){await e5((0,o.getModularInstance)(e),{oobCode:t,newPassword:r}).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tQ(e),t})}async function tX(e,t){await e8((0,o.getModularInstance)(e),{oobCode:t})}async function tZ(e,t){let r=(0,o.getModularInstance)(e),n=await e5(r,{oobCode:t}),i=n.requestType;switch(C(i,r,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":C(n.newEmail,r,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":C(n.mfaInfo,r,"internal-error");default:C(n.email,r,"internal-error")}let s=null;return n.mfaInfo&&(s=t$._fromServerResponse(ej(r),n.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.newEmail:n.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.email:n.newEmail)||null,multiFactorInfo:s},operation:i}}async function t0(e,t){let{data:r}=await tZ((0,o.getModularInstance)(e),t);return r.email}async function t1(e,t,r){if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n=ej(e),i=eX(n,{returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tC,"EMAIL_PASSWORD_PROVIDER"),o=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tQ(e),t}),a=await tk._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(a.user),a}function t2(e,t,r){return(0,s._isFirebaseServerApp)(e.app)?Promise.reject(S(e)):tj((0,o.getModularInstance)(e),tv.credential(t,r)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tQ(e),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t4(e,t,r){let n=ej(e),i={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};C(r.handleCodeInApp,n,"argument-error"),r&&tW(n,i,r),await eX(n,i,"getOobCode",tn,"EMAIL_PASSWORD_PROVIDER")}function t6(e,t){let r=tg.parseLink(t);return(null==r?void 0:r.operation)==="EMAIL_SIGNIN"}async function t5(e,t,r){if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n=(0,o.getModularInstance)(e),i=tv.credentialWithLink(t,r||D());return C(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),tj(n,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t9(e,t){return B(e,"POST","/v1/accounts:createAuthUri",j(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t3(e,t){let r=O()?D():"http://localhost",{signinMethods:n}=await t9((0,o.getModularInstance)(e),{identifier:t,continueUri:r});return n||[]}async function t8(e,t){let r=(0,o.getModularInstance)(e),n=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:n};t&&tW(r.auth,i,t);let{email:s}=await tt(r.auth,i);s!==e.email&&await e.reload()}async function t7(e,t,r){let n=(0,o.getModularInstance)(e),i=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:t};r&&tW(n.auth,s,r);let{email:a}=await ti(n.auth,s);a!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e,t){return B(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,{displayName:t,photoURL:r}){if(void 0===t&&void 0===r)return;let n=(0,o.getModularInstance)(e),i=await n.getIdToken(),s=await ea(n,re(n.auth,{idToken:i,displayName:t,photoUrl:r,returnSecureToken:!0}));n.displayName=s.displayName||null,n.photoURL=s.photoUrl||null;let a=n.providerData.find(({providerId:e})=>"password"===e);a&&(a.displayName=n.displayName,a.photoURL=n.photoURL),await n._updateTokensIfNecessary(s)}function rr(e,t){let r=(0,o.getModularInstance)(e);return(0,s._isFirebaseServerApp)(r.auth.app)?Promise.reject(S(r.auth)):ri(r,t,null)}function rn(e,t){return ri((0,o.getModularInstance)(e),null,t)}async function ri(e,t,r){let{auth:n}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),r&&(s.password=r);let o=await ea(e,e9(n,s));await e._updateTokensIfNecessary(o,!0)}class rs{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class ro extends rs{constructor(e,t,r,n){super(e,t,r),this.username=n}}class ra extends rs{constructor(e,t){super(e,"facebook.com",t)}}class rl extends ro{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class ru extends rs{constructor(e,t){super(e,"google.com",t)}}class rc extends ro{constructor(e,t,r){super(e,"twitter.com",t,r)}}function rh(e){let{user:t,_tokenResponse:r}=e;return t.isAnonymous&&!r?{providerId:null,isNewUser:!1,profile:null}:/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){var t,r;if(!e)return null;let{providerId:n}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null==e?void 0:e.idToken)){let n=null===(r=null===(t=es(e.idToken))||void 0===t?void 0:t.firebase)||void 0===r?void 0:r.sign_in_provider;if(n)return new rs(s,"anonymous"!==n&&"custom"!==n?n:null)}if(!n)return null;switch(n){case"facebook.com":return new ra(s,i);case"github.com":return new rl(s,i);case"google.com":return new ru(s,i);case"twitter.com":return new rc(s,i,e.screenName||null);case"custom":case"anonymous":return new rs(s,null);default:return new rs(s,n,i)}}(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(e,t){return(0,o.getModularInstance)(e).setPersistence(t)}function rf(e){return eZ(e)}async function rp(e,t){let r=ej(e);return r.validatePassword(t)}function rm(e,t,r,n){return(0,o.getModularInstance)(e).onIdTokenChanged(t,r,n)}function rg(e,t,r){return(0,o.getModularInstance)(e).beforeAuthStateChanged(t,r)}function ry(e,t,r,n){return(0,o.getModularInstance)(e).onAuthStateChanged(t,r,n)}function rv(e){(0,o.getModularInstance)(e).useDeviceLanguage()}function rw(e,t){return(0,o.getModularInstance)(e).updateCurrentUser(t)}function rb(e){return(0,o.getModularInstance)(e).signOut()}function rI(e,t){let r=ej(e);return r.revokeAccessToken(t)}async function r_(e){return(0,o.getModularInstance)(e).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new rE("enroll",e,t)}static _fromMfaPendingCredential(e){return new rE("signin",e)}toJSON(){let e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,r;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return rE._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(r=e.multiFactorSession)||void 0===r?void 0:r.idToken)return rE._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){let r=ej(e),n=t.customData._serverResponse,i=(n.mfaInfo||[]).map(e=>t$._fromServerResponse(r,e));C(n.mfaPendingCredential,r,"internal-error");let s=rE._fromMfaPendingCredential(n.mfaPendingCredential);return new rT(s,i,async e=>{let i=await e._process(r,s);delete n.mfaInfo,delete n.mfaPendingCredential;let o=Object.assign(Object.assign({},n),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":let a=await tk._fromIdTokenResponse(r,t.operationType,o);return await r._updateCurrentUser(a.user),a;case"reauthenticate":return C(t.user,r,"internal-error"),tk._forOperation(t.user,t.operationType,o);default:_(r,"internal-error")}})}async resolveSignIn(e){return this.signInResolver(e)}}function rS(e,t){var r;let n=(0,o.getModularInstance)(e);return C(t.customData.operationType,n,"argument-error"),C(null===(r=t.customData._serverResponse)||void 0===r?void 0:r.mfaPendingCredential,n,"argument-error"),rT._fromError(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:start",j(e,t))}class rx{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>t$._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new rx(e)}async getSession(){return rE._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){let r=await this.getSession(),n=await ea(this.user,e._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(n),this.user.reload()}async unenroll(e){let t="string"==typeof e?e:e.uid,r=await this.user.getIdToken();try{var n;let e=await ea(this.user,(n=this.user.auth,B(n,"POST","/v2/accounts/mfaEnrollment:withdraw",j(n,{idToken:r,mfaEnrollmentId:t}))));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}}}let rC=new WeakMap;function rk(e){let t=(0,o.getModularInstance)(e);return rC.has(t)||rC.set(t,rx._fromUser(t)),rC.get(t)}let rN="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(rN,"1"),this.storage.removeItem(rN),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class rO extends rD{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;t?this.detachListener():this.stopPolling();let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},i=this.storage.getItem(r);(0,o.isIE)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rO.type="LOCAL";let rR=rO;function rP(e){var t,r;let n=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),i=RegExp(`${n}=([^;]+)`);return null!==(r=null===(t=document.cookie.match(i))||void 0===t?void 0:t[1])&&void 0!==r?r:null}function rL(e){let t="http:"===window.location.protocol;return`${t?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class rM{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){window;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return!!("boolean"!=typeof isSecureContext||isSecureContext)&&"undefined"!=typeof navigator&&"undefined"!=typeof document&&(null===(e=navigator.cookieEnabled)||void 0===e||e)}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=rL(e);if(window.cookieStore){let e=await window.cookieStore.get(t);return null==e?void 0:e.value}return rP(t)}async _remove(e){if(!this._isAvailable())return;let t=await this._get(e);if(!t)return;let r=rL(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>void 0)}_addListener(e,t){if(!this._isAvailable())return;let r=rL(e);if(window.cookieStore){let e=e=>{let n=e.changed.find(e=>e.name===r);n&&t(n.value);let i=e.deleted.find(e=>e.name===r);i&&t(null)};return this.listenerUnsubscribes.set(t,()=>window.cookieStore.removeEventListener("change",e)),window.cookieStore.addEventListener("change",e)}let n=rP(r),i=setInterval(()=>{let e=rP(r);e!==n&&(t(e),n=e)},1e3);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){let r=this.listenerUnsubscribes.get(t);r&&(r(),this.listenerUnsubscribes.delete(t))}}rM.type="COOKIE";let rF=rM;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV extends rD{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rV.type="SESSION";let rU=rV;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new rj(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),o=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rB(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}rj.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rq{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((o,a)=>{let l=rB("",20);s.port1.start();let u=setTimeout(()=>{a(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{a(Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(e.data.response);break;default:clearTimeout(u),clearTimeout(n),a(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rz(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rG(){return void 0!==rz().WorkerGlobalScope&&"function"==typeof rz().importScripts}async function r$(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rK="firebaseLocalStorageDb",rH="firebaseLocalStorage",rW="fbase_key";class rQ{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rJ(e,t){return e.transaction([rH],t?"readwrite":"readonly").objectStore(rH)}function rY(){let e=indexedDB.open(rK,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(rH,{keyPath:rW})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(rH)?t(r):(r.close(),await function(){let e=indexedDB.deleteDatabase(rK);return new rQ(e).toPromise()}(),t(await rY()))})})}async function rX(e,t,r){let n=rJ(e,!0).put({[rW]:t,value:r});return new rQ(n).toPromise()}async function rZ(e,t){let r=rJ(e,!1).get(t),n=await new rQ(r).toPromise();return void 0===n?null:n.value}function r0(e,t){let r=rJ(e,!0).delete(t);return new rQ(r).toPromise()}class r1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await rY()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rG()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rj._getInstance(rG()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await r$(),!this.activeServiceWorker)return;this.sender=new rq(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await rY();return await rX(e,rN,"1"),await r0(e,rN),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>rX(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>rZ(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>r0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let t=rJ(e,!1).getAll();return new rQ(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;if(0!==e.length)for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}r1.type="LOCAL";let r2=r1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r4(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:start",j(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r6=eG("rcb"),r5=new P(3e4,6e4);class r9{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=rz().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return(C(t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t),e,"argument-error"),this.shouldResolveImmediately(t)&&H(rz().grecaptcha))?Promise.resolve(rz().grecaptcha):new Promise((r,n)=>{let i=rz().setTimeout(()=>{n(E(e,"network-request-failed"))},r5.get());rz()[r6]=()=>{rz().clearTimeout(i),delete rz()[r6];let s=rz().grecaptcha;if(!s||!H(s)){n(E(e,"internal-error"));return}let o=s.render;s.render=(e,t)=>{let r=o(e,t);return this.counter++,r},this.hostLanguage=t,r(s)};let s=`${eq.recaptchaV2Script}?${(0,o.querystring)({onload:r6,render:"explicit",hl:t})}`;ez(s).catch(()=>{clearTimeout(i),n(E(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=rz().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class r3{async load(e){return new e$(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r8="recaptcha",r7={theme:"light",type:"image"};class ne{constructor(e,t,r=Object.assign({},r7)){this.parameters=r,this.type=r8,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ej(e),this.isInvisible="invisible"===this.parameters.size,C("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");let n="string"==typeof t?document.getElementById(t):t;C(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new r3:new r9,this.validateStartingState()}async verify(){this.assertNotDestroyed();let e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(r=>{let n=e=>{e&&(this.tokenChangeListeners.delete(n),r(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){C(!this.parameters.sitekey,this.auth,"argument-error"),C(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),C("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){let r=rz()[e];"function"==typeof r&&r(t)}}}assertNotDestroyed(){C(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){let t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){let e;C(O()&&!rG(),this.auth,"internal-error"),await (e=null,new Promise(t=>{if("complete"===document.readyState){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);let t=await J(this.auth);C(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return C(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){let t=tm._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function nr(e,t,r){if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n=ej(e),i=await ns(n,t,(0,o.getModularInstance)(r));return new nt(i,e=>tj(n,e))}async function nn(e,t,r){let n=(0,o.getModularInstance)(e);await tF(!1,n,"phone");let i=await ns(n.auth,t,(0,o.getModularInstance)(r));return new nt(i,e=>tB(n,e))}async function ni(e,t,r){let n=(0,o.getModularInstance)(e);if((0,s._isFirebaseServerApp)(n.auth.app))return Promise.reject(S(n.auth));let i=await ns(n.auth,t,(0,o.getModularInstance)(r));return new nt(i,e=>tq(n,e))}async function ns(e,t,r){var n;if(!e._getRecaptchaConfig())try{await eZ(e)}catch(e){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"==typeof t?{phoneNumber:t}:t,"session"in i){let t=i.session;if("phoneNumber"in i){C("enroll"===t.type,e,"internal-error");let n={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===eQ){C((null==r?void 0:r.type)===r8,e,"argument-error");let n=await na(e,t,r);return rA(e,n)}return rA(e,t)},o=eX(e,n,"mfaSmsEnrollment",s,"PHONE_PROVIDER"),a=await o.catch(e=>Promise.reject(e));return a.phoneSessionInfo.sessionInfo}{C("signin"===t.type,e,"internal-error");let s=(null===(n=i.multiFactorHint)||void 0===n?void 0:n.uid)||i.multiFactorUid;C(s,e,"missing-multi-factor-info");let o={mfaPendingCredential:t.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===eQ){C((null==r?void 0:r.type)===r8,e,"argument-error");let n=await na(e,t,r);return r4(e,n)}return r4(e,t)},l=eX(e,o,"mfaSmsSignIn",a,"PHONE_PROVIDER"),u=await l.catch(e=>Promise.reject(e));return u.phoneResponseInfo.sessionInfo}}{let t={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},n=async(e,t)=>{if(t.captchaResponse===eQ){C((null==r?void 0:r.type)===r8,e,"argument-error");let n=await na(e,t,r);return tc(e,n)}return tc(e,t)},s=eX(e,t,"sendVerificationCode",n,"PHONE_PROVIDER"),o=await s.catch(e=>Promise.reject(e));return o.sessionInfo}}finally{null==r||r._reset()}}async function no(e,t){let r=(0,o.getModularInstance)(e);if((0,s._isFirebaseServerApp)(r.auth.app))return Promise.reject(S(r.auth));await tM(r,t)}async function na(e,t,r){C(r.type===r8,e,"argument-error");let n=await r.verify();C("string"==typeof n,e,"argument-error");let i=Object.assign({},t);if("phoneEnrollmentInfo"in i){let e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,r=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:n,captchaResponse:t,clientType:r,recaptchaVersion:s}}),i}if(!("phoneSignInInfo"in i))return Object.assign(i,{recaptchaToken:n}),i;{let e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,r=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:e,clientType:t,recaptchaVersion:r}}),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.providerId=nl.PROVIDER_ID,this.auth=ej(e)}verifyPhoneNumber(e,t){return ns(this.auth,e,(0,o.getModularInstance)(t))}static credential(e,t){return tm._fromVerification(e,t)}static credentialFromResult(e){return nl.credentialFromTaggedObject(e)}static credentialFromError(e){return nl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?tm._fromTokenResponse(t,r):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(e,t){return t?ew(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}nl.PROVIDER_ID="phone",nl.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends e6{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tl(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nh(e){return tU(e.auth,new nc(e),e.bypassAuthState)}function nd(e){let{auth:t,user:r}=e;return C(r,t,"internal-error"),tV(r,new nc(e),e.bypassAuthState)}async function nf(e){let{auth:t,user:r}=e;return C(r,t,"internal-error"),tM(r,new nc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:o}=e;if(s){this.reject(s);return}let a={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nh;case"linkViaPopup":case"linkViaRedirect":return nf;case"reauthViaPopup":case"reauthViaRedirect":return nd;default:_(this.auth,"internal-error")}}resolve(e){N(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){N(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nm=new P(2e3,1e4);async function ng(e,t,r){if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(E(e,"operation-not-supported-in-this-environment"));let n=ej(e);A(e,t,tw);let i=nu(n,r),o=new nw(n,"signInViaPopup",t,i);return o.executeNotNull()}async function ny(e,t,r){let n=(0,o.getModularInstance)(e);if((0,s._isFirebaseServerApp)(n.auth.app))return Promise.reject(E(n.auth,"operation-not-supported-in-this-environment"));A(n.auth,t,tw);let i=nu(n.auth,r),a=new nw(n.auth,"reauthViaPopup",t,i,n);return a.executeNotNull()}async function nv(e,t,r){let n=(0,o.getModularInstance)(e);A(n.auth,t,tw);let i=nu(n.auth,r),s=new nw(n.auth,"linkViaPopup",t,i,n);return s.executeNotNull()}class nw extends np{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,nw.currentPopupAction&&nw.currentPopupAction.cancel(),nw.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){N(1===this.filter.length,"Popup operations only handle one event");let e=rB();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(E(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(E(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nw.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(E(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nm.get())};e()}}nw.currentPopupAction=null;let nb=new Map;class nI extends np{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=nb.get(this.auth._key());if(!e){try{let t=await n_(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}nb.set(this.auth._key(),e)}return this.bypassAuthState||nb.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function n_(e,t){let r=nx(t),n=nA(e);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}async function nE(e,t){return nA(e)._set(nx(t),"true")}function nT(){nb.clear()}function nS(e,t){nb.set(e._key(),t)}function nA(e){return ew(e._redirectPersistence)}function nx(e){return e_("pendingRedirect",e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(e,t,r){return nk(e,t,r)}async function nk(e,t,r){if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n=ej(e);A(e,t,tw),await n._initializationPromise;let i=nu(n,r);return await nE(i,n),i._openRedirect(n,t,"signInViaRedirect")}function nN(e,t,r){return nD(e,t,r)}async function nD(e,t,r){let n=(0,o.getModularInstance)(e);if(A(n.auth,t,tw),(0,s._isFirebaseServerApp)(n.auth.app))return Promise.reject(S(n.auth));await n.auth._initializationPromise;let i=nu(n.auth,r);await nE(i,n.auth);let a=await nM(n);return i._openRedirect(n.auth,t,"reauthViaRedirect",a)}function nO(e,t,r){return nR(e,t,r)}async function nR(e,t,r){let n=(0,o.getModularInstance)(e);A(n.auth,t,tw),await n.auth._initializationPromise;let i=nu(n.auth,r);await tF(!1,n,t.providerId),await nE(i,n.auth);let s=await nM(n);return i._openRedirect(n.auth,t,"linkViaRedirect",s)}async function nP(e,t){return await ej(e)._initializationPromise,nL(e,t,!1)}async function nL(e,t,r=!1){if((0,s._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n=ej(e),i=nu(n,t),o=new nI(n,i,r),a=await o.execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}async function nM(e){let t=rB(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}class nF{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nU(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!nU(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(E(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(nV(e))}saveEventToCache(e){this.cachedEventUids.add(nV(e)),this.lastProcessedEventTime=Date.now()}}function nV(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function nU({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nj(e,t={}){return B(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nB=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nq=/^https?/;async function nz(e){if(e.config.emulator)return;let{authorizedDomains:t}=await nj(e);for(let e of t)try{if(function(e){let t=D(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!nq.test(r))return!1;if(nB.test(e))return n===e;let i=e.replace(/\./g,"\\."),s=RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(n)}(e))return}catch(e){}_(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nG=new P(3e4,6e4);function n$(){let e=rz().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let nK=null,nH=new P(5e3,15e3),nW={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nQ=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function nJ(e){let t=await (nK=nK||new Promise((t,r)=>{var n,i,s;function o(){n$(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{n$(),r(E(e,"network-request-failed"))},timeout:nG.get()})}if(null===(i=null===(n=rz().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=rz().gapi)||void 0===s?void 0:s.load)o();else{let t=eG("iframefcb");return rz()[t]=()=>{gapi.load?o():r(E(e,"network-request-failed"))},ez(`${eq.gapiScript}?onload=${t}`).catch(e=>r(e))}}).catch(e=>{throw nK=null,e})),r=rz().gapi;return C(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;C(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?L(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},i=nQ.get(e.config.apiHost);i&&(n.eid=i);let a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${(0,o.querystring)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nW,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=E(e,"network-request-failed"),s=rz().setTimeout(()=>{n(i)},nH.get());function o(){rz().clearTimeout(s),r(t)}t.ping(o).then(o,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nY={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class nX{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let nZ=encodeURIComponent("fac");async function n0(e,t,r,n,i,a){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:s.SDK_VERSION,eventId:i};if(t instanceof tw)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,o.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(a||{})))l[r]=n;if(t instanceof tb){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];let u=await e._getAppCheckToken(),c=u?`#${nZ}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?L(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,o.querystring)(l).slice(1)}${c}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n1="webStorageSupport",n2=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rU,this._completeRedirectFn=nL,this._overrideRedirectResult=nS}async _openPopup(e,t,r,n){var i;N(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");let s=await n0(e,t,r,D(),n);return function(e,t,r,n=500,i=600){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",u=Object.assign(Object.assign({},nY),{width:n.toString(),height:i.toString(),top:s,left:a}),c=(0,o.getUA)().toLowerCase();r&&(l=ex(c)?"_blank":r),eS(c)&&(t=t||"http://localhost",u.scrollbars="yes");let h=Object.entries(u).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,o.getUA)()){var t;return eO(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",l),new nX(null);let d=window.open(t||"",l,h);C(d,e,"popup-blocked");try{d.focus()}catch(e){}return new nX(d)}(e,s,rB())}async _openRedirect(e,t,r,n){await this._originValidation(e);let i=await n0(e,t,r,D(),n);return rz().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(N(r,"If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await nJ(e),r=new nF(e);return t.register("authEvent",t=>{C(null==t?void 0:t.authEvent,e,"invalid-auth-event");let n=r.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(n1,{type:n1},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[n1];void 0!==i&&t(!!i),_(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nz(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eP()||eA()||eO()}};class n4{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return k("unexpected MultiFactorSessionType")}}}class n6 extends n4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n6(e)}_finalizeEnroll(e,t,r){return B(e,"POST","/v2/accounts/mfaEnrollment:finalize",j(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:finalize",j(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class n5{constructor(){}static assertion(e){return n6._fromCredential(e)}}n5.FACTOR_ID="phone";class n9{static assertionForEnrollment(e,t){return n3._fromSecret(e,t)}static assertionForSignIn(e,t){return n3._fromEnrollmentId(e,t)}static async generateSecret(e){var t,r;C(void 0!==(null===(t=e.user)||void 0===t?void 0:t.auth),"internal-error");let n=await B(r=e.user.auth,"POST","/v2/accounts/mfaEnrollment:start",j(r,{idToken:e.credential,totpEnrollmentInfo:{}}));return n8._fromStartTotpMfaEnrollmentResponse(n,e.user.auth)}}n9.FACTOR_ID="totp";class n3 extends n4{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n3(t,void 0,e)}static _fromEnrollmentId(e,t){return new n3(t,e)}async _finalizeEnroll(e,t,r){return C(void 0!==this.secret,e,"argument-error"),B(e,"POST","/v2/accounts/mfaEnrollment:finalize",j(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){C(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return B(e,"POST","/v2/accounts/mfaSignIn:finalize",j(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class n8{constructor(e,t,r,n,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n8(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(n7(e)||n7(t))&&(n=!0),n&&(n7(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),n7(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function n7(e){return void 0===e||(null==e?void 0:e.length)===0}var ie="@firebase/auth",it="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let ii=(0,o.getExperimentalSetting)("authIdTokenMaxAge")||300,is=null,io=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>ii)return;let i=null==r?void 0:r.token;is!==i&&(is=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ia(e=(0,s.getApp)()){let t=(0,s._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=e0(e,{popupRedirectResolver:n2,persistence:[r2,rR,rU]}),n=(0,o.getExperimentalSetting)("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(n,location.origin);if(location.origin===e.origin){let t=io(e.toString());rg(r,t,()=>t(r.currentUser)),rm(r,e=>t(e))}}let i=(0,o.getDefaultEmulatorHost)("auth");return i&&e1(r,`http://${i}`),r}eq={loadJS:e=>new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=E("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},n="Browser",(0,s._registerComponent)(new(0,u.Component)("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eL(n)},u=new eU(r,i,s,l);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(ew);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal");n.initialize()})),(0,s._registerComponent)(new(0,u.Component)("auth-internal",e=>{let t=ej(e.getProvider("auth").getImmediate());return new ir(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(ie,it,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(n)),(0,s.registerVersion)(ie,it,"esm2017")},{"@firebase/app":"hhTEg","@firebase/util":"kdZ0V","@firebase/logger":"95325",tslib:"bGRfT","@firebase/component":"7aBr9","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],bGRfT:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"__extends",()=>s),n.export(r,"__assign",()=>o),n.export(r,"__rest",()=>a),n.export(r,"__decorate",()=>l),n.export(r,"__param",()=>u),n.export(r,"__esDecorate",()=>c),n.export(r,"__runInitializers",()=>h),n.export(r,"__propKey",()=>d),n.export(r,"__setFunctionName",()=>f),n.export(r,"__metadata",()=>p),n.export(r,"__awaiter",()=>m),n.export(r,"__generator",()=>g),n.export(r,"__createBinding",()=>y),n.export(r,"__exportStar",()=>v),n.export(r,"__values",()=>w),n.export(r,"__read",()=>b),n.export(r,"__spread",()=>I),n.export(r,"__spreadArrays",()=>_),n.export(r,"__spreadArray",()=>E),n.export(r,"__await",()=>T),n.export(r,"__asyncGenerator",()=>S),n.export(r,"__asyncDelegator",()=>A),n.export(r,"__asyncValues",()=>x),n.export(r,"__makeTemplateObject",()=>C),n.export(r,"__importStar",()=>D),n.export(r,"__importDefault",()=>O),n.export(r,"__classPrivateFieldGet",()=>R),n.export(r,"__classPrivateFieldSet",()=>P),n.export(r,"__classPrivateFieldIn",()=>L),n.export(r,"__addDisposableResource",()=>M),n.export(r,"__disposeResources",()=>V),n.export(r,"__rewriteRelativeImportExtension",()=>U);var i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function s(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function l(e,t,r,n){var i,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(s<3?i(o):s>3?i(t,r,o):i(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}function u(e,t){return function(r,n){t(r,n,e)}}function c(e,t,r,n,i,s){function o(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var a,l=n.kind,u="getter"===l?"get":"setter"===l?"set":"value",c=!t&&e?n.static?e:e.prototype:null,h=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d=!1,f=r.length-1;f>=0;f--){var p={};for(var m in n)p[m]="access"===m?{}:n[m];for(var m in n.access)p.access[m]=n.access[m];p.addInitializer=function(e){if(d)throw TypeError("Cannot add initializers after decoration has completed");s.push(o(e||null))};var g=(0,r[f])("accessor"===l?{get:h.get,set:h.set}:h[u],p);if("accessor"===l){if(void 0===g)continue;if(null===g||"object"!=typeof g)throw TypeError("Object expected");(a=o(g.get))&&(h.get=a),(a=o(g.set))&&(h.set=a),(a=o(g.init))&&i.unshift(a)}else(a=o(g))&&("field"===l?i.unshift(a):h[u]=a)}c&&Object.defineProperty(c,n.name,h),d=!0}function h(e,t,r){for(var n=arguments.length>2,i=0;i<t.length;i++)r=n?t[i].call(e,r):t[i].call(e);return n?r:void 0}function d(e){return"symbol"==typeof e?e:"".concat(e)}function f(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function p(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function m(e,t,r,n){return new(r||(r=Promise))(function(i,s){function o(e){try{l(n.next(e))}catch(e){s(e)}}function a(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(o,a)}l((n=n.apply(e,t||[])).next())})}function g(e,t){var r,n,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(l){return function(a){if(r)throw TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var y=Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function v(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||y(t,e,r)}function w(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,s=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}return o}function I(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function _(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)n[i]=s[o];return n}function E(e,t,r){if(r||2==arguments.length)for(var n,i=0,s=t.length;i<s;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function T(e){return this instanceof T?(this.v=e,this):new T(e)}function S(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),s=[];return n=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",function(e){return function(t){return Promise.resolve(t).then(e,u)}}),n[Symbol.asyncIterator]=function(){return this},n;function o(e,t){i[e]&&(n[e]=function(t){return new Promise(function(r,n){s.push([e,t,r,n])>1||a(e,t)})},t&&(n[e]=t(n[e])))}function a(e,t){try{var r;(r=i[e](t)).value instanceof T?Promise.resolve(r.value.v).then(l,u):c(s[0][2],r)}catch(e){c(s[0][3],e)}}function l(e){a("next",e)}function u(e){a("throw",e)}function c(e,t){e(t),s.shift(),s.length&&a(s[0][0],s[0][1])}}function A(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:T(e[n](t)),done:!1}:i?i(t):t}:i}}function x(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=w(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,i){(function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)})(n,i,(t=e[r](t)).done,t.value)})}}}function C(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var k=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},N=function(e){return(N=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t})(e)};function D(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r=N(e),n=0;n<r.length;n++)"default"!==r[n]&&y(t,e,r[n]);return k(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function R(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function P(e,t,r,n,i){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r}function L(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function M(e,t,r){if(null!=t){var n,i;if("object"!=typeof t&&"function"!=typeof t)throw TypeError("Object expected.");if(r){if(!Symbol.asyncDispose)throw TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose],r&&(i=n)}if("function"!=typeof n)throw TypeError("Object not disposable.");i&&(n=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var F="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function V(e){function t(t){e.error=e.hasError?new F(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}var r,n=0;return function i(){for(;r=e.stack.pop();)try{if(!r.async&&1===n)return n=0,e.stack.push(r),Promise.resolve().then(i);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return n|=2,Promise.resolve(s).then(i,function(e){return t(e),i()})}else n|=1}catch(e){t(e)}if(1===n)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}()}function U(e,t){return"string"==typeof e&&/^\.\.?\//.test(e)?e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(e,r,n,i,s){return r?t?".jsx":".js":!n||i&&s?n+i+"."+s.toLowerCase()+"js":e}):e}r.default={__extends:s,__assign:o,__rest:a,__decorate:l,__param:u,__esDecorate:c,__runInitializers:h,__propKey:d,__setFunctionName:f,__metadata:p,__awaiter:m,__generator:g,__createBinding:y,__exportStar:v,__values:w,__read:b,__spread:I,__spreadArrays:_,__spreadArray:E,__await:T,__asyncGenerator:S,__asyncDelegator:A,__asyncValues:x,__makeTemplateObject:C,__importStar:D,__importDefault:O,__classPrivateFieldGet:R,__classPrivateFieldSet:P,__classPrivateFieldIn:L,__addDisposableResource:M,__disposeResources:V,__rewriteRelativeImportExtension:U}},{"@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],"39ttL":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var i=e("@firebase/firestore");n.exportAll(i,r)},{"@firebase/firestore":"l48sn","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],l48sn:[function(e,t,r){var n,i,s,o,a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"AbstractUserDataWriter",()=>u3),a.export(r,"AggregateField",()=>l7),a.export(r,"AggregateQuerySnapshot",()=>ue),a.export(r,"Bytes",()=>ut),a.export(r,"CACHE_SIZE_UNLIMITED",()=>lH),a.export(r,"CollectionReference",()=>lM),a.export(r,"DocumentReference",()=>lL),a.export(r,"DocumentSnapshot",()=>ca),a.export(r,"FieldPath",()=>ur),a.export(r,"FieldValue",()=>ui),a.export(r,"Firestore",()=>lW),a.export(r,"FirestoreError",()=>O),a.export(r,"GeoPoint",()=>us),a.export(r,"LoadBundleTask",()=>lK),a.export(r,"PersistentCacheIndexManager",()=>c6),a.export(r,"Query",()=>lP),a.export(r,"QueryCompositeFilterConstraint",()=>uq),a.export(r,"QueryConstraint",()=>uV),a.export(r,"QueryDocumentSnapshot",()=>cu),a.export(r,"QueryEndAtConstraint",()=>uZ),a.export(r,"QueryFieldFilterConstraint",()=>uj),a.export(r,"QueryLimitConstraint",()=>uH),a.export(r,"QueryOrderByConstraint",()=>u$),a.export(r,"QuerySnapshot",()=>cc),a.export(r,"QueryStartAtConstraint",()=>uJ),a.export(r,"SnapshotMetadata",()=>co),a.export(r,"Timestamp",()=>eh),a.export(r,"Transaction",()=>cH),a.export(r,"VectorValue",()=>uo),a.export(r,"WriteBatch",()=>cG),a.export(r,"_AutoId",()=>G),a.export(r,"_ByteString",()=>tX),a.export(r,"_DatabaseId",()=>rr),a.export(r,"_DocumentKey",()=>ee),a.export(r,"_EmptyAppCheckTokenProvider",()=>q),a.export(r,"_EmptyAuthCredentialsProvider",()=>L),a.export(r,"_FieldPath",()=>Z),a.export(r,"_TestingHooks",()=>hn),a.export(r,"_cast",()=>ea),a.export(r,"_debugAssert",()=>N),a.export(r,"_internalAggregationQueryToProtoRunAggregationQueryRequest",()=>hr),a.export(r,"_internalQueryToProtoQueryTarget",()=>ht),a.export(r,"_isBase64Available",()=>tY),a.export(r,"_logWarn",()=>S),a.export(r,"_validateIsNotUsedTogether",()=>er),a.export(r,"addDoc",()=>cE),a.export(r,"aggregateFieldEqual",()=>cn),a.export(r,"aggregateQuerySnapshotEqual",()=>ci),a.export(r,"and",()=>uG),a.export(r,"arrayRemove",()=>cX),a.export(r,"arrayUnion",()=>cY),a.export(r,"average",()=>ct),a.export(r,"clearIndexedDbPersistence",()=>l2),a.export(r,"collection",()=>lF),a.export(r,"collectionGroup",()=>lV),a.export(r,"connectFirestoreEmulator",()=>lR),a.export(r,"count",()=>cr),a.export(r,"deleteAllPersistentCacheIndexes",()=>c8),a.export(r,"deleteDoc",()=>c_),a.export(r,"deleteField",()=>cQ),a.export(r,"disableNetwork",()=>l5),a.export(r,"disablePersistentCacheIndexAutoCreation",()=>c3),a.export(r,"doc",()=>lU),a.export(r,"documentId",()=>un),a.export(r,"documentSnapshotFromJSON",()=>cl),a.export(r,"enableIndexedDbPersistence",()=>lZ),a.export(r,"enableMultiTabIndexedDbPersistence",()=>l0),a.export(r,"enableNetwork",()=>l6),a.export(r,"enablePersistentCacheIndexAutoCreation",()=>c9),a.export(r,"endAt",()=>u1),a.export(r,"endBefore",()=>u0),a.export(r,"ensureFirestoreConfigured",()=>lY),a.export(r,"executeWrite",()=>cx),a.export(r,"getAggregateFromServer",()=>cN),a.export(r,"getCountFromServer",()=>ck),a.export(r,"getDoc",()=>cf),a.export(r,"getDocFromCache",()=>cm),a.export(r,"getDocFromServer",()=>cg),a.export(r,"getDocs",()=>cy),a.export(r,"getDocsFromCache",()=>cv),a.export(r,"getDocsFromServer",()=>cw),a.export(r,"getFirestore",()=>lJ),a.export(r,"getPersistentCacheIndexManager",()=>c5),a.export(r,"increment",()=>cZ),a.export(r,"initializeFirestore",()=>lQ),a.export(r,"limit",()=>uW),a.export(r,"limitToLast",()=>uQ),a.export(r,"loadBundle",()=>l3),a.export(r,"memoryEagerGarbageCollector",()=>cL),a.export(r,"memoryLocalCache",()=>cF),a.export(r,"memoryLruGarbageCollector",()=>cM),a.export(r,"namedQuery",()=>l8),a.export(r,"onSnapshot",()=>cT),a.export(r,"onSnapshotResume",()=>cS),a.export(r,"onSnapshotsInSync",()=>cA),a.export(r,"or",()=>uz),a.export(r,"orderBy",()=>uK),a.export(r,"persistentLocalCache",()=>cV),a.export(r,"persistentMultipleTabManager",()=>cq),a.export(r,"persistentSingleTabManager",()=>cB),a.export(r,"query",()=>uU),a.export(r,"queryEqual",()=>lB),a.export(r,"querySnapshotFromJSON",()=>ch),a.export(r,"refEqual",()=>lj),a.export(r,"runTransaction",()=>cW),a.export(r,"serverTimestamp",()=>cJ),a.export(r,"setDoc",()=>cb),a.export(r,"setIndexConfiguration",()=>c2),a.export(r,"setLogLevel",()=>_),a.export(r,"snapshotEqual",()=>cd),a.export(r,"startAfter",()=>uX),a.export(r,"startAt",()=>uY),a.export(r,"sum",()=>ce),a.export(r,"terminate",()=>l9),a.export(r,"updateDoc",()=>cI),a.export(r,"vector",()=>c0),a.export(r,"waitForPendingWrites",()=>l4),a.export(r,"where",()=>uB),a.export(r,"writeBatch",()=>c1);var l=e("@firebase/app"),u=e("@firebase/component"),c=e("@firebase/logger"),h=e("@firebase/util"),d=e("@firebase/webchannel-wrapper/bloom-blob"),f=e("@firebase/webchannel-wrapper/webchannel-blob"),p=e("1f357d3d806fe63b"),m=e("d0007d14bc1ab93c").Buffer;let g="@firebase/firestore",y="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}v.UNAUTHENTICATED=new v(null),v.GOOGLE_CREDENTIALS=new v("google-credentials-uid"),v.FIRST_PARTY=new v("first-party-uid"),v.MOCK_USER=new v("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let w="11.10.0",b=new c.Logger("@firebase/firestore");function I(){return b.logLevel}function _(e){b.setLogLevel(e)}function E(e,...t){if(b.logLevel<=c.LogLevel.DEBUG){let r=t.map(A);b.debug(`Firestore (${w}): ${e}`,...r)}}function T(e,...t){if(b.logLevel<=c.LogLevel.ERROR){let r=t.map(A);b.error(`Firestore (${w}): ${e}`,...r)}}function S(e,...t){if(b.logLevel<=c.LogLevel.WARN){let r=t.map(A);b.warn(`Firestore (${w}): ${e}`,...r)}}function A(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t,r){let n="Unexpected state";"string"==typeof t?n=t:r=t,C(e,n,r)}function C(e,t,r){let n=`FIRESTORE (${w}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==r)try{n+=" CONTEXT: "+JSON.stringify(r)}catch(e){n+=" CONTEXT: "+r}throw T(n),Error(n)}function k(e,t,r,n){let i="Unexpected state";"string"==typeof r?i=r:n=r,e||C(t,i,n)}function N(e,t){e||x(57014,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends h.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(v.UNAUTHENTICATED))}shutdown(){}}class M{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class F{constructor(e){this.t=e,this.currentUser=v.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){k(void 0===this.o,42304);let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new R;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new R,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new R)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(k("string"==typeof t.accessToken,31837,{l:t}),new P(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return k(null===e||"string"==typeof e,2055,{h:e}),new v(e)}}class V{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=v.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class U{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new V(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(v.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class j{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,l._isFirebaseServerApp)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){k(void 0===this.o,3512);let r=e=>{null!=e.error&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.m;return this.m=e.token,E("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?n(e):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new j(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(k("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new j(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class q{getToken(){return Promise.resolve(new j(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let n=0;n<r.length;++n)t.length<20&&r[n]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[n]%62))}return t}}function $(e,t){return e<t?-1:e>t?1:0}function K(e,t){let r=0;for(;r<e.length&&r<t.length;){let n=e.codePointAt(r),i=t.codePointAt(r);if(n!==i){if(n<128&&i<128)return $(n,i);{let s=z(),o=function(e,t){for(let r=0;r<e.length&&r<t.length;++r)if(e[r]!==t[r])return $(e[r],t[r]);return $(e.length,t.length)}(s.encode(H(e,r)),s.encode(H(t,r)));return 0!==o?o:$(n,i)}}r+=n>65535?2:1}return $(e.length,t.length)}function H(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function W(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q="__name__";class J{constructor(e,t,r){void 0===t?t=0:t>e.length&&x(637,{offset:t,range:e.length}),void 0===r?r=e.length-t:r>e.length-t&&x(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===J.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof J?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=J.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return $(e.length,t.length)}static compareSegments(e,t){let r=J.isNumericId(e),n=J.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?J.extractNumericId(e).compare(J.extractNumericId(t)):K(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return(0,d.Integer).fromString(e.substring(4,e.length-2))}}class Y extends J{construct(e,t,r){return new Y(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new O(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new Y(t)}static emptyPath(){return new Y([])}}let X=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends J{construct(e,t,r){return new Z(e,t,r)}static isValidIdentifier(e){return X.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Q}static keyField(){return new Z([Q])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new O(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new O(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new O(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new O(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Z(t)}static emptyPath(){return new Z([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Y.fromString(e))}static fromName(e){return new ee(Y.fromString(e).popFirst(5))}static empty(){return new ee(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Y.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Y(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e,t,r){if(!r)throw new O(D.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function er(e,t,r,n){if(!0===t&&!0===n)throw new O(D.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}function en(e){if(!ee.isDocumentKey(e))throw new O(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ei(e){if(ee.isDocumentKey(e))throw new O(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function es(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function eo(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":x(12329,{type:typeof e})}function ea(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new O(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=eo(e);throw new O(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}function el(e,t){if(t<=0)throw new O(D.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e,t){let r={typeString:e};return t&&(r.value=t),r}function ec(e,t){let r;if(!es(e))throw new O(D.INVALID_ARGUMENT,"JSON must be an object");for(let n in t)if(t[n]){let i=t[n].typeString,s="value"in t[n]?{value:t[n].value}:void 0;if(!(n in e)){r=`JSON missing required field: '${n}'`;break}let o=e[n];if(i&&typeof o!==i){r=`JSON field '${n}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){r=`Expected '${n}' field to equal '${s.value}'`;break}}if(r)throw new O(D.INVALID_ARGUMENT,r);return!0}class eh{static now(){return eh.fromMillis(Date.now())}static fromDate(e){return eh.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new eh(t,Math.floor((e-1e3*t)*1e6))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new O(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new O(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:eh._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ec(e,eh._jsonSchema))return new eh(e.seconds,e.nanoseconds)}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}eh._jsonSchemaVersion="firestore/timestamp/1.0",eh._jsonSchema={type:eu("string",eh._jsonSchemaVersion),seconds:eu("number"),nanoseconds:eu("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{static fromTimestamp(e){return new ed(e)}static min(){return new ed(new eh(0,0))}static max(){return new ed(new eh(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}class ef{constructor(e,t,r,n){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=n}}function ep(e){return e.fields.find(e=>2===e.kind)}function em(e){return e.fields.filter(e=>2!==e.kind)}function eg(e,t){let r=$(e.collectionGroup,t.collectionGroup);if(0!==r)return r;for(let n=0;n<Math.min(e.fields.length,t.fields.length);++n)if(0!==(r=function(e,t){let r=Z.comparator(e.fieldPath,t.fieldPath);return 0!==r?r:$(e.kind,t.kind)}(e.fields[n],t.fields[n])))return r;return $(e.fields.length,t.fields.length)}ef.UNKNOWN_ID=-1;class ey{constructor(e,t){this.fieldPath=e,this.kind=t}}class ev{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ev(0,eI.min())}}function ew(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=ed.fromTimestamp(1e9===n?new eh(r+1,0):new eh(r,n));return new eI(i,ee.empty(),t)}function eb(e){return new eI(e.readTime,e.key,-1)}class eI{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new eI(ed.min(),ee.empty(),-1)}static max(){return new eI(ed.max(),ee.empty(),-1)}}function e_(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=ee.comparator(e.documentKey,t.documentKey))?r:$(e.largestBatchId,t.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(e){if(e.code!==D.FAILED_PRECONDITION||e.message!==eE)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new eA((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof eA?t:eA.resolve(t)}catch(e){return eA.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):eA.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):eA.reject(t)}static resolve(e){return new eA((t,r)=>{t(e)})}static reject(e){return new eA((t,r)=>{r(e)})}static waitFor(e){return new eA((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=eA.resolve(!1);for(let r of e)t=t.next(e=>e?eA.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new eA((r,n)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new eA((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ex="SimpleDb";class eC{static open(e,t,r,n){try{return new eC(t,e.transaction(n,r))}catch(e){throw new eO(t,e)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new R,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new eO(e,t.error)):this.S.resolve()},this.transaction.onerror=t=>{let r=eF(t.target.error);this.S.reject(new eO(e,r))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(E(ex,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){let t=this.transaction.objectStore(e);return new eP(t)}}class ek{static delete(e){return E(ex,"Removing database:",e),eL((0,h.getGlobal)().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!(0,h.isIndexedDBAvailable)())return!1;if(ek.F())return!0;let e=(0,h.getUA)(),t=ek.M(e),r=eN(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<r&&r<4.5)}static F(){var e;return void 0!==p&&"YES"===(null===(e=p.__PRIVATE_env)||void 0===e?void 0:e.O)}static N(e,t){return e.store(t)}static M(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,12.2===ek.M((0,h.getUA)())&&T("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(E(ex,"Opening database:",this.name),this.db=await new Promise((t,r)=>{let n=indexedDB.open(this.name,this.version);n.onsuccess=e=>{let r=e.target.result;t(r)},n.onblocked=()=>{r(new eO(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},n.onerror=t=>{let n=t.target.error;"VersionError"===n.name?r(new O(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===n.name?r(new O(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+n)):r(new eO(e,n))},n.onupgradeneeded=e=>{E(ex,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;if(null!==this.L&&this.L!==e.oldVersion)throw Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${e.oldVersion}, event.newVersion=${e.newVersion}, db.version=${t.version}`);this.B.q(t,n.transaction,e.oldVersion,this.version).next(()=>{E(ex,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",e=>{let t=e.target;this.L=t.version},{passive:!0})),this.db.addEventListener("versionchange",e=>{var t;null===e.newVersion&&(S('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),null===(t=this.databaseDeletedListener)||void 0===t||t.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,n){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.k(e);let t=eC.open(this.db,e,i?"readonly":"readwrite",r),s=n(t).next(e=>(t.v(),e)).catch(e=>(t.abort(e),eA.reject(e))).toPromise();return s.catch(()=>{}),await t.D,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(E(ex,"Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function eN(e){let t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}class eD{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return eL(this.$.delete())}}class eO extends O{constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function eR(e){return"IndexedDbTransactionError"===e.name}class eP{constructor(e){this.store=e}put(e,t){let r;return void 0!==t?(E(ex,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(E(ex,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),eL(r)}add(e){return E(ex,"ADD",this.store.name,e,e),eL(this.store.add(e))}get(e){return eL(this.store.get(e)).next(t=>(void 0===t&&(t=null),E(ex,"GET",this.store.name,e,t),t))}delete(e){return E(ex,"DELETE",this.store.name,e),eL(this.store.delete(e))}count(){return E(ex,"COUNT",this.store.name),eL(this.store.count())}j(e,t){let r=this.options(e,t),n=r.index?this.store.index(r.index):this.store;if("function"==typeof n.getAll){let e=n.getAll(r.range);return new eA((t,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(r),t=[];return this.J(e,(e,r)=>{t.push(r)}).next(()=>t)}}H(e,t){let r=this.store.getAll(e,null===t?void 0:t);return new eA((e,t)=>{r.onerror=e=>{t(e.target.error)},r.onsuccess=t=>{e(t.target.result)}})}Y(e,t){E(ex,"DELETE ALL",this.store.name);let r=this.options(e,t);r.Z=!1;let n=this.cursor(r);return this.J(n,(e,t,r)=>r.delete())}X(e,t){let r;t?r=e:(r={},t=e);let n=this.cursor(r);return this.J(n,t)}ee(e){let t=this.cursor({});return new eA((r,n)=>{t.onerror=e=>{let t=eF(e.target.error);n(t)},t.onsuccess=t=>{let n=t.target.result;n?e(n.primaryKey,n.value).next(e=>{e?n.continue():r()}):r()}})}J(e,t){let r=[];return new eA((n,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void n();let s=new eD(i),o=t(i.primaryKey,i.value,s);if(o instanceof eA){let e=o.catch(e=>(s.done(),eA.reject(e)));r.push(e)}s.isDone?n():null===s.W?i.continue():i.continue(s.W)}}).next(()=>eA.waitFor(r))}options(e,t){let r;return void 0!==e&&("string"==typeof e?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function eL(e){return new eA((t,r)=>{e.onsuccess=e=>{let r=e.target.result;t(r)},e.onerror=e=>{let t=eF(e.target.error);r(t)}})}let eM=!1;function eF(e){let t=ek.M((0,h.getUA)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eM||(eM=!0,setTimeout(()=>{throw e},0)),e}}return e}let eV="IndexBackfiller";class eU{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}ne(e){E(eV,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{let e=await this.te.re();E(eV,`Documents written: ${e}`)}catch(e){eR(e)?E(eV,"Ignoring IndexedDB error during index backfill: ",e):await eS(e)}await this.ne(6e4)})}}class ej{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){let r=new Set,n=t,i=!0;return eA.doWhile(()=>!0===i&&n>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!r.has(t))return E(eV,`Processing collection: ${t}`),this.se(e,t,n).next(e=>{n-=e,r.add(t)});i=!1})).next(()=>t-n)}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(n=>this.localStore.localDocuments.getNextDocuments(e,t,n,r).next(r=>{let i=r.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.oe(n,r)).next(r=>(E(eV,`Updating offset: ${r}`),this.localStore.indexManager.updateCollectionGroup(e,t,r))).next(()=>i.size)}))}oe(e,t){let r=e;return t.changes.forEach((e,t)=>{let n=eb(t);e_(n,r)>0&&(r=n)}),new eI(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this._e(e),this.ae=e=>t.writeSequenceNumber(e))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ae&&this.ae(e),e}}function eq(e){return null==e}function ez(e){return 0===e&&1/e==-1/0}function eG(e){return"number"==typeof e&&Number.isInteger(e)&&!ez(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}function e$(e){var t,r;let n="";for(let t=0;t<e.length;t++)n.length>0&&(n+="\x01\x01"),n=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\x00":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(t),n);return n+"\x01\x01"}function eK(e){let t=e.length;if(k(t>=2,64408,{path:e}),2===t)return k("\x01"===e.charAt(0)&&"\x01"===e.charAt(1),56145,{path:e}),Y.emptyPath();let r=t-2,n=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>r)&&x(50515,{path:e}),e.charAt(t+1)){case"\x01":let o;let a=e.substring(s,t);0===i.length?o=a:(i+=a,o=i,i=""),n.push(o);break;case"\x10":i+=e.substring(s,t)+"\x00";break;case"\x11":i+=e.substring(s,t+1);break;default:x(61167,{path:e})}s=t+2}return new Y(n)}eB.ue=-1;/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eH="remoteDocuments",eW="owner",eQ="owner",eJ="mutationQueues",eY="mutations",eX="batchId",eZ="userMutationsIndex",e0=["userId","batchId"],e1={},e2="documentMutations",e4="remoteDocumentsV14",e6=["prefixPath","collectionGroup","readTime","documentId"],e5="documentKeyIndex",e9=["prefixPath","collectionGroup","documentId"],e3="collectionGroupIndex",e8=["collectionGroup","readTime","prefixPath","documentId"],e7="remoteDocumentGlobal",te="remoteDocumentGlobalKey",tt="targets",tr="queryTargetsIndex",tn=["canonicalId","targetId"],ti="targetDocuments",ts=["targetId","path"],to="documentTargetsIndex",ta=["path","targetId"],tl="targetGlobalKey",tu="targetGlobal",tc="collectionParents",th=["collectionId","parent"],td="clientMetadata",tf="bundles",tp="namedQueries",tm="indexConfiguration",tg="collectionGroupIndex",ty="indexState",tv=["indexId","uid"],tw="sequenceNumberIndex",tb=["uid","sequenceNumber"],tI="indexEntries",t_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],tE="documentKeyIndex",tT=["indexId","uid","orderedDocumentKey"],tS="documentOverlays",tA=["userId","collectionPath","documentId"],tx="collectionPathOverlayIndex",tC=["userId","collectionPath","largestBatchId"],tk="collectionGroupOverlayIndex",tN=["userId","collectionGroup","largestBatchId"],tD="globals",tO=[eJ,eY,e2,eH,tt,eW,tu,ti,td,e7,tc,tf,tp],tR=[...tO,tS],tP=[eJ,eY,e2,e4,tt,eW,tu,ti,td,e7,tc,tf,tp,tS],tL=[...tP,tm,ty,tI],tM=[...tL,tD];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF extends eT{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function tV(e,t){return ek.N(e.ce,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tU(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function tj(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function tB(e,t){let r=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.push(t(e[n],n,e));return r}function tq(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tz{constructor(e,t){this.comparator=e,this.root=t||t$.EMPTY}insert(e,t){return new tz(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,t$.BLACK,null,null))}remove(e){return new tz(this.comparator,this.root.remove(e,this.comparator).copy(null,null,t$.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tG(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tG(this.root,e,this.comparator,!1)}getReverseIterator(){return new tG(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tG(this.root,e,this.comparator,!0)}}class tG{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class t${constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:t$.RED,this.left=null!=n?n:t$.EMPTY,this.right=null!=i?i:t$.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new t$(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return t$.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return t$.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,t$.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,t$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}t$.EMPTY=null,t$.RED=!0,t$.BLACK=!1,t$.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,r,n,i){return this}insert(e,t,r){return new t$(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tK{constructor(e){this.comparator=e,this.data=new tz(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tH(this.data.getIterator())}getIteratorFrom(e){return new tH(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof tK)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new tK(this.comparator);return t.data=e,t}}class tH{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function tW(e){return e.hasNext()?e.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tQ{constructor(e){this.fields=e,e.sort(Z.comparator)}static empty(){return new tQ([])}unionWith(e){let t=new tK(Z.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new tQ(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return W(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tJ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tY(){return"undefined"!=typeof atob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tX{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new tJ("Invalid base64 string: "+e):e}}(e);return new tX(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new tX(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tX.EMPTY_BYTE_STRING=new tX("");let tZ=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function t0(e){if(k(!!e,39018),"string"==typeof e){let t=0,r=tZ.exec(e);if(k(!!r,46558,{timestamp:e}),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:t1(e.seconds),nanos:t1(e.nanos)}}function t1(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function t2(e){return"string"==typeof e?tX.fromBase64String(e):tX.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t4="server_timestamp",t6="__type__",t5="__previous_value__",t9="__local_write_time__";function t3(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[t6])||void 0===r?void 0:r.stringValue)===t4}function t8(e){let t=e.mapValue.fields[t5];return t3(t)?t8(t):t}function t7(e){let t=t0(e.mapValue.fields[t9].timestampValue);return new eh(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,r,n,i,s,o,a,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l,this.isUsingEmulator=u}}let rt="(default)";class rr{constructor(e,t){this.projectId=e,this.database=t||rt}static empty(){return new rr("","")}get isDefaultDatabase(){return this.database===rt}isEqual(e){return e instanceof rr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn="__type__",ri="__max__",rs={mapValue:{fields:{__type__:{stringValue:ri}}}},ro="__vector__",ra="value",rl={nullValue:"NULL_VALUE"};function ru(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?t3(e)?4:rT(e)?9007199254740991:r_(e)?10:11:x(28295,{value:e})}function rc(e,t){if(e===t)return!0;let r=ru(e);if(r!==ru(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return t7(e).isEqual(t7(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=t0(e.timestampValue),n=t0(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return t2(e.bytesValue).isEqual(t2(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return t1(e.geoPointValue.latitude)===t1(t.geoPointValue.latitude)&&t1(e.geoPointValue.longitude)===t1(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return t1(e.integerValue)===t1(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=t1(e.doubleValue),n=t1(t.doubleValue);return r===n?ez(r)===ez(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return W(e.arrayValue.values||[],t.arrayValue.values||[],rc);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(tU(r)!==tU(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!rc(r[e],n[e])))return!1;return!0}(e,t);default:return x(52216,{left:e})}}function rh(e,t){return void 0!==(e.values||[]).find(e=>rc(e,t))}function rd(e,t){if(e===t)return 0;let r=ru(e),n=ru(t);if(r!==n)return $(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return $(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=t1(e.integerValue||e.doubleValue),n=t1(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return rf(e.timestampValue,t.timestampValue);case 4:return rf(t7(e),t7(t));case 5:return K(e.stringValue,t.stringValue);case 6:return function(e,t){let r=t2(e),n=t2(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=$(r[e],n[e]);if(0!==t)return t}return $(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=$(t1(e.latitude),t1(t.latitude));return 0!==r?r:$(t1(e.longitude),t1(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return rp(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,i,s;let o=e.fields||{},a=t.fields||{},l=null===(r=o[ra])||void 0===r?void 0:r.arrayValue,u=null===(n=a[ra])||void 0===n?void 0:n.arrayValue,c=$((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==c?c:rp(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===rs.mapValue&&t===rs.mapValue)return 0;if(e===rs.mapValue)return 1;if(t===rs.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=K(n[e],s[e]);if(0!==t)return t;let o=rd(r[n[e]],i[s[e]]);if(0!==o)return o}return $(n.length,s.length)}(e.mapValue,t.mapValue);default:throw x(23264,{le:r})}}function rf(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return $(e,t);let r=t0(e),n=t0(t),i=$(r.seconds,n.seconds);return 0!==i?i:$(r.nanos,n.nanos)}function rp(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=rd(r[e],n[e]);if(t)return t}return $(r.length,n.length)}function rm(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=t0(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?t2(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,ee.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=rm(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${rm(e.fields[i])}`;return r+"}"}(e.mapValue):x(61005,{value:e})}function rg(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ry(e){return!!e&&"integerValue"in e}function rv(e){return!!e&&"arrayValue"in e}function rw(e){return!!e&&"nullValue"in e}function rb(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rI(e){return!!e&&"mapValue"in e}function r_(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[rn])||void 0===r?void 0:r.stringValue)===ro}function rE(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return tj(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=rE(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=rE(e.arrayValue.values[r]);return t}return Object.assign({},e)}function rT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===ri}let rS={mapValue:{fields:{[rn]:{stringValue:ro},[ra]:{arrayValue:{}}}}};function rA(e,t){let r=rd(e.value,t.value);return 0!==r?r:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function rx(e,t){let r=rd(e.value,t.value);return 0!==r?r:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.value=e}static empty(){return new rC({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!rI(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rE(t)}setAll(e){let t=Z.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=rE(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());rI(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];rI(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(tj(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new rC(rE(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,t,r,n,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new rk(e,0,ed.min(),ed.min(),ed.min(),rC.empty(),0)}static newFoundDocument(e,t,r,n){return new rk(e,1,t,ed.min(),r,n,0)}static newNoDocument(e,t){return new rk(e,2,t,ed.min(),ed.min(),rC.empty(),0)}static newUnknownDocument(e,t){return new rk(e,3,t,ed.min(),ed.min(),rC.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(ed.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rC.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rC.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ed.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rk&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rk(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,t){this.position=e,this.inclusive=t}}function rD(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(n=s.field.isKeyField()?ee.comparator(ee.fromName(o.referenceValue),r.key):rd(o,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function rO(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!rc(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{}class rL extends rP{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new rq(e,t,r):"array-contains"===t?new rK(e,r):"in"===t?new rH(e,r):"not-in"===t?new rW(e,r):"array-contains-any"===t?new rQ(e,r):new rL(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new rz(e,r):new rG(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(rd(t,this.value)):null!==t&&ru(this.value)===ru(t)&&this.matchesComparison(rd(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rM extends rP{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new rM(e,t)}matches(e){return rF(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.he||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function rF(e){return"and"===e.op}function rV(e){return"or"===e.op}function rU(e){return rj(e)&&rF(e)}function rj(e){for(let t of e.filters)if(t instanceof rM)return!1;return!0}function rB(e,t){let r=e.filters.concat(t);return rM.create(r,e.op)}class rq extends rL{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){let t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class rz extends rL{constructor(e,t){super(e,"in",t),this.keys=r$("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rG extends rL{constructor(e,t){super(e,"not-in",t),this.keys=r$("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function r$(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>ee.fromName(e.referenceValue))}class rK extends rL{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rv(t)&&rh(t.arrayValue,this.value)}}class rH extends rL{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rh(this.value.arrayValue,t)}}class rW extends rL{constructor(e,t){super(e,"not-in",t)}matches(e){if(rh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!rh(this.value.arrayValue,t)}}class rQ extends rL{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rv(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rh(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rJ{constructor(e,t=null,r=[],n=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=o,this.Pe=null}}function rY(e,t=null,r=[],n=[],i=null,s=null,o=null){return new rJ(e,t,r,n,i,s,o)}function rX(e){if(null===e.Pe){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof rL)return t.field.canonicalString()+t.op.toString()+rm(t.value);if(rU(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),eq(e.limit)||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>rm(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>rm(e)).join(",")),e.Pe=t}return e.Pe}function rZ(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof rL?r instanceof rL&&t.op===r.op&&t.field.isEqual(r.field)&&rc(t.value,r.value):t instanceof rM?r instanceof rM&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void x(19439)}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rO(e.startAt,t.startAt)&&rO(e.endAt,t.endAt)}function r0(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function r1(e,t){return e.filters.filter(e=>e instanceof rL&&e.field.isEqual(t))}function r2(e,t,r){let n=rl,i=!0;for(let r of r1(e,t)){let e=rl,t=!0;switch(r.op){case"<":case"<=":var s;e="nullValue"in(s=r.value)?rl:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?rg(rr.empty(),ee.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?r_(s)?rS:{mapValue:{}}:x(35942,{value:s});break;case"==":case"in":case">=":e=r.value;break;case">":e=r.value,t=!1;break;case"!=":case"not-in":e=rl}0>rA({value:n,inclusive:i},{value:e,inclusive:t})&&(n=e,i=t)}if(null!==r){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=r.position[s];0>rA({value:n,inclusive:i},{value:e,inclusive:r.inclusive})&&(n=e,i=r.inclusive);break}}return{value:n,inclusive:i}}function r4(e,t,r){let n=rs,i=!0;for(let r of r1(e,t)){let e=rs,t=!0;switch(r.op){case">=":case">":var s;e="nullValue"in(s=r.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?rg(rr.empty(),ee.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?rS:"mapValue"in s?r_(s)?{mapValue:{}}:rs:x(61959,{value:s}),t=!1;break;case"==":case"in":case"<=":e=r.value;break;case"<":e=r.value,t=!1;break;case"!=":case"not-in":e=rs}rx({value:n,inclusive:i},{value:e,inclusive:t})>0&&(n=e,i=t)}if(null!==r){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=r.position[s];rx({value:n,inclusive:i},{value:e,inclusive:r.inclusive})>0&&(n=e,i=r.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e,t=null,r=[],n=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function r5(e){return new r6(e)}function r9(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function r3(e){return null!==e.collectionGroup}function r8(e){if(null===e.Te){let t;e.Te=[];let r=new Set;for(let t of e.explicitOrderBy)e.Te.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=(t=new tK(Z.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t);i.forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.Te.push(new rR(t,n))}),r.has(Z.keyField().canonicalString())||e.Te.push(new rR(Z.keyField(),n))}return e.Te}function r7(e){return e.Ie||(e.Ie=nt(e,r8(e))),e.Ie}function ne(e){return e.de||(e.de=nt(e,e.explicitOrderBy)),e.de}function nt(e,t){if("F"===e.limitType)return rY(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new rR(e.field,t)});let r=e.endAt?new rN(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new rN(e.startAt.position,e.startAt.inclusive):null;return rY(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}function nr(e,t){let r=e.filters.concat([t]);return new r6(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function nn(e,t,r){return new r6(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function ni(e,t){return rZ(r7(e),r7(t))&&e.limitType===t.limitType}function ns(e){return`${rX(r7(e))}|lt:${e.limitType}`}function no(e){var t;let r;return`Query(target=${r=(t=r7(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof rL?`${t.field.canonicalString()} ${t.op} ${rm(t.value)}`:t instanceof rM?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),eq(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>rm(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>rm(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function na(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):ee.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of r8(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=rD(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,r8(e),t))&&(!e.endAt||!!function(e,t,r){let n=rD(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,r8(e),t))}function nl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function nu(e){return(t,r)=>{let n=!1;for(let i of r8(e)){let e=function(e,t,r){let n=e.field.isKeyField()?ee.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?rd(n,i):x(42886)}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return x(19790,{direction:e.dir})}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){tj(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return tq(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nh=new tz(ee.comparator),nd=new tz(ee.comparator);function nf(...e){let t=nd;for(let r of e)t=t.insert(r.key,r);return t}function np(e){let t=nd;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function nm(){return new nc(e=>e.toString(),(e,t)=>e.isEqual(t))}let ng=new tz(ee.comparator),ny=new tK(ee.comparator);function nv(...e){let t=ny;for(let r of e)t=t.add(r);return t}let nw=new tK($);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ez(t)?"-0":t}}function nI(e){return{integerValue:""+e}}function n_(e,t){return eG(t)?nI(t):nb(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this._=void 0}}function nT(e,t){return e instanceof nN?ry(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class nS extends nE{}class nA extends nE{constructor(e){super(),this.elements=e}}function nx(e,t){let r=nO(t);for(let t of e.elements)r.some(e=>rc(e,t))||r.push(t);return{arrayValue:{values:r}}}class nC extends nE{constructor(e){super(),this.elements=e}}function nk(e,t){let r=nO(t);for(let t of e.elements)r=r.filter(e=>!rc(e,t));return{arrayValue:{values:r}}}class nN extends nE{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function nD(e){return t1(e.integerValue||e.doubleValue)}function nO(e){return rv(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t){this.field=e,this.transform=t}}class nP{constructor(e,t){this.version=e,this.transformResults=t}}class nL{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nL}static exists(e){return new nL(void 0,e)}static updateTime(e){return new nL(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nM(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nF{}function nV(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nK(e.key,nL.none()):new nB(e.key,e.data,nL.none());{let r=e.data,n=rC.empty(),i=new tK(Z.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new nq(e.key,n,new tQ(i.toArray()),nL.none())}}function nU(e,t,r,n){return e instanceof nB?function(e,t,r,n){if(!nM(e.precondition,t))return r;let i=e.value.clone(),s=n$(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof nq?function(e,t,r,n){if(!nM(e.precondition,t))return r;let i=n$(e.fieldTransforms,n,t),s=t.data;return(s.setAll(nz(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):nM(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function nj(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&W(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof nA&&n instanceof nA||r instanceof nC&&n instanceof nC?W(r.elements,n.elements,rc):r instanceof nN&&n instanceof nN?rc(r.Ee,n.Ee):r instanceof nS&&n instanceof nS)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nB extends nF{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class nq extends nF{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nz(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function nG(e,t,r){let n=new Map;k(e.length===r.length,32656,{Ae:r.length,Re:e.length});for(let s=0;s<r.length;s++){var i;let o=e[s],a=o.transform,l=t.data.field(o.field);n.set(o.field,(i=r[s],a instanceof nA?nx(a,l):a instanceof nC?nk(a,l):i))}return n}function n$(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof nS?function(e,t){let r={fields:{[t6]:{stringValue:t4},[t9]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&t3(t)&&(t=t8(t)),t&&(r.fields[t5]=t),{mapValue:r}}(t,s):e instanceof nA?nx(e,s):e instanceof nC?nk(e,s):function(e,t){let r=nT(e,t),n=nD(r)+nD(e.Ee);return ry(r)&&ry(e.Ee)?nI(n):nb(e.serializer,n)}(e,s))}return n}class nK extends nF{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nH extends nF{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nW{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof nB?function(e,t,r){let n=e.value.clone(),i=nG(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof nq?function(e,t,r){if(!nM(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=nG(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(nz(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=nU(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=nU(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=nm();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields);o=t.has(n.key)?null:o;let a=nV(s,o);null!==a&&r.set(n.key,a),s.isValidDocument()||s.convertToNoDocument(ed.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nv())}isEqual(e){return this.batchId===e.batchId&&W(this.mutations,e.mutations,(e,t)=>nj(e,t))&&W(this.baseMutations,e.baseMutations,(e,t)=>nj(e,t))}}class nQ{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){k(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let n=ng,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new nQ(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nY{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{constructor(e,t){this.count=e,this.unchangedNames=t}}function nZ(e){switch(e){case D.OK:return x(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return x(15467,{code:e})}}function n0(e){if(void 0===e)return T("GRPC error has no .code"),D.UNKNOWN;switch(e){case n.OK:return D.OK;case n.CANCELLED:return D.CANCELLED;case n.UNKNOWN:return D.UNKNOWN;case n.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case n.INTERNAL:return D.INTERNAL;case n.UNAVAILABLE:return D.UNAVAILABLE;case n.UNAUTHENTICATED:return D.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case n.NOT_FOUND:return D.NOT_FOUND;case n.ALREADY_EXISTS:return D.ALREADY_EXISTS;case n.PERMISSION_DENIED:return D.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case n.ABORTED:return D.ABORTED;case n.OUT_OF_RANGE:return D.OUT_OF_RANGE;case n.UNIMPLEMENTED:return D.UNIMPLEMENTED;case n.DATA_LOSS:return D.DATA_LOSS;default:return x(39323,{code:e})}}(i=n||(n={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n1=null,n2=new d.Integer([4294967295,4294967295],0);function n4(e){let t=z().encode(e),r=new d.Md5;return r.update(t),new Uint8Array(r.digest())}function n6(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new d.Integer([r,n],0),new d.Integer([i,s],0)]}class n5{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new n9(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new n9(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new n9(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=(0,d.Integer).fromNumber(this.fe)}pe(e,t,r){let n=e.add(t.multiply((0,d.Integer).fromNumber(r)));return 1===n.compare(n2)&&(n=new d.Integer([n.getBits(0),n.getBits(1)],0)),n.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.fe)return!1;let t=n4(e),[r,n]=n6(t);for(let e=0;e<this.hashCount;e++){let t=this.pe(r,n,e);if(!this.ye(t))return!1}return!0}static create(e,t,r){let n=new Uint8Array(Math.ceil(e/8)),i=new n5(n,e%8==0?0:8-e%8,t);return r.forEach(e=>i.insert(e)),i}insert(e){if(0===this.fe)return;let t=n4(e),[r,n]=n6(t);for(let e=0;e<this.hashCount;e++){let t=this.pe(r,n,e);this.we(t)}}we(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class n9 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,n8.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n3(ed.min(),n,new tz($),nh,nv())}}class n8{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n8(r,t,nv(),nv(),nv())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(e,t,r,n){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=n}}class ie{constructor(e,t){this.targetId=e,this.De=t}}class it{constructor(e,t,r=tX.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class ir{constructor(){this.ve=0,this.Ce=io(),this.Fe=tX.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return 0!==this.ve}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=nv(),t=nv(),r=nv();return this.Ce.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:x(38017,{changeType:i})}}),new n8(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=io()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,k(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ii{constructor(e){this.We=e,this.Ge=new Map,this.ze=nh,this.je=is(),this.Je=is(),this.He=new tz($)}Ye(e){for(let t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(let t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{let r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:x(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((e,r)=>{this.nt(r)&&t(r)})}it(e){let t=e.targetId,r=e.De.count,n=this.st(t);if(n){let i=n.target;if(r0(i)){if(0===r){let e=new ee(i.path);this.Xe(t,e,rk.newNoDocument(e,ed.min()))}else k(1===r,20013,{expectedCount:r})}else{let n=this.ot(t);if(n!==r){let r=this._t(e),i=r?this.ut(r,e,n):1;0!==i&&(this.rt(t),this.He=this.He.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch")),null==n1||n1.ct(function(e,t,r,n,i){var s,o,a,l,u,c;let h={localCacheCount:e,existenceFilterCount:t.count,databaseId:r.database,projectId:r.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(l=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==l?l:0,padding:null!==(c=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==c?c:0,mightContain:e=>{var t;return null!==(t=null==n?void 0:n.mightContain(e))&&void 0!==t&&t}}),h}(n,e.De,this.We.lt(),r,i))}}}}_t(e){let t,r;let n=e.De.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;try{t=t2(i).toUint8Array()}catch(e){if(e instanceof tJ)return S("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new n5(t,s,o)}catch(e){return S(e instanceof n9?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.fe?null:r}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){let r=this.We.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.We.lt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.Xe(t,r,null),n++)}),n}Pt(e){let t=new Map;this.Ge.forEach((r,n)=>{let i=this.st(n);if(i){if(r.current&&r0(i.target)){let t=new ee(i.target.path);this.Tt(t).has(n)||this.It(n,t)||this.Xe(n,t,rk.newNoDocument(t,e))}r.Ne&&(t.set(n,r.Le()),r.ke())}});let r=nv();this.Je.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.st(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.ze.forEach((t,r)=>r.setReadTime(e));let n=new n3(e,t,this.He,this.ze,r);return this.ze=nh,this.je=is(),this.Je=is(),this.He=new tz($),n}Ze(e,t){if(!this.nt(e))return;let r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;let n=this.tt(e);this.It(e,t)?n.qe(t,1):n.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){let t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new ir,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new tK($),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new tK($),this.je=this.je.insert(e,t)),t}nt(e){let t=null!==this.st(e);return t||E("WatchChangeAggregator","Detected inactive target",e),t}st(e){let t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new ir),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function is(){return new tz(ee.comparator)}function io(){return new tz(ee.comparator)}let ia={asc:"ASCENDING",desc:"DESCENDING"},il={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iu={and:"AND",or:"OR"};class ic{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ih(e,t){return e.useProto3Json||eq(t)?t:{value:t}}function id(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ip(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function im(e){return k(!!e,49232),ed.fromTimestamp(function(e){let t=t0(e);return new eh(t.seconds,t.nanos)}(e))}function ig(e,t){return iy(e,t).canonicalString()}function iy(e,t){let r=new Y(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function iv(e){let t=Y.fromString(e);return k(iL(t),10190,{key:t.toString()}),t}function iw(e,t){return ig(e.databaseId,t.path)}function ib(e,t){let r=iv(t);if(r.get(1)!==e.databaseId.projectId)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new O(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new ee(iT(r))}function iI(e,t){return ig(e.databaseId,t)}function i_(e){let t=iv(e);return 4===t.length?Y.emptyPath():iT(t)}function iE(e){return new Y(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iT(e){return k(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function iS(e,t,r){return{name:iw(e,t),fields:r.value.mapValue.fields}}function iA(e,t,r){let n=ib(e,t.name),i=im(t.updateTime),s=t.createTime?im(t.createTime):ed.min(),o=new rC({mapValue:{fields:t.fields}}),a=rk.newFoundDocument(n,i,s,o);return r&&a.setHasCommittedMutations(),r?a.setHasCommittedMutations():a}function ix(e,t){var r;let n;if(t instanceof nB)n={update:iS(e,t.key,t.value)};else if(t instanceof nK)n={delete:iw(e,t.key)};else if(t instanceof nq)n={update:iS(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nH))return x(16599,{Rt:t.type});n={verify:iw(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof nS)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof nA)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof nC)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof nN)return{fieldPath:t.field.canonicalString(),increment:r.Ee};throw x(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:id(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:x(27497)),n}function iC(e,t){var r;let n=t.currentDocument?void 0!==(r=t.currentDocument).updateTime?nL.updateTime(im(r.updateTime)):void 0!==r.exists?nL.exists(r.exists):nL.none():nL.none(),i=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let r=null;if("setToServerValue"in t)k("REQUEST_TIME"===t.setToServerValue,16630,{proto:t}),r=new nS;else if("appendMissingElements"in t){let e=t.appendMissingElements.values||[];r=new nA(e)}else if("removeAllFromArray"in t){let e=t.removeAllFromArray.values||[];r=new nC(e)}else"increment"in t?r=new nN(e,t.increment):x(16584,{proto:t});let n=Z.fromServerFormat(t.fieldPath);return new nR(n,r)})(e,t)):[];if(t.update){t.update.name;let r=ib(e,t.update.name),s=new rC({mapValue:{fields:t.update.fields}});if(t.updateMask){let e=function(e){let t=e.fieldPaths||[];return new tQ(t.map(e=>Z.fromServerFormat(e)))}(t.updateMask);return new nq(r,s,e,n,i)}return new nB(r,s,n,i)}if(t.delete){let r=ib(e,t.delete);return new nK(r,n)}if(t.verify){let r=ib(e,t.verify);return new nH(r,n)}return x(1463,{proto:t})}function ik(e,t){return{documents:[iI(e,t.path)]}}function iN(e,t){var r,n;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=iI(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof rL?function(e){if("=="===e.op){if(rb(e.value))return{unaryFilter:{field:iR(e.field),op:"IS_NAN"}};if(rw(e.value))return{unaryFilter:{field:iR(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rb(e.value))return{unaryFilter:{field:iR(e.field),op:"IS_NOT_NAN"}};if(rw(e.value))return{unaryFilter:{field:iR(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:iR(e.field),op:il[e.op],value:e.value}}}(t):t instanceof rM?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:iu[t.op],filters:r}}}(t):x(54877,{filter:t})}(rM.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:iR(e.field),direction:ia[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=ih(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{Vt:s,parent:i}}function iD(e,t,r,n){let{Vt:i,parent:s}=iN(e,t),o={},a=[],l=0;return r.forEach(e=>{let t=n?e.alias:"aggregate_"+l++;o[t]=e.alias,"count"===e.aggregateType?a.push({alias:t,count:{}}):"avg"===e.aggregateType?a.push({alias:t,avg:{field:iR(e.fieldPath)}}):"sum"===e.aggregateType&&a.push({alias:t,sum:{field:iR(e.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ft:o,parent:s}}function iO(e){var t;let r,n=i_(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){k(1===s,65062);let e=i.from[0];e.allDescendants?o=e.collectionId:n=n.child(e.collectionId)}let a=[];i.where&&(a=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=iP(e.unaryFilter.field);return rL.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=iP(e.unaryFilter.field);return rL.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=iP(e.unaryFilter.field);return rL.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=iP(e.unaryFilter.field);return rL.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(t):void 0!==t.fieldFilter?rL.create(iP(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rM.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(t.compositeFilter.op)):x(30097,{filter:t})}(e);return t instanceof rM&&rU(t)?t.getFilters():[t]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new rR(iP(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=eq(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let c=null;i.startAt&&(c=function(e){let t=!!e.before,r=e.values||[];return new rN(r,t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before,r=e.values||[];return new rN(r,t)}(i.endAt)),new r6(n,o,l,a,u,"F",c,h)}function iR(e){return{fieldPath:e.canonicalString()}}function iP(e){return Z.fromServerFormat(e.fieldPath)}function iL(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,t,r,n,i=ed.min(),s=ed.min(),o=tX.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new iM(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new iM(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new iM(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new iM(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e){this.gt=e}}function iV(e,t){let r=t.key,n={prefixPath:r.getCollectionPath().popLast().toArray(),collectionGroup:r.collectionGroup,documentId:r.path.lastSegment(),readTime:iU(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;n.document={name:iw(i=e.gt,t.key),fields:t.data.value.mapValue.fields,updateTime:id(i,t.version.toTimestamp()),createTime:id(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())n.noDocument={path:r.path.toArray(),readTime:ij(t.version)};else{if(!t.isUnknownDocument())return x(57904,{document:t});n.unknownDocument={path:r.path.toArray(),version:ij(t.version)}}return n}function iU(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function ij(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function iB(e){let t=new eh(e.seconds,e.nanoseconds);return ed.fromTimestamp(t)}function iq(e,t){let r=(t.baseMutations||[]).map(t=>iC(e.gt,t));for(let e=0;e<t.mutations.length-1;++e){let r=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let n=t.mutations[e+1];r.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let n=t.mutations.map(t=>iC(e.gt,t)),i=eh.fromMillis(t.localWriteTimeMs);return new nW(t.batchId,i,r,n)}function iz(e){let t=iB(e.readTime),r=void 0!==e.lastLimboFreeSnapshotVersion?iB(e.lastLimboFreeSnapshotVersion):ed.min();return new iM(void 0!==e.query.documents?function(e){let t=e.documents.length;return k(1===t,1966,{count:t}),r7(r5(i_(e.documents[0])))}(e.query):r7(iO(e.query)),e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,r,tX.fromBase64String(e.resumeToken))}function iG(e,t){let r;let n=ij(t.snapshotVersion),i=ij(t.lastLimboFreeSnapshotVersion);r=r0(t.target)?ik(e.gt,t.target):iN(e.gt,t.target).Vt;let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:rX(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:r}}function i$(e){let t=iO({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?nn(t,t.limit,"L"):t}function iK(e,t){return new nJ(t.largestBatchId,iC(e.gt,t.overlayMutation))}function iH(e,t){let r=t.path.lastSegment();return[e,e$(t.path.popLast()),r]}function iW(e,t,r,n){return{indexId:e,uid:t,sequenceNumber:r,readTime:ij(n.readTime),documentKey:e$(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iQ{getBundleMetadata(e,t){return tV(e,tf).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:iB(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return tV(e,tf).put({bundleId:t.id,createTime:ij(im(t.createTime)),version:t.version})}getNamedQuery(e,t){return tV(e,tp).get(t).next(e=>{if(e)return{name:e.name,query:i$(e.bundledQuery),readTime:iB(e.readTime)}})}saveNamedQuery(e,t){return tV(e,tp).put({name:t.name,readTime:ij(im(t.readTime)),bundledQuery:t.bundledQuery})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iJ{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){let r=t.uid||"";return new iJ(e,r)}getOverlay(e,t){return tV(e,tS).get(iH(this.userId,t)).next(e=>e?iK(this.serializer,e):null)}getOverlays(e,t){let r=nm();return eA.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){let n=[];return r.forEach((r,i)=>{let s=new nJ(t,i);n.push(this.wt(e,s))}),eA.waitFor(n)}removeOverlaysForBatchId(e,t,r){let n=new Set;t.forEach(e=>n.add(e$(e.getCollectionPath())));let i=[];return n.forEach(t=>{let n=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,r+1],!1,!0);i.push(tV(e,tS).Y(tx,n))}),eA.waitFor(i)}getOverlaysForCollection(e,t,r){let n=nm(),i=e$(t),s=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return tV(e,tS).j(tx,s).next(e=>{for(let t of e){let e=iK(this.serializer,t);n.set(e.getKey(),e)}return n})}getOverlaysForCollectionGroup(e,t,r,n){let i;let s=nm(),o=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return tV(e,tS).X({index:tk,range:o},(e,t,r)=>{let o=iK(this.serializer,t);s.size()<n||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):r.done()}).next(()=>s)}wt(e,t){return tV(e,tS).put(function(e,t,r){let[n,i,s]=iH(t,r.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:ix(e.gt,r.mutation)}}(this.serializer,this.userId,t))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iY{St(e){return tV(e,tD)}getSessionToken(e){return this.St(e).get("sessionToken").next(e=>{let t=null==e?void 0:e.value;return t?tX.fromUint8Array(t):tX.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iX{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(t1(e.integerValue));else if("doubleValue"in e){let r=t1(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),ez(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),"string"==typeof r&&(r=t0(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(t2(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?rT(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):r_(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):x(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){let r=e.fields||{};for(let e of(this.Ct(t,55),Object.keys(r)))this.xt(e,t),this.Dt(r[e],t)}Lt(e,t){var r,n;let i=e.fields||{};this.Ct(t,53);let s=(null===(n=null===(r=i[ra].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.Ct(t,15),t.Ft(t1(s)),this.xt(ra,t),this.Dt(i[ra],t)}qt(e,t){let r=e.values||[];for(let e of(this.Ct(t,50),r))this.Dt(e,t)}Bt(e,t){this.Ct(t,37),ee.fromName(e).path.forEach(e=>{this.Ct(t,60),this.$t(e,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}function iZ(e){let t=64-function(e){let t=0;for(let r=0;r<8;++r){let n=function(e){if(0===e)return 8;let t=0;return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}(255&e[r]);if(t+=n,8!==n)break}return t}(e);return Math.ceil(t/8)}iX.Ut=new iX;class i0{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Wt(e);else if(e<2048)this.Wt(960|e>>>6),this.Wt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Wt(480|e>>>12),this.Wt(128|63&e>>>6),this.Wt(128|63&e);else{let e=t.codePointAt(0);this.Wt(240|e>>>18),this.Wt(128|63&e>>>12),this.Wt(128|63&e>>>6),this.Wt(128|63&e)}}this.Gt()}Yt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.jt(e);else if(e<2048)this.jt(960|e>>>6),this.jt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.jt(480|e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e);else{let e=t.codePointAt(0);this.jt(240|e>>>18),this.jt(128|63&e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e)}}this.Jt()}Zt(e){let t=this.Xt(e),r=iZ(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let e=t.length-r;e<t.length;++e)this.buffer[this.position++]=255&t[e]}tn(e){let t=this.Xt(e),r=iZ(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let e=t.length-r;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}nn(){this.rn(255),this.rn(255)}sn(){this._n(255),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let e=1;e<t.length;++e)t[e]^=r?255:0;return t}Wt(e){let t=255&e;0===t?(this.rn(0),this.rn(255)):255===t?(this.rn(255),this.rn(0)):this.rn(t)}jt(e){let t=255&e;0===t?(this._n(0),this._n(255)):255===t?(this._n(255),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){let t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);let n=new Uint8Array(r);n.set(this.buffer),this.buffer=n}}class i1{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class i2{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class i4{constructor(){this.un=new i0,this.cn=new i1(this.un),this.ln=new i2(this.un)}seed(e){this.un.seed(e)}hn(e){return 0===e?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i6{constructor(e,t,r,n){this.Pn=e,this.Tn=t,this.In=r,this.dn=n}En(){let e=this.dn.length,t=0===e||255===this.dn[e-1]?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new i6(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:i3(this.In),directionalValue:i3(this.dn),orderedDocumentKey:i3(t),documentKey:r.path.toArray()}}Rn(e,t,r){let n=this.An(e,t,r);return[n.indexId,n.uid,n.arrayValue,n.directionalValue,n.orderedDocumentKey,n.documentKey]}}function i5(e,t){let r=e.Pn-t.Pn;return 0!==r?r:0!==(r=i9(e.In,t.In))?r:0!==(r=i9(e.dn,t.dn))?r:ee.comparator(e.Tn,t.Tn)}function i9(e,t){for(let r=0;r<e.length&&r<t.length;++r){let n=e[r]-t[r];if(0!==n)return n}return e.length-t.length}function i3(e){return(0,h.isSafariOrWebkit)()?function(e){let t="";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t}(e):e}function i8(e){return"string"!=typeof e?e:function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(e)}class i7{constructor(e){for(let t of(this.Vn=new tK((e,t)=>Z.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[],e.filters))t.isInequality()?this.Vn=this.Vn.add(t):this.fn.push(t)}get gn(){return this.Vn.size>1}pn(e){if(k(e.collectionGroup===this.collectionId,49279),this.gn)return!1;let t=ep(e);if(void 0!==t&&!this.yn(t))return!1;let r=em(e),n=new Set,i=0,s=0;for(;i<r.length&&this.yn(r[i]);++i)n=n.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Vn.size>0){let e=this.Vn.getIterator().getNext();if(!n.has(e.field.canonicalString())){let t=r[i];if(!this.wn(e,t)||!this.Sn(this.mn[s++],t))return!1}++i}for(;i<r.length;++i){let e=r[i];if(s>=this.mn.length||!this.Sn(this.mn[s++],e))return!1}return!0}bn(){if(this.gn)return null;let e=new tK(Z.comparator),t=[];for(let r of this.fn)if(!r.field.isKeyField()){if("array-contains"===r.op||"array-contains-any"===r.op)t.push(new ey(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new ey(r.field,0))}}for(let r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new ey(r.field,"asc"===r.dir?0:1)));return new ef(ef.UNKNOWN_ID,this.collectionId,t,ev.empty())}yn(e){for(let t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let r="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function se(e){return e instanceof rL}function st(e){return e instanceof rM&&rU(e)}function sr(e){return se(e)||st(e)||function(e){if(e instanceof rM&&rV(e)){for(let t of e.getFilters())if(!se(t)&&!st(t))return!1;return!0}return!1}(e)}function sn(e,t){return k(e instanceof rL||e instanceof rM,38388),k(t instanceof rL||t instanceof rM,25473),ss(e instanceof rL?t instanceof rL?rM.create([e,t],"and"):si(e,t):t instanceof rL?si(t,e):function(e,t){if(k(e.filters.length>0&&t.filters.length>0,48005),rF(e)&&rF(t))return rB(e,t.getFilters());let r=rV(e)?e:t,n=rV(e)?t:e,i=r.filters.map(e=>sn(e,n));return rM.create(i,"or")}(e,t))}function si(e,t){if(rF(t))return rB(t,e.getFilters());{let r=t.filters.map(t=>sn(e,t));return rM.create(r,"or")}}function ss(e){if(k(e instanceof rL||e instanceof rM,11850),e instanceof rL)return e;let t=e.getFilters();if(1===t.length)return ss(t[0]);if(rj(e))return e;let r=t.map(e=>ss(e)),n=[];return r.forEach(t=>{t instanceof rL?n.push(t):t instanceof rM&&(t.op===e.op?n.push(...t.filters):n.push(t))}),1===n.length?n[0]:rM.create(n,e.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.Dn=new sa}addToCollectionParentIndex(e,t){return this.Dn.add(t),eA.resolve()}getCollectionParents(e,t){return eA.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return eA.resolve()}deleteFieldIndex(e,t){return eA.resolve()}deleteAllFieldIndexes(e){return eA.resolve()}createTargetIndexes(e,t){return eA.resolve()}getDocumentsMatchingTarget(e,t){return eA.resolve(null)}getIndexType(e,t){return eA.resolve(0)}getFieldIndexes(e,t){return eA.resolve([])}getNextCollectionGroupToUpdate(e){return eA.resolve(null)}getMinOffset(e,t){return eA.resolve(eI.min())}getMinOffsetFromCollectionGroup(e,t){return eA.resolve(eI.min())}updateCollectionGroup(e,t,r){return eA.resolve()}updateIndexEntries(e,t){return eA.resolve()}}class sa{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new tK(Y.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new tK(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl="IndexedDbIndexManager",su=new Uint8Array(0);class sc{constructor(e,t){this.databaseId=t,this.vn=new sa,this.Cn=new nc(e=>rX(e),(e,t)=>rZ(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){let r=t.lastSegment(),n=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});let i={collectionId:r,parent:e$(n)};return tV(e,tc).put(i)}return eA.resolve()}getCollectionParents(e,t){let r=[],n=IDBKeyRange.bound([t,""],[t+"\x00",""],!1,!0);return tV(e,tc).j(n).next(e=>{for(let n of e){if(n.collectionId!==t)break;r.push(eK(n.parent))}return r})}addFieldIndex(e,t){let r=tV(e,tm),n={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete n.indexId;let i=r.add(n);if(t.indexState){let r=tV(e,ty);return i.next(e=>{r.put(iW(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let r=tV(e,tm),n=tV(e,ty),i=tV(e,tI);return r.delete(t.indexId).next(()=>n.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=tV(e,tm),r=tV(e,tI),n=tV(e,ty);return t.Y().next(()=>r.Y()).next(()=>n.Y())}createTargetIndexes(e,t){return eA.forEach(this.Fn(t),t=>this.getIndexType(e,t).next(r=>{if(0===r||1===r){let r=new i7(t).bn();if(null!=r)return this.addFieldIndex(e,r)}}))}getDocumentsMatchingTarget(e,t){let r=tV(e,tI),n=!0,i=new Map;return eA.forEach(this.Fn(t),t=>this.Mn(e,t).next(e=>{n&&(n=!!e),i.set(t,e)})).next(()=>{if(n){let e=nv(),n=[];return eA.forEach(i,(i,s)=>{E(sl,`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${rX(t)}`);let o=function(e,t){let r=ep(t);if(void 0===r)return null;for(let t of r1(e,r.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),a=function(e,t){let r=new Map;for(let n of em(t))for(let t of r1(e,n.fieldPath))switch(t.op){case"==":case"in":r.set(n.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return r.set(n.fieldPath.canonicalString(),t.value),Array.from(r.values())}return null}(s,i),l=function(e,t){let r=[],n=!0;for(let i of em(t)){let t=0===i.kind?r2(e,i.fieldPath,e.startAt):r4(e,i.fieldPath,e.startAt);r.push(t.value),n&&(n=t.inclusive)}return new rN(r,n)}(s,i),u=function(e,t){let r=[],n=!0;for(let i of em(t)){let t=0===i.kind?r4(e,i.fieldPath,e.endAt):r2(e,i.fieldPath,e.endAt);r.push(t.value),n&&(n=t.inclusive)}return new rN(r,n)}(s,i),c=this.xn(i,s,l),h=this.xn(i,s,u),d=this.On(i,s,a),f=this.Nn(i.indexId,o,c,l.inclusive,h,u.inclusive,d);return eA.forEach(f,i=>r.H(i,t.limit).next(t=>{t.forEach(t=>{let r=ee.fromSegments(t.documentKey);e.has(r)||(e=e.add(r),n.push(r))})}))}).next(()=>n)}return eA.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(k(t instanceof rL||t instanceof rM,34018),t instanceof rL)return t;if(1===t.filters.length)return e(t.filters[0]);let r=t.filters.map(t=>e(t)),n=rM.create(r,t.op);return sr(n=ss(n))?n:(k(n instanceof rM,64498),k(rF(n),40251),k(n.filters.length>1,57927),n.filters.reduce((e,t)=>sn(e,t)))}(/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(t){var r,n;if(k(t instanceof rL||t instanceof rM,20012),t instanceof rL){if(t instanceof rH){let e=(null===(n=null===(r=t.value.arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>rL.create(t.field,"==",e)))||[];return rM.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return rM.create(i,t.op)}(e));return k(sr(t),7391),se(t)||st(t)?[t]:t.getFilters()})(rM.create(e.filters,"and")).map(t=>rY(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t)),t}Nn(e,t,r,n,i,s,o){let a=(null!=t?t.length:1)*Math.max(r.length,i.length),l=a/(null!=t?t.length:1),u=[];for(let c=0;c<a;++c){let a=t?this.Bn(t[c/l]):su,h=this.Ln(e,a,r[c%l],n),d=this.kn(e,a,i[c%l],s),f=o.map(t=>this.Ln(e,a,t,!0));u.push(...this.createRange(h,d,f))}return u}Ln(e,t,r,n){let i=new i6(e,ee.empty(),t,r);return n?i:i.En()}kn(e,t,r,n){let i=new i6(e,ee.empty(),t,r);return n?i.En():i}Mn(e,t){let r=new i7(t),n=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,n).next(e=>{let t=null;for(let n of e)r.pn(n)&&(!t||n.fields.length>t.fields.length)&&(t=n);return t})}getIndexType(e,t){let r=2,n=this.Fn(t);return eA.forEach(n,t=>this.Mn(e,t).next(e=>{e?0!==r&&e.fields.length<function(e){let t=new tK(Z.comparator),r=!1;for(let n of e.filters)for(let e of n.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?r=!0:t=t.add(e.field));for(let r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(r?1:0)}(t)&&(r=1):r=0})).next(()=>null!==t.limit&&n.length>1&&2===r?1:r)}qn(e,t){let r=new i4;for(let n of em(e)){let e=t.data.field(n.fieldPath);if(null==e)return null;let i=r.hn(n.kind);iX.Ut.bt(e,i)}return r.an()}Bn(e){let t=new i4;return iX.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){let r=new i4;return iX.Ut.bt(rg(this.databaseId,t),r.hn(function(e){let t=em(e);return 0===t.length?0:t[t.length-1].kind}(e))),r.an()}On(e,t,r){if(null===r)return[];let n=[];n.push(new i4);let i=0;for(let s of em(e)){let e=r[i++];for(let r of n)if(this.$n(t,s.fieldPath)&&rv(e))n=this.Un(n,s,e);else{let t=r.hn(s.kind);iX.Ut.bt(e,t)}}return this.Kn(n)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){let t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){let n=[...e],i=[];for(let e of r.arrayValue.values||[])for(let r of n){let n=new i4;n.seed(r.an()),iX.Ut.bt(e,n.hn(t.kind)),i.push(n)}return i}$n(e,t){return!!e.filters.find(e=>e instanceof rL&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let r=tV(e,tm),n=tV(e,ty);return(t?r.j(tg,IDBKeyRange.bound(t,t)):r.j()).next(e=>{let t=[];return eA.forEach(e,e=>n.get([e.indexId,this.uid]).next(r=>{t.push(function(e,t){let r=t?new ev(t.sequenceNumber,new eI(iB(t.readTime),new ee(eK(t.documentKey)),t.largestBatchId)):ev.empty(),n=e.fields.map(([e,t])=>new ey(Z.fromServerFormat(e),t));return new ef(e.indexId,e.collectionGroup,n,r)}(e,r))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let r=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==r?r:$(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,r){let n=tV(e,tm),i=tV(e,ty);return this.Wn(e).next(e=>n.j(tg,IDBKeyRange.bound(t,t)).next(t=>eA.forEach(t,t=>i.put(iW(t.indexId,this.uid,e,r)))))}updateIndexEntries(e,t){let r=new Map;return eA.forEach(t,(t,n)=>{let i=r.get(t.collectionGroup);return(i?eA.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(r.set(t.collectionGroup,i),eA.forEach(i,r=>this.Gn(e,t,r).next(t=>{let i=this.zn(n,r);return t.isEqual(i)?eA.resolve():this.jn(e,n,r,t,i)}))))})}Jn(e,t,r,n){return tV(e,tI).put(n.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,n){return tV(e,tI).delete(n.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){let n=tV(e,tI),i=new tK(i5);return n.X({index:tE,range:IDBKeyRange.only([r.indexId,this.uid,i3(this.Qn(r,t))])},(e,n)=>{i=i.add(new i6(r.indexId,t,i8(n.arrayValue),i8(n.directionalValue)))}).next(()=>i)}zn(e,t){let r=new tK(i5),n=this.qn(t,e);if(null==n)return r;let i=ep(t);if(null!=i){let s=e.data.field(i.fieldPath);if(rv(s))for(let i of s.arrayValue.values||[])r=r.add(new i6(t.indexId,e.key,this.Bn(i),n))}else r=r.add(new i6(t.indexId,e.key,su,n));return r}jn(e,t,r,n,i){E(sl,"Updating index entries for document '%s'",t.key);let s=[];return function(e,t,r,n,i){let s=e.getIterator(),o=t.getIterator(),a=tW(s),l=tW(o);for(;a||l;){let e=!1,t=!1;if(a&&l){let n=r(a,l);n<0?t=!0:n>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(n(l),l=tW(o)):t?(i(a),a=tW(s)):(a=tW(s),l=tW(o))}}(n,i,i5,n=>{s.push(this.Jn(e,t,r,n))},n=>{s.push(this.Hn(e,t,r,n))}),eA.waitFor(s)}Wn(e){let t=1;return tV(e,ty).X({index:tw,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,r,n)=>{n.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((e,t)=>i5(e,t)).filter((e,t,r)=>!t||0!==i5(e,r[t-1]));let n=[];for(let i of(n.push(e),r)){let r=i5(i,e),s=i5(i,t);if(0===r)n[0]=e.En();else if(r>0&&s<0)n.push(i),n.push(i.En());else if(s>0)break}n.push(t);let i=[];for(let e=0;e<n.length;e+=2){if(this.Yn(n[e],n[e+1]))return[];let t=n[e].Rn(this.uid,su,ee.empty()),r=n[e+1].Rn(this.uid,su,ee.empty());i.push(IDBKeyRange.bound(t,r))}return i}Yn(e,t){return i5(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(sh)}getMinOffset(e,t){return eA.mapArray(this.Fn(t),t=>this.Mn(e,t).next(e=>e||x(44426))).next(sh)}}function sh(e){k(0!==e.length,28825);let t=e[0].indexState.offset,r=t.largestBatchId;for(let n=1;n<e.length;n++){let i=e[n].indexState.offset;0>e_(i,t)&&(t=i),r<i.largestBatchId&&(r=i.largestBatchId)}return new eI(t.readTime,t.documentKey,r)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class sf{static withCacheSize(e){return new sf(e,sf.DEFAULT_COLLECTION_PERCENTILE,sf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(e,t,r){let n=e.store(eY),i=e.store(e2),s=[],o=IDBKeyRange.only(r.batchId),a=0,l=n.X({range:o},(e,t,r)=>(a++,r.delete()));s.push(l.next(()=>{k(1===a,47070,{batchId:r.batchId})}));let u=[];for(let e of r.mutations){var c,h;let n=(c=e.key.path,h=r.batchId,[t,e$(c),h]);s.push(i.delete(n)),u.push(e.key)}return eA.waitFor(s).next(()=>u)}function sm(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw x(14731);t=e.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sf.DEFAULT_COLLECTION_PERCENTILE=10,sf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sf.DEFAULT=new sf(41943040,sf.DEFAULT_COLLECTION_PERCENTILE,sf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sf.DISABLED=new sf(-1,0,0);class sg{constructor(e,t,r,n){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=n,this.Zn={}}static yt(e,t,r,n){k(""!==e.uid,64387);let i=e.isAuthenticated()?e.uid:"";return new sg(i,t,r,n)}checkEmpty(e){let t=!0,r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return sv(e).X({index:eZ,range:r},(e,r,n)=>{t=!1,n.done()}).next(()=>t)}addMutationBatch(e,t,r,n){let i=tV(e,e2),s=sv(e);return s.add({}).next(o=>{k("number"==typeof o,49019);let a=new nW(o,t,r,n),l=function(e,t,r){let n=r.baseMutations.map(t=>ix(e.gt,t)),i=r.mutations.map(t=>ix(e.gt,t));return{userId:t,batchId:r.batchId,localWriteTimeMs:r.localWriteTime.toMillis(),baseMutations:n,mutations:i}}(this.serializer,this.userId,a),u=[],c=new tK((e,t)=>$(e.canonicalString(),t.canonicalString()));for(let e of n){let t=[this.userId,e$(e.key.path),o];c=c.add(e.key.path.popLast()),u.push(s.put(l)),u.push(i.put(t,e1))}return c.forEach(t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Zn[o]=a.keys()}),eA.waitFor(u).next(()=>a)})}lookupMutationBatch(e,t){return sv(e).get(t).next(e=>e?(k(e.userId===this.userId,48,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),iq(this.serializer,e)):null)}Xn(e,t){return this.Zn[t]?eA.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let r=e.keys();return this.Zn[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){let r=t+1,n=IDBKeyRange.lowerBound([this.userId,r]),i=null;return sv(e).X({index:eZ,range:n},(e,t,n)=>{t.userId===this.userId&&(k(t.batchId>=r,47524,{er:r}),i=iq(this.serializer,t)),n.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=-1;return sv(e).X({index:eZ,range:t,reverse:!0},(e,t,n)=>{r=t.batchId,n.done()}).next(()=>r)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return sv(e).j(eZ,t).next(e=>e.map(e=>iq(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let r=[this.userId,e$(t.path)],n=IDBKeyRange.lowerBound(r),i=[];return tV(e,e2).X({range:n},(r,n,s)=>{let[o,a,l]=r,u=eK(a);if(o===this.userId&&t.path.isEqual(u))return sv(e).get(l).next(e=>{if(!e)throw x(61480,{tr:r,batchId:l});k(e.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:e.userId,batchId:l}),i.push(iq(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tK($),n=[];return t.forEach(t=>{let i=[this.userId,e$(t.path)],s=IDBKeyRange.lowerBound(i),o=tV(e,e2).X({range:s},(e,n,i)=>{let[s,o,a]=e,l=eK(o);s===this.userId&&t.path.isEqual(l)?r=r.add(a):i.done()});n.push(o)}),eA.waitFor(n).next(()=>this.nr(e,r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=[this.userId,e$(r)],s=IDBKeyRange.lowerBound(i),o=new tK($);return tV(e,e2).X({range:s},(e,t,i)=>{let[s,a,l]=e,u=eK(a);s===this.userId&&r.isPrefixOf(u)?u.length===n&&(o=o.add(l)):i.done()}).next(()=>this.nr(e,o))}nr(e,t){let r=[],n=[];return t.forEach(t=>{n.push(sv(e).get(t).next(e=>{if(null===e)throw x(35274,{batchId:t});k(e.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),r.push(iq(this.serializer,e))}))}),eA.waitFor(n).next(()=>r)}removeMutationBatch(e,t){return sp(e.ce,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),eA.forEach(r,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return eA.resolve();let r=IDBKeyRange.lowerBound([this.userId]),n=[];return tV(e,e2).X({range:r},(e,t,r)=>{if(e[0]===this.userId){let t=eK(e[1]);n.push(t)}else r.done()}).next(()=>{k(0===n.length,56720,{ir:n.map(e=>e.canonicalString())})})})}containsKey(e,t){return sy(e,this.userId,t)}sr(e){return tV(e,eJ).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function sy(e,t,r){let n=[t,e$(r.path)],i=n[1],s=IDBKeyRange.lowerBound(n),o=!1;return tV(e,e2).X({range:s,Z:!0},(e,r,n)=>{let[s,a,l]=e;s===t&&a===i&&(o=!0),n.done()}).next(()=>o)}function sv(e){return tV(e,eY)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new sw(0)}static ur(){return new sw(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{let r=new sw(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(e=>ed.fromTimestamp(new eh(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.cr(e).next(n=>(n.highestListenSequenceNumber=t,r&&(n.lastRemoteSnapshotVersion=r.toTimestamp()),t>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=t),this.lr(e,n)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>tV(e,tt).delete(t.targetId)).next(()=>this.cr(e)).next(t=>(k(t.targetCount>0,8065),t.targetCount-=1,this.lr(e,t)))}removeTargets(e,t,r){let n=0,i=[];return tV(e,tt).X((s,o)=>{let a=iz(o);a.sequenceNumber<=t&&null===r.get(a.targetId)&&(n++,i.push(this.removeTargetData(e,a)))}).next(()=>eA.waitFor(i)).next(()=>n)}forEachTarget(e,t){return tV(e,tt).X((e,r)=>{let n=iz(r);t(n)})}cr(e){return tV(e,tu).get(tl).next(e=>(k(null!==e,2888),e))}lr(e,t){return tV(e,tu).put(tl,t)}hr(e,t){return tV(e,tt).put(iG(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next(e=>e.targetCount)}getTargetData(e,t){let r=rX(t),n=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),i=null;return tV(e,tt).X({range:n,index:tr},(e,r,n)=>{let s=iz(r);rZ(t,s.target)&&(i=s,n.done())}).next(()=>i)}addMatchingKeys(e,t,r){let n=[],i=sI(e);return t.forEach(t=>{let s=e$(t.path);n.push(i.put({targetId:r,path:s})),n.push(this.referenceDelegate.addReference(e,r,t))}),eA.waitFor(n)}removeMatchingKeys(e,t,r){let n=sI(e);return eA.forEach(t,t=>{let i=e$(t.path);return eA.waitFor([n.delete([r,i]),this.referenceDelegate.removeReference(e,r,t)])})}removeMatchingKeysForTargetId(e,t){let r=sI(e),n=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(n)}getMatchingKeysForTargetId(e,t){let r=IDBKeyRange.bound([t],[t+1],!1,!0),n=sI(e),i=nv();return n.X({range:r,Z:!0},(e,t,r)=>{let n=eK(e[1]),s=new ee(n);i=i.add(s)}).next(()=>i)}containsKey(e,t){let r=e$(t.path),n=IDBKeyRange.bound([r],[r+"\x00"],!1,!0),i=0;return sI(e).X({index:to,Z:!0,range:n},([e,t],r,n)=>{0!==e&&(i++,n.done())}).next(()=>i>0)}Et(e,t){return tV(e,tt).get(t).next(e=>e?iz(e):null)}}function sI(e){return tV(e,ti)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s_="LruGarbageCollector";function sE([e,t],[r,n]){let i=$(e,r);return 0===i?$(t,n):i}class sT{constructor(e){this.Tr=e,this.buffer=new tK(sE),this.Ir=0}dr(){return++this.Ir}Er(e){let t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>sE(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sS{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return null!==this.Ar}Rr(e){E(s_,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){eR(e)?E(s_,"Ignoring IndexedDB error during garbage collection: ",e):await eS(e)}await this.Rr(3e5)})}}class sA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return eA.resolve(eB.ue);let r=new sT(t);return this.Vr.forEachTarget(e,e=>r.Er(e.sequenceNumber)).next(()=>this.Vr.gr(e,e=>r.Er(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector","Garbage collection skipped; disabled"),eA.resolve(sd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(E("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sd):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,n,i,s,o,a,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(E("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,s=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,o=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(l=Date.now(),I()<=c.LogLevel.DEBUG&&E("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${n} in `+(o-s)+"ms\n"+`	Removed ${i} targets in `+(a-o)+"ms\n"+`	Removed ${e} documents in `+(l-a)+"ms\n"+`Total Duration: ${l-u}ms`),eA.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,t){this.db=e,this.garbageCollector=new sA(this,t)}mr(e){let t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}yr(e){let t=0;return this.gr(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(e,r)=>t(r))}addReference(e,t,r){return sC(e,r)}removeReference(e,t,r){return sC(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return sC(e,t)}Sr(e,t){let r;return r=!1,tV(e,eJ).ee(n=>sy(e,n,t).next(e=>(e&&(r=!0),eA.resolve(!e)))).next(()=>r)}removeOrphanedDocuments(e,t){let r=this.db.getRemoteDocumentCache().newChangeBuffer(),n=[],i=0;return this.wr(e,(s,o)=>{if(o<=t){let t=this.Sr(e,s).next(t=>{if(!t)return i++,r.getEntry(e,s).next(()=>(r.removeEntry(s,ed.min()),sI(e).delete([0,e$(s.path)])))});n.push(t)}}).next(()=>eA.waitFor(n)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return sC(e,t)}wr(e,t){let r=sI(e),n,i=eB.ue;return r.X({index:to},([e,r],{path:s,sequenceNumber:o})=>{0===e?(i!==eB.ue&&t(new ee(eK(n)),i),i=o,n=s):i=eB.ue}).next(()=>{i!==eB.ue&&t(new ee(eK(n)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function sC(e,t){var r;return sI(e).put((r=e.currentSequenceNumber,{targetId:0,path:e$(t.path),sequenceNumber:r}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(){this.changes=new nc(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rk.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?eA.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return tV(e,e4).put(r)}removeEntry(e,t,r){return tV(e,e4).delete(function(e,t){let r=e.path.toArray();return[r.slice(0,r.length-2),r[r.length-2],iU(t),r[r.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.br(e,r)))}getEntry(e,t){let r=rk.newInvalidDocument(t);return tV(e,e4).X({index:e5,range:IDBKeyRange.only(sO(t))},(e,n)=>{r=this.Dr(t,n)}).next(()=>r)}vr(e,t){let r={size:0,document:rk.newInvalidDocument(t)};return tV(e,e4).X({index:e5,range:IDBKeyRange.only(sO(t))},(e,n)=>{r={document:this.Dr(t,n),size:sm(n)}}).next(()=>r)}getEntries(e,t){let r=nh;return this.Cr(e,t,(e,t)=>{let n=this.Dr(e,t);r=r.insert(e,n)}).next(()=>r)}Fr(e,t){let r=nh,n=new tz(ee.comparator);return this.Cr(e,t,(e,t)=>{let i=this.Dr(e,t);r=r.insert(e,i),n=n.insert(e,sm(t))}).next(()=>({documents:r,Mr:n}))}Cr(e,t,r){if(t.isEmpty())return eA.resolve();let n=new tK(sP);t.forEach(e=>n=n.add(e));let i=IDBKeyRange.bound(sO(n.first()),sO(n.last())),s=n.getIterator(),o=s.getNext();return tV(e,e4).X({index:e5,range:i},(e,t,n)=>{let i=ee.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&0>sP(o,i);)r(o,null),o=s.getNext();o&&o.isEqual(i)&&(r(o,t),o=s.hasNext()?s.getNext():null),o?n.G(sO(o)):n.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,r,n,i){let s=t.path,o=[s.popLast().toArray(),s.lastSegment(),iU(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return tV(e,e4).j(IDBKeyRange.bound(o,a,!0)).next(e=>{null==i||i.incrementDocumentReadCount(e.length);let r=nh;for(let i of e){let e=this.Dr(ee.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(na(t,e)||n.has(e.key))&&(r=r.insert(e.key,e))}return r})}getAllFromCollectionGroup(e,t,r,n){let i=nh,s=sR(t,r),o=sR(t,eI.max());return tV(e,e4).X({index:e3,range:IDBKeyRange.bound(s,o,!0)},(e,t,r)=>{let s=this.Dr(ee.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===n&&r.done()}).next(()=>i)}newChangeBuffer(e){return new sD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return tV(e,e7).get(te).next(e=>(k(!!e,20021),e))}br(e,t){return tV(e,e7).put(te,t)}Dr(e,t){if(t){let e=function(e,t){let r;if(t.document)r=iA(e.gt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=ee.fromSegments(t.noDocument.path),n=iB(t.noDocument.readTime);r=rk.newNoDocument(e,n),t.hasCommittedMutations&&r.setHasCommittedMutations()}else{if(!t.unknownDocument)return x(56709);{let e=ee.fromSegments(t.unknownDocument.path),n=iB(t.unknownDocument.version);r=rk.newUnknownDocument(e,n)}}return t.readTime&&r.setReadTime(function(e){let t=new eh(e[0],e[1]);return ed.fromTimestamp(t)}(t.readTime)),r}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(ed.min())))return e}return rk.newInvalidDocument(e)}}class sD extends sk{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new nc(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],r=0,n=new tK((e,t)=>$(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let o=this.Nr.get(i);if(t.push(this.Or.removeEntry(e,i,o.readTime)),s.isValidDocument()){let a=iV(this.Or.serializer,s);n=n.add(i.path.popLast());let l=sm(a);r+=l-o.size,t.push(this.Or.addEntry(e,i,a))}else if(r-=o.size,this.trackRemovals){let r=iV(this.Or.serializer,s.convertToNoDocument(ed.min()));t.push(this.Or.addEntry(e,i,r))}}),n.forEach(r=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,r))}),t.push(this.Or.updateMetadata(e,r)),eA.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(e=>(this.Nr.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:e,Mr:t})=>(t.forEach((t,r)=>{this.Nr.set(t,{size:r,readTime:e.get(t).readTime})}),e))}}function sO(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function sR(e,t){let r=t.documentKey.path.toArray();return[e,iU(t.readTime),r.slice(0,r.length-2),r.length>0?r[r.length-1]:""]}function sP(e,t){let r=e.path.toArray(),n=t.path.toArray(),i=0;for(let e=0;e<r.length-2&&e<n.length-2;++e)if(i=$(r[e],n[e]))return i;return(i=$(r.length,n.length))||(i=$(r[r.length-2],n[n.length-2]))||$(r[r.length-1],n[n.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&nU(r.mutation,e,tQ.empty(),eh.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nv()).next(()=>t))}getLocalViewOfDocuments(e,t,r=nv()){let n=nm();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=nf();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=nm();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,nv()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=nh,s=nm(),o=nm();return t.forEach((e,t)=>{let o=r.get(t.key);n.has(t.key)&&(void 0===o||o.mutation instanceof nq)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),nU(o.mutation,t,o.mutation.getFieldMask(),eh.now())):s.set(t.key,tQ.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return o.set(e,new sL(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),o))}recalculateAndSaveOverlays(e,t){let r=nm(),n=new tz((e,t)=>e-t),i=nv();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=r.get(e)||tQ.empty();o=i.applyToLocalView(s,o),r.set(e,o);let a=(n.get(i.batchId)||nv()).add(e);n=n.insert(i.batchId,a)})}).next(()=>{let s=[],o=n.getReverseIterator();for(;o.hasNext();){let n=o.getNext(),a=n.key,l=n.value,u=nm();l.forEach(e=>{if(!i.has(e)){let n=nV(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return eA.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return ee.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):r3(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):eA.resolve(nm()),o=-1,a=i;return s.next(t=>eA.forEach(t,(t,r)=>(o<r.largestBatchId&&(o=r.largestBatchId),i.get(t)?eA.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,nv())).next(e=>({batchId:o,changes:np(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(e=>{let t=nf();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=nf();return this.indexManager.getCollectionParents(e,i).next(o=>eA.forEach(o,o=>{let a=new r6(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,rk.newInvalidDocument(n)))});let r=nf();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&nU(s.mutation,n,tQ.empty(),eh.now()),na(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return eA.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,{id:t.id,version:t.version,createTime:im(t.createTime)}),eA.resolve()}getNamedQuery(e,t){return eA.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,{name:t.name,query:i$(t.bundledQuery),readTime:im(t.readTime)}),eA.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(){this.overlays=new tz(ee.comparator),this.kr=new Map}getOverlay(e,t){return eA.resolve(this.overlays.get(t))}getOverlays(e,t){let r=nm();return eA.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.wt(e,t,n)}),eA.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.kr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.kr.delete(r)),eA.resolve()}getOverlaysForCollection(e,t,r){let n=nm(),i=t.length+1,s=new ee(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return eA.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new tz((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=nm(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=nm(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=n)););return eA.resolve(o)}wt(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.kr.get(n.largestBatchId).delete(r.key);this.kr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new nJ(t,r));let i=this.kr.get(t);void 0===i&&(i=nv(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(){this.sessionToken=tX.EMPTY_BYTE_STRING}getSessionToken(e){return eA.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,eA.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(){this.qr=new tK(sB.Qr),this.$r=new tK(sB.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){let r=new sB(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new sB(e,t))}Gr(e,t){e.forEach(e=>this.removeReference(e,t))}zr(e){let t=new ee(new Y([])),r=new sB(t,e),n=new sB(t,e+1),i=[];return this.$r.forEachInRange([r,n],e=>{this.Wr(e),i.push(e.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){let t=new ee(new Y([])),r=new sB(t,e),n=new sB(t,e+1),i=nv();return this.$r.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sB(e,0),r=this.qr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class sB{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ee.comparator(e.key,t.key)||$(e.Hr,t.Hr)}static Ur(e,t){return $(e.Hr,t.Hr)||ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new tK(sB.Qr)}checkEmpty(e){return eA.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nW(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Yr=this.Yr.add(new sB(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return eA.resolve(s)}lookupMutationBatch(e,t){return eA.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Xr(t+1),n=r<0?0:r;return eA.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return eA.resolve(0===this.mutationQueue.length?-1:this.er-1)}getAllMutationBatches(e){return eA.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new sB(t,0),n=new sB(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,n],e=>{let t=this.Zr(e.Hr);i.push(t)}),eA.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tK($);return t.forEach(e=>{let t=new sB(e,0),n=new sB(e,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([t,n],e=>{r=r.add(e.Hr)})}),eA.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;ee.isDocumentKey(i)||(i=i.child(""));let s=new sB(new ee(i),0),o=new tK($);return this.Yr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(o=o.add(e.Hr)),!0)},s),eA.resolve(this.ei(o))}ei(e){let t=[];return e.forEach(e=>{let r=this.Zr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){k(0===this.ti(t.batchId,"removed"),55003),this.mutationQueue.shift();let r=this.Yr;return eA.forEach(t.mutations,n=>{let i=new sB(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){let r=new sB(t,0),n=this.Yr.firstAfterOrEqual(r);return eA.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,eA.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){let t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{constructor(e){this.ni=e,this.docs=new tz(ee.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return eA.resolve(r?r.document.mutableCopy():rk.newInvalidDocument(t))}getEntries(e,t){let r=nh;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():rk.newInvalidDocument(e))}),eA.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=nh,s=t.path,o=new ee(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=e_(eb(o),r)||(n.has(o.key)||na(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return eA.resolve(i)}getAllFromCollectionGroup(e,t,r,n){x(9500)}ri(e,t){return eA.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sG(this)}getSize(e){return eA.resolve(this.size)}}class sG extends sk{constructor(e){super(),this.Or=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Or.addEntry(e,n)):this.Or.removeEntry(r)}),eA.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(e){this.persistence=e,this.ii=new nc(e=>rX(e),rZ),this.lastRemoteSnapshotVersion=ed.min(),this.highestTargetId=0,this.si=0,this.oi=new sj,this.targetCount=0,this._i=sw.ar()}forEachTarget(e,t){return this.ii.forEach((e,r)=>t(r)),eA.resolve()}getLastRemoteSnapshotVersion(e){return eA.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return eA.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),eA.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),eA.resolve()}hr(e){this.ii.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this._i=new sw(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,eA.resolve()}updateTargetData(e,t){return this.hr(t),eA.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,eA.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.ii.forEach((s,o)=>{o.sequenceNumber<=t&&null===r.get(o.targetId)&&(this.ii.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),n++)}),eA.waitFor(i).next(()=>n)}getTargetCount(e){return eA.resolve(this.targetCount)}getTargetData(e,t){let r=this.ii.get(t)||null;return eA.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),eA.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),eA.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),eA.resolve()}getMatchingKeysForTargetId(e,t){let r=this.oi.Jr(t);return eA.resolve(r)}containsKey(e,t){return eA.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sK{constructor(e,t){this.ai={},this.overlays={},this.ui=new eB(0),this.ci=!1,this.ci=!0,this.li=new sU,this.referenceDelegate=e(this),this.hi=new s$(this),this.indexManager=new so,this.remoteDocumentCache=new sz(e=>this.referenceDelegate.Pi(e)),this.serializer=new iF(t),this.Ti=new sF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sV,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new sq(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){E("MemoryPersistence","Starting transaction:",e);let n=new sH(this.ui.next());return this.referenceDelegate.Ii(),r(n).next(e=>this.referenceDelegate.di(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ei(e,t){return eA.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class sH extends eT{constructor(e){super(),this.currentSequenceNumber=e}}class sW{constructor(e){this.persistence=e,this.Ai=new sj,this.Ri=null}static Vi(e){return new sW(e)}get mi(){if(this.Ri)return this.Ri;throw x(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),eA.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),eA.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),eA.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(e=>this.mi.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.mi.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return eA.forEach(this.mi,r=>{let n=ee.fromPath(r);return this.fi(e,n).next(e=>{e||t.removeEntry(n,ed.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(e=>{e?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return eA.or([()=>eA.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class sQ{constructor(e,t){this.persistence=e,this.gi=new nc(e=>e$(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new sA(this,t)}static Vi(e,t){return new sQ(e,t)}Ii(){}di(e){return eA.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){let t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}yr(e){let t=0;return this.gr(e,e=>{t++}).next(()=>t)}gr(e,t){return eA.forEach(this.gi,(r,n)=>this.Sr(e,r,n).next(e=>e?eA.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.ri(e,n=>this.Sr(e,n,t).next(e=>{e||(r++,i.removeEntry(n,ed.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),eA.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),eA.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),eA.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),eA.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(ru(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=t8(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return t2(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,tj(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw x(13486,{value:t})}}(e.data.value)),t}Sr(e,t,r){return eA.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.gi.get(t);return eA.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sJ{constructor(e){this.serializer=e}q(e,t,r,n){let i=new eC("createOrUpgrade",t);r<1&&n>=1&&(function(e){e.createObjectStore(eW)}(e),function(e){e.createObjectStore(eJ,{keyPath:"userId"});let t=e.createObjectStore(eY,{keyPath:eX,autoIncrement:!0});t.createIndex(eZ,e0,{unique:!0}),e.createObjectStore(e2)}(e),sY(e),function(e){e.createObjectStore(eH)}(e));let s=eA.resolve();return r<3&&n>=3&&(0!==r&&(e.deleteObjectStore(ti),e.deleteObjectStore(tt),e.deleteObjectStore(tu),sY(e)),s=s.next(()=>(function(e){let t=e.store(tu),r={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ed.min().toTimestamp(),targetCount:0};return t.put(tl,r)})(i))),r<4&&n>=4&&(0!==r&&(s=s.next(()=>(function(e,t){let r=t.store(eY);return r.j().next(r=>{e.deleteObjectStore(eY),e.createObjectStore(eY,{keyPath:eX,autoIncrement:!0}).createIndex(eZ,e0,{unique:!0});let n=t.store(eY),i=r.map(e=>n.put(e));return eA.waitFor(i)})})(e,i))),s=s.next(()=>{!function(e){e.createObjectStore(td,{keyPath:"clientId"})}(e)})),r<5&&n>=5&&(s=s.next(()=>this.pi(i))),r<6&&n>=6&&(s=s.next(()=>((function(e){e.createObjectStore(e7)})(e),this.yi(i)))),r<7&&n>=7&&(s=s.next(()=>this.wi(i))),r<8&&n>=8&&(s=s.next(()=>this.Si(e,i))),r<9&&n>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),r<10&&n>=10&&(s=s.next(()=>this.bi(i))),r<11&&n>=11&&(s=s.next(()=>{(function(e){e.createObjectStore(tf,{keyPath:"bundleId"})})(e),function(e){e.createObjectStore(tp,{keyPath:"name"})}(e)})),r<12&&n>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore(tS,{keyPath:tA});t.createIndex(tx,tC,{unique:!1}),t.createIndex(tk,tN,{unique:!1})}(e)})),r<13&&n>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore(e4,{keyPath:e6});t.createIndex(e5,e9),t.createIndex(e3,e8)})(e)).next(()=>this.Di(e,i)).next(()=>e.deleteObjectStore(eH))),r<14&&n>=14&&(s=s.next(()=>this.Ci(e,i))),r<15&&n>=15&&(s=s.next(()=>(function(e){let t=e.createObjectStore(tm,{keyPath:"indexId",autoIncrement:!0});t.createIndex(tg,"collectionGroup",{unique:!1});let r=e.createObjectStore(ty,{keyPath:tv});r.createIndex(tw,tb,{unique:!1});let n=e.createObjectStore(tI,{keyPath:t_});n.createIndex(tE,tT,{unique:!1})})(e))),r<16&&n>=16&&(s=s.next(()=>{t.objectStore(ty).clear()}).next(()=>{t.objectStore(tI).clear()})),r<17&&n>=17&&(s=s.next(()=>{!function(e){e.createObjectStore(tD,{keyPath:"name"})}(e)})),r<18&&n>=18&&(0,h.isSafariOrWebkit)()&&(s=s.next(()=>{t.objectStore(ty).clear()}).next(()=>{t.objectStore(tI).clear()})),s}yi(e){let t=0;return e.store(eH).X((e,r)=>{t+=sm(r)}).next(()=>{let r={byteSize:t};return e.store(e7).put(te,r)})}pi(e){let t=e.store(eJ),r=e.store(eY);return t.j().next(t=>eA.forEach(t,t=>{let n=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return r.j(eZ,n).next(r=>eA.forEach(r,r=>{k(r.userId===t.userId,18650,"Cannot process batch from unexpected user",{batchId:r.batchId});let n=iq(this.serializer,r);return sp(e,t.userId,n).next(()=>{})}))}))}wi(e){let t=e.store(ti),r=e.store(eH);return e.store(tu).get(tl).next(e=>{let n=[];return r.X((r,i)=>{let s=new Y(r),o=[0,e$(s)];n.push(t.get(o).next(r=>r?eA.resolve():t.put({targetId:0,path:e$(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>eA.waitFor(n))})}Si(e,t){e.createObjectStore(tc,{keyPath:th});let r=t.store(tc),n=new sa,i=e=>{if(n.add(e)){let t=e.lastSegment(),n=e.popLast();return r.put({collectionId:t,parent:e$(n)})}};return t.store(eH).X({Z:!0},(e,t)=>{let r=new Y(e);return i(r.popLast())}).next(()=>t.store(e2).X({Z:!0},([e,t,r],n)=>{let s=eK(t);return i(s.popLast())}))}bi(e){let t=e.store(tt);return t.X((e,r)=>{let n=iz(r),i=iG(this.serializer,n);return t.put(i)})}Di(e,t){let r=t.store(eH),n=[];return r.X((e,r)=>{let i=t.store(e4),s=(r.document?new ee(Y.fromString(r.document.name).popFirst(5)):r.noDocument?ee.fromSegments(r.noDocument.path):r.unknownDocument?ee.fromSegments(r.unknownDocument.path):x(36783)).path.toArray(),o={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:r.readTime||[0,0],unknownDocument:r.unknownDocument,noDocument:r.noDocument,document:r.document,hasCommittedMutations:!!r.hasCommittedMutations};n.push(i.put(o))}).next(()=>eA.waitFor(n))}Ci(e,t){let r=t.store(eY),n=new sN(this.serializer),i=new sK(sW.Vi,this.serializer.gt);return r.j().next(e=>{let r=new Map;return e.forEach(e=>{var t;let n=null!==(t=r.get(e.userId))&&void 0!==t?t:nv();iq(this.serializer,e).keys().forEach(e=>n=n.add(e)),r.set(e.userId,n)}),eA.forEach(r,(e,r)=>{let s=new v(r),o=iJ.yt(this.serializer,s),a=i.getIndexManager(s),l=sg.yt(s,this.serializer,a,i.referenceDelegate);return new sM(n,l,o,a).recalculateAndSaveOverlaysForDocumentKeys(new tF(t,eB.ue),e).next()})})}}function sY(e){e.createObjectStore(ti,{keyPath:ts}).createIndex(to,ta,{unique:!0}),e.createObjectStore(tt,{keyPath:"targetId"}).createIndex(tr,tn,{unique:!0}),e.createObjectStore(tu)}let sX="IndexedDbPersistence",sZ="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",s0="main";class s1{constructor(e,t,r,n,i,s,o,a,l,u,c=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=i,this.window=s,this.document=o,this.Mi=l,this.xi=u,this.Oi=c,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=e=>Promise.resolve(),!s1.C())throw new O(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sx(this,n),this.Qi=t+s0,this.serializer=new iF(a),this.$i=new ek(this.Qi,this.Oi,new sJ(this.serializer)),this.li=new iY,this.hi=new sb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=new sN(this.serializer),this.Ti=new iQ,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,!1===u&&T(sX,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(D.FAILED_PRECONDITION,sZ);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new eB(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>tV(e,td).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(e=>{e||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(eR(e))return E(sX,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return E(sX,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return tV(e,eW).get(eQ).next(e=>eA.resolve(this.Xi(e)))}es(e){return tV(e,td).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,18e5)){this.ki=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=tV(e,td);return t.j().next(e=>{let r=this.rs(e,18e5),n=e.filter(e=>-1===r.indexOf(e));return eA.forEach(n,e=>t.delete(e.clientId)).next(()=>n)})}).catch(()=>[]);if(this.Ui)for(let t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?eA.resolve(!0):tV(e,eW).get(eQ).next(t=>{if(null!==t&&this.ns(t.leaseTimestampMs,5e3)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new O(D.FAILED_PRECONDITION,sZ);return!1}}return!(!this.networkEnabled||!this.inForeground)||tV(e,td).j().next(e=>void 0===this.rs(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,r=!this.inForeground&&e.inForeground,n=this.networkEnabled===e.networkEnabled;if(t||r&&n)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&E(sX,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[eW,td],e=>{let t=new tF(e,eB.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(e=>this.ns(e.updateTimeMs,t)&&!this._s(e.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>tV(e,td).j().next(e=>this.rs(e,18e5).map(e=>e.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return sg.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new sc(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return iJ.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){var n;let i;E(sX,"Starting transaction:",e);let s=18===(n=this.Oi)?tM:17===n?tM:16===n?tL:15===n?tL:14===n?tP:13===n?tP:12===n?tR:11===n?tO:void x(60245);return this.$i.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,n=>(i=new tF(n,this.ui?this.ui.next():eB.ue),"readwrite-primary"===t?this.Ji(i).next(e=>!!e||this.Hi(i)).next(t=>{if(!t)throw T(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new O(D.FAILED_PRECONDITION,eE);return r(i)}).next(e=>this.Zi(i).next(()=>e)):this.Ts(i).next(()=>r(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}Ts(e){return tV(e,eW).get(eQ).next(e=>{if(null!==e&&this.ns(e.leaseTimestampMs,5e3)&&!this._s(e.ownerId)&&!this.Xi(e)&&!(this.xi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new O(D.FAILED_PRECONDITION,sZ)})}Zi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return tV(e,eW).put(eQ,t)}static C(){return ek.C()}Yi(e){let t=tV(e,eW);return t.get(eQ).next(e=>this.Xi(e)?(E(sX,"Releasing primary lease."),t.delete(eQ)):eA.resolve())}ns(e,t){let r=Date.now();return!(e<r-t)&&(!(e>r)||(T(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground="visible"===this.document.visibilityState)}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ni=()=>{this.us();let e=/(?:Version|Mobile)\/1[456]/;(0,h.isSafari)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{let r=null!==(null===(t=this.Ui)||void 0===t?void 0:t.getItem(this.ss(e)));return E(sX,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(e){return T(sX,"Failed to get zombied client id.",e),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){T("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch(e){}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function s2(e,t){let r=e.projectId;return e.isDefaultDatabase||(r+="."+e.database),"firestore/"+t+"/"+r+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=n}static Es(e,t){let r=nv(),n=nv();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new s4(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(0,h.isSafari)()?8:eN((0,h.getUA)())>0?6:4}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.ps(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ys(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new s6;return this.ws(e,t,r).next(n=>{if(i.result=n,this.Rs)return this.Ss(e,t,r,n.size)})}).next(()=>i.result)}Ss(e,t,r,n){return r.documentReadCount<this.Vs?(I()<=c.LogLevel.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",no(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),eA.resolve()):(I()<=c.LogLevel.DEBUG&&E("QueryEngine","Query:",no(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.fs*n?(I()<=c.LogLevel.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",no(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,r7(t))):eA.resolve())}ps(e,t){if(r9(t))return eA.resolve(null);let r=r7(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=r7(t=nn(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=nv(...n);return this.gs.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.bs(t,n);return this.Ds(t,s,i,r.readTime)?this.ps(e,nn(t,null,"F")):this.vs(e,s,t,r)}))})))}ys(e,t,r,n){return r9(t)||n.isEqual(ed.min())?eA.resolve(null):this.gs.getDocuments(e,r).next(i=>{let s=this.bs(t,i);return this.Ds(t,s,r,n)?eA.resolve(null):(I()<=c.LogLevel.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),no(t)),this.vs(e,s,t,ew(n,-1)).next(e=>e))})}bs(e,t){let r=new tK(nu(e));return t.forEach((t,n)=>{na(e,n)&&(r=r.add(n))}),r}Ds(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}ws(e,t,r){return I()<=c.LogLevel.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",no(t)),this.gs.getDocumentsMatchingQuery(e,t,eI.min(),r)}vs(e,t,r,n){return this.gs.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s9="LocalStore";class s3{constructor(e,t,r,n){this.persistence=e,this.Cs=t,this.serializer=n,this.Fs=new tz($),this.Ms=new nc(e=>rX(e),rZ),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sM(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}async function s8(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.Ns(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],o=nv();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(r,o).next(e=>({Bs:e,removedBatchIds:i,addedBatchIds:s}))})})}function s7(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function oe(e,t,r){let n=nv(),i=nv();return r.forEach(e=>n=n.add(e)),t.getEntries(e,n).next(e=>{let n=nh;return r.forEach((r,s)=>{let o=e.get(r);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(r)),s.isNoDocument()&&s.version.isEqual(ed.min())?(t.removeEntry(r,s.readTime),n=n.insert(r,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),n=n.insert(r,s)):E(s9,"Ignoring outdated watch update for ",r,". Current version:",o.version," Watch version:",s.version)}),{Ls:n,ks:i}})}function ot(e,t){return e.persistence.runTransaction("Allocate target","readwrite",r=>{let n;return e.hi.getTargetData(r,t).next(i=>i?(n=i,eA.resolve(n)):e.hi.allocateTargetId(r).next(i=>(n=new iM(t,i,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,n).next(()=>n))))}).then(r=>{let n=e.Fs.get(r.targetId);return(null===n||r.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r})}async function or(e,t,r){let n=e.Fs.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!eR(e))throw e;E(s9,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Fs=e.Fs.remove(t),e.Ms.delete(n.target)}function on(e,t,r){let n=ed.min(),i=nv();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.Ms.get(r);return void 0!==n?eA.resolve(e.Fs.get(n)):e.hi.getTargetData(t,r)})(e,s,r7(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.hi.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Cs.getDocumentsMatchingQuery(s,t,r?n:ed.min(),r?i:nv())).next(r=>(oo(e,nl(t),r),{documents:r,qs:i})))}function oi(e,t){let r=e.hi,n=e.Fs.get(t);return n?Promise.resolve(n.target):e.persistence.runTransaction("Get target data","readonly",e=>r.Et(e,t).next(e=>e?e.target:null))}function os(e,t){let r=e.xs.get(t)||ed.min();return e.persistence.runTransaction("Get new document changes","readonly",n=>e.Os.getAllFromCollectionGroup(n,t,ew(r,-1),Number.MAX_SAFE_INTEGER)).then(r=>(oo(e,t,r),r))}function oo(e,t,r){let n=e.xs.get(t)||ed.min();r.forEach((e,t)=>{t.readTime.compareTo(n)>0&&(n=t.readTime)}),e.xs.set(t,n)}async function oa(e,t,r,n){let i=nv(),s=nh;for(let e of r){let r=t.Qs(e.metadata.name);e.document&&(i=i.add(r));let n=t.$s(e);n.setReadTime(t.Us(e.metadata.readTime)),s=s.insert(r,n)}let o=e.Os.newChangeBuffer({trackRemovals:!0}),a=await ot(e,r7(r5(Y.fromString(`__bundle__/docs/${n}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>oe(t,o,s).next(e=>(o.apply(t),e)).next(r=>e.hi.removeMatchingKeysForTargetId(t,a.targetId).next(()=>e.hi.addMatchingKeys(t,i,a.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,r.Ls,r.ks)).next(()=>r.Ls)))}async function ol(e,t,r=nv()){let n=await ot(e,r7(i$(t.bundledQuery)));return e.persistence.runTransaction("Save named query","readwrite",i=>{let s=im(t.readTime);if(n.snapshotVersion.compareTo(s)>=0)return e.Ti.saveNamedQuery(i,t);let o=n.withResumeToken(tX.EMPTY_BYTE_STRING,s);return e.Fs=e.Fs.insert(o.targetId,o),e.hi.updateTargetData(i,o).next(()=>e.hi.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>e.hi.addMatchingKeys(i,r,n.targetId)).next(()=>e.Ti.saveNamedQuery(i,t))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou="firestore_clients";function oc(e,t){return`${ou}_${e}_${t}`}let oh="firestore_mutations";function od(e,t,r){let n=`${oh}_${e}_${r}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}let of="firestore_targets";function op(e,t){return`${of}_${e}_${t}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let om="SharedClientState";class og{constructor(e,t,r,n){this.user=e,this.batchId=t,this.state=r,this.error=n}static Ks(e,t,r){let n=JSON.parse(r),i,s="object"==typeof n&&-1!==["pending","acknowledged","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(i=new O(n.error.code,n.error.message)),s?new og(e,t,n.state,i):(T(om,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class oy{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ks(e,t){let r=JSON.parse(t),n,i="object"==typeof r&&-1!==["not-current","current","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(n=new O(r.error.code,r.error.message)),i?new oy(e,r.state,n):(T(om,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ov{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){let r=JSON.parse(t),n="object"==typeof r&&r.activeTargetIds instanceof Array,i=nw;for(let e=0;n&&e<r.activeTargetIds.length;++e)n=eG(r.activeTargetIds[e]),i=i.add(r.activeTargetIds[e]);return n?new ov(e,i):(T(om,`Failed to parse client data for instance '${e}': ${t}`),null)}}class ow{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new ow(t.clientId,t.onlineState):(T(om,`Failed to parse online state: ${e}`),null)}}class ob{constructor(){this.activeTargetIds=nw}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oI{constructor(e,t,r,n,i){var s,o,a;this.window=e,this.Fi=t,this.persistenceKey=r,this.js=n,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new tz($),this.started=!1,this.Zs=[];let l=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=oc(this.persistenceKey,this.js),this.eo=(s=this.persistenceKey,`firestore_sequence_number_${s}`),this.Ys=this.Ys.insert(this.js,new ob),this.no=RegExp(`^${ou}_${l}_([^_]*)$`),this.ro=RegExp(`^${oh}_${l}_(\\d+)(?:_(.*))?$`),this.io=RegExp(`^${of}_${l}_(\\d+)$`),this.so=(o=this.persistenceKey,`firestore_online_state_${o}`),this.oo=(a=this.persistenceKey,`firestore_bundle_loaded_v2_${a}`),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){let e=await this.syncEngine.Ps();for(let t of e){if(t===this.js)continue;let e=this.getItem(oc(this.persistenceKey,t));if(e){let r=ov.Ks(t,e);r&&(this.Ys=this.Ys.insert(r.clientId,r))}}this._o();let t=this.storage.getItem(this.so);if(t){let e=this.ao(t);e&&this.uo(e)}for(let e of this.Zs)this.Hs(e);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach((r,n)=>{n.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,r){this.lo(e,t,r),this.ho(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){let t=this.storage.getItem(op(this.persistenceKey,e));if(t){let n=oy.Ks(e,t);n&&(r=n.state)}}return t&&this.Po.Gs(e),this._o(),r}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(op(this.persistenceKey,e))}updateQueryState(e,t,r){this.To(e,t,r)}handleUserChange(e,t,r){t.forEach(e=>{this.ho(e)}),this.currentUser=e,r.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return E(om,"READ",e,t),t}setItem(e,t){E(om,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){E(om,"REMOVE",e),this.storage.removeItem(e)}Hs(e){if(e.storageArea===this.storage){if(E(om,"EVENT",e.key,e.newValue),e.key===this.Xs)return void T("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.no.test(e.key)){if(null==e.newValue){let t=this.Ao(e.key);return this.Ro(t,null)}{let t=this.Vo(e.key,e.newValue);if(t)return this.Ro(t.clientId,t)}}else if(this.ro.test(e.key)){if(null!==e.newValue){let t=this.mo(e.key,e.newValue);if(t)return this.fo(t)}}else if(this.io.test(e.key)){if(null!==e.newValue){let t=this.po(e.key,e.newValue);if(t)return this.yo(t)}}else if(e.key===this.so){if(null!==e.newValue){let t=this.ao(e.newValue);if(t)return this.uo(t)}}else if(e.key===this.eo){let t=function(e){let t=eB.ue;if(null!=e)try{let r=JSON.parse(e);k("number"==typeof r,30636,{wo:e}),t=r}catch(e){T(om,"Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==eB.ue&&this.sequenceNumberHandler(t)}else if(e.key===this.oo){let t=this.So(e.newValue);await Promise.all(t.map(e=>this.syncEngine.bo(e)))}}}else this.Zs.push(e)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,r){let n=new og(this.currentUser,e,t,r),i=od(this.persistenceKey,this.currentUser,e);this.setItem(i,n.Ws())}ho(e){let t=od(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){let t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,r){let n=op(this.persistenceKey,e),i=new oy(e,t,r);this.setItem(n,i.Ws())}Eo(e){let t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){let t=this.no.exec(e);return t?t[1]:null}Vo(e,t){let r=this.Ao(e);return ov.Ks(r,t)}mo(e,t){let r=this.ro.exec(e),n=Number(r[1]),i=void 0!==r[2]?r[2]:null;return og.Ks(new v(i),n,t)}po(e,t){let r=this.io.exec(e),n=Number(r[1]);return oy.Ks(n,t)}ao(e){return ow.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);E(om,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){let r=t?this.Ys.insert(e,t):this.Ys.remove(e),n=this.co(this.Ys),i=this.co(r),s=[],o=[];return i.forEach(e=>{n.has(e)||s.push(e)}),n.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.Co(s,o).then(()=>{this.Ys=r})}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=nw;return e.forEach((e,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class o_{constructor(){this.Fo=new ob,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ob,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oT="ConnectivityMonitor";class oS{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){for(let e of(E(oT,"Network connectivity changed: AVAILABLE"),this.ko))e(0)}Lo(){for(let e of(E(oT,"Network connectivity changed: UNAVAILABLE"),this.ko))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oA=null;function ox(){return null===oA?oA=268435456+Math.round(2147483648*Math.random()):oA++,"0x"+oA.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oC="RestConnection",ok={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oN{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${n}`,this.Ko=this.databaseId.database===rt?`project_id=${r}`:`project_id=${r}&database_id=${n}`}Wo(e,t,r,n,i){let s=ox(),o=this.Go(e,t.toUriEncodedString());E(oC,`Sending RPC '${e}' ${s}:`,o,r);let a={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(a,n,i);let{host:l}=new URL(o),u=(0,h.isCloudWorkstation)(l);return this.jo(e,o,a,r,u).then(t=>(E(oC,`Received RPC '${e}' ${s}: `,t),t),t=>{throw S(oC,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",r),t})}Jo(e,t,r,n,i,s){return this.Wo(e,t,r,n,i)}zo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+w,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}Go(e,t){let r=ok[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oO="WebChannelConnection";class oR extends oN{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,n,i){let s=ox();return new Promise((i,o)=>{let a=new f.XhrIo;a.setWithCredentials(!0),a.listenOnce(f.EventType.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case f.ErrorCode.NO_ERROR:let t=a.getResponseJson();E(oO,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case f.ErrorCode.TIMEOUT:E(oO,`RPC '${e}' ${s} timed out`),o(new O(D.DEADLINE_EXCEEDED,"Request time out"));break;case f.ErrorCode.HTTP_ERROR:let r=a.getStatus();if(E(oO,`RPC '${e}' ${s} failed with status:`,r,"response text:",a.getResponseText()),r>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(t)>=0?t:D.UNKNOWN}(t.status);o(new O(e,t.message))}else o(new O(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new O(D.UNAVAILABLE,"Connection failed."));break;default:x(9055,{c_:e,streamId:s,l_:a.getLastErrorCode(),h_:a.getLastError()})}}finally{E(oO,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(n);E(oO,`RPC '${e}' ${s} sending request:`,n),a.send(t,"POST",l,r,15)})}P_(e,t,r){let i=ox(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=(0,f.createWebChannelTransport)(),a=(0,f.getStatEventTarget)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let c=s.join("");E(oO,`Creating RPC '${e}' stream ${i}: ${c}`,l);let h=o.createWebChannel(c,l);this.T_(h);let d=!1,p=!1,m=new oD({Ho:t=>{p?E(oO,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(E(oO,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),E(oO,`RPC '${e}' stream ${i} sending:`,t),h.send(t))},Yo:()=>h.close()}),g=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(h,f.WebChannel.EventType.OPEN,()=>{p||(E(oO,`RPC '${e}' stream ${i} transport opened.`),m.s_())}),g(h,f.WebChannel.EventType.CLOSE,()=>{p||(p=!0,E(oO,`RPC '${e}' stream ${i} transport closed`),m.__(),this.I_(h))}),g(h,f.WebChannel.EventType.ERROR,t=>{p||(p=!0,S(oO,`RPC '${e}' stream ${i} transport errored. Name:`,t.name,"Message:",t.message),m.__(new O(D.UNAVAILABLE,"The operation could not be completed")))}),g(h,f.WebChannel.EventType.MESSAGE,t=>{var r;if(!p){let s=t.data[0];k(!!s,16349);let o=(null==s?void 0:s.error)||(null===(r=s[0])||void 0===r?void 0:r.error);if(o){E(oO,`RPC '${e}' stream ${i} received error:`,o);let t=o.status,r=function(e){let t=n[e];if(void 0!==t)return n0(t)}(t),s=o.message;void 0===r&&(r=D.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),p=!0,m.__(new O(r,s)),h.close()}else E(oO,`RPC '${e}' stream ${i} received:`,s),m.a_(s)}}),g(a,f.Event.STAT_EVENT,t=>{t.stat===f.Stat.PROXY?E(oO,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===f.Stat.NOPROXY&&E(oO,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.o_()},0),m}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(){return"undefined"!=typeof window?window:null}function oL(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(e){return new ic(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e,t,r=1e3,n=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=n,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();let t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),n=Math.max(0,t-r);n>0&&E("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,n,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oV="PersistentStream";class oU{constructor(e,t,r,n,i,s,o,a){this.Fi=e,this.w_=r,this.S_=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new oF(e,t)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.C_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,4!==e?this.F_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(T(t.toString()),T("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===D.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;let e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.b_===t&&this.W_(e,r)},t=>{e(()=>{let e=new O(D.UNKNOWN,"Fetching auth token failed: "+t.message);return this.G_(e)})})}W_(e,t){let r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(e=>{r(()=>this.G_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.C_?this.j_(e):this.onNext(e))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return E(oV,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(E(oV,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oj extends oU{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:x(39313,{state:n}),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(k(void 0===i||"string"==typeof i,58123),tX.fromBase64String(i||"")):(k(void 0===i||i instanceof m||i instanceof Uint8Array,16193),tX.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?D.UNKNOWN:n0(e.code);return new O(t,e.message||"")}(l);r=new it(s,o,a,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=ib(e,n.document.name),s=im(n.document.updateTime),o=n.document.createTime?im(n.document.createTime):ed.min(),a=new rC({mapValue:{fields:n.document.fields}}),l=rk.newFoundDocument(i,s,o,a),u=n.targetIds||[],c=n.removedTargetIds||[];r=new n7(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=ib(e,n.document),s=n.readTime?im(n.readTime):ed.min(),o=rk.newNoDocument(i,s),a=n.removedTargetIds||[];r=new n7([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=ib(e,n.document),s=n.removedTargetIds||[];r=new n7([],s,i,null)}else{if(!("filter"in t))return x(11601,{At:t});{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new nX(n,i),o=e.targetId;r=new ie(o,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return ed.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?ed.min():t.readTime?im(t.readTime):ed.min()}(e);return this.listener.J_(t,r)}H_(e){let t={};t.database=iE(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=r0(n)?{documents:ik(e,n)}:{query:iN(e,n).Vt}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=ip(e,t.resumeToken);let n=ih(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(ed.min())>0){r.readTime=id(e,t.snapshotVersion.toTimestamp());let n=ih(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:e})}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){let t={};t.database=iE(this.serializer),t.removeTarget=e,this.k_(t)}}class oB extends oU{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return k(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,k(!e.writeResults||0===e.writeResults.length,55816),this.listener.ea()}onNext(e){var t,r;k(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(k(void 0!==r,14353),t.map(e=>{let t;return(t=e.updateTime?im(e.updateTime):im(r)).isEqual(ed.min())&&(t=im(r)),new nP(t,e.transformResults||[])})):[]),i=im(e.commitTime);return this.listener.ta(i,n)}na(){let e={};e.database=iE(this.serializer),this.k_(e)}X_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>ix(this.serializer,e))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oq{}class oz extends oq{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.ra=!1}ia(){if(this.ra)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,n){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Wo(e,iy(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new O(D.UNKNOWN,e.toString())})}Jo(e,t,r,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Jo(e,iy(t,r),n,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new O(D.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class oG{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(T(t),this._a=!1):E("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o$="RemoteStore";class oK{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(e=>{r.enqueueAndForget(async()=>{o1(this)&&(E(o$,"Restarting streams for network reachability change."),await async function(e){e.Ia.add(4),await oW(e),e.Aa.set("Unknown"),e.Ia.delete(4),await oH(e)}(this))})}),this.Aa=new oG(r,n)}}async function oH(e){if(o1(e))for(let t of e.da)await t(!0)}async function oW(e){for(let t of e.da)await t(!1)}function oQ(e,t){e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),o0(e)?oZ(e):aa(e).x_()&&oY(e,t))}function oJ(e,t){let r=aa(e);e.Ta.delete(t),r.x_()&&oX(e,t),0===e.Ta.size&&(r.x_()?r.B_():o1(e)&&e.Aa.set("Unknown"))}function oY(e,t){if(e.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ed.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}aa(e).H_(t)}function oX(e,t){e.Ra.$e(t),aa(e).Y_(t)}function oZ(e){e.Ra=new ii({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),aa(e).start(),e.Aa.aa()}function o0(e){return o1(e)&&!aa(e).M_()&&e.Ta.size>0}function o1(e){return 0===e.Ia.size}async function o2(e){e.Aa.set("Online")}async function o4(e){e.Ta.forEach((t,r)=>{oY(e,t)})}async function o6(e,t){e.Ra=void 0,o0(e)?(e.Aa.la(t),oZ(e)):e.Aa.set("Unknown")}async function o5(e,t,r){if(e.Aa.set("Online"),t instanceof it&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.Ta.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.Ta.delete(n),e.Ra.removeTarget(n))}(e,t)}catch(r){E(o$,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await o9(e,r)}else if(t instanceof n7?e.Ra.Ye(t):t instanceof ie?e.Ra.it(t):e.Ra.et(t),!r.isEqual(ed.min()))try{let t=await s7(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.Ra.Pt(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.Ta.get(n);i&&e.Ta.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.Ta.get(t);if(!n)return;e.Ta.set(t,n.withResumeToken(tX.EMPTY_BYTE_STRING,n.snapshotVersion)),oX(e,t);let i=new iM(n.target,t,r,n.sequenceNumber);oY(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){E(o$,"Failed to raise snapshot:",t),await o9(e,t)}}async function o9(e,t,r){if(!eR(t))throw t;e.Ia.add(1),await oW(e),e.Aa.set("Offline"),r||(r=()=>s7(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E(o$,"Retrying IndexedDB access"),await r(),e.Ia.delete(1),await oH(e)})}function o3(e,t){return t().catch(r=>o9(e,r,t))}async function o8(e){let t=al(e),r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:-1;for(;o1(e)&&e.Pa.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.Pa.length&&t.B_();break}r=n.batchId,function(e,t){e.Pa.push(t);let r=al(e);r.x_()&&r.Z_&&r.X_(t.mutations)}(e,n)}catch(t){await o9(e,t)}o7(e)&&ae(e)}function o7(e){return o1(e)&&!al(e).M_()&&e.Pa.length>0}function ae(e){al(e).start()}async function at(e){al(e).na()}async function ar(e){let t=al(e);for(let r of e.Pa)t.X_(r.mutations)}async function an(e,t,r){let n=e.Pa.shift(),i=nQ.from(n,t,r);await o3(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await o8(e)}async function ai(e,t){t&&al(e).Z_&&await async function(e,t){var r;if(nZ(r=t.code)&&r!==D.ABORTED){let r=e.Pa.shift();al(e).N_(),await o3(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await o8(e)}}(e,t),o7(e)&&ae(e)}async function as(e,t){e.asyncQueue.verifyOperationInProgress(),E(o$,"RemoteStore received new credentials");let r=o1(e);e.Ia.add(3),await oW(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await oH(e)}async function ao(e,t){t?(e.Ia.delete(2),await oH(e)):t||(e.Ia.add(2),await oW(e),e.Aa.set("Unknown"))}function aa(e){var t,r,n;return e.Va||(e.Va=(t=e.datastore,r=e.asyncQueue,n={Zo:o2.bind(null,e),e_:o4.bind(null,e),n_:o6.bind(null,e),J_:o5.bind(null,e)},t.ia(),new oj(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.da.push(async t=>{t?(e.Va.N_(),o0(e)?oZ(e):e.Aa.set("Unknown")):(await e.Va.stop(),e.Ra=void 0)})),e.Va}function al(e){var t,r,n;return e.ma||(e.ma=(t=e.datastore,r=e.asyncQueue,n={Zo:()=>Promise.resolve(),e_:at.bind(null,e),n_:ai.bind(null,e),ea:ar.bind(null,e),ta:an.bind(null,e)},t.ia(),new oB(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.da.push(async t=>{t?(e.ma.N_(),await o8(e)):(await e.ma.stop(),e.Pa.length>0&&(E(o$,`Stopping write stream with ${e.Pa.length} pending writes`),e.Pa=[]))})),e.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new R,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,o=new au(e,t,s,n,i);return o.start(r),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new O(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ac(e,t){if(T("AsyncQueue",`${t}: ${e}`),eR(e))return new O(D.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{static emptySet(e){return new ah(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ee.comparator(t.key,r.key):(e,t)=>ee.comparator(e.key,t.key),this.keyedMap=nf(),this.sortedSet=new tz(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ah)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new ah;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.fa=new tz(ee.comparator)}track(e){let t=e.doc.key,r=this.fa.get(t);r?0!==e.type&&3===r.type?this.fa=this.fa.insert(t,e):3===e.type&&1!==r.type?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.fa=this.fa.remove(t):1===e.type&&2===r.type?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):x(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){let e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class af{constructor(e,t,r,n,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new af(e,t,ah.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ni(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class am{constructor(){this.queries=ag(),this.onlineState="Unknown",this.Da=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=ag(),r.forEach((e,r)=>{for(let e of r.wa)e.onError(t)})}(this,new O(D.ABORTED,"Firestore shutting down"))}}function ag(){return new nc(e=>ns(e),ni)}async function ay(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.Sa()&&t.ba()&&(r=2):(i=new ap,r=t.ba()?0:1);try{switch(r){case 0:i.ya=await e.onListen(n,!0);break;case 1:i.ya=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=ac(r,`Initialization of query '${no(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.wa.push(t),t.va(e.onlineState),i.ya&&t.Ca(i.ya)&&aI(e)}async function av(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.wa.indexOf(t);e>=0&&(i.wa.splice(e,1),0===i.wa.length?n=t.ba()?0:1:!i.Sa()&&t.ba()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function aw(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.wa)e.Ca(n)&&(r=!0);i.ya=n}}r&&aI(e)}function ab(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.wa)e.onError(r);e.queries.delete(t)}function aI(e){e.Da.forEach(e=>{e.next()})}(o=s||(s={})).Fa="default",o.Cache="cache";class a_{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new af(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){return!(e.fromCache&&this.ba())||(!this.options.ka||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Na(e){if(e.docChanges.length>0)return!0;let t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}La(e){e=af.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==s.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t){this.qa=e,this.byteLength=t}Qa(){return"metadata"in this.qa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.serializer=e}Qs(e){return ib(this.serializer,e)}$s(e){return e.metadata.exists?iA(this.serializer,e.document,!1):rk.newNoDocument(this.Qs(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return im(e)}}class aS{constructor(e,t){this.$a=e,this.serializer=t,this.Ua=[],this.Ka=[],this.collectionGroups=new Set,this.progress=aA(e)}get queries(){return this.Ua}get documents(){return this.Ka}Wa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.qa.namedQuery)this.Ua.push(e.qa.namedQuery);else if(e.qa.documentMetadata){this.Ka.push({metadata:e.qa.documentMetadata}),e.qa.documentMetadata.exists||++t;let r=Y.fromString(e.qa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.qa.document&&(this.Ka[this.Ka.length-1].document=e.qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ga(e){let t=new Map,r=new aT(this.serializer);for(let n of e)if(n.metadata.queries){let e=r.Qs(n.metadata.name);for(let r of n.metadata.queries){let n=(t.get(r)||nv()).add(e);t.set(r,n)}}return t}async za(e){let t=await oa(e,new aT(this.serializer),this.Ka,this.$a.id),r=this.Ga(this.documents);for(let t of this.Ua)await ol(e,t,r.get(t.name));return this.progress.taskState="Success",{progress:this.progress,ja:this.collectionGroups,Ja:t}}}function aA(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e){this.key=e}}class aC{constructor(e){this.key=e}}class ak{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=nv(),this.mutatedKeys=nv(),this.Xa=nu(e),this.eu=new ah(this.Xa)}get tu(){return this.Ha}nu(e,t){let r=t?t.ru:new ad,n=t?t.eu:this.eu,i=t?t.mutatedKeys:this.mutatedKeys,s=n,o=!1,a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),c=na(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(r.track({type:3,doc:c}),f=!0):this.iu(u,c)||(r.track({type:2,doc:c}),f=!0,(a&&this.Xa(c,a)>0||l&&0>this.Xa(c,l))&&(o=!0)):!u&&c?(r.track({type:0,doc:c}),f=!0):u&&!c&&(r.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{eu:s,ru:r,Ds:o,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;let s=e.ru.pa();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{At:e})}};return r(e)-r(t)})(e.type,t.type)||this.Xa(e.doc,t.doc)),this.su(r),n=null!=n&&n;let o=t&&!n?this.ou():[],a=0===this.Za.size&&this.current&&!n?1:0,l=a!==this.Ya;return(this.Ya=a,0!==s.length||l)?{snapshot:new af(this.query,e.eu,i,s,e.mutatedKeys,0===a,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:o}:{_u:o}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ad,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=e.current)}ou(){if(!this.current)return[];let e=this.Za;this.Za=nv(),this.eu.forEach(e=>{this.au(e.key)&&(this.Za=this.Za.add(e.key))});let t=[];return e.forEach(e=>{this.Za.has(e)||t.push(new aC(e))}),this.Za.forEach(r=>{e.has(r)||t.push(new ax(r))}),t}uu(e){this.Ha=e.qs,this.Za=nv();let t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return af.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,0===this.Ya,this.hasCachedResults)}}let aN="SyncEngine";class aD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class aO{constructor(e){this.key=e,this.lu=!1}}class aR{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.hu={},this.Pu=new nc(e=>ns(e),ni),this.Tu=new Map,this.Iu=new Set,this.du=new tz(ee.comparator),this.Eu=new Map,this.Au=new sj,this.Ru={},this.Vu=new Map,this.mu=sw.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return!0===this.fu}}async function aP(e,t,r=!0){let n;let i=lt(e),s=i.Pu.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.cu()):n=await aM(i,t,r,!0),n}async function aL(e,t){let r=lt(e);await aM(r,t,!0,!1)}async function aM(e,t,r,n){let i;let s=await ot(e.localStore,r7(t)),o=s.targetId,a=e.sharedClientState.addLocalQueryTarget(o,r);return n&&(i=await aF(e,t,o,"current"===a,s.resumeToken)),e.isPrimaryClient&&r&&oQ(e.remoteStore,s),i}async function aF(e,t,r,n,i){e.gu=(t,r,n)=>(async function(e,t,r,n){let i=t.view.nu(r);i.Ds&&(i=await on(e.localStore,t.query,!1).then(({documents:e})=>t.view.nu(e,i)));let s=n&&n.targetChanges.get(t.targetId),o=n&&null!=n.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return aY(e,t.targetId,a._u),a.snapshot})(e,t,r,n);let s=await on(e.localStore,t,!0),o=new ak(t,s.qs),a=o.nu(s.documents),l=n8.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);aY(e,r,u._u);let c=new aD(t,r,o);return e.Pu.set(t,c),e.Tu.has(r)?e.Tu.get(r).push(t):e.Tu.set(r,[t]),u.snapshot}async function aV(e,t,r){let n=e.Pu.get(t),i=e.Tu.get(n.targetId);if(i.length>1)return e.Tu.set(n.targetId,i.filter(e=>!ni(e,t))),void e.Pu.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await or(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&oJ(e.remoteStore,n.targetId),aQ(e,n.targetId)}).catch(eS)):(aQ(e,n.targetId),await or(e.localStore,n.targetId,!0))}async function aU(e,t){let r=e.Pu.get(t),n=e.Tu.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),oJ(e.remoteStore,r.targetId))}async function aj(e,t,r){let n=lr(e);try{var i;let e;let s=await function(e,t){let r,n;let i=eh.now(),s=t.reduce((e,t)=>e.add(t.key),nv());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=nh,l=nv();return e.Os.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=nT(n.transform,e||null);null!=i&&(null===r&&(r=rC.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new nq(e.key,t,function e(t){let r=[];return tj(t.fields,(t,n)=>{let i=new Z([t]);if(rI(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new tQ(r)}(t.value.mapValue),nL.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:np(r)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=n.Ru[n.currentUser.toKey()])||(e=new tz($)),e=e.insert(i,r),n.Ru[n.currentUser.toKey()]=e,await aZ(n,s.changes),await o8(n.remoteStore)}catch(t){let e=ac(t,"Failed to persist write");r.reject(e)}}async function aB(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let s=e.Os.newChangeBuffer({trackRemovals:!0});n=e.Fs;let o=[];t.targetChanges.forEach((s,a)=>{let l=n.get(a);if(!l)return;o.push(e.hi.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.hi.addMatchingKeys(i,s.addedDocuments,a)));let u=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(tX.EMPTY_BYTE_STRING,ed.min()).withLastLimboFreeSnapshotVersion(ed.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),n=n.insert(a,u),function(e,t,r){if(0===e.resumeToken.approximateByteSize())return!0;let n=t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds();if(n>=3e8)return!0;let i=r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size;return i>0}(l,u,s)&&o.push(e.hi.updateTargetData(i,u))});let a=nh,l=nv();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),o.push(oe(i,s,t.documentUpdates).next(e=>{a=e.Ls,l=e.ks})),!r.isEqual(ed.min())){let t=e.hi.getLastRemoteSnapshotVersion(i).next(t=>e.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));o.push(t)}return eA.waitFor(o).next(()=>s.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,a,l)).next(()=>a)}).then(t=>(e.Fs=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Eu.get(r);n&&(k(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?n.lu=!0:t.modifiedDocuments.size>0?k(n.lu,14607):t.removedDocuments.size>0&&(k(n.lu,42227),n.lu=!1))}),await aZ(e,r,t)}catch(e){await eS(e)}}function aq(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.Pu.forEach((e,r)=>{let n=r.view.va(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.wa)e.va(t)&&(r=!0)}),r&&aI(n),i.length&&e.hu.J_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function az(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Eu.get(t),i=n&&n.key;if(i){let r=new tz(ee.comparator);r=r.insert(i,rk.newNoDocument(i,ed.min()));let n=nv().add(i),s=new n3(ed.min(),new Map,new tz($),r,n);await aB(e,s),e.du=e.du.remove(i),e.Eu.delete(t),aX(e)}else await or(e.localStore,t,!1).then(()=>aQ(e,t,r)).catch(eS)}async function aG(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.Os.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),o=eA.resolve();return s.forEach(e=>{o=o.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);k(null!==s,48541),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nv();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});aW(e,n,null),aH(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await aZ(e,i)}catch(e){await eS(e)}}async function a$(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(k(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});aW(e,t,r),aH(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await aZ(e,i)}catch(e){await eS(e)}}async function aK(e,t){var r;o1(e.remoteStore)||E(aN,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let n=await (r=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>r.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===n)return void t.resolve();let i=e.Vu.get(n)||[];i.push(t),e.Vu.set(n,i)}catch(r){let e=ac(r,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function aH(e,t){(e.Vu.get(t)||[]).forEach(e=>{e.resolve()}),e.Vu.delete(t)}function aW(e,t,r){let n=e.Ru[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.Ru[e.currentUser.toKey()]=n}}function aQ(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Tu.get(t)))e.Pu.delete(n),r&&e.hu.pu(n,r);e.Tu.delete(t),e.isPrimaryClient&&e.Au.zr(t).forEach(t=>{e.Au.containsKey(t)||aJ(e,t)})}function aJ(e,t){e.Iu.delete(t.path.canonicalString());let r=e.du.get(t);null!==r&&(oJ(e.remoteStore,r),e.du=e.du.remove(t),e.Eu.delete(r),aX(e))}function aY(e,t,r){for(let n of r)n instanceof ax?(e.Au.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.du.get(r)||e.Iu.has(n)||(E(aN,"New document in limbo: "+r),e.Iu.add(n),aX(e))}(e,n)):n instanceof aC?(E(aN,"Document no longer in limbo: "+n.key),e.Au.removeReference(n.key,t),e.Au.containsKey(n.key)||aJ(e,n.key)):x(19791,{yu:n})}function aX(e){for(;e.Iu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){let t=e.Iu.values().next().value;e.Iu.delete(t);let r=new ee(Y.fromString(t)),n=e.mu.next();e.Eu.set(n,new aO(r)),e.du=e.du.insert(r,n),oQ(e.remoteStore,new iM(r7(r5(r.path)),n,"TargetPurposeLimboResolution",eB.ue))}}async function aZ(e,t,r){let n=[],i=[],s=[];e.Pu.isEmpty()||(e.Pu.forEach((o,a)=>{s.push(e.gu(a,t,r).then(t=>{var s;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(s=null==r?void 0:r.targetChanges.get(a.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(a.targetId,n?"current":"not-current")}if(t){n.push(t);let e=s4.Es(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.hu.J_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>eA.forEach(t,t=>eA.forEach(t.Is,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>eA.forEach(t.ds,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!eR(e))throw e;E(s9,"Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.Fs.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.Fs=e.Fs.insert(t,i)}}}(e.localStore,i))}async function a0(e,t){if(!e.currentUser.isEqual(t)){E(aN,"User change. New user:",t.toKey());let r=await s8(e.localStore,t);e.currentUser=t,e.Vu.forEach(e=>{e.forEach(e=>{e.reject(new O(D.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Vu.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await aZ(e,r.Bs)}}function a1(e,t){let r=e.Eu.get(t);if(r&&r.lu)return nv().add(r.key);{let r=nv(),n=e.Tu.get(t);if(!n)return r;for(let t of n){let n=e.Pu.get(t);r=r.unionWith(n.view.tu)}return r}}async function a2(e,t){let r=await on(e.localStore,t.query,!0),n=t.view.uu(r);return e.isPrimaryClient&&aY(e,t.targetId,n._u),n}async function a4(e,t){return os(e.localStore,t).then(t=>aZ(e,t))}async function a6(e,t,r,n){let i=await function(e,t){let r=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",n=>r.Xn(n,t).next(t=>t?e.localDocuments.getDocuments(n,t):eA.resolve(null)))}(e.localStore,t);null!==i?("pending"===r?await o8(e.remoteStore):"acknowledged"===r||"rejected"===r?(aW(e,t,n||null),aH(e,t),function(e,t){e.mutationQueue.rr(t)}(e.localStore,t)):x(6720,"Unknown batchState",{wu:r}),await aZ(e,i)):E(aN,"Cannot apply mutation batch with id: "+t)}async function a5(e,t){if(lt(e),lr(e),!0===t&&!0!==e.fu){let t=e.sharedClientState.getAllActiveQueryTargets(),r=await a9(e,t.toArray());for(let t of(e.fu=!0,await ao(e.remoteStore,!0),r))oQ(e.remoteStore,t)}else if(!1===t&&!1!==e.fu){let t=[],r=Promise.resolve();e.Tu.forEach((n,i)=>{e.sharedClientState.isLocalQueryTarget(i)?t.push(i):r=r.then(()=>(aQ(e,i),or(e.localStore,i,!0))),oJ(e.remoteStore,i)}),await r,await a9(e,t),e.Eu.forEach((t,r)=>{oJ(e.remoteStore,r)}),e.Au.jr(),e.Eu=new Map,e.du=new tz(ee.comparator),e.fu=!1,await ao(e.remoteStore,!1)}}async function a9(e,t,r){let n=[],i=[];for(let r of t){let t;let s=e.Tu.get(r);if(s&&0!==s.length)for(let r of(t=await ot(e.localStore,r7(s[0])),s)){let t=e.Pu.get(r),n=await a2(e,t);n.snapshot&&i.push(n.snapshot)}else{let n=await oi(e.localStore,r);t=await ot(e.localStore,n),await aF(e,a3(n),r,!1,t.resumeToken)}n.push(t)}return e.hu.J_(i),n}function a3(e){var t,r,n,i;return t=e.path,r=e.collectionGroup,n=e.orderBy,i=e.filters,new r6(t,r,n,i,e.limit,"F",e.startAt,e.endAt)}function a8(e){return e.localStore.persistence.Ps()}async function a7(e,t,r,n){if(e.fu)return void E(aN,"Ignoring unexpected query state notification.");let i=e.Tu.get(t);if(i&&i.length>0)switch(r){case"current":case"not-current":{let n=await os(e.localStore,nl(i[0])),s=n3.createSynthesizedRemoteEventForCurrentChange(t,"current"===r,tX.EMPTY_BYTE_STRING);await aZ(e,n,s);break}case"rejected":await or(e.localStore,t,!0),aQ(e,t,n);break;default:x(64155,r)}}async function le(e,t,r){let n=lt(e);if(n.fu){for(let e of t){if(n.Tu.has(e)&&n.sharedClientState.isActiveQueryTarget(e)){E(aN,"Adding an already active target "+e);continue}let t=await oi(n.localStore,e),r=await ot(n.localStore,t);await aF(n,a3(t),r.targetId,!1,r.resumeToken),oQ(n.remoteStore,r)}for(let e of r)n.Tu.has(e)&&await or(n.localStore,e,!1).then(()=>{oJ(n.remoteStore,e),aQ(n,e)}).catch(eS)}}function lt(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=aB.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=a1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=az.bind(null,e),e.hu.J_=aw.bind(null,e.eventManager),e.hu.pu=ab.bind(null,e.eventManager),e}function lr(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=aG.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=a$.bind(null,e),e}class ln{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oM(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){var t;return t=this.persistence,new s3(t,new s5,e.initialUser,this.serializer)}Du(e){return new sK(sW.Vi,this.serializer)}bu(e){return new o_}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ln.provider={build:()=>new ln};class li extends ln{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){k(this.persistence.referenceDelegate instanceof sQ,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new sS(r,e.asyncQueue,t)}Du(e){let t=void 0!==this.cacheSizeBytes?sf.withCacheSize(this.cacheSizeBytes):sf.DEFAULT;return new sK(e=>sQ.Vi(e,t),this.serializer)}}class ls extends ln{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await lr(this.Mu.syncEngine),await o8(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){var t;return t=this.persistence,new s3(t,new s5,e.initialUser,this.serializer)}Cu(e,t){let r=this.persistence.referenceDelegate.garbageCollector;return new sS(r,e.asyncQueue,t)}Fu(e,t){let r=new ej(t,this.persistence);return new eU(e.asyncQueue,r)}Du(e){let t=s2(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=void 0!==this.cacheSizeBytes?sf.withCacheSize(this.cacheSizeBytes):sf.DEFAULT;return new s1(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,oP(),oL(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new o_}}class lo extends ls{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.Mu.syncEngine;this.sharedClientState instanceof oI&&(this.sharedClientState.syncEngine={Do:a6.bind(null,t),vo:a7.bind(null,t),Co:le.bind(null,t),Ps:a8.bind(null,t),bo:a4.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji(async e=>{await a5(this.Mu.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}bu(e){let t=oP();if(!oI.C(t))throw new O(D.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let r=s2(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new oI(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class la{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>aq(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=a0.bind(null,this.syncEngine),await ao(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new am}createDatastore(e){let t=oM(e.databaseInfo.databaseId),r=new oR(e.databaseInfo);return new oz(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new oK(t,this.datastore,e.asyncQueue,e=>aq(this.syncEngine,e,0),oS.C()?new oS:new oE)}createSyncEngine(e,t){return function(e,t,r,n,i,s,o){let a=new aR(e,t,r,n,i,s);return o&&(a.fu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){E(o$,"RemoteStore shutting down."),e.Ia.add(5),await oW(e),e.Ea.shutdown(),e.Aa.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}function ll(e,t=10240){let r=0;return{async read(){if(r<e.byteLength){let n={value:e.slice(r,r+t),done:!1};return r+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}la.provider={build:()=>new la};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):T("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t){this.Nu=e,this.serializer=t,this.metadata=new R,this.buffer=new Uint8Array,this.Bu=new TextDecoder("utf-8"),this.Lu().then(e=>{e&&e.Qa()?this.metadata.resolve(e.qa.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.qa)}`))},e=>this.metadata.reject(e))}close(){return this.Nu.cancel()}async getMetadata(){return this.metadata.promise}async Su(){return await this.getMetadata(),this.Lu()}async Lu(){let e=await this.ku();if(null===e)return null;let t=this.Bu.decode(e),r=Number(t);isNaN(r)&&this.qu(`length string (${t}) is not valid number`);let n=await this.Qu(r);return new aE(JSON.parse(n),e.length+r)}$u(){return this.buffer.findIndex(e=>123===e)}async ku(){for(;0>this.$u()&&!await this.Uu(););if(0===this.buffer.length)return null;let e=this.$u();e<0&&this.qu("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Qu(e){for(;this.buffer.length<e;)await this.Uu()&&this.qu("Reached the end of bundle when more is expected.");let t=this.Bu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}qu(e){throw this.Nu.cancel(),Error(`Invalid bundle format: ${e}`)}async Uu(){let e=await this.Nu.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let r=this.Su();if(!r||!r.Qa())throw Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(null==r?void 0:r.qa)}`);this.metadata=r;do null!==(r=this.Su())&&this.elements.push(r);while(null!==r)}getMetadata(){return this.metadata}Ku(){return this.elements}Su(){if(this.cursor===this.bundleData.length)return null;let e=this.ku(),t=this.Qu(e);return new aE(JSON.parse(t),e)}Qu(e){if(this.cursor+e>this.bundleData.length)throw new O(D.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}ku(){let e=this.cursor,t=this.cursor;for(;t<this.bundleData.length;){if("{"===this.bundleData[t]){if(t===e)throw Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw Error("Reached the end of bundle when more is expected.")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new O(D.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(e,t){let r={documents:t.map(t=>iw(e.serializer,t))},n=await e.Jo("BatchGetDocuments",e.serializer.databaseId,Y.emptyPath(),r,t.length),i=new Map;n.forEach(t=>{var r;let n=(r=e.serializer,"found"in t?function(e,t){k(!!t.found,43571),t.found.name,t.found.updateTime;let r=ib(e,t.found.name),n=im(t.found.updateTime),i=t.found.createTime?im(t.found.createTime):ed.min(),s=new rC({mapValue:{fields:t.found.fields}});return rk.newFoundDocument(r,n,i,s)}(r,t):"missing"in t?function(e,t){k(!!t.missing,3894),k(!!t.readTime,22933);let r=ib(e,t.missing),n=im(t.readTime);return rk.newNoDocument(r,n)}(r,t):x(7234,{result:t}));i.set(n.key.toString(),n)});let s=[];return t.forEach(e=>{let t=i.get(e.toString());k(!!t,55234,{key:e}),s.push(t)}),s}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new nK(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let r=ee.fromPath(t);this.mutations.push(new nH(r,this.precondition(r)))}),await async function(e,t){let r={writes:t.map(t=>ix(e.serializer,t))};await e.Wo("Commit",e.serializer.databaseId,Y.emptyPath(),r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw x(50498,{Wu:e.constructor.name});t=ed.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new O(D.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ed.min())?nL.exists(!1):nL.updateTime(t):nL.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ed.min()))throw new O(D.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nL.updateTime(t)}return nL.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,r,n,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=n,this.deferred=i,this.Gu=r.maxAttempts,this.F_=new oF(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_(async()=>{let e=new ld(this.datastore),t=this.Ju(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Hu(e)}))}).catch(e=>{this.Hu(e)})})}Ju(e){try{let t=this.updateFunction(e);return!eq(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget(()=>(this.ju(),Promise.resolve()))):this.deferred.reject(e)}Yu(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nZ(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lp="FirestoreClient";class lm{constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=v.UNAUTHENTICATED,this.clientId=G.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{E(lp,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(E(lp,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new R;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=ac(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function lg(e,t){e.asyncQueue.verifyOperationInProgress(),E(lp,"Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await s8(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>{S("Terminating Firestore due to IndexedDb database deletion"),e.terminate().then(()=>{E("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(e=>{S("Terminating Firestore due to IndexedDb database deletion failed",e)})}),e._offlineComponents=t}async function ly(e,t){e.asyncQueue.verifyOperationInProgress();let r=await lv(e);E(lp,"Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>as(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>as(t.remoteStore,r)),e._onlineComponents=t}async function lv(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){E(lp,"Using user provided OfflineComponentProvider");try{await lg(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===D.FAILED_PRECONDITION||t.code===D.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;S("Error using user provided cache. Falling back to memory cache: "+t),await lg(e,new ln)}}else E(lp,"Using default OfflineComponentProvider"),await lg(e,new li(void 0))}return e._offlineComponents}async function lw(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E(lp,"Using user provided OnlineComponentProvider"),await ly(e,e._uninitializedComponentsProvider._online)):(E(lp,"Using default OnlineComponentProvider"),await ly(e,new la))),e._onlineComponents}function lb(e){return lv(e).then(e=>e.persistence)}function lI(e){return lv(e).then(e=>e.localStore)}function l_(e){return lw(e).then(e=>e.remoteStore)}function lE(e){return lw(e).then(e=>e.syncEngine)}function lT(e){return lw(e).then(e=>e.datastore)}async function lS(e){let t=await lw(e),r=t.eventManager;return r.onListen=aP.bind(null,t.syncEngine),r.onUnlisten=aV.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=aL.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=aU.bind(null,t.syncEngine),r}function lA(e,t,r={}){let n=new R;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new lu({next:a=>{s.Ou(),t.enqueueAndForget(()=>av(e,o));let l=a.docs.has(r);!l&&a.fromCache?i.reject(new O(D.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&n&&"server"===n.source?i.reject(new O(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new a_(r5(r.path),s,{includeMetadataChanges:!0,ka:!0});return ay(e,o)})(await lS(e),e.asyncQueue,t,r,n)),n.promise}function lx(e,t,r={}){let n=new R;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new lu({next:r=>{s.Ou(),t.enqueueAndForget(()=>av(e,o)),r.fromCache&&"server"===n.source?i.reject(new O(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),o=new a_(r,s,{includeMetadataChanges:!0,ka:!0});return ay(e,o)})(await lS(e),e.asyncQueue,t,r,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lk=new Map,lN="firestore.googleapis.com";class lD{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new O(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lN,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new O(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}er("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lC(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new O(D.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lO{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lD({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new O(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lD(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new L;switch(e.type){case"firstParty":return new U(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new O(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=lk.get(e);t&&(E("ComponentProvider","Removing Datastore"),lk.delete(e),t.terminate())}(this),Promise.resolve()}}function lR(e,t,r,n={}){var i;e=ea(e,lO);let s=(0,h.isCloudWorkstation)(t),o=e._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${r}`;s&&((0,h.pingServer)(`https://${l}`),(0,h.updateEmulatorBanner)("Firestore",!0)),o.host!==lN&&o.host!==l&&S("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let u=Object.assign(Object.assign({},o),{host:l,ssl:s,emulatorOptions:n});if(!(0,h.deepEqual)(u,a)&&(e._setSettings(u),n.mockUserToken)){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=v.MOCK_USER;else{t=(0,h.createMockUserToken)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new O(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new v(s)}e._authCredentials=new M(new P(t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lP(this.firestore,e,this._query)}}class lL{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lM(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lL(this.firestore,e,this._key)}toJSON(){return{type:lL._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ec(t,lL._jsonSchema))return new lL(e,r||null,new ee(Y.fromString(t.referencePath)))}}lL._jsonSchemaVersion="firestore/documentReference/1.0",lL._jsonSchema={type:eu("string",lL._jsonSchemaVersion),referencePath:eu("string")};class lM extends lP{constructor(e,t,r){super(e,t,r5(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new lL(this.firestore,null,new ee(e))}withConverter(e){return new lM(this.firestore,e,this._path)}}function lF(e,t,...r){if(e=(0,h.getModularInstance)(e),et("collection","path",t),e instanceof lO){let n=Y.fromString(t,...r);return ei(n),new lM(e,null,n)}{if(!(e instanceof lL||e instanceof lM))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(Y.fromString(t,...r));return ei(n),new lM(e.firestore,null,n)}}function lV(e,t){if(e=ea(e,lO),et("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new O(D.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new lP(e,null,new r6(Y.emptyPath(),t))}function lU(e,t,...r){if(e=(0,h.getModularInstance)(e),1==arguments.length&&(t=G.newId()),et("doc","path",t),e instanceof lO){let n=Y.fromString(t,...r);return en(n),new lL(e,null,new ee(n))}{if(!(e instanceof lL||e instanceof lM))throw new O(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(Y.fromString(t,...r));return en(n),new lL(e.firestore,e instanceof lM?e.converter:null,new ee(n))}}function lj(e,t){return e=(0,h.getModularInstance)(e),t=(0,h.getModularInstance)(t),(e instanceof lL||e instanceof lM)&&(t instanceof lL||t instanceof lM)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function lB(e,t){return e=(0,h.getModularInstance)(e),t=(0,h.getModularInstance)(t),e instanceof lP&&t instanceof lP&&e.firestore===t.firestore&&ni(e._query,t._query)&&e.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lq="AsyncQueue";class lz{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new oF(this,"async_queue_retry"),this.oc=()=>{let e=oL();e&&E(lq,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this._c=e;let t=oL();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;let t=oL();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});let t=new R;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!eR(e))throw e;E(lq,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){let t=this._c.then(()=>(this.nc=!0,e().catch(e=>{throw this.tc=e,this.nc=!1,T("INTERNAL UNHANDLED ERROR: ",lG(e)),e}).then(e=>(this.nc=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);let n=au.createAndSchedule(this,e,t,r,e=>this.lc(e));return this.ec.push(n),n}ac(){this.tc&&x(47125,{hc:lG(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(let t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{for(let t of(this.ec.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.ec))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){let t=this.ec.indexOf(e);this.ec.splice(t,1)}}function lG(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l$(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])}class lK{constructor(){this._progressObserver={},this._taskCompletionResolver=new R,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lH=-1;class lW extends lO{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new lz,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new lz(e),this._firestoreClient=void 0,await e}}}function lQ(e,t,r){r||(r=rt);let n=(0,l._getProvider)(e,"firestore");if(n.isInitialized(r)){let e=n.getImmediate({identifier:r}),i=n.getOptions(r);if((0,h.deepEqual)(i,t))return e;throw new O(D.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new O(D.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new O(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&(0,h.isCloudWorkstation)(t.host)&&(0,h.pingServer)(t.host),n.initialize({options:t,instanceIdentifier:r})}function lJ(e,t){let r="object"==typeof e?e:(0,l.getApp)(),n="string"==typeof e?e:t||rt,i=(0,l._getProvider)(r,"firestore").getImmediate({identifier:n});if(!i._initialized){let e=(0,h.getDefaultEmulatorHostnameAndPort)("firestore");e&&lR(i,...e)}return i}function lY(e){if(e._terminated)throw new O(D.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||lX(e),e._firestoreClient}function lX(e){var t,r,n,i;let s=e._freezeSettings(),o=(i=e._databaseId,new re(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,lC(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator));e._componentsProvider||(null===(r=s.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new lm(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}function lZ(e,t){S("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let r=e._freezeSettings();return l1(e,la.provider,{build:e=>new ls(e,r.cacheSizeBytes,null==t?void 0:t.forceOwnership)}),Promise.resolve()}async function l0(e){S("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let t=e._freezeSettings();l1(e,la.provider,{build:e=>new lo(e,t.cacheSizeBytes)})}function l1(e,t,r){if((e=ea(e,lW))._firestoreClient||e._terminated)throw new O(D.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(e._componentsProvider||e._getSettings().localCache)throw new O(D.FAILED_PRECONDITION,"SDK cache is already specified.");e._componentsProvider={_online:t,_offline:r},lX(e)}function l2(e){if(e._initialized&&!e._terminated)throw new O(D.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new R;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!ek.C())return Promise.resolve();await ek.delete(e+s0)}(s2(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function l4(e){return function(e){let t=new R;return e.asyncQueue.enqueueAndForget(async()=>aK(await lE(e),t)),t.promise}(lY(e=ea(e,lW)))}function l6(e){var t;return(t=lY(e=ea(e,lW))).asyncQueue.enqueue(async()=>{let e=await lb(t),r=await l_(t);return e.setNetworkEnabled(!0),r.Ia.delete(0),oH(r)})}function l5(e){var t;return(t=lY(e=ea(e,lW))).asyncQueue.enqueue(async()=>{let e=await lb(t),r=await l_(t);return e.setNetworkEnabled(!1),async function(e){e.Ia.add(0),await oW(e),e.Aa.set("Offline")}(r)})}function l9(e){return(0,l._removeServiceInstance)(e.app,"firestore",e._databaseId.database),e._delete()}function l3(e,t){let r=lY(e=ea(e,lW)),n=new lK;return function(e,t,r,n){var i;let s=(i=oM(t),new lc(function(e,t){if(e instanceof Uint8Array)return ll(e,t);if(e instanceof ArrayBuffer)return ll(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof r?z().encode(r):r),i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,r){(async function(e,t,r){try{var n;let i=await t.getMetadata();if(await function(e,t){let r=im(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",r=>e.Ti.getBundleMetadata(r,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,i))return await t.close(),r._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);r._updateProgress(aA(i));let s=new aS(i,t.serializer),o=await t.Su();for(;o;){let e=await s.Wa(o);e&&r._updateProgress(e),o=await t.Su()}let a=await s.za(e.localStore);return await aZ(e,a.Ja,void 0),await (n=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>n.Ti.saveBundleMetadata(e,i)),r._completeWith(a.progress),Promise.resolve(a.ja)}catch(e){return S(aN,`Loading bundle failed with ${e}`),r._failWith(e),Promise.resolve(new Set)}})(e,t,r).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await lE(e),s,n)})}(r,e._databaseId,t,n),n}function l8(e,t){var r;return(r=lY(e=ea(e,lW))).asyncQueue.enqueue(async()=>{var e;return(e=await lI(r)).persistence.runTransaction("Get named query","readonly",r=>e.Ti.getNamedQuery(r,t))}).then(t=>t?new lP(e,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l7{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class ue{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ut(tX.fromBase64String(e))}catch(e){throw new O(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ut(tX.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ec(e,ut._jsonSchema))return ut.fromBase64String(e.bytes)}}ut._jsonSchemaVersion="firestore/bytes/1.0",ut._jsonSchema={type:eu("string",ut._jsonSchemaVersion),bytes:eu("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new O(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function un(){return new ur(Q)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:us._jsonSchemaVersion}}static fromJSON(e){if(ec(e,us._jsonSchema))return new us(e.latitude,e.longitude)}}us._jsonSchemaVersion="firestore/geoPoint/1.0",us._jsonSchema={type:eu("string",us._jsonSchemaVersion),latitude:eu("number"),longitude:eu("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:uo._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ec(e,uo._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new uo(e.vectorValues);throw new O(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}uo._jsonSchemaVersion="firestore/vectorValue/1.0",uo._jsonSchema={type:eu("string",uo._jsonSchemaVersion),vectorValues:eu("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua=/^__.*__$/;class ul{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new nq(e,this.data,this.fieldMask,t,this.fieldTransforms):new nB(e,this.data,t,this.fieldTransforms)}}class uu{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new nq(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function uc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ec:e})}}class uh{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new uh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Rc({path:r,mc:!1});return n.fc(e),n}gc(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Rc({path:r,mc:!1});return n.Ac(),n}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return uD(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(0===e.length)throw this.wc("Document fields must not be empty");if(uc(this.Ec)&&ua.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ud{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oM(e)}Dc(e,t,r,n=!1){return new uh({Ec:e,methodName:t,bc:r,path:Z.emptyPath(),mc:!1,Sc:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uf(e){let t=e._freezeSettings(),r=oM(e._databaseId);return new ud(e._databaseId,!!t.ignoreUndefinedProperties,r)}function up(e,t,r,n,i,s={}){let o,a;let l=e.Dc(s.merge||s.mergeFields?2:0,t,r,i);ux("Data must be an object, but it was:",l,n);let u=uS(n,l);if(s.merge)o=new tQ(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=uC(t,n,r);if(!l.contains(i))throw new O(D.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);uO(e,i)||e.push(i)}o=new tQ(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new ul(new rC(u),o,a)}class um extends ui{_toFieldTransform(e){if(2!==e.Ec)throw 1===e.Ec?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof um}}function ug(e,t,r){return new uh({Ec:3,bc:t.settings.bc,methodName:e._methodName,mc:r},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class uy extends ui{_toFieldTransform(e){return new nR(e.path,new nS)}isEqual(e){return e instanceof uy}}class uv extends ui{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){let t=ug(this,e,!0),r=this.vc.map(e=>uT(e,t)),n=new nA(r);return new nR(e.path,n)}isEqual(e){return e instanceof uv&&(0,h.deepEqual)(this.vc,e.vc)}}class uw extends ui{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){let t=ug(this,e,!0),r=this.vc.map(e=>uT(e,t)),n=new nC(r);return new nR(e.path,n)}isEqual(e){return e instanceof uw&&(0,h.deepEqual)(this.vc,e.vc)}}class ub extends ui{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){let t=new nN(e.serializer,n_(e.serializer,this.Cc));return new nR(e.path,t)}isEqual(e){return e instanceof ub&&this.Cc===e.Cc}}function uI(e,t,r,n){let i=e.Dc(1,t,r);ux("Data must be an object, but it was:",i,n);let s=[],o=rC.empty();tj(n,(e,n)=>{let a=uN(t,e,r);n=(0,h.getModularInstance)(n);let l=i.gc(a);if(n instanceof um)s.push(a);else{let e=uT(n,l);null!=e&&(s.push(a),o.set(a,e))}});let a=new tQ(s);return new uu(o,a,i.fieldTransforms)}function u_(e,t,r,n,i,s){let o=e.Dc(1,t,r),a=[uC(t,n,r)],l=[i];if(s.length%2!=0)throw new O(D.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(uC(t,s[e])),l.push(s[e+1]);let u=[],c=rC.empty();for(let e=a.length-1;e>=0;--e)if(!uO(u,a[e])){let t=a[e],r=l[e];r=(0,h.getModularInstance)(r);let n=o.gc(t);if(r instanceof um)u.push(t);else{let e=uT(r,n);null!=e&&(u.push(t),c.set(t,e))}}let d=new tQ(u);return new uu(c,d,o.fieldTransforms)}function uE(e,t,r,n=!1){return uT(r,e.Dc(n?4:3,t))}function uT(e,t){if(uA(e=(0,h.getModularInstance)(e)))return ux("Unsupported field value:",t,e),uS(e,t);if(e instanceof ui)return function(e,t){if(!uc(t.Ec))throw t.wc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.wc(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.mc&&4!==t.Ec)throw t.wc("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=uT(i,t.yc(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=(0,h.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n_(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=eh.fromDate(e);return{timestampValue:id(t.serializer,r)}}if(e instanceof eh){let r=new eh(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:id(t.serializer,r)}}if(e instanceof us)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ut)return{bytesValue:ip(t.serializer,e._byteString)};if(e instanceof lL){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.wc(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ig(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof uo)return function(e,t){let r={fields:{[rn]:{stringValue:ro},[ra]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.wc("VectorValues must only contain numeric values.");return nb(t.serializer,e)})}}}};return{mapValue:r}}(e,t);throw t.wc(`Unsupported field value: ${eo(e)}`)}(e,t)}function uS(e,t){let r={};return tq(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tj(e,(e,n)=>{let i=uT(n,t.Vc(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function uA(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof eh||e instanceof us||e instanceof ut||e instanceof lL||e instanceof ui||e instanceof uo)}function ux(e,t,r){if(!uA(r)||!es(r)){let n=eo(r);throw"an object"===n?t.wc(e+" a custom object"):t.wc(e+" "+n)}}function uC(e,t,r){if((t=(0,h.getModularInstance)(t))instanceof ur)return t._internalPath;if("string"==typeof t)return uN(e,t);throw uD("Field path arguments must be of type string or ",e,!1,void 0,r)}let uk=RegExp("[~\\*/\\[\\]]");function uN(e,t,r){if(t.search(uk)>=0)throw uD(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new ur(...t.split("."))._internalPath}catch(n){throw uD(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function uD(e,t,r,n,i){let s=n&&!n.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new O(D.INVALID_ARGUMENT,a+e+l)}function uO(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lL(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new uP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(uL("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class uP extends uR{data(){return super.data()}}function uL(e,t){return"string"==typeof t?uN(e,t):t instanceof ur?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new O(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uF{}class uV extends uF{}function uU(e,t,...r){let n=[];for(let i of(t instanceof uF&&n.push(t),function(e){let t=e.filter(e=>e instanceof uq).length,r=e.filter(e=>e instanceof uj).length;if(t>1||t>0&&r>0)throw new O(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class uj extends uV{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new uj(e,t,r)}_apply(e){let t=this._parse(e);return u5(e._query,t),new lP(e.firestore,e.converter,nr(e._query,t))}_parse(e){let t=uf(e.firestore),r=function(e,t,r,n,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new O(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){u6(o,s);let t=[];for(let r of o)t.push(u4(n,e,r));a={arrayValue:{values:t}}}else a=u4(n,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||u6(o,s),a=uE(r,t,o,"in"===s||"not-in"===s);let l=rL.create(i,s,a);return l}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return r}}function uB(e,t,r){let n=uL("where",e);return uj._create(n,t,r)}class uq extends uF{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new uq(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:rM.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e,n=t.getFlattenedFilters();for(let e of n)u5(r,e),r=nr(r,e)}(e._query,t),new lP(e.firestore,e.converter,nr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function uz(...e){return e.forEach(e=>u9("or",e)),uq._create("or",e)}function uG(...e){return e.forEach(e=>u9("and",e)),uq._create("and",e)}class u$ extends uV{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new u$(e,t)}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new O(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new O(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let n=new rR(t,r);return n}(e._query,this._field,this._direction);return new lP(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new r6(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function uK(e,t="asc"){let r=uL("orderBy",e);return u$._create(r,t)}class uH extends uV{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new uH(e,t,r)}_apply(e){return new lP(e.firestore,e.converter,nn(e._query,this._limit,this._limitType))}}function uW(e){return el("limit",e),uH._create("limit",e,"F")}function uQ(e){return el("limitToLast",e),uH._create("limitToLast",e,"L")}class uJ extends uV{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new uJ(e,t,r)}_apply(e){var t;let r=u2(e,this.type,this._docOrFields,this._inclusive);return new lP(e.firestore,e.converter,new r6((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,r,t.endAt))}}function uY(...e){return uJ._create("startAt",e,!0)}function uX(...e){return uJ._create("startAfter",e,!1)}class uZ extends uV{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new uZ(e,t,r)}_apply(e){var t;let r=u2(e,this.type,this._docOrFields,this._inclusive);return new lP(e.firestore,e.converter,new r6((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,r))}}function u0(...e){return uZ._create("endBefore",e,!1)}function u1(...e){return uZ._create("endAt",e,!0)}function u2(e,t,r,n){if(r[0]=(0,h.getModularInstance)(r[0]),r[0]instanceof uR)return function(e,t,r,n,i){if(!n)throw new O(D.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${r}().`);let s=[];for(let r of r8(e))if(r.field.isKeyField())s.push(rg(t,n.key));else{let e=n.data.field(r.field);if(t3(e))throw new O(D.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+r.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=r.field.canonicalString();throw new O(D.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new rN(s,i)}(e._query,e.firestore._databaseId,t,r[0]._document,n);{let i=uf(e.firestore);return function(e,t,r,n,i,s){let o=e.explicitOrderBy;if(i.length>o.length)throw new O(D.INVALID_ARGUMENT,`Too many arguments provided to ${n}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let a=[];for(let s=0;s<i.length;s++){let l=i[s];if(o[s].field.isKeyField()){if("string"!=typeof l)throw new O(D.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${n}(), but got a ${typeof l}`);if(!r3(e)&&-1!==l.indexOf("/"))throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${n}() must be a plain document ID, but '${l}' contains a slash.`);let r=e.path.child(Y.fromString(l));if(!ee.isDocumentKey(r))throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${n}() must result in a valid document path, but '${r}' is not because it contains an odd number of segments.`);let i=new ee(r);a.push(rg(t,i))}else{let e=uE(r,n,l);a.push(e)}}return new rN(a,s)}(e._query,e.firestore._databaseId,i,t,r,n)}}function u4(e,t,r){if("string"==typeof(r=(0,h.getModularInstance)(r))){if(""===r)throw new O(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!r3(t)&&-1!==r.indexOf("/"))throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(Y.fromString(r));if(!ee.isDocumentKey(n))throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return rg(e,new ee(n))}if(r instanceof lL)return rg(e,r._key);throw new O(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${eo(r)}.`)}function u6(e,t){if(!Array.isArray(e)||0===e.length)throw new O(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function u5(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new O(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}function u9(e,t){if(!(t instanceof uj||t instanceof uq))throw new O(D.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class u3{convertValue(e,t="none"){switch(ru(e)){case 0:return null;case 1:return e.booleanValue;case 2:return t1(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(t2(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return tj(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;let i=null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t[ra].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>t1(e.doubleValue));return new uo(i)}convertGeoPoint(e){return new us(t1(e.latitude),t1(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=t8(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(t7(e));default:return null}}convertTimestamp(e){let t=t0(e);return new eh(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=Y.fromString(e);k(iL(r),9688,{name:e});let n=new rr(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return n.isEqual(t)||T(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u8(e,t,r){return e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t}class u7 extends u3{constructor(e){super(),this.firestore=e}convertBytes(e){return new ut(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new lL(this.firestore,null,t)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){return new l7("sum",uC("sum",e))}function ct(e){return new l7("avg",uC("average",e))}function cr(){return new l7("count")}function cn(e,t){var r,n;return e instanceof l7&&t instanceof l7&&e.aggregateType===t.aggregateType&&(null===(r=e._internalFieldPath)||void 0===r?void 0:r.canonicalString())===(null===(n=t._internalFieldPath)||void 0===n?void 0:n.canonicalString())}function ci(e,t){return lB(e.query,t.query)&&(0,h.deepEqual)(e.data(),t.data())}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="NOT SUPPORTED";class co{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ca extends uR{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(uL("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=ca._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()&&(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),t}}function cl(e,t,r){if(ec(t,ca._jsonSchema)){if(t.bundle===cs)throw new O(D.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");let n=oM(e._databaseId),i=new lh(t.bundle,n),s=i.Ku(),o=new aS(i.getMetadata(),n);for(let e of s)o.Wa(e);let a=o.documents;if(1!==a.length)throw new O(D.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);let l=iA(n,a[0].document),u=new ee(Y.fromString(t.bundleName));return new ca(e,new u7(e),u,l,new co(!1,!1),r||null)}}ca._jsonSchemaVersion="firestore/documentSnapshot/1.0",ca._jsonSchema={type:eu("string",ca._jsonSchemaVersion),bundleSource:eu("string","DocumentSnapshot"),bundleName:eu("string"),bundle:eu("string")};class cu extends ca{data(e={}){return super.data(e)}}class cc{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new co(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new cu(this._firestore,this._userDataWriter,r.key,r,new co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new cu(e._firestore,e._userDataWriter,r.doc.key,r.doc,new co(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new cu(e._firestore,e._userDataWriter,t.doc.key,t.doc,new co(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:e})}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=cc._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=G.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],n=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),n.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ch(e,t,r){if(ec(t,cc._jsonSchema)){if(t.bundle===cs)throw new O(D.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");let n=oM(e._databaseId),i=new lh(t.bundle,n),s=i.Ku(),o=new aS(i.getMetadata(),n);for(let e of s)o.Wa(e);if(1!==o.queries.length)throw new O(D.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);let a=i$(o.queries[0].bundledQuery),l=o.documents,u=new ah;l.map(e=>{let t=iA(n,e.document);u=u.add(t)});let c=af.fromInitialDocuments(a,u,nv(),!1,!1),h=new lP(e,r||null,a);return new cc(e,new u7(e),h,c)}}function cd(e,t){return e instanceof ca&&t instanceof ca?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof cc&&t instanceof cc&&e._firestore===t._firestore&&lB(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(e){e=ea(e,lL);let t=ea(e.firestore,lW);return lA(lY(t),e._key).then(r=>cC(t,e,r))}cc._jsonSchemaVersion="firestore/querySnapshot/1.0",cc._jsonSchema={type:eu("string",cc._jsonSchemaVersion),bundleSource:eu("string","QuerySnapshot"),bundleName:eu("string"),bundle:eu("string")};class cp extends u3{constructor(e){super(),this.firestore=e}convertBytes(e){return new ut(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new lL(this.firestore,null,t)}}function cm(e){e=ea(e,lL);let t=ea(e.firestore,lW),r=lY(t),n=new cp(t);return(function(e,t){let r=new R;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,r){try{let n=await e.persistence.runTransaction("read document","readonly",r=>e.localDocuments.getDocument(r,t));n.isFoundDocument()?r.resolve(n):n.isNoDocument()?r.resolve(null):r.reject(new O(D.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(n){let e=ac(n,`Failed to get document '${t} from cache`);r.reject(e)}})(await lI(e),t,r)),r.promise})(r,e._key).then(r=>new ca(t,n,e._key,r,new co(null!==r&&r.hasLocalMutations,!0),e.converter))}function cg(e){e=ea(e,lL);let t=ea(e.firestore,lW);return lA(lY(t),e._key,{source:"server"}).then(r=>cC(t,e,r))}function cy(e){e=ea(e,lP);let t=ea(e.firestore,lW),r=lY(t),n=new cp(t);return uM(e._query),lx(r,e._query).then(r=>new cc(t,n,e,r))}function cv(e){e=ea(e,lP);let t=ea(e.firestore,lW),r=lY(t),n=new cp(t);return(function(e,t){let r=new R;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,r){try{let n=await on(e,t,!0),i=new ak(t,n.qs),s=i.nu(n.documents),o=i.applyChanges(s,!1);r.resolve(o.snapshot)}catch(n){let e=ac(n,`Failed to execute query '${t} against cache`);r.reject(e)}})(await lI(e),t,r)),r.promise})(r,e._query).then(r=>new cc(t,n,e,r))}function cw(e){e=ea(e,lP);let t=ea(e.firestore,lW),r=lY(t),n=new cp(t);return lx(r,e._query,{source:"server"}).then(r=>new cc(t,n,e,r))}function cb(e,t,r){e=ea(e,lL);let n=ea(e.firestore,lW),i=u8(e.converter,t,r);return cx(n,[up(uf(n),"setDoc",e._key,i,null!==e.converter,r).toMutation(e._key,nL.none())])}function cI(e,t,r,...n){e=ea(e,lL);let i=ea(e.firestore,lW),s=uf(i);return cx(i,[("string"==typeof(t=(0,h.getModularInstance)(t))||t instanceof ur?u_(s,"updateDoc",e._key,t,r,n):uI(s,"updateDoc",e._key,t)).toMutation(e._key,nL.exists(!0))])}function c_(e){return cx(ea(e.firestore,lW),[new nK(e._key,nL.none())])}function cE(e,t){let r=ea(e.firestore,lW),n=lU(e),i=u8(e.converter,t);return cx(r,[up(uf(e.firestore),"addDoc",n._key,i,null!==e.converter,{}).toMutation(n._key,nL.exists(!1))]).then(()=>n)}function cT(e,...t){var r,n,i;let s,o,a;e=(0,h.getModularInstance)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||l$(t[u])||(l=t[u++]);let c={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(l$(t[u])){let e=t[u];t[u]=null===(r=e.next)||void 0===r?void 0:r.bind(e),t[u+1]=null===(n=e.error)||void 0===n?void 0:n.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof lL)o=ea(e.firestore,lW),a=r5(e._key.path),s={next:r=>{t[u]&&t[u](cC(o,e,r))},error:t[u+1],complete:t[u+2]};else{let r=ea(e,lP);o=ea(r.firestore,lW),a=r._query;let n=new cp(o);s={next:e=>{t[u]&&t[u](new cc(o,n,r,e))},error:t[u+1],complete:t[u+2]},uM(e._query)}return function(e,t,r,n){let i=new lu(n),s=new a_(t,i,r);return e.asyncQueue.enqueueAndForget(async()=>ay(await lS(e),s)),()=>{i.Ou(),e.asyncQueue.enqueueAndForget(async()=>av(await lS(e),s))}}(lY(o),a,c,s)}function cS(e,t,...r){let n=(0,h.getModularInstance)(e),i=function(e){let t={bundle:"",bundleName:"",bundleSource:""};for(let r of["bundle","bundleName","bundleSource"]){if(!(r in e)){t.error=`snapshotJson missing required field: ${r}`;break}let n=e[r];if("string"!=typeof n){t.error=`snapshotJson field '${r}' must be a string.`;break}if(0===n.length){t.error=`snapshotJson field '${r}' cannot be an empty string.`;break}"bundle"===r?t.bundle=n:"bundleName"===r?t.bundleName=n:"bundleSource"===r&&(t.bundleSource=n)}return t}(t);if(i.error)throw new O(D.INVALID_ARGUMENT,i.error);let s,o=0;if("object"!=typeof r[0]||l$(r[o])||(s=r[o++]),"QuerySnapshot"===i.bundleSource){let e=null;if("object"==typeof r[o]&&l$(r[o])){let t=r[o++];e={next:t.next,error:t.error,complete:t.complete}}else e={next:r[o++],error:r[o++],complete:r[o++]};return function(e,t,r,n,i){let s,o=!1,a=l3(e,t.bundle);return a.then(()=>l8(e,t.bundleName)).then(e=>{e&&!o&&(i&&e.withConverter(i),s=cT(e,r||{},n))}).catch(e=>(n.error&&n.error(e),()=>{})),()=>{o||(o=!0,s&&s())}}(n,i,s,e,r[o])}if("DocumentSnapshot"===i.bundleSource){let e=null;if("object"==typeof r[o]&&l$(r[o])){let t=r[o++];e={next:t.next,error:t.error,complete:t.complete}}else e={next:r[o++],error:r[o++],complete:r[o++]};return function(e,t,r,n,i){let s,o=!1,a=l3(e,t.bundle);return a.then(()=>{if(!o){let o=new lL(e,i||null,ee.fromPath(t.bundleName));s=cT(o,r||{},n)}}).catch(e=>(n.error&&n.error(e),()=>{})),()=>{o||(o=!0,s&&s())}}(n,i,s,e,r[o])}throw new O(D.INVALID_ARGUMENT,`unsupported bundle source: ${i.bundleSource}`)}function cA(e,t){return function(e,t){let r=new lu(t);return e.asyncQueue.enqueueAndForget(async()=>{(await lS(e)).Da.add(r),r.next()}),()=>{r.Ou(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.Da.delete(t)})(await lS(e),r))}}(lY(e=ea(e,lW)),l$(t)?t:{next:t})}function cx(e,t){return function(e,t){let r=new R;return e.asyncQueue.enqueueAndForget(async()=>aj(await lE(e),t,r)),r.promise}(lY(e),t)}function cC(e,t,r){let n=r.docs.get(t._key),i=new cp(e);return new ca(e,i,t._key,n,new co(r.hasPendingWrites,r.fromCache),t.converter)}function ck(e){return cN(e,{count:cr()})}function cN(e,t){let r=ea(e.firestore,lW),n=lY(r),i=tB(t,(e,t)=>new nY(t,e.aggregateType,e._internalFieldPath));return(function(e,t,r){let n=new R;return e.asyncQueue.enqueueAndForget(async()=>{try{let i=await lT(e);n.resolve(async function(e,t,r){var n;let{request:i,ft:s,parent:o}=iD(e.serializer,ne(t),r);e.connection.Qo||delete i.parent;let a=(await e.Jo("RunAggregationQuery",e.serializer.databaseId,o,i,1)).filter(e=>!!e.result);k(1===a.length,64727);let l=null===(n=a[0].result)||void 0===n?void 0:n.aggregateFields;return Object.keys(l).reduce((e,t)=>(e[s[t]]=l[t],e),{})}(i,t,r))}catch(e){n.reject(e)}}),n.promise})(n,e._query,i).then(t=>(function(e,t,r){let n=new cp(e),i=new ue(t,n,r);return i})(r,e,t))}class cD{constructor(e){this.kind="memory",this._onlineComponentProvider=la.provider,(null==e?void 0:e.garbageCollector)?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new li(void 0)}}toJSON(){return{kind:this.kind}}}class cO{constructor(e){let t;this.kind="persistent",(null==e?void 0:e.tabManager)?(e.tabManager._initialize(e),t=e.tabManager):(t=cB(void 0))._initialize(e),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class cR{constructor(){this.kind="memoryEager",this._offlineComponentProvider=ln.provider}toJSON(){return{kind:this.kind}}}class cP{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new li(e)}}toJSON(){return{kind:this.kind}}}function cL(){return new cR}function cM(e){return new cP(null==e?void 0:e.cacheSizeBytes)}function cF(e){return new cD(e)}function cV(e){return new cO(e)}class cU{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=la.provider,this._offlineComponentProvider={build:t=>new ls(t,null==e?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class cj{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=la.provider,this._offlineComponentProvider={build:t=>new lo(t,null==e?void 0:e.cacheSizeBytes)}}}function cB(e){return new cU(null==e?void 0:e.forceOwnership)}function cq(){return new cj}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cz={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cG{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=uf(e)}set(e,t,r){this._verifyNotCommitted();let n=c$(e,this._firestore),i=u8(n.converter,t,r),s=up(this._dataReader,"WriteBatch.set",n._key,i,null!==n.converter,r);return this._mutations.push(s.toMutation(n._key,nL.none())),this}update(e,t,r,...n){let i;this._verifyNotCommitted();let s=c$(e,this._firestore);return i="string"==typeof(t=(0,h.getModularInstance)(t))||t instanceof ur?u_(this._dataReader,"WriteBatch.update",s._key,t,r,n):uI(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,nL.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=c$(e,this._firestore);return this._mutations=this._mutations.concat(new nK(t._key,nL.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function c$(e,t){if((e=(0,h.getModularInstance)(e)).firestore!==t)throw new O(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cK{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=uf(e)}get(e){let t=c$(e,this._firestore),r=new u7(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return x(24041);let n=e[0];if(n.isFoundDocument())return new uR(this._firestore,r,n.key,n,t.converter);if(n.isNoDocument())return new uR(this._firestore,r,t._key,null,t.converter);throw x(18433,{doc:n})})}set(e,t,r){let n=c$(e,this._firestore),i=u8(n.converter,t,r),s=up(this._dataReader,"Transaction.set",n._key,i,null!==n.converter,r);return this._transaction.set(n._key,s),this}update(e,t,r,...n){let i;let s=c$(e,this._firestore);return i="string"==typeof(t=(0,h.getModularInstance)(t))||t instanceof ur?u_(this._dataReader,"Transaction.update",s._key,t,r,n):uI(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=c$(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cH extends cK{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=c$(e,this._firestore),r=new cp(this._firestore);return super.get(e).then(e=>new ca(this._firestore,r,t._key,e._document,new co(!1,!1),t.converter))}}function cW(e,t,r){e=ea(e,lW);let n=Object.assign(Object.assign({},cz),r);return function(e){if(e.maxAttempts<1)throw new O(D.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(e,t,r){let n=new R;return e.asyncQueue.enqueueAndForget(async()=>{let i=await lT(e);new lf(e.asyncQueue,i,r,t,n).zu()}),n.promise}(lY(e),r=>t(new cH(e,r)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cQ(){return new um("deleteField")}function cJ(){return new uy("serverTimestamp")}function cY(...e){return new uv("arrayUnion",e)}function cX(...e){return new uw("arrayRemove",e)}function cZ(e){return new ub("increment",e)}function c0(e){return new uo(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(e){return lY(e=ea(e,lW)),new cG(e,t=>cx(e,t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(e,t){let r=lY(e=ea(e,lW));if(!r._uninitializedComponentsProvider||"memory"===r._uninitializedComponentsProvider._offline.kind)return S("Cannot enable indexes when persistence is disabled"),Promise.resolve();let n=function(e){let t="string"==typeof e?function(e){try{return JSON.parse(e)}catch(e){throw new O(D.INVALID_ARGUMENT,"Failed to parse JSON: "+(null==e?void 0:e.message))}}(e):e,r=[];if(Array.isArray(t.indexes))for(let e of t.indexes){let t=c4(e,"collectionGroup"),n=[];if(Array.isArray(e.fields))for(let t of e.fields){let e=uN("setIndexConfiguration",c4(t,"fieldPath"));"CONTAINS"===t.arrayConfig?n.push(new ey(e,2)):"ASCENDING"===t.order?n.push(new ey(e,0)):"DESCENDING"===t.order&&n.push(new ey(e,1))}r.push(new ef(ef.UNKNOWN_ID,t,n,ev.empty()))}return r}(t);return r.asyncQueue.enqueue(async()=>(async function(e,t){let r=e.indexManager,n=[];return e.persistence.runTransaction("Configure indexes","readwrite",e=>r.getFieldIndexes(e).next(i=>/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e,t,r,n,i){t=[...t],(e=[...e]).sort(r),t.sort(r);let s=e.length,o=t.length,a=0,l=0;for(;a<o&&l<s;){let s=r(e[l],t[a]);s<0?i(e[l++]):s>0?n(t[a++]):(a++,l++)}for(;a<o;)n(t[a++]);for(;l<s;)i(e[l++])})(i,t,eg,t=>{n.push(r.addFieldIndex(e,t))},t=>{n.push(r.deleteFieldIndex(e,t))})).next(()=>eA.waitFor(n)))})(await lI(r),n))}function c4(e,t){if("string"!=typeof e[t])throw new O(D.INVALID_ARGUMENT,"Missing string value for: "+t);return e[t]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c6{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function c5(e){var t;e=ea(e,lW);let r=he.get(e);if(r)return r;if("persistent"!==(null===(t=lY(e)._uninitializedComponentsProvider)||void 0===t?void 0:t._offline.kind))return null;let n=new c6(e);return he.set(e,n),n}function c9(e){c7(e,!0)}function c3(e){c7(e,!1)}function c8(e){var t;(t=lY(e._firestore)).asyncQueue.enqueue(async()=>(function(e){let t=e.indexManager;return e.persistence.runTransaction("Delete All Indexes","readwrite",e=>t.deleteAllFieldIndexes(e))})(await lI(t))).then(e=>E("deleting all persistent cache indexes succeeded")).catch(e=>S("deleting all persistent cache indexes failed",e))}function c7(e,t){var r;(r=lY(e._firestore)).asyncQueue.enqueue(async()=>{(await lI(r)).Cs.Rs=t}).then(e=>E(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>S(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}let he=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){var t;let r=null===(t=lY(ea(e.firestore,lW))._onlineComponents)||void 0===t?void 0:t.datastore.serializer;return void 0===r?null:iN(r,r7(e._query)).Vt}function hr(e,t){var r;let n=tB(t,(e,t)=>new nY(t,e.aggregateType,e._internalFieldPath)),i=null===(r=lY(ea(e.firestore,lW))._onlineComponents)||void 0===r?void 0:r.datastore.serializer;return void 0===i?null:iD(i,ne(e._query),n,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){throw Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return hi.instance.onExistenceFilterMismatch(e)}}class hi{constructor(){this.Fc=new Map}static get instance(){return hs||function(e){if(n1)throw Error("a TestingHooksSpi instance is already set");n1=e}(hs=new hi),hs}ct(e){this.Fc.forEach(t=>t(e))}onExistenceFilterMismatch(e){let t=Symbol(),r=this.Fc;return r.set(t,e),()=>r.delete(t)}}let hs=null;!function(e,t=!0){w=l.SDK_VERSION,(0,l._registerComponent)(new(0,u.Component)("firestore",(e,{instanceIdentifier:r,options:n})=>{let i=e.getProvider("app").getImmediate(),s=new lW(new F(e.getProvider("auth-internal")),new B(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new O(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rr(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,l.registerVersion)(g,y,void 0),(0,l.registerVersion)(g,y,"esm2017")}()},{"1f357d3d806fe63b":"lToA8",d0007d14bc1ab93c:"20WXA","@firebase/app":"hhTEg","@firebase/component":"7aBr9","@firebase/logger":"95325","@firebase/util":"kdZ0V","@firebase/webchannel-wrapper/bloom-blob":"lnMC7","@firebase/webchannel-wrapper/webchannel-blob":"aX0EQ","@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],"20WXA":[function(e,t,r){var n,i,s=Object.create,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,h=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),d=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of l(t))c.call(e,i)||i===r||o(e,i,{get:()=>t[i],enumerable:!(n=a(t,i))||n.enumerable});return e},f=(e,t,r)=>(r=null!=e?s(u(e)):{},d(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),p=h(e=>{e.byteLength=function(e){var t=a(e),r=t[0],n=t[1];return(r+n)*3/4-n},e.toByteArray=function(e){var t,r,n=a(e),o=n[0],l=n[1],u=new s((o+l)*3/4-l),c=0,h=l>0?o-4:o;for(r=0;r<h;r+=4)t=i[e.charCodeAt(r)]<<18|i[e.charCodeAt(r+1)]<<12|i[e.charCodeAt(r+2)]<<6|i[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;return 2===l&&(t=i[e.charCodeAt(r)]<<2|i[e.charCodeAt(r+1)]>>4,u[c++]=255&t),1===l&&(t=i[e.charCodeAt(r)]<<10|i[e.charCodeAt(r+1)]<<4|i[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t),u},e.fromByteArray=function(e){for(var t,r=e.length,i=r%3,s=[],o=0,a=r-i;o<a;o+=16383)s.push(function(e,t,r){for(var i,s=[],o=t;o<r;o+=3)s.push(n[(i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+n[i>>12&63]+n[i>>6&63]+n[63&i]);return s.join("")}(e,o,o+16383>a?a:o+16383));return 1===i?s.push(n[(t=e[r-1])>>2]+n[t<<4&63]+"=="):2===i&&s.push(n[(t=(e[r-2]<<8)+e[r-1])>>10]+n[t>>4&63]+n[t<<2&63]+"="),s.join("")};var t,r,n=[],i=[],s="u">typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(t=0,r=o.length;t<r;++t)n[t]=o[t],i[o.charCodeAt(t)]=t;function a(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63}),m=h(e=>{e.read=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,u=l>>1,c=-7,h=r?i-1:0,d=r?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-c)-1,f>>=-c,c+=a;c>0;s=256*s+e[t+h],h+=d,c-=8);for(o=s&(1<<-c)-1,s>>=-c,c+=n;c>0;o=256*o+e[t+h],h+=d,c-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:(f?-1:1)*(1/0);o+=Math.pow(2,n),s-=u}return(f?-1:1)*o*Math.pow(2,s-n)},e.write=function(e,t,r,n,i,s){var o,a,l,u=8*s-i-1,c=(1<<u)-1,h=c>>1,d=23===i?5960464477539062e-23:0,f=n?0:s-1,p=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=c):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+h>=1?t+=d/l:t+=d*Math.pow(2,1-h),t*l>=2&&(o++,l/=2),o+h>=c?(a=0,o=c):o+h>=1?(a=(t*l-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[r+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[r+f]=255&o,f+=p,o/=256,u-=8);e[r+f-p]|=128*m}}),g=h(e=>{var t=p(),r=m(),n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function i(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return l(e)}return o(e,t,r)}function o(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!s.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|d(e,t),n=i(r),o=n.write(e,t);return o!==r&&(n=n.slice(0,o)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(F(e,Uint8Array)){let t=new Uint8Array(e);return c(t.buffer,t.byteOffset,t.byteLength)}return u(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(F(e,ArrayBuffer)||e&&F(e.buffer,ArrayBuffer)||"u">typeof SharedArrayBuffer&&(F(e,SharedArrayBuffer)||e&&F(e.buffer,SharedArrayBuffer)))return c(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return s.from(n,t,r);let o=function(e){var t;if(s.isBuffer(e)){let t=0|h(e.length),r=i(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?i(0):u(e):"Buffer"===e.type&&Array.isArray(e.data)?u(e.data):void 0}(e);if(o)return o;if("u">typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function a(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function l(e){return a(e),i(e<0?0:0|h(e))}function u(e){let t=e.length<0?0:0|h(e.length),r=i(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function c(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),n}function h(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function d(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||F(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return P(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return L(e).length;default:if(i)return n?-1:P(e).length;t=(""+t).toLowerCase(),i=!0}}function f(e,r,n){let i=!1;if((void 0===r||r<0)&&(r=0),r>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0)||(n>>>=0)<=(r>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=V[e[n]];return i}(this,r,n);case"utf8":case"utf-8":return w(this,r,n);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,r,n);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,r,n);case"base64":var s,o;return s=r,o=n,0===s&&o===this.length?t.fromByteArray(this):t.fromByteArray(this.slice(s,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,r,n);default:if(i)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function g(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function y(e,t,r,n,i){var o;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r)!=o&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=s.from(t,n)),s.isBuffer(t))return 0===t.length?-1:v(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):v(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function v(e,t,r,n,i){let s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,r/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let n=-1;for(s=r;s<a;s++)if(u(e,s)===u(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===l)return n*o}else -1!==n&&(s-=s-n),n=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){let r=!0;for(let n=0;n<l;n++)if(u(e,s+n)!==u(t,n)){r=!1;break}if(r)return s}return -1}function w(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=r){let r,n,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(s=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,o=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function b(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function I(e,t,r,n,i,o){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function _(e,t,r,n,i){N(t,n,i,e,r,7);let s=Number(t&BigInt(4294967295));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function E(e,t,r,n,i){N(t,n,i,e,r,7);let s=Number(t&BigInt(4294967295));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function T(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function S(e,t,n,i,s){return t=+t,n>>>=0,s||T(e,t,n,4,34028234663852886e22,-34028234663852886e22),r.write(e,t,n,i,23,4),n+4}function A(e,t,n,i,s){return t=+t,n>>>=0,s||T(e,t,n,8,17976931348623157e292,-17976931348623157e292),r.write(e,t,n,i,52,8),n+8}e.Buffer=s,e.SlowBuffer=function(e){return+e!=e&&(e=0),s.alloc(+e)},e.INSPECT_MAX_BYTES=50,e.kMaxLength=2147483647,s.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),!s.TYPED_ARRAY_SUPPORT&&"u">typeof console&&"function"==typeof console.error&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return o(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return a(e),e<=0?i(e):void 0!==t?"string"==typeof r?i(e).fill(t,r):i(e).fill(t):i(e)},s.allocUnsafe=function(e){return l(e)},s.allocUnsafeSlow=function(e){return l(e)},s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(F(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),F(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;let n=s.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(F(t,Uint8Array))i+t.length>n.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(s.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},s.byteLength=d,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)g(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?w(this,0,e):f.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){let t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},n&&(s.prototype[n]=s.prototype.inspect),s.prototype.compare=function(e,t,r,n,i){if(F(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let o=i-n,a=r-t,l=Math.min(o,a),u=this.slice(n,i),c=e.slice(t,r);for(let e=0;e<l;++e)if(u[e]!==c[e]){o=u[e],a=c[e];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)},s.prototype.write=function(e,t,r,n){var i,s,o,a,l,u,c,h;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let f=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let s=e.length-r;n?(n=Number(n))>s&&(n=s):n=s;let o=t.length;for(n>o/2&&(n=o/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,M(P(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=r,M(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,a);case"base64":return l=t,u=r,M(L(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,h=r,M(function(e,t){let r,n,i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-c),this,c,h);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,s.prototype),n},s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||b(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||b(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=U(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&O(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),s.prototype.readBigUInt64BE=U(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&O(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],i=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||b(e,t,this.length);let n=t,i=1,s=this[e+--n];for(;n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},s.prototype.readInt8=function(e,t){return e>>>=0,t||b(e,1,this.length),128&this[e]?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||b(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||b(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||b(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=U(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&O(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),s.prototype.readBigInt64BE=U(function(e){D(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&O(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||b(e,4,this.length),r.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||b(e,4,this.length),r.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||b(e,8,this.length),r.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||b(e,8,this.length),r.read(this,e,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;I(this,e,t,r,n,0)}let i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;I(this,e,t,r,n,0)}let i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigUInt64LE=U(function(e,t=0){return _(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=U(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);I(this,e,t,r,n-1,-n)}let i=0,s=1,o=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},s.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);I(this,e,t,r,n-1,-n)}let i=r-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||I(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigInt64LE=U(function(e,t=0){return _(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=U(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(e,t,r){return S(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return S(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return A(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return A(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,n){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},s.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let o=s.isBuffer(e)?e:s.from(e,n),a=o.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%a]}return this};var x={};function C(e,t,r){x[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name="".concat(this.name," [").concat(e,"]"),this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return"".concat(this.name," [").concat(e,"]: ").concat(this.message)}}}function k(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t="_".concat(e.slice(r-3,r)).concat(t);return"".concat(e.slice(0,r)).concat(t)}function N(e,t,r,n,i,s){if(e>r||e<t){let n="bigint"==typeof t?"n":"",i;throw i=s>3?0===t||t===BigInt(0)?">= 0".concat(n," and < 2").concat(n," ** ").concat((s+1)*8).concat(n):">= -(2".concat(n," ** ").concat((s+1)*8-1).concat(n,") and < 2 ** ")+"".concat((s+1)*8-1).concat(n):">= ".concat(t).concat(n," and <= ").concat(r).concat(n),new x.ERR_OUT_OF_RANGE("value",i,e)}D(i,"offset"),(void 0===n[i]||void 0===n[i+s])&&O(i,n.length-(s+1))}function D(e,t){if("number"!=typeof e)throw new x.ERR_INVALID_ARG_TYPE(t,"number",e)}function O(e,t,r){throw Math.floor(e)!==e?(D(e,r),new x.ERR_OUT_OF_RANGE(r||"offset","an integer",e)):t<0?new x.ERR_BUFFER_OUT_OF_BOUNDS:new x.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(t),e)}C("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"},RangeError),C("ERR_INVALID_ARG_TYPE",function(e,t){return'The "'.concat(e,'" argument must be of type number. Received type ').concat(typeof t)},TypeError),C("ERR_OUT_OF_RANGE",function(e,t,r){let n='The value of "'.concat(e,'" is out of range.'),i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=k(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=k(i)),i+="n"),n+=" It must be ".concat(t,". Received ").concat(i)},RangeError);var R=/[^+/0-9A-Za-z-_]/g;function P(e,t){t=t||1/0;let r,n=e.length,i=null,s=[];for(let o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function L(e){return t.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(R,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function M(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function F(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var V=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function U(e){return typeof BigInt>"u"?j:e}function j(){throw Error("BigInt not supported")}}),y={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>w}),t.exports=d(o({},"__esModule",{value:!0}),y);var v=f(g());n=f(g()),i=t.exports,d(y,n,"default"),i&&d(i,n,"default");var w=v.default;/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/},{}],lnMC7:[function(e,t,r){var n,i,s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"Integer",()=>n),s.export(r,"Md5",()=>i),s.export(r,"default",()=>l);var o=arguments[3],a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o?o:"undefined"!=typeof self?self:{},l={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^r&(i^s))+n[0]+3614090360&4294967295;o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[1]+3905402710&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[2]+606105819&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[3]+3250441966&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[4]+4118548399&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[5]+1200080426&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[6]+2821735955&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[7]+4249261313&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[8]+1770035416&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[9]+2336552879&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[10]+4294925233&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[11]+2304563134&4294967295,o=t+(s^(r=i+(o<<22&4294967295|o>>>10))&(i^s))+n[12]+1804603682&4294967295,o=s+(i^(t=r+(o<<7&4294967295|o>>>25))&(r^i))+n[13]+4254626195&4294967295,o=i+(r^(s=t+(o<<12&4294967295|o>>>20))&(t^r))+n[14]+2792965006&4294967295,o=r+(t^(i=s+(o<<17&4294967295|o>>>15))&(s^t))+n[15]+1236535329&4294967295,r=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(r^i))+n[1]+4129170786&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[0]+3921069994&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[5]+3593408605&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[4]+3889429448&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[9]+568446438&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[8]+1163531501&4294967295,r=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(r^i))+n[13]+2850285829&4294967295,t=r+(o<<5&4294967295|o>>>27),o=s+(r^i&(t^r))+n[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^r&(s^t))+n[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=r+(s^t&(i^s))+n[12]+2368359562&4294967295,o=t+((r=i+(o<<20&4294967295|o>>>12))^i^s)+n[5]+4294588738&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[8]+2272392833&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[11]+1839030562&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[14]+4259657740&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[1]+2763975236&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[4]+1272893353&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[7]+4139469664&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[10]+3200236656&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[13]+681279174&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[0]+3936430074&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[3]+3572445317&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[6]+76029189&4294967295,o=t+((r=i+(o<<23&4294967295|o>>>9))^i^s)+n[9]+3654602809&4294967295,o=s+((t=r+(o<<4&4294967295|o>>>28))^r^i)+n[12]+3873151461&4294967295,o=i+((s=t+(o<<11&4294967295|o>>>21))^t^r)+n[15]+530742520&4294967295,o=r+((i=s+(o<<16&4294967295|o>>>16))^s^t)+n[2]+3299628645&4294967295,r=i+(o<<23&4294967295|o>>>9),o=t+(i^(r|~s))+n[0]+4096336452&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[5]+4237533241&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[12]+1700485571&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[1]+2240044497&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[8]+1873313359&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[13]+1309151649&4294967295,r=i+(o<<21&4294967295|o>>>11),o=t+(i^(r|~s))+n[4]+4149444226&4294967295,t=r+(o<<6&4294967295|o>>>26),o=s+(r^(t|~i))+n[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~r))+n[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=r+(s^(i|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}(function(e,t){function r(){}r.prototype=t.prototype,e.D=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.C=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}})(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(e,r){void 0===r&&(r=e.length);for(var n=r-this.blockSize,i=this.B,s=this.h,o=0;o<r;){if(0==s)for(;o<=n;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<r;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,i),s=0;break}}else for(;o<r;)if(i[s++]=e[o++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=r},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.u(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var s,o={};function a(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(o,e)?o[e]:o[e]=new r([0|e],0>e?-1:0):new r([0|e],0>e?-1:0)}function u(e){if(isNaN(e)||!isFinite(e))return c;if(0>e)return m(u(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var c=a(0),h=a(1),d=a(16777216);function f(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function p(e){return -1==e.h}function m(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(h)}function g(e,t){return e.add(m(t))}function y(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function v(e,t){this.g=e,this.h=t}function w(e,t){if(f(t))throw Error("division by zero");if(f(e))return new v(c,c);if(p(e))return t=w(m(e),t),new v(m(t.g),m(t.h));if(p(t))return t=w(e,m(t)),new v(m(t.g),t.h);if(30<e.g.length){if(p(e)||p(t))throw Error("slowDivide_ only works with positive integers.");for(var r=h,n=t;0>=n.l(e);)r=b(r),n=b(n);var i=I(r,1),s=I(n,1);for(n=I(n,2),r=I(r,2);!f(n);){var o=s.add(n);0>=o.l(e)&&(i=i.add(r),s=o),n=I(n,1),r=I(r,1)}return t=g(e,i.j(t)),new v(i,t)}for(i=c;0<=e.l(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,n-48),o=(s=u(r)).j(t);p(o)||0<o.l(e);)r-=n,o=(s=u(r)).j(t);f(s)&&(s=h),i=i.add(s),e=g(e,o)}return new v(i,e)}function b(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function I(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(s=r.prototype).m=function(){if(p(this))return-m(this).m();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.i(r);e+=(0<=n?n:4294967296+n)*t,t*=4294967296}return e},s.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(f(this))return"0";if(p(this))return"-"+m(this).toString(e);for(var t=u(Math.pow(e,6)),r=this,n="";;){var i=w(r,t).g,s=((0<(r=g(r,i.j(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(f(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},s.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},s.l=function(e){return p(e=g(this,e))?-1:f(e)?0:1},s.abs=function(){return p(this)?m(this):this},s.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},s.j=function(e){if(f(this)||f(e))return c;if(p(this))return p(e)?m(this).j(m(e)):m(m(this).j(e));if(p(e))return m(this.j(m(e)));if(0>this.l(d)&&0>e.l(d))return u(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var o=this.i(i)>>>16,a=65535&this.i(i),l=e.i(s)>>>16,h=65535&e.i(s);n[2*i+2*s]+=a*h,y(n,2*i+2*s),n[2*i+2*s+1]+=o*h,y(n,2*i+2*s+1),n[2*i+2*s+1]+=a*l,y(n,2*i+2*s+1),n[2*i+2*s+2]+=o*l,y(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},s.A=function(e){return w(this,e).h},s.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},s.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},s.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,i=l.Md5=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=u,r.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return m(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=u(Math.pow(r,8)),i=c,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),r);8>o?(o=u(Math.pow(r,o)),i=i.j(o).add(u(a))):i=(i=i.j(n)).add(u(a))}return i},n=l.Integer=r}).apply(void 0!==a?a:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],aX0EQ:[function(e,t,r){var n,i,s,o,a,l,Event,u,c,h=e("@parcel/transformer-js/src/esmodule-helpers.js");h.defineInteropFlag(r),h.export(r,"ErrorCode",()=>a),h.export(r,"Event",()=>Event),h.export(r,"EventType",()=>o),h.export(r,"FetchXmlHttpFactory",()=>i),h.export(r,"Stat",()=>l),h.export(r,"WebChannel",()=>s),h.export(r,"XhrIo",()=>n),h.export(r,"createWebChannelTransport",()=>c),h.export(r,"default",()=>p),h.export(r,"getStatEventTarget",()=>u);var d=arguments[3],f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==d?d:"undefined"!=typeof self?self:{},p={};(function(){var e,t,r,h="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e},d=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof f&&f];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var r=d;e=e.split(".");for(var n=0;n<e.length-1;n++){var i=e[n];if(!(i in r))break e;r=r[i]}(t=t(n=r[e=e[e.length-1]]))!=n&&null!=t&&h(r,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,r,n;return e=this,e instanceof String&&(e+=""),t=0,r=!1,(n={next:function(){if(!r&&t<e.length)return{value:e[t++],done:!1};return r=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return n},n}});var m=m||{},g=this||self;function y(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function v(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function w(e,t,r){return e.call.apply(e.bind,arguments)}function b(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function I(e,t,r){return(I=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:b).apply(null,arguments)}function _(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function r(){}r.prototype=t.prototype,e.aa=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Qb=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function T(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function S(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(y(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function A(e){return/^[\s\xa0]*$/.test(e)}function x(){var e=g.navigator;return e&&(e=e.userAgent)?e:""}function C(e){return C[" "](e),e}C[" "]=function(){};var k=-1!=x().indexOf("Gecko")&&!(-1!=x().toLowerCase().indexOf("webkit")&&-1==x().indexOf("Edge"))&&!(-1!=x().indexOf("Trident")||-1!=x().indexOf("MSIE"))&&-1==x().indexOf("Edge");function N(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function D(e){let t={};for(let r in e)t[r]=e[r];return t}let O="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<O.length;t++)r=O[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}var P=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new L,e=>e.reset());class L{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let M,F=!1,V=new class{constructor(){this.h=this.g=null}add(e,t){let r=P.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},U=()=>{let e=g.Promise.resolve(void 0);M=()=>{e.then(j)}};var j=()=>{let e;for(var t;e=null,V.g&&(e=V.g,V.g=V.g.next,V.g||(V.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){g.setTimeout(()=>{throw e},0)}(e)}P.j(t),100>P.h&&(P.h++,t.next=P.g,P.g=t)}F=!1};function B(){this.s=this.s,this.C=this.C}function q(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},q.prototype.h=function(){this.defaultPrevented=!0};var z=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};g.addEventListener("test",e,t),g.removeEventListener("test",e,t)}catch(e){}return e}();function G(e,t){if(q.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(k){e:{try{C(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:$[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.aa.h.call(this)}}E(G,q);var $={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),H=0;function W(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++H,this.da=this.fa=!1}function Q(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function J(e){this.src=e,this.g={},this.h=0}function Y(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=Array.prototype.indexOf.call(i,t,void 0);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(Q(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function X(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!r==s.capture&&s.ha==n)return i}return -1}J.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=X(e,t,n,i);return -1<o?(t=e[o],r||(t.fa=!1)):((t=new W(t,this.src,s,!!n,i)).fa=r,e.push(t)),t};var Z="closure_lm_"+(1e6*Math.random()|0),ee={};function et(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var o=v(i)?!!i.capture:!!i,a=es(e);if(a||(e[Z]=a=new J(e)),(r=a.add(t,r,n,o,s)).proxy)return r;if(n=function e(t){return ei.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)z||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(en(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function er(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[K])Y(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(en(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=es(t))?(Y(r,e),0==r.h&&(r.src=null,t[Z]=null)):Q(e)}}}function en(e){return e in ee?ee[e]:ee[e]="on"+e}function ei(e,t){if(e.da)e=!0;else{t=new G(t,this);var r=e.listener,n=e.ha||e.src;e.fa&&er(e),e=r.call(n,t)}return e}function es(e){return(e=e[Z])instanceof J?e:null}var eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function ea(e){return"function"==typeof e?e:(e[eo]||(e[eo]=function(t){return e.handleEvent(t)}),e[eo])}function el(){B.call(this),this.i=new J(this),this.M=this,this.F=null}function eu(e,t){var r,n=e.F;if(n)for(r=[];n;n=n.F)r.push(n);if(e=e.M,n=t.type||t,"string"==typeof t)t=new q(t,e);else if(t instanceof q)t.target=t.target||e;else{var i=t;R(t=new q(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=ec(o,n,!0,t)&&i}if(i=ec(o=t.g=e,n,!0,t)&&i,i=ec(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=ec(o=t.g=r[s],n,!1,t)&&i}function ec(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==r){var a=o.listener,l=o.ha||o.src;o.fa&&Y(e.i,o),i=!1!==a.call(l,n)&&i}}return i&&!n.defaultPrevented}function eh(e,t,r){if("function"==typeof e)r&&(e=I(e,r));else if(e&&"function"==typeof e.handleEvent)e=I(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:g.setTimeout(e,t||0)}E(el,B),el.prototype[K]=!0,el.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);else(i=v(i)?!!i.capture:!!i,n=ea(n),t&&t[K])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=X(o=t.g[r],n,i,s))&&(Q(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[r],t.h--))):t&&(t=es(t))&&(r=t.g[r.toString()],t=-1,r&&(t=X(r,n,i,s)),(n=-1<t?r[t]:null)&&er(n))}(this,e,t,r,n)},el.prototype.N=function(){if(el.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)Q(r[n]);delete t.g[e],t.h--}}this.F=null},el.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},el.prototype.L=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class ed extends B{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eh(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ef(e){B.call(this),this.h=e,this.g={}}E(ef,B);var ep=[];function em(e){N(e.g,function(e,t){this.g.hasOwnProperty(t)&&er(e)},e),e.g={}}ef.prototype.N=function(){ef.aa.N.call(this),em(this)},ef.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var eg=g.JSON.stringify,ey=g.JSON.parse,ev=class{stringify(e){return g.JSON.stringify(e,void 0)}parse(e){return g.JSON.parse(e,void 0)}};function ew(){}function eb(e){return e.h||(e.h=e.i())}function eI(){}ew.prototype.h=null;var e_={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eE(){q.call(this,"d")}function eT(){q.call(this,"c")}E(eE,q),E(eT,q);var eS={},eA=null;function ex(){return eA=eA||new el}function eC(e){q.call(this,eS.La,e)}function ek(e){let t=ex();eu(t,new eC(t))}function eN(e,t){q.call(this,eS.STAT_EVENT,e),this.stat=t}function eD(e){let t=ex();eu(t,new eN(t,e))}function eO(e,t){q.call(this,eS.Ma,e),this.size=t}function eR(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){e()},t)}function eP(){this.g=!0}function eL(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return eg(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eS.La="serverreachability",E(eC,q),eS.STAT_EVENT="statevent",E(eN,q),eS.Ma="timingevent",E(eO,q),eP.prototype.xa=function(){this.g=!1},eP.prototype.info=function(){};var eM={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eF={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eV(){}function eU(e,t,r,n){this.j=e,this.i=t,this.l=r,this.R=n||1,this.U=new ef(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ej}function ej(){this.i=null,this.g="",this.h=!1}E(eV,ew),eV.prototype.g=function(){return new XMLHttpRequest},eV.prototype.i=function(){return{}},t=new eV;var eB={},eq={};function ez(e,t,r){e.L=1,e.v=ti(e7(t)),e.m=r,e.P=!0,eG(e,null)}function eG(e,t){e.F=Date.now(),eK(e),e.A=e7(e.v);var r=e.A,n=e.R;Array.isArray(n)||(n=[String(n)]),ty(r.i,"t",n),e.C=0,r=e.j.J,e.h=new ej,e.g=t4(e.j,r?t:null,!e.m),0<e.O&&(e.M=new ed(I(e.Y,e,e.g),e.O)),t=e.U,r=e.g,n=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ep[0]=i.toString()),i=ep);for(var s=0;s<i.length;s++){var o=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=ea(n),t&&t[K]?t.L(r,n,v(i)?!!i.capture:!!i,s):et(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=ea(n),t&&t[K]?t.K(r,n,v(i)?!!i.capture:!!i,s):et(t,r,n,!1,i,s)}(r,i[s],n||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?D(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ek(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function e$(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function eK(e){e.S=Date.now()+e.I,eH(e,e.I)}function eH(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eR(I(e.ba,e),t)}function eW(e){e.B&&(g.clearTimeout(e.B),e.B=null)}function eQ(e){0==e.j.G||e.J||tX(e.j,e)}function eJ(e){eW(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,em(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eY(e,t){try{var r=e.j;if(0!=r.G&&(r.g==e||e2(r.h,e))){if(!e.K&&e2(r.h,e)&&3==r.G){try{var n=r.Da.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.F+3e3<e.F)tY(r),tB(r);else break e}tW(r),eD(18)}}else r.za=i[1],0<r.za-r.T&&37500>i[2]&&r.F&&0==r.v&&!r.C&&(r.C=eR(I(r.Za,r),6e3));if(1>=e1(r.h)&&r.ca){try{r.ca()}catch(e){}r.ca=void 0}}else t0(r,11)}else if((e.K||r.g==e)&&tY(r),!A(t))for(i=r.Da.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(r.T=a[0],a=a[1],2==r.G){if("c"==a[0]){r.K=a[1],r.ia=a[2];let t=a[3];null!=t&&(r.la=t,r.j.info("VER="+r.la));let i=a[4];null!=i&&(r.Aa=i,r.j.info("SVER="+r.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e4(s,s.h),s.h=null))}if(n.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.ya=e,tn(n.I,n.D,e))}}if(r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-e.F,r.j.info("Handshake RTT: "+r.R+"ms")),(n=r).qa=t2(n,n.J?n.ia:null,n.W),e.K){e6(n.h,e);var o=n.L;o&&(e.I=o),e.B&&(eW(e),eK(e)),n.g=e}else tH(n);0<r.i.length&&tz(r)}else"stop"!=a[0]&&"close"!=a[0]||t0(r,7)}else 3==r.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?t0(r,7):tj(r):"noop"!=a[0]&&r.l&&r.l.ta(a),r.v=0)}}ek(4)}catch(e){}}eU.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tM(e)?t.j():this.Y(e)},eU.prototype.Y=function(e){try{if(e==this.g)e:{let h=tM(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>h)&&(3!=h||this.g&&(this.h.h||this.g.oa()||tF(this.g)))){this.J||4!=h||7==t||(8==t||0>=d?ek(3):ek(2)),eW(this);var r=this.g.Z();this.X=r;t:if(e$(this)){var n=tF(this.g);e="";var i=n.length,s=4==tM(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eJ(this),eQ(this);var o="";break t}this.h.i=new g.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:!(s&&t==i-1)});n.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==r,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,h,r),this.o){if(this.T&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(a)){var u=a;break t}}u=null}if(r=u)eL(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eY(this,r);else{this.o=!1,this.s=3,eD(12),eJ(this),eQ(this);break e}}if(this.P){let e;for(r=!0;!this.J&&this.C<o.length;)if((e=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?eq:isNaN(r=Number(t.substring(r,n)))?eB:(n+=1)+r>t.length?eq:(t=t.slice(n,n+r),e.C=n+r,t)}(this,o))==eq){4==h&&(this.s=4,eD(14),r=!1),eL(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eB){this.s=4,eD(15),eL(this.i,this.l,o,"[Invalid Chunk]"),r=!1;break}else eL(this.i,this.l,e,null),eY(this,e);if(e$(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=h||0!=o.length||this.h.h||(this.s=1,eD(16),r=!1),this.o=this.o&&r,r){if(0<o.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),tQ(c),c.M=!0,eD(11))}}else eL(this.i,this.l,o,"[Invalid Chunked Response]"),eJ(this),eQ(this)}else eL(this.i,this.l,o,null),eY(this,o);4==h&&eJ(this),this.o&&!this.J&&(4==h?tX(this.j,this):(this.o=!1,eK(this)))}else(function(e){let t={};e=(e.g&&2<=tM(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(A(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<o.indexOf("Unknown SID")?(this.s=3,eD(12)):(this.s=0,eD(13)),eJ(this),eQ(this)}}}catch(e){}finally{}},eU.prototype.cancel=function(){this.J=!0,eJ(this)},eU.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(ek(),eD(17)),eJ(this),this.s=2,eQ(this)):eH(this,this.S-e)};var eX=class{constructor(e,t){this.g=e,this.map=t}};function eZ(e){this.l=e||10,e=g.PerformanceNavigationTiming?0<(e=g.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function e0(e){return!!e.h||!!e.g&&e.g.size>=e.j}function e1(e){return e.h?1:e.g?e.g.size:0}function e2(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e4(e,t){e.g?e.g.add(t):e.h=t}function e6(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e5(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.D);return t}return T(e.i)}function e9(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(y(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(y(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(y(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}eZ.prototype.cancel=function(){if(this.i=e5(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e3=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e8(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e8){this.h=e.h,te(this,e.j),this.o=e.o,this.g=e.g,tt(this,e.s),this.l=e.l;var t=e.i,r=new tf;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),tr(this,r),this.m=e.m}else e&&(t=String(e).match(e3))?(this.h=!1,te(this,t[1]||"",!0),this.o=ts(t[2]||""),this.g=ts(t[3]||"",!0),tt(this,t[4]),this.l=ts(t[5]||"",!0),tr(this,t[6]||"",!0),this.m=ts(t[7]||"")):(this.h=!1,this.i=new tf(null,this.h))}function e7(e){return new e8(e)}function te(e,t,r){e.j=r?ts(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tt(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function tr(e,t,r){var n,i;t instanceof tf?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tp(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tm(this,t),ty(this,r,e))},n)),n.j=i):(r||(t=to(t,th)),e.i=new tf(t,e.h))}function tn(e,t,r){e.i.set(t,r)}function ti(e){return tn(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ts(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function to(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,ta),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ta(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e8.prototype.toString=function(){var e=[],t=this.j;t&&e.push(to(t,tl,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(to(t,tl,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.s)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(to(r,"/"==r.charAt(0)?tc:tu,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",to(r,td)),e.join("")};var tl=/[#\/\?@]/g,tu=/[#\?:]/g,tc=/[#\?]/g,th=/[#\?@]/g,td=/#/g;function tf(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tp(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tm(e,t){tp(e),t=tv(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tg(e,t){return tp(e),t=tv(e,t),e.g.has(t)}function ty(e,t,r){tm(e,t),0<r.length&&(e.i=null,e.g.set(tv(e,t),T(r)),e.h+=r.length)}function tv(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tw(e,t,r,n,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),n(r)}catch(e){}}function tb(){this.g=new ev}function tI(e){this.l=e.Ub||null,this.j=e.eb||!1}function t_(e,t){el.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tE(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tT(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tS(e)}function tS(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tA(e){let t="";return N(e,function(e,r){t+=r+":"+e+"\r\n"}),t}function tx(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=tA(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):tn(e,t,r))}function tC(e){el.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(r=tf.prototype).add=function(e,t){tp(this),this.i=null,e=tv(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},r.forEach=function(e,t){tp(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},r.na=function(){tp(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},r.V=function(e){tp(this);let t=[];if("string"==typeof e)tg(this,e)&&(t=t.concat(this.g.get(tv(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},r.set=function(e,t){return tp(this),this.i=null,tg(this,e=tv(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),o=this.V(n);for(n=0;n<o.length;n++){var i=s;""!==o[n]&&(i+="="+encodeURIComponent(String(o[n]))),e.push(i)}}return this.i=e.join("&")},E(tI,ew),tI.prototype.g=function(){return new t_(this.l,this.j)},tI.prototype.i=(e={},function(){return e}),E(t_,el),(r=t_.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tS(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||g).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tT(this)),this.readyState=0},r.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tS(this)),this.g&&(this.readyState=3,tS(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==g.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tE(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},r.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tT(this):tS(this),3==this.readyState&&tE(this)}},r.Ra=function(e){this.g&&(this.response=this.responseText=e,tT(this))},r.Qa=function(e){this.g&&(this.response=e,tT(this))},r.ga=function(){this.g&&tT(this)},r.setRequestHeader=function(e,t){this.u.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(t_.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),E(tC,el);var tk=/^https?$/i,tN=["POST","PUT"];function tD(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tO(e),tP(e)}function tO(e){e.A||(e.A=!0,eu(e,"complete"),eu(e,"error"))}function tR(e){if(e.h&&void 0!==m&&(!e.v[1]||4!=tM(e)||2!=e.Z())){if(e.u&&4==tM(e))eh(e.Ea,0,e);else if(eu(e,"readystatechange"),4==tM(e)){e.h=!1;try{let o=e.Z();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===o){var i=String(e.D).match(e3)[1]||null;!i&&g.self&&g.self.location&&(i=g.self.location.protocol.slice(0,-1)),r=!tk.test(i?i.toLowerCase():"")}t=r}if(t)eu(e,"complete"),eu(e,"success");else{e.m=6;try{var s=2<tM(e)?e.g.statusText:""}catch(e){s=""}e.l=s+" ["+e.Z()+"]",tO(e)}}finally{tP(e)}}}}function tP(e,t){if(e.g){tL(e);let r=e.g,n=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||eu(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function tL(e){e.I&&(g.clearTimeout(e.I),e.I=null)}function tM(e){return e.g?e.g.readyState:0}function tF(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tV(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function tU(e){this.Aa=0,this.i=[],this.j=new eP,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tV("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tV("baseRetryDelayMs",5e3,e),this.cb=tV("retryDelaySeedMs",1e4,e),this.Wa=tV("forwardChannelMaxRetries",2,e),this.wa=tV("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eZ(e&&e.concurrentRequestLimit),this.Da=new tb,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tj(e){if(tq(e),3==e.G){var t=e.U++,r=e7(e.I);if(tn(r,"SID",e.K),tn(r,"RID",t),tn(r,"TYPE","terminate"),t$(e,r),(t=new eU(e,e.j,t)).L=2,t.v=ti(e7(r)),r=!1,g.navigator&&g.navigator.sendBeacon)try{r=g.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&g.Image&&((new Image).src=t.v,r=!0),r||(t.g=t4(t.j,null),t.g.ea(t.v)),t.F=Date.now(),eK(t)}t1(e)}function tB(e){e.g&&(tQ(e),e.g.cancel(),e.g=null)}function tq(e){tB(e),e.u&&(g.clearTimeout(e.u),e.u=null),tY(e),e.h.cancel(),e.s&&("number"==typeof e.s&&g.clearTimeout(e.s),e.s=null)}function tz(e){if(!e0(e.h)&&!e.s){e.s=!0;var t=e.Ga;M||U(),F||(M(),F=!0),V.add(t,e),e.B=0}}function tG(e,t){var r;r=t?t.l:e.U++;let n=e7(e.I);tn(n,"SID",e.K),tn(n,"RID",r),tn(n,"AID",e.T),t$(e,n),e.m&&e.o&&tx(n,e.m,e.o),r=new eU(e,e.j,r,e.B+1),null===e.m&&(r.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tK(e,r,1e3),r.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e4(e.h,r),ez(r,n,t)}function t$(e,t){e.H&&N(e.H,function(e,r){tn(t,r,e)}),e.l&&e9({},function(e,r){tn(t,r,e)})}function tK(e,t,r){r=Math.min(e.i.length,r);var n=e.l?I(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<r;o++){let r=i[o].g,a=i[o].map;if(0>(r-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{e9(e,function(e,r){let i=e;v(e)&&(i=eg(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+r+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function tH(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;M||U(),F||(M(),F=!0),V.add(t,e),e.v=0}}function tW(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eR(I(e.Fa,e),tZ(e,e.v)),e.v++,!0)}function tQ(e){null!=e.A&&(g.clearTimeout(e.A),e.A=null)}function tJ(e){e.g=new eU(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e7(e.qa);tn(t,"RID","rpc"),tn(t,"SID",e.K),tn(t,"AID",e.T),tn(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tn(t,"TO",e.ja),tn(t,"TYPE","xmlhttp"),t$(e,t),e.m&&e.o&&tx(t,e.m,e.o),e.L&&(e.g.I=e.L);var r=e.g;e=e.ia,r.L=1,r.v=ti(e7(t)),r.m=null,r.P=!0,eG(r,e)}function tY(e){null!=e.C&&(g.clearTimeout(e.C),e.C=null)}function tX(e,t){var r=null;if(e.g==t){tY(e),tQ(e),e.g=null;var n=2}else{if(!e2(e.h,t))return;r=t.D,e6(e.h,t),n=1}if(0!=e.G){if(t.o){if(1==n){r=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;eu(n=ex(),new eO(n,r)),tz(e)}else tH(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==n&&(i=t,!(e1(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eR(I(e.Ga,e,i),tZ(e,e.B)),e.B++,!0)))||2==n&&tW(e)))switch(r&&0<r.length&&((t=e.h).i=t.i.concat(r)),s){case 1:t0(e,5);break;case 4:t0(e,10);break;case 3:t0(e,6);break;default:t0(e,2)}}}function tZ(e,t){let r=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(r*=2),r*t}function t0(e,t){if(e.j.info("Error code "+t),2==t){var r=I(e.fb,e),n=e.Xa;let t=!n;n=new e8(n||"//www.google.com/images/cleardot.gif"),g.location&&"http"==g.location.protocol||te(n,"https"),ti(n),t?function(e,t){let r=new eP;if(g.Image){let n=new Image;n.onload=_(tw,r,"TestLoadImage: loaded",!0,t,n),n.onerror=_(tw,r,"TestLoadImage: error",!1,t,n),n.onabort=_(tw,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=_(tw,r,"TestLoadImage: timeout",!1,t,n),g.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(n.toString(),r):function(e,t){let r=new eP,n=new AbortController,i=setTimeout(()=>{n.abort(),tw(r,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(i),e.ok?tw(r,"TestPingServer: ok",!0,t):tw(r,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tw(r,"TestPingServer: error",!1,t)})}(n.toString(),r)}else eD(2);e.G=0,e.l&&e.l.sa(t),t1(e),tq(e)}function t1(e){if(e.G=0,e.ka=[],e.l){let t=e5(e.h);(0!=t.length||0!=e.i.length)&&(S(e.ka,t),S(e.ka,e.i),e.h.i.length=0,T(e.i),e.i.length=0),e.l.ra()}}function t2(e,t,r){var n=r instanceof e8?e7(r):new e8(r);if(""!=n.g)t&&(n.g=t+"."+n.g),tt(n,n.s);else{var i=g.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e8(null);n&&te(s,n),t&&(s.g=t),i&&tt(s,i),r&&(s.l=r),n=s}return r=e.D,t=e.ya,r&&t&&tn(n,r,t),tn(n,"VER",e.la),t$(e,n),n}function t4(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tC(e.Ca&&!e.pa?new tI({eb:r}):e.pa)).Ha(e.J),t}function t6(){}function t5(){}function t9(e,t){el.call(this),this.g=new tU(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!A(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!A(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t7(this)}function t3(e){eE.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t8(){eT.call(this),this.status=1}function t7(e){this.g=e}(r=tC.prototype).Ha=function(e){this.J=e},r.ea=function(e,r,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);r=r?r.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?eb(this.o):eb(t),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(r,String(e),!0),this.B=!1}catch(e){tD(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,o]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=g.FormData&&e instanceof g.FormData,!(0<=Array.prototype.indexOf.call(tN,r,void 0))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(t,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tL(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tD(this,e)}},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,eu(this,"complete"),eu(this,"abort"),tP(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tP(this,!0)),tC.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?tR(this):this.bb())},r.bb=function(){tR(this)},r.isActive=function(){return!!this.g},r.Z=function(){try{return 2<tM(this)?this.g.status:-1}catch(e){return -1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ey(t)}},r.Ba=function(){return this.m},r.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(r=tU.prototype).la=8,r.G=1,r.connect=function(e,t,r,n){eD(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.I=t2(this,null,this.W),tz(this)},r.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eU(this,this.j,e),s=this.o;if(this.S&&(s?R(s=D(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=tK(this,i,t),tn(r=e7(this.I),"RID",e),tn(r,"CVER",22),this.D&&tn(r,"X-HTTP-Session-Id",this.D),t$(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(tA(s)))+"&"+t:this.m&&tx(r,this.m,s)),e4(this.h,i),this.Ua&&tn(r,"TYPE","init"),this.P?(tn(r,"$req",t),tn(r,"SID","null"),i.T=!0,ez(i,r,null)):ez(i,r,t),this.G=2}}else 3==this.G&&(e?tG(this,e):0==this.i.length||e0(this.h)||tG(this))}},r.Fa=function(){if(this.u=null,tJ(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eR(I(this.ab,this),e)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eD(10),tB(this),tJ(this))},r.Za=function(){null!=this.C&&(this.C=null,tB(this),tW(this),eD(19))},r.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eD(2)):(this.j.info("Failed to ping google.com"),eD(1))},r.isActive=function(){return!!this.l&&this.l.isActive(this)},(r=t6.prototype).ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){},t5.prototype.g=function(e,t){return new t9(e,t)},E(t9,el),t9.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t9.prototype.close=function(){tj(this.g)},t9.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.u&&((r={}).__data__=eg(e),e=r);t.i.push(new eX(t.Ya++,e)),3==t.G&&tz(t)},t9.prototype.N=function(){this.g.l=null,delete this.j,tj(this.g),delete this.g,t9.aa.N.call(this)},E(t3,eE),E(t8,eT),E(t7,t6),t7.prototype.ua=function(){eu(this.g,"a")},t7.prototype.ta=function(e){eu(this.g,new t3(e))},t7.prototype.sa=function(e){eu(this.g,new t8)},t7.prototype.ra=function(){eu(this.g,"b")},t5.prototype.createWebChannel=t5.prototype.g,t9.prototype.send=t9.prototype.o,t9.prototype.open=t9.prototype.m,t9.prototype.close=t9.prototype.close,c=p.createWebChannelTransport=function(){return new t5},u=p.getStatEventTarget=function(){return ex()},Event=p.Event=eS,l=p.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eM.NO_ERROR=0,eM.TIMEOUT=8,eM.HTTP_ERROR=6,a=p.ErrorCode=eM,eF.COMPLETE="complete",o=p.EventType=eF,eI.EventType=e_,e_.OPEN="a",e_.CLOSE="b",e_.ERROR="c",e_.MESSAGE="d",el.prototype.listen=el.prototype.K,s=p.WebChannel=eI,i=p.FetchXmlHttpFactory=tI,tC.prototype.listenOnce=tC.prototype.L,tC.prototype.getLastError=tC.prototype.Ka,tC.prototype.getLastErrorCode=tC.prototype.Ba,tC.prototype.getStatus=tC.prototype.Z,tC.prototype.getResponseJson=tC.prototype.Oa,tC.prototype.getResponseText=tC.prototype.oa,tC.prototype.send=tC.prototype.ea,tC.prototype.setWithCredentials=tC.prototype.Ha,n=p.XhrIo=tC}).apply(void 0!==f?f:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],kdNLa:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"CONFIG",()=>i),n.export(r,"getErrorMessage",()=>s),n.export(r,"formatDate",()=>o),n.export(r,"calculateRemainingDownloads",()=>a);let i={FREE_DAILY_LIMIT:5,FIREBASE:{apiKey:"AIzaSyAi8wJkrojFZloJf6OGJHT0dJejnLSxaME",authDomain:"onlyfansdownloader-b024f.firebaseapp.com",projectId:"onlyfansdownloader-b024f",storageBucket:"onlyfansdownloader-b024f.firebasestorage.app",messagingSenderId:"612506226549",appId:"1:612506226549:web:559abaa4ecfc40635a0d3c"},STRIPE:{publishableKey:"pk_test_your_stripe_publishable_key",monthlyPriceId:"https://buy.stripe.com/test_aFa28r3FydFGeHpe8T48000",yearlyPriceId:"price_yearly_subscription"},BACKEND_URL:"http://localhost:3000"},s=e=>"string"==typeof e?e:e?.message?e.message:"\u53d1\u751f\u672a\u77e5\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",o=(e,t="zh-CN")=>new Intl.DateTimeFormat(t,{year:"numeric",month:"long",day:"numeric"}).format(e),a=e=>{if(!e)return i.FREE_DAILY_LIMIT;let t=new Date().toDateString(),r=e.lastDownloadDate!==t,n=r?0:e.dailyDownloads;return e.isSubscribed&&e.subscriptionEndDate&&e.subscriptionEndDate>new Date?-1:Math.max(0,i.FREE_DAILY_LIMIT-n)}},{"@parcel/transformer-js/src/esmodule-helpers.js":"f6DG4"}],lSzt3:[function(e,t,r){chrome.webRequest.onSendHeaders.addListener(e=>{if(-1!=e.url.indexOf("#trilobite")||e.tabId<0||!e.url.match(/(onlyfans\.com\/api2\/v2\/(posts|users\/[0-9]+\/posts)|onlyfans\.com\/[0-9]+\/)/g))return;let t=new Set(["Sec-Fetch-Site","Sec-Fetch-Mode","Sec-Fetch-Dest","Sec-Fetch-User","DNT","User-Agent","sec-ch-ua-platform","sec-ch-ua-mobile","sec-ch-ua"]),r={};for(var n=0;n<e.requestHeaders.length;++n)t.has(e.requestHeaders[n].name)||(r[e.requestHeaders[n].name]=e.requestHeaders[n].value);chrome.tabs.sendMessage(e.tabId,{url:e.url,isForDm:-1!=e.url.indexOf("messages"),headers:r},e=>{chrome.runtime.lastError})},{urls:["*://*.onlyfans.com/*"]},["requestHeaders"]),chrome.runtime.onMessage.addListener(e=>{console.log("Received message to download: ",e);let t=e[0];if(!t)return;let r=e[1],n=t.substring(t.lastIndexOf("/")+1,t.lastIndexOf("?")+0);chrome.storage.sync.get({autoCreateFolder:!0},e=>{e.autoCreateFolder?chrome.downloads.download({filename:r+"/"+n,url:t,conflictAction:"uniquify",saveAs:!1}):chrome.downloads.download({url:t,conflictAction:"uniquify",saveAs:!1})})})},{}]},["kgW6q"],"kgW6q","parcelRequire0eb6"),globalThis.define=t;
