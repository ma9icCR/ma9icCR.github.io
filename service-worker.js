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

var precacheConfig = [["D:/MyGithub/hexo/public/2020-07/010Editor的Template-安装与使用/index.html","2e8f3feec74ce9227e5fc47455572079"],["D:/MyGithub/hexo/public/2020-07/Kali2019解决无法定位软件包问题/index.html","733bc8af00147d4984be4517fb2ce383"],["D:/MyGithub/hexo/public/2020-07/MyDaily/index.html","1b5e6f6f64506008ed1cc144fbc517b7"],["D:/MyGithub/hexo/public/2020-07/Ubuntu下的docker安装/index.html","4c838445ebf2e0da17e0fbb5d8faf8b7"],["D:/MyGithub/hexo/public/2020-07/Windows-server-2003域环境配置win7加入时出现DNS相关问题/index.html","86a5b4018b8508cb5055c12f85febc63"],["D:/MyGithub/hexo/public/2020-08/CVE-2019-16920学习/index.html","f1de50a6c81ba37627b32f6ab1a2608e"],["D:/MyGithub/hexo/public/2020-08/TRENDnet固件获取文件系统/index.html","0b36a3f94432a88b305a7aad5f4c6658"],["D:/MyGithub/hexo/public/2020-08/复现CVE-2017-17215，解决连接问题/index.html","054948f54fb4487962fcf90613fa1df2"],["D:/MyGithub/hexo/public/2020-08/新Ubuntu初始化指南/index.html","1da633ba05c70bd64d33ed7a665e22e1"],["D:/MyGithub/hexo/public/2021-01/hello-world/index.html","69879d9ad43be9fb8c461bd620fc50e5"],["D:/MyGithub/hexo/public/2021-04/IDA-辅助工具Karta简单使用教程/index.html","e827c9dabae0ffc693f7f7be2daddcd1"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-0/index.html","d0b31c49d47b65c8c01bf404c032ad34"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-1/index.html","359f440d09f91a9a93ec23453573e4ca"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-2/index.html","4300fca8346812471482c14eaefd03b1"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-3/index.html","1557dc87376db3e0e8aa4d60c67eb438"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-4/index.html","804d881a3a91dfbfd39841f35b959543"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-5/index.html","d88307e8b8bf3b9620bec0676beb1600"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-10/index.html","6a9b5258dfc6669c96b0b5bb2237448b"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-11/index.html","df42621d5c98805831d6eb28cdcd50f2"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-6/index.html","218c081d9d82c0716948d498b3a24b51"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-7/index.html","02412ae2d6e711f7b6f7f27b6de65474"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-8/index.html","7aa14c8d3ddd80a912f6ed073c9abcd1"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-9/index.html","9107073f4a1149babb64a490cfdab966"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Format/index.html","fc2991dcdb3b3561bd775f76519e3cb0"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Heap/index.html","0a2536ffcc80c746b3726ff54e5c0e18"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Integer/index.html","8997565522e5a1627552de4e564d8d3f"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Stack/index.html","8e6efe573162f83e3ce1dab5f9a9e92e"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱/index.html","48c8302058827d992fe83b62d9134dd9"],["D:/MyGithub/hexo/public/2022-04/KeepTrying/index.html","99fbaf5176f46cbf1b88e036e1424bf8"],["D:/MyGithub/hexo/public/2022-04/PWN入门到入狱-Code/index.html","84a795c0bdd3ceded8e1600e24545185"],["D:/MyGithub/hexo/public/2022-05/pwn题如何配置和靶机一样的环境/index.html","a0bc3e0478a2d743db79a9057e397025"],["D:/MyGithub/hexo/public/2022-05/从0开始的pwn题环境配置/index.html","e65057fb38fca51d2f0e9fe09e1081ec"],["D:/MyGithub/hexo/public/2022-07/C语言学习到放弃/index.html","8e41cd834a37620a21d24e7d5c697296"],["D:/MyGithub/hexo/public/404.html","a0fe50366b8eb328261acdd4f8ab59e1"],["D:/MyGithub/hexo/public/about/index.html","706bebe4e0e503cec888d3e775d11f1d"],["D:/MyGithub/hexo/public/archives/2020/07/index.html","fa193f26187030f5b77d31016ebced15"],["D:/MyGithub/hexo/public/archives/2020/08/index.html","85e479c172894738a566a176f1d1f1bc"],["D:/MyGithub/hexo/public/archives/2020/index.html","7006f3cb1cf11667c19356f408210f7c"],["D:/MyGithub/hexo/public/archives/2021/01/index.html","7d7b93f1ab8f9e1af2b7db1bb540aaac"],["D:/MyGithub/hexo/public/archives/2021/04/index.html","19a303f35059844d5153f715e975ad91"],["D:/MyGithub/hexo/public/archives/2021/06/index.html","7058f0daa6ac182378ab394040ae8945"],["D:/MyGithub/hexo/public/archives/2021/07/index.html","b403e082d3efded18e091eaebf37d90c"],["D:/MyGithub/hexo/public/archives/2021/index.html","52511684f707c4e927b8870a36cc43f8"],["D:/MyGithub/hexo/public/archives/2021/page/2/index.html","37edaf46e872a3564e9342ef190c4af1"],["D:/MyGithub/hexo/public/archives/2022/03/index.html","f7847365af88366352f4ecbd25707747"],["D:/MyGithub/hexo/public/archives/2022/04/index.html","fe417839247b93452840734ce3c06f51"],["D:/MyGithub/hexo/public/archives/2022/05/index.html","1dbb01074440e5f2dd8be6178d64d2ae"],["D:/MyGithub/hexo/public/archives/2022/07/index.html","f11f0b9160152dd5fc2390e49d345cf9"],["D:/MyGithub/hexo/public/archives/2022/index.html","f55106501506927d60be0657efcd6099"],["D:/MyGithub/hexo/public/archives/index.html","3811108461b3f25859ff233ba2a063cf"],["D:/MyGithub/hexo/public/archives/page/2/index.html","ef42ab96ef51ec13a1aac0811dccd36e"],["D:/MyGithub/hexo/public/archives/page/3/index.html","c0f7027c2f9884b1413a667cb1cb1fca"],["D:/MyGithub/hexo/public/archives/page/4/index.html","0863459056d92abb09c26bf4b788fad4"],["D:/MyGithub/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/MyGithub/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/MyGithub/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/MyGithub/hexo/public/categories/CVE/index.html","9244467f79cd4ba75f3907f59ad9b053"],["D:/MyGithub/hexo/public/categories/IoT/index.html","7f04dfe0d751bd1e1cc528902a2695c9"],["D:/MyGithub/hexo/public/categories/books/index.html","f9960cbf2b11dccdad848ed18ed21a88"],["D:/MyGithub/hexo/public/categories/books/page/2/index.html","bf629032ae5d1c639548e516ae0be37a"],["D:/MyGithub/hexo/public/categories/index.html","8c1e3d301ebdceb54b8a047e9d937795"],["D:/MyGithub/hexo/public/categories/learning/index.html","87fd2410742e212db2d96ff046947358"],["D:/MyGithub/hexo/public/categories/programing/index.html","bc52a43035368ce9d446232651be7883"],["D:/MyGithub/hexo/public/categories/pwn/index.html","85bdd33fc6be294c2c04152e0ccd1137"],["D:/MyGithub/hexo/public/categories/tools/index.html","b641e8a3980d01052b68fe32adab727c"],["D:/MyGithub/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/MyGithub/hexo/public/css/index.css","14554d9cf34636b54f33c3a653b70459"],["D:/MyGithub/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyGithub/hexo/public/gallery/index.html","bf86ecaa2f39cea5e0627e16a34b854b"],["D:/MyGithub/hexo/public/images/index.html","e4a64be3942bcc22931ef925d8a7d358"],["D:/MyGithub/hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyGithub/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyGithub/hexo/public/img/avatar.png","c417c07ccb6e1130e3c3d4fecf09b960"],["D:/MyGithub/hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/MyGithub/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/MyGithub/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyGithub/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/MyGithub/hexo/public/index.html","cb125c36e35694234188e8d0776e4ea5"],["D:/MyGithub/hexo/public/js/main.js","b382597891e958e71bb7c1099977ec66"],["D:/MyGithub/hexo/public/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["D:/MyGithub/hexo/public/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["D:/MyGithub/hexo/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyGithub/hexo/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyGithub/hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyGithub/hexo/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/MyGithub/hexo/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyGithub/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyGithub/hexo/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/MyGithub/hexo/public/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["D:/MyGithub/hexo/public/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["D:/MyGithub/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/MyGithub/hexo/public/link/index.html","dc88b0507f059f3628acff5675a79a7e"],["D:/MyGithub/hexo/public/movies/index.html","e058bd2b80999df709f078a05cb580c1"],["D:/MyGithub/hexo/public/music/index.html","2c9a25164895b986638009c3c593e21c"],["D:/MyGithub/hexo/public/navigate/index.html","4b0bc4dfab24dac420ea8e5b1bdcb99a"],["D:/MyGithub/hexo/public/page/2/index.html","387724791b2de28358e2424418e856f4"],["D:/MyGithub/hexo/public/page/3/index.html","56c59dc675036fe4baaefed96b48b4f3"],["D:/MyGithub/hexo/public/page/4/index.html","33b8945129153d05da868ba0ca2c6035"],["D:/MyGithub/hexo/public/tags/Black-Hat-Python-2nd/index.html","87aeea8195120693339056f4bc708bb0"],["D:/MyGithub/hexo/public/tags/Black-Hat-Python-2nd/page/2/index.html","336687d4a4b64ca6abdc87bf42b1dbf0"],["D:/MyGithub/hexo/public/tags/CVE/index.html","a8dd93a25a5ba8939f1ed2cbcd6bd83c"],["D:/MyGithub/hexo/public/tags/IoT/index.html","c65b1e6ecea0798ee0c57c6ca36b39fb"],["D:/MyGithub/hexo/public/tags/Linux/index.html","3ec5196d1367840203033050381df454"],["D:/MyGithub/hexo/public/tags/MyDaily/index.html","f390a07aba9a1a1c73f9c392c1327562"],["D:/MyGithub/hexo/public/tags/Windows/index.html","8d663a9afc038bfad44e899e7cd91676"],["D:/MyGithub/hexo/public/tags/index.html","86ce844432af078ea057c602f09449f2"],["D:/MyGithub/hexo/public/tags/learning/index.html","b70bb5868682f8af7643c724f204d893"],["D:/MyGithub/hexo/public/tags/programing/index.html","1f920542f32f71321eba060462077415"],["D:/MyGithub/hexo/public/tags/pwn/index.html","d55d4a9a040397503c3d57ac724df44a"],["D:/MyGithub/hexo/public/tags/tools/index.html","d41791bd350514714bcf4ef6e7d2957b"]];
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







