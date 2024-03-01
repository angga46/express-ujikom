const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');

// CREATE: Menambahkan data ke dalam tabel kategoris
router.post('/api/v1/produk/', produkController.create);

// READ: Menampilkan atau mengambil semua data dari tabel kategoris
router.get('/api/v1/produk/', produkController.findAll);

// READ: Mengambil data berdasarkan id
router.get('/api/v1/produk/:id', produkController.findOne);

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
router.put('/api/v1/produk/:id', produkController.update);

// DELETE: Menghapus data sesuai id yang dikirimkan
router.delete('/api/v1/produk/:id', produkController.delete);

module.exports = router;