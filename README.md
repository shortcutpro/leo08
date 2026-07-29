# Prediksi Bola Auto Generator — GitHub Pages Edition (LEO08)

Generator prediksi bola multi-brand — pure HTML/JS, tanpa PHP backend.

**Sites:** IBC138 · MASTERBET188 · WSO288 · KUATBET · HKB77

---

## 🌐 Live Demo

Deploy ke GitHub Pages: `https://shortcutpro.github.io/leo08/`

- `.../ibc138.html`
- `.../masterbet188.html`
- `.../wso288.html`
- `.../kuatbet.html`
- `.../hkb77.html`

---

## 📁 Struktur Repo

```
leo08/
├── index.html                  ← Menu pilih site
├── generator.html              ← App generator prediksi utama (all-in-one)
│
├── ibc138.html                 ← Generator IBC138        (Orange)
├── masterbet188.html           ← Generator MASTERBET188  (Royal Gold)
├── wso288.html                 ← Generator WSO288        (Neon Green)
├── kuatbet.html                ← Generator KUATBET       (Yellow Gold)
├── hkb77.html                  ← Generator HKB77         (Orange Gold)
│
├── ibc138-auto.html            ← Auto Embed standalone (loading + logic inline)
├── masterbet188-auto.html
├── wso288-auto.html
├── kuatbet-auto.html
├── hkb77-auto.html
│
├── ibc138-main.js              ← WordPress-compatible main.js
├── masterbet188-main.js
├── wso288-main.js
├── kuatbet-main.js
├── hkb77-main.js
│
├── logo-db-0.js … logo-db-9.js ← Database logo tim (30.000+ entries)
├── logo-db.js                  ← ★ INPUT LOGO MANUAL (override, di-load terakhir)
└── README.md
```

---

## 🚀 Deploy ke GitHub Pages

1. Push semua file ke repo GitHub
2. Settings → Pages → Source: branch utama, folder: `/ (root)`
3. Akses via `https://shortcutpro.github.io/leo08/`

---

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

---

## 🌐 Sumber Data

Semua auto embed pakai **2-source fallback**:

1. **JPKOLONI4D** (utama) — URL otomatis mengikuti tanggal WIB
   Format: `prediksi-bola-{tgl1}-{tgl2}-{bulan}-{tahun}`
   Contoh: `prediksi-bola-29-30-juli-2026`

2. **shortq.xyz** (fallback) — sumber lama, dipakai kalau jpkoloni tidak tersedia

Toggle sumber utama via `var JPK_ENABLED = true;` di file `*-main.js` atau `*-auto.html`.

---

## 🔌 Kode Embed v4 (NO Inline JavaScript)

Kode embed ringan — hanya loading state + reference ke `*-main.js` eksternal.
Paste langsung ke halaman/blog (WordPress, HTML, dll).

### 🟠 IBC138

```html
<!-- IBC138 Auto Embed v4 — NO inline JavaScript -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<div id="ibc138-root"></div>
<style>
#ibc138-root .ibc-loading-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;gap:14px;font-family:'Poppins',sans-serif;background:#000000;border-radius:12px;padding:30px 20px;}
#ibc138-root .ibc-spinner{width:46px;height:46px;border:4px solid #FF660033;border-top-color:#FF6600;border-radius:50%;animation:ibcSpin .7s linear infinite;}
@keyframes ibcSpin{to{transform:rotate(360deg)}}
#ibc138-root .ibc-loading-text{color:#FF6600;font-size:13px;font-weight:700;letter-spacing:1.5px;text-shadow:0 0 10px #FF660080;text-align:center;}
#ibc138-root .ibc-loading-sub{color:#FF660080;font-size:10px;letter-spacing:1px;text-align:center;margin-top:-8px;}
</style>
<script src="https://shortcutpro.github.io/leo08/logo-db-0.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-1.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-2.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-3.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-4.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-5.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-6.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-7.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-8.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-9.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db.js"></script>
<script src="https://shortcutpro.github.io/leo08/ibc138-main.js?v=5"></script>
```

