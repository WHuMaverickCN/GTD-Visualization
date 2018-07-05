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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "369a341a04f093e7d0f6d40f1ff6a6fc"
  },
  {
    "url": "assets/css/5.styles.5b70f3ef.css",
    "revision": "218e3cf4b76e157a45fae004f5ed2329"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.148e8e6a.js",
    "revision": "d82a82f767f196daa987d64f5db78439"
  },
  {
    "url": "assets/js/1.b7ff2171.js",
    "revision": "30accf6a8a44d5e10c6d662fd93ad690"
  },
  {
    "url": "assets/js/2.6c1a2199.js",
    "revision": "14dad63123c3bfd99be252b14a41a3ff"
  },
  {
    "url": "assets/js/3.fb626c03.js",
    "revision": "fe5e3ad820db67df3816a9586a372f49"
  },
  {
    "url": "assets/js/4.33d44456.js",
    "revision": "05b1507bafe7c1151096fb5e054f5f79"
  },
  {
    "url": "assets/js/app.d8971c64.js",
    "revision": "2d65b349eb50c1babc2e575da8798d75"
  },
  {
    "url": "framework/index.html",
    "revision": "8fab2d3ac408397937c1c2aa6b2617fd"
  },
  {
    "url": "hero.png",
    "revision": "9e03f90f1f2350c3d4fa27e0a5a10112"
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
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "4036198df0c5f9f692e24f0e13b5f7d8"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "preview/gif.html",
    "revision": "fe6f6b14cff9404360771c0f3c56ee7b"
  },
  {
    "url": "preview/index.html",
    "revision": "fcfd1647e251c0235719d835ad8f8da2"
  },
  {
    "url": "tools/index.html",
    "revision": "c62aec3f0e33e5f7b809164f0f5699f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
