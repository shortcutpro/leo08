# Prediksi Bola Auto Generator — GitHub Pages Edition (LEO08)

Generator prediksi bola multi-brand — pure HTML/JS, tanpa PHP backend.

**Sites:** IBC138 · MASTERBET188 · WSO288 · KUATBET · HKB77

## 🌐 Live Demo

> Deploy ke GitHub Pages: `https://shortcutpro.github.io/leo08/`

## 📁 Struktur Repo

```
leo08/
├── index.html              ← Menu pilih site
├── generator.html          ← App generator prediksi utama (all-in-one)
│
├── ibc138.html             ← Generator IBC138        (Royal Blue)
├── masterbet188.html       ← Generator MASTERBET188  (Emerald Green)
├── wso288.html             ← Generator WSO288        (Neon Cyan)
├── kuatbet.html            ← Generator KUATBET       (Fire Red)
├── hkb77.html              ← Generator HKB77         (Orange Gold)
│
├── ibc138-auto.html        ← Auto Embed IBC138 (standalone, load logo-db-*.js)
├── masterbet188-auto.html  ← Auto Embed MASTERBET188
├── wso288-auto.html        ← Auto Embed WSO288
├── kuatbet-auto.html       ← Auto Embed KUATBET
├── hkb77-auto.html         ← Auto Embed HKB77
│
├── ibc138-main.js          ← WordPress-compatible main.js IBC138
├── masterbet188-main.js    ← WordPress-compatible main.js MASTERBET188
├── wso288-main.js          ← WordPress-compatible main.js WSO288
├── kuatbet-main.js         ← WordPress-compatible main.js KUATBET
├── hkb77-main.js           ← WordPress-compatible main.js HKB77
│
├── logo-db-0.js … logo-db-9.js  ← Database logo tim (30.000+ entries)
├── logo-db.js              ← ★ INPUT LOGO MANUAL (override, di-load terakhir)
└── README.md
```

## 🚀 Deploy ke GitHub Pages

1. Push semua file ke repo GitHub
2. Settings → Pages → Source: branch utama, folder: `/ (root)`
3. Akses via `https://shortcutpro.github.io/leo08/`
   - `.../ibc138.html`
   - `.../masterbet188.html`
   - `.../wso288.html`
   - `.../kuatbet.html`
   - `.../hkb77.html`

## 📝 Format Input Prediksi

```
WORLD CUP 2026 [ IN CANADA, MEXICO & USA ]
19/07 04:00 WIB France VS England 0 : 2

NORWAY ELITESERIEN
18/07 19:00 WIB [6] Ham-Kam VS [1] Tromso 2 : 1
18/07 21:00 WIB [15] Kristiansund VS [7] Sarpsborg 08 1 : 3
```

- Baris tanpa jam = **nama liga**
- `[6]`, `[1]` dsb (angka klasemen) otomatis **di-strip** — tidak ikut tampil
- Skor bisa pakai `:` atau `-`
- Suffix `[W]`, `U19`, `U21` dsb otomatis dibersihkan saat lookup logo

## ⚡ Auto Embed (`*-auto.html`)

Versi standalone untuk paste ke halaman/blog:

- **Auto fetch** prediksi dari `https://shortq.xyz/prediksibola` (multi-proxy fallback) + auto refresh 5 menit
- Load LOGO_DB dari GitHub Pages (`logo-db-0.js` s/d `logo-db-9.js` + `logo-db.js` override)
- Background, logo, favicon, dan warna sesuai brand masing-masing
- Progress bar loading dengan warna khas brand
- Cara pakai: buka langsung, atau paste seluruh isi file ke halaman/blog

## 🔌 WordPress Integration (`*-main.js`)

Untuk embed di WordPress atau CMS lain, cukup panggil script:

```html
<div id="{brand}-root"></div>
<script src="https://shortcutpro.github.io/leo08/{brand}-main.js"></script>
```

Contoh untuk HKB77:

```html
<div id="hkb77-root"></div>
<script src="https://shortcutpro.github.io/leo08/hkb77-main.js"></script>
```

Script akan otomatis inject CSS, fetch prediksi, dan render ke `#{brand}-root`.

## 🔧 Tambah Logo Manual

Edit `logo-db.js` (file ini di-load **paling akhir**, jadi otomatis menimpa database utama):

```js
Object.assign(LOGO_DB, {
    "manchester united": "https://...url-logo.png",
    "ham-kam": "https://...url-logo.png",
});
```

Key harus **lowercase**.

## ⚙️ Konfigurasi Brand

Tiap file `*-auto.html` dan `*-main.js` punya blok konfigurasi sendiri (nama, logo, favicon, background, warna, marquee):

```js
var SITE_NAME     = 'HKB77';
var SITE_LOGO     = 'https://.../logo.png';
var MARQUEE_TEXT  = '👑 PREDIKSI BOLA TERUPDATE ! ... 👑';
var COLOR_MAIN    = '#FFA500';
var COLOR_TEXT    = '#fff5d0';
var BG_IMAGE      = '';
var BG_OVERLAY    = 'rgba(8,4,0,0.88), rgba(18,9,0,0.90)';
var AUTO_REFRESH  = 5 * 60 * 1000; // 5 menit
```

## ✨ Fitur

- ✅ Auto fetch prediksi via 4 proxy fallback (AllOrigins, Hexlet, CodeTabs, corsproxy.io)
- ✅ Auto refresh 5 menit
- ✅ Logo lookup 8-step fuzzy (30.000+ entries) + SVG fallback inisial tim
- ✅ `logo-db.js` untuk input logo manual (override)
- ✅ Progress bar loading dengan warna khas brand
- ✅ Tanggal otomatis + custom color picker per brand
- ✅ Output HTML siap embed, responsive mobile/desktop
- ✅ WordPress-compatible via `-main.js` (self-contained CSS injection)
- ✅ 100% static — deploy gratis di GitHub Pages
