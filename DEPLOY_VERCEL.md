# Panduan Step-by-Step Deploy ke Vercel

Panduan lengkap untuk mengunggah dan men-deploy website portfolio **Deni Hidayat — Principal Software Engineer** ke **Vercel** hingga online dan bisa diakses publik dengan HTTPS gratis.

---

## Daftar Isi
1. [Persiapan Awal](#1-persiapan-awal)
2. [Metode 1: Deploy via GitHub (Sangat Direkomendasikan)](#2-metode-1-deploy-via-github-sangat-direkomendasikan)
3. [Metode 2: Deploy Cepat via Terminal (Vercel CLI)](#3-metode-2-deploy-cepat-via-terminal-vercel-cli)
4. [Mengatur Custom Domain (Opsional)](#4-mengatur-custom-domain-opsional)
5. [Cara Update Website di Masa Depan](#5-cara-update-website-di-masa-depan)
6. [Troubleshooting / Kendala Umum](#6-troubleshooting--kendala-umum)

---

## 1. Persiapan Awal

Sebelum mulai, pastikan Anda memiliki:
1. **Akun GitHub**: Daftar di [github.com](https://github.com/) jika belum punya.
2. **Akun Vercel**: Daftar atau Login di [vercel.com](https://vercel.com/) (disarankan login menggunakan opsi **Continue with GitHub** agar akun otomatis terhubung).
3. Project lokal ini sudah dalam kondisi siap deploy (sudah diuji build `npm run build` sukses).

---

## 2. Metode 1: Deploy via GitHub (Sangat Direkomendasikan)

Dengan metode ini, setiap kali Anda melakukan update code dan melakukan `git push`, Vercel akan **otomatis melakukan build & redeploy** tanpa perlu upload manual lagi.

### Langkah 1: Buat Repository Baru di GitHub
1. Buka browser dan login ke akun [GitHub](https://github.com/).
2. Di pojok kanan atas, klik ikon `+` lalu pilih **New repository** (atau akses langsung [github.com/new](https://github.com/new)).
3. Isi informasi repository:
   - **Repository name**: misalnya `deni-hidayat-portfolio` atau `anti_slop`.
   - **Visibility**: Pilih **Public** (atau **Private** jika ingin kode hanya dilihat sendiri).
   - Biarkan opsi *Initialize this repository with* (**Add a README file**, **Add .gitignore**, dll.) **TIDAK DICENTANG** karena project lokal sudah memilikinya.
4. Klik tombol hijau **Create repository**.
5. Salin URL HTTPS repository Anda, contoh:  
   `https://github.com/USERNAME_ANDA/deni-hidayat-portfolio.git`

---

### Langkah 2: Hubungkan Project Lokal ke GitHub
Buka terminal (PowerShell / Command Prompt) di folder project ini (`c:\Users\Dev\Desktop\anti_slop`), lalu jalankan perintah berikut:

```bash
# 1. Pastikan branch utama bernama main
git branch -M main

# 2. Hubungkan repository lokal ke GitHub (ganti URL di bawah dengan URL repo Anda)
git remote add origin https://github.com/USERNAME_ANDA/deni-hidayat-portfolio.git

# 3. Push kode ke GitHub
git push -u origin main
```

*(Jika diminta login oleh GitHub, selesaikan otentikasi browser atau gunakan Personal Access Token).*

---

### Langkah 3: Import Project di Dashboard Vercel
1. Buka dan login ke dashboard [vercel.com](https://vercel.com/).
2. Pada halaman utama (Overview), klik tombol **Add New...** di pojok kanan atas, lalu pilih **Project**.
3. Pada bagian **Import Git Repository**, cari repository yang baru Anda push tadi (misal: `deni-hidayat-portfolio`).
   - *Catatan: Jika repository belum muncul, klik tombol **Configure GitHub App** untuk memberikan izin akses Vercel ke repository Anda.*
4. Klik tombol biru **Import** di sebelah nama repository.

---

### Langkah 4: Konfigurasi Project di Vercel
Pada halaman **Configure Project**:
1. **Project Name**: Bisa dibiarkan default atau diubah sesuai keinginan (nama ini akan menjadi subdomain awal Anda, contoh: `deni-hidayat.vercel.app`).
2. **Framework Preset**: Vercel akan otomatis mendeteksi **Next.js**.
3. **Root Directory**: Biarkan `./` (default).
4. **Build and Output Settings**: Biarkan default (Vercel otomatis menjalankan `npm run build` dan mendeteksi folder `.next`).
5. **Environment Variables**: Project portfolio ini tidak memerlukan file `.env` khusus untuk tampilan utamanya, jadi bagian ini bisa dikosongkan.

---

### Langkah 5: Deploy!
1. Klik tombol **Deploy**.
2. Vercel akan memulai proses deployment:
   - *Cloning repository*
   - *Installing dependencies (`npm install`)*
   - *Running build (`next build`)*
   - *Generating static pages & optimizing assets*
3. Proses ini biasanya memakan waktu sekitar **45–90 detik**.
4. Setelah selesai, layar akan menampilkan animasi konfeti dan tulisan:  
   **"Congratulations! Your project has been deployed."**
5. Klik screenshot halaman atau tombol **Continue to Dashboard** / **Visit** untuk langsung melihat website Anda secara online (misal: `https://deni-hidayat-portfolio.vercel.app`).

---

## 3. Metode 2: Deploy Cepat via Terminal (Vercel CLI)

Jika Anda tidak ingin menghubungkan ke GitHub dan ingin langsung deploy dari command line komputer Anda:

### Langkah 1: Jalankan Vercel CLI
Buka terminal di folder project, lalu ketik:

```bash
npx vercel
```

### Langkah 2: Ikuti Panduan Interaktif
Terminal akan menanyakan beberapa pertanyaan:
1. `Log in to Vercel`: Tekan Enter untuk membuka browser dan login ke akun Vercel Anda.
2. `Set up and deploy “...\anti_slop”?`: Ketik `y` lalu Enter.
3. `Which scope do you want to deploy to?`: Pilih akun Anda (tekan Enter).
4. `Link to existing project?`: Ketik `n` (No) lalu Enter.
5. `What’s your project’s name?`: Tekan Enter untuk menggunakan nama default, atau ketik nama baru (misal: `deni-hidayat-cv`).
6. `In which directory is your code located?`: Tekan Enter untuk `./`.
7. `Want to modify settings?`: Ketik `n` lalu Enter (pengaturan Next.js sudah otomatis terkonfigurasi).

Terminal akan memproses build dan memberikan **Preview URL**.

### Langkah 3: Deploy ke Production
Untuk men-deploy langsung ke domain production utama:

```bash
npx vercel --prod
```

URL production yang aktif secara permanen akan langsung ditampilkan di terminal.

---

## 4. Mengatur Custom Domain (Opsional)

Jika Anda memiliki domain pribadi (misalnya `denihidayat.com` atau `denihidayat.id`):

1. Masuk ke dashboard project Anda di **Vercel**.
2. Klik tab **Settings** di menu atas.
3. Pilih menu **Domains** di sidebar kiri.
4. Masukkan nama domain Anda pada kolom input (contoh: `denihidayat.com`), lalu klik **Add**.
5. Vercel akan menampilkan DNS record yang perlu Anda pasang di penyedia domain Anda (misal: Niagahoster, Domainesia, Rumahweb, Cloudflare, Namecheap, dll.):
   - **Tipe A Record**: `@` diarahkan ke IP `76.76.21.21`
   - **Tipe CNAME Record**: `www` diarahkan ke `cname.vercel-dns.com`
6. Setelah DNS record ditambahkan, Vercel akan otomatis menerbitkan **SSL / HTTPS gratis** dalam beberapa menit.

---

## 5. Cara Update Website di Masa Depan

Jika ada pembaruan portofolio, sertifikat, atau teks di masa mendatang:

### Jika Menggunakan Metode GitHub:
Cukup lakukan commit dan push dari terminal Anda:
```bash
git add -A
git commit -m "update: tambahkan proyek terbaru"
git push origin main
```
Vercel akan otomatis mendeteksi push baru dan langsung memperbarui website Anda dalam 1 menit!

### Jika Menggunakan Metode Vercel CLI:
Cukup jalankan:
```bash
npx vercel --prod
```

---

## 6. Troubleshooting / Kendala Umum

1. **Build Error saat deployment**:
   - Pastikan di komputer lokal Anda perintah `npm run build` berjalan sukses tanpa error sebelum push.
   - Jangan pernah menghapus file `package.json` atau `package-lock.json`.
2. **Favicon tidak langsung berubah di browser**:
   - Browser sering menyimpan cache favicon lama. Buka website di tab Incognito / Private atau tekan `Ctrl + F5` untuk hard-refresh.
3. **Responsive Mobile**:
   - Website sudah dioptimalkan untuk mobile dengan drawer menu burger, floating action button, dan layout responsif otomatis.

---

*Dibuat untuk project portofolio **Deni Hidayat | Principal Software Engineer**.*
