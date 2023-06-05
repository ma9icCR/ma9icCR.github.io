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

var precacheConfig = [["D:/MyGithub/hexo/public/2020-07/010Editor的Template-安装与使用/index.html","e6b81fcd1840630e5192e5505352fdc3"],["D:/MyGithub/hexo/public/2020-07/Kali2019解决无法定位软件包问题/index.html","e222d0cfdf35ed1c1e06ebda51845eb5"],["D:/MyGithub/hexo/public/2020-07/MyDaily/index.html","c4628280307989ff3017aa5849deb39f"],["D:/MyGithub/hexo/public/2020-07/Ubuntu下的docker安装/index.html","973ecfa7b8984f4fea2c42ec72bf70c5"],["D:/MyGithub/hexo/public/2020-07/Windows-server-2003域环境配置win7加入时出现DNS相关问题/index.html","c9f10e7bb754e0d5c2a77550c70cfeb3"],["D:/MyGithub/hexo/public/2020-08/CVE-2019-16920学习/index.html","4cb6fa287d5478aee954c58ec38271fc"],["D:/MyGithub/hexo/public/2020-08/TRENDnet固件获取文件系统/index.html","5977431ab25b025c6802b371f1edc835"],["D:/MyGithub/hexo/public/2020-08/复现CVE-2017-17215，解决连接问题/index.html","e0079d277a12eda03b06a6f931fcc51d"],["D:/MyGithub/hexo/public/2020-08/新Ubuntu初始化指南/index.html","e3b734b0ff6af7dec83bb0c6527b4822"],["D:/MyGithub/hexo/public/2021-01/hello-world/index.html","2672b246a465fe4fd976df2f62fc5905"],["D:/MyGithub/hexo/public/2021-04/IDA-辅助工具Karta简单使用教程/index.html","fb091128c90c8f079edb1580eb734230"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-0/index.html","a5cc32f7ffe502925f2a14052bbf626b"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-1/index.html","4f1f79992dc687e2af56fda026634771"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-2/index.html","076697c52317cb758e481622772b2f1d"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-3/index.html","39b8be2832f66de4d12a1cac75e04f0c"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-4/index.html","79d4a804e6fffc2c82ac30cf7aa2e96c"],["D:/MyGithub/hexo/public/2021-06/Black-Hat-Python-2nd-5/index.html","c677c6216d12f1a82974ba5c39638a19"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-10/index.html","dc2bbfaf23655aa3b91ab1611456ed90"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-11/index.html","ffd784590dc06c33d3c3dd22e3af06e9"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-6/index.html","48e4239470039fb4f5abe47bff5214df"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-7/index.html","b29414b983b1f5526682751f10374e5a"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-8/index.html","ec53727b8ce5da1964e04b4ead7067f4"],["D:/MyGithub/hexo/public/2021-07/Black-Hat-Python-2nd-9/index.html","4fad52672a5dbf94f9dcf551240be37d"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Format/index.html","69fd47d8b7749dcca8a1996925cdd34d"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Heap/index.html","f5c7b7532a4621d6af4d0b9e49df1c07"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Integer/index.html","36bcbb762e69689d9f61e8705560d2cf"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱-Stack/index.html","d470332d1b53c1ae5d21052b06178d91"],["D:/MyGithub/hexo/public/2022-03/PWN入门到入狱/index.html","d4336c06dbb92e32b5788db4b181547c"],["D:/MyGithub/hexo/public/2022-04/KeepTrying/index.html","4e82d12866c1456f5a8a354fdf45e3e7"],["D:/MyGithub/hexo/public/2022-04/PWN入门到入狱-Code/index.html","d56b59e108dd1642410f7ca91fd12b1e"],["D:/MyGithub/hexo/public/2022-05/pwn题如何配置和靶机一样的环境/index.html","96eec64ffef9d77ca166f54630c026a1"],["D:/MyGithub/hexo/public/2022-05/从0开始的pwn题环境配置/index.html","74ae809a017e0f6926c0686fa39d29c5"],["D:/MyGithub/hexo/public/2022-07/C语言学习到放弃/index.html","653c0db6a6cdde968e4d7db3973b6470"],["D:/MyGithub/hexo/public/2023-05/阅读简记/index.html","10de69472b796a37fc763d489e735460"],["D:/MyGithub/hexo/public/404.html","6ba90e469d0f54285498b170b652e124"],["D:/MyGithub/hexo/public/about/index.html","d4b220c6967e5d16fcec3cb7ed7fea7d"],["D:/MyGithub/hexo/public/archives/2020/07/index.html","cb5f26cc65ddd4297fa7facf45587ab6"],["D:/MyGithub/hexo/public/archives/2020/08/index.html","c7d45f3c2e9ec93c1f0c3a9c06ab71b3"],["D:/MyGithub/hexo/public/archives/2020/index.html","5249d2f5c4e3b900d4325bb229657e78"],["D:/MyGithub/hexo/public/archives/2021/01/index.html","804f3c898ffb450c89265c3c6f7ca07e"],["D:/MyGithub/hexo/public/archives/2021/04/index.html","de6f5a122e99c08f7388beb46b6fe52a"],["D:/MyGithub/hexo/public/archives/2021/06/index.html","a081142317476f58acf8fd346342f8a9"],["D:/MyGithub/hexo/public/archives/2021/07/index.html","56fac6654a9e0871ab8810cf51dfb8c1"],["D:/MyGithub/hexo/public/archives/2021/index.html","cf76ed2b9c1b1520992493b954e8bcd4"],["D:/MyGithub/hexo/public/archives/2021/page/2/index.html","3197adf5ac790929e984cdef607f2e76"],["D:/MyGithub/hexo/public/archives/2022/03/index.html","a4bbaa8c82c8b2754132b2c7031ac18a"],["D:/MyGithub/hexo/public/archives/2022/04/index.html","2362e182a76b4373a2be620ad4855ffc"],["D:/MyGithub/hexo/public/archives/2022/05/index.html","22a83143ffc37c5c2401c4956efdd8aa"],["D:/MyGithub/hexo/public/archives/2022/07/index.html","78d3a6f211f4e095c19af1e7665f7459"],["D:/MyGithub/hexo/public/archives/2022/index.html","a32da4d3ad53bcf514cfffa9ead3d433"],["D:/MyGithub/hexo/public/archives/2023/05/index.html","9d88a90d82db6caba1f06d8f30b8c6de"],["D:/MyGithub/hexo/public/archives/2023/index.html","87495e4e7ade3378ec3825bc6d797073"],["D:/MyGithub/hexo/public/archives/index.html","b6006601680b4c33b47b7aaa0c7991e9"],["D:/MyGithub/hexo/public/archives/page/2/index.html","cc8055b499881489bbb379fddba64f00"],["D:/MyGithub/hexo/public/archives/page/3/index.html","9773a053fe451796a392da54ef06570d"],["D:/MyGithub/hexo/public/archives/page/4/index.html","81f11b6641a8cad60400496b98fb1a00"],["D:/MyGithub/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/MyGithub/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/MyGithub/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/MyGithub/hexo/public/categories/CVE/index.html","475f58be15d9952943f32e56141b95c1"],["D:/MyGithub/hexo/public/categories/IoT/index.html","d3bc04084b4c937454f477e99e9f9fbb"],["D:/MyGithub/hexo/public/categories/Read/index.html","8d8e47633d8b1ed7991ea3306f669206"],["D:/MyGithub/hexo/public/categories/books/index.html","360db8c8e8e6b0eb7d52736166d1d9ff"],["D:/MyGithub/hexo/public/categories/books/page/2/index.html","2f5a10bcadb57d178e288d7dfa94a06b"],["D:/MyGithub/hexo/public/categories/index.html","4ed0bc1cbb35100b3fc38db0898fe1dc"],["D:/MyGithub/hexo/public/categories/learning/index.html","7ac02c3ff362415ea37ead7f5bb49d25"],["D:/MyGithub/hexo/public/categories/programing/index.html","64727597ef9810f608da113a11dd0b48"],["D:/MyGithub/hexo/public/categories/pwn/index.html","0c6c7c8fa4df1b8c512abc535e5a1108"],["D:/MyGithub/hexo/public/categories/tools/index.html","24ae51b133b27c00e71c7109f31f7c96"],["D:/MyGithub/hexo/public/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["D:/MyGithub/hexo/public/css/index.css","14554d9cf34636b54f33c3a653b70459"],["D:/MyGithub/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/MyGithub/hexo/public/gallery/index.html","44f8796e373ee77ca30d929973c0ec72"],["D:/MyGithub/hexo/public/images/index.html","91b2c13c1ea5627a3e20c81b37fd436a"],["D:/MyGithub/hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/MyGithub/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/MyGithub/hexo/public/img/avatar.png","c417c07ccb6e1130e3c3d4fecf09b960"],["D:/MyGithub/hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/MyGithub/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/MyGithub/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/MyGithub/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/MyGithub/hexo/public/index.html","c30d374a38f2097a0e33cada6bfd58f3"],["D:/MyGithub/hexo/public/js/main.js","b382597891e958e71bb7c1099977ec66"],["D:/MyGithub/hexo/public/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["D:/MyGithub/hexo/public/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["D:/MyGithub/hexo/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/MyGithub/hexo/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/MyGithub/hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/MyGithub/hexo/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/MyGithub/hexo/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/MyGithub/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/MyGithub/hexo/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["D:/MyGithub/hexo/public/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["D:/MyGithub/hexo/public/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["D:/MyGithub/hexo/public/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["D:/MyGithub/hexo/public/link/index.html","30f78b4d106d0686843836baba617654"],["D:/MyGithub/hexo/public/movies/index.html","d263a4c299d73c58b3f1991050e88297"],["D:/MyGithub/hexo/public/music/index.html","4678ee4d6b43b02b9bc96dfa5e1fb74a"],["D:/MyGithub/hexo/public/navigate/index.html","03466f03c3da285e14ec59a436e08408"],["D:/MyGithub/hexo/public/page/2/index.html","5882b700e5b2e46c1b841e62a0cf0522"],["D:/MyGithub/hexo/public/page/3/index.html","c959a40766da05ab9428d796738a54e7"],["D:/MyGithub/hexo/public/page/4/index.html","fbd9d943cb6a1b0263f47a1ab76730c3"],["D:/MyGithub/hexo/public/tags/Black-Hat-Python-2nd/index.html","87a59a3ce4d807ca2cc17e3e2f70c44e"],["D:/MyGithub/hexo/public/tags/Black-Hat-Python-2nd/page/2/index.html","87164a371c3f6026d101a925477ade5c"],["D:/MyGithub/hexo/public/tags/CVE/index.html","24cd72a234d684e2549c7f20c9028c59"],["D:/MyGithub/hexo/public/tags/IoT/index.html","5df90f3dde1b151bc1ec9a5b3a7977d7"],["D:/MyGithub/hexo/public/tags/Linux/index.html","39695a3de01f3c67e2128e2268edb8ec"],["D:/MyGithub/hexo/public/tags/MyDaily/index.html","3bf65b7b39785c85ad48f024ee524d3e"],["D:/MyGithub/hexo/public/tags/Read/index.html","d58369b850013b877cb3145000fb3e6f"],["D:/MyGithub/hexo/public/tags/Windows/index.html","994855e5b3d4843abddd038329c88cf7"],["D:/MyGithub/hexo/public/tags/index.html","198110de822d5456650a92e16363d0e7"],["D:/MyGithub/hexo/public/tags/learning/index.html","4c4062e27eaab8722c348ee19c23d37a"],["D:/MyGithub/hexo/public/tags/programing/index.html","cd2eaa0dddf3b95497bc6df794b48897"],["D:/MyGithub/hexo/public/tags/pwn/index.html","db78b735aaa8deb4c5877faae18de72b"],["D:/MyGithub/hexo/public/tags/tools/index.html","dc4f59dd8df02e8a5250dc125209956f"]];
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