### 🟠 HKB77

```html
<!-- HKB77 Auto Embed v4 — NO inline JavaScript -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<div id="hkb77-root"></div>
<style>
#hkb77-root .ibc-loading-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;gap:14px;font-family:'Poppins',sans-serif;background:#000000;border-radius:12px;padding:30px 20px;}
#hkb77-root .ibc-spinner{width:46px;height:46px;border:4px solid #FFA50033;border-top-color:#FFA500;border-radius:50%;animation:ibcSpin .7s linear infinite;}
@keyframes ibcSpin{to{transform:rotate(360deg)}}
#hkb77-root .ibc-loading-text{color:#FFA500;font-size:13px;font-weight:700;letter-spacing:1.5px;text-shadow:0 0 10px #FFA50080;text-align:center;}
#hkb77-root .ibc-loading-sub{color:#FFA50080;font-size:10px;letter-spacing:1px;text-align:center;margin-top:-8px;}
</style>
<script src="https://shortcutpro.github.io/leo08/logo-db-0.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-1.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-2.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-3.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-4.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-5.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-6.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-7.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-8.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-9.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db.js"></script>
<script src="https://shortcutpro.github.io/leo08/hkb77-main.js?v=5"></script>
```

### 🟡 KUATBET

```html
<!-- KUATBET Auto Embed v4 — NO inline JavaScript -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<div id="kuatbet-root"></div>
<style>
#kuatbet-root .ibc-loading-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;gap:14px;font-family:'Poppins',sans-serif;background:#000000;border-radius:12px;padding:30px 20px;}
#kuatbet-root .ibc-spinner{width:46px;height:46px;border:4px solid #FFD70033;border-top-color:#FFD700;border-radius:50%;animation:ibcSpin .7s linear infinite;}
@keyframes ibcSpin{to{transform:rotate(360deg)}}
#kuatbet-root .ibc-loading-text{color:#FFD700;font-size:13px;font-weight:700;letter-spacing:1.5px;text-shadow:0 0 10px #FFD70080;text-align:center;}
#kuatbet-root .ibc-loading-sub{color:#FFD70080;font-size:10px;letter-spacing:1px;text-align:center;margin-top:-8px;}
</style>
<script src="https://shortcutpro.github.io/leo08/logo-db-0.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-1.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-2.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-3.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-4.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-5.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-6.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-7.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-8.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-9.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db.js"></script>
<script src="https://shortcutpro.github.io/leo08/kuatbet-main.js?v=5"></script>
```

### 🟤 MASTERBET188

```html
<!-- MASTERBET188 Auto Embed v4 — NO inline JavaScript -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<div id="masterbet188-root"></div>
<style>
#masterbet188-root .ibc-loading-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;gap:14px;font-family:'Poppins',sans-serif;background:#000000;border-radius:12px;padding:30px 20px;}
#masterbet188-root .ibc-spinner{width:46px;height:46px;border:4px solid #C9A84C33;border-top-color:#C9A84C;border-radius:50%;animation:ibcSpin .7s linear infinite;}
@keyframes ibcSpin{to{transform:rotate(360deg)}}
#masterbet188-root .ibc-loading-text{color:#C9A84C;font-size:13px;font-weight:700;letter-spacing:1.5px;text-shadow:0 0 10px #C9A84C80;text-align:center;}
#masterbet188-root .ibc-loading-sub{color:#C9A84C80;font-size:10px;letter-spacing:1px;text-align:center;margin-top:-8px;}
</style>
<script src="https://shortcutpro.github.io/leo08/logo-db-0.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-1.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-2.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-3.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-4.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-5.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-6.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-7.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-8.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-9.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db.js"></script>
<script src="https://shortcutpro.github.io/leo08/masterbet188-main.js?v=5"></script>
```

