# ⚽ Prediksi Bola Auto Generator — LEO08

### GitHub Pages Edition — 5 Multi-Brand Sites

Generator prediksi bola otomatis untuk 5 brand — **pure HTML/JS**, tanpa PHP backend, 100% static, deploy gratis di GitHub Pages.

---

## 🏷️ Daftar Brand

| # | Brand | File Generator | File Auto Embed | Script WordPress | Tema Warna |
|---|-------|---------------|-----------------|------------------|------------|
| 1 | **IBC138** | `ibc138.html` | `ibc138-auto.html` | `ibc138-main.js` | Fire Orange `#FF6600` |
| 2 | **MASTERBET188** | `masterbet188.html` | `masterbet188-auto.html` | `masterbet188-main.js` | Royal Gold `#C9A84C` |
| 3 | **WSO288** | `wso288.html` | `wso288-auto.html` | `wso288-main.js` | Emerald Green `#5DC820` |
| 4 | **KUATBET** | `kuatbet.html` | `kuatbet-auto.html` | `kuatbet-main.js` | Golden Yellow `#FFD700` |
| 5 | **HKB77** | `hkb77.html` | `hkb77-auto.html` | `hkb77-main.js` | Amber Orange `#FFA500` |

---

## ✨ Fitur Utama

- **Auto Fetch Prediksi** — Ambil data prediksi otomatis via multi-proxy fallback + auto refresh setiap 5 menit
- **Parser Anti-JADWAL** — Hanya membaca section **PREDIKSI BOLA** dari sumber; section JADWAL (angka handicap) otomatis di-skip sehingga skor yang tampil selalu skor prediksi asli
- **Support Semua Format Skor** — Pemisah skor `:`, `-`, maupun en-dash `–` semuanya terbaca; skor pecahan handicap (`1/2`, `3/4`) otomatis ditolak
- **Tanggal Otomatis Format Lengkap** — Rentang tanggal dihitung dari data, format `27 Juli - 28 Juli 2026` (nama bulan penuh Bahasa Indonesia di kedua tanggal)
- **Progress Bar Animasi** — Loading auto embed memakai progress bar 0–100% dengan gradient warna brand (bukan teks step)
- **Logo Lookup 8-Step Fuzzy** — Database 30.000+ logo tim sepakbola, dengan SVG fallback inisial jika logo tidak ditemukan
- **Override Logo Manual** — File `logo-db.js` untuk menambah/menimpa logo dari database utama
- **Multi-Brand Theming** — Setiap brand punya warna, logo, favicon, dan marquee tersendiri
- **WordPress-Proof CSS** — Styling di-inject dengan `!important` agar tidak di-override theme WordPress
- **Responsive Design** — Output HTML otomatis menyesuaikan tampilan mobile dan desktop
- **100% Static** — Tidak butuh server backend, deploy langsung di GitHub Pages

---

## 📁 Struktur Repository

```
leo08/
│
├── index.html                  ← Menu utama pilih site
│
├── ibc138.html                 ← Generator IBC138
├── masterbet188.html           ← Generator MASTERBET188
├── wso288.html                 ← Generator WSO288
├── kuatbet.html                ← Generator KUATBET
├── hkb77.html                  ← Generator HKB77
│
├── ibc138-auto.html            ← Auto Embed (loader ringan, logo DB eksternal)
├── masterbet188-auto.html      ← Auto Embed
├── wso288-auto.html            ← Auto Embed
├── kuatbet-auto.html           ← Auto Embed
├── hkb77-auto.html             ← Auto Embed
│
├── ibc138-main.js              ← Script eksternal untuk WordPress embed
├── masterbet188-main.js        ← Script eksternal untuk WordPress embed
├── wso288-main.js              ← Script eksternal untuk WordPress embed
├── kuatbet-main.js             ← Script eksternal untuk WordPress embed
├── hkb77-main.js               ← Script eksternal untuk WordPress embed
│
├── logo-db-0.js … logo-db-9.js ← Database logo tim (30.000+ entries, split 10 file)
├── logo-db.js                  ← ★ Override logo manual (di-load paling akhir)
│
└── README.md
```

---

## 🚀 Cara Deploy ke GitHub Pages

1. **Push** semua file ke repository GitHub
2. Buka **Settings** → **Pages**
3. Pilih Source: **branch `main`** (atau `root`), folder: **`/ (root)`**
4. Tunggu build selesai, akses via:

```
https://shortcutpro.github.io/leo08/
https://shortcutpro.github.io/leo08/ibc138.html
https://shortcutpro.github.io/leo08/masterbet188.html
https://shortcutpro.github.io/leo08/wso288.html
https://shortcutpro.github.io/leo08/kuatbet.html
https://shortcutpro.github.io/leo08/hkb77.html
```

---

## 📝 Format Input Prediksi

Paste teks prediksi ke dalam textarea generator dengan format berikut:

