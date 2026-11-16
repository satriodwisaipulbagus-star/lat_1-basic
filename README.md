# Portfolio Satrio

Website portfolio pribadi yang menampilkan profil dan project-project yang pernah saya kerjakan. Dibuat dengan HTML, Tailwind CSS, dan sedikit JavaScript.

## Fitur

- Halaman utama (`index.html`) berisi profil dan informasi singkat
- Halaman project (`projects.html`) berisi daftar project
- Tampilan responsif untuk desktop dan mobile
- Styling menggunakan Tailwind CSS

## Teknologi

- HTML5
- Tailwind CSS v4
- JavaScript

## Struktur Folder

```
.
├── assets/
│   ├── images/        # Foto profil dan gambar project
│   └── js/
│       └── main.js    # Script JavaScript
├── dist/
│   └── output.css     # Hasil build Tailwind CSS
├── src/
│   └── input.css      # File sumber Tailwind CSS
├── index.html
├── projects.html
└── package.json
```

## Cara Menjalankan di Komputer

1. Clone repository ini:

   ```bash
   git clone https://github.com/satriodwisaipulbagus-star/lat_1-basic.git
   cd lat_1-basic
   ```

2. Install dependency:

   ```bash
   npm install
   ```

3. Jalankan Tailwind agar CSS ter-build otomatis saat ada perubahan:

   ```bash
   npx @tailwindcss/cli -i ./src/input.css -o ./dist/output.css --watch
   ```

4. Buka `index.html` di browser, atau gunakan ekstensi **Live Server** di VS Code.

## Demo

https://satriodwisaipulbagus-star.github.io/lat_1-basic/

> Demo aktif setelah GitHub Pages diaktifkan di **Settings → Pages**.

## Author

**Satrio**
GitHub: [@satriodwisaipulbagus-star](https://github.com/satriodwisaipulbagus-star)
