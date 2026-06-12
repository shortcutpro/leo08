# IBC Auto Generator — GitHub Pages Edition

Generator prediksi bola multi-site (IBC138, MASTERBET188, WSO288, KUATBET, HKB77) — pure HTML/JS, tanpa PHP backend.

## 🌐 Live Demo
> Deploy ke GitHub Pages: `https://<username>.github.io/<repo>/generator.html`

## 📁 Struktur Repo

```
ibcauto-github/
├── index.html              ← Halaman utama / redirect
├── generator.html          ← App generator prediksi utama
├── README.md
└── assets/
    ├── css/
    │   └── style.css       ← Style global (optional, sudah inline di generator)
    └── js/
        └── logo-db.js      ← Logo database lokal (override untuk tim populer)
```

## 🚀 Deploy ke GitHub Pages

1. Push semua file ke repo GitHub
2. Settings → Pages → Source: `main` branch, folder: `/ (root)`
3. Akses via `https://<username>.github.io/<repo>/generator.html`
	- `https://shortcutpro.github.io/leo08/generator.html`
	- `https://shortcutpro.github.io/leo08/ibc138.html`
	- `https://shortcutpro.github.io/leo08/hkb77.html`
	- `https://shortcutpro.github.io/leo08/kuatbet.html`
	- `https://shortcutpro.github.io/leo08/masterbet188.html`
	- `https://shortcutpro.github.io/leo08/wso288.html`

## ⚙️ Konfigurasi

Edit bagian `SITES` di `generator.html` untuk tambah/ubah site:

```js
var SITES = {
  ibc138: {
    name: 'IBC138',
    logo: 'https://...',
    ...
  }
}
```

## 📝 Perbedaan vs Versi PHP

| Fitur | PHP (leo08.page.gd) | GitHub Pages (HTML only) |
|-------|-------------------|--------------------------|
| Logo lookup backend | ✅ api_logo.php (~30k entries) | ❌ Diganti SVG fallback + logo-db.js |
| Admin panel | ✅ admin.php | ❌ Tidak ada |
| Missing logger | ✅ missing_logger.php | ❌ Dinonaktifkan |
| Auto fetch prediksi | ✅ via proxy | ✅ via proxy (sama) |
| Output HTML | ✅ | ✅ |
| Deploy gratis | ❌ InfinityFree | ✅ GitHub Pages |

## 🔧 Tambah Logo Manual

Edit `assets/js/logo-db.js`:

```js
LOGO_DB['manchester united'] = 'https://...url-logo.png';
LOGO_DB['liverpool'] = 'https://...url-logo.png';
```

Key harus **lowercase**.
