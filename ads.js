/**
 * ads.js — Dynamic Ad Injector
 * Menyisipkan setiap unit iklan secara dinamis ke dalam elemen target
 * berdasarkan ID-nya, sehingga iklan termuat setelah halaman siap.
 *
 * Peta slot:
 *  #ad-leaderboard-top    → 728×90  (slot 1)
 *  #ad-leaderboard-bottom → 728×90  (slot 2)
 *  #ad-banner-mid         → 468×60
 *  #ad-sidebar-left       → 160×300
 *  #ad-sidebar-right      → 160×300  (unit yang sama, slot independen)
 *  #ad-rectangle          → 300×250
 *  #ad-mobile-banner      → 320×50
 */

(function () {
  "use strict";

  /* ─────────────────────────────────────────────────────────────
   * Helper: injectAd
   * Membuat <script> atOptions + <script src=invoke.js> lalu
   * menyisipkannya ke dalam elemen bertarget secara aman.
   * ───────────────────────────────────────────────────────────── */
  function injectAd(targetId, key, width, height) {
    var container = document.getElementById(targetId);
    if (!container) return; // Abaikan jika elemen tidak ada di DOM

    /* 1. Script konfigurasi atOptions */
    var configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.text =
      "atOptions = {" +
      " 'key' : '" + key + "'," +
      " 'format' : 'iframe'," +
      " 'height' : " + height + "," +
      " 'width' : " + width + "," +
      " 'params' : {}" +
      " };";

    /* 2. Script pemanggil invoke.js */
    var invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src =
      "https://buffcasualwhine.com/" + key + "/invoke.js";
    invokeScript.async = true;

    /* 3. Sisipkan ke container */
    container.appendChild(configScript);
    container.appendChild(invokeScript);
  }

  /* ─────────────────────────────────────────────────────────────
   * Daftar unit iklan
   * ───────────────────────────────────────────────────────────── */
  var adUnits = [
    /* 728×90 — Leaderboard atas (slot 1) */
    {
      targetId : "ad-leaderboard-top",
      key      : "2d751854ce36e13fefddaa58f93251e2",
      width    : 728,
      height   : 90
    },

    /* 728×90 — Leaderboard bawah (slot 2, unit yang sama) */
    {
      targetId : "ad-leaderboard-bottom",
      key      : "2d751854ce36e13fefddaa58f93251e2",
      width    : 728,
      height   : 90
    },

    /* 468×60 — Banner tengah */
    {
      targetId : "ad-banner-mid",
      key      : "ee6fbbaee01d7a12aeeb5d58f3126e1f",
      width    : 468,
      height   : 60
    },

    /* 160×300 — Sidebar kiri */
    {
      targetId : "ad-sidebar-left",
      key      : "328472b6f3804a37481a66024bd30649",
      width    : 160,
      height   : 300
    },

    /* 160×300 — Sidebar kanan (unit yang sama, slot independen) */
    {
      targetId : "ad-sidebar-right",
      key      : "328472b6f3804a37481a66024bd30649",
      width    : 160,
      height   : 300
    },

    /* 300×250 — Medium Rectangle */
    {
      targetId : "ad-rectangle",
      key      : "53541ca00eed825e8c431c12f7418ac0",
      width    : 300,
      height   : 250
    },

    /* 320×50 — Mobile Banner */
    {
      targetId : "ad-mobile-banner",
      key      : "113942e911746c421f6b5497bf65a2c6",
      width    : 320,
      height   : 50
    }
  ];

  /* ─────────────────────────────────────────────────────────────
   * Eksekusi: tunggu DOM siap, lalu inject semua unit
   * ───────────────────────────────────────────────────────────── */
  function loadAllAds() {
    adUnits.forEach(function (ad) {
      injectAd(ad.targetId, ad.key, ad.width, ad.height);
    });
  }

  if (document.readyState === "loading") {
    /* DOM belum selesai dimuat */
    document.addEventListener("DOMContentLoaded", loadAllAds);
  } else {
    /* DOM sudah siap (script dipanggil di akhir <body>) */
    loadAllAds();
  }

})();
