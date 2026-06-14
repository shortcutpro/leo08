# ⚽ IBC Auto Generator — GitHub Pages Edition

Generator prediksi bola multi-site, **pure HTML/JS tanpa PHP backend**, siap deploy gratis di GitHub Pages.

Mendukung 5 site: **IBC138**, **MASTERBET188**, **WSO288**, **KUATBET**, dan **HKB77**.

---

## 🌐 Live Demo

Generator utama:

```
https://shortcutpro.github.io/leo08/generator.html
```

Halaman per-site:

| Site         | URL                                              |
| ------------ | ------------------------------------------------ |
| IBC138       | https://shortcutpro.github.io/leo08/ibc138.html       |
| MASTERBET188 | https://shortcutpro.github.io/leo08/masterbet188.html |
| WSO288       | https://shortcutpro.github.io/leo08/wso288.html       |
| KUATBET      | https://shortcutpro.github.io/leo08/kuatbet.html      |
| HKB77        | https://shortcutpro.github.io/leo08/hkb77.html        |

---

## 📁 Struktur Repo

Semua file berada di **root** (tanpa folder `assets/`).

```
leo08/
├── index.html              ← Halaman utama / redirect
├── generator.html          ← App generator prediksi utama
├── ibc138.html             ← Halaman embed IBC138
├── masterbet188.html       ← Halaman embed MASTERBET188
├── wso288.html             ← Halaman embed WSO288
├── kuatbet.html            ← Halaman embed KUATBET
├── hkb77.html              ← Halaman embed HKB77
├── logo-db-0.js            ┐
├── logo-db-1.js            │
├── ...                     ├── Logo database (split 10 file)
├── logo-db-9.js            ┘
└── README.md
```

> **Catatan:** Style sudah inline di dalam tiap file HTML, jadi tidak ada `style.css` terpisah.

---

## 🚀 Deploy ke GitHub Pages

1. Push semua file ke repo GitHub.
2. Buka **Settings → Pages**.
3. Pada **Source**, pilih branch (mis. `main` atau `root`), folder: `/ (root)`.
4. Tunggu beberapa menit, lalu akses:
   ```
   https://<username>.github.io/<repo>/generator.html
   ```

---

## ⚙️ Konfigurasi Site

Edit bagian `SITES` di `generator.html` untuk menambah atau mengubah site:

```js
var SITES = {
  ibc138: {
    name: 'IBC138',
    logo: 'https://...',
    // ...
  }
};
```

---

## 🖼️ Logo Database

Database logo tim dipecah ke **10 file** (`logo-db-0.js` … `logo-db-9.js`) agar lebih ringan dimuat di browser dibanding satu file JSON besar.

Untuk menambah logo manual, edit salah satu file `logo-db-*.js`:

```js
LOGO_DB['manchester united'] = 'https://...url-logo.png';
LOGO_DB['liverpool']         = 'https://...url-logo.png';
```

> **Key wajib huruf kecil (lowercase).**

---

## 📝 Perbedaan vs Versi PHP

| Fitur                | PHP (leo08.page.gd)             | GitHub Pages (HTML only)             |
| -------------------- | ------------------------------- | ------------------------------------ |
| Logo lookup backend  | ✅ `api_logo.php` (~30k entries) | ✅ Diganti `logo-db-*.js` + SVG fallback |
| Admin panel          | ✅ `admin.php`                   | ❌ Tidak ada                          |
| Missing logger       | ✅ `missing_logger.php`          | ❌ Dinonaktifkan                      |
| Auto fetch prediksi  | ✅ via proxy                     | ✅ via proxy (sama)                   |
| Output HTML          | ✅                               | ✅                                    |
| Hosting              | ❌ InfinityFree                  | ✅ GitHub Pages (gratis)              |

---

## 🛠️ Teknologi

- HTML / CSS / JavaScript murni (tanpa build step)
- Logo database lokal (JS, split 10 file)
- Auto-fetch prediksi via CORS proxy
