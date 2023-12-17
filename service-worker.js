/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/MyGithub/hexo/public/2020-07/010Editor的Template-安装与使用/index.html","0c1234c07312ffb845484066b46218d4"],["D:/MyGithub/hexo/public/2020-07/Kali2019解决无法定位软件包问题/index.html","6f131a852ebc3965ffbc1a47e438f40e"],["D:/MyGithub/hexo/public/2020-07/MyDaily/index.html","4bac957f336144992f166b7ec674c4f2"],["D:/MyGithub/hexo/public/2020-07/Ubuntu下的docker安装/index.html","146c48893e21d357bbf5edadb0ea112b"],["D:/MyGithub/hexo/public/2020-07/Windows-server-2003域环境配置win7加入时出现DNS相关问题/index.html","52c40677ae9a50fe138483bc56929ec9"],["D:/MyGithub/hexo/public/2020-08/CVE-2019-16920学习/index.html","b5992532d6906ffa16f1500da8f5acac"],["D:/MyGithub/hexo/public/2020-08/TRENDnet固件获取文件系统/index.html","6fde456bc54ddf44d20a9c0b8b6c4769"],["D:/MyGithub/hexo/public/2020-08/复现CVE-2017-17215，解决连接问题/index.html","59f497af601bb813696f66b443abcd7a"],["D:/MyGithub/hexo/public/2020-08/新Ubuntu初始化指南/index.html","ee1b1f192dfa17bbd010524024834e78"],["D:/MyGithub/hexo/public/2021-01/hello-world/index.html","b6692a016232cce863a1672d558e9f06"],["D:/MyGithub/hexo/public/2021-04/IDA-辅助工具Karta简单使用教程/index.html","8346dd2187f76ff7e40b13c38c48e190"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-0/index.html","3eaef388086e0a73d5317c33219c235c"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-1/index.html","8de44182942b4fdad6a7c36d5ccc42ac"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-2/index.html","2ad40161cd979a910d7be525f1d29a97"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-3/index.html","f34da749cf30dd5c33c901b35a1cdd7a"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-4/index.html","507fb09b3000845bd99ff07995ff659a"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-5/index.html","21d4173eef41b95284a0ef6c2a03f68c"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-10/index.html","05f35ac71a9185631c73ba284a89cc6d"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-11/index.html","1d56a283ddcf2e9c48cb77446fc1f06a"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-6/index.html","015214205107375831386ae41d685df7"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-7/index.html","13b2c0192f65cfa96f96bad550090252"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-8/index.html","8df032e30c9ced26c66caf40ad3fd86b"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-9/index.html","63e0a0b11df791f03d3cf30a9c6a08f7"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Format/index.html","2c6553b22e7e0a2d8c9e670c0593b7c9"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Heap/index.html","dc6667df5333f445a725aba1d9d5edfe"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Integer/index.html","3dc6f43ee405130495b51cd98dd4f6ab"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Stack/index.html","7a7b8bb9326118b84002097c88e0c88b"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱/index.html","bba7c06255225b3b1ad1b340e627d59a"],["D:/MyGithub/hexo/public/2022-04/KeepTrying/index.html","2aab76d5fc0f0bd8113af9ff848b0e66"],["D:/MyGithub/hexo/public/2022-04/PWN入门到入狱-Code/index.html","7d1b245338c4fbc5964ee81f2ce224f9"],["D:/MyGithub/hexo/public/2022-05/pwn题如何配置和靶机一样的环境/index.html","8bd4ea39c866e7eec645cb3a9c3a0851"],["D:/MyGithub/hexo/public/2022-05/从0开始的pwn题环境配置/index.html","3b1e707f9f15238f5bf91abf255794fb"],["D:/MyGithub/hexo/public/2022-07/C语言学习到放弃/index.html","7ea53298346d479d8a1a3577ccc8179c"],["D:/MyGithub/hexo/public/2023-05/阅读简记/index.html","9dcedba6b91a92df00307a7b65c0a0b4"],["D:/MyGithub/hexo/public/2023-12/CISP-PTE培训简记/index.html","73054136e6a1a88250345fe7d520a4b3"],["D:/MyGithub/hexo/public/404.html","8e4d14acc4f5d16606435ca599649aca"],["D:/MyGithub/hexo/public/about/index.html","52b60a9467ac71dba33fbb5c81445d55"],["D:/MyGithub/hexo/public/archives/2020/07/index.html","a68ae139b7edbcd2b952aee7f78afb2b"],["D:/MyGithub/hexo/public/archives/2020/08/index.html","64657f3f8010cf6eacd8da9179e4a5cd"],["D:/MyGithub/hexo/public/archives/2020/index.html","1a832c5c399c1261fe3b065f8630a74f"],["D:/MyGithub/hexo/public/archives/2021/01/index.html","16b900da9f37c543569dbe6f1b1e8855"],["D:/MyGithub/hexo/public/archives/2021/04/index.html","4d5b2a0f1c4d208d2e87a0cdb5ef07e1"],["D:/MyGithub/hexo/public/archives/2021/06/index.html","44d01c87f6e42d6d2fb878562b68b606"],["D:/MyGithub/hexo/public/archives/2021/07/index.html","c8dde9c4dc262f5b33b00d833fef028e"],["D:/MyGithub/hexo/public/archives/2021/index.html","368f851f1f746325fe028f24b743a9b1"],["D:/MyGithub/hexo/public/archives/2021/page/2/index.html","b982cef437f4c242cd7f076d409fb7c6"],["D:/MyGithub/hexo/public/archives/2022/03/index.html","c324879d81a760b9538d9bc4792e2b6a"],["D:/MyGithub/hexo/public/archives/2022/04/index.html","ad58a2fb42ee12a68c3d3738d9267034"],["D:/MyGithub/hexo/public/archives/2022/05/index.html","694848872042b74a7deaf9096ef7c94d"],["D:/MyGithub/hexo/public/archives/2022/07/index.html","03b49060c959aa84a66ad2c00f669d7c"],["D:/MyGithub/hexo/public/archives/2022/index.html","a1d91aac2d3bd55b909cbefe40faf439"],["D:/MyGithub/hexo/public/archives/2023/05/index.html","19cb1283eea33a894ca2007d5dae085f"],["D:/MyGithub/hexo/public/archives/2023/12/index.html","c005a3a08c7a771e1a81b662033121ec"],["D:/MyGithub/hexo/public/archives/2023/index.html","04d01e15f57d2fc9aeb8b4cd89dfa313"],["D:/MyGithub/hexo/public/archives/index.html","5c84b7ac0f26fd0c22b63122bcf0608a"],["D:/MyGithub/hexo/public/archives/page/2/index.html","c4a49dc22e0cffe342d1302c36747e51"],["D:/MyGithub/hexo/public/archives/page/3/index.html","b8e705a7036355e4ca6b993729dec0f6"],["D:/MyGithub/hexo/public/archives/page/4/index.html","f2ca6c06f3c10b18a9ba210dd2d0fcc7"],["D:/MyGithub/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/MyGithub/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/MyGithub/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/MyGithub/hexo/public/categories/CISP-PTE/index.html","8c836066515c5720093dc6e0136d3d4a"],["D:/MyGithub/hexo/public/categories/CISP-PTE/web/index.html","ad993698f6435248f22067d5327840dc"],["D:/MyGithub/hexo/public/categories/CVE/index.html","cfb8c66a428c698437343567c68f58b9"],["D:/MyGithub/hexo/public/categories/IoT/index.html","575b260983701575b850b56edae0f1ce"],["D:/MyGithub/hexo/public/categories/Read/index.html","ce5b6377266cd200f924821f50b796a7"],["D:/MyGithub/hexo/public/categories/books/index.html","1ba9ea25e63c2baea3398b2c1160775f"],["D:/MyGithub/hexo/public/categories/books/page/2/index.html","95c622a5a3dc45081e244398d26f823e"],["D:/MyGithub/hexo/public/categories/index.html","473e5a251a56396c73b964474950c59a"],["D:/MyGithub/hexo/public/categories/learning/index.html","7a97aa7c5f8109df4cbcb0a02fabf951"],["D:/MyGithub/hexo/public/categories/programing/index.html","c812d60f01cca6de8632b3e6d7af43ad"],["D:/MyGithub/hexo/public/categories/pwn/index.html","1bbbe260626844bb8a0dcd79d429ec59"],["D:/MyGithub/hexo/public/categories/tools/index.html","c786b853b37a87b9bf2c83bd092af3d3"],["D:/MyGithub/hexo/public/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["D:/MyGithub/hexo/public/css/index.css","14554d9cf34636b54f33c3a653b70459"],["D:/MyGithub/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyGithub/hexo/public/gallery/index.html","fcfc041464478d1a5384b39cfaf73c04"],["D:/MyGithub/hexo/public/images/index.html","eab77e0d22dd922ab928ce6b3e9605b6"],["D:/MyGithub/hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyGithub/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyGithub/hexo/public/img/avatar.png","c417c07ccb6e1130e3c3d4fecf09b960"],["D:/MyGithub/hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/MyGithub/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/MyGithub/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyGithub/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/MyGithub/hexo/public/index.html","a98f0ff7ff49e13b32873ba4484b2406"],["D:/MyGithub/hexo/public/js/main.js","b382597891e958e71bb7c1099977ec66"],["D:/MyGithub/hexo/public/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["D:/MyGithub/hexo/public/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["D:/MyGithub/hexo/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyGithub/hexo/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyGithub/hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyGithub/hexo/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/MyGithub/hexo/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyGithub/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyGithub/hexo/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/MyGithub/hexo/public/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["D:/MyGithub/hexo/public/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["D:/MyGithub/hexo/public/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["D:/MyGithub/hexo/public/link/index.html","761da0211f03a97755eef92eb777dc8d"],["D:/MyGithub/hexo/public/movies/index.html","0b9b47980895d658a53ca92e1ba68e78"],["D:/MyGithub/hexo/public/music/index.html","f392fc685846f264f0600ae321cd3ee8"],["D:/MyGithub/hexo/public/navigate/index.html","7c24edc319b7ad877ff43e77ad59df5d"],["D:/MyGithub/hexo/public/page/2/index.html","47cd9b605dd15ec24978b623763f8c2e"],["D:/MyGithub/hexo/public/page/3/index.html","6854bd5ea4e56bb696518974dca1156c"],["D:/MyGithub/hexo/public/page/4/index.html","608e2966e5334df98bb069f279377880"],["D:/MyGithub/hexo/public/tags/Black-Hat-Python-2nd/index.html","92b7a898d09bda5d879aa2a06c48790a"],["D:/MyGithub/hexo/public/tags/Black-Hat-Python-2nd/page/2/index.html","5ff3b56d13ab393cd535754529722ebd"],["D:/MyGithub/hexo/public/tags/CISP-PTE/index.html","65199e902a46841b4bfde5c673c46e2e"],["D:/MyGithub/hexo/public/tags/CVE/index.html","a0fae03099c27e485a92f0182b78f9b4"],["D:/MyGithub/hexo/public/tags/IoT/index.html","1828b88b501b5705127b2024e66b694a"],["D:/MyGithub/hexo/public/tags/Linux/index.html","53374f8bec1d7b300a70627d679af344"],["D:/MyGithub/hexo/public/tags/MyDaily/index.html","eef9d5943b264ca15baee988014b6655"],["D:/MyGithub/hexo/public/tags/Read/index.html","41ef754c03525f47c41f7bb54d7fa49f"],["D:/MyGithub/hexo/public/tags/Windows/index.html","38ed243c64d3df679bc8148ffdfb7520"],["D:/MyGithub/hexo/public/tags/index.html","af3a3eb21c562d09d656484f1df07b87"],["D:/MyGithub/hexo/public/tags/learning/index.html","f4ab3fb8c5a855bd437e0ebabd02aef9"],["D:/MyGithub/hexo/public/tags/programing/index.html","3e438da22f473d710a4b72dda7eedefb"],["D:/MyGithub/hexo/public/tags/pwn/index.html","92e2611ee8b233792a871c89b0873e26"],["D:/MyGithub/hexo/public/tags/tools/index.html","906b3641a276a49f8672940bb61c765d"],["D:/MyGithub/hexo/public/tags/web/index.html","e9da928cbb606728525991844c2f052a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