```
WORLD CUP 2026 [ IN CANADA, MEXICO & USA ]
19/07 04:00 WIB France VS England 0 : 2

NORWAY ELITESERIEN
18/07 19:00 WIB [6] Ham-Kam VS [1] Tromso 2 : 1
18/07 21:00 WIB [15] Kristiansund VS [7] Sarpsborg 08 1 : 3
```

**Aturan parsing:**

| Elemen | Keterangan |
|--------|-----------|
| Baris tanpa jam | Otomatis dikenali sebagai **nama liga** |
| `[6]`, `[1]` dst | Angka klasemen — otomatis **di-strip**, tidak tampil di output |
| Skor | Bisa pakai `:`, `-`, atau en-dash `–` sebagai pemisah |
| Skor pecahan handicap (`1/2`, `3/4`) | **Ditolak otomatis** — bukan skor prediksi |
| Suffix `[W]`, `U19`, `U21` | Otomatis dibersihkan saat lookup logo |

---

## ⚡ Auto Embed (`*-auto.html`)

File auto embed adalah versi **standalone loader ringan** yang bisa langsung dibuka atau ditanam di halaman:

- **Auto fetch** prediksi dari source URL via multi-proxy fallback (AllOrigins → Hexlet → CodeTabs → corsproxy.io)
- **Auto refresh** setiap 5 menit
- **Hanya membaca section PREDIKSI** — section JADWAL berisi angka handicap tidak akan pernah ikut tampil
- **Logo DB di-load eksternal** dari repo ini (`logo-db-0.js` s/d `logo-db-9.js` + `logo-db.js`) — edit satu file, semua brand ikut berubah
- **Warna dan branding** otomatis sesuai masing-masing brand
- **Tanggal header** otomatis mengikuti data, format `27 Juli - 28 Juli 2026`

---

## 🌐 Auto Embed untuk WordPress (`*-main.js`)

Paste kode berikut ke halaman WordPress (**Custom HTML block**) sesuai brand:

### IBC138

```html
<!-- IBC138 Auto Embed — WordPress (Custom HTML block) -->
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
<script src="https://shortcutpro.github.io/leo08/ibc138-main.js"></script>
```

### MASTERBET188

```html
<!-- MASTERBET188 Auto Embed — WordPress (Custom HTML block) -->
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
<script src="https://shortcutpro.github.io/leo08/masterbet188-main.js"></script>
```

### WSO288

```html
<!-- WSO288 Auto Embed — WordPress (Custom HTML block) -->
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
<script src="https://shortcutpro.github.io/leo08/wso288-main.js"></script>
```

### KUATBET

```html
<!-- KUATBET Auto Embed — WordPress (Custom HTML block) -->
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
<script src="https://shortcutpro.github.io/leo08/kuatbet-main.js"></script>
```

### HKB77

```html
<!-- HKB77 Auto Embed — WordPress (Custom HTML block) -->
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
<script src="https://shortcutpro.github.io/leo08/hkb77-main.js"></script>
```

---

## 🔧 Tambah / Override Logo Manual

Edit file **`logo-db.js`** — file ini di-load **paling akhir** sehingga otomatis menimpa entry dari database utama (`logo-db-0.js` s/d `logo-db-9.js`):

```javascript
Object.assign(LOGO_DB, {
    "manchester united": "https://example.com/logo-manu.png",
    "ham-kam":           "https://example.com/logo-hamkam.png",
    "persib bandung":    "https://example.com/logo-persib.png"
});
```

> ⚠️ Key (nama tim) harus **lowercase**.

---

## ⚙️ Konfigurasi Brand

Setiap file HTML generator punya blok konfigurasi `SITES` sendiri untuk mengatur identitas visual:

```javascript
var SITES = {
  ibc138: {
    name:    'IBC138',
    logo:    'https://...logo.png',
    favicon: 'https://...favicon.png',
    bg:      '#000000',
    cssVars: {
      '--primary':   '#FF6600',
      '--bg-deep':   '#000000',
      '--text-color':'#ffe8d0'
    }
  }
};
```

---

## 🔍 Logo Lookup — 8-Step Fuzzy Matching

Sistem pencarian logo menggunakan 8 langkah matching bertingkat: exact match → cleaned name → strip angka → strip bracket → strip prefix (FC/AC/SC) → strip suffix (U19/U21/[W]) → partial word → fuzzy contains. Jika semua gagal → SVG fallback inisial tim dengan warna brand.

---

## 🛠️ Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Database Logo | JavaScript Object (`LOGO_DB`), 30.000+ entries |
| Hosting | GitHub Pages (static) |
| Data Source | Auto fetch via multi-proxy CORS |

---

## 📄 Lisensi

Internal use only — **ShortcutPro** © 2026

---

> Dibuat oleh **[shortcutpro](https://github.com/shortcutpro)** — Pure HTML/JS, zero dependencies, zero backend.
