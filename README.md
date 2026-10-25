# Laporan RHK 2026

Aplikasi laporan RHK — tampilan di GitHub Pages, data diproses Google Apps Script.

## Pasang
1. Di Apps Script: tempel `Code.gs` terbaru → Deploy → Kelola deployment → Edit → Versi baru
   (Jalankan sebagai: Saya · Akses: Siapa saja). Salin link yang berakhiran `/exec`.
2. Link server sudah terpasang di `index.html` (baris `const API_URL`). Jika deployment Apps Script diganti,
   ganti link di baris itu dengan link `/exec` yang baru.
3. Unggah semua file di folder ini ke repository GitHub, lalu aktifkan
   Settings → Pages → Branch: main → / (root).
4. Bagikan link `https://<nama-akun>.github.io/<nama-repo>/` ke member.

© 2026 Varhamxiank.com
