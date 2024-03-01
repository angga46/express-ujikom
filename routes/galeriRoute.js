const express = require('express');
const router = express.Router();
const galeriController = require('../controllers/galeriController');

// CREATE: Menambahkan data ke dalam tabel kategoris
router.post('/api/v1/galeri/', galeriController.create);

// READ: Menampilkan atau mengambil semua data dari tabel kategoris
router.get('/api/v1/galeri/', galeriController.findAll);

// READ: Mengambil data berdasarkan id
router.get('/api/v1/galeri/:id', galeriController.findOne);

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
router.put('/api/v1/galeri/:id', galeriController.update);

// DELETE: Menghapus data sesuai id yang dikirimkan
router.delete('/api/v1/galeri/:id', galeriController.delete);

module.exports = router;