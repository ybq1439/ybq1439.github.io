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
    "revision": "1a3eee7006afba78a77fb358142b21e4"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.387ad319.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.e1bab619.js",
    "revision": "0c777fe88fdd1926f6457e03ff5126c9"
  },
  {
    "url": "assets/js/13.4ab2683e.js",
    "revision": "7208e8294b490b53b99964be4640a8ae"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.881f1c71.js",
    "revision": "139fb947484616d1abc8e1b44abbcbda"
  },
  {
    "url": "assets/js/16.312b5bea.js",
    "revision": "bc467476030fc056cc659098f66714de"
  },
  {
    "url": "assets/js/17.dd519a46.js",
    "revision": "ae2039acff2a28a34427d168746b4c61"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
  },
  {
    "url": "assets/js/4.fbecbbd1.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.5d0f48be.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.8d45fbda.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.d16e9bb3.js",
    "revision": "b795647063becdf4f31cc71b395f6123"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "2d0d7d69eb6eda7fc1d8ae10c1e297f9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2deec0f9f48eefea70e140f47c20eda6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "07cc98d2dc203041b57c03a71665b54e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "15083e7b5dd9d5143d19b4b3e26b060c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0252db041a6f14ff40a7e0016b726d1c"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a12d5fee70c6cd8764e8202aadc2a568"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "87a9d42cedbab02ee8853f9246b097e7"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "42fe7a2ca4e29225c159099933316df0"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "e1d2db57e8895160760a45148406b0ee"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ace596faee1524df7cfe489a2c7040bd"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3bfb255aa5375534f4ebe9c7e10fe4ad"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "902dc289148d5a2d7e32b8897d81b674"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "604a450fa31a9a404bc863309bad4451"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6c10ca5866a3662e94d2b9873016fde4"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "5e23a3953610bf09fd99a66c398d2700"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2f3829a3383378e3f33aeebaa2de54fc"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e1bc9fd06feed4fceeef711da2fbef99"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "ed28fdfdb169103736cde1be91fe87b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "cb0d24663877519a1e73f83c03fd2223"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "458b87da61e6a6ba6a00234c70fa0ccd"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8b299eecd8dac743e17cdb5b9ef18c5c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "26175d407c6e6fdf14095651d91fefb5"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "1a4a11331b2aaa8a33cd9e7356be54c4"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6382bcdc616c681b81c7759221df4c73"
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
