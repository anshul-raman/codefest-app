importScripts("/assets/workbox-v5.1.2.js");

if (workbox) {
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
} else {
  console.warn("Boo! Workbox did not load!");
}
