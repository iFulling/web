/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "860ba14a98c5e84be7d7663d0f4f0d56"
  },
  {
    "url": "about.html",
    "revision": "171aded073adfc48cd4540a11b8a73c1"
  },
  {
    "url": "assets/css/0.styles.cbea2f59.css",
    "revision": "da78adca8569f79b31497b2a903f942e"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "b55c51590ca6c83d0fdc1d0d6fbfaa18"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b724ff0e.js",
    "revision": "c582879992382cc89abeb87282f53837"
  },
  {
    "url": "assets/js/2.634fd036.js",
    "revision": "8e19025ee4cccd909d8edd35c83e447d"
  },
  {
    "url": "assets/js/3.54723a66.js",
    "revision": "14f326b114240e9fb41c4321200bef62"
  },
  {
    "url": "assets/js/4.01a12372.js",
    "revision": "e7055c3e72cd2f8a7218da54187cc357"
  },
  {
    "url": "assets/js/5.a2d4e53f.js",
    "revision": "5a1896154ac0a30f7f459f3f8534eaff"
  },
  {
    "url": "assets/js/6.8fb7331e.js",
    "revision": "e0567ba3960990e1d68f63139d21a4ed"
  },
  {
    "url": "assets/js/7.ef2d7447.js",
    "revision": "5a0bfb091a73b0b6ba8171b49ddf9d61"
  },
  {
    "url": "assets/js/8.d6cde096.js",
    "revision": "1cdc468886fdf0215e636d203cca3a24"
  },
  {
    "url": "assets/js/9.d9ccf352.js",
    "revision": "f93ce841f7af2e4b9a419a4ba91689e2"
  },
  {
    "url": "assets/js/app.4913d607.js",
    "revision": "9080a30ade96293c83235ef6235a7476"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "3e094eefed2cf0c5d7c9519685fdc0f7"
  },
  {
    "url": "logo.png",
    "revision": "164d5329eedf1b07cfbb12df71dc2813"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
