Mata Kuliah : Web Service Engineering (WSE)
Topik : RESTful API Best Practices
Nama : Muhammad Naufal Jihaadi
NIM : 230104040078
Tools : Node.js, Express.js, Postman, Nodemon, Morgan

📌 Deskripsi Project
Project ini merupakan implementasi RESTful API sederhana menggunakan Express.js dengan resource products. API ini menerapkan 7 prinsip RESTful, dilengkapi dengan fitur CRUD lengkap, validasi input, penanganan error terpusat, logging request, serta endpoint health check.

🧱 Struktur Project
P6-RESTful-BestPractice-230104040078
│
├── app.js
├── package.json
├── README.md
├── evidence/
│
└── src/
    ├── data/
    │   └── products.data.js
    ├── routes/
    │   └── products.routes.js
    ├── middlewares/
    │   ├── validateProduct.js
    │   └── errorHandler.js
    └── utils/
        └── apiResponse.js
🔗 Base URL
http://localhost:3000
📑 Daftar Endpoint API
Method	Endpoint	Deskripsi
GET	/api/health	Health check API
GET	/api/products	Menampilkan semua produk
GET	/api/products/:id	Menampilkan produk berdasarkan ID
POST	/api/products	Menambahkan produk baru
PUT	/api/products/:id	Update seluruh data produk
PATCH	/api/products/:id	Update sebagian data produk
DELETE	/api/products/:id	Menghapus produk
GET	/api/products/crash/test	Simulasi error 500
📦 Format Request Body (JSON)
POST / PUT
{
  "name": "Laptop",
  "price": 10000000,
  "stock": 5
}
PATCH (contoh)
{
  "price": 9500000
}
📤 Format Response JSON
Sukses
{
  "success": true,
  "message": "Product created",
  "data": {}
}
Error
{
  "success": false,
  "message": "Field name dan price wajib diisi"
}
✅ Penerapan 7 RESTful Principles
Resource-Oriented URI
Endpoint menggunakan kata benda jamak seperti /api/products.

Proper HTTP Methods
Menggunakan GET, POST, PUT, PATCH, dan DELETE sesuai fungsi.

Stateless Communication
Server tidak menyimpan state client, semua data dikirim melalui request.

Consistent HTTP Status Codes
Menggunakan 200, 201, 204, 400, 404, dan 500 sesuai kondisi.

JSON Representation
Seluruh response menggunakan format JSON yang konsisten.

Validation & Error Handling
Validasi input dilakukan melalui middleware validateProduct, dan error global ditangani oleh errorHandler.

Discoverability & Documentation
Endpoint mudah ditebak dan terdokumentasi dengan jelas di README ini.

🧪 Pengujian API
Pengujian dilakukan menggunakan Postman untuk seluruh endpoint:

CRUD (GET, POST, PUT, PATCH, DELETE)
Validasi input (400 Bad Request)
Error handling (500 Internal Server Error)
Health check
Hasil pengujian disimpan dalam folder /evidence berupa screenshot.

⚠️ Kendala yang Dihadapi
Kesalahan awal pada konfigurasi script npm run dev
Package morgan belum terinstall
Kendala tersebut dapat diatasi dengan memperbaiki package.json dan melakukan instalasi dependency yang diperlukan.

📌 Kesimpulan
Melalui praktikum ini, diperoleh pemahaman tentang penerapan RESTful API yang baik menggunakan Express.js, termasuk desain endpoint yang benar, penggunaan HTTP method dan status code yang tepat, serta pentingnya middleware untuk validasi dan error handling.

✅ Project siap dijalankan dan dikumpulkan﻿# P6-WSE-RESTful-BestPractice-230104040078


