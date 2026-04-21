# API Manajemen Inventori Barang

[![API CI and Security Scan](https://github.com/FreyjaRingo/230083-Tugas-1-Praktikum-PPL/actions/workflows/main.yml/badge.svg)](https://github.com/FreyjaRingo/230083-Tugas-1-Praktikum-PPL/actions/workflows/main.yml)

## 1. Deskripsi Project
Project ini adalah sebuah **API Manajemen Inventori Barang** sederhana yang dibangun menggunakan Express.js. API ini menyediakan fungsionalitas CRUD (Create, Read, Update, Delete) untuk mengelola data barang inventori, seperti melihat daftar barang, menambahkan barang baru, memperbarui informasi barang (nama dan stok), serta menghapus barang dari inventori.

## 2. Dokumentasi API

### Endpoint List:
- `GET /api/inventory` : Mendapatkan seluruh daftar barang inventori.
- `GET /api/inventory/:id` : Mendapatkan detail barang inventori berdasarkan ID.
- `POST /api/inventory` : Menambahkan barang baru ke inventori (Memerlukan `name` dan `stock` di body request).
- `PUT /api/inventory/:id` : Memperbarui data barang yang sudah ada (Memerlukan `name` dan/atau `stock` di body request).
- `DELETE /api/inventory/:id` : Menghapus barang dari inventori.

### Format Response:

**Contoh Response Sukses (Success):**
```json
{
  "status": "OK",
  "data": {
    "id": "1",
    "name": "Laptop",
    "stock": 10
  },
  "errors": null
}
```

**Contoh Response Gagal (Error):**
```json
{
  "status": "ERROR",
  "data": null,
  "errors": [
    "Item not found"
  ]
}
```

## 3. Panduan Instalasi (Docker)

Aplikasi ini telah dikontainerisasi dan dapat dijalankan dengan mudah menggunakan Docker.

### Langkah-langkah menjalankan aplikasi:
Pastikan Docker dan Docker Compose sudah terpasang di sistem Anda.
Jalankan perintah berikut pada terminal di dalam direktori project:
```bash
docker-compose up --build -d
```
Atau jika menggunakan perintah Docker murni:
```bash
docker build -t app_inventory .
docker run -p 3000:3000 -d app_inventory
```

### Informasi Port:
- **Host Port**: `3000` (Port yang diakses melalui browser/Postman dari komputer host).
- **Container Port**: `3000` (Port tempat aplikasi Express berjalan di dalam container Docker).

Aplikasi dapat diakses melalui `http://localhost:3000`.

## 4. Alur Kerja Git

### Branch yang Digunakan:
- `main` : Branch utama yang ditujukan untuk produksi.
- `develop` : Branch untuk integrasi pengembangan sebelum dirilis ke `main`.
- `feature/crud-inventory` : Branch fitur yang digunakan untuk pengerjaan kode fungsionalitas CRUD pada inventori.

### Bukti Penggunaan Conventional Commits:
Project ini menerapkan spesifikasi *Conventional Commits* untuk memberikan struktur dan pemahaman yang lebih baik pada riwayat revisi. Berikut adalah cuplikan riwayat commit dari project ini:
- `ci: fix gitleaks error by setting fetch-depth to 0`
- `fix: update node version to 24 and configure test script`
- `chore: test API and update files`
- `feat: setup express server and base API structure`

## 5. Status Automasi (GitHub Actions)

Project ini menggunakan **GitHub Actions** (`API CI and Security Scan`) untuk menjalankan automasi _Continuous Integration_ dan _Security Scanning_ pada setiap Push ke branch `main` dan `develop`, serta pada setiap Pull Request ke branch `develop`.

### Workflow yang Dibuat:
- **CI untuk Tes (Unit Testing)**: Menjalankan instalasi dependensi dan pengujian otomatis (`npm test`) menggunakan Node.js versi 24 untuk memastikan bahwa setiap perubahan baru tidak merusak fungsionalitas API yang sudah ada.
- **CS untuk Scan (Security Scan)**: Menjalankan pemindaian repositori secara otomatis menggunakan **Gitleaks** (`gitleaks-action`) untuk mendeteksi rahasia (secrets), API Keys, atau token sensitif lain yang secara tidak sengaja ter-commit ke dalam repositori.