### 🟢 WSO288

```html
<!-- WSO288 Auto Embed v4 — NO inline JavaScript -->
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
<div id="wso288-root"></div>
<style>
#wso288-root .ibc-loading-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:320px;gap:14px;font-family:'Poppins',sans-serif;background:#000000;border-radius:12px;padding:30px 20px;}
#wso288-root .ibc-spinner{width:46px;height:46px;border:4px solid #5DC82033;border-top-color:#5DC820;border-radius:50%;animation:ibcSpin .7s linear infinite;}
@keyframes ibcSpin{to{transform:rotate(360deg)}}
#wso288-root .ibc-loading-text{color:#5DC820;font-size:13px;font-weight:700;letter-spacing:1.5px;text-shadow:0 0 10px #5DC82080;text-align:center;}
#wso288-root .ibc-loading-sub{color:#5DC82080;font-size:10px;letter-spacing:1px;text-align:center;margin-top:-8px;}
</style>
<script src="https://shortcutpro.github.io/leo08/logo-db-0.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-1.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-2.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-3.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-4.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-5.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-6.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-7.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-8.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db-9.js"></script>
<script src="https://shortcutpro.github.io/leo08/logo-db.js"></script>
<script src="https://shortcutpro.github.io/leo08/wso288-main.js?v=5"></script>
```

---

## 🎨 Warna Brand

| Brand | Warna Utama | Hex |
|---|---|---|
| 🟠 **IBC138** | Orange | `#FF6600` |
| 🟠 **HKB77** | Orange Gold | `#FFA500` |
| 🟡 **KUATBET** | Yellow Gold | `#FFD700` |
| 🟤 **MASTERBET188** | Royal Gold | `#C9A84C` |
| 🟢 **WSO288** | Neon Green | `#5DC820` |

---

## 🔧 Tambah Logo Manual

Edit `logo-db.js` (file ini di-load **paling akhir**, jadi otomatis menimpa database utama):

```js
Object.assign(LOGO_DB, {
    "manchester united": "https://...url-logo.png",
    "ham-kam": "https://...url-logo.png",
});
```

Key harus **lowercase**, sama persis dengan nama tim di input prediksi (tanpa `[angka]` klasemen).

---

## ⚙️ Konfigurasi Brand

Tiap file `*-auto.html` dan `*-main.js` punya blok konfigurasi sendiri:

```js
var SITE_NAME     = 'HKB77';
var SITE_LOGO     = 'https://.../logo.png';
var MARQUEE_TEXT  = '👑 PREDIKSI BOLA TERUPDATE ! ... 👑';
var COLOR_MAIN    = '#FFA500';
var COLOR_TEXT    = '#fff5d0';
var BG_IMAGE      = '';
var BG_OVERLAY    = 'rgba(8,4,0,0.88), rgba(18,9,0,0.90)';
var AUTO_REFRESH  = 5 * 60 * 1000; // 5 menit
var JPK_ENABLED   = true;          // sumber jpkoloni4d
```

---

## ✨ Fitur

- ✅ **2-source fallback**: jpkoloni4d (auto-URL by tanggal WIB) → shortq.xyz
- ✅ Auto fetch prediksi via 4 proxy fallback (AllOrigins, Hexlet, CodeTabs, corsproxy.io)
- ✅ Auto refresh 5 menit
- ✅ Logo lookup 8-step fuzzy (30.000+ entries) + SVG fallback inisial tim
- ✅ `logo-db.js` untuk input logo manual (override)
- ✅ Progress bar loading dengan warna khas brand
- ✅ Tanggal otomatis + custom color picker per brand
- ✅ Output HTML siap embed, responsive mobile/desktop
- ✅ WordPress-compatible via `-main.js` (self-contained CSS injection)
- ✅ Embed v4 minimalis (loading state saja, logic dari external main.js)
- ✅ 100% static — deploy gratis di GitHub Pages
